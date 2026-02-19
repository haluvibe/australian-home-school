"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ── Survey category definitions ──────────────────────────────────────
interface SurveyCategory {
  name: string;
  emoji: string;
}

interface SurveyRound {
  title: string;
  question: string;
  categories: SurveyCategory[];
  npcCount: number;
}

const SURVEY_ROUNDS: SurveyRound[] = [
  {
    title: 'Favourite Pet',
    question: 'What is your favourite pet?',
    categories: [
      { name: 'Dog', emoji: '🐕' },
      { name: 'Cat', emoji: '🐈' },
      { name: 'Fish', emoji: '🐟' },
      { name: 'Bird', emoji: '🐦' },
      { name: 'Rabbit', emoji: '🐇' },
    ],
    npcCount: 12,
  },
  {
    title: 'Favourite Fruit',
    question: 'What is your favourite fruit?',
    categories: [
      { name: 'Apple', emoji: '🍎' },
      { name: 'Banana', emoji: '🍌' },
      { name: 'Orange', emoji: '🍊' },
      { name: 'Grapes', emoji: '🍇' },
      { name: 'Strawberry', emoji: '🍓' },
    ],
    npcCount: 12,
  },
  {
    title: 'Favourite Colour',
    question: 'What is your favourite colour?',
    categories: [
      { name: 'Red', emoji: '🔴' },
      { name: 'Blue', emoji: '🔵' },
      { name: 'Green', emoji: '🟢' },
      { name: 'Yellow', emoji: '🟡' },
      { name: 'Purple', emoji: '🟣' },
    ],
    npcCount: 13,
  },
  {
    title: 'Favourite Sport',
    question: 'What is your favourite sport?',
    categories: [
      { name: 'Soccer', emoji: '⚽' },
      { name: 'Cricket', emoji: '🏏' },
      { name: 'Swimming', emoji: '🏊' },
      { name: 'Tennis', emoji: '🎾' },
      { name: 'Basketball', emoji: '🏀' },
    ],
    npcCount: 13,
  },
  {
    title: 'Favourite Season',
    question: 'What is your favourite season?',
    categories: [
      { name: 'Summer', emoji: '☀️' },
      { name: 'Autumn', emoji: '🍂' },
      { name: 'Winter', emoji: '❄️' },
      { name: 'Spring', emoji: '🌸' },
    ],
    npcCount: 12,
  },
  {
    title: 'Favourite Snack',
    question: 'What is your favourite snack?',
    categories: [
      { name: 'Chips', emoji: '🍟' },
      { name: 'Cookie', emoji: '🍪' },
      { name: 'Popcorn', emoji: '🍿' },
      { name: 'Ice Cream', emoji: '🍦' },
      { name: 'Fruit', emoji: '🍉' },
    ],
    npcCount: 14,
  },
  {
    title: 'Favourite Animal',
    question: 'What is your favourite wild animal?',
    categories: [
      { name: 'Lion', emoji: '🦁' },
      { name: 'Elephant', emoji: '🐘' },
      { name: 'Dolphin', emoji: '🐬' },
      { name: 'Panda', emoji: '🐼' },
      { name: 'Koala', emoji: '🐨' },
    ],
    npcCount: 14,
  },
  {
    title: 'Favourite Drink',
    question: 'What is your favourite drink?',
    categories: [
      { name: 'Water', emoji: '💧' },
      { name: 'Juice', emoji: '🧃' },
      { name: 'Milk', emoji: '🥛' },
      { name: 'Smoothie', emoji: '🥤' },
    ],
    npcCount: 12,
  },
];

const NPC_EMOJIS = ['👦', '👧', '👨', '👩', '👴', '👵', '🧒', '👱', '🧑', '👶', '🧓', '👲'];

// ── Types ────────────────────────────────────────────────────────────
interface TallyEntry {
  category: string;
  count: number;
}

interface NPC {
  id: number;
  emoji: string;
  favouriteIndex: number;
  entered: boolean;
  answered: boolean;
  walkX: number;
  opacity: number;
}

interface GraphCell {
  category: string;
  row: number;
  filled: boolean;
  emoji: string;
}

interface DragIcon {
  id: number;
  category: string;
  emoji: string;
  x: number;
  y: number;
  placed: boolean;
}

interface AnalysisQuestion {
  text: string;
  options: string[];
  correctIndex: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  emoji?: string;
}

type GameScreen = 'intro' | 'collect' | 'build' | 'analyze' | 'round-complete' | 'game-complete';

interface PetSurveyProps {
  onExit?: () => void;
}

let idCounter = 0;
const nextId = (): number => ++idCounter;

export default function PetSurvey({ onExit }: PetSurveyProps = {}) {
  // ── State ────────────────────────────────────────────────────────
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // COLLECT phase
  const [tallies, setTallies] = useState<TallyEntry[]>([]);
  const [npcs, setNpcs] = useState<NPC[]>([]);
  const [currentNpcIndex, setCurrentNpcIndex] = useState(0);
  const [npcWalking, setNpcWalking] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [collectFeedback, setCollectFeedback] = useState<{ correct: boolean; emoji: string } | null>(null);
  const [npcExiting, setNpcExiting] = useState(false);

  // BUILD phase
  const [graphCells, setGraphCells] = useState<GraphCell[]>([]);
  const [dragIcons, setDragIcons] = useState<DragIcon[]>([]);
  const [draggedIcon, setDraggedIcon] = useState<{ id: number; startX: number; startY: number; offsetX: number; offsetY: number } | null>(null);
  const [placedCount, setPlacedCount] = useState(0);
  const [buildComplete, setBuildComplete] = useState(false);
  const [popEffect, setPopEffect] = useState<{ x: number; y: number; id: number } | null>(null);
  const [bounceBack, setBounceBack] = useState<number | null>(null);

  // ANALYZE phase
  const [questions, setQuestions] = useState<AnalysisQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(0);
  const [analyzeAnswer, setAnalyzeAnswer] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Particles
  const [particles, setParticles] = useState<Particle[]>([]);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const npcTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentRound = SURVEY_ROUNDS[round % SURVEY_ROUNDS.length];

  // ── Particle system ──────────────────────────────────────────────
  const spawnParticles = useCallback((x: number, y: number, count: number, colors: string[], useEmoji = false, emojis: string[] = []) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        id: nextId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        maxLife: 40 + Math.random() * 30,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 6,
        emoji: useEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : undefined,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnConfetti = useCallback((x: number, y: number) => {
    spawnParticles(x, y, 30, ['#fbbf24', '#f472b6', '#38bdf8', '#4ade80', '#c084fc', '#fb923c'], true, ['🌟', '✨', '⭐', '🎉', '🎊']);
  }, [spawnParticles]);

  // Particle animation loop
  useEffect(() => {
    if (particles.length === 0) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      return;
    }
    const animate = () => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.12,
          vx: p.vx * 0.98,
          life: p.life - (1 / p.maxLife),
        })).filter(p => p.life > 0);
        return updated;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [particles.length > 0]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── COLLECT phase logic ──────────────────────────────────────────
  const generateNPCs = useCallback((surveyRound: SurveyRound): NPC[] => {
    const npcList: NPC[] = [];
    const catCount = surveyRound.categories.length;
    for (let i = 0; i < surveyRound.npcCount; i++) {
      // Weighted random: give some categories more weight for interesting data
      let favIdx: number;
      const r = Math.random();
      if (r < 0.35) {
        favIdx = 0; // most popular
      } else if (r < 0.6) {
        favIdx = 1;
      } else {
        favIdx = 2 + Math.floor(Math.random() * (catCount - 2));
      }
      favIdx = Math.min(favIdx, catCount - 1);
      npcList.push({
        id: nextId(),
        emoji: NPC_EMOJIS[Math.floor(Math.random() * NPC_EMOJIS.length)],
        favouriteIndex: favIdx,
        entered: false,
        answered: false,
        walkX: -80,
        opacity: 0,
      });
    }
    return npcList;
  }, []);

  const startCollectPhase = useCallback(() => {
    const surveyRound = SURVEY_ROUNDS[round % SURVEY_ROUNDS.length];
    const initialTallies = surveyRound.categories.map(c => ({ category: c.name, count: 0 }));
    setTallies(initialTallies);
    setNpcs(generateNPCs(surveyRound));
    setCurrentNpcIndex(0);
    setNpcWalking(false);
    setShowSpeechBubble(false);
    setCollectFeedback(null);
    setNpcExiting(false);
    setScreen('collect');
  }, [round, generateNPCs]);

  // NPC walk-in animation
  useEffect(() => {
    if (screen !== 'collect') return;
    if (currentNpcIndex >= npcs.length) {
      // All NPCs done — move to build phase
      npcTimerRef.current = setTimeout(() => {
        startBuildPhase();
      }, 800);
      return;
    }
    // Start walking the next NPC in
    setNpcWalking(true);
    setShowSpeechBubble(false);
    setNpcExiting(false);
    setCollectFeedback(null);

    let walkProgress = -80;
    const targetX = 50; // percentage
    const walkInterval = setInterval(() => {
      walkProgress += 3;
      setNpcs(prev => prev.map((n, i) =>
        i === currentNpcIndex ? { ...n, walkX: Math.min(walkProgress, targetX), opacity: Math.min(1, (walkProgress + 80) / 60), entered: true } : n
      ));
      if (walkProgress >= targetX) {
        clearInterval(walkInterval);
        setNpcWalking(false);
        setTimeout(() => setShowSpeechBubble(true), 200);
      }
    }, 30);

    return () => {
      clearInterval(walkInterval);
      if (npcTimerRef.current) clearTimeout(npcTimerRef.current);
    };
  }, [screen, currentNpcIndex, npcs.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategoryTap = useCallback((catIndex: number) => {
    if (npcWalking || !showSpeechBubble || npcExiting) return;
    if (currentNpcIndex >= npcs.length) return;

    const npc = npcs[currentNpcIndex];
    const correct = catIndex === npc.favouriteIndex;
    const cat = currentRound.categories[catIndex];

    if (correct) {
      setTallies(prev => prev.map(t =>
        t.category === cat.name ? { ...t, count: t.count + 1 } : t
      ));
      setStreak(s => s + 1);
      setScore(s => s + 10 + Math.min(streak * 2, 20));
      setCollectFeedback({ correct: true, emoji: cat.emoji });
      spawnParticles(
        containerRef.current ? containerRef.current.offsetWidth / 2 : 200,
        containerRef.current ? containerRef.current.offsetHeight / 2 : 200,
        8, ['#4ade80', '#22c55e', '#86efac']
      );
    } else {
      setCollectFeedback({ correct: false, emoji: cat.emoji });
      setStreak(0);
    }

    // NPC exit animation
    setShowSpeechBubble(false);
    setNpcExiting(true);

    npcTimerRef.current = setTimeout(() => {
      if (correct) {
        setCurrentNpcIndex(prev => prev + 1);
      } else {
        // Wrong answer — let them try again
        setNpcExiting(false);
        setCollectFeedback(null);
        setTimeout(() => setShowSpeechBubble(true), 300);
      }
    }, correct ? 700 : 500);
  }, [npcWalking, showSpeechBubble, npcExiting, currentNpcIndex, npcs, currentRound, streak, spawnParticles]);

  // ── BUILD phase logic ────────────────────────────────────────────
  const startBuildPhase = useCallback(() => {
    const maxCount = Math.max(...tallies.map(t => t.count), 1);
    const cats = currentRound.categories;

    // Create grid cells
    const cells: GraphCell[] = [];
    for (let catIdx = 0; catIdx < cats.length; catIdx++) {
      for (let row = 0; row < maxCount; row++) {
        cells.push({
          category: cats[catIdx].name,
          row,
          filled: false,
          emoji: cats[catIdx].emoji,
        });
      }
    }
    setGraphCells(cells);

    // Create draggable icons in tray
    const icons: DragIcon[] = [];
    for (const tally of tallies) {
      const cat = cats.find(c => c.name === tally.category);
      if (!cat) continue;
      for (let i = 0; i < tally.count; i++) {
        icons.push({
          id: nextId(),
          category: tally.category,
          emoji: cat.emoji,
          x: 0,
          y: 0,
          placed: false,
        });
      }
    }
    // Shuffle
    for (let i = icons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [icons[i], icons[j]] = [icons[j], icons[i]];
    }
    setDragIcons(icons);
    setPlacedCount(0);
    setBuildComplete(false);
    setPopEffect(null);
    setBounceBack(null);
    setScreen('build');
  }, [tallies, currentRound]); // eslint-disable-line react-hooks/exhaustive-deps

  // Check build completion
  useEffect(() => {
    if (screen !== 'build') return;
    const totalNeeded = tallies.reduce((sum, t) => sum + t.count, 0);
    if (placedCount >= totalNeeded && totalNeeded > 0) {
      setBuildComplete(true);
      if (containerRef.current) {
        spawnConfetti(containerRef.current.offsetWidth / 2, containerRef.current.offsetHeight / 2);
      }
      setTimeout(() => startAnalyzePhase(), 1500);
    }
  }, [placedCount, screen, tallies]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleBuildDragStart = useCallback((
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    icon: DragIcon
  ) => {
    if (icon.placed || buildComplete) return;
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const iconEl = (e.target as HTMLElement).closest('.drag-icon') as HTMLElement;
    const iconRect = iconEl ? iconEl.getBoundingClientRect() : { left: clientX - 30, top: clientY - 30 };

    setDraggedIcon({
      id: icon.id,
      startX: iconRect.left - rect.left + 30,
      startY: iconRect.top - rect.top + 30,
      offsetX: clientX - (iconRect.left + 30),
      offsetY: clientY - (iconRect.top + 30),
    });

    setDragIcons(prev => prev.map(ic =>
      ic.id === icon.id ? { ...ic, x: clientX - rect.left - (clientX - (iconRect.left + 30)), y: clientY - rect.top - (clientY - (iconRect.top + 30)) } : ic
    ));
  }, [buildComplete]);

  const handleBuildDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedIcon || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = clientX - rect.left - draggedIcon.offsetX;
    const newY = clientY - rect.top - draggedIcon.offsetY;

    setDragIcons(prev => prev.map(ic =>
      ic.id === draggedIcon.id ? { ...ic, x: newX, y: newY } : ic
    ));
  }, [draggedIcon]);

  const handleBuildDragEnd = useCallback(() => {
    if (!draggedIcon || !containerRef.current || !graphRef.current) {
      setDraggedIcon(null);
      return;
    }

    const icon = dragIcons.find(ic => ic.id === draggedIcon.id);
    if (!icon) { setDraggedIcon(null); return; }

    const containerRect = containerRef.current.getBoundingClientRect();
    const graphRect = graphRef.current.getBoundingClientRect();

    // Check if dropped on graph area
    const dropX = icon.x;
    const dropY = icon.y;
    const graphLeft = graphRect.left - containerRect.left;
    const graphTop = graphRect.top - containerRect.top;
    const graphRight = graphLeft + graphRect.width;
    const graphBottom = graphTop + graphRect.height;

    if (dropX > graphLeft && dropX < graphRight && dropY > graphTop && dropY < graphBottom) {
      // Determine which column
      const cats = currentRound.categories;
      const colWidth = graphRect.width / cats.length;
      const relX = dropX - graphLeft;
      const colIndex = Math.floor(relX / colWidth);
      const targetCat = cats[colIndex]?.name;

      if (targetCat && targetCat === icon.category) {
        // Correct column — find the next unfilled cell
        const tally = tallies.find(t => t.category === targetCat);
        const filledInCol = graphCells.filter(c => c.category === targetCat && c.filled).length;
        if (tally && filledInCol < tally.count) {
          // Place the icon
          setGraphCells(prev => {
            const updated = [...prev];
            const cellIdx = updated.findIndex(c => c.category === targetCat && c.row === filledInCol && !c.filled);
            if (cellIdx >= 0) {
              updated[cellIdx] = { ...updated[cellIdx], filled: true };
            }
            return updated;
          });
          setDragIcons(prev => prev.map(ic =>
            ic.id === draggedIcon.id ? { ...ic, placed: true } : ic
          ));
          setPlacedCount(prev => prev + 1);
          setScore(s => s + 5);

          // Pop effect
          const cellX = graphLeft + colIndex * colWidth + colWidth / 2;
          const maxCount = Math.max(...tallies.map(t => t.count), 1);
          const cellHeight = Math.min(50, (graphRect.height - 40) / maxCount);
          const cellY = graphBottom - 30 - filledInCol * cellHeight - cellHeight / 2;
          setPopEffect({ x: cellX, y: cellY, id: nextId() });
          spawnParticles(cellX, cellY, 6, ['#fbbf24', '#4ade80', '#38bdf8']);
          setTimeout(() => setPopEffect(null), 500);

          setDraggedIcon(null);
          return;
        }
      }
      // Wrong column — bounce back
      setBounceBack(draggedIcon.id);
      setTimeout(() => setBounceBack(null), 500);
    }

    // Reset icon position
    setDragIcons(prev => prev.map(ic =>
      ic.id === draggedIcon.id ? { ...ic, x: 0, y: 0 } : ic
    ));
    setDraggedIcon(null);
  }, [draggedIcon, dragIcons, currentRound, tallies, graphCells, spawnParticles]);

  // Build drag event listeners
  useEffect(() => {
    if (!draggedIcon) return;
    const moveHandler = (e: MouseEvent | TouchEvent) => handleBuildDragMove(e);
    const endHandler = () => handleBuildDragEnd();
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
  }, [draggedIcon, handleBuildDragMove, handleBuildDragEnd]);

  // ── ANALYZE phase logic ──────────────────────────────────────────
  const startAnalyzePhase = useCallback(() => {
    const cats = currentRound.categories;
    const tallyCopy = [...tallies];
    const sorted = [...tallyCopy].sort((a, b) => b.count - a.count);
    const most = sorted[0];
    const least = sorted[sorted.length - 1];

    const qs: AnalysisQuestion[] = [];

    // Q1: Most popular
    qs.push({
      text: `Which ${currentRound.title.toLowerCase().replace('favourite ', '')} is MOST popular?`,
      options: cats.map(c => c.name),
      correctIndex: cats.findIndex(c => c.name === most.category),
    });

    // Q2: How many chose X?
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    const randomTally = tallyCopy.find(t => t.category === randomCat.name)!;
    const correctCount = randomTally.count;
    const wrongCounts = new Set<number>();
    wrongCounts.add(correctCount);
    while (wrongCounts.size < 4) {
      wrongCounts.add(Math.max(0, correctCount + Math.floor(Math.random() * 5) - 2));
    }
    const countOptions = Array.from(wrongCounts).sort((a, b) => a - b).map(String);
    qs.push({
      text: `How many people chose ${randomCat.emoji} ${randomCat.name}?`,
      options: countOptions,
      correctIndex: countOptions.indexOf(String(correctCount)),
    });

    // Q3: Least popular
    qs.push({
      text: `Which ${currentRound.title.toLowerCase().replace('favourite ', '')} is LEAST popular?`,
      options: cats.map(c => c.name),
      correctIndex: cats.findIndex(c => c.name === least.category),
    });

    // Q4: How many more?
    if (sorted.length >= 2) {
      const diff = sorted[0].count - sorted[1].count;
      const diffOptions = new Set<number>();
      diffOptions.add(diff);
      while (diffOptions.size < 4) {
        diffOptions.add(Math.max(0, diff + Math.floor(Math.random() * 5) - 2));
      }
      const diffArr = Array.from(diffOptions).sort((a, b) => a - b).map(String);
      qs.push({
        text: `How many MORE people chose ${most.category} than ${sorted[1].category}?`,
        options: diffArr,
        correctIndex: diffArr.indexOf(String(diff)),
      });
    }

    // Q5: Total
    const total = tallyCopy.reduce((s, t) => s + t.count, 0);
    const totalOptions = new Set<number>();
    totalOptions.add(total);
    while (totalOptions.size < 4) {
      totalOptions.add(Math.max(1, total + Math.floor(Math.random() * 7) - 3));
    }
    const totalArr = Array.from(totalOptions).sort((a, b) => a - b).map(String);
    qs.push({
      text: 'How many people were surveyed in total?',
      options: totalArr,
      correctIndex: totalArr.indexOf(String(total)),
    });

    setQuestions(qs);
    setCurrentQuestion(0);
    setAnsweredCorrectly(0);
    setAnalyzeAnswer(null);
    setShowHint(false);
    setScreen('analyze');
  }, [currentRound, tallies]);

  const handleAnalyzeAnswer = useCallback((optIndex: number) => {
    if (analyzeAnswer !== null) return;
    const q = questions[currentQuestion];
    setAnalyzeAnswer(optIndex);

    if (optIndex === q.correctIndex) {
      setScore(s => s + 20);
      setAnsweredCorrectly(prev => prev + 1);
      if (containerRef.current) {
        spawnParticles(
          containerRef.current.offsetWidth / 2,
          containerRef.current.offsetHeight / 2 - 50,
          12, ['#fbbf24', '#4ade80', '#38bdf8']
        );
      }
      setTimeout(() => {
        setAnalyzeAnswer(null);
        setShowHint(false);
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          completeRound();
        }
      }, 1000);
    } else {
      setShowHint(true);
      setTimeout(() => {
        setAnalyzeAnswer(null);
        setShowHint(false);
      }, 1500);
    }
  }, [analyzeAnswer, questions, currentQuestion]); // eslint-disable-line react-hooks/exhaustive-deps

  const completeRound = useCallback(() => {
    if (containerRef.current) {
      spawnConfetti(containerRef.current.offsetWidth / 2, containerRef.current.offsetHeight / 3);
    }
    setScreen('round-complete');
  }, [spawnConfetti]);

  const nextRound = () => {
    if (round + 1 >= SURVEY_ROUNDS.length) {
      setScreen('game-complete');
    } else {
      setRound(prev => prev + 1);
    }
  };

  // Auto-start collect phase when round changes
  useEffect(() => {
    if (screen === 'intro' || screen === 'game-complete' || screen === 'round-complete') return;
    // This is handled by explicit calls
  }, [round]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (round > 0 && screen === 'round-complete') {
      // Wait for user to click next
    }
  }, [round, screen]);

  const startGame = () => {
    setRound(0);
    setScore(0);
    setStreak(0);
    startCollectPhase();
  };

  // Restart from round-complete
  const handleNextRound = () => {
    nextRound();
    if (round + 1 < SURVEY_ROUNDS.length) {
      setTimeout(() => {
        startCollectPhase();
      }, 50);
    }
  };

  // Small delay needed for round state to update
  useEffect(() => {
    if (screen === 'round-complete') return;
    // handled elsewhere
  }, [screen]);

  // ── handleNextRound fix: when round updates, auto-start collect ─
  const pendingStart = useRef(false);
  const handleNextRoundFixed = () => {
    if (round + 1 >= SURVEY_ROUNDS.length) {
      setScreen('game-complete');
    } else {
      pendingStart.current = true;
      setRound(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (pendingStart.current) {
      pendingStart.current = false;
      startCollectPhase();
    }
  }, [round, startCollectPhase]);

  // ── RENDER ───────────────────────────────────────────────────────

  // Intro Screen
  if (screen === 'intro') {
    return (
      <div className="pet-survey">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="bg-paw" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}>🐾</div>
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-icon bounce-1">📊</span>
              <h1>Pet Survey</h1>
              <span className="logo-icon bounce-2">🐾</span>
            </div>
            <p className="tagline">Be a Data Detective!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="npc-mini">👧</span>
                  <span className="speech-mini">🐕</span>
                  <span className="arrow-icon">→</span>
                  <span className="btn-mini">✓</span>
                </div>
                <p><strong>COLLECT</strong> — Tap the pet each person likes!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="icon-mini">🐈</span>
                  <span className="arrow-icon">→</span>
                  <span className="graph-mini">📊</span>
                </div>
                <p><strong>BUILD</strong> — Drag icons to build a picture graph!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mag-mini">🔍</span>
                  <span className="q-mini">❓</span>
                  <span className="arrow-icon">→</span>
                  <span className="badge-mini">🏅</span>
                </div>
                <p><strong>ANALYZE</strong> — Answer questions to earn your badge!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-emoji">🏪</span>
              Open the Pet Shop!
              <span className="btn-emoji">🐾</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Game Complete Screen
  if (screen === 'game-complete') {
    return (
      <div className="pet-survey">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {['📊', '🐕', '🐈', '🐟', '🐦', '🐇', '🏅', '⭐'].map((e, i) => (
              <div key={i} className="floating-item" style={{ left: `${10 + i * 11}%`, animationDelay: `${i * 0.3}s` }}>{e}</div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">🎉 Master Surveyor! 🎉</h1>
            <div className="badge-display">
              <div className="big-badge">🏅</div>
              <p>All {SURVEY_ROUNDS.length} surveys complete!</p>
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Surveys Done</span>
                <span className="score-value">{SURVEY_ROUNDS.length}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="start-btn" onClick={() => { setRound(0); setScore(0); startCollectPhase(); }}>
                Play Again
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Round Complete Screen
  if (screen === 'round-complete') {
    return (
      <div className="pet-survey">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {currentRound.categories.map((c, i) => (
              <div key={i} className="floating-item" style={{ left: `${10 + i * 18}%`, animationDelay: `${i * 0.3}s` }}>{c.emoji}</div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">🏅 Survey Complete! 🏅</h1>
            <p className="round-label">{currentRound.title} — Round {round + 1} of {SURVEY_ROUNDS.length}</p>
            <div className="results-mini">
              {tallies.map((t, i) => (
                <div key={t.category} className="result-item">
                  <span className="result-emoji">{currentRound.categories[i]?.emoji}</span>
                  <span className="result-name">{t.category}</span>
                  <span className="result-count">{t.count}</span>
                </div>
              ))}
            </div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Questions Right</span>
                <span className="score-value">{answeredCorrectly}/{questions.length}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="start-btn" onClick={handleNextRoundFixed}>
                {round + 1 < SURVEY_ROUNDS.length ? `Survey ${round + 2} →` : 'See Final Results!'}
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className="particle" style={{
              left: p.x, top: p.y, opacity: p.life,
              width: p.emoji ? 'auto' : p.size, height: p.emoji ? 'auto' : p.size,
              backgroundColor: p.emoji ? 'transparent' : p.color,
              fontSize: p.emoji ? `${p.size * 2}px` : undefined,
              borderRadius: p.emoji ? 'none' : '50%',
            }}>{p.emoji || ''}</div>
          ))}
        </div>
      </div>
    );
  }

  // ── COLLECT Screen ─────────────────────────────────────────────
  if (screen === 'collect') {
    const currentNpc = npcs[currentNpcIndex];
    const npcFavEmoji = currentNpc ? currentRound.categories[currentNpc.favouriteIndex]?.emoji : '';
    const progress = currentNpcIndex / npcs.length;

    return (
      <div className="pet-survey" ref={containerRef}>
        <style>{styles}</style>
        <div className="game-screen">
          <div className="game-header">
            <div className="header-left">
              <button className="back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>←</button>
              <div className="level-badge">Survey {round + 1}</div>
              <div className="phase-badge collect-phase">📋 Collect</div>
            </div>
            <div className="header-center">
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ width: `${progress * 100}%` }} />
                <span className="progress-text">{currentNpcIndex}/{npcs.length}</span>
              </div>
            </div>
            <div className="header-right">
              <div className="score-badge">
                <span className="score-icon">⭐</span>
                <span>{score}</span>
              </div>
            </div>
          </div>

          <div className="collect-area">
            {/* Pet shop background */}
            <div className="shop-bg">
              <div className="shop-shelf shelf-1">
                <span>🐕</span><span>🐈</span><span>🐟</span>
              </div>
              <div className="shop-shelf shelf-2">
                <span>🐦</span><span>🐇</span><span>🐹</span>
              </div>
              <div className="shop-counter" />
            </div>

            {/* NPC area */}
            <div className="npc-stage">
              {currentNpc && currentNpcIndex < npcs.length && (
                <div
                  className={`npc ${npcExiting ? 'npc-exit' : ''}`}
                  style={{ left: `${currentNpc.walkX}%`, opacity: npcExiting ? 0 : currentNpc.opacity }}
                >
                  <div className="npc-emoji">{currentNpc.emoji}</div>
                  {showSpeechBubble && (
                    <div className="speech-bubble">
                      <span className="speech-text">I love</span>
                      <span className="speech-icon">{npcFavEmoji}</span>
                    </div>
                  )}
                </div>
              )}
              {currentNpcIndex >= npcs.length && (
                <div className="all-done-msg">
                  <span>✅</span> All responses collected!
                </div>
              )}
            </div>

            {/* Clipboard / Tally area */}
            <div className="clipboard">
              <div className="clipboard-top" />
              <div className="clipboard-title">{currentRound.title}</div>
              <div className="tally-list">
                {tallies.map((t, i) => (
                  <div key={t.category} className="tally-row">
                    <span className="tally-emoji">{currentRound.categories[i]?.emoji}</span>
                    <span className="tally-name">{t.category}</span>
                    <div className="tally-marks">
                      {[...Array(t.count)].map((_, j) => (
                        <span key={j} className={`tally-mark ${j === t.count - 1 ? 'tally-new' : ''}`}>
                          {(j + 1) % 5 === 0 ? '/' : '|'}
                        </span>
                      ))}
                    </div>
                    <span className="tally-count">{t.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback */}
            {collectFeedback && (
              <div className={`collect-feedback ${collectFeedback.correct ? 'correct' : 'incorrect'}`}>
                {collectFeedback.correct ? '✓' : '✗'}
              </div>
            )}
          </div>

          {/* Category buttons */}
          <div className="category-buttons">
            {currentRound.categories.map((cat, i) => (
              <button
                key={cat.name}
                className={`cat-btn ${collectFeedback?.emoji === cat.emoji && collectFeedback?.correct ? 'cat-btn-correct' : ''} ${collectFeedback?.emoji === cat.emoji && !collectFeedback?.correct ? 'cat-btn-wrong' : ''}`}
                onClick={() => handleCategoryTap(i)}
                disabled={npcWalking || !showSpeechBubble || npcExiting}
              >
                <span className="cat-btn-emoji">{cat.emoji}</span>
                <span className="cat-btn-label">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="particle" style={{
            left: p.x, top: p.y, opacity: p.life,
            width: p.emoji ? 'auto' : p.size, height: p.emoji ? 'auto' : p.size,
            backgroundColor: p.emoji ? 'transparent' : p.color,
            fontSize: p.emoji ? `${p.size * 2}px` : undefined,
            borderRadius: p.emoji ? 'none' : '50%',
          }}>{p.emoji || ''}</div>
        ))}
      </div>
    );
  }

  // ── BUILD Screen ───────────────────────────────────────────────
  if (screen === 'build') {
    const cats = currentRound.categories;
    const maxCount = Math.max(...tallies.map(t => t.count), 1);
    const totalNeeded = tallies.reduce((s, t) => s + t.count, 0);

    return (
      <div className="pet-survey" ref={containerRef}>
        <style>{styles}</style>
        <div className="game-screen">
          <div className="game-header">
            <div className="header-left">
              <button className="back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>←</button>
              <div className="level-badge">Survey {round + 1}</div>
              <div className="phase-badge build-phase">📊 Build</div>
            </div>
            <div className="header-center">
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill build-fill" style={{ width: `${(placedCount / totalNeeded) * 100}%` }} />
                <span className="progress-text">{placedCount}/{totalNeeded}</span>
              </div>
            </div>
            <div className="header-right">
              <div className="score-badge">
                <span className="score-icon">⭐</span>
                <span>{score}</span>
              </div>
            </div>
          </div>

          <div className="build-instruction">
            Drag each icon into the correct column! 📊
          </div>

          <div className="build-area">
            {/* Picture graph */}
            <div className="graph-container" ref={graphRef}>
              {/* Y-axis numbers */}
              <div className="y-axis">
                {[...Array(maxCount)].map((_, i) => (
                  <div key={i} className="y-label">{maxCount - i}</div>
                ))}
              </div>
              {/* Grid */}
              <div className="graph-grid">
                {cats.map((cat, colIdx) => (
                  <div key={cat.name} className="graph-column">
                    {[...Array(maxCount)].map((_, rowIdx) => {
                      const actualRow = maxCount - 1 - rowIdx;
                      const cell = graphCells.find(c => c.category === cat.name && c.row === actualRow);
                      return (
                        <div key={rowIdx} className={`graph-cell ${cell?.filled ? 'filled' : ''}`}>
                          {cell?.filled && <span className="cell-icon pop-in">{cat.emoji}</span>}
                        </div>
                      );
                    })}
                    <div className="x-label">
                      <span className="x-emoji">{cat.emoji}</span>
                      <span className="x-name">{cat.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pop effect */}
            {popEffect && (
              <div className="pop-effect" style={{ left: popEffect.x, top: popEffect.y }}>✨</div>
            )}
          </div>

          {/* Icon tray */}
          <div className="icon-tray" ref={trayRef}>
            <div className="tray-label">Drag icons up to the graph:</div>
            <div className="tray-icons">
              {dragIcons.filter(ic => !ic.placed).map(icon => (
                <div
                  key={icon.id}
                  className={`drag-icon ${draggedIcon?.id === icon.id ? 'dragging' : ''} ${bounceBack === icon.id ? 'bounce-back' : ''}`}
                  style={draggedIcon?.id === icon.id ? {
                    position: 'fixed',
                    left: icon.x + (containerRef.current?.getBoundingClientRect().left || 0) - 30,
                    top: icon.y + (containerRef.current?.getBoundingClientRect().top || 0) - 30,
                    zIndex: 1000,
                    pointerEvents: 'none',
                  } : {}}
                  onMouseDown={(e) => handleBuildDragStart(e, icon)}
                  onTouchStart={(e) => handleBuildDragStart(e, icon)}
                >
                  <span className="drag-icon-emoji">{icon.emoji}</span>
                </div>
              ))}
              {dragIcons.filter(ic => !ic.placed).length === 0 && !buildComplete && (
                <div className="tray-empty">All placed! ✓</div>
              )}
            </div>
          </div>

          {buildComplete && (
            <div className="build-complete-overlay">
              <div className="build-complete-msg">
                <span>📊</span> Graph Complete!
              </div>
            </div>
          )}
        </div>

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="particle" style={{
            left: p.x, top: p.y, opacity: p.life,
            width: p.emoji ? 'auto' : p.size, height: p.emoji ? 'auto' : p.size,
            backgroundColor: p.emoji ? 'transparent' : p.color,
            fontSize: p.emoji ? `${p.size * 2}px` : undefined,
            borderRadius: p.emoji ? 'none' : '50%',
          }}>{p.emoji || ''}</div>
        ))}
      </div>
    );
  }

  // ── ANALYZE Screen ─────────────────────────────────────────────
  if (screen === 'analyze') {
    const q = questions[currentQuestion];
    const cats = currentRound.categories;
    const maxCount = Math.max(...tallies.map(t => t.count), 1);

    return (
      <div className="pet-survey" ref={containerRef}>
        <style>{styles}</style>
        <div className="game-screen">
          <div className="game-header">
            <div className="header-left">
              <button className="back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>←</button>
              <div className="level-badge">Survey {round + 1}</div>
              <div className="phase-badge analyze-phase">🔍 Analyze</div>
            </div>
            <div className="header-center">
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill analyze-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
                <span className="progress-text">Q{currentQuestion + 1}/{questions.length}</span>
              </div>
            </div>
            <div className="header-right">
              <div className="score-badge">
                <span className="score-icon">⭐</span>
                <span>{score}</span>
              </div>
            </div>
          </div>

          <div className="analyze-area">
            {/* Mini graph reference */}
            <div className="mini-graph">
              <div className="mini-graph-inner">
                {cats.map((cat) => {
                  const count = tallies.find(t => t.category === cat.name)?.count || 0;
                  const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <div key={cat.name} className="mini-bar-col">
                      <div className="mini-bar-wrap">
                        <div className="mini-bar" style={{ height: `${heightPct}%` }}>
                          <span className="mini-bar-count">{count}</span>
                        </div>
                      </div>
                      <span className="mini-bar-label">{cat.emoji}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Question card */}
            <div className="question-card">
              <div className="question-magnify">🔍</div>
              <h2 className="question-text">{q?.text}</h2>
              <div className="answer-options">
                {q?.options.map((opt, i) => {
                  let optClass = 'answer-bubble';
                  if (analyzeAnswer !== null) {
                    if (i === q.correctIndex) optClass += ' answer-correct';
                    else if (i === analyzeAnswer) optClass += ' answer-wrong';
                  }
                  return (
                    <button
                      key={i}
                      className={optClass}
                      onClick={() => handleAnalyzeAnswer(i)}
                      disabled={analyzeAnswer !== null}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {showHint && (
                <div className="hint-arrow">
                  <span>👆</span> Look at the graph!
                </div>
              )}
              {analyzeAnswer !== null && analyzeAnswer === q?.correctIndex && (
                <div className="correct-badge">
                  <span>🏅</span> Correct!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Particles */}
        {particles.map(p => (
          <div key={p.id} className="particle" style={{
            left: p.x, top: p.y, opacity: p.life,
            width: p.emoji ? 'auto' : p.size, height: p.emoji ? 'auto' : p.size,
            backgroundColor: p.emoji ? 'transparent' : p.color,
            fontSize: p.emoji ? `${p.size * 2}px` : undefined,
            borderRadius: p.emoji ? 'none' : '50%',
          }}>{p.emoji || ''}</div>
        ))}
      </div>
    );
  }

  return null;
}

// ── STYLES ───────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .pet-survey {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #fbbf24 100%);
    position: relative;
  }

  /* ── PARTICLES ───────────────────────────────────────────────── */
  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 9999;
    will-change: transform;
  }

  /* ── INTRO SCREEN ────────────────────────────────────────────── */
  .intro-screen, .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .bg-paw {
    position: absolute;
    opacity: 0.15;
    animation: floatPaw 6s ease-in-out infinite;
  }

  @keyframes floatPaw {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
    50% { transform: translateY(-20px) rotate(15deg); opacity: 0.25; }
  }

  .intro-content, .complete-content {
    position: relative; z-index: 10; text-align: center; padding: 1.5rem; max-width: 500px;
  }

  .logo { display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.3rem; }

  .logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    font-weight: 900;
    color: #78350f;
    text-shadow: 0 2px 0 rgba(255,255,255,0.3);
  }

  .logo-icon { font-size: 2.2rem; }
  .bounce-1 { animation: logoBounce 2s ease-in-out infinite; }
  .bounce-2 { animation: logoBounce 2s ease-in-out infinite 0.3s; }

  @keyframes logoBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(8deg); }
  }

  .tagline { color: #92400e; font-size: 1.15rem; margin-bottom: 1.5rem; font-weight: 600; }

  .instructions-card {
    background: rgba(255,255,255,0.6);
    border: 3px solid rgba(120,53,15,0.15);
    border-radius: 24px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 { color: #78350f; font-size: 1.1rem; margin-bottom: 1rem; }

  .instruction { margin-bottom: 1.2rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;
  }

  .npc-mini, .icon-mini, .mag-mini, .q-mini, .badge-mini { font-size: 1.8rem; }
  .speech-mini { font-size: 1.5rem; background: white; border-radius: 12px; padding: 0.15rem 0.4rem; }
  .btn-mini { font-size: 1.2rem; background: #4ade80; color: white; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; }
  .graph-mini { font-size: 1.8rem; }
  .arrow-icon { color: #92400e; font-size: 1rem; font-weight: 800; }

  .instruction p { color: #78350f; font-size: 0.9rem; }
  .instruction strong { color: #92400e; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 0.9rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.1rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #f97316, #ea580c);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(249,115,22,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(249,115,22,0.5);
  }

  .btn-emoji { font-size: 1.3rem; }

  /* ── COMPLETE SCREEN ─────────────────────────────────────────── */
  .complete-bg { position: absolute; inset: 0; overflow: hidden; }

  .floating-item {
    position: absolute; top: 15%; font-size: 3rem;
    animation: floatItem 3s ease-in-out infinite;
  }

  @keyframes floatItem {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
  }

  .complete-title { font-size: clamp(1.5rem, 5vw, 2.2rem); color: #78350f; margin-bottom: 1rem; }

  .badge-display { margin-bottom: 1.5rem; }
  .big-badge { font-size: 4rem; animation: badgePulse 2s ease-in-out infinite; }
  @keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15) rotate(5deg); }
  }
  .badge-display p { color: #92400e; font-size: 1rem; margin-top: 0.5rem; font-weight: 600; }

  .round-label { color: #92400e; font-size: 1rem; margin-bottom: 1rem; font-weight: 600; }

  .results-mini { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.6rem; margin-bottom: 1.2rem; }
  .result-item {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.4rem 0.8rem; background: rgba(255,255,255,0.5);
    border-radius: 16px; font-size: 0.85rem; color: #78350f; font-weight: 700;
  }
  .result-emoji { font-size: 1.2rem; }
  .result-count { background: #f97316; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.8rem; }

  .score-card { display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.5rem; }
  .score-item { display: flex; flex-direction: column; align-items: center; }
  .score-label { font-size: 0.8rem; color: #92400e; margin-bottom: 0.2rem; }
  .score-value { font-size: 1.8rem; font-weight: 900; color: #78350f; }

  .complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  .menu-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #92400e;
    background: transparent; border: 2px solid rgba(120,53,15,0.3);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .menu-btn:hover { border-color: rgba(120,53,15,0.6); color: #78350f; background: rgba(255,255,255,0.3); }

  /* ── GAME SCREEN (shared) ────────────────────────────────────── */
  .game-screen { height: 100%; display: flex; flex-direction: column; position: relative; }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(120,53,15,0.15); z-index: 50;
    backdrop-filter: blur(5px); flex-shrink: 0;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.5rem; }
  .header-center { flex: 1; display: flex; justify-content: center; padding: 0 0.5rem; }

  .back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.4);
    border: none; border-radius: 10px; color: #78350f; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease; font-weight: 800;
  }
  .back-btn:hover { background: rgba(255,255,255,0.6); }

  .level-badge {
    padding: 0.35rem 0.8rem; background: linear-gradient(135deg, #f97316, #ea580c);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
  }

  .phase-badge {
    padding: 0.35rem 0.8rem; border-radius: 16px; font-weight: 700; font-size: 0.8rem;
  }
  .collect-phase { background: rgba(74,222,128,0.3); color: #166534; }
  .build-phase { background: rgba(56,189,248,0.3); color: #0c4a6e; }
  .analyze-phase { background: rgba(192,132,252,0.3); color: #581c87; }

  .progress-bar-wrap {
    position: relative; width: 100%; max-width: 180px; height: 24px;
    background: rgba(255,255,255,0.4); border-radius: 12px; overflow: hidden;
  }
  .progress-bar-fill {
    position: absolute; left: 0; top: 0; bottom: 0;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 12px; transition: width 0.4s ease;
  }
  .progress-bar-fill.build-fill { background: linear-gradient(90deg, #38bdf8, #0284c7); }
  .progress-bar-fill.analyze-fill { background: linear-gradient(90deg, #c084fc, #9333ea); }
  .progress-text {
    position: relative; z-index: 2; display: flex; align-items: center; justify-content: center;
    height: 100%; font-size: 0.75rem; font-weight: 800; color: #78350f;
  }

  .score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.8rem; background: rgba(251,191,36,0.3);
    border-radius: 16px; color: #92400e; font-weight: 800; font-size: 0.85rem;
  }
  .score-icon { font-size: 1rem; }

  /* ── COLLECT PHASE ───────────────────────────────────────────── */
  .collect-area {
    flex: 1; display: flex; position: relative; overflow: hidden;
    min-height: 0;
  }

  .shop-bg {
    position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(180deg, #fef9c3 0%, #fef3c7 60%, #d4a574 100%);
  }

  .shop-shelf {
    position: absolute; display: flex; gap: 1.5rem; font-size: 1.8rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(180deg, #a16207, #92400e);
    border-radius: 0 0 8px 8px;
  }
  .shelf-1 { top: 0; right: 8%; }
  .shelf-2 { top: 0; left: 8%; }

  .shop-counter {
    position: absolute; bottom: 0; left: 0; right: 0; height: 25%;
    background: linear-gradient(180deg, #92400e, #78350f);
    border-top: 4px solid #a16207;
  }

  .npc-stage {
    position: absolute; bottom: 26%; left: 0; right: 0; height: 40%;
    display: flex; align-items: flex-end; justify-content: center;
  }

  .npc {
    position: absolute; bottom: 0; display: flex; flex-direction: column; align-items: center;
    transition: left 0.05s linear, opacity 0.3s ease;
  }

  .npc-exit {
    animation: npcExit 0.5s ease forwards;
  }

  @keyframes npcExit {
    0% { transform: translateX(0) scale(1); opacity: 1; }
    100% { transform: translateX(120px) scale(0.8); opacity: 0; }
  }

  .npc-emoji {
    font-size: clamp(3rem, 10vw, 5rem);
    animation: npcBob 1.5s ease-in-out infinite;
  }

  @keyframes npcBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .speech-bubble {
    position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%);
    background: white; border-radius: 20px; padding: 0.5rem 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    display: flex; align-items: center; gap: 0.5rem;
    white-space: nowrap;
    animation: speechPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .speech-bubble::after {
    content: ''; position: absolute; top: 100%; left: 50%;
    transform: translateX(-50%);
    border: 8px solid transparent; border-top-color: white;
  }

  @keyframes speechPop {
    0% { transform: translateX(-50%) scale(0); opacity: 0; }
    100% { transform: translateX(-50%) scale(1); opacity: 1; }
  }

  .speech-text { color: #78350f; font-weight: 700; font-size: 0.9rem; }
  .speech-icon { font-size: 1.8rem; }

  .clipboard {
    position: absolute; top: 5%; right: 3%; width: clamp(120px, 28%, 180px);
    background: #fef9c3; border: 2px solid #d4a574; border-radius: 12px;
    padding: 0.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 20;
  }

  .clipboard-top {
    width: 50%; height: 12px; background: #92400e; border-radius: 0 0 6px 6px;
    margin: -0.5rem auto 0.3rem;
  }

  .clipboard-title {
    font-size: 0.65rem; font-weight: 800; color: #78350f; text-align: center;
    margin-bottom: 0.3rem; text-transform: uppercase; letter-spacing: 0.05em;
  }

  .tally-list { display: flex; flex-direction: column; gap: 0.15rem; }

  .tally-row {
    display: flex; align-items: center; gap: 0.2rem; padding: 0.15rem 0.2rem;
    font-size: 0.65rem;
  }

  .tally-emoji { font-size: 0.9rem; width: 18px; text-align: center; }
  .tally-name { color: #78350f; font-weight: 600; width: 35px; font-size: 0.55rem; overflow: hidden; text-overflow: ellipsis; }

  .tally-marks { display: flex; gap: 1px; flex: 1; flex-wrap: wrap; min-height: 14px; }

  .tally-mark {
    color: #92400e; font-weight: 900; font-size: 0.7rem; line-height: 1;
    font-family: 'Courier New', monospace;
  }
  .tally-new { animation: tallyScribble 0.3s ease; color: #ea580c; }

  @keyframes tallyScribble {
    0% { transform: scaleY(0) rotate(-20deg); opacity: 0; }
    50% { transform: scaleY(1.3) rotate(5deg); opacity: 1; }
    100% { transform: scaleY(1) rotate(0deg); opacity: 1; }
  }

  .tally-count {
    font-weight: 800; color: #f97316; font-size: 0.7rem; width: 16px; text-align: right;
  }

  .collect-feedback {
    position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);
    font-size: 4rem; font-weight: 900; z-index: 100;
    animation: feedbackPop 0.5s ease forwards;
    pointer-events: none;
  }
  .collect-feedback.correct { color: #16a34a; }
  .collect-feedback.incorrect { color: #dc2626; }

  @keyframes feedbackPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    40% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
  }

  .all-done-msg {
    text-align: center; font-size: 1.2rem; font-weight: 800; color: #166534;
    background: rgba(255,255,255,0.7); padding: 1rem 2rem; border-radius: 20px;
    animation: doneSlide 0.5s ease;
  }

  @keyframes doneSlide {
    0% { transform: translateY(30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  /* ── CATEGORY BUTTONS ────────────────────────────────────────── */
  .category-buttons {
    display: flex; justify-content: center; gap: 0.5rem; padding: 0.6rem 0.5rem;
    background: rgba(120,53,15,0.1); flex-shrink: 0; flex-wrap: wrap;
  }

  .cat-btn {
    display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
    padding: 0.5rem 0.7rem; background: white; border: 3px solid #d4a574;
    border-radius: 16px; cursor: pointer; transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif; min-width: 60px;
  }

  .cat-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); border-color: #f97316; }
  .cat-btn:active:not(:disabled) { transform: translateY(0) scale(0.95); }
  .cat-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .cat-btn-correct { border-color: #16a34a; background: #dcfce7; animation: btnCorrect 0.4s ease; }
  .cat-btn-wrong { border-color: #dc2626; background: #fef2f2; animation: btnShake 0.4s ease; }

  @keyframes btnCorrect {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes btnShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  .cat-btn-emoji { font-size: 1.6rem; }
  .cat-btn-label { font-size: 0.65rem; font-weight: 700; color: #78350f; }

  /* ── BUILD PHASE ─────────────────────────────────────────────── */
  .build-instruction {
    text-align: center; padding: 0.4rem; font-size: 0.9rem;
    font-weight: 700; color: #0c4a6e;
    background: rgba(56,189,248,0.15); flex-shrink: 0;
  }

  .build-area {
    flex: 1; display: flex; align-items: center; justify-content: center;
    padding: 0.5rem; min-height: 0; position: relative;
    background: linear-gradient(180deg, #f0f9ff, #e0f2fe);
  }

  .graph-container {
    display: flex; align-items: stretch;
    background: white; border: 3px solid #0284c7; border-radius: 16px;
    padding: 0.8rem 0.5rem 0.3rem;
    box-shadow: 0 4px 20px rgba(2,132,199,0.15);
    max-width: 95%; max-height: 100%; width: 100%;
  }

  .y-axis {
    display: flex; flex-direction: column; justify-content: space-between;
    padding-right: 0.3rem; min-width: 20px;
  }
  .y-label { font-size: 0.65rem; font-weight: 700; color: #64748b; text-align: right; height: 0; display: flex; align-items: center; }

  .graph-grid {
    flex: 1; display: flex; gap: 2px;
    border-left: 3px solid #0284c7; border-bottom: 3px solid #0284c7;
  }

  .graph-column {
    flex: 1; display: flex; flex-direction: column; align-items: stretch;
    justify-content: flex-end;
  }

  .graph-cell {
    aspect-ratio: 1;
    max-height: 50px;
    border: 1px dashed rgba(2,132,199,0.2);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.3s ease;
    min-height: 28px;
  }

  .graph-cell.filled {
    background: rgba(56,189,248,0.15);
    border-color: rgba(2,132,199,0.3);
  }

  .cell-icon { font-size: clamp(1rem, 3vw, 1.6rem); }

  .pop-in { animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }

  @keyframes popIn {
    0% { transform: scale(0) rotate(-20deg); }
    60% { transform: scale(1.3) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .x-label {
    display: flex; flex-direction: column; align-items: center;
    padding-top: 0.3rem; gap: 0.1rem;
  }
  .x-emoji { font-size: clamp(1rem, 3vw, 1.5rem); }
  .x-name { font-size: 0.5rem; font-weight: 700; color: #0c4a6e; text-align: center; }

  .pop-effect {
    position: absolute; font-size: 1.5rem; pointer-events: none; z-index: 100;
    transform: translate(-50%, -50%);
    animation: popEffectAnim 0.5s ease forwards;
  }

  @keyframes popEffectAnim {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(1); opacity: 0; }
  }

  /* ── ICON TRAY ───────────────────────────────────────────────── */
  .icon-tray {
    padding: 0.5rem; background: rgba(2,132,199,0.1);
    border-top: 2px solid rgba(2,132,199,0.2); flex-shrink: 0;
  }

  .tray-label { font-size: 0.75rem; font-weight: 700; color: #0c4a6e; text-align: center; margin-bottom: 0.3rem; }

  .tray-icons {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem;
    min-height: 50px; align-items: center;
  }

  .drag-icon {
    width: 52px; height: 52px; background: white; border: 3px solid #38bdf8;
    border-radius: 14px; display: flex; align-items: center; justify-content: center;
    cursor: grab; transition: transform 0.2s ease, box-shadow 0.2s ease;
    touch-action: none;
  }

  .drag-icon:hover { transform: scale(1.1); box-shadow: 0 4px 15px rgba(56,189,248,0.3); }

  .drag-icon.dragging {
    cursor: grabbing; transform: scale(1.2);
    box-shadow: 0 8px 25px rgba(56,189,248,0.5);
    border-color: #0284c7;
  }

  .drag-icon.bounce-back {
    animation: bounceBack 0.4s ease;
    border-color: #dc2626;
  }

  @keyframes bounceBack {
    0% { transform: scale(1.2); }
    25% { transform: scale(0.8) translateX(-10px); }
    50% { transform: scale(1.1) translateX(8px); }
    75% { transform: scale(0.95) translateX(-4px); }
    100% { transform: scale(1) translateX(0); }
  }

  .drag-icon-emoji { font-size: 1.6rem; pointer-events: none; }

  .tray-empty { font-size: 0.85rem; font-weight: 700; color: #16a34a; }

  .build-complete-overlay {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,0.2); z-index: 200; pointer-events: none;
  }

  .build-complete-msg {
    padding: 1rem 2rem; background: white; border-radius: 24px;
    font-size: 1.3rem; font-weight: 900; color: #0284c7;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    animation: completeSlide 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes completeSlide {
    0% { transform: scale(0) rotate(-10deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  /* ── ANALYZE PHASE ───────────────────────────────────────────── */
  .analyze-area {
    flex: 1; display: flex; flex-direction: column; align-items: center;
    padding: 0.8rem; gap: 0.8rem; min-height: 0; overflow-y: auto;
    background: linear-gradient(180deg, #faf5ff, #f3e8ff);
  }

  .mini-graph {
    width: 100%; max-width: 400px;
    background: white; border: 2px solid #9333ea; border-radius: 16px;
    padding: 0.8rem; box-shadow: 0 4px 15px rgba(147,51,234,0.15);
  }

  .mini-graph-inner { display: flex; align-items: flex-end; justify-content: center; gap: 0.5rem; height: 100px; }

  .mini-bar-col { display: flex; flex-direction: column; align-items: center; flex: 1; height: 100%; }

  .mini-bar-wrap {
    flex: 1; width: 100%; display: flex; flex-direction: column; justify-content: flex-end;
    align-items: center;
  }

  .mini-bar {
    width: 80%; max-width: 50px;
    background: linear-gradient(180deg, #c084fc, #9333ea);
    border-radius: 6px 6px 0 0; transition: height 0.5s ease;
    display: flex; align-items: flex-start; justify-content: center;
    min-height: 2px; position: relative;
  }

  .mini-bar-count {
    position: absolute; top: -18px; font-size: 0.7rem; font-weight: 800; color: #581c87;
  }

  .mini-bar-label { font-size: 1.2rem; margin-top: 0.2rem; }

  .question-card {
    width: 100%; max-width: 420px;
    background: white; border: 3px solid #9333ea; border-radius: 20px;
    padding: 1.2rem; text-align: center; position: relative;
    box-shadow: 0 4px 20px rgba(147,51,234,0.15);
  }

  .question-magnify {
    position: absolute; top: -18px; left: 50%; transform: translateX(-50%);
    font-size: 2rem; background: white; border-radius: 50%; padding: 0 0.3rem;
    animation: magnifyWobble 2s ease-in-out infinite;
  }

  @keyframes magnifyWobble {
    0%, 100% { transform: translateX(-50%) rotate(0deg); }
    25% { transform: translateX(-50%) rotate(-10deg); }
    75% { transform: translateX(-50%) rotate(10deg); }
  }

  .question-text {
    font-size: clamp(0.9rem, 3vw, 1.15rem); font-weight: 800; color: #581c87;
    margin: 0.8rem 0 1rem; line-height: 1.4;
  }

  .answer-options { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; }

  .answer-bubble {
    padding: 0.6rem 1.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 800; color: #581c87;
    background: linear-gradient(135deg, #f3e8ff, #e9d5ff);
    border: 3px solid #c084fc; border-radius: 50px;
    cursor: pointer; transition: all 0.2s ease;
    min-width: 60px;
  }

  .answer-bubble:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(147,51,234,0.2);
    border-color: #9333ea;
  }

  .answer-bubble:active:not(:disabled) { transform: scale(0.95); }
  .answer-bubble:disabled { cursor: default; }

  .answer-correct {
    background: linear-gradient(135deg, #dcfce7, #bbf7d0) !important;
    border-color: #16a34a !important; color: #166534 !important;
    animation: answerPop 0.4s ease;
    box-shadow: 0 0 20px rgba(22,163,74,0.3);
  }

  .answer-wrong {
    background: linear-gradient(135deg, #fef2f2, #fecaca) !important;
    border-color: #dc2626 !important; color: #991b1b !important;
    animation: btnShake 0.4s ease;
  }

  @keyframes answerPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .hint-arrow {
    margin-top: 0.8rem; font-size: 0.9rem; font-weight: 700; color: #dc2626;
    animation: hintBounce 1s ease-in-out infinite;
  }

  @keyframes hintBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  .correct-badge {
    margin-top: 0.8rem; font-size: 1.2rem; font-weight: 900; color: #16a34a;
    animation: badgeAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes badgeAppear {
    0% { transform: scale(0) rotate(-30deg); opacity: 0; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  /* ── RESPONSIVE ──────────────────────────────────────────────── */
  @media (max-width: 500px) {
    .header-center { max-width: 100px; }
    .phase-badge { display: none; }
    .clipboard { width: clamp(100px, 25%, 140px); }
    .tally-name { display: none; }
    .cat-btn { min-width: 50px; padding: 0.4rem 0.5rem; }
    .cat-btn-emoji { font-size: 1.3rem; }
    .cat-btn-label { font-size: 0.55rem; }
    .drag-icon { width: 44px; height: 44px; }
    .drag-icon-emoji { font-size: 1.3rem; }
    .question-text { font-size: 0.85rem; }
    .answer-bubble { padding: 0.5rem 0.8rem; font-size: 0.85rem; min-width: 50px; }
  }

  @media (max-width: 360px) {
    .game-header { padding: 0.4rem 0.5rem; }
    .level-badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; }
    .category-buttons { gap: 0.3rem; padding: 0.4rem; }
  }
`;
