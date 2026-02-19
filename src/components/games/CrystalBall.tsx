"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics / interaction constants
const MERGE_DISTANCE = 120;
const SNAP_DISTANCE = 180;
const REPEL_FORCE = 8;
const PARTICLE_COUNT = 30;
const SPARKLE_COUNT = 15;
const MIST_LAYERS = 3;

// ─── Types ───────────────────────────────────────────────────

interface Story {
  id: number;
  beginning: string;
  correctEnding: string;
  wrongEnding1: string;
  wrongEnding2: string;
  difficulty: number; // 1-4
  theme: string;
}

interface PredictionBall {
  id: number;
  text: string;
  isCorrect: boolean;
  x: number;
  y: number;
  originX: number;
  originY: number;
  scale: number;
  glowIntensity: number;
}

interface DragState {
  ballId: number;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
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
  type: 'sparkle' | 'mist' | 'merge' | 'repel' | 'ambient';
}

interface MergeEffect {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

interface RepelEffect {
  id: number;
  ballId: number;
  timestamp: number;
}

interface CompletedStory {
  id: number;
  beginning: string;
  ending: string;
  theme: string;
  levelCompleted: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'bookOfProphecies' | 'bonusRound';

// ─── Story Data ──────────────────────────────────────────────

const ALL_STORIES: Story[] = [
  {
    id: 1,
    beginning: "Dark clouds filled the sky. The wind began to blow harder and harder. Mum told everyone to come inside quickly.",
    correctEnding: "It started to rain heavily.",
    wrongEnding1: "They all went swimming at the beach.",
    wrongEnding2: "A dragon appeared in the garden.",
    difficulty: 1,
    theme: "weather",
  },
  {
    id: 2,
    beginning: "Tom's tummy was growling loudly. He looked up at the clock on the wall. It was twelve o'clock.",
    correctEnding: "Tom went to eat his lunch.",
    wrongEnding1: "Tom decided to go for a long run.",
    wrongEnding2: "The clock turned into a sandwich.",
    difficulty: 1,
    theme: "daily life",
  },
  {
    id: 3,
    beginning: "The baby bird stood at the edge of the nest. It spread its tiny wings wide and looked down at the ground far below.",
    correctEnding: "The baby bird tried to fly.",
    wrongEnding1: "The baby bird started to sing a song.",
    wrongEnding2: "The nest turned into a rocket ship.",
    difficulty: 1,
    theme: "nature",
  },
  {
    id: 4,
    beginning: "Lily put on her favourite swimsuit. She grabbed her towel and sunscreen from the bathroom shelf.",
    correctEnding: "Lily was going to the beach or pool.",
    wrongEnding1: "Lily sat down to do her homework.",
    wrongEnding2: "Lily flew to the moon on her towel.",
    difficulty: 1,
    theme: "activities",
  },
  {
    id: 5,
    beginning: "Dad got out the flour, eggs, and sugar from the pantry. He put on his favourite stripy apron and smiled.",
    correctEnding: "Dad was going to bake something yummy.",
    wrongEnding1: "Dad went outside to mow the lawn.",
    wrongEnding2: "The eggs started dancing on the bench.",
    difficulty: 2,
    theme: "family",
  },
  {
    id: 6,
    beginning: "The dog ran to the front door, barking excitedly. Its tail was wagging so fast it was a blur. The doorbell had just rung.",
    correctEnding: "Someone was coming to visit.",
    wrongEnding1: "The dog wanted to take a bath.",
    wrongEnding2: "The door opened a portal to space.",
    difficulty: 2,
    theme: "pets",
  },
  {
    id: 7,
    beginning: "Jack put on his yellow raincoat and gumboots. He grabbed his big red umbrella from beside the door.",
    correctEnding: "Jack was going outside in the rain.",
    wrongEnding1: "Jack was getting ready for bed.",
    wrongEnding2: "Jack's umbrella started playing music.",
    difficulty: 2,
    theme: "weather",
  },
  {
    id: 8,
    beginning: "All the children sat down quietly in a circle on the mat. The teacher picked up a big, colourful book and held it up high.",
    correctEnding: "The teacher was going to read a story.",
    wrongEnding1: "The children went outside to play sport.",
    wrongEnding2: "The book opened and swallowed the class.",
    difficulty: 2,
    theme: "school",
  },
  {
    id: 9,
    beginning: "Mum carefully put candles on the chocolate cake. She blew up lots of bright balloons and hung up streamers around the room.",
    correctEnding: "They were getting ready for a birthday party.",
    wrongEnding1: "They were going on a camping trip.",
    wrongEnding2: "The balloons carried the house into the sky.",
    difficulty: 3,
    theme: "celebrations",
  },
  {
    id: 10,
    beginning: "The little kitten yawned widely, showing its tiny pink tongue. It stretched out and then curled up tightly on the soft cushion.",
    correctEnding: "The kitten was going to fall asleep.",
    wrongEnding1: "The kitten wanted to chase a mouse.",
    wrongEnding2: "The cushion began to fly around the room.",
    difficulty: 3,
    theme: "pets",
  },
  {
    id: 11,
    beginning: "Sam's eyes were red and puffy. A big tear rolled slowly down his cheek. He was holding his broken toy truck in both hands.",
    correctEnding: "Sam was very sad about his broken truck.",
    wrongEnding1: "Sam was laughing at a funny joke.",
    wrongEnding2: "The toy truck fixed itself and drove away.",
    difficulty: 3,
    theme: "feelings",
  },
  {
    id: 12,
    beginning: "Grandma put on her reading glasses and sat in her big comfy chair. She patted the seat next to her and said, 'Come sit with me.'",
    correctEnding: "Grandma was going to read with someone.",
    wrongEnding1: "Grandma was going to cook dinner.",
    wrongEnding2: "The chair started walking to the shops.",
    difficulty: 3,
    theme: "family",
  },
  {
    id: 13,
    beginning: "The farmer looked up at the orange sky as the sun started to set. He called his sheepdogs and opened the gate to the far paddock.",
    correctEnding: "The farmer was bringing the sheep in for the night.",
    wrongEnding1: "The farmer was planting new seeds.",
    wrongEnding2: "The sheep put on costumes for a play.",
    difficulty: 4,
    theme: "farm life",
  },
  {
    id: 14,
    beginning: "Maya found a trail of muddy footprints leading from the back door across the clean kitchen floor. Her puppy was hiding under the table.",
    correctEnding: "The puppy had made a mess coming inside with muddy paws.",
    wrongEnding1: "Maya had forgotten to clean her shoes.",
    wrongEnding2: "The footprints belonged to a friendly ghost.",
    difficulty: 4,
    theme: "detective",
  },
  {
    id: 15,
    beginning: "Ben packed his bag with a torch, his water bottle, and a sleeping bag. His dad loaded the tent into the back of the car.",
    correctEnding: "Ben and his dad were going camping.",
    wrongEnding1: "Ben was going to school for the first time.",
    wrongEnding2: "The car transformed into a submarine.",
    difficulty: 4,
    theme: "adventure",
  },
];

const BONUS_STORY: Story = {
  id: 100,
  beginning: "The young wizard opened the ancient spell book. Golden words floated off the pages into the air. The crystal on the wizard's staff began to glow brighter and brighter.",
  correctEnding: "The wizard was about to cast a powerful magic spell.",
  wrongEnding1: "The wizard decided to take a nap instead.",
  wrongEnding2: "The book asked the wizard for a glass of water.",
  difficulty: 4,
  theme: "magic",
};

// ─── Fortune Teller Reactions ────────────────────────────────

const CORRECT_REACTIONS = [
  "The stars have spoken!",
  "Your vision is clear!",
  "A true seer you are!",
  "The crystal reveals truth!",
  "Magnificent prediction!",
  "You read the signs well!",
];

const WRONG_REACTIONS = [
  "The stars say otherwise...",
  "The mist clouds your sight...",
  "Try again, young seer...",
  "Look more carefully...",
  "The crystal grows dim...",
];

const HINTS = [
  "Read the clues in the story again.",
  "What makes sense to happen next?",
  "Think about what the characters are doing.",
  "Look for the clues that tell you what is coming.",
];

// ─── Component ───────────────────────────────────────────────

interface CrystalBallProps {
  onExit?: () => void;
}

export default function CrystalBall({ onExit }: CrystalBallProps = {}) {
  // Core game state
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [magicMeter, setMagicMeter] = useState<number>(0);
  const [bonusUnlocked, setBonusUnlocked] = useState<boolean>(false);

  // Story state
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const [predictionBalls, setPredictionBalls] = useState<PredictionBall[]>([]);
  const [storyRevealed, setStoryRevealed] = useState<boolean>(false);
  const [completedStories, setCompletedStories] = useState<CompletedStory[]>([]);
  const [usedStoryIds, setUsedStoryIds] = useState<Set<number>>(new Set());

  // Interaction state
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mergeEffect, setMergeEffect] = useState<MergeEffect | null>(null);
  const [repelEffect, setRepelEffect] = useState<RepelEffect | null>(null);
  const [fortuneReaction, setFortuneReaction] = useState<string>('');
  const [hintText, setHintText] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [attemptsOnCurrent, setAttemptsOnCurrent] = useState<number>(0);
  const [fortuneTellerMood, setFortuneTellerMood] = useState<'idle' | 'amazed' | 'puzzled' | 'thinking'>('idle');
  const [storyTransition, setStoryTransition] = useState<boolean>(false);
  const [mainBallGlow, setMainBallGlow] = useState<'idle' | 'attract' | 'merge' | 'repel'>('idle');

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particleIdRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const dragStateRef = useRef<DragState | null>(null);
  const predictionBallsRef = useRef<PredictionBall[]>([]);

  // Keep refs in sync
  useEffect(() => { dragStateRef.current = dragState; }, [dragState]);
  useEffect(() => { predictionBallsRef.current = predictionBalls; }, [predictionBalls]);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 600 };
  }, []);

  // ─── Main Crystal Ball position (center-upper area) ──────
  const getMainBallPosition = useCallback((): { x: number; y: number } => {
    const size = getContainerSize();
    return {
      x: size.width / 2,
      y: Math.min(size.height * 0.32, 220),
    };
  }, [getContainerSize]);

  // ─── Particle System ───────────────────────────────────────

  const spawnParticle = useCallback((
    x: number, y: number,
    type: Particle['type'],
    hue = 270,
    count = 1
  ): void => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = type === 'merge' ? 2 + Math.random() * 4 :
                    type === 'repel' ? 3 + Math.random() * 5 :
                    type === 'sparkle' ? 0.5 + Math.random() * 1.5 :
                    0.2 + Math.random() * 0.8;
      newParticles.push({
        id: ++particleIdRef.current,
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 30,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: type === 'merge' ? 60 : type === 'repel' ? 40 : type === 'ambient' ? 120 : 80,
        size: type === 'merge' ? 3 + Math.random() * 6 :
              type === 'repel' ? 2 + Math.random() * 4 :
              1 + Math.random() * 3,
        hue: hue + (Math.random() - 0.5) * 40,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ─── Particle animation loop ───────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing' && gameScreen !== 'bonusRound') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updateParticles = (timestamp: number): void => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta,
          vx: p.vx * 0.98,
          vy: p.vy * 0.98 + (p.type === 'mist' ? -0.02 : 0),
          life: p.life - (1 / p.maxLife) * delta,
        })).filter(p => p.life > 0);
        return updated;
      });

      animationRef.current = requestAnimationFrame(updateParticles);
    };

    animationRef.current = requestAnimationFrame(updateParticles);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameScreen]);

  // ─── Ambient particles for crystal balls ───────────────────

  useEffect(() => {
    if (gameScreen !== 'playing' && gameScreen !== 'bonusRound') return;

    const interval = setInterval(() => {
      const mainPos = getMainBallPosition();
      // Main ball ambient sparkles
      spawnParticle(
        mainPos.x + (Math.random() - 0.5) * 200,
        mainPos.y + (Math.random() - 0.5) * 200,
        'ambient', 270, 1
      );
      // Occasional mist
      if (Math.random() > 0.6) {
        spawnParticle(
          mainPos.x + (Math.random() - 0.5) * 160,
          mainPos.y + (Math.random() - 0.5) * 100,
          'mist', 250, 1
        );
      }
    }, 300);

    return () => clearInterval(interval);
  }, [gameScreen, getMainBallPosition, spawnParticle]);

  // ─── Story Selection & Level Init ──────────────────────────

  const getStoriesForLevel = useCallback((lvl: number): Story[] => {
    const difficulty = Math.min(Math.ceil(lvl / 3), 4);
    // Get stories at or below current difficulty, preferring unused ones
    const available = ALL_STORIES.filter(s => s.difficulty <= difficulty && !usedStoryIds.has(s.id));
    if (available.length > 0) return available;
    // If all used, reset and return all at difficulty
    return ALL_STORIES.filter(s => s.difficulty <= difficulty);
  }, [usedStoryIds]);

  const initStory = useCallback((story: Story): void => {
    const size = getContainerSize();
    setCurrentStory(story);
    setStoryRevealed(false);
    setAttemptsOnCurrent(0);
    setShowHint(false);
    setHintText('');
    setFortuneReaction('');
    setFortuneTellerMood('thinking');
    setMainBallGlow('idle');
    setStoryTransition(false);
    setMergeEffect(null);
    setRepelEffect(null);
    setParticles([]);

    // Shuffle endings into prediction balls
    const endings = [
      { text: story.correctEnding, isCorrect: true },
      { text: story.wrongEnding1, isCorrect: false },
      { text: story.wrongEnding2, isCorrect: false },
    ];
    // Fisher-Yates shuffle
    for (let i = endings.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [endings[i], endings[j]] = [endings[j], endings[i]];
    }

    const ballWidth = Math.min(140, (size.width - 80) / 3);
    const spacing = Math.min(160, (size.width - 40) / 3);
    const startX = size.width / 2 - spacing;
    const ballY = Math.min(size.height * 0.75, size.height - 150);

    const balls: PredictionBall[] = endings.map((ending, i) => {
      const x = startX + i * spacing;
      return {
        id: i + 1,
        text: ending.text,
        isCorrect: ending.isCorrect,
        x,
        y: ballY,
        originX: x,
        originY: ballY,
        scale: 1,
        glowIntensity: 0.5,
      };
    });

    setPredictionBalls(balls);

    setTimeout(() => setFortuneTellerMood('idle'), 1500);
  }, [getContainerSize]);

  const initLevel = useCallback((lvl: number): void => {
    const stories = getStoriesForLevel(lvl);
    const story = stories[Math.floor(Math.random() * stories.length)];
    setUsedStoryIds(prev => new Set([...prev, story.id]));
    initStory(story);
  }, [getStoriesForLevel, initStory]);

  // ─── Game Flow ─────────────────────────────────────────────

  const startGame = (): void => {
    setGameScreen('playing');
    setLevel(1);
    setScore(0);
    setStreak(0);
    setMagicMeter(0);
    setBonusUnlocked(false);
    setCompletedStories([]);
    setUsedStoryIds(new Set());
    initLevel(1);
  };

  const nextLevel = (): void => {
    const newLevel = level + 1;
    if (newLevel > 10) {
      // Game complete — show book of prophecies
      setGameScreen('bookOfProphecies');
      return;
    }
    setLevel(newLevel);
    setGameScreen('playing');
    setStoryTransition(true);
    setTimeout(() => {
      initLevel(newLevel);
    }, 500);
  };

  const startBonusRound = (): void => {
    setGameScreen('bonusRound');
    initStory(BONUS_STORY);
  };

  // ─── Drag Handling ─────────────────────────────────────────

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    ball: PredictionBall
  ): void => {
    if (storyRevealed || storyTransition) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setDragState({
      ballId: ball.id,
      offsetX: clientX - rect.left - ball.x,
      offsetY: clientY - rect.top - ball.y,
      startX: ball.x,
      startY: ball.y,
    });
  };

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent): void => {
    const ds = dragStateRef.current;
    if (!ds || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(60, Math.min(rect.width - 60, clientX - rect.left - ds.offsetX));
    const newY = Math.max(60, Math.min(rect.height - 60, clientY - rect.top - ds.offsetY));

    setPredictionBalls(prev => prev.map(b =>
      b.id === ds.ballId ? { ...b, x: newX, y: newY, scale: 1.1 } : b
    ));

    // Check proximity to main ball for glow effect
    const mainPos = getMainBallPosition();
    const dx = newX - mainPos.x;
    const dy = newY - mainPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < SNAP_DISTANCE) {
      setMainBallGlow('attract');
    } else {
      setMainBallGlow('idle');
    }
  }, [getMainBallPosition]);

  const handleCorrectPrediction = useCallback((ball: PredictionBall): void => {
    const mainPos = getMainBallPosition();
    const streakBonus = streak >= 2 ? streak * 5 : 0;
    const levelBonus = level * 10;
    const pointsEarned = 50 + levelBonus + streakBonus;

    // Spectacular merge effect
    setMergeEffect({ id: Date.now(), x: mainPos.x, y: mainPos.y, timestamp: Date.now() });
    setMainBallGlow('merge');
    spawnParticle(mainPos.x, mainPos.y, 'merge', 280, PARTICLE_COUNT);
    spawnParticle(mainPos.x, mainPos.y, 'sparkle', 45, SPARKLE_COUNT); // gold sparkles

    // Update game state
    setScore(s => s + pointsEarned);
    setStreak(s => s + 1);
    setMagicMeter(prev => {
      const newVal = Math.min(prev + 12 + level, 100);
      if (newVal >= 100 && !bonusUnlocked) {
        setBonusUnlocked(true);
      }
      return newVal;
    });
    setStoryRevealed(true);
    setFortuneReaction(CORRECT_REACTIONS[Math.floor(Math.random() * CORRECT_REACTIONS.length)]);
    setFortuneTellerMood('amazed');

    // Add to completed stories
    if (currentStory) {
      setCompletedStories(prev => [...prev, {
        id: currentStory.id,
        beginning: currentStory.beginning,
        ending: ball.text,
        theme: currentStory.theme,
        levelCompleted: level,
      }]);
    }

    // Remove non-correct balls
    setPredictionBalls(prev => prev.filter(b => b.isCorrect));

    setTimeout(() => {
      setMergeEffect(null);
      setMainBallGlow('idle');
    }, 1500);

    setTimeout(() => {
      if (gameScreen === 'bonusRound') {
        setGameScreen('bookOfProphecies');
      } else {
        setGameScreen('levelComplete');
      }
    }, 2500);
  }, [getMainBallPosition, streak, level, spawnParticle, bonusUnlocked, currentStory, gameScreen]);

  const handleWrongPrediction = useCallback((ball: PredictionBall): void => {
    const mainPos = getMainBallPosition();

    // Repel effect
    setRepelEffect({ id: Date.now(), ballId: ball.id, timestamp: Date.now() });
    setMainBallGlow('repel');
    spawnParticle(mainPos.x, mainPos.y, 'repel', 0, 15); // red repel sparks

    // Repel the ball away from main ball
    const dx = ball.x - mainPos.x;
    const dy = ball.y - mainPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const repelX = ball.originX + (dx / dist) * REPEL_FORCE * 10;
    const repelY = ball.originY + (dy / dist) * REPEL_FORCE * 5;

    setPredictionBalls(prev => prev.map(b =>
      b.id === ball.id
        ? { ...b, x: repelX, y: repelY, scale: 0.9, glowIntensity: 0.2 }
        : b
    ));

    // Reset streak
    setStreak(0);
    setAttemptsOnCurrent(prev => prev + 1);
    setFortuneReaction(WRONG_REACTIONS[Math.floor(Math.random() * WRONG_REACTIONS.length)]);
    setFortuneTellerMood('puzzled');

    // Show hint after 1 wrong attempt
    if (attemptsOnCurrent >= 0) {
      setTimeout(() => {
        setShowHint(true);
        setHintText(HINTS[Math.floor(Math.random() * HINTS.length)]);
      }, 800);
    }

    setTimeout(() => {
      setRepelEffect(null);
      setMainBallGlow('idle');
      setFortuneTellerMood('idle');
      // Snap ball back to origin
      setPredictionBalls(prev => prev.map(b =>
        b.id === ball.id ? { ...b, x: b.originX, y: b.originY, scale: 1, glowIntensity: 0.5 } : b
      ));
    }, 1000);
  }, [getMainBallPosition, spawnParticle, attemptsOnCurrent]);

  const handleDragEnd = useCallback((): void => {
    const ds = dragStateRef.current;
    if (!ds) return;

    const ball = predictionBallsRef.current.find(b => b.id === ds.ballId);
    if (!ball) { setDragState(null); setMainBallGlow('idle'); return; }

    const mainPos = getMainBallPosition();
    const dx = ball.x - mainPos.x;
    const dy = ball.y - mainPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < MERGE_DISTANCE) {
      // Attempt prediction
      if (ball.isCorrect) {
        handleCorrectPrediction(ball);
      } else {
        handleWrongPrediction(ball);
      }
    } else {
      // Snap back to origin
      setPredictionBalls(prev => prev.map(b =>
        b.id === ds.ballId ? { ...b, x: b.originX, y: b.originY, scale: 1 } : b
      ));
      setMainBallGlow('idle');
    }

    setDragState(null);
  }, [getMainBallPosition, handleCorrectPrediction, handleWrongPrediction]);

  // ─── Drag event listeners ──────────────────────────────────

  useEffect(() => {
    if (!dragState) return;
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
  }, [dragState, handleDragMove, handleDragEnd]);

  // ─── Render: Intro Screen ─────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="crystal-ball-game">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="star-field">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
              }} />
            ))}
          </div>
          <div className="velvet-curtain left-curtain" />
          <div className="velvet-curtain right-curtain" />
          <div className="floating-candles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="candle" style={{
                left: `${10 + i * 16}%`,
                animationDelay: `${i * 0.5}s`,
              }}>
                <div className="candle-flame" />
                <div className="candle-body" />
              </div>
            ))}
          </div>
          <div className="intro-content">
            <div className="intro-crystal-ball">
              <div className="intro-ball-outer">
                <div className="intro-ball-inner">
                  <div className="intro-mist mist-1" />
                  <div className="intro-mist mist-2" />
                  <div className="intro-mist mist-3" />
                </div>
                <div className="intro-ball-shine" />
              </div>
              <div className="intro-ball-base" />
            </div>
            <h1 className="game-title">Crystal Ball</h1>
            <p className="game-subtitle">Story Prediction Game</p>
            <div className="intro-instructions">
              <h3>Become a Fortune Teller&apos;s Apprentice!</h3>
              <div className="intro-step">
                <span className="step-icon">1</span>
                <p><strong>READ</strong> the story beginning in the crystal ball</p>
              </div>
              <div className="intro-step">
                <span className="step-icon">2</span>
                <p><strong>PREDICT</strong> what happens next</p>
              </div>
              <div className="intro-step">
                <span className="step-icon">3</span>
                <p><strong>DRAG</strong> your prediction to the main crystal ball</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-crystal">&#x2728;</span>
              Begin Your Vision Quest
              <span className="btn-crystal">&#x2728;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Level Complete Screen ─────────────────────────

  if (gameScreen === 'levelComplete') {
    return (
      <div className="crystal-ball-game">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="star-field">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
              }} />
            ))}
          </div>
          <div className="complete-content">
            <div className="complete-crystal-glow" />
            <h1 className="complete-title">Vision {level} Complete!</h1>
            <div className="complete-story-card">
              <p className="complete-story-text">{currentStory?.beginning}</p>
              <p className="complete-ending-text">{currentStory?.correctEnding}</p>
            </div>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-label">Score</span>
                <span className="stat-value">{score}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Streak</span>
                <span className="stat-value">{streak} &#x1F525;</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Magic Power</span>
                <div className="mini-magic-meter">
                  <div className="mini-magic-fill" style={{ width: `${magicMeter}%` }} />
                </div>
              </div>
            </div>
            <div className="complete-buttons">
              {bonusUnlocked && level >= 10 ? (
                <button className="next-btn bonus-btn" onClick={startBonusRound}>
                  &#x2728; Bonus: The Wizard&apos;s Tale &#x2728;
                </button>
              ) : (
                <button className="next-btn" onClick={nextLevel}>
                  Vision {level + 1} &#x2192;
                </button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Main Menu
              </button>
              {completedStories.length > 0 && (
                <button className="book-btn" onClick={() => setGameScreen('bookOfProphecies')}>
                  &#x1F4D6; Book of Prophecies ({completedStories.length})
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Book of Prophecies ────────────────────────────

  if (gameScreen === 'bookOfProphecies') {
    return (
      <div className="crystal-ball-game">
        <style>{styles}</style>
        <div className="book-screen">
          <div className="star-field">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
              }} />
            ))}
          </div>
          <div className="book-content">
            <h1 className="book-title">&#x1F4D6; Book of Prophecies &#x1F4D6;</h1>
            <p className="book-subtitle">Your collection of completed visions</p>
            <div className="book-scroll">
              {completedStories.length === 0 ? (
                <div className="book-empty">
                  <p>Your book is empty. Complete visions to fill it!</p>
                </div>
              ) : (
                completedStories.map((story, i) => (
                  <div key={story.id + '-' + i} className="prophecy-card">
                    <div className="prophecy-number">Vision {i + 1}</div>
                    <div className="prophecy-theme">{story.theme}</div>
                    <p className="prophecy-beginning">{story.beginning}</p>
                    <p className="prophecy-ending">{story.ending}</p>
                    <div className="prophecy-level">Level {story.levelCompleted}</div>
                  </div>
                ))
              )}
            </div>
            <div className="book-buttons">
              {level <= 10 ? (
                <button className="next-btn" onClick={() => {
                  setGameScreen('playing');
                  if (!currentStory || storyRevealed) {
                    initLevel(level);
                  }
                }}>
                  Continue Playing
                </button>
              ) : null}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Playing / Bonus Round ─────────────────────────

  const mainPos = getMainBallPosition();
  const isDragging = dragState !== null;
  const draggedBall = isDragging ? predictionBalls.find(b => b.id === dragState.ballId) : null;
  const dragDist = draggedBall
    ? Math.sqrt((draggedBall.x - mainPos.x) ** 2 + (draggedBall.y - mainPos.y) ** 2)
    : Infinity;
  const isNearMain = dragDist < SNAP_DISTANCE;

  return (
    <div className="crystal-ball-game">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
              &#x2190;
            </button>
            <div className="level-badge">
              {gameScreen === 'bonusRound' ? 'Bonus' : `Vision ${level}`}
            </div>
          </div>
          <div className="header-center">
            <div className="magic-meter-container">
              <span className="magic-label">&#x2728; Magic</span>
              <div className="magic-meter">
                <div className="magic-fill" style={{ width: `${magicMeter}%` }} />
                {magicMeter >= 100 && <div className="magic-full-glow" />}
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">&#x2B50;</span>
              <span>{score}</span>
            </div>
            {streak > 1 && (
              <div className="streak-badge">
                &#x1F525; {streak}
              </div>
            )}
          </div>
        </div>

        {/* Game area */}
        <div className="game-container" ref={containerRef}>
          {/* Star field background */}
          <div className="star-field">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="star" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                width: 1 + Math.random() * 3,
                height: 1 + Math.random() * 3,
              }} />
            ))}
          </div>

          {/* Connection line when dragging near */}
          {isDragging && draggedBall && isNearMain && (
            <svg className="connection-line">
              <defs>
                <linearGradient id="magicLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <line
                x1={draggedBall.x}
                y1={draggedBall.y}
                x2={mainPos.x}
                y2={mainPos.y}
                stroke="url(#magicLineGrad)"
                strokeWidth="3"
                strokeDasharray="8,6"
                opacity={Math.max(0.3, 1 - dragDist / SNAP_DISTANCE)}
              />
            </svg>
          )}

          {/* Main Crystal Ball */}
          <div
            className={`main-crystal-ball ${mainBallGlow} ${storyRevealed ? 'revealed' : ''} ${storyTransition ? 'transitioning' : ''}`}
            style={{ left: mainPos.x, top: mainPos.y }}
          >
            <div className="main-ball-glow-ring" />
            <div className="main-ball-outer">
              <div className="main-ball-inner">
                <div className="main-mist mist-layer-1" />
                <div className="main-mist mist-layer-2" />
                <div className="main-mist mist-layer-3" />
                <div className="main-ball-text">
                  {storyRevealed && currentStory ? (
                    <div className="story-complete">
                      <p className="story-beginning-text">{currentStory.beginning}</p>
                      <p className="story-ending-reveal">{currentStory.correctEnding}</p>
                    </div>
                  ) : (
                    <p className="story-beginning-text">{currentStory?.beginning || ''}</p>
                  )}
                </div>
              </div>
              <div className="main-ball-shine" />
              <div className="main-ball-sparkles">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="ball-sparkle" style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.4}s`,
                  }} />
                ))}
              </div>
            </div>
            <div className="main-ball-base">
              <div className="base-gem" />
            </div>
          </div>

          {/* Fortune Teller Character */}
          <div className={`fortune-teller ${fortuneTellerMood}`} style={{
            left: Math.max(50, mainPos.x - 180),
            top: mainPos.y - 60,
          }}>
            <div className="teller-hat">
              <div className="hat-star">&#x2B50;</div>
            </div>
            <div className="teller-face">
              <div className="teller-eyes">
                <span className="teller-eye left-eye" />
                <span className="teller-eye right-eye" />
              </div>
              <div className="teller-mouth" />
            </div>
            <div className="teller-robe" />
            {fortuneReaction && (
              <div className="teller-speech">
                <p>{fortuneReaction}</p>
              </div>
            )}
          </div>

          {/* Prediction Balls */}
          {predictionBalls.map(ball => {
            const isDraggedBall = dragState?.ballId === ball.id;
            const cracked = repelEffect?.ballId === ball.id;
            return (
              <div
                key={ball.id}
                className={`prediction-ball ${isDraggedBall ? 'dragging' : ''} ${cracked ? 'cracked' : ''} ${storyRevealed && ball.isCorrect ? 'correct-reveal' : ''}`}
                style={{
                  left: ball.x,
                  top: ball.y,
                  transform: `translate(-50%, -50%) scale(${ball.scale})`,
                }}
                onMouseDown={(e) => handleDragStart(e, ball)}
                onTouchStart={(e) => handleDragStart(e, ball)}
              >
                <div className="pred-ball-outer">
                  <div className="pred-ball-inner">
                    <div className="pred-mist" />
                    <p className="pred-text">{ball.text}</p>
                  </div>
                  <div className="pred-ball-shine" />
                </div>
                <div className="pred-ball-base" />
                {cracked && (
                  <div className="crack-overlay">
                    <div className="crack-line c1" />
                    <div className="crack-line c2" />
                    <div className="crack-line c3" />
                  </div>
                )}
              </div>
            );
          })}

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
                opacity: p.life,
                backgroundColor: p.type === 'repel'
                  ? `hsl(0, 80%, ${50 + p.life * 30}%)`
                  : `hsl(${p.hue}, 80%, ${50 + p.life * 30}%)`,
                boxShadow: `0 0 ${p.size * 2}px hsl(${p.hue}, 80%, 60%)`,
              }}
            />
          ))}

          {/* Merge Effect */}
          {mergeEffect && (
            <div className="merge-effect-container" style={{ left: mergeEffect.x, top: mergeEffect.y }}>
              <div className="merge-ring ring-1" />
              <div className="merge-ring ring-2" />
              <div className="merge-ring ring-3" />
              <div className="merge-flash" />
              <div className="merge-lightning l1" />
              <div className="merge-lightning l2" />
              <div className="merge-lightning l3" />
              <div className="merge-lightning l4" />
            </div>
          )}

          {/* Hint */}
          {showHint && !storyRevealed && (
            <div className="hint-overlay">
              <div className="hint-bubble">
                <span className="hint-icon">&#x1F4A1;</span>
                <p>{hintText}</p>
              </div>
            </div>
          )}

          {/* Drag instruction */}
          {!storyRevealed && !isDragging && !fortuneReaction && (
            <div className="drag-hint">
              <p>&#x1F52E; Drag a prediction to the crystal ball &#x1F52E;</p>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="bottom-info">
            <span className="stories-count">&#x1F4D6; {completedStories.length} stories collected</span>
            {bonusUnlocked && <span className="bonus-indicator">&#x2728; Bonus unlocked!</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .crystal-ball-game {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #0c0118 0%, #1a0533 30%, #0f0225 60%, #0c0118 100%);
  }

  /* ───── Star Field ───── */

  .star-field {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .star {
    position: absolute;
    background: white;
    border-radius: 50%;
    animation: twinkle 3s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
  }

  /* ───── Velvet Curtains ───── */

  .velvet-curtain {
    position: absolute;
    top: 0;
    width: 15%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  .left-curtain {
    left: 0;
    background: linear-gradient(90deg,
      rgba(80, 10, 40, 0.9) 0%,
      rgba(80, 10, 40, 0.6) 40%,
      rgba(80, 10, 40, 0) 100%);
  }

  .right-curtain {
    right: 0;
    background: linear-gradient(270deg,
      rgba(80, 10, 40, 0.9) 0%,
      rgba(80, 10, 40, 0.6) 40%,
      rgba(80, 10, 40, 0) 100%);
  }

  /* ───── Floating Candles ───── */

  .floating-candles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
  }

  .candle {
    position: absolute;
    top: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: candleFloat 4s ease-in-out infinite;
  }

  .candle-flame {
    width: 8px;
    height: 16px;
    background: radial-gradient(ellipse at center bottom,
      #fff 0%, #fbbf24 30%, #f97316 60%, transparent 100%);
    border-radius: 50% 50% 30% 30%;
    animation: flicker 0.15s ease-in-out infinite alternate;
    box-shadow: 0 0 12px 4px rgba(251, 191, 36, 0.6), 0 0 30px 8px rgba(251, 146, 60, 0.3);
  }

  .candle-body {
    width: 6px;
    height: 30px;
    background: linear-gradient(180deg, #fef3c7, #fde68a);
    border-radius: 0 0 3px 3px;
  }

  @keyframes candleFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes flicker {
    0% { transform: scaleY(1) scaleX(1) rotate(-2deg); opacity: 1; }
    100% { transform: scaleY(1.15) scaleX(0.9) rotate(2deg); opacity: 0.85; }
  }

  /* ───── Intro Screen ───── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 520px;
  }

  .intro-crystal-ball {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  .intro-ball-outer {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(168, 85, 247, 0.1) 30%,
      rgba(88, 28, 135, 0.2) 60%,
      rgba(30, 10, 60, 0.4) 100%);
    border: 2px solid rgba(168, 85, 247, 0.3);
    box-shadow:
      0 0 40px rgba(168, 85, 247, 0.4),
      0 0 80px rgba(168, 85, 247, 0.2),
      inset 0 0 30px rgba(168, 85, 247, 0.2);
    position: relative;
    overflow: hidden;
    animation: introGlow 3s ease-in-out infinite;
  }

  @keyframes introGlow {
    0%, 100% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.4), 0 0 80px rgba(168, 85, 247, 0.2), inset 0 0 30px rgba(168, 85, 247, 0.2); }
    50% { box-shadow: 0 0 60px rgba(168, 85, 247, 0.6), 0 0 120px rgba(168, 85, 247, 0.3), inset 0 0 40px rgba(168, 85, 247, 0.3); }
  }

  .intro-ball-inner {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    overflow: hidden;
  }

  .intro-mist {
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    animation: mistSwirl 6s ease-in-out infinite;
  }

  .intro-mist.mist-1 {
    background: radial-gradient(ellipse at 30% 40%, rgba(168, 85, 247, 0.4), transparent 60%);
    animation-delay: 0s;
  }

  .intro-mist.mist-2 {
    background: radial-gradient(ellipse at 70% 60%, rgba(234, 179, 8, 0.3), transparent 60%);
    animation-delay: -2s;
  }

  .intro-mist.mist-3 {
    background: radial-gradient(ellipse at 50% 30%, rgba(139, 92, 246, 0.3), transparent 60%);
    animation-delay: -4s;
  }

  @keyframes mistSwirl {
    0% { transform: rotate(0deg) scale(1); }
    33% { transform: rotate(120deg) scale(1.1); }
    66% { transform: rotate(240deg) scale(0.9); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .intro-ball-shine {
    position: absolute;
    top: 12%;
    left: 18%;
    width: 35%;
    height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .intro-ball-base {
    width: 60px;
    height: 20px;
    background: linear-gradient(180deg, #581c87, #3b0764);
    border-radius: 0 0 30px 30px;
    border: 1px solid rgba(168, 85, 247, 0.3);
    margin-top: -4px;
  }

  .game-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(2.2rem, 8vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #c084fc, #a855f7, #eab308, #fbbf24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.2rem;
    text-shadow: none;
    animation: titleShimmer 4s ease-in-out infinite;
    background-size: 200% auto;
  }

  @keyframes titleShimmer {
    0%, 100% { background-position: 0% center; }
    50% { background-position: 200% center; }
  }

  .game-subtitle {
    font-family: 'Cinzel', serif;
    color: #c4b5fd;
    font-size: 1.1rem;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  .intro-instructions {
    background: rgba(88, 28, 135, 0.2);
    border: 2px solid rgba(168, 85, 247, 0.2);
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .intro-instructions h3 {
    color: #e9d5ff;
    font-family: 'Cinzel', serif;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .intro-step {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    text-align: left;
  }

  .intro-step:last-child { margin-bottom: 0; }

  .step-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #a855f7, #7c3aed);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .intro-step p {
    color: #d8b4fe;
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .intro-step strong {
    color: #fbbf24;
  }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    font-family: 'Cinzel', serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #7c3aed, #a855f7, #c084fc);
    border: 2px solid rgba(168, 85, 247, 0.5);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3);
  }

  .btn-crystal { font-size: 1.3rem; }

  /* ───── Game Header ───── */

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
    background: rgba(12, 1, 24, 0.8);
    border-bottom: 1px solid rgba(168, 85, 247, 0.2);
    z-index: 50;
    flex-shrink: 0;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(168, 85, 247, 0.15);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 10px;
    color: #c4b5fd;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-btn:hover { background: rgba(168, 85, 247, 0.3); }

  .level-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    border-radius: 16px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .magic-meter-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .magic-label {
    color: #c4b5fd;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .magic-meter {
    width: 100px;
    height: 10px;
    background: rgba(168, 85, 247, 0.15);
    border-radius: 5px;
    border: 1px solid rgba(168, 85, 247, 0.3);
    overflow: hidden;
    position: relative;
  }

  .magic-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #a855f7, #eab308);
    border-radius: 5px;
    transition: width 0.5s ease;
  }

  .magic-full-glow {
    position: absolute;
    inset: -3px;
    border-radius: 8px;
    border: 2px solid #eab308;
    animation: magicFullPulse 1s ease-in-out infinite;
  }

  @keyframes magicFullPulse {
    0%, 100% { box-shadow: 0 0 10px rgba(234, 179, 8, 0.5); opacity: 0.7; }
    50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.8); opacity: 1; }
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(234, 179, 8, 0.15);
    border: 1px solid rgba(234, 179, 8, 0.3);
    border-radius: 16px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .score-icon { font-size: 1rem; }

  .streak-badge {
    padding: 0.4rem 0.6rem;
    background: rgba(249, 115, 22, 0.15);
    border: 1px solid rgba(249, 115, 22, 0.3);
    border-radius: 16px;
    color: #fb923c;
    font-weight: 700;
    font-size: 0.8rem;
    animation: streakPulse 1s ease-in-out infinite;
  }

  @keyframes streakPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* ───── Game Container ───── */

  .game-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  .connection-line {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 5;
    width: 100%;
    height: 100%;
  }

  /* ───── Main Crystal Ball ───── */

  .main-crystal-ball {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter 0.3s ease;
  }

  .main-ball-glow-ring {
    position: absolute;
    width: 290px;
    height: 290px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    border-radius: 50%;
    border: 2px solid rgba(168, 85, 247, 0.15);
    pointer-events: none;
    animation: glowRingPulse 4s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes glowRingPulse {
    0%, 100% { opacity: 0.3; transform: translate(-50%, -55%) scale(1); }
    50% { opacity: 0.7; transform: translate(-50%, -55%) scale(1.05); }
  }

  .main-crystal-ball.attract .main-ball-glow-ring {
    border-color: rgba(234, 179, 8, 0.5);
    box-shadow: 0 0 40px rgba(234, 179, 8, 0.3);
    animation: attractPulse 0.5s ease-in-out infinite;
  }

  @keyframes attractPulse {
    0%, 100% { transform: translate(-50%, -55%) scale(1); }
    50% { transform: translate(-50%, -55%) scale(1.08); }
  }

  .main-crystal-ball.merge .main-ball-glow-ring {
    border-color: rgba(234, 179, 8, 0.8);
    box-shadow: 0 0 80px rgba(234, 179, 8, 0.6), 0 0 120px rgba(168, 85, 247, 0.4);
    animation: mergeGlow 0.3s ease-in-out infinite;
  }

  @keyframes mergeGlow {
    0%, 100% { transform: translate(-50%, -55%) scale(1.05); }
    50% { transform: translate(-50%, -55%) scale(1.15); }
  }

  .main-crystal-ball.repel .main-ball-glow-ring {
    border-color: rgba(239, 68, 68, 0.6);
    box-shadow: 0 0 60px rgba(239, 68, 68, 0.4);
    animation: repelShake 0.1s ease-in-out infinite;
  }

  @keyframes repelShake {
    0% { transform: translate(-50%, -55%) translateX(-3px); }
    50% { transform: translate(-50%, -55%) translateX(3px); }
    100% { transform: translate(-50%, -55%) translateX(-3px); }
  }

  .main-ball-outer {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(168, 85, 247, 0.08) 20%,
      rgba(88, 28, 135, 0.15) 50%,
      rgba(30, 10, 60, 0.3) 80%,
      rgba(15, 5, 30, 0.5) 100%);
    border: 2px solid rgba(168, 85, 247, 0.25);
    box-shadow:
      0 0 50px rgba(168, 85, 247, 0.3),
      0 0 100px rgba(168, 85, 247, 0.15),
      inset 0 0 50px rgba(168, 85, 247, 0.15),
      inset 0 0 100px rgba(88, 28, 135, 0.1);
    position: relative;
    overflow: hidden;
  }

  .main-crystal-ball.attract .main-ball-outer {
    box-shadow:
      0 0 60px rgba(234, 179, 8, 0.4),
      0 0 100px rgba(168, 85, 247, 0.3),
      inset 0 0 50px rgba(234, 179, 8, 0.1);
  }

  .main-crystal-ball.merge .main-ball-outer {
    box-shadow:
      0 0 80px rgba(234, 179, 8, 0.6),
      0 0 150px rgba(168, 85, 247, 0.4),
      inset 0 0 60px rgba(234, 179, 8, 0.2);
  }

  .main-crystal-ball.repel .main-ball-outer {
    box-shadow:
      0 0 60px rgba(239, 68, 68, 0.5),
      0 0 100px rgba(239, 68, 68, 0.2),
      inset 0 0 40px rgba(239, 68, 68, 0.15);
    animation: repelShake 0.1s ease-in-out 5;
  }

  .main-ball-inner {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-mist {
    position: absolute;
    inset: -30%;
    border-radius: 50%;
    pointer-events: none;
  }

  .main-mist.mist-layer-1 {
    background: radial-gradient(ellipse at 25% 35%, rgba(168, 85, 247, 0.25), transparent 55%);
    animation: mistSwirl 8s ease-in-out infinite;
  }

  .main-mist.mist-layer-2 {
    background: radial-gradient(ellipse at 70% 60%, rgba(234, 179, 8, 0.15), transparent 55%);
    animation: mistSwirl 10s ease-in-out infinite reverse;
    animation-delay: -3s;
  }

  .main-mist.mist-layer-3 {
    background: radial-gradient(ellipse at 50% 25%, rgba(139, 92, 246, 0.2), transparent 55%);
    animation: mistSwirl 12s ease-in-out infinite;
    animation-delay: -6s;
  }

  .main-ball-text {
    position: relative;
    z-index: 5;
    padding: 25px;
    text-align: center;
    max-height: 100%;
    overflow-y: auto;
    scrollbar-width: none;
  }

  .main-ball-text::-webkit-scrollbar { display: none; }

  .story-beginning-text {
    color: #e9d5ff;
    font-size: clamp(0.7rem, 2.5vw, 0.85rem);
    line-height: 1.5;
    font-weight: 600;
    text-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 0 2px 4px rgba(0,0,0,0.5);
  }

  .story-complete .story-beginning-text {
    font-size: clamp(0.6rem, 2vw, 0.75rem);
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(168, 85, 247, 0.3);
  }

  .story-ending-reveal {
    color: #fbbf24;
    font-size: clamp(0.7rem, 2.5vw, 0.85rem);
    font-weight: 800;
    text-shadow: 0 0 20px rgba(234, 179, 8, 0.5);
    animation: revealText 0.8s ease-out;
  }

  @keyframes revealText {
    0% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }

  .main-ball-shine {
    position: absolute;
    top: 10%;
    left: 15%;
    width: 35%;
    height: 22%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .main-ball-sparkles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .ball-sparkle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    animation: sparkleFloat 3s ease-in-out infinite;
    box-shadow: 0 0 4px rgba(255,255,255,0.8);
  }

  @keyframes sparkleFloat {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }

  .main-ball-base {
    width: 100px;
    height: 30px;
    background: linear-gradient(180deg, #581c87, #3b0764, #1e0533);
    border-radius: 0 0 50px 50px;
    margin-top: -8px;
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .base-gem {
    width: 12px;
    height: 12px;
    background: radial-gradient(circle, #eab308, #a16207);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.6);
    animation: gemPulse 2s ease-in-out infinite;
    margin-top: -2px;
  }

  @keyframes gemPulse {
    0%, 100% { box-shadow: 0 0 10px rgba(234, 179, 8, 0.4); }
    50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.8); }
  }

  /* ───── Fortune Teller ───── */

  .fortune-teller {
    position: absolute;
    z-index: 8;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
  }

  .teller-hat {
    width: 50px;
    height: 40px;
    background: linear-gradient(180deg, #4c1d95, #581c87);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    position: relative;
    margin-bottom: -5px;
    z-index: 2;
  }

  .hat-star {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    animation: hatStarSpin 4s linear infinite;
  }

  @keyframes hatStarSpin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .teller-face {
    width: 45px;
    height: 40px;
    background: radial-gradient(circle at 50% 40%, #fde68a, #d97706);
    border-radius: 50% 50% 45% 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .teller-eyes {
    display: flex;
    gap: 10px;
    margin-top: 2px;
  }

  .teller-eye {
    width: 6px;
    height: 6px;
    background: #1e1b4b;
    border-radius: 50%;
    display: block;
    transition: all 0.3s ease;
  }

  .fortune-teller.amazed .teller-eye {
    width: 9px;
    height: 9px;
    background: radial-gradient(circle, #fbbf24, #1e1b4b);
  }

  .fortune-teller.puzzled .teller-eye.left-eye {
    transform: translateY(-2px);
  }

  .teller-mouth {
    width: 10px;
    height: 5px;
    border-bottom: 2px solid #92400e;
    border-radius: 0 0 50% 50%;
    transition: all 0.3s ease;
  }

  .fortune-teller.amazed .teller-mouth {
    width: 12px;
    height: 10px;
    background: #92400e;
    border-radius: 50%;
    border: none;
  }

  .fortune-teller.puzzled .teller-mouth {
    width: 8px;
    height: 3px;
    border-radius: 0;
    transform: rotate(10deg);
  }

  .teller-robe {
    width: 55px;
    height: 35px;
    background: linear-gradient(180deg, #4c1d95, #581c87, #6d28d9);
    border-radius: 0 0 25px 25px;
    margin-top: -3px;
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-top: none;
  }

  .fortune-teller.amazed {
    animation: tellerBounce 0.5s ease-in-out;
  }

  .fortune-teller.puzzled {
    animation: tellerShake 0.5s ease-in-out;
  }

  @keyframes tellerBounce {
    0%, 100% { transform: translate(-50%, -50%); }
    30% { transform: translate(-50%, -60%); }
    60% { transform: translate(-50%, -45%); }
  }

  @keyframes tellerShake {
    0%, 100% { transform: translate(-50%, -50%); }
    25% { transform: translate(-53%, -50%); }
    75% { transform: translate(-47%, -50%); }
  }

  .teller-speech {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(12, 1, 24, 0.9);
    border: 1px solid rgba(168, 85, 247, 0.4);
    border-radius: 12px;
    padding: 0.3rem 0.6rem;
    white-space: nowrap;
    animation: speechAppear 0.4s ease-out;
    z-index: 100;
  }

  .teller-speech p {
    color: #c4b5fd;
    font-size: 0.7rem;
    font-weight: 600;
    font-style: italic;
  }

  @keyframes speechAppear {
    0% { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.8); }
    100% { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  }

  /* ───── Prediction Balls ───── */

  .prediction-ball {
    position: absolute;
    z-index: 15;
    cursor: grab;
    transition: filter 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .prediction-ball.dragging {
    cursor: grabbing;
    z-index: 100;
    filter: brightness(1.2);
  }

  .prediction-ball.cracked {
    animation: crackShake 0.4s ease-in-out;
  }

  @keyframes crackShake {
    0%, 100% { filter: none; }
    20% { filter: brightness(1.5) hue-rotate(-30deg); transform: translate(-50%, -50%) scale(0.95) rotate(-3deg); }
    40% { filter: brightness(0.8); transform: translate(-50%, -50%) scale(1.02) rotate(3deg); }
    60% { filter: brightness(1.3) hue-rotate(-20deg); transform: translate(-50%, -50%) scale(0.97) rotate(-2deg); }
    80% { filter: brightness(0.9); transform: translate(-50%, -50%) scale(1.01) rotate(1deg); }
  }

  .prediction-ball.correct-reveal {
    animation: correctPulse 1s ease-in-out infinite;
  }

  @keyframes correctPulse {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }

  .pred-ball-outer {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(139, 92, 246, 0.08) 25%,
      rgba(88, 28, 135, 0.15) 50%,
      rgba(30, 10, 60, 0.3) 100%);
    border: 2px solid rgba(139, 92, 246, 0.3);
    box-shadow:
      0 0 25px rgba(139, 92, 246, 0.3),
      0 0 50px rgba(139, 92, 246, 0.1),
      inset 0 0 20px rgba(139, 92, 246, 0.15);
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
  }

  .prediction-ball.dragging .pred-ball-outer {
    box-shadow:
      0 0 40px rgba(139, 92, 246, 0.5),
      0 0 80px rgba(139, 92, 246, 0.2),
      inset 0 0 30px rgba(139, 92, 246, 0.2);
  }

  .prediction-ball:hover .pred-ball-outer {
    box-shadow:
      0 0 35px rgba(139, 92, 246, 0.4),
      0 0 60px rgba(139, 92, 246, 0.15),
      inset 0 0 25px rgba(139, 92, 246, 0.2);
  }

  .pred-ball-inner {
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }

  .pred-mist {
    position: absolute;
    inset: -20%;
    border-radius: 50%;
    background: radial-gradient(ellipse at 40% 50%, rgba(139, 92, 246, 0.2), transparent 60%);
    animation: mistSwirl 7s ease-in-out infinite;
  }

  .pred-text {
    position: relative;
    z-index: 2;
    color: #e2e8f0;
    font-size: clamp(0.55rem, 1.8vw, 0.68rem);
    font-weight: 600;
    text-align: center;
    line-height: 1.3;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  }

  .pred-ball-shine {
    position: absolute;
    top: 12%;
    left: 18%;
    width: 30%;
    height: 18%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .pred-ball-base {
    width: 50px;
    height: 14px;
    background: linear-gradient(180deg, #4c1d95, #3b0764);
    border-radius: 0 0 25px 25px;
    margin-top: -4px;
    border: 1px solid rgba(139, 92, 246, 0.25);
    border-top: none;
  }

  /* Crack overlay */
  .crack-overlay {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    pointer-events: none;
    z-index: 20;
  }

  .crack-line {
    position: absolute;
    background: rgba(239, 68, 68, 0.8);
    border-radius: 2px;
    animation: crackAppear 0.3s ease-out forwards;
  }

  .crack-line.c1 {
    top: 30%;
    left: 40%;
    width: 30%;
    height: 2px;
    transform: rotate(15deg);
  }

  .crack-line.c2 {
    top: 45%;
    left: 35%;
    width: 20%;
    height: 2px;
    transform: rotate(-30deg);
    animation-delay: 0.1s;
  }

  .crack-line.c3 {
    top: 38%;
    left: 50%;
    width: 15%;
    height: 2px;
    transform: rotate(60deg);
    animation-delay: 0.15s;
  }

  @keyframes crackAppear {
    0% { opacity: 0; transform: scaleX(0); }
    100% { opacity: 1; transform: scaleX(1); }
  }

  /* ───── Particles ───── */

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 200;
    transform: translate(-50%, -50%);
  }

  .particle-sparkle {
    animation: particleSparkle 0.5s ease-out forwards;
  }

  .particle-merge {
    animation: particleBurst 0.8s ease-out forwards;
  }

  .particle-repel {
    animation: particleBurst 0.5s ease-out forwards;
  }

  .particle-mist {
    border-radius: 50%;
    filter: blur(2px);
  }

  .particle-ambient {
    animation: particleSparkle 2s ease-in-out forwards;
  }

  @keyframes particleSparkle {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.5); }
    100% { transform: translate(-50%, -50%) scale(0); }
  }

  @keyframes particleBurst {
    0% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -50%) scale(0); }
  }

  /* ───── Merge Effect ───── */

  .merge-effect-container {
    position: absolute;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 250;
  }

  .merge-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 3px solid;
    animation: mergeRingExpand 1s ease-out forwards;
  }

  .merge-ring.ring-1 {
    border-color: #a855f7;
    animation-delay: 0s;
  }

  .merge-ring.ring-2 {
    border-color: #eab308;
    animation-delay: 0.15s;
  }

  .merge-ring.ring-3 {
    border-color: #c084fc;
    animation-delay: 0.3s;
  }

  @keyframes mergeRingExpand {
    0% { width: 30px; height: 30px; opacity: 1; }
    100% { width: 300px; height: 300px; opacity: 0; }
  }

  .merge-flash {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(234, 179, 8, 0.8), rgba(168, 85, 247, 0.4), transparent);
    border-radius: 50%;
    animation: mergeFlash 0.6s ease-out forwards;
  }

  @keyframes mergeFlash {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(2); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
  }

  .merge-lightning {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 60px;
    background: linear-gradient(180deg, #eab308, #a855f7, transparent);
    transform-origin: top center;
    animation: lightningStrike 0.4s ease-out forwards;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(234, 179, 8, 0.8);
  }

  .merge-lightning.l1 { transform: translate(-50%, -50%) rotate(0deg); animation-delay: 0s; }
  .merge-lightning.l2 { transform: translate(-50%, -50%) rotate(90deg); animation-delay: 0.05s; }
  .merge-lightning.l3 { transform: translate(-50%, -50%) rotate(180deg); animation-delay: 0.1s; }
  .merge-lightning.l4 { transform: translate(-50%, -50%) rotate(270deg); animation-delay: 0.15s; }

  @keyframes lightningStrike {
    0% { height: 0; opacity: 1; }
    40% { height: 100px; opacity: 1; }
    100% { height: 120px; opacity: 0; }
  }

  /* ───── Hint ───── */

  .hint-overlay {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    pointer-events: none;
  }

  .hint-bubble {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(12, 1, 24, 0.9);
    border: 1px solid rgba(234, 179, 8, 0.4);
    border-radius: 16px;
    animation: hintAppear 0.5s ease-out;
  }

  .hint-icon { font-size: 1.2rem; }

  .hint-bubble p {
    color: #fde68a;
    font-size: 0.8rem;
    font-weight: 600;
  }

  @keyframes hintAppear {
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .drag-hint {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    pointer-events: none;
  }

  .drag-hint p {
    color: #7c3aed;
    font-size: 0.8rem;
    font-weight: 600;
    animation: dragHintPulse 2s ease-in-out infinite;
    white-space: nowrap;
  }

  @keyframes dragHintPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* ───── Bottom Bar ───── */

  .bottom-bar {
    padding: 0.5rem 1rem;
    background: rgba(12, 1, 24, 0.8);
    border-top: 1px solid rgba(168, 85, 247, 0.15);
    text-align: center;
    flex-shrink: 0;
  }

  .bottom-info {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.75rem;
  }

  .stories-count { color: #7c3aed; font-weight: 600; }
  .bonus-indicator { color: #eab308; font-weight: 700; animation: bonusPulse 1.5s ease-in-out infinite; }

  @keyframes bonusPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  /* ───── Complete Screen ───── */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 500px;
  }

  .complete-crystal-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 60%);
    pointer-events: none;
    animation: completeGlow 3s ease-in-out infinite;
  }

  @keyframes completeGlow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
  }

  .complete-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    background: linear-gradient(135deg, #c084fc, #eab308);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .complete-story-card {
    background: rgba(88, 28, 135, 0.2);
    border: 2px solid rgba(168, 85, 247, 0.25);
    border-radius: 16px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(8px);
  }

  .complete-story-text {
    color: #d8b4fe;
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  .complete-ending-text {
    color: #fbbf24;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #7c3aed;
    font-weight: 600;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 900;
    color: white;
  }

  .mini-magic-meter {
    width: 80px;
    height: 8px;
    background: rgba(168, 85, 247, 0.15);
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(168, 85, 247, 0.3);
  }

  .mini-magic-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #eab308);
    border-radius: 4px;
    transition: width 0.5s ease;
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .bonus-btn {
    background: linear-gradient(135deg, #eab308, #f59e0b, #d97706) !important;
    border-color: rgba(234, 179, 8, 0.6) !important;
    box-shadow: 0 10px 40px rgba(234, 179, 8, 0.4), 0 0 20px rgba(234, 179, 8, 0.2) !important;
    animation: bonusBtnGlow 1.5s ease-in-out infinite;
  }

  @keyframes bonusBtnGlow {
    0%, 100% { box-shadow: 0 10px 40px rgba(234, 179, 8, 0.4), 0 0 20px rgba(234, 179, 8, 0.2); }
    50% { box-shadow: 0 15px 50px rgba(234, 179, 8, 0.6), 0 0 40px rgba(234, 179, 8, 0.4); }
  }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Cinzel', serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #c4b5fd;
    background: transparent;
    border: 2px solid rgba(168, 85, 247, 0.25);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(168, 85, 247, 0.5);
    color: white;
  }

  .book-btn {
    padding: 0.6rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #d8b4fe;
    background: rgba(88, 28, 135, 0.3);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .book-btn:hover {
    background: rgba(88, 28, 135, 0.5);
    color: white;
  }

  /* ───── Book of Prophecies ───── */

  .book-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .book-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 550px;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .book-title {
    font-family: 'Cinzel', serif;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 900;
    background: linear-gradient(135deg, #c084fc, #eab308);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.3rem;
  }

  .book-subtitle {
    color: #7c3aed;
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .book-scroll {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: rgba(168, 85, 247, 0.3) transparent;
    max-height: 50vh;
    margin-bottom: 1rem;
  }

  .book-scroll::-webkit-scrollbar { width: 4px; }
  .book-scroll::-webkit-scrollbar-track { background: transparent; }
  .book-scroll::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.3); border-radius: 2px; }

  .book-empty {
    padding: 2rem;
    color: #4c1d95;
    font-style: italic;
  }

  .prophecy-card {
    background: rgba(88, 28, 135, 0.15);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: 14px;
    padding: 1rem;
    margin-bottom: 0.8rem;
    text-align: left;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s ease;
  }

  .prophecy-card:hover {
    border-color: rgba(168, 85, 247, 0.4);
  }

  .prophecy-number {
    font-family: 'Cinzel', serif;
    font-size: 0.7rem;
    color: #a855f7;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.3rem;
  }

  .prophecy-theme {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    font-size: 0.6rem;
    color: #7c3aed;
    background: rgba(88, 28, 135, 0.4);
    padding: 0.15rem 0.5rem;
    border-radius: 10px;
    text-transform: capitalize;
  }

  .prophecy-beginning {
    color: #c4b5fd;
    font-size: 0.78rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }

  .prophecy-ending {
    color: #fbbf24;
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.4;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(168, 85, 247, 0.15);
  }

  .prophecy-level {
    font-size: 0.6rem;
    color: #4c1d95;
    margin-top: 0.4rem;
    text-align: right;
  }

  .book-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
  }

  /* ───── Responsive ───── */

  @media (max-width: 600px) {
    .main-ball-outer {
      width: 190px;
      height: 190px;
    }

    .main-ball-base {
      width: 80px;
      height: 24px;
    }

    .main-ball-text {
      padding: 18px;
    }

    .story-beginning-text {
      font-size: 0.65rem;
    }

    .pred-ball-outer {
      width: 100px;
      height: 100px;
    }

    .pred-text {
      font-size: 0.5rem;
    }

    .pred-ball-base {
      width: 42px;
      height: 12px;
    }

    .fortune-teller {
      display: none;
    }

    .teller-speech {
      display: none;
    }

    .magic-meter-container {
      display: none;
    }

    .main-ball-glow-ring {
      width: 230px;
      height: 230px;
    }

    .game-header {
      padding: 0.4rem 0.6rem;
    }

    .level-badge {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

    .score-badge {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }

    .bottom-info {
      font-size: 0.65rem;
    }

    .hint-bubble p {
      font-size: 0.7rem;
    }

    .drag-hint p {
      font-size: 0.7rem;
    }

    .complete-story-card {
      padding: 0.8rem;
    }

    .complete-story-text {
      font-size: 0.75rem;
    }

    .complete-ending-text {
      font-size: 0.85rem;
    }

    .prophecy-card {
      padding: 0.8rem;
    }

    .prophecy-beginning {
      font-size: 0.7rem;
    }

    .prophecy-ending {
      font-size: 0.75rem;
    }

    .intro-instructions {
      padding: 0.8rem;
    }

    .intro-step p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 400px) {
    .main-ball-outer {
      width: 160px;
      height: 160px;
    }

    .main-ball-glow-ring {
      width: 200px;
      height: 200px;
    }

    .main-ball-text {
      padding: 14px;
    }

    .story-beginning-text {
      font-size: 0.58rem;
    }

    .pred-ball-outer {
      width: 85px;
      height: 85px;
    }

    .pred-text {
      font-size: 0.45rem;
    }

    .pred-ball-base {
      width: 36px;
      height: 10px;
    }
  }

  @media (min-width: 1024px) {
    .main-ball-outer {
      width: 280px;
      height: 280px;
    }

    .main-ball-glow-ring {
      width: 330px;
      height: 330px;
    }

    .pred-ball-outer {
      width: 140px;
      height: 140px;
    }

    .pred-text {
      font-size: 0.75rem;
    }

    .pred-ball-base {
      width: 58px;
      height: 16px;
    }

    .main-ball-base {
      width: 110px;
      height: 34px;
    }

    .story-beginning-text {
      font-size: 0.9rem;
    }

    .story-ending-reveal {
      font-size: 0.9rem;
    }
  }
`;
