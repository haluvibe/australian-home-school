"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

type PunctuationType = '.' | '?' | '!';
type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameOver';

interface Sentence {
  id: number;
  text: string;
  correctPunctuation: PunctuationType;
  needsCapital: boolean;
  x: number;
  y: number;
  lane: number;
  speed: number;
  state: 'moving' | 'correct' | 'wrong' | 'exiting' | 'missed';
  assignedPunctuation?: PunctuationType;
  capitalFixed: boolean;
  shakeTimer: number;
  exitTimer: number;
  wheelRotation: number;
  isBoss: boolean;
}

interface DragState {
  punctuation: PunctuationType;
  x: number;
  y: number;
  originX: number;
  originY: number;
  offsetX: number;
  offsetY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: 'spark' | 'confetti' | 'smoke' | 'siren' | 'star';
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface Notification {
  id: number;
  text: string;
  x: number;
  y: number;
  type: 'correct' | 'wrong' | 'combo' | 'bonus' | 'capital';
  timer: number;
}

interface BossSentence {
  id: number;
  text: string;
  marks: BossMark[];
  currentIndex: number;
  completed: boolean;
  x: number;
  y: number;
}

interface BossMark {
  position: number;
  correct: PunctuationType;
  filled: boolean;
  filledWith?: PunctuationType;
  isCorrect?: boolean;
}

interface LevelConfig {
  level: number;
  name: string;
  availablePunctuation: PunctuationType[];
  sentenceSpeed: number;
  spawnInterval: number;
  maxOnScreen: number;
  sentencesRequired: number;
  includeCapitals: boolean;
  hasBoss: boolean;
  description: string;
}

interface ContainerSize {
  width: number;
  height: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const ROAD_TOP = 120;
const LANE_HEIGHT = 110;
const SENTENCE_WIDTH = 320;
const SENTENCE_HEIGHT = 70;
const TOOLKIT_HEIGHT = 120;
const PUNCTUATION_SIZE = 70;

let sentenceIdCounter = 0;
const getNewId = (): number => ++sentenceIdCounter;

let particleIdCounter = 0;
const getParticleId = (): number => ++particleIdCounter;

let notifIdCounter = 0;
const getNotifId = (): number => ++notifIdCounter;

// ─── Sentence Data ───────────────────────────────────────────────────────────

const STATEMENTS: string[] = [
  "The cat is big",
  "I like to run",
  "We went to the park",
  "She has a red hat",
  "The sun is hot",
  "My dog is brown",
  "I can see the bird",
  "We play in the sand",
  "The fish is in the pond",
  "He has a new bag",
  "I love my mum",
  "The tree is tall",
  "We had lunch at noon",
  "She ran to the shop",
  "The ball is round",
  "I found a shell",
  "The frog can jump",
  "We read a book",
  "He sat on the log",
  "The rain was cold",
];

const QUESTIONS: string[] = [
  "Where is my bag",
  "Can you help me",
  "What is your name",
  "How old are you",
  "Do you like dogs",
  "Is it time to go",
  "Where did the cat go",
  "Can I have a turn",
  "What do you see",
  "Are you my friend",
  "When is lunch",
  "Did you find it",
  "Why is it red",
  "Who is at the door",
  "Have you got a pen",
  "Will you come with me",
  "Is that your hat",
  "Where are the ducks",
  "Can she swim",
  "Do we go left or right",
];

const EXCLAMATIONS: string[] = [
  "Watch out",
  "Run fast",
  "What a great day",
  "Stop right there",
  "How wonderful",
  "Be careful",
  "That is amazing",
  "Look at that",
  "Wow, so big",
  "Oh no",
  "Hurry up",
  "What a surprise",
  "Go team",
  "Help me",
  "Well done",
  "How cool is that",
  "Get back here",
  "Stand still",
  "Hooray for us",
  "No way",
];

const BOSS_PARAGRAPHS: string[][] = [
  ["The cat sat on the mat", "Where did it go", "Look out"],
  ["I went to the shop", "Can I have some milk", "Wow, what a big shop"],
  ["The sun is up", "Is it time to play", "Run outside now"],
  ["We found a frog", "Where did it jump", "How funny"],
  ["She put on her hat", "Do you like it", "What a nice hat"],
  ["The dog ran away", "Where is he going", "Come back here"],
  ["I can see the stars", "How many are there", "What a beautiful night"],
  ["He fell off the swing", "Are you okay", "Be more careful"],
  ["We made a sand castle", "Is it big enough", "What a great castle"],
  ["The bird flew up high", "Can you see it", "How amazing"],
];

const BOSS_PUNCTUATION: PunctuationType[][] = [
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
  ['.', '?', '!'],
];

// ─── Level Configuration ─────────────────────────────────────────────────────

const LEVELS: LevelConfig[] = [
  {
    level: 1,
    name: "Full Stop Basics",
    availablePunctuation: ['.'],
    sentenceSpeed: 0.4,
    spawnInterval: 4500,
    maxOnScreen: 2,
    sentencesRequired: 6,
    includeCapitals: false,
    hasBoss: false,
    description: "Drag the full stop to finish each sentence.",
  },
  {
    level: 2,
    name: "Question Time",
    availablePunctuation: ['.', '?'],
    sentenceSpeed: 0.45,
    spawnInterval: 4000,
    maxOnScreen: 2,
    sentencesRequired: 8,
    includeCapitals: false,
    hasBoss: false,
    description: "Is it a statement or a question?",
  },
  {
    level: 3,
    name: "Exclamation Station",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.5,
    spawnInterval: 3800,
    maxOnScreen: 3,
    sentencesRequired: 10,
    includeCapitals: false,
    hasBoss: false,
    description: "All three punctuation marks!",
  },
  {
    level: 4,
    name: "Capital Patrol",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.5,
    spawnInterval: 3500,
    maxOnScreen: 3,
    sentencesRequired: 10,
    includeCapitals: true,
    hasBoss: false,
    description: "Some sentences need a capital letter too!",
  },
  {
    level: 5,
    name: "Boss Round 1",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.55,
    spawnInterval: 3500,
    maxOnScreen: 3,
    sentencesRequired: 8,
    includeCapitals: true,
    hasBoss: true,
    description: "Fix a whole paragraph of missing punctuation!",
  },
  {
    level: 6,
    name: "Speed Limit Up",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.65,
    spawnInterval: 3000,
    maxOnScreen: 4,
    sentencesRequired: 12,
    includeCapitals: true,
    hasBoss: false,
    description: "Faster sentences — stay sharp!",
  },
  {
    level: 7,
    name: "Traffic Jam",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.7,
    spawnInterval: 2800,
    maxOnScreen: 4,
    sentencesRequired: 14,
    includeCapitals: true,
    hasBoss: false,
    description: "More sentences on the road at once!",
  },
  {
    level: 8,
    name: "Boss Round 2",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.7,
    spawnInterval: 2800,
    maxOnScreen: 4,
    sentencesRequired: 10,
    includeCapitals: true,
    hasBoss: true,
    description: "Another paragraph needs fixing!",
  },
  {
    level: 9,
    name: "Rush Hour",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.8,
    spawnInterval: 2400,
    maxOnScreen: 5,
    sentencesRequired: 16,
    includeCapitals: true,
    hasBoss: false,
    description: "Maximum speed and traffic!",
  },
  {
    level: 10,
    name: "Chief Inspector",
    availablePunctuation: ['.', '?', '!'],
    sentenceSpeed: 0.9,
    spawnInterval: 2200,
    maxOnScreen: 5,
    sentencesRequired: 12,
    includeCapitals: true,
    hasBoss: true,
    description: "The final boss round — prove you are the Chief!",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLaneY(lane: number): number {
  return ROAD_TOP + lane * LANE_HEIGHT + LANE_HEIGHT / 2;
}

function getSentenceForType(type: PunctuationType): string {
  switch (type) {
    case '.': return pickRandom(STATEMENTS);
    case '?': return pickRandom(QUESTIONS);
    case '!': return pickRandom(EXCLAMATIONS);
  }
}

function lowercaseFirst(text: string): string {
  if (text.length === 0) return text;
  // Only lowercase if first char is a letter
  if (/^[A-Z]/.test(text)) {
    return text[0].toLowerCase() + text.slice(1);
  }
  return text;
}

// ─── Component ───────────────────────────────────────────────────────────────

interface PunctuationPatrolProps {
  onExit?: () => void;
}

export default function PunctuationPatrol({ onExit }: PunctuationPatrolProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [lives, setLives] = useState<number>(5);
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [sirenActive, setSirenActive] = useState<boolean>(false);
  const [sentencesCompleted, setSentencesCompleted] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [totalWrong, setTotalWrong] = useState<number>(0);
  const [bossFight, setBossFight] = useState<BossSentence | null>(null);
  const [bossShowing, setBossShowing] = useState<boolean>(false);
  const [bossTriggered, setBossTriggered] = useState<boolean>(false);
  const [levelStartTime, setLevelStartTime] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const spawnTimerRef = useRef<number>(0);
  const sentencesRef = useRef<Sentence[]>(sentences);
  const livesRef = useRef<number>(lives);
  const comboRef = useRef<number>(combo);
  const sentencesCompletedRef = useRef<number>(sentencesCompleted);
  const dragRef = useRef<DragState | null>(null);
  const levelRef = useRef<number>(level);
  const bossShowingRef = useRef<boolean>(bossShowing);
  const gameScreenRef = useRef<GameScreen>(gameScreen);

  useEffect(() => { sentencesRef.current = sentences; }, [sentences]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { comboRef.current = combo; }, [combo]);
  useEffect(() => { sentencesCompletedRef.current = sentencesCompleted; }, [sentencesCompleted]);
  useEffect(() => { dragRef.current = dragState; }, [dragState]);
  useEffect(() => { levelRef.current = level; }, [level]);
  useEffect(() => { bossShowingRef.current = bossShowing; }, [bossShowing]);
  useEffect(() => { gameScreenRef.current = gameScreen; }, [gameScreen]);

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 600 };
  }, []);

  const getLevelConfig = useCallback((): LevelConfig => {
    return LEVELS[Math.min(level - 1, LEVELS.length - 1)];
  }, [level]);

  // ─── Particle System ────────────────────────────────────────────────────────

  const spawnParticles = useCallback((x: number, y: number, type: Particle['type'], count: number, colors?: string[]) => {
    const newParticles: Particle[] = [];
    const defaultColors: Record<string, string[]> = {
      spark: ['#ff6b35', '#ffd700', '#ff4444', '#ff8800'],
      confetti: ['#4ade80', '#38bdf8', '#fbbf24', '#f472b6', '#a78bfa', '#fb923c'],
      smoke: ['#94a3b8', '#64748b', '#475569'],
      siren: ['#ef4444', '#3b82f6', '#ef4444', '#3b82f6'],
      star: ['#fbbf24', '#fde68a', '#f59e0b'],
    };
    const colorSet = colors || defaultColors[type] || ['#ffffff'];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1 + Math.random() * 4;
      newParticles.push({
        id: getParticleId(),
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === 'confetti' ? 2 : 0),
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        type,
        color: pickRandom(colorSet),
        size: type === 'confetti' ? 4 + Math.random() * 6 : type === 'smoke' ? 8 + Math.random() * 12 : 3 + Math.random() * 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnNotification = useCallback((text: string, x: number, y: number, type: Notification['type']) => {
    setNotifications(prev => [...prev, {
      id: getNotifId(),
      text, x, y, type,
      timer: 1.5,
    }]);
  }, []);

  // ─── Sentence Creation ──────────────────────────────────────────────────────

  const createSentence = useCallback((config: LevelConfig, lane: number): Sentence => {
    const size = getContainerSize();
    const punctType = pickRandom(config.availablePunctuation);
    let text = getSentenceForType(punctType);
    const shouldNeedCapital = config.includeCapitals && Math.random() < 0.35;
    if (shouldNeedCapital) {
      text = lowercaseFirst(text);
    }
    return {
      id: getNewId(),
      text,
      correctPunctuation: punctType,
      needsCapital: shouldNeedCapital,
      x: size.width + 50,
      y: getLaneY(lane),
      lane,
      speed: config.sentenceSpeed * (0.85 + Math.random() * 0.3),
      state: 'moving',
      capitalFixed: !shouldNeedCapital,
      shakeTimer: 0,
      exitTimer: 0,
      wheelRotation: 0,
      isBoss: false,
    };
  }, [getContainerSize]);

  // ─── Boss Fight ─────────────────────────────────────────────────────────────

  const startBossFight = useCallback(() => {
    const bossIdx = Math.floor(Math.random() * BOSS_PARAGRAPHS.length);
    const texts = BOSS_PARAGRAPHS[bossIdx];
    const puncts = BOSS_PUNCTUATION[bossIdx];
    const size = getContainerSize();

    let charOffset = 0;
    const marks: BossMark[] = texts.map((text, i) => {
      charOffset += text.length;
      const mark: BossMark = {
        position: charOffset + i, // account for spaces between sentences
        correct: puncts[i],
        filled: false,
      };
      return mark;
    });

    setBossFight({
      id: getNewId(),
      text: texts.join('__ '),
      marks,
      currentIndex: 0,
      completed: false,
      x: size.width / 2,
      y: size.height / 2 - 60,
    });
    setBossShowing(true);
  }, [getContainerSize]);

  // ─── Correct / Wrong Handlers ───────────────────────────────────────────────

  const handleCorrect = useCallback((sentenceId: number, x: number, y: number) => {
    const newCombo = comboRef.current + 1;
    setCombo(newCombo);
    setMaxCombo(prev => Math.max(prev, newCombo));

    const baseScore = 100;
    const comboBonus = Math.min(newCombo - 1, 10) * 20;
    const totalPoints = baseScore + comboBonus;
    setScore(prev => prev + totalPoints);
    setTotalCorrect(prev => prev + 1);
    setSentencesCompleted(prev => prev + 1);

    spawnParticles(x, y, 'confetti', 20);
    spawnParticles(x, y, 'star', 8);

    let notifText = `+${totalPoints}`;
    if (newCombo >= 3) notifText = `COMBO x${newCombo}! +${totalPoints}`;
    spawnNotification(notifText, x, y - 40, newCombo >= 3 ? 'combo' : 'correct');

    if (newCombo >= 3) {
      setSirenActive(true);
      setTimeout(() => setSirenActive(false), 1500);
    }

    setSentences(prev => prev.map(s =>
      s.id === sentenceId ? { ...s, state: 'correct' as const, exitTimer: 1.2 } : s
    ));
  }, [spawnParticles, spawnNotification]);

  const handleWrong = useCallback((sentenceId: number, x: number, y: number) => {
    setCombo(0);
    setLives(prev => Math.max(0, prev - 1));
    setTotalWrong(prev => prev + 1);

    spawnParticles(x, y, 'spark', 15);

    spawnNotification("WRONG!", x, y - 40, 'wrong');

    setSentences(prev => prev.map(s =>
      s.id === sentenceId ? { ...s, state: 'wrong' as const, shakeTimer: 0.8, speed: 0 } : s
    ));

    setTimeout(() => {
      setSentences(prev => prev.map(s =>
        s.id === sentenceId ? { ...s, state: 'moving' as const, speed: LEVELS[Math.min(levelRef.current - 1, LEVELS.length - 1)].sentenceSpeed * (0.85 + Math.random() * 0.3) } : s
      ));
    }, 800);
  }, [spawnParticles, spawnNotification]);

  const handleMissed = useCallback((sentenceId: number) => {
    setCombo(0);
    setLives(prev => Math.max(0, prev - 1));
    setSentencesCompleted(prev => prev + 1);

    setSentences(prev => prev.filter(s => s.id !== sentenceId));
  }, []);

  // ─── Drop punctuation on sentence ──────────────────────────────────────────

  const tryDropPunctuation = useCallback((punctuation: PunctuationType, dropX: number, dropY: number) => {
    // Check boss fight first
    if (bossShowingRef.current && bossFight) {
      const bf = bossFight;
      if (bf.currentIndex < bf.marks.length) {
        const mark = bf.marks[bf.currentIndex];
        const isCorrect = punctuation === mark.correct;
        const newMarks = [...bf.marks];
        newMarks[bf.currentIndex] = { ...mark, filled: true, filledWith: punctuation, isCorrect };

        if (isCorrect) {
          spawnParticles(dropX, dropY, 'confetti', 12);
          spawnParticles(dropX, dropY, 'star', 5);
          const newCombo = comboRef.current + 1;
          setCombo(newCombo);
          setMaxCombo(prev => Math.max(prev, newCombo));
          setScore(prev => prev + 150 + Math.min(newCombo - 1, 10) * 25);
          spawnNotification('+150', dropX, dropY - 30, 'correct');
        } else {
          spawnParticles(dropX, dropY, 'spark', 10);
          setCombo(0);
          setLives(prev => Math.max(0, prev - 1));
          spawnNotification('WRONG!', dropX, dropY - 30, 'wrong');
        }

        const nextIndex = bf.currentIndex + 1;
        const completed = nextIndex >= bf.marks.length;

        setBossFight({
          ...bf,
          marks: newMarks,
          currentIndex: nextIndex,
          completed,
        });

        if (completed) {
          setTimeout(() => {
            setBossShowing(false);
            setBossFight(null);
            setSentencesCompleted(prev => prev + 3);
          }, 1200);
        }
        return;
      }
    }

    // Check regular sentences
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    let hitSentence: Sentence | null = null;
    let minDist = Infinity;

    sentencesRef.current.forEach(s => {
      if (s.state !== 'moving') return;
      // Check if the drop point is near the end of the sentence card
      const sentEndX = s.x + SENTENCE_WIDTH;
      const sentCenterY = s.y;
      const dx = dropX - sentEndX;
      const dy = dropY - sentCenterY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Allow generous drop zone near sentence end
      if (dist < 100 && dist < minDist) {
        // Also check broader overlap with the sentence card area
        if (dropX > s.x - 30 && dropX < s.x + SENTENCE_WIDTH + 80 &&
            dropY > s.y - SENTENCE_HEIGHT && dropY < s.y + SENTENCE_HEIGHT) {
          hitSentence = s;
          minDist = dist;
        }
      }
    });

    if (!hitSentence) {
      // Check even more broadly if just overlapping the sentence card at all
      sentencesRef.current.forEach(s => {
        if (s.state !== 'moving') return;
        if (dropX > s.x - 20 && dropX < s.x + SENTENCE_WIDTH + 50 &&
            dropY > s.y - SENTENCE_HEIGHT / 2 - 20 && dropY < s.y + SENTENCE_HEIGHT / 2 + 20) {
          hitSentence = s;
        }
      });
    }

    if (hitSentence) {
      const s = hitSentence as Sentence;
      const hitX = s.x + SENTENCE_WIDTH / 2;
      const hitY = s.y;

      if (!s.capitalFixed && s.needsCapital) {
        // Sentence still needs capital — show hint
        spawnNotification("Fix the capital first!", hitX, hitY - 50, 'capital');
        return;
      }

      if (punctuation === s.correctPunctuation) {
        handleCorrect(s.id, hitX, hitY);
      } else {
        handleWrong(s.id, hitX, hitY);
      }
    }
  }, [bossFight, handleCorrect, handleWrong, spawnParticles, spawnNotification]);

  // ─── Capital Letter Handler ─────────────────────────────────────────────────

  const handleCapitalFix = useCallback((sentenceId: number) => {
    setSentences(prev => prev.map(s => {
      if (s.id !== sentenceId || s.capitalFixed) return s;
      const fixed = s.text[0].toUpperCase() + s.text.slice(1);
      spawnNotification("Capital fixed!", s.x + SENTENCE_WIDTH / 2, s.y - 50, 'capital');
      spawnParticles(s.x + 20, s.y, 'star', 6);
      setScore(prev => prev + 25);
      return { ...s, text: fixed, capitalFixed: true };
    }));
  }, [spawnParticles, spawnNotification]);

  // ─── Drag Handlers ─────────────────────────────────────────────────────────

  const handleDragStart = useCallback((
    e: React.MouseEvent | React.TouchEvent,
    punctuation: PunctuationType,
    originX: number,
    originY: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;

    setDragState({
      punctuation,
      x,
      y,
      originX,
      originY,
      offsetX: x - originX,
      offsetY: y - originY,
    });
  }, []);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragRef.current || !containerRef.current) return;
    e.preventDefault();
    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - containerRect.left;
    const y = clientY - containerRect.top;

    setDragState(prev => prev ? { ...prev, x, y } : null);
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragRef.current) return;
    const drag = dragRef.current;
    tryDropPunctuation(drag.punctuation, drag.x, drag.y);
    setDragState(null);
  }, [tryDropPunctuation]);

  // Attach drag listeners
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

  // ─── Game Init ──────────────────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    setSentences([]);
    setParticles([]);
    setNotifications([]);
    setDragState(null);
    setSirenActive(false);
    setSentencesCompleted(0);
    setCombo(0);
    setBossFight(null);
    setBossShowing(false);
    setBossTriggered(false);
    spawnTimerRef.current = 0;
    lastTimeRef.current = 0;
    setLevelStartTime(Date.now());
  }, []);

  const startGame = useCallback(() => {
    setLevel(1);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setLives(5);
    setTotalCorrect(0);
    setTotalWrong(0);
    initLevel(1);
    setGameScreen('playing');
  }, [initLevel]);

  const nextLevel = useCallback(() => {
    const newLevel = level + 1;
    setLevel(newLevel);
    initLevel(newLevel);
    setGameScreen('playing');
  }, [level, initLevel]);

  // ─── Level completion / Game over check ─────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing') return;
    const config = LEVELS[Math.min(level - 1, LEVELS.length - 1)];

    if (lives <= 0) {
      setTimeout(() => setGameScreen('gameOver'), 500);
      return;
    }

    if (sentencesCompleted >= config.sentencesRequired && !bossShowing) {
      if (config.hasBoss && !bossTriggered) {
        // Will start boss from game loop
      } else if (!config.hasBoss || (config.hasBoss && bossTriggered && !bossFight)) {
        setTimeout(() => setGameScreen('levelComplete'), 800);
      }
    }
  }, [gameScreen, level, lives, sentencesCompleted, bossShowing, bossTriggered, bossFight]);

  // ─── Main Game Loop ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const gameLoop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = (timestamp - lastTimeRef.current) / 1000;
      const delta = Math.min(rawDelta, 0.05);
      lastTimeRef.current = timestamp;

      const config = LEVELS[Math.min(levelRef.current - 1, LEVELS.length - 1)];
      const size = getContainerSize();

      // ── Spawn sentences ──
      if (!bossShowingRef.current) {
        spawnTimerRef.current += delta;
        if (spawnTimerRef.current >= config.spawnInterval / 1000) {
          spawnTimerRef.current = 0;
          const currentSentences = sentencesRef.current.filter(s => s.state === 'moving' || s.state === 'wrong');
          if (currentSentences.length < config.maxOnScreen &&
              sentencesCompletedRef.current < config.sentencesRequired) {
            // Pick a lane that is least occupied
            const laneCounts: Record<number, number> = {};
            const numLanes = Math.min(3, Math.max(2, Math.floor((size.height - ROAD_TOP - TOOLKIT_HEIGHT - 40) / LANE_HEIGHT)));
            for (let i = 0; i < numLanes; i++) laneCounts[i] = 0;
            currentSentences.forEach(s => { laneCounts[s.lane] = (laneCounts[s.lane] || 0) + 1; });
            let bestLane = 0;
            let bestCount = Infinity;
            for (let i = 0; i < numLanes; i++) {
              if ((laneCounts[i] || 0) < bestCount) {
                bestCount = laneCounts[i] || 0;
                bestLane = i;
              }
            }
            const newSentence = createSentence(config, bestLane);
            setSentences(prev => [...prev, newSentence]);
          }
        }
      }

      // ── Update sentences ──
      setSentences(prev => {
        let changed = false;
        const updated = prev.map(s => {
          let { x, shakeTimer, exitTimer, wheelRotation, state } = s;

          if (state === 'moving') {
            x -= s.speed * delta * 60;
            wheelRotation += s.speed * delta * 120;
            if (x + SENTENCE_WIDTH < -50) {
              // Missed!
              handleMissed(s.id);
              changed = true;
              return { ...s, state: 'missed' as const };
            }
          } else if (state === 'wrong') {
            shakeTimer = Math.max(0, shakeTimer - delta);
            if (shakeTimer <= 0) {
              // Restored to moving is handled in handleWrong timeout
            }
          } else if (state === 'correct') {
            exitTimer -= delta;
            x -= 3 * delta * 60; // Drive off fast
            wheelRotation += 6 * delta * 60;
            if (exitTimer <= 0) {
              changed = true;
              return { ...s, state: 'exiting' as const };
            }
          } else if (state === 'exiting' || state === 'missed') {
            changed = true;
            return s; // Will be filtered below
          }

          if (x !== s.x || shakeTimer !== s.shakeTimer || exitTimer !== s.exitTimer || wheelRotation !== s.wheelRotation) {
            changed = true;
          }

          return { ...s, x, shakeTimer, exitTimer, wheelRotation };
        }).filter(s => s.state !== 'exiting' && s.state !== 'missed');

        return changed ? updated : prev;
      });

      // ── Update particles ──
      setParticles(prev => {
        let changed = false;
        const updated = prev.map(p => {
          const life = p.life - delta / p.maxLife;
          if (life <= 0) { changed = true; return { ...p, life: 0 }; }
          changed = true;
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy + (p.type === 'confetti' ? 0.5 : 0),
            vy: p.vy + (p.type === 'smoke' ? -0.1 : 0.15),
            vx: p.vx * 0.98,
            life,
            rotation: p.rotation + p.rotationSpeed,
          };
        }).filter(p => p.life > 0);
        return changed ? updated : prev;
      });

      // ── Update notifications ──
      setNotifications(prev => {
        let changed = false;
        const updated = prev.map(n => {
          const timer = n.timer - delta;
          if (timer <= 0) { changed = true; return { ...n, timer: 0 }; }
          changed = true;
          return { ...n, timer, y: n.y - delta * 30 };
        }).filter(n => n.timer > 0);
        return changed ? updated : prev;
      });

      // ── Check boss trigger ──
      if (config.hasBoss && sentencesCompletedRef.current >= config.sentencesRequired && !bossShowingRef.current) {
        const movingSentences = sentencesRef.current.filter(s => s.state === 'moving' || s.state === 'wrong');
        if (movingSentences.length === 0) {
          setBossTriggered(true);
          startBossFight();
        }
      }

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameScreen, getContainerSize, createSentence, handleMissed, startBossFight]);

  // ─── Computed values ────────────────────────────────────────────────────────

  const config = LEVELS[Math.min(level - 1, LEVELS.length - 1)];
  const progress = Math.min(sentencesCompleted / config.sentencesRequired, 1);

  // ─── Render: Intro Screen ──────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="pp-game">
        <style>{styles}</style>
        <div className="pp-intro">
          <div className="pp-intro-bg">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="pp-bg-car" style={{
                left: `${Math.random() * 90}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 6}s`,
              }} />
            ))}
            <div className="pp-road-bg" />
          </div>
          <div className="pp-intro-content">
            <div className="pp-logo">
              <span className="pp-logo-badge">🚔</span>
              <h1>Punctuation Patrol</h1>
              <span className="pp-logo-siren">🚨</span>
            </div>
            <p className="pp-tagline">Stop! Grammar Police!</p>

            <div className="pp-instructions-card">
              <h3>How to Play</h3>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-mini-sentence">The cat is big</span>
                  <span className="pp-arrow-icon">+</span>
                  <span className="pp-mini-mark pp-mark-period">.</span>
                </div>
                <p><strong>DRAG</strong> the right punctuation to each sentence!</p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-mini-mark pp-mark-period">.</span>
                  <span className="pp-mini-mark pp-mark-question">?</span>
                  <span className="pp-mini-mark pp-mark-exclamation">!</span>
                </div>
                <p>Full stops, question marks, and exclamation marks!</p>
              </div>
              <div className="pp-instruction">
                <div className="pp-instruction-visual">
                  <span className="pp-caps-badge-demo">Aa</span>
                  <span className="pp-arrow-icon">=</span>
                  <span className="pp-mini-sentence pp-caps-example">the &#8594; The</span>
                </div>
                <p>Tap <strong>Aa</strong> on sentences that need a capital letter!</p>
              </div>
            </div>

            <button className="pp-start-btn" onClick={startGame}>
              <span>🚔</span>
              Start Patrol
              <span>🚨</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Level Complete ─────────────────────────────────────────────────

  if (gameScreen === 'levelComplete') {
    const timeElapsed = Math.round((Date.now() - levelStartTime) / 1000);
    const speedBonus = Math.max(0, 500 - timeElapsed * 5);
    const comboBonus = maxCombo * 50;

    return (
      <div className="pp-game">
        <style>{styles}</style>
        <div className="pp-complete">
          <div className="pp-complete-bg">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="pp-confetti-bg" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                backgroundColor: pickRandom(['#4ade80', '#38bdf8', '#fbbf24', '#f472b6', '#a78bfa']),
              }} />
            ))}
          </div>
          <div className="pp-complete-content">
            <div className="pp-complete-siren">🚨</div>
            <h1 className="pp-complete-title">Level {level} Complete!</h1>
            <p className="pp-complete-subtitle">{config.name}</p>

            <div className="pp-stats-grid">
              <div className="pp-stat">
                <span className="pp-stat-value">{totalCorrect}</span>
                <span className="pp-stat-label">Correct</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-value">{maxCombo}x</span>
                <span className="pp-stat-label">Best Combo</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-value">{timeElapsed}s</span>
                <span className="pp-stat-label">Time</span>
              </div>
            </div>

            <div className="pp-score-breakdown">
              <div className="pp-score-row">
                <span>Base Score</span>
                <span>{score}</span>
              </div>
              <div className="pp-score-row">
                <span>Speed Bonus</span>
                <span>+{speedBonus}</span>
              </div>
              <div className="pp-score-row">
                <span>Combo Bonus</span>
                <span>+{comboBonus}</span>
              </div>
              <div className="pp-score-row pp-score-total">
                <span>Total</span>
                <span>{score + speedBonus + comboBonus}</span>
              </div>
            </div>

            <div className="pp-complete-buttons">
              {level < 10 && (
                <button className="pp-next-btn" onClick={() => {
                  setScore(prev => prev + speedBonus + comboBonus);
                  setMaxCombo(0);
                  nextLevel();
                }}>
                  Level {level + 1}: {LEVELS[Math.min(level, LEVELS.length - 1)].name} &#8594;
                </button>
              )}
              {level >= 10 && (
                <button className="pp-next-btn" onClick={() => {
                  setGameScreen('intro');
                }}>
                  You Are The Chief! &#127942;
                </button>
              )}
              <button className="pp-menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Game Over ──────────────────────────────────────────────────────

  if (gameScreen === 'gameOver') {
    return (
      <div className="pp-game">
        <style>{styles}</style>
        <div className="pp-gameover">
          <div className="pp-gameover-content">
            <div className="pp-gameover-icon">🚧</div>
            <h1 className="pp-gameover-title">Shift Over!</h1>
            <p className="pp-gameover-sub">You ran out of lives on Level {level}</p>

            <div className="pp-stats-grid">
              <div className="pp-stat">
                <span className="pp-stat-value">{score}</span>
                <span className="pp-stat-label">Score</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-value">{totalCorrect}</span>
                <span className="pp-stat-label">Correct</span>
              </div>
              <div className="pp-stat">
                <span className="pp-stat-value">{maxCombo}x</span>
                <span className="pp-stat-label">Best Combo</span>
              </div>
            </div>

            <div className="pp-complete-buttons">
              <button className="pp-next-btn" onClick={startGame}>
                Try Again &#8634;
              </button>
              <button className="pp-menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Back to Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Render: Playing ───────────────────────────────────────────────────────

  const numLanes = Math.min(3, Math.max(2, Math.floor(((containerRef.current?.offsetHeight || 600) - ROAD_TOP - TOOLKIT_HEIGHT - 40) / LANE_HEIGHT)));

  return (
    <div className="pp-game">
      <style>{styles}</style>
      <div className="pp-playing" ref={containerRef}>

        {/* ── Header ── */}
        <div className="pp-header">
          <div className="pp-header-left">
            <button className="pp-back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>&#8592;</button>
            <div className="pp-level-badge">
              <span className="pp-badge-icon">🚔</span>
              Level {level}
            </div>
          </div>
          <div className="pp-header-center">
            <div className="pp-progress-bar">
              <div className="pp-progress-fill" style={{ width: `${progress * 100}%` }} />
              <span className="pp-progress-text">{sentencesCompleted}/{config.sentencesRequired}</span>
            </div>
          </div>
          <div className="pp-header-right">
            <div className="pp-lives">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`pp-heart ${i < lives ? 'pp-heart-full' : 'pp-heart-empty'}`}>
                  {i < lives ? '\u2764\uFE0F' : '\u{1F5A4}'}
                </span>
              ))}
            </div>
            <div className="pp-score-display">
              <span className="pp-score-star">&#11088;</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* ── Siren Bar ── */}
        <div className={`pp-siren-bar ${sirenActive ? 'pp-siren-active' : ''} ${combo >= 3 ? 'pp-combo-glow' : ''}`}>
          {combo >= 2 && (
            <div className="pp-combo-display">
              <span className="pp-combo-text">COMBO x{combo}</span>
              {combo >= 5 && <span className="pp-combo-fire">&#128293;</span>}
            </div>
          )}
          <div className="pp-siren-light pp-siren-red" />
          <div className="pp-siren-light pp-siren-blue" />
        </div>

        {/* ── City Background ── */}
        <div className="pp-city-bg">
          <div className="pp-building pp-b1" />
          <div className="pp-building pp-b2" />
          <div className="pp-building pp-b3" />
          <div className="pp-building pp-b4" />
          <div className="pp-building pp-b5" />
          <div className="pp-building pp-b6" />
          <div className="pp-building pp-b7" />
          <div className="pp-building pp-b8" />
        </div>

        {/* ── Road / Conveyor ── */}
        <div className="pp-road" style={{ top: ROAD_TOP, height: numLanes * LANE_HEIGHT }}>
          {[...Array(numLanes + 1)].map((_, i) => (
            <div key={i} className="pp-lane-line" style={{ top: i * LANE_HEIGHT }} />
          ))}
          {[...Array(numLanes)].map((_, lane) => (
            <div key={lane} className="pp-lane-dashes" style={{ top: lane * LANE_HEIGHT + LANE_HEIGHT / 2 }}>
              {[...Array(20)].map((_, d) => (
                <div key={d} className="pp-dash" style={{ left: `${d * 5.5}%` }} />
              ))}
            </div>
          ))}
          {/* Traffic light at the end */}
          <div className="pp-traffic-light">
            <div className="pp-tl-red" />
            <div className="pp-tl-yellow" />
            <div className="pp-tl-green" />
          </div>
        </div>

        {/* ── Sentences (vehicles) ── */}
        {sentences.map(s => {
          const isShaking = s.state === 'wrong' && s.shakeTimer > 0;
          const isCorrect = s.state === 'correct';
          const shakeX = isShaking ? Math.sin(s.shakeTimer * 40) * 6 : 0;
          const displayText = s.text;

          return (
            <div
              key={s.id}
              className={`pp-sentence-vehicle ${isShaking ? 'pp-shake' : ''} ${isCorrect ? 'pp-correct-vehicle' : ''} ${s.state === 'wrong' ? 'pp-wrong-vehicle' : ''}`}
              style={{
                left: s.x + shakeX,
                top: s.y - SENTENCE_HEIGHT / 2,
                width: SENTENCE_WIDTH,
                height: SENTENCE_HEIGHT,
              }}
            >
              {/* Vehicle body */}
              <div className="pp-vehicle-body">
                {/* Capital button */}
                {s.needsCapital && !s.capitalFixed && s.state === 'moving' && (
                  <button
                    className="pp-caps-btn"
                    onClick={(e) => { e.stopPropagation(); handleCapitalFix(s.id); }}
                    onTouchStart={(e) => { e.stopPropagation(); handleCapitalFix(s.id); }}
                  >
                    Aa
                  </button>
                )}
                <span className="pp-sentence-text">
                  {displayText}
                  <span className="pp-punctuation-slot">
                    {isCorrect ? (
                      <span className="pp-filled-mark pp-filled-correct">{s.correctPunctuation}</span>
                    ) : s.state === 'wrong' && s.assignedPunctuation ? (
                      <span className="pp-filled-mark pp-filled-wrong">{s.assignedPunctuation}</span>
                    ) : (
                      <span className="pp-empty-slot">__</span>
                    )}
                  </span>
                </span>
                {/* Capital indicator */}
                {s.needsCapital && !s.capitalFixed && (
                  <div className="pp-capital-warning">needs capital!</div>
                )}
                {s.capitalFixed && s.needsCapital && (
                  <div className="pp-capital-done">&#10003;</div>
                )}
              </div>
              {/* Wheels */}
              <div className="pp-wheel pp-wheel-left" style={{ transform: `rotate(${s.wheelRotation}deg)` }} />
              <div className="pp-wheel pp-wheel-right" style={{ transform: `rotate(${s.wheelRotation}deg)` }} />
              {/* Headlight */}
              <div className="pp-headlight" />
              {/* Correct celebration */}
              {isCorrect && <div className="pp-correct-glow" />}
              {isCorrect && <span className="pp-happy-emoji">&#128515;</span>}
            </div>
          );
        })}

        {/* ── Boss Fight Overlay ── */}
        {bossShowing && bossFight && (
          <div className="pp-boss-overlay">
            <div className="pp-boss-card">
              <div className="pp-boss-header">
                <span className="pp-boss-icon">&#128680;</span>
                <span className="pp-boss-title">BOSS ROUND</span>
                <span className="pp-boss-icon">&#128680;</span>
              </div>
              <div className="pp-boss-text">
                {bossFight.marks.map((mark, idx) => {
                  const textParts = bossFight.text.split('__ ');
                  return (
                    <span key={idx}>
                      <span className="pp-boss-sentence-part">{textParts[idx]}</span>
                      {idx < bossFight.marks.length && (
                        <span className={`pp-boss-mark-slot ${
                          mark.filled
                            ? mark.isCorrect ? 'pp-boss-correct' : 'pp-boss-wrong'
                            : idx === bossFight.currentIndex ? 'pp-boss-current' : ''
                        }`}>
                          {mark.filled ? mark.filledWith : '__'}
                        </span>
                      )}
                      {idx < bossFight.marks.length - 1 && ' '}
                    </span>
                  );
                })}
                {bossFight.text.split('__ ').length > bossFight.marks.length && (
                  <span className="pp-boss-sentence-part">
                    {bossFight.text.split('__ ')[bossFight.marks.length]}
                  </span>
                )}
              </div>
              <div className="pp-boss-progress">
                {bossFight.marks.map((mark, i) => (
                  <div key={i} className={`pp-boss-dot ${
                    mark.filled ? (mark.isCorrect ? 'pp-boss-dot-correct' : 'pp-boss-dot-wrong') : i === bossFight.currentIndex ? 'pp-boss-dot-current' : ''
                  }`} />
                ))}
              </div>
              {bossFight.completed && (
                <div className="pp-boss-complete">PARAGRAPH FIXED!</div>
              )}
              <p className="pp-boss-hint">Drag punctuation marks to fill the blanks!</p>
            </div>
          </div>
        )}

        {/* ── Particles ── */}
        {particles.map(p => (
          <div
            key={p.id}
            className={`pp-particle pp-particle-${p.type}`}
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: p.life,
              transform: `rotate(${p.rotation}deg) scale(${p.life})`,
            }}
          />
        ))}

        {/* ── Notifications ── */}
        {notifications.map(n => (
          <div
            key={n.id}
            className={`pp-notification pp-notif-${n.type}`}
            style={{
              left: n.x,
              top: n.y,
              opacity: Math.min(1, n.timer * 2),
              transform: `translateX(-50%) scale(${Math.min(1, n.timer * 3)})`,
            }}
          >
            {n.text}
          </div>
        ))}

        {/* ── Dragged punctuation (follows cursor) ── */}
        {dragState && (
          <div
            className={`pp-dragged-mark pp-mark-${dragState.punctuation === '.' ? 'period' : dragState.punctuation === '?' ? 'question' : 'exclamation'}`}
            style={{
              left: dragState.x,
              top: dragState.y,
              transform: 'translate(-50%, -50%) scale(1.2)',
            }}
          >
            {dragState.punctuation}
          </div>
        )}

        {/* ── Punctuation Toolkit ── */}
        <div className="pp-toolkit">
          <div className="pp-toolkit-label">
            <span>&#128737;&#65039;</span> Officer&apos;s Toolkit
          </div>
          <div className="pp-toolkit-marks">
            {config.availablePunctuation.includes('.') && (
              <div
                className="pp-mark-btn pp-mark-period"
                onMouseDown={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '.', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
                onTouchStart={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '.', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
              >
                <span className="pp-mark-symbol">.</span>
                <span className="pp-mark-label">Full Stop</span>
              </div>
            )}
            {config.availablePunctuation.includes('?') && (
              <div
                className="pp-mark-btn pp-mark-question"
                onMouseDown={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '?', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
                onTouchStart={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '?', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
              >
                <span className="pp-mark-symbol">?</span>
                <span className="pp-mark-label">Question</span>
              </div>
            )}
            {config.availablePunctuation.includes('!') && (
              <div
                className="pp-mark-btn pp-mark-exclamation"
                onMouseDown={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '!', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
                onTouchStart={(e) => {
                  const rect = (e.target as HTMLElement).getBoundingClientRect();
                  const containerRect = containerRef.current?.getBoundingClientRect();
                  if (containerRect) {
                    handleDragStart(e, '!', rect.left + rect.width / 2 - containerRect.left, rect.top + rect.height / 2 - containerRect.top);
                  }
                }}
              >
                <span className="pp-mark-symbol">!</span>
                <span className="pp-mark-label">Exclamation</span>
              </div>
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

  /* ── Base Container ── */
  .pp-game {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #1a1a2e;
  }

  /* ════════════════════════════════════════════════════════════════════════════
     INTRO SCREEN
     ════════════════════════════════════════════════════════════════════════ */

  .pp-intro {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0d1b2a 0%, #1b2838 40%, #2d3a4a 70%, #3d4f5f 100%);
  }

  .pp-intro-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .pp-bg-car {
    position: absolute;
    width: 60px;
    height: 24px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    border-radius: 8px 12px 4px 4px;
    animation: ppDriveBg 10s linear infinite;
    opacity: 0.15;
  }

  .pp-bg-car::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 8px;
    width: 10px;
    height: 10px;
    background: #334155;
    border-radius: 50%;
    box-shadow: 28px 0 0 #334155;
  }

  @keyframes ppDriveBg {
    0% { transform: translateX(120vw); }
    100% { transform: translateX(-120vw); }
  }

  .pp-road-bg {
    position: absolute;
    bottom: 15%;
    left: 0;
    right: 0;
    height: 80px;
    background: #2a2a3e;
    border-top: 3px solid #4a4a6a;
    border-bottom: 3px solid #4a4a6a;
  }

  .pp-road-bg::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 3px;
    background: repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 30px, transparent 30px, transparent 60px);
    transform: translateY(-50%);
    opacity: 0.4;
  }

  .pp-intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .pp-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .pp-logo h1 {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ef4444, #fbbf24, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pp-logo-badge {
    font-size: 2.5rem;
    animation: ppBadgeBounce 2s ease-in-out infinite;
  }

  .pp-logo-siren {
    font-size: 2.2rem;
    animation: ppSirenFlash 1s ease-in-out infinite;
  }

  @keyframes ppBadgeBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  @keyframes ppSirenFlash {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.15); }
  }

  .pp-tagline {
    color: #94a3b8;
    font-size: 1.15rem;
    margin-bottom: 1.8rem;
    font-weight: 600;
  }

  .pp-instructions-card {
    background: rgba(255,255,255,0.05);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .pp-instructions-card h3 {
    color: white;
    font-size: 1.15rem;
    margin-bottom: 1.2rem;
  }

  .pp-instruction {
    margin-bottom: 1.2rem;
  }
  .pp-instruction:last-child { margin-bottom: 0; }

  .pp-instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
  }

  .pp-mini-sentence {
    display: inline-block;
    padding: 0.25rem 0.6rem;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    color: #e2e8f0;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .pp-caps-example {
    color: #4ade80;
  }

  .pp-arrow-icon {
    color: #64748b;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .pp-mini-mark {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.2rem;
    color: white;
  }

  .pp-mini-mark.pp-mark-period {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }
  .pp-mini-mark.pp-mark-question {
    background: linear-gradient(135deg, #f59e0b, #d97706);
  }
  .pp-mini-mark.pp-mark-exclamation {
    background: linear-gradient(135deg, #ef4444, #dc2626);
  }

  .pp-caps-badge-demo {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1rem;
    color: white;
  }

  .pp-instruction p {
    color: #cbd5e1;
    font-size: 0.9rem;
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
    background: linear-gradient(135deg, #ef4444, #f59e0b);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(239,68,68,0.4);
  }

  .pp-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(239,68,68,0.5);
  }

  /* ════════════════════════════════════════════════════════════════════════════
     PLAYING SCREEN
     ════════════════════════════════════════════════════════════════════════ */

  .pp-playing {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0d1b2a 0%, #1a1a2e 30%, #2a2a4e 100%);
    touch-action: none;
  }

  /* ── Header ── */
  .pp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: rgba(0,0,0,0.5);
    z-index: 100;
    position: relative;
    flex-shrink: 0;
  }

  .pp-header-left, .pp-header-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .pp-back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pp-back-btn:hover { background: rgba(255,255,255,0.2); }

  .pp-level-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #ef4444, #f59e0b);
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.85rem;
    color: white;
  }

  .pp-badge-icon { font-size: 1rem; }

  .pp-progress-bar {
    position: relative;
    width: 140px;
    height: 22px;
    background: rgba(255,255,255,0.1);
    border-radius: 11px;
    overflow: hidden;
  }

  .pp-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ade80, #22c55e);
    border-radius: 11px;
    transition: width 0.3s ease;
  }

  .pp-progress-text {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }

  .pp-lives {
    display: flex;
    gap: 2px;
  }

  .pp-heart {
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .pp-heart-empty {
    opacity: 0.3;
    filter: grayscale(1);
  }

  .pp-score-display {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(251,191,36,0.2);
    border-radius: 16px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .pp-score-star { font-size: 0.9rem; }

  /* ── Siren Bar ── */
  .pp-siren-bar {
    height: 6px;
    background: #1a1a2e;
    position: relative;
    z-index: 90;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: height 0.3s ease;
  }

  .pp-siren-bar.pp-siren-active {
    height: 36px;
    background: linear-gradient(90deg, #ef4444 0%, #3b82f6 25%, #ef4444 50%, #3b82f6 75%, #ef4444 100%);
    background-size: 200% 100%;
    animation: ppSirenSlide 0.4s linear infinite;
  }

  .pp-siren-bar.pp-combo-glow {
    height: 28px;
    background: rgba(251,191,36,0.3);
  }

  @keyframes ppSirenSlide {
    0% { background-position: 0% 0%; }
    100% { background-position: 200% 0%; }
  }

  .pp-combo-display {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    z-index: 5;
  }

  .pp-combo-text {
    font-size: 0.9rem;
    font-weight: 900;
    color: #fbbf24;
    text-shadow: 0 0 10px rgba(251,191,36,0.8);
    animation: ppComboPulse 0.5s ease-in-out infinite;
  }

  .pp-combo-fire { font-size: 1.1rem; }

  @keyframes ppComboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .pp-siren-light {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .pp-siren-active .pp-siren-light { opacity: 1; }

  .pp-siren-red {
    left: 10%;
    background: radial-gradient(circle, #ef4444 0%, transparent 70%);
    animation: ppFlashRed 0.3s ease-in-out infinite alternate;
  }

  .pp-siren-blue {
    right: 10%;
    background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
    animation: ppFlashBlue 0.3s ease-in-out infinite alternate-reverse;
  }

  @keyframes ppFlashRed {
    0% { opacity: 0.3; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.5); }
  }

  @keyframes ppFlashBlue {
    0% { opacity: 0.3; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.5); }
  }

  /* ── City Background ── */
  .pp-city-bg {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    height: 100px;
    pointer-events: none;
    z-index: 1;
  }

  .pp-building {
    position: absolute;
    bottom: 0;
    background: #1e293b;
    border-radius: 4px 4px 0 0;
  }

  .pp-building::before {
    content: '';
    position: absolute;
    inset: 4px;
    background: repeating-linear-gradient(
      0deg,
      transparent 0px, transparent 8px,
      rgba(251,191,36,0.15) 8px, rgba(251,191,36,0.15) 10px
    );
    background-size: 12px 12px;
  }

  .pp-b1 { left: 2%; width: 50px; height: 60px; background: #1e293b; }
  .pp-b2 { left: 10%; width: 40px; height: 80px; background: #253349; }
  .pp-b3 { left: 20%; width: 55px; height: 50px; background: #1e293b; }
  .pp-b4 { left: 35%; width: 45px; height: 90px; background: #253349; }
  .pp-b5 { left: 50%; width: 60px; height: 70px; background: #1e293b; }
  .pp-b6 { left: 65%; width: 35px; height: 55px; background: #253349; }
  .pp-b7 { left: 78%; width: 50px; height: 85px; background: #1e293b; }
  .pp-b8 { left: 90%; width: 45px; height: 65px; background: #253349; }

  /* ── Road ── */
  .pp-road {
    position: absolute;
    left: 0;
    right: 0;
    background: #2a2a3e;
    z-index: 2;
    border-top: 4px solid #4a4a6a;
    border-bottom: 4px solid #4a4a6a;
  }

  .pp-lane-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: #4a4a6a;
  }

  .pp-lane-dashes {
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    pointer-events: none;
  }

  .pp-dash {
    position: absolute;
    width: 30px;
    height: 3px;
    background: #fbbf24;
    opacity: 0.25;
    border-radius: 2px;
    top: -1.5px;
    animation: ppDashMove 3s linear infinite;
  }

  @keyframes ppDashMove {
    0% { transform: translateX(0); }
    100% { transform: translateX(-60px); }
  }

  .pp-traffic-light {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    background: #111;
    border-radius: 6px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    z-index: 5;
    border: 2px solid #333;
  }

  .pp-tl-red, .pp-tl-yellow, .pp-tl-green {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .pp-tl-red {
    background: #ef4444;
    box-shadow: 0 0 8px #ef4444;
    animation: ppTLBlink 2s ease-in-out infinite;
  }

  .pp-tl-yellow {
    background: #4a4a4a;
  }

  .pp-tl-green {
    background: #4a4a4a;
  }

  @keyframes ppTLBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* ── Sentence Vehicles ── */
  .pp-sentence-vehicle {
    position: absolute;
    z-index: 20;
    pointer-events: auto;
    transition: filter 0.2s;
  }

  .pp-vehicle-body {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 16px 20px 8px 8px;
    border: 3px solid #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    overflow: hidden;
  }

  .pp-sentence-vehicle::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 30px;
    right: 30px;
    height: 6px;
    background: linear-gradient(180deg, #94a3b8, #cbd5e1);
    border-radius: 4px 4px 0 0;
  }

  .pp-sentence-text {
    font-size: clamp(0.85rem, 2vw, 1.05rem);
    font-weight: 700;
    color: #1e293b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pp-punctuation-slot {
    display: inline;
    margin-left: 2px;
  }

  .pp-empty-slot {
    color: #ef4444;
    font-weight: 900;
    animation: ppSlotBlink 1s ease-in-out infinite;
  }

  @keyframes ppSlotBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .pp-filled-mark {
    font-weight: 900;
    font-size: 1.3em;
  }

  .pp-filled-correct {
    color: #16a34a;
    animation: ppMarkPop 0.4s ease;
  }

  .pp-filled-wrong {
    color: #ef4444;
    animation: ppMarkShake 0.4s ease;
  }

  @keyframes ppMarkPop {
    0% { transform: scale(0); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }

  @keyframes ppMarkShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
  }

  /* Capital button */
  .pp-caps-btn {
    position: absolute;
    left: -14px;
    top: -14px;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border: 2px solid #a78bfa;
    border-radius: 8px;
    color: white;
    font-weight: 900;
    font-size: 0.75rem;
    cursor: pointer;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ppCapsPulse 1.5s ease-in-out infinite;
    box-shadow: 0 2px 8px rgba(139,92,246,0.5);
    touch-action: manipulation;
  }

  @keyframes ppCapsPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(139,92,246,0.5); }
    50% { transform: scale(1.1); box-shadow: 0 4px 16px rgba(139,92,246,0.8); }
  }

  .pp-capital-warning {
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.6rem;
    color: #a78bfa;
    font-weight: 700;
    white-space: nowrap;
    animation: ppWarnBlink 1s ease-in-out infinite;
  }

  @keyframes ppWarnBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .pp-capital-done {
    position: absolute;
    left: -10px;
    top: -10px;
    width: 24px;
    height: 24px;
    background: #16a34a;
    border-radius: 50%;
    color: white;
    font-size: 0.75rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Wheels */
  .pp-wheel {
    position: absolute;
    bottom: -10px;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at 40% 40%, #64748b 0%, #1e293b 60%, #0f172a 100%);
    border-radius: 50%;
    border: 2px solid #475569;
    z-index: 25;
  }

  .pp-wheel::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 2px;
    background: #94a3b8;
    transform: translate(-50%, -50%);
    border-radius: 1px;
  }

  .pp-wheel-left { left: 20px; }
  .pp-wheel-right { right: 20px; }

  /* Headlight */
  .pp-headlight {
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 16px;
    background: radial-gradient(ellipse, #fbbf24 0%, transparent 70%);
    border-radius: 0 4px 4px 0;
    opacity: 0.6;
  }

  /* Correct celebration */
  .pp-correct-vehicle .pp-vehicle-body {
    background: linear-gradient(180deg, #dcfce7 0%, #bbf7d0 100%);
    border-color: #4ade80;
    box-shadow: 0 0 20px rgba(74,222,128,0.5);
  }

  .pp-correct-glow {
    position: absolute;
    inset: -15px;
    border: 3px solid #4ade80;
    border-radius: 24px;
    animation: ppCorrectGlow 0.6s ease forwards;
    pointer-events: none;
  }

  @keyframes ppCorrectGlow {
    0% { transform: scale(0.9); opacity: 1; }
    100% { transform: scale(1.2); opacity: 0; }
  }

  .pp-happy-emoji {
    position: absolute;
    top: -28px;
    right: 10px;
    font-size: 1.5rem;
    animation: ppHappyBounce 0.6s ease infinite;
  }

  @keyframes ppHappyBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  /* Wrong shake */
  .pp-wrong-vehicle .pp-vehicle-body {
    background: linear-gradient(180deg, #fef2f2 0%, #fecaca 100%);
    border-color: #ef4444;
    animation: ppWrongFlash 0.2s ease infinite;
  }

  @keyframes ppWrongFlash {
    0%, 100% { border-color: #ef4444; }
    50% { border-color: #fca5a5; }
  }

  .pp-shake {
    animation: ppShakeVehicle 0.1s ease infinite;
  }

  @keyframes ppShakeVehicle {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px) rotate(-0.5deg); }
    75% { transform: translateX(3px) rotate(0.5deg); }
  }

  /* ── Boss Fight ── */
  .pp-boss-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ppBossIn 0.5s ease;
    backdrop-filter: blur(4px);
  }

  @keyframes ppBossIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }

  .pp-boss-card {
    background: linear-gradient(180deg, #1e1e3a 0%, #2a2a4e 100%);
    border: 3px solid #ef4444;
    border-radius: 24px;
    padding: 2rem;
    max-width: 600px;
    width: 90%;
    text-align: center;
    box-shadow: 0 0 60px rgba(239,68,68,0.3);
    animation: ppBossPulse 2s ease-in-out infinite;
  }

  @keyframes ppBossPulse {
    0%, 100% { box-shadow: 0 0 40px rgba(239,68,68,0.3); }
    50% { box-shadow: 0 0 80px rgba(239,68,68,0.5); }
  }

  .pp-boss-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .pp-boss-icon {
    font-size: 1.5rem;
    animation: ppSirenFlash 0.8s ease-in-out infinite;
  }

  .pp-boss-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #ef4444;
    text-shadow: 0 0 20px rgba(239,68,68,0.5);
    letter-spacing: 0.1em;
  }

  .pp-boss-text {
    font-size: 1.2rem;
    line-height: 2;
    color: #e2e8f0;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  .pp-boss-sentence-part {
    color: #e2e8f0;
  }

  .pp-boss-mark-slot {
    display: inline-block;
    min-width: 28px;
    padding: 0 4px;
    font-weight: 900;
    font-size: 1.3em;
    color: #ef4444;
    border-bottom: 3px solid #ef4444;
    margin: 0 2px;
    transition: all 0.3s;
  }

  .pp-boss-current {
    border-color: #fbbf24;
    color: #fbbf24;
    animation: ppSlotBlink 0.8s ease-in-out infinite;
  }

  .pp-boss-correct {
    color: #4ade80;
    border-color: #4ade80;
    animation: ppMarkPop 0.4s ease;
  }

  .pp-boss-wrong {
    color: #ef4444;
    border-color: #ef4444;
    animation: ppMarkShake 0.4s ease;
  }

  .pp-boss-progress {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin: 1rem 0;
  }

  .pp-boss-dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    transition: all 0.3s;
  }

  .pp-boss-dot-current {
    background: #fbbf24;
    border-color: #fbbf24;
    box-shadow: 0 0 10px rgba(251,191,36,0.5);
    animation: ppComboPulse 0.8s ease-in-out infinite;
  }

  .pp-boss-dot-correct {
    background: #4ade80;
    border-color: #4ade80;
    box-shadow: 0 0 10px rgba(74,222,128,0.5);
  }

  .pp-boss-dot-wrong {
    background: #ef4444;
    border-color: #ef4444;
  }

  .pp-boss-complete {
    font-size: 1.5rem;
    font-weight: 900;
    color: #4ade80;
    margin-top: 1rem;
    animation: ppBossCompleteIn 0.5s ease;
    text-shadow: 0 0 20px rgba(74,222,128,0.5);
  }

  @keyframes ppBossCompleteIn {
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); opacity: 1; }
  }

  .pp-boss-hint {
    color: #64748b;
    font-size: 0.85rem;
    margin-top: 0.6rem;
  }

  /* ── Particles ── */
  .pp-particle {
    position: absolute;
    pointer-events: none;
    z-index: 300;
    border-radius: 2px;
  }

  .pp-particle-confetti {
    border-radius: 2px;
  }

  .pp-particle-spark {
    border-radius: 50%;
    box-shadow: 0 0 4px currentColor;
  }

  .pp-particle-smoke {
    border-radius: 50%;
    filter: blur(3px);
  }

  .pp-particle-star {
    border-radius: 1px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }

  .pp-particle-siren {
    border-radius: 50%;
    box-shadow: 0 0 8px currentColor;
  }

  /* ── Notifications ── */
  .pp-notification {
    position: absolute;
    pointer-events: none;
    z-index: 310;
    font-weight: 900;
    font-size: 1.2rem;
    white-space: nowrap;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    transition: none;
  }

  .pp-notif-correct {
    color: #4ade80;
    font-size: 1.3rem;
  }

  .pp-notif-wrong {
    color: #ef4444;
    font-size: 1.4rem;
  }

  .pp-notif-combo {
    color: #fbbf24;
    font-size: 1.5rem;
    text-shadow: 0 0 15px rgba(251,191,36,0.8);
  }

  .pp-notif-bonus {
    color: #a78bfa;
    font-size: 1.1rem;
  }

  .pp-notif-capital {
    color: #c084fc;
    font-size: 1rem;
  }

  /* ── Dragged Mark ── */
  .pp-dragged-mark {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 2.2rem;
    color: white;
    z-index: 500;
    pointer-events: none;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    transition: none;
  }

  .pp-dragged-mark.pp-mark-period {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border: 3px solid #60a5fa;
  }

  .pp-dragged-mark.pp-mark-question {
    background: linear-gradient(135deg, #f59e0b, #b45309);
    border: 3px solid #fbbf24;
  }

  .pp-dragged-mark.pp-mark-exclamation {
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    border: 3px solid #f87171;
  }

  /* ── Toolkit ── */
  .pp-toolkit {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${TOOLKIT_HEIGHT}px;
    background: linear-gradient(180deg, rgba(15,23,42,0.95) 0%, #0f172a 100%);
    border-top: 3px solid #334155;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    z-index: 50;
    padding-bottom: 0.5rem;
  }

  .pp-toolkit-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .pp-toolkit-marks {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }

  .pp-mark-btn {
    width: ${PUNCTUATION_SIZE}px;
    height: ${PUNCTUATION_SIZE}px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: grab;
    transition: all 0.2s;
    position: relative;
    touch-action: none;
  }

  .pp-mark-btn:hover {
    transform: scale(1.1);
  }

  .pp-mark-btn:active {
    cursor: grabbing;
    transform: scale(0.95);
  }

  .pp-mark-btn.pp-mark-period {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border: 3px solid #60a5fa;
    box-shadow: 0 6px 20px rgba(59,130,246,0.4), inset 0 2px 4px rgba(255,255,255,0.2);
  }

  .pp-mark-btn.pp-mark-question {
    background: linear-gradient(135deg, #f59e0b, #b45309);
    border: 3px solid #fbbf24;
    box-shadow: 0 6px 20px rgba(245,158,11,0.4), inset 0 2px 4px rgba(255,255,255,0.2);
  }

  .pp-mark-btn.pp-mark-exclamation {
    background: linear-gradient(135deg, #ef4444, #b91c1c);
    border: 3px solid #f87171;
    box-shadow: 0 6px 20px rgba(239,68,68,0.4), inset 0 2px 4px rgba(255,255,255,0.2);
  }

  .pp-mark-symbol {
    font-size: 2rem;
    font-weight: 900;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    line-height: 1;
  }

  .pp-mark-label {
    font-size: 0.55rem;
    font-weight: 700;
    color: rgba(255,255,255,0.7);
    margin-top: 1px;
  }

  /* Badge shimmer on marks */
  .pp-mark-btn::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 15%;
    width: 40%;
    height: 30%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  /* Badge border animation */
  .pp-mark-btn::after {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 2px dashed rgba(255,255,255,0.15);
    animation: ppBadgeRotate 8s linear infinite;
    pointer-events: none;
  }

  @keyframes ppBadgeRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* ════════════════════════════════════════════════════════════════════════════
     LEVEL COMPLETE SCREEN
     ════════════════════════════════════════════════════════════════════════ */

  .pp-complete {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0d1b2a 0%, #1a1a2e 100%);
  }

  .pp-complete-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .pp-confetti-bg {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    animation: ppConfettiFall 3s linear infinite;
  }

  @keyframes ppConfettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .pp-complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 460px;
  }

  .pp-complete-siren {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    animation: ppSirenFlash 0.8s ease-in-out infinite;
  }

  .pp-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    font-weight: 900;
    color: white;
    margin-bottom: 0.3rem;
    background: linear-gradient(135deg, #4ade80, #38bdf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pp-complete-subtitle {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .pp-stats-grid {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .pp-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 1rem;
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    min-width: 80px;
  }

  .pp-stat-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
  }

  .pp-stat-label {
    font-size: 0.7rem;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pp-score-breakdown {
    background: rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .pp-score-row {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0;
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .pp-score-total {
    border-top: 2px solid rgba(255,255,255,0.1);
    margin-top: 0.4rem;
    padding-top: 0.6rem;
    color: #fbbf24;
    font-size: 1.1rem;
    font-weight: 900;
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
    gap: 0.6rem;
    padding: 0.9rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(74,222,128,0.4);
  }

  .pp-next-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(74,222,128,0.5);
  }

  .pp-menu-btn {
    padding: 0.7rem 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: #94a3b8;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pp-menu-btn:hover {
    border-color: rgba(255,255,255,0.3);
    color: white;
  }

  /* ════════════════════════════════════════════════════════════════════════════
     GAME OVER SCREEN
     ════════════════════════════════════════════════════════════════════════ */

  .pp-gameover {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #1a0a0a 0%, #2a1515 100%);
  }

  .pp-gameover-content {
    text-align: center;
    padding: 2rem;
    max-width: 420px;
  }

  .pp-gameover-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: ppGameoverBounce 2s ease-in-out infinite;
  }

  @keyframes ppGameoverBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-3deg); }
    75% { transform: translateY(-5px) rotate(3deg); }
  }

  .pp-gameover-title {
    font-size: 2.2rem;
    font-weight: 900;
    color: #ef4444;
    margin-bottom: 0.5rem;
  }

  .pp-gameover-sub {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  /* ════════════════════════════════════════════════════════════════════════════
     RESPONSIVE
     ════════════════════════════════════════════════════════════════════════ */

  @media (max-width: 600px) {
    .pp-header { padding: 0.4rem 0.5rem; }
    .pp-level-badge { font-size: 0.75rem; padding: 0.3rem 0.6rem; }
    .pp-progress-bar { width: 100px; height: 18px; }
    .pp-heart { font-size: 0.75rem; }
    .pp-score-display { font-size: 0.75rem; padding: 0.3rem 0.6rem; }

    .pp-mark-btn {
      width: 56px;
      height: 56px;
    }
    .pp-mark-symbol { font-size: 1.6rem; }
    .pp-mark-label { font-size: 0.45rem; }
    .pp-toolkit-marks { gap: 0.8rem; }
    .pp-toolkit { height: 100px; }
    .pp-toolkit-label { font-size: 0.65rem; }

    .pp-sentence-text { font-size: 0.8rem; }

    .pp-boss-text { font-size: 1rem; }
    .pp-boss-card { padding: 1.2rem; }

    .pp-stats-grid { gap: 0.8rem; }
    .pp-stat { padding: 0.5rem 0.7rem; min-width: 65px; }
    .pp-stat-value { font-size: 1.4rem; }

    .pp-dragged-mark { width: 56px; height: 56px; font-size: 1.8rem; }

    .pp-header-center { display: none; }
  }

  @media (max-width: 380px) {
    .pp-mark-btn { width: 48px; height: 48px; }
    .pp-mark-symbol { font-size: 1.3rem; }
    .pp-mark-label { display: none; }
    .pp-toolkit { height: 80px; }
  }
`;
