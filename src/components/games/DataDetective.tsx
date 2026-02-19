"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ── Types ──────────────────────────────────────────────────────────────
interface Specimen {
  id: number;
  category: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularV: number;
  scale: number;
  opacity: number;
  collected: boolean;
  collectAnim: number; // 0 = not collecting, >0 = animation progress
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
  type: 'sparkle' | 'leaf' | 'dust' | 'confetti';
}

interface AmbientCreature {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'butterfly' | 'bee' | 'ladybug';
  wingPhase: number;
  wobblePhase: number;
}

interface SortBucket {
  categoryIndex: number;
  items: number[];
  highlight: boolean;
}

interface GraphColumn {
  categoryIndex: number;
  count: number;
  animatedCount: number;
}

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
  type: 'most' | 'least' | 'howMany' | 'fewer' | 'more' | 'howManyMore';
}

interface CaseConfig {
  name: string;
  specimenType: string;
  categories: CategoryDef[];
  bgVariant: number;
}

interface CategoryDef {
  name: string;
  emoji: string;
  color: string;
  hue: number;
}

interface DragState {
  itemId: number;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  categoryIndex: number;
}

interface Badge {
  caseNumber: number;
  caseName: string;
  emoji: string;
}

type GameScreen = 'intro' | 'collect' | 'sort' | 'graph' | 'question' | 'caseSolved' | 'caseBoard';
type Phase = 'collect' | 'sort' | 'graph';

// ── Constants ──────────────────────────────────────────────────────────
const FRICTION = 0.985;
const BOUNCE = 0.6;
const COLLECT_ANIM_DURATION = 500;

const CASE_CONFIGS: CaseConfig[] = [
  {
    name: 'Garden Bugs',
    specimenType: 'bugs',
    categories: [
      { name: 'Red Bugs', emoji: '🐞', color: '#ef4444', hue: 0 },
      { name: 'Blue Bugs', emoji: '🦋', color: '#3b82f6', hue: 220 },
    ],
    bgVariant: 0,
  },
  {
    name: 'Colourful Leaves',
    specimenType: 'leaves',
    categories: [
      { name: 'Green Leaves', emoji: '🍃', color: '#22c55e', hue: 140 },
      { name: 'Orange Leaves', emoji: '🍂', color: '#f97316', hue: 30 },
    ],
    bgVariant: 1,
  },
  {
    name: 'Beach Shells',
    specimenType: 'shells',
    categories: [
      { name: 'Pink Shells', emoji: '🐚', color: '#ec4899', hue: 330 },
      { name: 'White Shells', emoji: '🦪', color: '#e2e8f0', hue: 210 },
    ],
    bgVariant: 2,
  },
  {
    name: 'River Rocks',
    specimenType: 'rocks',
    categories: [
      { name: 'Grey Rocks', emoji: '🪨', color: '#94a3b8', hue: 215 },
      { name: 'Brown Rocks', emoji: '🥔', color: '#a16207', hue: 35 },
      { name: 'White Rocks', emoji: '🥚', color: '#f1f5f9', hue: 0 },
    ],
    bgVariant: 0,
  },
  {
    name: 'Flower Garden',
    specimenType: 'flowers',
    categories: [
      { name: 'Red Flowers', emoji: '🌹', color: '#ef4444', hue: 0 },
      { name: 'Yellow Flowers', emoji: '🌻', color: '#eab308', hue: 50 },
      { name: 'Purple Flowers', emoji: '🪻', color: '#a855f7', hue: 275 },
    ],
    bgVariant: 1,
  },
  {
    name: 'Butterfly Hunt',
    specimenType: 'butterflies',
    categories: [
      { name: 'Blue', emoji: '🦋', color: '#3b82f6', hue: 220 },
      { name: 'Orange', emoji: '🟠', color: '#f97316', hue: 30 },
      { name: 'Pink', emoji: '🩷', color: '#ec4899', hue: 330 },
    ],
    bgVariant: 2,
  },
  {
    name: 'Pond Life',
    specimenType: 'creatures',
    categories: [
      { name: 'Frogs', emoji: '🐸', color: '#22c55e', hue: 140 },
      { name: 'Fish', emoji: '🐠', color: '#f97316', hue: 30 },
      { name: 'Turtles', emoji: '🐢', color: '#65a30d', hue: 90 },
      { name: 'Crabs', emoji: '🦀', color: '#ef4444', hue: 0 },
    ],
    bgVariant: 0,
  },
  {
    name: 'Night Creatures',
    specimenType: 'night bugs',
    categories: [
      { name: 'Fireflies', emoji: '✨', color: '#fbbf24', hue: 45 },
      { name: 'Moths', emoji: '🦗', color: '#a3a3a3', hue: 0 },
      { name: 'Crickets', emoji: '🦟', color: '#65a30d', hue: 90 },
      { name: 'Beetles', emoji: '🪲', color: '#7c3aed', hue: 265 },
    ],
    bgVariant: 1,
  },
];

let idCounter = 0;
const nextId = (): number => ++idCounter;

// ── Helpers ────────────────────────────────────────────────────────────
function getCaseForLevel(level: number): CaseConfig {
  // Levels 1-3: 2 categories, 4-6: 3 categories, 7+: 4 categories
  let pool: CaseConfig[];
  if (level <= 3) {
    pool = CASE_CONFIGS.filter(c => c.categories.length === 2);
  } else if (level <= 6) {
    pool = CASE_CONFIGS.filter(c => c.categories.length === 3);
  } else {
    pool = CASE_CONFIGS.filter(c => c.categories.length >= 3);
  }
  return pool[(level - 1) % pool.length];
}

function getSpecimenCounts(level: number, numCategories: number): number[] {
  const counts: number[] = [];
  if (level <= 3) {
    // Obvious differences
    for (let i = 0; i < numCategories; i++) {
      counts.push(2 + Math.floor(Math.random() * 3) + (i === 0 ? 2 : 0));
    }
  } else if (level <= 6) {
    // Closer counts
    const base = 3 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numCategories; i++) {
      counts.push(base + Math.floor(Math.random() * 3));
    }
  } else {
    // Tighter counts, more items
    const base = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numCategories; i++) {
      counts.push(base + Math.floor(Math.random() * 4));
    }
  }
  return counts;
}

function generateQuestions(
  categories: CategoryDef[],
  counts: number[],
  level: number
): Question[] {
  const questions: Question[] = [];

  // Find most/least
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);
  const maxIdx = counts.indexOf(maxCount);
  const minIdx = counts.indexOf(minCount);

  // "Which type has the MOST?"
  questions.push({
    text: `Which type has the MOST?`,
    options: categories.map(c => c.name),
    correctIndex: maxIdx,
    type: 'most',
  });

  if (level >= 2) {
    // "How many [category]?"
    const askIdx = Math.floor(Math.random() * categories.length);
    questions.push({
      text: `How many ${categories[askIdx].name}?`,
      options: generateNumberOptions(counts[askIdx], categories.length),
      correctIndex: 0, // will be set below
      type: 'howMany',
    });
    // Fix the correct index
    const correctVal = counts[askIdx];
    const opts = questions[questions.length - 1].options;
    questions[questions.length - 1].correctIndex = opts.indexOf(String(correctVal));
  }

  if (level >= 4) {
    // "Which has FEWER?"
    if (categories.length >= 2) {
      const a = Math.floor(Math.random() * categories.length);
      let b = (a + 1) % categories.length;
      questions.push({
        text: `Which has FEWER, ${categories[a].name} or ${categories[b].name}?`,
        options: [categories[a].name, categories[b].name],
        correctIndex: counts[a] <= counts[b] ? 0 : 1,
        type: 'fewer',
      });
    }
  }

  if (level >= 5) {
    // "Which has the LEAST?"
    questions.push({
      text: `Which type has the LEAST?`,
      options: categories.map(c => c.name),
      correctIndex: minIdx,
      type: 'least',
    });
  }

  if (level >= 7) {
    // "How many more X than Y?"
    if (categories.length >= 2) {
      const sorted = counts.map((c, i) => ({ c, i })).sort((a, b) => b.c - a.c);
      const highIdx = sorted[0].i;
      const lowIdx = sorted[sorted.length - 1].i;
      const diff = counts[highIdx] - counts[lowIdx];
      questions.push({
        text: `How many more ${categories[highIdx].name} than ${categories[lowIdx].name}?`,
        options: generateNumberOptions(diff, 4),
        correctIndex: 0,
        type: 'howManyMore',
      });
      const correctVal = diff;
      const opts = questions[questions.length - 1].options;
      questions[questions.length - 1].correctIndex = opts.indexOf(String(correctVal));
    }
  }

  // Limit questions based on level
  const maxQuestions = level <= 3 ? 1 : level <= 6 ? 2 : 3;
  return questions.slice(0, maxQuestions);
}

function generateNumberOptions(correct: number, numOptions: number): string[] {
  const opts = new Set<number>();
  opts.add(correct);
  while (opts.size < Math.min(numOptions, 4)) {
    const offset = Math.floor(Math.random() * 3) + 1;
    const candidate = Math.random() > 0.5 ? correct + offset : Math.max(0, correct - offset);
    opts.add(candidate);
  }
  const arr = Array.from(opts).sort(() => Math.random() - 0.5);
  return arr.map(String);
}

// ── Component ──────────────────────────────────────────────────────────
interface DataDetectiveProps {
  onExit?: () => void;
}

export default function DataDetective({ onExit }: DataDetectiveProps = {}) {
  // Core state
  const [screen, setScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [caseConfig, setCaseConfig] = useState<CaseConfig>(CASE_CONFIGS[0]);

  // Collect phase
  const [specimens, setSpecimens] = useState<Specimen[]>([]);
  const [collectedCounts, setCollectedCounts] = useState<number[]>([]);
  const [targetCounts, setTargetCounts] = useState<number[]>([]);
  const [basketPulse, setBasketPulse] = useState(false);

  // Sort phase
  const [sortBuckets, setSortBuckets] = useState<SortBucket[]>([]);
  const [unsortedItems, setUnsortedItems] = useState<{ id: number; categoryIndex: number }[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [sortFeedback, setSortFeedback] = useState<{ correct: boolean; x: number; y: number } | null>(null);

  // Graph phase
  const [graphColumns, setGraphColumns] = useState<GraphColumn[]>([]);
  const [graphAnimating, setGraphAnimating] = useState(false);
  // Keep graphAnimating available for future use
  void graphAnimating;

  // Question phase
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerResult, setAnswerResult] = useState<'correct' | 'wrong' | null>(null);
  const [hintCategory, setHintCategory] = useState<number | null>(null);

  // Animation
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ambientCreatures, setAmbientCreatures] = useState<AmbientCreature[]>([]);
  const [sunRayAngle, setSunRayAngle] = useState(0);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const bucketRefsMap = useRef<Record<number, HTMLDivElement | null>>({});

  // ── Container size helper ──
  const getSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 800, height: 600 };
  }, []);

  // ── Particle spawner ──
  const spawnParticles = useCallback((x: number, y: number, count: number, hue: number, type: Particle['type'] = 'sparkle') => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 1 + Math.random() * 3;
      newParticles.push({
        id: nextId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'confetti' ? 2 : 0),
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        size: type === 'confetti' ? 6 + Math.random() * 6 : 3 + Math.random() * 4,
        hue,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ── Init level ──
  const initLevel = useCallback((lvl: number) => {
    const config = getCaseForLevel(lvl);
    setCaseConfig(config);
    const counts = getSpecimenCounts(lvl, config.categories.length);
    setTargetCounts(counts);
    setCollectedCounts(new Array(config.categories.length).fill(0));
    setSpecimens([]);
    setUnsortedItems([]);
    setSortBuckets(config.categories.map((_, i) => ({ categoryIndex: i, items: [], highlight: false })));
    setGraphColumns([]);
    setQuestions([]);
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setAnswerResult(null);
    setHintCategory(null);
    setDragState(null);
    setSortFeedback(null);
    setGraphAnimating(false);

    // Generate specimens to spawn over time
    const allSpecimens: Specimen[] = [];
    counts.forEach((count, catIdx) => {
      for (let i = 0; i < count; i++) {
        allSpecimens.push(createSpecimen(catIdx));
      }
    });
    // Shuffle
    for (let i = allSpecimens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allSpecimens[i], allSpecimens[j]] = [allSpecimens[j], allSpecimens[i]];
    }

    // Spawn specimens in waves
    const spawnDelay = lvl >= 7 ? 600 : lvl >= 4 ? 800 : 1000;
    allSpecimens.forEach((spec, idx) => {
      setTimeout(() => {
        setSpecimens(prev => [...prev, { ...spec, x: -50, y: -50 }]);
        // Animate in from random edge
        setTimeout(() => {
          const size = { width: 800, height: 600 }; // will use actual size in animation
          setSpecimens(prev => prev.map(s =>
            s.id === spec.id
              ? {
                  ...s,
                  x: 60 + Math.random() * (size.width - 120),
                  y: 60 + Math.random() * (size.height * 0.55),
                  opacity: 1,
                }
              : s
          ));
        }, 50);
      }, idx * spawnDelay);
    });
  }, []);

  const createSpecimen = (categoryIndex: number): Specimen => {
    return {
      id: nextId(),
      category: categoryIndex,
      x: 100 + Math.random() * 600,
      y: 60 + Math.random() * 300,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      angle: Math.random() * 360,
      angularV: (Math.random() - 0.5) * 2,
      scale: 1,
      opacity: 0,
      collected: false,
      collectAnim: 0,
    };
  };

  // ── Start game ──
  const startGame = () => {
    setScreen('collect');
    setLevel(1);
    setScore(0);
    setBadges([]);
    initLevel(1);
  };

  // ── Collect specimen (tap/click) ──
  const collectSpecimen = useCallback((specId: number) => {
    setSpecimens(prev => prev.map(s => {
      if (s.id === specId && !s.collected) {
        return { ...s, collected: true, collectAnim: Date.now() };
      }
      return s;
    }));

    // Find the specimen to get its category
    setSpecimens(prev => {
      const spec = prev.find(s => s.id === specId);
      if (spec && spec.collected) {
        setCollectedCounts(counts => {
          const next = [...counts];
          next[spec.category]++;
          return next;
        });
        spawnParticles(spec.x, spec.y, 8, caseConfig.categories[spec.category]?.hue ?? 200);
        setBasketPulse(true);
        setTimeout(() => setBasketPulse(false), 300);
      }
      return prev;
    });

    // Remove after animation
    setTimeout(() => {
      setSpecimens(prev => prev.filter(s => s.id !== specId));
    }, COLLECT_ANIM_DURATION);
  }, [caseConfig, spawnParticles]);

  // Check if all collected → move to sort
  useEffect(() => {
    if (screen !== 'collect') return;
    const totalTarget = targetCounts.reduce((a, b) => a + b, 0);
    const totalCollected = collectedCounts.reduce((a, b) => a + b, 0);
    if (totalTarget > 0 && totalCollected >= totalTarget) {
      setTimeout(() => {
        // Build unsorted items
        const items: { id: number; categoryIndex: number }[] = [];
        collectedCounts.forEach((count, catIdx) => {
          for (let i = 0; i < count; i++) {
            items.push({ id: nextId(), categoryIndex: catIdx });
          }
        });
        // Shuffle
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        setUnsortedItems(items);
        setScreen('sort');
      }, 800);
    }
  }, [screen, collectedCounts, targetCounts]);

  // ── Sort: drag handlers ──
  const handleSortDragStart = useCallback((
    e: React.MouseEvent | React.TouchEvent,
    item: { id: number; categoryIndex: number }
  ) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragState({
      itemId: item.id,
      startX: clientX - rect.left,
      startY: clientY - rect.top,
      currentX: clientX - rect.left,
      currentY: clientY - rect.top,
      categoryIndex: item.categoryIndex,
    });
  }, []);

  const handleSortDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragState(prev => prev ? {
      ...prev,
      currentX: clientX - rect.left,
      currentY: clientY - rect.top,
    } : null);

    // Highlight closest bucket
    setSortBuckets(prev => prev.map((bucket, idx) => {
      const el = bucketRefsMap.current[idx];
      if (!el) return { ...bucket, highlight: false };
      const bRect = el.getBoundingClientRect();
      const bx = bRect.left + bRect.width / 2 - rect.left;
      const by = bRect.top + bRect.height / 2 - rect.top;
      const dist = Math.sqrt((bx - (clientX - rect.left)) ** 2 + (by - (clientY - rect.top)) ** 2);
      return { ...bucket, highlight: dist < 80 };
    }));
  }, [dragState]);

  const handleSortDragEnd = useCallback(() => {
    if (!dragState || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let droppedBucketIdx = -1;

    // Find which bucket we dropped on
    sortBuckets.forEach((_, idx) => {
      const el = bucketRefsMap.current[idx];
      if (!el) return;
      const bRect = el.getBoundingClientRect();
      const bx = bRect.left + bRect.width / 2 - rect.left;
      const by = bRect.top + bRect.height / 2 - rect.top;
      const dist = Math.sqrt((bx - dragState.currentX) ** 2 + (by - dragState.currentY) ** 2);
      if (dist < 80) droppedBucketIdx = idx;
    });

    if (droppedBucketIdx >= 0) {
      const isCorrect = droppedBucketIdx === dragState.categoryIndex;
      if (isCorrect) {
        // Correct sort
        setSortBuckets(prev => prev.map((b, i) =>
          i === droppedBucketIdx
            ? { ...b, items: [...b.items, dragState.itemId], highlight: false }
            : { ...b, highlight: false }
        ));
        setUnsortedItems(prev => prev.filter(item => item.id !== dragState.itemId));
        setScore(s => s + 5);
        spawnParticles(dragState.currentX, dragState.currentY, 6, caseConfig.categories[droppedBucketIdx].hue);
        setSortFeedback({ correct: true, x: dragState.currentX, y: dragState.currentY });
      } else {
        // Wrong bucket — gentle shake
        setSortFeedback({ correct: false, x: dragState.currentX, y: dragState.currentY });
        setSortBuckets(prev => prev.map(b => ({ ...b, highlight: false })));
      }
      setTimeout(() => setSortFeedback(null), 600);
    } else {
      setSortBuckets(prev => prev.map(b => ({ ...b, highlight: false })));
    }

    setDragState(null);
  }, [dragState, sortBuckets, caseConfig, spawnParticles]);

  // Drag listeners
  useEffect(() => {
    if (!dragState) return;
    const move = (e: MouseEvent | TouchEvent) => handleSortDragMove(e);
    const end = () => handleSortDragEnd();
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
  }, [dragState, handleSortDragMove, handleSortDragEnd]);

  // Check if all sorted → move to graph
  useEffect(() => {
    if (screen !== 'sort') return;
    if (unsortedItems.length === 0 && sortBuckets.some(b => b.items.length > 0)) {
      setTimeout(() => {
        // Build graph data
        const cols: GraphColumn[] = caseConfig.categories.map((_, i) => ({
          categoryIndex: i,
          count: sortBuckets[i]?.items.length ?? 0,
          animatedCount: 0,
        }));
        setGraphColumns(cols);
        setGraphAnimating(true);
        setScreen('graph');

        // Animate graph columns
        const maxCount = Math.max(...cols.map(c => c.count));
        cols.forEach((col, colIdx) => {
          for (let i = 1; i <= col.count; i++) {
            setTimeout(() => {
              setGraphColumns(prev => prev.map((c, idx) =>
                idx === colIdx ? { ...c, animatedCount: i } : c
              ));
            }, colIdx * 300 + i * 200);
          }
        });

        // After animation, generate questions
        const animTime = cols.length * 300 + maxCount * 200 + 500;
        setTimeout(() => {
          setGraphAnimating(false);
          const actualCounts = cols.map(c => c.count);
          const qs = generateQuestions(caseConfig.categories, actualCounts, level);
          setQuestions(qs);
          setCurrentQuestionIdx(0);
          setSelectedAnswer(null);
          setAnswerResult(null);
          setHintCategory(null);
          setScreen('question');
        }, animTime);
      }, 600);
    }
  }, [screen, unsortedItems, sortBuckets, caseConfig, level]);

  // ── Answer question ──
  const answerQuestion = useCallback((optionIdx: number) => {
    if (answerResult !== null) return;
    setSelectedAnswer(optionIdx);
    const q = questions[currentQuestionIdx];
    if (!q) return;

    if (optionIdx === q.correctIndex) {
      setAnswerResult('correct');
      setScore(s => s + 20);
      const size = getSize();
      spawnParticles(size.width / 2, size.height / 2, 15, 140, 'confetti');

      setTimeout(() => {
        if (currentQuestionIdx < questions.length - 1) {
          setCurrentQuestionIdx(prev => prev + 1);
          setSelectedAnswer(null);
          setAnswerResult(null);
          setHintCategory(null);
        } else {
          // Case solved!
          const newBadge: Badge = {
            caseNumber: level,
            caseName: caseConfig.name,
            emoji: caseConfig.categories[0].emoji,
          };
          setBadges(prev => [...prev, newBadge]);
          setScore(s => s + 50);
          setScreen('caseSolved');
        }
      }, 1200);
    } else {
      setAnswerResult('wrong');
      // Hint: highlight the relevant category on the graph
      if (q.type === 'most') {
        setHintCategory(q.correctIndex);
      } else if (q.type === 'least') {
        setHintCategory(q.correctIndex);
      }
      setTimeout(() => {
        setSelectedAnswer(null);
        setAnswerResult(null);
      }, 1500);
    }
  }, [answerResult, questions, currentQuestionIdx, level, caseConfig, getSize, spawnParticles]);

  // ── Next level ──
  const nextCase = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen('collect');
    initLevel(newLevel);
  }, [level, initLevel]);

  // ── Animation loop ──
  useEffect(() => {
    if (screen === 'intro' || screen === 'caseBoard') {
      // Intro / case board ambient animation only
    }

    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;
      const size = getSize();

      // Sun ray rotation
      setSunRayAngle(prev => prev + 0.15 * delta);

      // Animate specimens in collect phase
      if (screen === 'collect') {
        setSpecimens(prev => prev.map(s => {
          if (s.collected) return s;
          let { x, y, vx, vy, angle, angularV } = s;
          vx += (Math.random() - 0.5) * 0.15;
          vy += (Math.random() - 0.5) * 0.15;
          vx *= FRICTION;
          vy *= FRICTION;
          x += vx * delta;
          y += vy * delta;
          angle += angularV * delta;

          // Bounce off walls
          const margin = 30;
          const maxY = size.height * 0.7;
          if (x < margin) { x = margin; vx = Math.abs(vx) * BOUNCE; }
          if (x > size.width - margin) { x = size.width - margin; vx = -Math.abs(vx) * BOUNCE; }
          if (y < margin) { y = margin; vy = Math.abs(vy) * BOUNCE; }
          if (y > maxY) { y = maxY; vy = -Math.abs(vy) * BOUNCE; }

          return { ...s, x, y, vx, vy, angle, angularV };
        }));
      }

      // Animate ambient creatures
      setAmbientCreatures(prev => prev.map(c => {
        let { x, y, vx, vy, wingPhase, wobblePhase } = c;
        wingPhase += 0.15 * delta;
        wobblePhase += 0.05 * delta;
        x += vx * delta;
        y += vy * delta + Math.sin(wobblePhase) * 0.3;

        // Wrap around edges
        if (x < -30) x = size.width + 30;
        if (x > size.width + 30) x = -30;
        if (y < -30) y = size.height * 0.4;
        if (y > size.height * 0.5) y = 20;

        return { ...c, x, y, wingPhase, wobblePhase };
      }));

      // Animate particles
      setParticles(prev => {
        const next = prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta + (p.type === 'confetti' ? 0.5 * delta : 0),
          vy: p.vy + (p.type === 'leaf' ? 0.02 : 0.05) * delta,
          life: p.life - (1 / (p.maxLife * 60)) * delta,
        }));
        return next.filter(p => p.life > 0);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [screen, getSize]);

  // ── Spawn ambient creatures ──
  useEffect(() => {
    const size = getSize();
    const creatures: AmbientCreature[] = [];
    for (let i = 0; i < 5; i++) {
      creatures.push({
        id: nextId(),
        x: Math.random() * size.width,
        y: 20 + Math.random() * size.height * 0.35,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 0.3,
        type: (['butterfly', 'bee', 'ladybug'] as const)[i % 3],
        wingPhase: Math.random() * Math.PI * 2,
        wobblePhase: Math.random() * Math.PI * 2,
      });
    }
    setAmbientCreatures(creatures);
  }, [getSize]);

  // ── Ambient particle spawning (dust/leaves) ──
  useEffect(() => {
    const interval = setInterval(() => {
      const size = getSize();
      if (Math.random() > 0.5) {
        setParticles(prev => [...prev, {
          id: nextId(),
          x: Math.random() * size.width,
          y: -5,
          vx: (Math.random() - 0.5) * 0.5,
          vy: 0.3 + Math.random() * 0.5,
          life: 1,
          maxLife: 3 + Math.random() * 2,
          size: 2 + Math.random() * 3,
          hue: 40 + Math.random() * 40,
          type: Math.random() > 0.5 ? 'dust' : 'leaf',
        }]);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [getSize]);

  // ── Computed values ──
  const totalCollected = collectedCounts.reduce((a, b) => a + b, 0);
  const totalTarget = targetCounts.reduce((a, b) => a + b, 0);
  const currentPhase: Phase = screen === 'collect' ? 'collect' : screen === 'sort' ? 'sort' : 'graph';

  // ── Render: Intro Screen ──
  if (screen === 'intro') {
    return (
      <div className="data-detective">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="garden-bg">
            <div className="sky" />
            <div className="sun-rays" style={{ transform: `rotate(${sunRayAngle}deg)` }} />
            <div className="grass-layer" />
            <div className="fence" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-flower" style={{
                left: `${8 + i * 12}%`,
                bottom: `${18 + Math.sin(i) * 5}%`,
                animationDelay: `${i * 0.3}s`,
              }}>
                {['🌸', '🌼', '🌺', '🌷', '🌻', '💐', '🌹', '🪻'][i]}
              </div>
            ))}
            {ambientCreatures.map(c => (
              <div key={c.id} className={`ambient-creature ${c.type}`} style={{
                left: c.x,
                top: c.y,
                transform: `scaleX(${c.vx > 0 ? 1 : -1}) scale(${0.9 + Math.sin(c.wingPhase) * 0.1})`,
              }}>
                {c.type === 'butterfly' ? '🦋' : c.type === 'bee' ? '🐝' : '🐞'}
              </div>
            ))}
            {particles.map(p => (
              <div key={p.id} className={`particle ${p.type}`} style={{
                left: p.x,
                top: p.y,
                opacity: p.life,
                width: p.size,
                height: p.size,
                background: p.type === 'dust' ? `hsla(${p.hue}, 50%, 80%, ${p.life * 0.5})` : `hsla(${p.hue}, 70%, 60%, ${p.life})`,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="intro-logo">
              <span className="magnifier-icon">🔍</span>
              <h1>Data Detective</h1>
              <span className="magnifier-icon flip">🔎</span>
            </div>
            <p className="intro-tagline">Backyard Investigation Agency</p>
            <div className="intro-card">
              <h3>🕵️ Your Mission</h3>
              <div className="intro-step">
                <span className="step-number">1</span>
                <span className="step-icon">🪲</span>
                <p><strong>COLLECT</strong> — Tap specimens in the garden</p>
              </div>
              <div className="intro-step">
                <span className="step-number">2</span>
                <span className="step-icon">🗂️</span>
                <p><strong>SORT</strong> — Drag items into the right categories</p>
              </div>
              <div className="intro-step">
                <span className="step-number">3</span>
                <span className="step-icon">📊</span>
                <p><strong>GRAPH</strong> — Build a picture graph and answer questions</p>
              </div>
              <div className="intro-step">
                <span className="step-number">4</span>
                <span className="step-icon">🏅</span>
                <p><strong>SOLVE</strong> — Earn your detective badge!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span>🔍</span>
              Start Investigating
              <span>🔍</span>
            </button>
            {badges.length > 0 && (
              <button className="board-btn" onClick={() => setScreen('caseBoard')}>
                View Case Board ({badges.length} badge{badges.length !== 1 ? 's' : ''})
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Case Board ──
  if (screen === 'caseBoard') {
    return (
      <div className="data-detective">
        <style>{styles}</style>
        <div className="caseboard-screen">
          <div className="garden-bg">
            <div className="sky" />
            <div className="grass-layer" />
          </div>
          <div className="caseboard-content">
            <h1>🕵️ Case Board 🕵️</h1>
            <div className="badges-grid">
              {badges.length === 0 && <p className="no-badges">No cases solved yet. Get investigating!</p>}
              {badges.map((badge, i) => (
                <div key={i} className="badge-card">
                  <div className="badge-star">⭐</div>
                  <div className="badge-emoji">{badge.emoji}</div>
                  <div className="badge-case">Case #{badge.caseNumber}</div>
                  <div className="badge-name">{badge.caseName}</div>
                </div>
              ))}
            </div>
            <button className="menu-btn" onClick={() => setScreen('intro')}>
              Back to HQ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Case Solved ──
  if (screen === 'caseSolved') {
    return (
      <div className="data-detective">
        <style>{styles}</style>
        <div className="solved-screen">
          <div className="garden-bg">
            <div className="sky" />
            <div className="sun-rays" style={{ transform: `rotate(${sunRayAngle}deg)` }} />
            <div className="grass-layer" />
          </div>
          <div className="confetti-layer">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="confetti-piece" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                background: `hsl(${Math.random() * 360}, 80%, 60%)`,
              }} />
            ))}
          </div>
          {particles.map(p => (
            <div key={p.id} className={`particle ${p.type}`} style={{
              left: p.x, top: p.y, opacity: p.life,
              width: p.size, height: p.size,
              background: `hsla(${p.hue}, 80%, 60%, ${p.life})`,
            }} />
          ))}
          <div className="solved-content">
            <div className="solved-badge-anim">
              <div className="badge-glow" />
              <div className="big-badge">🏅</div>
            </div>
            <h1 className="solved-title">Case Solved!</h1>
            <p className="solved-case">Case #{level}: {caseConfig.name}</p>
            <div className="solved-stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-val">{score}</span>
                <span className="stat-label">Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🏅</span>
                <span className="stat-val">{badges.length}</span>
                <span className="stat-label">Badges</span>
              </div>
            </div>
            <div className="solved-buttons">
              <button className="next-btn" onClick={nextCase}>
                Next Case →
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                Back to HQ
              </button>
              <button className="board-btn-sm" onClick={() => setScreen('caseBoard')}>
                View Case Board
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Main gameplay screens (collect, sort, graph, question) ──
  return (
    <div className="data-detective" ref={containerRef}>
      <style>{styles}</style>
      <div className="game-screen">
        {/* Garden background */}
        <div className="garden-bg">
          <div className="sky" />
          <div className="sun-rays" style={{ transform: `rotate(${sunRayAngle}deg)` }} />
          <div className="clouds">
            <div className="cloud cloud-1" />
            <div className="cloud cloud-2" />
            <div className="cloud cloud-3" />
          </div>
          <div className="grass-layer" />
          <div className="fence" />
          {screen === 'collect' && [...Array(5)].map((_, i) => (
            <div key={i} className="bg-flower" style={{
              left: `${5 + i * 20}%`,
              bottom: `${18 + Math.sin(i * 2) * 4}%`,
              animationDelay: `${i * 0.4}s`,
            }}>
              {['🌸', '🌼', '🌺', '🌷', '🌻'][i]}
            </div>
          ))}
          {/* Ambient creatures */}
          {ambientCreatures.map(c => (
            <div key={c.id} className={`ambient-creature ${c.type}`} style={{
              left: c.x,
              top: c.y,
              transform: `scaleX(${c.vx > 0 ? 1 : -1}) scale(${0.9 + Math.sin(c.wingPhase) * 0.1})`,
            }}>
              {c.type === 'butterfly' ? '🦋' : c.type === 'bee' ? '🐝' : '🐞'}
            </div>
          ))}
        </div>

        {/* Particles overlay */}
        <div className="particles-layer">
          {particles.map(p => (
            <div key={p.id} className={`particle ${p.type}`} style={{
              left: p.x,
              top: p.y,
              opacity: p.life,
              width: p.size,
              height: p.size,
              background: p.type === 'dust'
                ? `hsla(${p.hue}, 50%, 80%, ${p.life * 0.4})`
                : p.type === 'confetti'
                ? `hsla(${p.hue}, 80%, 60%, ${p.life})`
                : `hsla(${p.hue}, 70%, 65%, ${p.life})`,
              borderRadius: p.type === 'confetti' ? '2px' : '50%',
            }} />
          ))}
        </div>

        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
              ←
            </button>
            <div className="case-badge">
              🔍 Case #{level}
            </div>
          </div>
          <div className="header-center">
            <div className="phase-indicator">
              <span className={`phase-dot ${currentPhase === 'collect' ? 'active' : collectedCounts.reduce((a, b) => a + b, 0) >= totalTarget ? 'done' : ''}`}>1</span>
              <span className="phase-line" />
              <span className={`phase-dot ${currentPhase === 'sort' ? 'active' : screen === 'graph' || screen === 'question' ? 'done' : ''}`}>2</span>
              <span className="phase-line" />
              <span className={`phase-dot ${currentPhase === 'graph' || screen === 'question' ? 'active' : ''}`}>3</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              ⭐ {score}
            </div>
          </div>
        </div>

        {/* Phase label */}
        <div className="phase-label">
          {screen === 'collect' && (
            <>
              <span className="phase-emoji">🪲</span>
              <span>Tap {caseConfig.specimenType} to collect! ({totalCollected}/{totalTarget})</span>
            </>
          )}
          {screen === 'sort' && (
            <>
              <span className="phase-emoji">🗂️</span>
              <span>Sort items into the correct categories! ({unsortedItems.length} remaining)</span>
            </>
          )}
          {screen === 'graph' && (
            <>
              <span className="phase-emoji">📊</span>
              <span>Building your picture graph...</span>
            </>
          )}
          {screen === 'question' && (
            <>
              <span className="phase-emoji">🔍</span>
              <span>Question {currentQuestionIdx + 1} of {questions.length}</span>
            </>
          )}
        </div>

        {/* ── COLLECT PHASE ── */}
        {screen === 'collect' && (
          <div className="collect-area">
            {specimens.map(spec => {
              const cat = caseConfig.categories[spec.category];
              const isCollecting = spec.collected && spec.collectAnim > 0;
              const animProgress = isCollecting
                ? Math.min(1, (Date.now() - spec.collectAnim) / COLLECT_ANIM_DURATION)
                : 0;
              return (
                <div
                  key={spec.id}
                  className={`specimen ${isCollecting ? 'collecting' : ''}`}
                  style={{
                    left: spec.x,
                    top: spec.y,
                    transform: `translate(-50%, -50%) rotate(${spec.angle}deg) scale(${isCollecting ? 1 - animProgress * 0.8 : spec.opacity})`,
                    opacity: isCollecting ? 1 - animProgress : spec.opacity,
                    '--spec-color': cat?.color ?? '#fff',
                    '--spec-hue': cat?.hue ?? 0,
                    transition: spec.opacity === 0 ? 'none' : 'opacity 0.3s ease',
                  } as React.CSSProperties}
                  onClick={() => !spec.collected && collectSpecimen(spec.id)}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    if (!spec.collected) collectSpecimen(spec.id);
                  }}
                >
                  <div className="specimen-glow" />
                  <span className="specimen-emoji">{cat?.emoji ?? '?'}</span>
                </div>
              );
            })}

            {/* Collection basket */}
            <div className={`basket ${basketPulse ? 'pulse' : ''}`}>
              <div className="basket-icon">🧺</div>
              <div className="basket-count">{totalCollected}/{totalTarget}</div>
              <div className="basket-items">
                {caseConfig.categories.map((cat, i) => (
                  <span key={i} className="basket-cat">
                    {cat.emoji} {collectedCounts[i] || 0}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── SORT PHASE ── */}
        {screen === 'sort' && (
          <div className="sort-area">
            {/* Unsorted tray */}
            <div className="unsorted-tray">
              {unsortedItems.map(item => {
                const cat = caseConfig.categories[item.categoryIndex];
                const isDragging = dragState?.itemId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`sort-item ${isDragging ? 'dragging' : ''}`}
                    style={isDragging ? {
                      position: 'fixed',
                      left: (containerRef.current?.getBoundingClientRect().left ?? 0) + dragState.currentX - 24,
                      top: (containerRef.current?.getBoundingClientRect().top ?? 0) + dragState.currentY - 24,
                      zIndex: 1000,
                      pointerEvents: 'none',
                    } : {}}
                    onMouseDown={(e) => handleSortDragStart(e, item)}
                    onTouchStart={(e) => handleSortDragStart(e, item)}
                  >
                    <span>{cat?.emoji ?? '?'}</span>
                  </div>
                );
              })}
            </div>

            {/* Sort buckets */}
            <div className="buckets-row">
              {sortBuckets.map((bucket, idx) => {
                const cat = caseConfig.categories[bucket.categoryIndex];
                return (
                  <div
                    key={idx}
                    ref={el => { bucketRefsMap.current[idx] = el; }}
                    className={`sort-bucket ${bucket.highlight ? 'highlight' : ''}`}
                    style={{ '--bucket-color': cat?.color ?? '#666', '--bucket-hue': cat?.hue ?? 0 } as React.CSSProperties}
                  >
                    <div className="bucket-glass" />
                    <div className="bucket-label">{cat?.name ?? ''}</div>
                    <div className="bucket-emoji">{cat?.emoji ?? ''}</div>
                    <div className="bucket-contents">
                      {bucket.items.map((itemId, i) => (
                        <span key={itemId} className="bucket-item" style={{ animationDelay: `${i * 0.05}s` }}>
                          {cat?.emoji ?? ''}
                        </span>
                      ))}
                    </div>
                    <div className="bucket-count">{bucket.items.length}</div>
                  </div>
                );
              })}
            </div>

            {/* Sort feedback */}
            {sortFeedback && (
              <div className={`sort-feedback ${sortFeedback.correct ? 'correct' : 'wrong'}`} style={{
                left: sortFeedback.x,
                top: sortFeedback.y,
              }}>
                {sortFeedback.correct ? '✓' : '✗'}
              </div>
            )}
          </div>
        )}

        {/* ── GRAPH PHASE ── */}
        {(screen === 'graph' || screen === 'question') && (
          <div className="graph-area">
            <div className="graph-container">
              <div className="graph-title">Picture Graph: {caseConfig.name}</div>
              <div className="graph-body">
                {/* Y axis labels */}
                <div className="graph-y-axis">
                  {[...Array(Math.max(...graphColumns.map(c => c.count)) + 1)].map((_, i, arr) => (
                    <div key={i} className="y-label" style={{ bottom: `${(i / (arr.length - 1)) * 100}%` }}>
                      {i}
                    </div>
                  ))}
                </div>
                {/* Columns */}
                <div className="graph-columns">
                  {graphColumns.map((col, idx) => {
                    const cat = caseConfig.categories[col.categoryIndex];
                    const isHinted = hintCategory === idx;
                    return (
                      <div key={idx} className={`graph-col ${isHinted ? 'hinted' : ''}`}>
                        <div className="col-items">
                          {[...Array(col.animatedCount)].map((_, i) => (
                            <div key={i} className="col-item" style={{
                              '--item-color': cat?.color ?? '#666',
                              '--item-hue': cat?.hue ?? 0,
                              animationDelay: `${i * 0.1}s`,
                            } as React.CSSProperties}>
                              {cat?.emoji ?? ''}
                            </div>
                          ))}
                        </div>
                        <div className="col-label">{cat?.name ?? ''}</div>
                      </div>
                    );
                  })}
                </div>
                {/* Grid lines */}
                <div className="graph-grid">
                  {[...Array(Math.max(...graphColumns.map(c => c.count)) + 1)].map((_, i, arr) => (
                    <div key={i} className="grid-line" style={{ bottom: `${(i / (arr.length - 1)) * 100}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Question overlay */}
            {screen === 'question' && questions[currentQuestionIdx] && (
              <div className="question-panel">
                <div className="notepad">
                  <div className="notepad-spiral">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="spiral-ring" />
                    ))}
                  </div>
                  <div className="notepad-body">
                    <div className="notepad-pencil">✏️</div>
                    <div className="question-text">
                      {questions[currentQuestionIdx].text}
                    </div>
                    <div className="options-grid">
                      {questions[currentQuestionIdx].options.map((opt, i) => (
                        <button
                          key={i}
                          className={`option-btn ${
                            selectedAnswer === i
                              ? answerResult === 'correct'
                                ? 'correct'
                                : answerResult === 'wrong'
                                ? 'wrong'
                                : 'selected'
                              : ''
                          } ${selectedAnswer !== null && i === questions[currentQuestionIdx].correctIndex && answerResult === 'wrong' ? 'hint' : ''}`}
                          onClick={() => answerResult === null && answerQuestion(i)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {answerResult === 'correct' && (
                      <div className="answer-feedback correct">
                        <span>🔍</span> Case clue found! Great detective work!
                      </div>
                    )}
                    {answerResult === 'wrong' && (
                      <div className="answer-feedback wrong">
                        <span>❓</span> Look at the graph again carefully...
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          {screen === 'collect' && (
            <div className="hint-text">
              <span>👆 Tap the {caseConfig.specimenType} to catch them!</span>
            </div>
          )}
          {screen === 'sort' && (
            <div className="hint-text">
              <span>↕️ Drag each item into its matching jar</span>
            </div>
          )}
          {screen === 'graph' && (
            <div className="hint-text">
              <span>📊 Watch your data come to life!</span>
            </div>
          )}
          {screen === 'question' && (
            <div className="hint-text">
              <span>🔍 Use the graph to find the answer</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .data-detective {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    position: relative;
    background: #1a3a2a;
  }

  /* ── Garden background ── */
  .garden-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
  }

  .sky {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
      #87CEEB 0%,
      #B0E0FF 35%,
      #E0F0FF 60%,
      #c8e6c9 80%,
      #4caf50 85%,
      #2e7d32 100%
    );
  }

  .sun-rays {
    position: absolute;
    top: -60px;
    right: 40px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,235,59,0.4) 0%, rgba(255,235,59,0.1) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
  }

  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40%;
    pointer-events: none;
    z-index: 1;
  }

  .cloud {
    position: absolute;
    background: rgba(255,255,255,0.7);
    border-radius: 50px;
    filter: blur(2px);
  }

  .cloud::before, .cloud::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.7);
    border-radius: 50%;
  }

  .cloud-1 {
    width: 120px; height: 40px; top: 8%; left: 10%;
    animation: cloudDrift 40s linear infinite;
  }
  .cloud-1::before { width: 50px; height: 50px; top: -20px; left: 20px; }
  .cloud-1::after { width: 40px; height: 40px; top: -15px; left: 60px; }

  .cloud-2 {
    width: 90px; height: 30px; top: 15%; left: 55%;
    animation: cloudDrift 55s linear infinite;
    animation-delay: -20s;
  }
  .cloud-2::before { width: 40px; height: 40px; top: -18px; left: 15px; }
  .cloud-2::after { width: 30px; height: 30px; top: -12px; left: 50px; }

  .cloud-3 {
    width: 100px; height: 35px; top: 5%; left: 75%;
    animation: cloudDrift 45s linear infinite;
    animation-delay: -10s;
  }
  .cloud-3::before { width: 45px; height: 45px; top: -20px; left: 25px; }
  .cloud-3::after { width: 35px; height: 35px; top: -14px; left: 55px; }

  @keyframes cloudDrift {
    0% { transform: translateX(0); }
    100% { transform: translateX(-120vw); }
  }

  .grass-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25%;
    background: linear-gradient(180deg, #4caf50 0%, #388e3c 40%, #2e7d32 100%);
    z-index: 2;
  }

  .grass-layer::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 0;
    right: 0;
    height: 25px;
    background: repeating-conic-gradient(#4caf50 0% 25%, transparent 0% 50%) 0 0 / 20px 25px;
    opacity: 0.7;
  }

  .fence {
    position: absolute;
    bottom: 20%;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 3;
    background: repeating-linear-gradient(90deg,
      transparent 0px,
      transparent 25px,
      #8d6e63 25px,
      #8d6e63 30px
    );
    border-top: 5px solid #6d4c41;
    border-bottom: 3px solid #5d4037;
    opacity: 0.4;
  }

  .bg-flower {
    position: absolute;
    font-size: 1.8rem;
    z-index: 4;
    animation: flowerSway 3s ease-in-out infinite;
    transform-origin: bottom center;
  }

  @keyframes flowerSway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .ambient-creature {
    position: absolute;
    font-size: 1.4rem;
    z-index: 5;
    pointer-events: none;
    transition: transform 0.1s linear;
    filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));
  }

  /* ── Particles ── */
  .particles-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 100;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .particle.leaf {
    border-radius: 50% 0 50% 0;
  }

  .particle.confetti {
    border-radius: 2px;
  }

  /* ── Intro screen ── */
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
    z-index: 20;
    text-align: center;
    padding: 1.5rem;
    max-width: 520px;
  }

  .intro-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .intro-logo h1 {
    font-size: clamp(1.8rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
  }

  .magnifier-icon {
    font-size: 2.2rem;
    animation: magnifierBob 2s ease-in-out infinite;
  }

  .magnifier-icon.flip {
    animation-delay: 0.5s;
  }

  @keyframes magnifierBob {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  .intro-tagline {
    color: #2e7d32;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 2px rgba(255,255,255,0.6);
  }

  .intro-card {
    background: rgba(255,255,255,0.85);
    border: 2px solid rgba(139,69,19,0.2);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  }

  .intro-card h3 {
    color: #4a2810;
    font-size: 1.2rem;
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

  .step-number {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    font-size: 0.85rem;
    flex-shrink: 0;
  }

  .step-icon { font-size: 1.4rem; flex-shrink: 0; }

  .intro-step p {
    color: #4a2810;
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(249,115,22,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(249,115,22,0.5);
  }

  .board-btn, .board-btn-sm {
    display: block;
    margin: 1rem auto 0;
    padding: 0.6rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #4a2810;
    background: rgba(255,255,255,0.6);
    border: 2px solid rgba(139,69,19,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .board-btn:hover, .board-btn-sm:hover {
    background: rgba(255,255,255,0.9);
  }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #666;
    background: transparent;
    border: 2px solid rgba(0,0,0,0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(0,0,0,0.3); color: #333; }

  /* ── Game header ── */
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
    padding: 0.6rem 1rem;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(10px);
    z-index: 50;
    border-bottom: 2px solid rgba(0,0,0,0.08);
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(0,0,0,0.08);
    border: none;
    border-radius: 10px;
    color: #4a2810;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(0,0,0,0.15); }

  .case-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 16px;
    font-weight: 700;
    color: white;
    font-size: 0.85rem;
  }

  .phase-indicator {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  .phase-dot {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 0.75rem;
    transition: all 0.3s ease;
  }

  .phase-dot.active {
    background: linear-gradient(135deg, #f97316, #ef4444);
    color: white;
    box-shadow: 0 2px 8px rgba(249,115,22,0.4);
    transform: scale(1.15);
  }

  .phase-dot.done {
    background: #22c55e;
    color: white;
  }

  .phase-line {
    width: 20px;
    height: 3px;
    background: rgba(0,0,0,0.1);
    border-radius: 2px;
  }

  .score-badge {
    padding: 0.4rem 0.8rem;
    background: rgba(251,191,36,0.15);
    border-radius: 16px;
    color: #b45309;
    font-weight: 800;
    font-size: 0.9rem;
  }

  /* ── Phase label ── */
  .phase-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(5px);
    font-size: 0.9rem;
    font-weight: 700;
    color: #4a2810;
    z-index: 20;
  }

  .phase-emoji { font-size: 1.2rem; }

  /* ── Collect phase ── */
  .collect-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    z-index: 10;
    touch-action: none;
  }

  .specimen {
    position: absolute;
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 15;
    transition: transform 0.15s ease;
  }

  .specimen:active {
    transform: translate(-50%, -50%) scale(0.85) !important;
  }

  .specimen-glow {
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, hsla(var(--spec-hue), 80%, 65%, 0.4) 0%, transparent 70%);
    animation: specGlow 2s ease-in-out infinite;
  }

  @keyframes specGlow {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.3); opacity: 1; }
  }

  .specimen-emoji {
    font-size: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    position: relative;
    z-index: 2;
  }

  .specimen.collecting {
    pointer-events: none;
    animation: collectFly 0.5s ease-in forwards;
  }

  @keyframes collectFly {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -60%) scale(1.2); }
    100% { transform: translate(-50%, 200%) scale(0.3); opacity: 0; }
  }

  .basket {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    padding: 0.6rem 1.5rem;
    background: rgba(255,255,255,0.9);
    border-radius: 20px;
    border: 2px solid rgba(139,69,19,0.3);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    z-index: 25;
    transition: transform 0.2s ease;
  }

  .basket.pulse {
    transform: translateX(-50%) scale(1.08);
  }

  .basket-icon { font-size: 2rem; }

  .basket-count {
    font-weight: 800;
    color: #4a2810;
    font-size: 1rem;
  }

  .basket-items {
    display: flex;
    gap: 0.6rem;
    font-size: 0.8rem;
    color: #666;
  }

  .basket-cat { font-weight: 600; }

  /* ── Sort phase ── */
  .sort-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: relative;
    touch-action: none;
  }

  .unsorted-tray {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    min-height: 80px;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(5px);
    border-bottom: 2px solid rgba(0,0,0,0.08);
  }

  .sort-item {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    background: rgba(255,255,255,0.9);
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 14px;
    cursor: grab;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .sort-item:active, .sort-item.dragging {
    cursor: grabbing;
    transform: scale(1.15);
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 1000;
  }

  .buckets-row {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    padding: 1rem;
  }

  .sort-bucket {
    flex: 1;
    max-width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem;
    background: rgba(255,255,255,0.3);
    border: 3px solid rgba(0,0,0,0.1);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .sort-bucket.highlight {
    border-color: var(--bucket-color);
    background: rgba(255,255,255,0.6);
    transform: scale(1.05);
    box-shadow: 0 0 20px hsla(var(--bucket-hue), 60%, 50%, 0.3);
  }

  .bucket-glass {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,
      rgba(255,255,255,0.3) 0%,
      rgba(255,255,255,0.05) 50%,
      rgba(255,255,255,0.2) 100%
    );
    border-radius: 20px;
    pointer-events: none;
  }

  .bucket-label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #4a2810;
    margin-bottom: 0.3rem;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .bucket-emoji {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
    position: relative;
    z-index: 2;
  }

  .bucket-contents {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.2rem;
    flex: 1;
    align-content: flex-end;
    position: relative;
    z-index: 2;
  }

  .bucket-item {
    font-size: 1.2rem;
    animation: itemDrop 0.3s ease forwards;
  }

  @keyframes itemDrop {
    0% { transform: translateY(-10px); opacity: 0; }
    60% { transform: translateY(3px); }
    100% { transform: translateY(0); opacity: 1; }
  }

  .bucket-count {
    font-weight: 800;
    color: #4a2810;
    font-size: 1.1rem;
    margin-top: 0.3rem;
    position: relative;
    z-index: 2;
  }

  .sort-feedback {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 900;
    z-index: 200;
    pointer-events: none;
    animation: feedbackPop 0.6s ease forwards;
  }

  .sort-feedback.correct { color: #22c55e; }
  .sort-feedback.wrong { color: #ef4444; animation: feedbackShake 0.5s ease forwards; }

  @keyframes feedbackPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    30% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(1); opacity: 0; }
  }

  @keyframes feedbackShake {
    0%, 100% { transform: translate(-50%, -50%) rotate(0); opacity: 1; }
    20% { transform: translate(-40%, -50%) rotate(5deg); }
    40% { transform: translate(-60%, -50%) rotate(-5deg); }
    60% { transform: translate(-45%, -50%) rotate(3deg); }
    80% { transform: translate(-55%, -50%) rotate(-3deg); opacity: 0.5; }
    100% { opacity: 0; }
  }

  /* ── Graph phase ── */
  .graph-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    z-index: 10;
    padding: 0.5rem;
    gap: 0.5rem;
    overflow-y: auto;
  }

  .graph-container {
    background: rgba(255,255,255,0.9);
    border-radius: 20px;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border: 2px solid rgba(0,0,0,0.06);
  }

  .graph-title {
    text-align: center;
    font-weight: 800;
    font-size: 1.1rem;
    color: #4a2810;
    margin-bottom: 0.8rem;
  }

  .graph-body {
    display: flex;
    align-items: flex-end;
    position: relative;
    min-height: 160px;
    padding-left: 30px;
    padding-bottom: 30px;
  }

  .graph-y-axis {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 30px;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .y-label {
    position: absolute;
    right: 0;
    font-size: 0.7rem;
    font-weight: 700;
    color: #999;
    transform: translateY(50%);
  }

  .graph-columns {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    position: relative;
    z-index: 5;
  }

  .graph-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    transition: all 0.3s ease;
  }

  .graph-col.hinted {
    animation: hintPulse 0.8s ease-in-out infinite;
  }

  @keyframes hintPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); filter: brightness(1.2); }
  }

  .col-items {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2px;
  }

  .col-item {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    background: hsla(var(--item-hue), 70%, 92%, 1);
    border: 2px solid hsla(var(--item-hue), 60%, 70%, 0.5);
    border-radius: 8px;
    animation: graphItemPop 0.3s ease forwards;
  }

  @keyframes graphItemPop {
    0% { transform: scale(0) translateY(10px); opacity: 0; }
    60% { transform: scale(1.15) translateY(-3px); }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  .col-label {
    font-size: 0.7rem;
    font-weight: 700;
    color: #666;
    text-align: center;
    max-width: 70px;
    word-wrap: break-word;
  }

  .graph-grid {
    position: absolute;
    left: 30px;
    right: 0;
    top: 0;
    bottom: 30px;
    pointer-events: none;
  }

  .grid-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0,0,0,0.08);
  }

  /* ── Question panel ── */
  .question-panel {
    z-index: 30;
    padding: 0 0.5rem;
  }

  .notepad {
    background: #fffde7;
    border-radius: 16px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    position: relative;
    overflow: hidden;
    border: 2px solid #e0d6a0;
  }

  .notepad-spiral {
    position: absolute;
    top: 0;
    left: 10px;
    display: flex;
    gap: 12px;
    z-index: 5;
  }

  .spiral-ring {
    width: 14px;
    height: 20px;
    border: 3px solid #999;
    border-radius: 0 0 7px 7px;
    border-top: none;
    margin-top: -3px;
  }

  .notepad-body {
    padding: 1.2rem 1rem 1rem;
    position: relative;
  }

  .notepad-pencil {
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 1.2rem;
    transform: rotate(30deg);
  }

  .question-text {
    font-size: 1.1rem;
    font-weight: 800;
    color: #4a2810;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .option-btn {
    padding: 0.7rem 1rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #4a2810;
    background: white;
    border: 2px solid rgba(0,0,0,0.12);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .option-btn:hover {
    border-color: #f97316;
    background: #fff7ed;
  }

  .option-btn.correct {
    background: #dcfce7;
    border-color: #22c55e;
    color: #166534;
    animation: correctPop 0.3s ease;
  }

  @keyframes correctPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }

  .option-btn.wrong {
    background: #fef2f2;
    border-color: #ef4444;
    color: #991b1b;
    animation: wrongShake 0.4s ease;
  }

  @keyframes wrongShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    60% { transform: translateX(-3px); }
    80% { transform: translateX(3px); }
  }

  .option-btn.hint {
    border-color: #22c55e;
    background: #f0fdf4;
    animation: hintGlow 0.8s ease-in-out infinite;
  }

  @keyframes hintGlow {
    0%, 100% { box-shadow: 0 0 0 rgba(34,197,94,0); }
    50% { box-shadow: 0 0 12px rgba(34,197,94,0.3); }
  }

  .answer-feedback {
    margin-top: 0.8rem;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: feedbackSlideIn 0.3s ease;
  }

  @keyframes feedbackSlideIn {
    0% { transform: translateY(10px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .answer-feedback.correct {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #86efac;
  }

  .answer-feedback.wrong {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fca5a5;
  }

  /* ── Case Solved screen ── */
  .solved-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .confetti-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 10;
    overflow: hidden;
  }

  .confetti-piece {
    position: absolute;
    top: -10px;
    width: 8px;
    height: 12px;
    border-radius: 2px;
    animation: confettiFall 3s ease-in forwards;
  }

  @keyframes confettiFall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }

  .solved-content {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 450px;
  }

  .solved-badge-anim {
    position: relative;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .badge-glow {
    position: absolute;
    inset: -30px;
    background: radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%);
    border-radius: 50%;
    animation: badgeGlow 2s ease-in-out infinite;
  }

  @keyframes badgeGlow {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.3); opacity: 1; }
  }

  .big-badge {
    font-size: 5rem;
    animation: badgeSpin 1s ease-out;
    position: relative;
    z-index: 2;
  }

  @keyframes badgeSpin {
    0% { transform: scale(0) rotate(-180deg); opacity: 0; }
    60% { transform: scale(1.2) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); }
  }

  .solved-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: #4a2810;
    text-shadow: 0 2px 4px rgba(255,255,255,0.5);
    margin-bottom: 0.3rem;
  }

  .solved-case {
    font-size: 1rem;
    color: #666;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .solved-stats {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-icon { font-size: 1.5rem; }

  .stat-val {
    font-size: 2rem;
    font-weight: 900;
    color: #4a2810;
  }

  .stat-label {
    font-size: 0.8rem;
    color: #888;
    font-weight: 600;
  }

  .solved-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  /* ── Case Board screen ── */
  .caseboard-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .caseboard-content {
    position: relative;
    z-index: 20;
    text-align: center;
    padding: 2rem;
    max-width: 550px;
    width: 100%;
  }

  .caseboard-content h1 {
    font-size: 2rem;
    color: #4a2810;
    text-shadow: 0 2px 4px rgba(255,255,255,0.5);
    margin-bottom: 1.5rem;
  }

  .badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .badge-card {
    background: rgba(255,255,255,0.85);
    border-radius: 16px;
    padding: 1rem 0.5rem;
    border: 2px solid rgba(251,191,36,0.3);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    animation: badgeAppear 0.5s ease;
  }

  @keyframes badgeAppear {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
  }

  .badge-star { font-size: 1.8rem; }
  .badge-emoji { font-size: 1.5rem; }

  .badge-case {
    font-size: 0.7rem;
    color: #999;
    font-weight: 600;
  }

  .badge-name {
    font-size: 0.8rem;
    color: #4a2810;
    font-weight: 700;
  }

  .no-badges {
    color: #999;
    font-style: italic;
    grid-column: 1 / -1;
    padding: 2rem 0;
  }

  /* ── Bottom bar ── */
  .bottom-bar {
    padding: 0.6rem;
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(5px);
    text-align: center;
    z-index: 20;
    border-top: 1px solid rgba(0,0,0,0.06);
  }

  .hint-text {
    display: flex;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: #8b7355;
  }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .phase-indicator { display: none; }
    .intro-logo h1 { font-size: 1.6rem; }
    .magnifier-icon { font-size: 1.6rem; }
    .start-btn { padding: 0.8rem 1.8rem; font-size: 1rem; }
    .sort-bucket { padding: 0.5rem; max-width: 100px; }
    .bucket-label { font-size: 0.65rem; }
    .bucket-emoji { font-size: 1.2rem; }
    .bucket-item { font-size: 0.9rem; }
    .graph-body { min-height: 120px; }
    .col-item { width: 28px; height: 28px; font-size: 1rem; }
    .options-grid { grid-template-columns: 1fr; }
    .question-text { font-size: 0.95rem; }
    .specimen { width: 46px; height: 46px; }
    .specimen-emoji { font-size: 1.6rem; }
    .solved-stats { gap: 1.5rem; }
    .unsorted-tray { min-height: 60px; }
    .sort-item { width: 40px; height: 40px; font-size: 1.3rem; }
  }

  @media (max-width: 380px) {
    .game-header { padding: 0.4rem 0.6rem; }
    .case-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .score-badge { font-size: 0.8rem; }
    .phase-label { font-size: 0.8rem; padding: 0.4rem 0.6rem; }
    .col-item { width: 24px; height: 24px; font-size: 0.85rem; }
    .col-label { font-size: 0.6rem; max-width: 50px; }
  }
`;
