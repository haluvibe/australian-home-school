"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// ── Types ──────────────────────────────────────────────────────────────

type TimePeriod = 'morning' | 'afternoon' | 'evening' | 'night';
type GameScreen = 'intro' | 'playing' | 'complete';
type QuestionType = 'match' | 'sequence' | 'before-after' | 'clock-read';

interface Activity {
  id: number;
  emoji: string;
  label: string;
  correctPeriod: TimePeriod;
  hour: number; // representative hour (0-23) for clock face
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
  type: 'sparkle' | 'firework' | 'star' | 'smoke';
}

interface Star {
  x: number;
  y: number;
  size: number;
  twinkleOffset: number;
  twinkleSpeed: number;
}

interface WindowLight {
  x: number;
  y: number;
  w: number;
  h: number;
  lit: boolean;
  flickerOffset: number;
}

interface LevelConfig {
  activities: Activity[];
  periods: TimePeriod[];
  questionType: QuestionType;
  timeLimit: number; // 0 = no limit
}

interface CorrectEffect {
  id: number;
  x: number;
  y: number;
  period: TimePeriod;
}

interface WrongEffect {
  id: number;
}

// ── Constants ──────────────────────────────────────────────────────────

const PERIOD_LABELS: Record<TimePeriod, string> = {
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
  night: 'Night',
};

const PERIOD_EMOJIS: Record<TimePeriod, string> = {
  morning: '🌅',
  afternoon: '☀️',
  evening: '🌇',
  night: '🌙',
};

const PERIOD_HOURS: Record<TimePeriod, number> = {
  morning: 8,
  afternoon: 13,
  evening: 18,
  night: 21,
};

const ALL_ACTIVITIES: Activity[] = [
  // Morning activities
  { id: 1, emoji: '🪥', label: 'Brushing teeth', correctPeriod: 'morning', hour: 7 },
  { id: 2, emoji: '🥣', label: 'Eating breakfast', correctPeriod: 'morning', hour: 7 },
  { id: 3, emoji: '🌞', label: 'Sunrise', correctPeriod: 'morning', hour: 6 },
  { id: 4, emoji: '🎒', label: 'Going to school', correctPeriod: 'morning', hour: 8 },
  { id: 5, emoji: '🐓', label: 'Rooster crows', correctPeriod: 'morning', hour: 6 },
  // Afternoon activities
  { id: 6, emoji: '🍱', label: 'Eating lunch', correctPeriod: 'afternoon', hour: 12 },
  { id: 7, emoji: '⚽', label: 'Playing outside', correctPeriod: 'afternoon', hour: 15 },
  { id: 8, emoji: '📚', label: 'Reading at school', correctPeriod: 'afternoon', hour: 13 },
  { id: 9, emoji: '🎨', label: 'Art class', correctPeriod: 'afternoon', hour: 14 },
  { id: 10, emoji: '🏊', label: 'Swimming', correctPeriod: 'afternoon', hour: 15 },
  // Evening activities
  { id: 11, emoji: '🍝', label: 'Eating dinner', correctPeriod: 'evening', hour: 18 },
  { id: 12, emoji: '🛁', label: 'Bath time', correctPeriod: 'evening', hour: 19 },
  { id: 13, emoji: '🌇', label: 'Watching sunset', correctPeriod: 'evening', hour: 18 },
  { id: 14, emoji: '📺', label: 'Watching TV', correctPeriod: 'evening', hour: 19 },
  { id: 15, emoji: '🧹', label: 'Tidying up', correctPeriod: 'evening', hour: 18 },
  // Night activities
  { id: 16, emoji: '😴', label: 'Sleeping', correctPeriod: 'night', hour: 21 },
  { id: 17, emoji: '📖', label: 'Bedtime story', correctPeriod: 'night', hour: 20 },
  { id: 18, emoji: '🧸', label: 'Cuddling teddy', correctPeriod: 'night', hour: 21 },
  { id: 19, emoji: '🌙', label: 'Moon is out', correctPeriod: 'night', hour: 21 },
  { id: 20, emoji: '💤', label: 'Dreaming', correctPeriod: 'night', hour: 22 },
];

const SEQUENCE_ACTIVITIES: Activity[][] = [
  [
    { id: 101, emoji: '🌞', label: 'Wake up', correctPeriod: 'morning', hour: 7 },
    { id: 102, emoji: '🥣', label: 'Eat breakfast', correctPeriod: 'morning', hour: 7 },
    { id: 103, emoji: '🎒', label: 'Go to school', correctPeriod: 'morning', hour: 8 },
    { id: 104, emoji: '🍱', label: 'Eat lunch', correctPeriod: 'afternoon', hour: 12 },
  ],
  [
    { id: 105, emoji: '⚽', label: 'Play outside', correctPeriod: 'afternoon', hour: 15 },
    { id: 106, emoji: '🍝', label: 'Eat dinner', correctPeriod: 'evening', hour: 18 },
    { id: 107, emoji: '🛁', label: 'Bath time', correctPeriod: 'evening', hour: 19 },
    { id: 108, emoji: '😴', label: 'Go to sleep', correctPeriod: 'night', hour: 21 },
  ],
  [
    { id: 109, emoji: '🐓', label: 'Rooster crows', correctPeriod: 'morning', hour: 6 },
    { id: 110, emoji: '🪥', label: 'Brush teeth', correctPeriod: 'morning', hour: 7 },
    { id: 111, emoji: '🎨', label: 'Art class', correctPeriod: 'afternoon', hour: 14 },
    { id: 112, emoji: '📖', label: 'Bedtime story', correctPeriod: 'night', hour: 20 },
  ],
];

const NUM_STARS = 60;
const NUM_CASTLE_WINDOWS = 6;

let particleIdCounter = 0;
const getParticleId = (): number => ++particleIdCounter;

// ── Helper functions ───────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = shuffleArray(arr);
  return shuffled.slice(0, count);
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function getSkyColors(period: TimePeriod, t: number): { top: string; mid: string; bot: string } {
  const skies: Record<TimePeriod, { top: string; mid: string; bot: string }> = {
    morning: { top: '#87CEEB', mid: '#FFB347', bot: '#FFDAB9' },
    afternoon: { top: '#1E90FF', mid: '#87CEEB', bot: '#E0F0FF' },
    evening: { top: '#2D1B69', mid: '#FF6B35', bot: '#FFB347' },
    night: { top: '#0B0B2B', mid: '#121244', bot: '#1A1A5E' },
  };
  void t;
  return skies[period];
}

function getClockHour(period: TimePeriod): number {
  return PERIOD_HOURS[period];
}

function generateLevelConfig(level: number): LevelConfig {
  if (level <= 3) {
    // Easy: obvious activities, 2 periods
    const periods: TimePeriod[] = level === 1
      ? ['morning', 'night']
      : level === 2
        ? ['morning', 'afternoon']
        : ['morning', 'night'];
    const pool = ALL_ACTIVITIES.filter(a => periods.includes(a.correctPeriod));
    const activities = pickRandom(pool, Math.min(4, pool.length));
    return { activities: shuffleArray(activities), periods, questionType: 'match', timeLimit: 0 };
  }
  if (level <= 6) {
    // Medium: 4 periods, more activities
    const periods: TimePeriod[] = ['morning', 'afternoon', 'evening', 'night'];
    const count = level <= 4 ? 4 : 6;
    const activities = pickRandom(ALL_ACTIVITIES, count);
    if (level === 6) {
      const seqIdx = Math.floor(Math.random() * SEQUENCE_ACTIVITIES.length);
      return {
        activities: shuffleArray(SEQUENCE_ACTIVITIES[seqIdx]),
        periods,
        questionType: 'sequence',
        timeLimit: 0,
      };
    }
    return { activities: shuffleArray(activities), periods, questionType: 'match', timeLimit: 0 };
  }
  // Hard: before/after questions, clock reading, timed
  const periods: TimePeriod[] = ['morning', 'afternoon', 'evening', 'night'];
  if (level % 2 === 1) {
    // Before/after questions
    const seqIdx = Math.floor(Math.random() * SEQUENCE_ACTIVITIES.length);
    return {
      activities: SEQUENCE_ACTIVITIES[seqIdx],
      periods,
      questionType: 'before-after',
      timeLimit: 30 + level * 5,
    };
  }
  // Clock reading questions
  const activities = pickRandom(ALL_ACTIVITIES, 5);
  return {
    activities: shuffleArray(activities),
    periods,
    questionType: 'clock-read',
    timeLimit: 30 + level * 5,
  };
}

// ── Component ──────────────────────────────────────────────────────────

interface ClockworkCastleProps {
  onExit?: () => void;
}

export default function ClockworkCastle({ onExit }: ClockworkCastleProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [currentPeriod, setCurrentPeriod] = useState<TimePeriod>('morning');
  const [targetPeriod, setTargetPeriod] = useState<TimePeriod>('morning');
  const [levelConfig, setLevelConfig] = useState<LevelConfig | null>(null);
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [correctEffect, setCorrectEffect] = useState<CorrectEffect | null>(null);
  const [wrongEffect, setWrongEffect] = useState<WrongEffect | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 40,
      size: 1 + Math.random() * 2.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.5 + Math.random() * 2,
    }))
  );
  const [castleWindows] = useState<WindowLight[]>(() =>
    Array.from({ length: NUM_CASTLE_WINDOWS }, (_, i) => ({
      x: 25 + (i % 3) * 18,
      y: 40 + Math.floor(i / 3) * 16,
      w: 8,
      h: 10,
      lit: false,
      flickerOffset: Math.random() * Math.PI * 2,
    }))
  );
  const [litWindows, setLitWindows] = useState<boolean[]>(new Array(NUM_CASTLE_WINDOWS).fill(false));
  const [clockAngle, setClockAngle] = useState(0);
  const [clockTargetAngle, setClockTargetAngle] = useState(0);
  const [dayProgress, setDayProgress] = useState(0);
  const [wizardMood, setWizardMood] = useState<'idle' | 'happy' | 'sad'>('idle');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sequenceOrder, setSequenceOrder] = useState<number[]>([]);
  const [beforeAfterQuestion, setBeforeAfterQuestion] = useState<{
    type: 'before' | 'after';
    referenceActivity: Activity;
    options: Activity[];
    correctId: number;
  } | null>(null);
  const [clockReadQuestion, setClockReadQuestion] = useState<{
    hour: number;
    options: string[];
    correctOption: string;
  } | null>(null);
  const [shakeIntensity, setShakeIntensity] = useState(0);
  const [introAnimPhase, setIntroAnimPhase] = useState(0);

  const animRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Animation loop ─────────────────────────────────────────────────

  useEffect(() => {
    const animate = (timestamp: number) => {
      timeRef.current = timestamp / 1000;

      // Smoothly rotate clock toward target
      setClockAngle(prev => {
        const diff = clockTargetAngle - prev;
        if (Math.abs(diff) < 0.5) return clockTargetAngle;
        return prev + diff * 0.05;
      });

      // Update particles
      setParticles(prev => {
        const updated = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.type === 'smoke' ? p.vy - 0.02 : p.vy + 0.03,
            life: p.life - 1,
          }))
          .filter(p => p.life > 0);
        return updated;
      });

      // Decay shake
      setShakeIntensity(prev => prev * 0.9);

      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [clockTargetAngle]);

  // ── Intro animation ────────────────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'intro') return;
    const t1 = setTimeout(() => setIntroAnimPhase(1), 300);
    const t2 = setTimeout(() => setIntroAnimPhase(2), 800);
    const t3 = setTimeout(() => setIntroAnimPhase(3), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [gameScreen]);

  // ── Timer ──────────────────────────────────────────────────────────

  useEffect(() => {
    if (gameScreen !== 'playing' || !levelConfig || levelConfig.timeLimit === 0) return;
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setGameScreen('complete');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [gameScreen, levelConfig]);

  // ── Spawn particles ────────────────────────────────────────────────

  const spawnFireworks = useCallback((cx: number, cy: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      const angle = (Math.PI * 2 * i) / 20;
      const speed = 1.5 + Math.random() * 2.5;
      newParticles.push({
        id: getParticleId(),
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 40 + Math.random() * 20,
        maxLife: 60,
        size: 2 + Math.random() * 3,
        hue: Math.random() * 360,
        type: 'firework',
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnSparkles = useCallback((cx: number, cy: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: getParticleId(),
        x: cx + (Math.random() - 0.5) * 60,
        y: cy + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 2,
        life: 30 + Math.random() * 20,
        maxLife: 50,
        size: 2 + Math.random() * 2,
        hue: 45 + Math.random() * 30,
        type: 'sparkle',
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnSmoke = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: getParticleId(),
        x: 62 + (Math.random() - 0.5) * 4,
        y: 20 + Math.random() * 5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.3 - Math.random() * 0.5,
        life: 50 + Math.random() * 30,
        maxLife: 80,
        size: 3 + Math.random() * 4,
        hue: 0,
        type: 'smoke',
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Periodic chimney smoke
  useEffect(() => {
    if (gameScreen !== 'playing') return;
    const interval = setInterval(spawnSmoke, 2000);
    return () => clearInterval(interval);
  }, [gameScreen, spawnSmoke]);

  // ── Level setup ────────────────────────────────────────────────────

  const initLevel = useCallback((lvl: number) => {
    const config = generateLevelConfig(lvl);
    setLevelConfig(config);
    setCurrentActivityIndex(0);
    setSequenceOrder([]);
    setBeforeAfterQuestion(null);
    setClockReadQuestion(null);
    setCorrectEffect(null);
    setWrongEffect(null);
    setWizardMood('idle');
    setLitWindows(new Array(NUM_CASTLE_WINDOWS).fill(false));
    setDayProgress(0);
    setParticles([]);

    if (config.timeLimit > 0) {
      setTimeRemaining(config.timeLimit);
    }

    // Set initial sky
    if (config.activities.length > 0) {
      const firstPeriod = config.questionType === 'sequence'
        ? 'morning'
        : config.activities[0].correctPeriod;
      setCurrentPeriod(firstPeriod);
      setTargetPeriod(firstPeriod);
      setClockTargetAngle(getClockHour(firstPeriod) * 30);
      setClockAngle(getClockHour(firstPeriod) * 30);
    }

    // Setup question-type specifics
    if (config.questionType === 'before-after') {
      setupBeforeAfterQuestion(config);
    } else if (config.questionType === 'clock-read') {
      setupClockReadQuestion(config, 0);
    }
  }, []);

  const setupBeforeAfterQuestion = (config: LevelConfig) => {
    const sorted = [...config.activities].sort((a, b) => a.hour - b.hour);
    const refIdx = 1 + Math.floor(Math.random() * (sorted.length - 2));
    const ref = sorted[refIdx];
    const type: 'before' | 'after' = Math.random() > 0.5 ? 'before' : 'after';
    const correctIdx = type === 'before' ? refIdx - 1 : refIdx + 1;
    const correct = sorted[correctIdx];
    const wrongOptions = shuffleArray(
      config.activities.filter(a => a.id !== correct.id && a.id !== ref.id)
    ).slice(0, 2);
    const options = shuffleArray([correct, ...wrongOptions]);

    setBeforeAfterQuestion({
      type,
      referenceActivity: ref,
      options,
      correctId: correct.id,
    });
    setCurrentPeriod(ref.correctPeriod);
    setTargetPeriod(ref.correctPeriod);
    setClockTargetAngle(ref.hour * 30);
  };

  const setupClockReadQuestion = (config: LevelConfig, index: number) => {
    if (index >= config.activities.length) return;
    const activity = config.activities[index];
    const hour = activity.hour > 12 ? activity.hour - 12 : activity.hour;
    const correctStr = `${hour} o'clock`;
    const wrongHours = [
      ((hour + 2) % 12) || 12,
      ((hour + 5) % 12) || 12,
      ((hour + 8) % 12) || 12,
    ];
    const options = shuffleArray([
      correctStr,
      `${wrongHours[0]} o'clock`,
      `${wrongHours[1]} o'clock`,
    ]);
    setClockReadQuestion({ hour: activity.hour, options, correctOption: correctStr });
    setCurrentPeriod(activity.correctPeriod);
    setTargetPeriod(activity.correctPeriod);
    setClockTargetAngle(activity.hour * 30);
  };

  // ── Game start ─────────────────────────────────────────────────────

  const startGame = () => {
    setGameScreen('playing');
    setLevel(1);
    setScore(0);
    setCombo(0);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameScreen('playing');
    initLevel(newLevel);
  };

  // ── Answer handling ────────────────────────────────────────────────

  const advanceToNextActivity = useCallback(() => {
    if (!levelConfig) return;
    const nextIndex = currentActivityIndex + 1;

    if (nextIndex >= levelConfig.activities.length) {
      // Level complete
      setTimeout(() => setGameScreen('complete'), 800);
      return;
    }

    setCurrentActivityIndex(nextIndex);
    const nextActivity = levelConfig.activities[nextIndex];
    const nextPeriod = nextActivity.correctPeriod;

    // Transition sky
    setTargetPeriod(nextPeriod);
    setCurrentPeriod(nextPeriod);
    setClockTargetAngle(nextActivity.hour * 30);

    // Update day progress
    setDayProgress(nextIndex / levelConfig.activities.length);

    if (levelConfig.questionType === 'clock-read') {
      setupClockReadQuestion(levelConfig, nextIndex);
    }
  }, [levelConfig, currentActivityIndex]);

  const handlePeriodSelect = useCallback((selectedPeriod: TimePeriod) => {
    if (!levelConfig || levelConfig.questionType !== 'match') return;
    const activity = levelConfig.activities[currentActivityIndex];
    if (!activity) return;

    if (selectedPeriod === activity.correctPeriod) {
      handleCorrect(selectedPeriod);
    } else {
      handleWrong();
    }
  }, [levelConfig, currentActivityIndex]);

  const handleSequenceSelect = useCallback((activityId: number) => {
    if (!levelConfig || levelConfig.questionType !== 'sequence') return;

    // The next activity in sorted order
    const sorted = [...levelConfig.activities].sort((a, b) => a.hour - b.hour);
    const nextIdx = sequenceOrder.length;
    if (nextIdx >= sorted.length) return;

    if (sorted[nextIdx].id === activityId) {
      const newOrder = [...sequenceOrder, activityId];
      setSequenceOrder(newOrder);
      const act = sorted[nextIdx];
      setCurrentPeriod(act.correctPeriod);
      setTargetPeriod(act.correctPeriod);
      setClockTargetAngle(act.hour * 30);
      setDayProgress(newOrder.length / sorted.length);

      handleCorrect(act.correctPeriod);

      if (newOrder.length >= sorted.length) {
        setTimeout(() => setGameScreen('complete'), 800);
      }
    } else {
      handleWrong();
    }
  }, [levelConfig, sequenceOrder]);

  const handleBeforeAfterSelect = useCallback((activityId: number) => {
    if (!beforeAfterQuestion) return;
    if (activityId === beforeAfterQuestion.correctId) {
      handleCorrect(beforeAfterQuestion.referenceActivity.correctPeriod);
      // Generate new question or finish
      setTimeout(() => {
        if (levelConfig) {
          setDayProgress(prev => Math.min(1, prev + 0.25));
          if (dayProgress >= 0.75) {
            setGameScreen('complete');
          } else {
            setupBeforeAfterQuestion(levelConfig);
          }
        }
      }, 600);
    } else {
      handleWrong();
    }
  }, [beforeAfterQuestion, levelConfig, dayProgress]);

  const handleClockReadSelect = useCallback((option: string) => {
    if (!clockReadQuestion) return;
    if (option === clockReadQuestion.correctOption) {
      handleCorrect(currentPeriod);
      setTimeout(() => advanceToNextActivity(), 500);
    } else {
      handleWrong();
    }
  }, [clockReadQuestion, currentPeriod, advanceToNextActivity]);

  const handleCorrect = useCallback((period: TimePeriod) => {
    setScore(prev => prev + 100 + combo * 25);
    setCombo(prev => prev + 1);
    setWizardMood('happy');
    setTimeout(() => setWizardMood('idle'), 1200);

    // Light up a window
    setLitWindows(prev => {
      const next = [...prev];
      const unlitIdx = next.findIndex(v => !v);
      if (unlitIdx !== -1) next[unlitIdx] = true;
      return next;
    });

    // Effects
    setCorrectEffect({ id: Date.now(), x: 50, y: 50, period });
    setTimeout(() => setCorrectEffect(null), 800);

    spawnFireworks(50, 30);
    spawnSparkles(50, 50);

    if (levelConfig?.questionType === 'match') {
      setTimeout(() => advanceToNextActivity(), 500);
    }
  }, [combo, spawnFireworks, spawnSparkles, levelConfig, advanceToNextActivity]);

  const handleWrong = useCallback(() => {
    setCombo(0);
    setWizardMood('sad');
    setTimeout(() => setWizardMood('idle'), 1200);
    setWrongEffect({ id: Date.now() });
    setTimeout(() => setWrongEffect(null), 600);
    setShakeIntensity(5);
    // Spin clock backward briefly
    setClockAngle(prev => prev - 60);
  }, []);

  // ── Derived state ──────────────────────────────────────────────────

  const skyColors = getSkyColors(currentPeriod, timeRef.current);
  const isNight = currentPeriod === 'night';
  const isEvening = currentPeriod === 'evening';
  const showStars = isNight || isEvening;
  const currentActivity = levelConfig?.activities[currentActivityIndex] ?? null;

  // ── Render: Intro ──────────────────────────────────────────────────

  if (gameScreen === 'intro') {
    return (
      <div className="clockwork-castle">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-sky">
            {stars.map((star, i) => (
              <div
                key={i}
                className="intro-star"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                  animationDelay: `${star.twinkleOffset}s`,
                  animationDuration: `${1 + star.twinkleSpeed}s`,
                  opacity: introAnimPhase >= 1 ? 1 : 0,
                  transition: `opacity ${0.5 + Math.random() * 1}s ease`,
                }}
              />
            ))}
          </div>

          <div className="intro-castle-silhouette" style={{
            opacity: introAnimPhase >= 2 ? 1 : 0,
            transform: introAnimPhase >= 2 ? 'translateY(0)' : 'translateY(30px)',
          }}>
            {/* Castle SVG silhouette */}
            <svg viewBox="0 0 400 200" className="castle-svg-intro">
              {/* Main tower */}
              <rect x="160" y="40" width="80" height="160" fill="#1a1a3e" />
              {/* Tower top */}
              <polygon points="155,40 200,5 245,40" fill="#1a1a3e" />
              {/* Left tower */}
              <rect x="100" y="80" width="60" height="120" fill="#15153a" />
              <polygon points="95,80 130,50 165,80" fill="#15153a" />
              {/* Right tower */}
              <rect x="240" y="80" width="60" height="120" fill="#15153a" />
              <polygon points="235,80 270,50 305,80" fill="#15153a" />
              {/* Walls */}
              <rect x="60" y="120" width="40" height="80" fill="#121236" />
              <rect x="300" y="120" width="40" height="80" fill="#121236" />
              {/* Battlements left */}
              <rect x="55" y="112" width="12" height="16" fill="#121236" />
              <rect x="73" y="112" width="12" height="16" fill="#121236" />
              <rect x="91" y="112" width="12" height="16" fill="#121236" />
              {/* Battlements right */}
              <rect x="297" y="112" width="12" height="16" fill="#121236" />
              <rect x="315" y="112" width="12" height="16" fill="#121236" />
              <rect x="333" y="112" width="12" height="16" fill="#121236" />
              {/* Windows (glowing) */}
              <rect x="178" y="70" width="16" height="20" rx="8" fill="#FFD700" opacity="0.8">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </rect>
              <rect x="206" y="70" width="16" height="20" rx="8" fill="#FFD700" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.5s" repeatCount="indefinite" />
              </rect>
              <rect x="115" y="100" width="14" height="18" rx="7" fill="#FFD700" opacity="0.6">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
              </rect>
              <rect x="255" y="100" width="14" height="18" rx="7" fill="#FFD700" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.8s" repeatCount="indefinite" />
              </rect>
              {/* Door */}
              <rect x="182" y="155" width="36" height="45" rx="18" fill="#0D0D2A" />
              {/* Clock face on main tower */}
              <circle cx="200" cy="30" r="14" fill="#F5F5DC" stroke="#B8860B" strokeWidth="2" />
              {/* Clock hands */}
              <line x1="200" y1="30" x2="200" y2="20" stroke="#333" strokeWidth="2" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 30" to="360 200 30" dur="8s" repeatCount="indefinite" />
              </line>
              <line x1="200" y1="30" x2="208" y2="30" stroke="#333" strokeWidth="1.5" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 200 30" to="360 200 30" dur="60s" repeatCount="indefinite" />
              </line>
              {/* Flag */}
              <line x1="200" y1="5" x2="200" y2="-10" stroke="#888" strokeWidth="1.5" />
              <polygon points="200,-10 220,-5 200,0" fill="#C41E3A">
                <animate attributeName="points" values="200,-10 220,-5 200,0;200,-10 218,-6 200,-1;200,-10 220,-5 200,0" dur="1.5s" repeatCount="indefinite" />
              </polygon>
            </svg>
          </div>

          <div className="intro-content" style={{
            opacity: introAnimPhase >= 3 ? 1 : 0,
            transform: introAnimPhase >= 3 ? 'translateY(0)' : 'translateY(20px)',
          }}>
            <div className="intro-logo">
              <span className="intro-clock-emoji">🏰</span>
              <h1>Clockwork Castle</h1>
              <span className="intro-clock-emoji">🕐</span>
            </div>
            <p className="intro-tagline">Help the castle characters get through their day!</p>

            <div className="intro-instructions">
              <h3>How to Play</h3>
              <div className="intro-instruction">
                <div className="intro-instruction-visual">
                  <span className="intro-activity-preview">🥣</span>
                  <span className="intro-arrow">→</span>
                  <span className="intro-period-badge morning-badge">Morning 🌅</span>
                </div>
                <p>Match each activity to the <strong>right time of day</strong></p>
              </div>
              <div className="intro-instruction">
                <div className="intro-instruction-visual">
                  <span className="intro-activity-preview">🏰</span>
                  <span className="intro-arrow">→</span>
                  <span className="intro-period-badge night-badge">🌙</span>
                </div>
                <p>Watch the castle <strong>change</strong> from day to night</p>
              </div>
              <div className="intro-instruction">
                <div className="intro-instruction-visual">
                  <span className="intro-activity-preview">🕐</span>
                  <span className="intro-arrow">→</span>
                  <span className="intro-period-badge golden-badge">⭐ +100</span>
                </div>
                <p>Earn <strong>points</strong> and build <strong>combos</strong>!</p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🏰</span>
              Begin the Adventure
              <span className="btn-icon">✨</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Complete ───────────────────────────────────────────────

  if (gameScreen === 'complete') {
    return (
      <div className="clockwork-castle">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg-sky" />
          <div className="complete-fireworks">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="complete-burst" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 40}%`,
                animationDelay: `${i * 0.3}s`,
                '--burst-hue': Math.random() * 360,
              } as React.CSSProperties} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="complete-castle-icon">🏰</div>
            <div className="complete-stats">
              <div className="complete-stat">
                <span className="stat-value">{score}</span>
                <span className="stat-label">Score</span>
              </div>
              <div className="complete-stat">
                <span className="stat-value">{combo}</span>
                <span className="stat-label">Best Combo</span>
              </div>
              <div className="complete-stat">
                <span className="stat-value">{litWindows.filter(Boolean).length}</span>
                <span className="stat-label">Windows Lit</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>
                Level {level + 1} →
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Playing ────────────────────────────────────────────────

  return (
    <div className="clockwork-castle" ref={containerRef}>
      <style>{styles}</style>
      <div
        className={`game-scene ${wrongEffect ? 'scene-shake' : ''}`}
        style={{
          '--sky-top': skyColors.top,
          '--sky-mid': skyColors.mid,
          '--sky-bot': skyColors.bot,
          '--shake-x': `${(Math.random() - 0.5) * shakeIntensity}px`,
          '--shake-y': `${(Math.random() - 0.5) * shakeIntensity}px`,
        } as React.CSSProperties}
      >
        {/* Sky background */}
        <div className="sky-layer" />

        {/* Sun / Moon */}
        {(currentPeriod === 'morning' || currentPeriod === 'afternoon') && (
          <div className={`celestial-body sun ${currentPeriod === 'morning' ? 'sun-low' : 'sun-high'}`}>
            <div className="sun-glow" />
            <div className="sun-core" />
          </div>
        )}
        {isNight && (
          <div className="celestial-body moon">
            <div className="moon-glow" />
            <div className="moon-core" />
            <div className="moon-crater c1" />
            <div className="moon-crater c2" />
            <div className="moon-crater c3" />
          </div>
        )}
        {isEvening && (
          <div className="celestial-body sun sun-setting">
            <div className="sun-glow sunset-glow" />
            <div className="sun-core sunset-core" />
          </div>
        )}

        {/* Stars */}
        {showStars && stars.map((star, i) => (
          <div
            key={i}
            className="game-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.twinkleOffset}s`,
              animationDuration: `${1 + star.twinkleSpeed}s`,
            }}
          />
        ))}

        {/* Clouds */}
        {!isNight && (
          <>
            <div className="cloud cloud-1" />
            <div className="cloud cloud-2" />
            <div className="cloud cloud-3" />
          </>
        )}

        {/* Castle SVG */}
        <svg viewBox="0 0 400 250" className="castle-svg">
          {/* Ground / hill */}
          <ellipse cx="200" cy="250" rx="250" ry="60" fill={isNight ? '#0A1628' : isEvening ? '#2D4A28' : '#4A7A3F'} />
          <ellipse cx="200" cy="250" rx="220" ry="50" fill={isNight ? '#0D1E33' : isEvening ? '#3A5E32' : '#5C9A4E'} />

          {/* Castle body */}
          <rect x="140" y="90" width="120" height="110" fill={isNight ? '#1A1A3E' : '#8B7355'} />
          {/* Main tower */}
          <rect x="170" y="30" width="60" height="170" fill={isNight ? '#1E1E48' : '#9B8365'} />
          <polygon points="165,30 200,0 235,30" fill={isNight ? '#22224E' : '#A89070'} />
          {/* Left tower */}
          <rect x="100" y="70" width="50" height="130" fill={isNight ? '#161640' : '#7D6548'} />
          <polygon points="95,70 125,40 155,70" fill={isNight ? '#1A1A46' : '#8B7355'} />
          {/* Right tower */}
          <rect x="250" y="70" width="50" height="130" fill={isNight ? '#161640' : '#7D6548'} />
          <polygon points="245,70 275,40 305,70" fill={isNight ? '#1A1A46' : '#8B7355'} />

          {/* Battlements */}
          {[0, 1, 2, 3].map(i => (
            <rect key={`bl${i}`} x={95 + i * 16} y={62} width={10} height={14} fill={isNight ? '#1A1A46' : '#8B7355'} />
          ))}
          {[0, 1, 2, 3].map(i => (
            <rect key={`br${i}`} x={245 + i * 16} y={62} width={10} height={14} fill={isNight ? '#1A1A46' : '#8B7355'} />
          ))}

          {/* Castle windows */}
          {castleWindows.map((win, i) => {
            const isLit = litWindows[i] || isNight;
            const baseX = i < 3
              ? 112 + (i % 3) * 18
              : i < 5
                ? 180 + ((i - 3) % 2) * 28
                : 260 + ((i - 5) % 2) * 18;
            const baseY = i < 3 ? 100 : i < 5 ? 60 : 100;
            return (
              <g key={`win${i}`}>
                <rect
                  x={baseX}
                  y={baseY}
                  width={12}
                  height={16}
                  rx={6}
                  fill={isLit ? '#FFD700' : (isNight ? '#0D0D2A' : '#3D2B15')}
                  opacity={isLit ? 0.9 : 1}
                >
                  {isLit && (
                    <animate
                      attributeName="opacity"
                      values="0.7;1;0.7"
                      dur={`${2 + win.flickerOffset}s`}
                      repeatCount="indefinite"
                    />
                  )}
                </rect>
                {isLit && (
                  <rect
                    x={baseX - 3}
                    y={baseY - 3}
                    width={18}
                    height={22}
                    rx={9}
                    fill="#FFD700"
                    opacity={0.2}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur={`${2 + win.flickerOffset}s`}
                      repeatCount="indefinite"
                    />
                  </rect>
                )}
              </g>
            );
          })}

          {/* Door */}
          <rect x="185" y="160" width="30" height="40" rx="15" fill={isNight ? '#0D0D2A' : '#3D2B15'} />
          <circle cx="208" cy="180" r="2" fill="#B8860B" />

          {/* Clock face on main tower */}
          <circle cx="200" cy="18" r="16" fill="#F5F5DC" stroke="#B8860B" strokeWidth="2" />
          {/* Clock numbers */}
          {[12, 3, 6, 9].map(n => {
            const angle = ((n % 12) / 12) * 360 - 90;
            const rad = (angle * Math.PI) / 180;
            const cx = 200 + Math.cos(rad) * 11;
            const cy = 18 + Math.sin(rad) * 11;
            return (
              <text
                key={n}
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#333"
                fontSize="5"
                fontWeight="bold"
                fontFamily="serif"
              >
                {n}
              </text>
            );
          })}
          {/* Hour hand */}
          <line
            x1="200"
            y1="18"
            x2={200 + Math.cos(((clockAngle - 90) * Math.PI) / 180) * 9}
            y2={18 + Math.sin(((clockAngle - 90) * Math.PI) / 180) * 9}
            stroke="#333"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Minute hand */}
          <line
            x1="200"
            y1="18"
            x2={200 + Math.cos(((clockAngle * 12 - 90) * Math.PI) / 180) * 12}
            y2={18 + Math.sin(((clockAngle * 12 - 90) * Math.PI) / 180) * 12}
            stroke="#555"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle cx="200" cy="18" r="1.5" fill="#B8860B" />

          {/* Chimney */}
          <rect x="245" y="25" width="12" height="20" fill={isNight ? '#1A1A3E' : '#6B4226'} />

          {/* Flag */}
          <line x1="200" y1="0" x2="200" y2="-15" stroke="#666" strokeWidth="1.5" />
          <polygon points="200,-15 218,-10 200,-5" fill="#C41E3A">
            <animate attributeName="points" values="200,-15 218,-10 200,-5;200,-15 216,-11 200,-6;200,-15 218,-10 200,-5" dur="1.5s" repeatCount="indefinite" />
          </polygon>

          {/* Wizard character at door */}
          <g transform="translate(170, 168)">
            {/* Body */}
            <rect x="0" y="14" width="10" height="16" rx="3" fill="#6A5ACD" />
            {/* Head */}
            <circle cx="5" cy="10" r="5" fill="#FFDAB9" />
            {/* Hat */}
            <polygon points="-2,7 5,-5 12,7" fill="#6A5ACD" />
            <circle cx="5" cy="-5" r="1.5" fill="#FFD700" />
            {/* Face */}
            {wizardMood === 'happy' ? (
              <>
                <circle cx="3" cy="9" r="0.8" fill="#333" />
                <circle cx="7" cy="9" r="0.8" fill="#333" />
                <path d="M 2.5,12 Q 5,14 7.5,12" stroke="#333" strokeWidth="0.6" fill="none" />
              </>
            ) : wizardMood === 'sad' ? (
              <>
                <circle cx="3" cy="9" r="0.8" fill="#333" />
                <circle cx="7" cy="9" r="0.8" fill="#333" />
                <path d="M 2.5,13 Q 5,11 7.5,13" stroke="#333" strokeWidth="0.6" fill="none" />
              </>
            ) : (
              <>
                <circle cx="3" cy="9" r="0.8" fill="#333" />
                <circle cx="7" cy="9" r="0.8" fill="#333" />
                <line x1="3" y1="12" x2="7" y2="12" stroke="#333" strokeWidth="0.6" />
              </>
            )}
            {/* Wand */}
            <line x1="10" y1="20" x2="16" y2="14" stroke="#8B4513" strokeWidth="1" />
            {wizardMood === 'happy' && (
              <circle cx="16" cy="14" r="2" fill="#FFD700" opacity="0.8">
                <animate attributeName="r" values="2;3;2" dur="0.5s" repeatCount="3" />
                <animate attributeName="opacity" values="0.8;1;0.8" dur="0.5s" repeatCount="3" />
              </circle>
            )}
          </g>
        </svg>

        {/* Particles overlay */}
        <div className="particles-layer">
          {particles.map(p => (
            <div
              key={p.id}
              className={`particle particle-${p.type}`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                opacity: p.life / p.maxLife,
                '--p-hue': p.hue,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Correct effect overlay */}
        {correctEffect && (
          <div className="correct-overlay" key={correctEffect.id}>
            <div className="correct-burst" />
            <div className="correct-text">Correct!</div>
          </div>
        )}

        {/* Wrong effect overlay */}
        {wrongEffect && (
          <div className="wrong-overlay" key={wrongEffect.id}>
            <div className="wrong-text">Try again!</div>
          </div>
        )}

        {/* ── HUD ── */}
        <div className="hud">
          <div className="hud-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="hud-center">
            {levelConfig && levelConfig.timeLimit > 0 && (
              <div className={`timer-badge ${timeRemaining <= 10 ? 'timer-urgent' : ''}`}>
                <span className="timer-icon">⏱️</span>
                <span>{timeRemaining}s</span>
              </div>
            )}
            {combo > 1 && (
              <div className="combo-badge">
                <span className="combo-fire">🔥</span>
                <span>x{combo}</span>
              </div>
            )}
          </div>
          <div className="hud-right">
            <div className="score-badge">
              <span className="score-star">⭐</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* ── Day progress bar ── */}
        <div className="day-progress-bar">
          <div className="day-progress-track">
            <div className="day-progress-fill" style={{ width: `${dayProgress * 100}%` }} />
            <div className="day-progress-marker" style={{ left: `${dayProgress * 100}%` }}>
              {PERIOD_EMOJIS[currentPeriod]}
            </div>
            {/* Period labels on track */}
            <div className="day-progress-labels">
              <span className="dp-label" style={{ left: '12.5%' }}>🌅</span>
              <span className="dp-label" style={{ left: '37.5%' }}>☀️</span>
              <span className="dp-label" style={{ left: '62.5%' }}>🌇</span>
              <span className="dp-label" style={{ left: '87.5%' }}>🌙</span>
            </div>
          </div>
        </div>

        {/* ── Activity & Controls Area ── */}
        <div className="controls-area">
          {/* Match mode */}
          {levelConfig?.questionType === 'match' && currentActivity && (
            <div className="match-section">
              <div className="activity-card" key={currentActivity.id}>
                <div className="activity-emoji">{currentActivity.emoji}</div>
                <div className="activity-label">{currentActivity.label}</div>
                <div className="activity-question">When does this happen?</div>
              </div>
              <div className="period-buttons">
                {levelConfig.periods.map(period => (
                  <button
                    key={period}
                    className={`period-btn period-btn-${period}`}
                    onClick={() => handlePeriodSelect(period)}
                  >
                    <span className="period-btn-emoji">{PERIOD_EMOJIS[period]}</span>
                    <span className="period-btn-label">{PERIOD_LABELS[period]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sequence mode */}
          {levelConfig?.questionType === 'sequence' && (
            <div className="sequence-section">
              <div className="sequence-prompt">
                <span className="sequence-prompt-icon">🔢</span>
                <span>Tap activities in the right order — earliest first!</span>
              </div>
              <div className="sequence-cards">
                {levelConfig.activities.map(act => {
                  const isPlaced = sequenceOrder.includes(act.id);
                  const orderNum = sequenceOrder.indexOf(act.id) + 1;
                  return (
                    <button
                      key={act.id}
                      className={`seq-card ${isPlaced ? 'seq-placed' : ''}`}
                      onClick={() => !isPlaced && handleSequenceSelect(act.id)}
                      disabled={isPlaced}
                    >
                      {isPlaced && <div className="seq-order">{orderNum}</div>}
                      <span className="seq-emoji">{act.emoji}</span>
                      <span className="seq-label">{act.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Before/After mode */}
          {levelConfig?.questionType === 'before-after' && beforeAfterQuestion && (
            <div className="ba-section">
              <div className="ba-prompt">
                <span>What happens</span>
                <span className="ba-type">{beforeAfterQuestion.type === 'before' ? 'BEFORE' : 'AFTER'}</span>
                <div className="ba-reference">
                  <span className="ba-ref-emoji">{beforeAfterQuestion.referenceActivity.emoji}</span>
                  <span>{beforeAfterQuestion.referenceActivity.label}</span>
                </div>
                <span>?</span>
              </div>
              <div className="ba-options">
                {beforeAfterQuestion.options.map(opt => (
                  <button
                    key={opt.id}
                    className="ba-option"
                    onClick={() => handleBeforeAfterSelect(opt.id)}
                  >
                    <span className="ba-opt-emoji">{opt.emoji}</span>
                    <span className="ba-opt-label">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Clock read mode */}
          {levelConfig?.questionType === 'clock-read' && clockReadQuestion && currentActivity && (
            <div className="clock-read-section">
              <div className="clock-prompt">
                <div className="activity-card small-card">
                  <div className="activity-emoji">{currentActivity.emoji}</div>
                  <div className="activity-label">{currentActivity.label}</div>
                </div>
                <p className="clock-question">What time does the clock show?</p>
              </div>
              <div className="clock-options">
                {clockReadQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    className="clock-option"
                    onClick={() => handleClockReadSelect(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Bottom hints ── */}
        <div className="bottom-bar">
          <div className="hint-text">
            {levelConfig?.questionType === 'match' && (
              <span>🏰 Match the activity to the right time of day</span>
            )}
            {levelConfig?.questionType === 'sequence' && (
              <span>🔢 Tap activities from earliest to latest</span>
            )}
            {levelConfig?.questionType === 'before-after' && (
              <span>🤔 Think about the order of your day</span>
            )}
            {levelConfig?.questionType === 'clock-read' && (
              <span>🕐 Look at the clock on the castle tower</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Styles ─────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .clockwork-castle {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #0B0B2B;
  }

  /* ═══════════════════════════════════════════════════════════
     INTRO SCREEN
     ═══════════════════════════════════════════════════════════ */

  .intro-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0B0B2B 0%, #1A1A4E 40%, #2D1B69 70%, #1A0A3E 100%);
  }

  .intro-sky {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .intro-star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle 2s ease-in-out infinite alternate;
  }

  @keyframes twinkle {
    0% { opacity: 0.2; transform: scale(0.8); }
    100% { opacity: 1; transform: scale(1.2); }
  }

  .intro-castle-silhouette {
    position: absolute;
    bottom: 10%;
    width: 70%;
    max-width: 400px;
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.15));
  }

  .castle-svg-intro {
    width: 100%;
    height: auto;
    overflow: visible;
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 480px;
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .intro-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .intro-logo h1 {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FFD700, #FFB347, #FF6B35, #FFD700);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmerText 3s ease-in-out infinite;
  }

  @keyframes shimmerText {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .intro-clock-emoji {
    font-size: 2.2rem;
    animation: gentleBounce 2.5s ease-in-out infinite;
  }

  .intro-clock-emoji:last-child {
    animation-delay: 0.4s;
  }

  @keyframes gentleBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(5deg); }
  }

  .intro-tagline {
    color: #B8A9D4;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .intro-instructions {
    background: rgba(255, 255, 255, 0.06);
    border: 2px solid rgba(255, 215, 0, 0.15);
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.8rem;
    backdrop-filter: blur(10px);
  }

  .intro-instructions h3 {
    color: #FFD700;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .intro-instruction {
    margin-bottom: 1rem;
  }

  .intro-instruction:last-child {
    margin-bottom: 0;
  }

  .intro-instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
  }

  .intro-activity-preview {
    font-size: 1.8rem;
  }

  .intro-arrow {
    color: #64748b;
    font-size: 1.2rem;
  }

  .intro-period-badge {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 700;
    color: white;
  }

  .morning-badge { background: linear-gradient(135deg, #FF9A56, #FF6B35); }
  .night-badge { background: linear-gradient(135deg, #4A3D8F, #2D1B69); }
  .golden-badge { background: linear-gradient(135deg, #FFD700, #FFA500); color: #333; }

  .intro-instruction p {
    color: #C8BFE0;
    font-size: 0.9rem;
  }

  .start-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #1A0A3E;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
  }

  .start-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(255, 215, 0, 0.45);
  }

  .btn-icon {
    font-size: 1.3rem;
  }

  /* ═══════════════════════════════════════════════════════════
     COMPLETE SCREEN
     ═══════════════════════════════════════════════════════════ */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0B0B2B 0%, #1A1A4E 100%);
  }

  .complete-bg-sky {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.08) 0%, transparent 60%);
  }

  .complete-fireworks {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .complete-burst {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: hsl(var(--burst-hue), 80%, 60%);
    animation: burstAnim 1.5s ease-out infinite;
  }

  @keyframes burstAnim {
    0% {
      transform: scale(0);
      opacity: 1;
      box-shadow: 0 0 20px hsl(var(--burst-hue), 80%, 60%);
    }
    50% {
      transform: scale(8);
      opacity: 0.6;
    }
    100% {
      transform: scale(12);
      opacity: 0;
    }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    color: white;
    margin-bottom: 1rem;
    animation: completePulse 2s ease-in-out infinite;
  }

  @keyframes completePulse {
    0%, 100% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
    50% { text-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
  }

  .complete-castle-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    animation: gentleBounce 2s ease-in-out infinite;
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .complete-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: 900;
    color: #FFD700;
  }

  .stat-label {
    font-size: 0.8rem;
    color: #8B7FC7;
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #1A0A3E;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
  }

  .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(255, 215, 0, 0.45);
  }

  .menu-btn {
    padding: 0.8rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #8B7FC7;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
  }

  /* ═══════════════════════════════════════════════════════════
     GAME SCENE
     ═══════════════════════════════════════════════════════════ */

  .game-scene {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .game-scene.scene-shake {
    animation: sceneShake 0.4s ease-out;
  }

  @keyframes sceneShake {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-4px, 2px); }
    20% { transform: translate(4px, -2px); }
    30% { transform: translate(-3px, 3px); }
    40% { transform: translate(3px, -1px); }
    50% { transform: translate(-2px, 1px); }
    60% { transform: translate(2px, -1px); }
    70% { transform: translate(-1px, 1px); }
    80% { transform: translate(1px, 0); }
  }

  /* Sky */
  .sky-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 50%, var(--sky-bot) 100%);
    transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  /* Celestial bodies */
  .celestial-body {
    position: absolute;
    z-index: 1;
    pointer-events: none;
  }

  .sun {
    right: 15%;
    top: 8%;
  }

  .sun-low {
    right: 12%;
    top: 18%;
  }

  .sun-high {
    right: 20%;
    top: 6%;
  }

  .sun-setting {
    right: 10%;
    top: 25%;
  }

  .sun-glow {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 220, 50, 0.4) 0%, transparent 70%);
    animation: sunPulse 3s ease-in-out infinite;
  }

  @keyframes sunPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  .sun-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #FFF8DC, #FFD700, #FFA500);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
  }

  .sunset-glow {
    background: radial-gradient(circle, rgba(255, 100, 50, 0.4) 0%, transparent 70%);
  }

  .sunset-core {
    background: radial-gradient(circle at 30% 30%, #FF8C00, #FF4500, #CC3300);
    box-shadow: 0 0 40px rgba(255, 69, 0, 0.5);
  }

  .moon {
    right: 18%;
    top: 8%;
  }

  .moon-glow {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 200, 255, 0.2) 0%, transparent 70%);
    animation: moonPulse 4s ease-in-out infinite;
  }

  @keyframes moonPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  .moon-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #F5F5F0, #E8E8D8, #D4D4C0);
    box-shadow: 0 0 25px rgba(200, 200, 255, 0.4);
  }

  .moon-crater {
    position: absolute;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.08);
  }

  .moon-crater.c1 { top: 40%; left: 42%; width: 8px; height: 8px; }
  .moon-crater.c2 { top: 55%; left: 55%; width: 5px; height: 5px; }
  .moon-crater.c3 { top: 35%; left: 60%; width: 4px; height: 4px; }

  /* Stars */
  .game-star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle 2s ease-in-out infinite alternate;
    z-index: 1;
  }

  /* Clouds */
  .cloud {
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(2px);
  }

  .cloud::before, .cloud::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
  }

  .cloud-1 {
    width: 60px;
    height: 20px;
    top: 12%;
    animation: cloudDrift 25s linear infinite;
  }

  .cloud-1::before {
    width: 30px;
    height: 28px;
    top: -14px;
    left: 10px;
  }

  .cloud-1::after {
    width: 24px;
    height: 22px;
    top: -8px;
    left: 32px;
  }

  .cloud-2 {
    width: 50px;
    height: 16px;
    top: 18%;
    animation: cloudDrift 30s linear infinite;
    animation-delay: -10s;
  }

  .cloud-2::before {
    width: 26px;
    height: 24px;
    top: -12px;
    left: 8px;
  }

  .cloud-2::after {
    width: 20px;
    height: 18px;
    top: -6px;
    left: 28px;
  }

  .cloud-3 {
    width: 45px;
    height: 14px;
    top: 22%;
    animation: cloudDrift 35s linear infinite;
    animation-delay: -20s;
  }

  .cloud-3::before {
    width: 22px;
    height: 20px;
    top: -10px;
    left: 8px;
  }

  .cloud-3::after {
    width: 18px;
    height: 16px;
    top: -5px;
    left: 24px;
  }

  @keyframes cloudDrift {
    0% { left: -15%; }
    100% { left: 110%; }
  }

  /* Castle SVG */
  .castle-svg {
    position: absolute;
    bottom: 22%;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 500px;
    height: auto;
    overflow: visible;
    z-index: 3;
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3));
  }

  /* Particles */
  .particles-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 10;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .particle-firework {
    background: radial-gradient(circle, hsl(var(--p-hue), 90%, 70%), hsl(var(--p-hue), 80%, 50%));
    box-shadow: 0 0 4px hsl(var(--p-hue), 90%, 60%);
  }

  .particle-sparkle {
    background: radial-gradient(circle, #FFD700, #FFA500);
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.6);
  }

  .particle-smoke {
    background: radial-gradient(circle, rgba(150, 150, 150, 0.4), rgba(100, 100, 100, 0.1));
    border-radius: 50%;
  }

  /* Correct / Wrong overlays */
  .correct-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 20;
    animation: overlayFlash 0.8s ease-out forwards;
  }

  @keyframes overlayFlash {
    0% { background: rgba(74, 222, 128, 0.3); }
    100% { background: rgba(74, 222, 128, 0); }
  }

  .correct-burst {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid #4ade80;
    animation: burstRing 0.6s ease forwards;
  }

  @keyframes burstRing {
    0% { transform: scale(0.5); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }

  .correct-text {
    font-size: 2.5rem;
    font-weight: 900;
    color: #4ade80;
    text-shadow: 0 2px 10px rgba(74, 222, 128, 0.5);
    animation: correctPop 0.8s ease forwards;
  }

  @keyframes correctPop {
    0% { transform: scale(0); opacity: 0; }
    30% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }

  .wrong-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 20;
    animation: wrongFlash 0.6s ease-out forwards;
  }

  @keyframes wrongFlash {
    0% { background: rgba(239, 68, 68, 0.25); }
    100% { background: rgba(239, 68, 68, 0); }
  }

  .wrong-text {
    font-size: 2rem;
    font-weight: 800;
    color: #ef4444;
    text-shadow: 0 2px 10px rgba(239, 68, 68, 0.5);
    animation: wrongPop 0.6s ease forwards;
  }

  @keyframes wrongPop {
    0% { transform: scale(0); opacity: 0; }
    30% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0.9); opacity: 0; }
  }

  /* ═══════════════════════════════════════════════════════════
     HUD
     ═══════════════════════════════════════════════════════════ */

  .hud {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0.8rem;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(8px);
    z-index: 30;
    position: relative;
  }

  .hud-left, .hud-right {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .hud-center {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-btn:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #6A5ACD, #9370DB);
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.85rem;
    color: white;
  }

  .timer-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: white;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .timer-urgent {
    background: rgba(239, 68, 68, 0.3);
    animation: timerPulse 0.5s ease-in-out infinite;
  }

  @keyframes timerPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .timer-icon { font-size: 0.9rem; }

  .combo-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, rgba(255, 165, 0, 0.3), rgba(255, 69, 0, 0.3));
    border: 1px solid rgba(255, 165, 0, 0.4);
    border-radius: 16px;
    color: #FFA500;
    font-weight: 800;
    font-size: 0.85rem;
    animation: comboPop 0.3s ease;
  }

  @keyframes comboPop {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .combo-fire { font-size: 0.9rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 215, 0, 0.15);
    border-radius: 16px;
    color: #FFD700;
    font-weight: 800;
    font-size: 0.85rem;
  }

  .score-star { font-size: 0.9rem; }

  /* ═══════════════════════════════════════════════════════════
     DAY PROGRESS BAR
     ═══════════════════════════════════════════════════════════ */

  .day-progress-bar {
    position: relative;
    z-index: 30;
    padding: 0.4rem 1rem;
    background: rgba(0, 0, 0, 0.2);
  }

  .day-progress-track {
    position: relative;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: visible;
  }

  .day-progress-fill {
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(90deg, #FF9A56, #FFD700, #4A90D9, #6A5ACD);
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .day-progress-marker {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.4));
    z-index: 2;
  }

  .day-progress-labels {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .dp-label {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.65rem;
    opacity: 0.4;
  }

  /* ═══════════════════════════════════════════════════════════
     CONTROLS AREA (cards & buttons)
     ═══════════════════════════════════════════════════════════ */

  .controls-area {
    position: relative;
    z-index: 30;
    flex-shrink: 0;
    padding: 0.6rem 0.8rem 0.4rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    max-height: 44%;
    overflow-y: auto;
  }

  /* Match mode */
  .match-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  .activity-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    padding: 0.8rem 1.5rem;
    background: rgba(255, 255, 255, 0.08);
    border: 2px solid rgba(255, 215, 0, 0.2);
    border-radius: 20px;
    animation: cardBounceIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    backdrop-filter: blur(6px);
    min-width: 180px;
  }

  .activity-card.small-card {
    padding: 0.5rem 1rem;
    min-width: unset;
  }

  @keyframes cardBounceIn {
    0% { transform: scale(0.6) translateY(20px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  .activity-emoji {
    font-size: 2.5rem;
  }

  .small-card .activity-emoji {
    font-size: 1.8rem;
  }

  .activity-label {
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
  }

  .small-card .activity-label {
    font-size: 0.9rem;
  }

  .activity-question {
    font-size: 0.8rem;
    color: #B8A9D4;
    margin-top: 0.2rem;
  }

  .period-buttons {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .period-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    padding: 0.6rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
    min-width: 85px;
  }

  .period-btn:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.12);
  }

  .period-btn:active {
    transform: translateY(0) scale(0.97);
  }

  .period-btn-morning {
    border-color: rgba(255, 154, 86, 0.3);
  }
  .period-btn-morning:hover {
    border-color: rgba(255, 154, 86, 0.6);
    background: rgba(255, 154, 86, 0.15);
    box-shadow: 0 4px 15px rgba(255, 154, 86, 0.2);
  }

  .period-btn-afternoon {
    border-color: rgba(30, 144, 255, 0.3);
  }
  .period-btn-afternoon:hover {
    border-color: rgba(30, 144, 255, 0.6);
    background: rgba(30, 144, 255, 0.15);
    box-shadow: 0 4px 15px rgba(30, 144, 255, 0.2);
  }

  .period-btn-evening {
    border-color: rgba(147, 112, 219, 0.3);
  }
  .period-btn-evening:hover {
    border-color: rgba(147, 112, 219, 0.6);
    background: rgba(147, 112, 219, 0.15);
    box-shadow: 0 4px 15px rgba(147, 112, 219, 0.2);
  }

  .period-btn-night {
    border-color: rgba(75, 0, 130, 0.3);
  }
  .period-btn-night:hover {
    border-color: rgba(106, 90, 205, 0.6);
    background: rgba(106, 90, 205, 0.15);
    box-shadow: 0 4px 15px rgba(106, 90, 205, 0.2);
  }

  .period-btn-emoji {
    font-size: 1.5rem;
  }

  .period-btn-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
  }

  /* Sequence mode */
  .sequence-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }

  .sequence-prompt {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #B8A9D4;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .sequence-prompt-icon {
    font-size: 1.2rem;
  }

  .sequence-cards {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .seq-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    padding: 0.6rem 0.8rem;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
    min-width: 80px;
  }

  .seq-card:hover:not(:disabled) {
    transform: translateY(-2px);
    border-color: rgba(255, 215, 0, 0.4);
    background: rgba(255, 215, 0, 0.08);
  }

  .seq-card.seq-placed {
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(74, 222, 128, 0.1);
    opacity: 0.7;
    cursor: default;
  }

  .seq-order {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #4ade80;
    color: white;
    font-size: 0.7rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .seq-emoji {
    font-size: 1.5rem;
  }

  .seq-label {
    font-size: 0.65rem;
    font-weight: 600;
    color: white;
  }

  /* Before/After mode */
  .ba-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }

  .ba-prompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: #C8BFE0;
    font-size: 0.95rem;
    text-align: center;
  }

  .ba-type {
    font-size: 1.3rem;
    font-weight: 900;
    color: #FFD700;
  }

  .ba-reference {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    font-weight: 700;
    color: white;
  }

  .ba-ref-emoji {
    font-size: 1.5rem;
  }

  .ba-options {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ba-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    padding: 0.6rem 1rem;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
    min-width: 90px;
  }

  .ba-option:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 215, 0, 0.4);
    background: rgba(255, 215, 0, 0.08);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.15);
  }

  .ba-opt-emoji {
    font-size: 1.8rem;
  }

  .ba-opt-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
  }

  /* Clock read mode */
  .clock-read-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
  }

  .clock-prompt {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  .clock-question {
    color: #B8A9D4;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .clock-options {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .clock-option {
    padding: 0.7rem 1.3rem;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: white;
    min-width: 100px;
  }

  .clock-option:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 215, 0, 0.4);
    background: rgba(255, 215, 0, 0.08);
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.15);
  }

  /* ═══════════════════════════════════════════════════════════
     BOTTOM BAR
     ═══════════════════════════════════════════════════════════ */

  .bottom-bar {
    position: relative;
    z-index: 30;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.35);
    text-align: center;
    flex-shrink: 0;
  }

  .hint-text {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
  }

  /* ═══════════════════════════════════════════════════════════
     RESPONSIVE
     ═══════════════════════════════════════════════════════════ */

  @media (max-width: 600px) {
    .activity-card {
      padding: 0.6rem 1rem;
      min-width: 150px;
    }

    .activity-emoji {
      font-size: 2rem;
    }

    .activity-label {
      font-size: 0.95rem;
    }

    .period-btn {
      padding: 0.5rem 0.7rem;
      min-width: 72px;
    }

    .period-btn-emoji {
      font-size: 1.2rem;
    }

    .period-btn-label {
      font-size: 0.65rem;
    }

    .castle-svg {
      width: 95%;
      bottom: 24%;
    }

    .controls-area {
      max-height: 48%;
    }

    .hud-center {
      display: none;
    }

    .seq-card {
      padding: 0.4rem 0.6rem;
      min-width: 68px;
    }

    .seq-emoji {
      font-size: 1.2rem;
    }

    .ba-option {
      padding: 0.5rem 0.7rem;
      min-width: 75px;
    }

    .ba-opt-emoji {
      font-size: 1.4rem;
    }

    .clock-option {
      padding: 0.5rem 0.8rem;
      font-size: 0.85rem;
      min-width: 80px;
    }

    .complete-stats {
      gap: 1rem;
    }

    .stat-value {
      font-size: 1.5rem;
    }

    .intro-castle-silhouette {
      width: 90%;
      bottom: 6%;
    }
  }

  @media (max-width: 380px) {
    .period-buttons {
      gap: 0.4rem;
    }

    .period-btn {
      padding: 0.4rem 0.5rem;
      min-width: 62px;
    }
  }
`;
