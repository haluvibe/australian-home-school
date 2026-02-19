"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

/*
  DATA DETECTIVE: BUG COLLECTION MYSTERY

  A four-phase game where kids become backyard detectives:
  Phase 1 - CATCH: Drag a butterfly net to catch bugs in a garden
  Phase 2 - SORT: Drag caught bugs into labeled sorting jars
  Phase 3 - GRAPH: Watch a picture graph build automatically
  Phase 4 - SOLVE: Answer mystery questions using the graph data

  Foundation Maths: Collect, sort, display data in picture graphs
*/

// ═══════════════════ TYPES ═══════════════════

interface Bug {
  id: number;
  type: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  phase: number; // unique movement phase offset
  caught: boolean;
  catchAnim: number; // 0=not catching, >0=timestamp
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
  kind: 'sparkle' | 'pollen' | 'confetti' | 'trail' | 'leaf';
}

interface SortJar {
  typeIndex: number;
  items: number[];
  highlight: boolean;
  wrongShake: number;
}

interface GraphBar {
  typeIndex: number;
  count: number;
  animCount: number;
}

interface MysteryQuestion {
  text: string;
  answers: string[];
  correctIdx: number;
}

interface CaseData {
  name: string;
  theme: string;
  bugTypes: BugTypeDef[];
  bgHue: number;
}

interface BugTypeDef {
  name: string;
  emoji: string;
  color: string;
  hue: number;
  speed: number;
  movement: 'float' | 'crawl' | 'hop' | 'march' | 'zigzag' | 'wander' | 'arc';
}

interface DragItem {
  bugId: number;
  typeIndex: number;
  startX: number;
  startY: number;
  curX: number;
  curY: number;
}

interface NetState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  swooping: boolean;
  swoopTimer: number;
}

interface Badge {
  caseNum: number;
  caseName: string;
  emoji: string;
  rank: string;
}

type Screen = 'intro' | 'catch' | 'sort' | 'graph' | 'solve' | 'solved' | 'complete';

// ═══════════════════ CONSTANTS ═══════════════════

const CATCH_DURATION = 30;
const NET_SIZE = 100;
const NET_CATCH_RADIUS = 55;
const BUG_SIZE = 50;
const CATCH_ANIM_MS = 400;

const ALL_BUG_TYPES: BugTypeDef[] = [
  { name: 'Butterfly', emoji: '🦋', color: '#818cf8', hue: 240, speed: 2.2, movement: 'float' },
  { name: 'Caterpillar', emoji: '🐛', color: '#4ade80', hue: 140, speed: 0.7, movement: 'crawl' },
  { name: 'Ladybug', emoji: '🐞', color: '#ef4444', hue: 0, speed: 1.5, movement: 'wander' },
  { name: 'Ant', emoji: '🐜', color: '#78716c', hue: 30, speed: 1.8, movement: 'march' },
  { name: 'Bee', emoji: '🐝', color: '#fbbf24', hue: 45, speed: 2.8, movement: 'zigzag' },
  { name: 'Beetle', emoji: '🪲', color: '#7c3aed', hue: 265, speed: 0.9, movement: 'wander' },
  { name: 'Cricket', emoji: '🦗', color: '#65a30d', hue: 90, speed: 1.4, movement: 'hop' },
];

const CASES: CaseData[] = [
  { name: 'Garden Patrol', theme: 'morning garden', bugTypes: [ALL_BUG_TYPES[0], ALL_BUG_TYPES[1], ALL_BUG_TYPES[2]], bgHue: 120 },
  { name: 'Picnic Visitors', theme: 'sunny picnic', bugTypes: [ALL_BUG_TYPES[3], ALL_BUG_TYPES[2], ALL_BUG_TYPES[0]], bgHue: 100 },
  { name: 'Flower Bed Search', theme: 'flower bed', bugTypes: [ALL_BUG_TYPES[0], ALL_BUG_TYPES[4], ALL_BUG_TYPES[5]], bgHue: 340 },
  { name: 'Under the Log', theme: 'forest floor', bugTypes: [ALL_BUG_TYPES[5], ALL_BUG_TYPES[3], ALL_BUG_TYPES[6]], bgHue: 80 },
  { name: 'Meadow Mystery', theme: 'open meadow', bugTypes: [ALL_BUG_TYPES[0], ALL_BUG_TYPES[4], ALL_BUG_TYPES[6], ALL_BUG_TYPES[2]], bgHue: 90 },
  { name: 'Night Watch', theme: 'twilight garden', bugTypes: [ALL_BUG_TYPES[5], ALL_BUG_TYPES[6], ALL_BUG_TYPES[1], ALL_BUG_TYPES[3]], bgHue: 260 },
  { name: 'Creek Side', theme: 'creek bank', bugTypes: [ALL_BUG_TYPES[0], ALL_BUG_TYPES[2], ALL_BUG_TYPES[4], ALL_BUG_TYPES[6]], bgHue: 170 },
  { name: 'The Grand Count', theme: 'grand garden', bugTypes: [ALL_BUG_TYPES[0], ALL_BUG_TYPES[3], ALL_BUG_TYPES[4], ALL_BUG_TYPES[5]], bgHue: 50 },
];

let _idCtr = 0;
const nid = () => ++_idCtr;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number) => Math.floor(rand(lo, hi + 1));

function getCounts(level: number, numTypes: number): number[] {
  const counts: number[] = [];
  for (let i = 0; i < numTypes; i++) {
    if (level <= 3) counts.push(randInt(2, 5));
    else if (level <= 6) counts.push(randInt(3, 6));
    else counts.push(randInt(3, 7));
  }
  // Ensure not all same
  if (counts.every(c => c === counts[0])) {
    counts[0] += 1;
  }
  return counts;
}

function makeQuestions(types: BugTypeDef[], counts: number[], level: number): MysteryQuestion[] {
  const qs: MysteryQuestion[] = [];
  const maxC = Math.max(...counts);
  const minC = Math.min(...counts);
  const maxIdx = counts.indexOf(maxC);
  const minIdx = counts.indexOf(minC);

  // Q1: Which bug the most?
  qs.push({
    text: `Which bug did you find the MOST of?`,
    answers: types.map(t => t.emoji + ' ' + t.name),
    correctIdx: maxIdx,
  });

  if (level >= 2) {
    const askIdx = randInt(0, types.length - 1);
    const numOpts = makeNumOpts(counts[askIdx], 4);
    qs.push({
      text: `How many ${types[askIdx].emoji} ${types[askIdx].name}s did you find?`,
      answers: numOpts.map(String),
      correctIdx: numOpts.indexOf(counts[askIdx]),
    });
  }

  if (level >= 4) {
    qs.push({
      text: `Which bug did you find the LEAST of?`,
      answers: types.map(t => t.emoji + ' ' + t.name),
      correctIdx: minIdx,
    });
  }

  if (level >= 6 && types.length >= 2) {
    const sorted = counts.map((c, i) => ({ c, i })).sort((a, b) => b.c - a.c);
    const hi = sorted[0].i;
    const lo = sorted[sorted.length - 1].i;
    const diff = counts[hi] - counts[lo];
    const opts = makeNumOpts(diff, 4);
    qs.push({
      text: `How many MORE ${types[hi].emoji} than ${types[lo].emoji}?`,
      answers: opts.map(String),
      correctIdx: opts.indexOf(diff),
    });
  }

  const maxQs = level <= 2 ? 1 : level <= 5 ? 2 : 3;
  return qs.slice(0, maxQs);
}

function makeNumOpts(correct: number, count: number): number[] {
  const s = new Set<number>();
  s.add(correct);
  while (s.size < count) {
    const off = randInt(1, 3);
    s.add(Math.max(0, Math.random() > 0.5 ? correct + off : correct - off));
  }
  return Array.from(s).sort((a, b) => a - b);
}

const RANKS = ['Rookie Scout', 'Junior Detective', 'Bug Spotter', 'Data Tracker', 'Field Agent', 'Graph Master', 'Senior Detective', 'Chief Inspector'];

// ═══════════════════ COMPONENT ═══════════════════

interface DataDetectiveProps {
  onExit?: () => void;
}

export default function DataDetective({ onExit }: DataDetectiveProps = {}) {
  const [screen, setScreen] = useState<Screen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [caseData, setCaseData] = useState<CaseData>(CASES[0]);

  // Catch phase
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [net, setNet] = useState<NetState>({ x: 400, y: 300, targetX: 400, targetY: 300, swooping: false, swoopTimer: 0 });
  const [caughtCounts, setCaughtCounts] = useState<number[]>([]);
  const [targetCounts, setTargetCounts] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(CATCH_DURATION);
  const [jarPreview, setJarPreview] = useState<number[]>([]);

  // Sort phase
  const [sortJars, setSortJars] = useState<SortJar[]>([]);
  const [unsorted, setUnsorted] = useState<{ id: number; typeIndex: number }[]>([]);
  const [dragItem, setDragItem] = useState<DragItem | null>(null);
  const [sortFx, setSortFx] = useState<{ ok: boolean; x: number; y: number } | null>(null);

  // Graph phase
  const [graphBars, setGraphBars] = useState<GraphBar[]>([]);

  // Solve phase
  const [questions, setQuestions] = useState<MysteryQuestion[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [selAnswer, setSelAnswer] = useState<number | null>(null);
  const [ansResult, setAnsResult] = useState<'correct' | 'wrong' | null>(null);

  // Visual
  const [particles, setParticles] = useState<Particle[]>([]);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const netDragging = useRef(false);
  const jarRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const bugsRef = useRef(bugs);
  bugsRef.current = bugs;

  const getSize = useCallback(() => {
    if (containerRef.current) return { w: containerRef.current.offsetWidth, h: containerRef.current.offsetHeight };
    return { w: 800, h: 600 };
  }, []);

  // ── Particles ──
  const spawnP = useCallback((x: number, y: number, count: number, hue: number, kind: Particle['kind'] = 'sparkle') => {
    const ps: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const a = (Math.PI * 2 * i) / count + rand(-0.3, 0.3);
      const sp = kind === 'confetti' ? rand(2, 5) : rand(1, 3.5);
      ps.push({
        id: nid(), x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - (kind === 'confetti' ? 2 : 0),
        life: 1, maxLife: kind === 'confetti' ? 1.5 : 0.8,
        size: kind === 'confetti' ? rand(5, 10) : rand(3, 6),
        hue, kind,
      });
    }
    setParticles(prev => [...prev, ...ps]);
  }, []);

  // ── Init level ──
  const initLevel = useCallback((lvl: number) => {
    const cd = CASES[(lvl - 1) % CASES.length];
    setCaseData(cd);
    const cts = getCounts(lvl, cd.bugTypes.length);
    setTargetCounts(cts);
    setCaughtCounts(new Array(cd.bugTypes.length).fill(0));
    setJarPreview(new Array(cd.bugTypes.length).fill(0));
    setTimeLeft(CATCH_DURATION + (lvl >= 5 ? 5 : 0));
    setSortJars([]);
    setUnsorted([]);
    setGraphBars([]);
    setQuestions([]);
    setQIdx(0);
    setSelAnswer(null);
    setAnsResult(null);
    setDragItem(null);
    setSortFx(null);
    setParticles([]);

    // Spawn bugs
    const size = { w: 800, h: 500 };
    const allBugs: Bug[] = [];
    cts.forEach((count, typeIdx) => {
      for (let i = 0; i < count; i++) {
        allBugs.push({
          id: nid(),
          type: typeIdx,
          x: rand(60, size.w - 60),
          y: rand(60, size.h - 120),
          vx: (Math.random() - 0.5) * cd.bugTypes[typeIdx].speed,
          vy: (Math.random() - 0.5) * cd.bugTypes[typeIdx].speed,
          angle: rand(0, 360),
          phase: rand(0, Math.PI * 2),
          caught: false,
          catchAnim: 0,
        });
      }
    });
    setBugs(allBugs);

    const sz = getSize();
    setNet({ x: sz.w / 2, y: sz.h / 2, targetX: sz.w / 2, targetY: sz.h / 2, swooping: false, swoopTimer: 0 });
  }, [getSize]);

  // ── Start game ──
  const startGame = () => {
    setScreen('catch');
    setLevel(1);
    setScore(0);
    setBadges([]);
    initLevel(1);
  };

  // ── Catch timer ──
  useEffect(() => {
    if (screen !== 'catch') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time up - move to sort with whatever we caught
          clearInterval(timerRef.current!);
          setTimeout(() => transitionToSort(), 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [screen]);

  // ── Catch a bug with the net ──
  const tryCatchBug = useCallback((netX: number, netY: number) => {
    setBugs(prev => {
      let caught = false;
      const next = prev.map(b => {
        if (b.caught) return b;
        const dx = b.x - netX;
        const dy = b.y - netY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < NET_CATCH_RADIUS && !caught) {
          caught = true;
          setCaughtCounts(c => {
            const nc = [...c];
            nc[b.type]++;
            return nc;
          });
          setJarPreview(j => {
            const nj = [...j];
            nj[b.type]++;
            return nj;
          });
          setScore(s => s + 10);
          spawnP(b.x, b.y, 8, caseData.bugTypes[b.type]?.hue ?? 200);
          return { ...b, caught: true, catchAnim: Date.now() };
        }
        return b;
      });
      return next;
    });
  }, [caseData, spawnP]);

  // ── Net drag handlers ──
  const handleNetDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    netDragging.current = true;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const nx = cx - rect.left;
    const ny = cy - rect.top;
    setNet(prev => ({ ...prev, targetX: nx, targetY: ny, swooping: true, swoopTimer: 8 }));
  }, []);

  const handleNetMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!netDragging.current || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const nx = cx - rect.left;
    const ny = cy - rect.top;
    setNet(prev => ({ ...prev, targetX: nx, targetY: ny }));
  }, []);

  const handleNetUp = useCallback(() => {
    netDragging.current = false;
  }, []);

  // Net event listeners
  useEffect(() => {
    if (screen !== 'catch') return;
    const move = (e: MouseEvent | TouchEvent) => handleNetMove(e);
    const up = () => handleNetUp();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [screen, handleNetMove, handleNetUp]);

  // ── Transition to sort ──
  const transitionToSort = useCallback(() => {
    // Build unsorted items from caught counts
    const items: { id: number; typeIndex: number }[] = [];
    caughtCounts.forEach((count, typeIdx) => {
      for (let i = 0; i < count; i++) {
        items.push({ id: nid(), typeIndex: typeIdx });
      }
    });
    // Shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    setUnsorted(items);
    setSortJars(caseData.bugTypes.map((_, i) => ({ typeIndex: i, items: [], highlight: false, wrongShake: 0 })));
    setScreen('sort');
  }, [caughtCounts, caseData]);

  // Check if all bugs caught early
  useEffect(() => {
    if (screen !== 'catch') return;
    const totalTarget = targetCounts.reduce((a, b) => a + b, 0);
    const totalCaught = caughtCounts.reduce((a, b) => a + b, 0);
    if (totalTarget > 0 && totalCaught >= totalTarget) {
      if (timerRef.current) clearInterval(timerRef.current);
      const bonus = timeLeft * 5;
      setScore(s => s + bonus);
      setTimeout(() => transitionToSort(), 800);
    }
  }, [screen, caughtCounts, targetCounts, timeLeft, transitionToSort]);

  // ── Sort drag handlers ──
  const handleSortStart = useCallback((e: React.MouseEvent | React.TouchEvent, item: { id: number; typeIndex: number }) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragItem({ bugId: item.id, typeIndex: item.typeIndex, startX: cx - rect.left, startY: cy - rect.top, curX: cx - rect.left, curY: cy - rect.top });
  }, []);

  const handleSortMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragItem || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragItem(prev => prev ? { ...prev, curX: cx - rect.left, curY: cy - rect.top } : null);

    // Highlight nearest jar
    setSortJars(prev => prev.map((jar, idx) => {
      const el = jarRefs.current[idx];
      if (!el) return { ...jar, highlight: false };
      const jRect = el.getBoundingClientRect();
      const jx = jRect.left + jRect.width / 2 - rect.left;
      const jy = jRect.top + jRect.height / 2 - rect.top;
      const dist = Math.sqrt((jx - (cx - rect.left)) ** 2 + (jy - (cy - rect.top)) ** 2);
      return { ...jar, highlight: dist < 80 };
    }));
  }, [dragItem]);

  const handleSortEnd = useCallback(() => {
    if (!dragItem || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    let droppedIdx = -1;
    sortJars.forEach((_, idx) => {
      const el = jarRefs.current[idx];
      if (!el) return;
      const jRect = el.getBoundingClientRect();
      const jx = jRect.left + jRect.width / 2 - rect.left;
      const jy = jRect.top + jRect.height / 2 - rect.top;
      const dist = Math.sqrt((jx - dragItem.curX) ** 2 + (jy - dragItem.curY) ** 2);
      if (dist < 80) droppedIdx = idx;
    });

    if (droppedIdx >= 0) {
      if (droppedIdx === dragItem.typeIndex) {
        // Correct!
        setSortJars(prev => prev.map((j, i) =>
          i === droppedIdx ? { ...j, items: [...j.items, dragItem.bugId], highlight: false } : { ...j, highlight: false }
        ));
        setUnsorted(prev => prev.filter(it => it.id !== dragItem.bugId));
        setScore(s => s + 5);
        spawnP(dragItem.curX, dragItem.curY, 6, caseData.bugTypes[droppedIdx]?.hue ?? 0);
        setSortFx({ ok: true, x: dragItem.curX, y: dragItem.curY });
      } else {
        // Wrong jar - bounce back
        setSortJars(prev => prev.map((j, i) =>
          i === droppedIdx ? { ...j, highlight: false, wrongShake: Date.now() } : { ...j, highlight: false }
        ));
        setSortFx({ ok: false, x: dragItem.curX, y: dragItem.curY });
      }
      setTimeout(() => setSortFx(null), 600);
    } else {
      setSortJars(prev => prev.map(j => ({ ...j, highlight: false })));
    }
    setDragItem(null);
  }, [dragItem, sortJars, caseData, spawnP]);

  // Sort event listeners
  useEffect(() => {
    if (!dragItem) return;
    const move = (e: MouseEvent | TouchEvent) => handleSortMove(e);
    const end = () => handleSortEnd();
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
  }, [dragItem, handleSortMove, handleSortEnd]);

  // ── Check sort complete → graph ──
  useEffect(() => {
    if (screen !== 'sort') return;
    if (unsorted.length === 0 && sortJars.some(j => j.items.length > 0)) {
      setTimeout(() => {
        const bars: GraphBar[] = caseData.bugTypes.map((_, i) => ({
          typeIndex: i, count: sortJars[i]?.items.length ?? 0, animCount: 0,
        }));
        setGraphBars(bars);
        setScreen('graph');

        // Animate bars building
        const maxC = Math.max(...bars.map(b => b.count));
        bars.forEach((bar, barIdx) => {
          for (let i = 1; i <= bar.count; i++) {
            setTimeout(() => {
              setGraphBars(prev => prev.map((b, idx) => idx === barIdx ? { ...b, animCount: i } : b));
            }, barIdx * 350 + i * 220);
          }
        });

        // After graph built, move to solve
        const totalTime = bars.length * 350 + maxC * 220 + 800;
        setTimeout(() => {
          const actualCounts = bars.map(b => b.count);
          const qs = makeQuestions(caseData.bugTypes, actualCounts, level);
          setQuestions(qs);
          setQIdx(0);
          setSelAnswer(null);
          setAnsResult(null);
          setScreen('solve');
        }, totalTime);
      }, 700);
    }
  }, [screen, unsorted, sortJars, caseData, level]);

  // ── Answer question ──
  const answerQ = useCallback((optIdx: number) => {
    if (ansResult !== null) return;
    setSelAnswer(optIdx);
    const q = questions[qIdx];
    if (!q) return;

    if (optIdx === q.correctIdx) {
      setAnsResult('correct');
      setScore(s => s + 25);
      const sz = getSize();
      spawnP(sz.w / 2, sz.h / 2, 15, 140, 'confetti');

      setTimeout(() => {
        if (qIdx < questions.length - 1) {
          setQIdx(p => p + 1);
          setSelAnswer(null);
          setAnsResult(null);
        } else {
          // Case solved!
          const rank = RANKS[Math.min(level - 1, RANKS.length - 1)];
          const badge: Badge = { caseNum: level, caseName: caseData.name, emoji: caseData.bugTypes[0].emoji, rank };
          setBadges(prev => [...prev, badge]);
          setScore(s => s + 50);
          setScreen('solved');
        }
      }, 1200);
    } else {
      setAnsResult('wrong');
      setTimeout(() => { setSelAnswer(null); setAnsResult(null); }, 1400);
    }
  }, [ansResult, questions, qIdx, level, caseData, getSize, spawnP]);

  // ── Next case ──
  const nextCase = useCallback(() => {
    const nl = level + 1;
    if (nl > 8) {
      setScreen('complete');
      return;
    }
    setLevel(nl);
    setScreen('catch');
    initLevel(nl);
  }, [level, initLevel]);

  // ═══════════════════ ANIMATION LOOP ═══════════════════
  useEffect(() => {
    const animate = (ts: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = ts;
      const dt = Math.min((ts - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = ts;
      const size = getSize();

      // ── Bug movement AI ──
      if (screen === 'catch') {
        setBugs(prev => prev.map(b => {
          if (b.caught) return b;
          const bt = caseData.bugTypes[b.type];
          if (!bt) return b;
          let { x, y, vx, vy, angle, phase } = b;
          phase += 0.03 * dt;
          const spd = bt.speed;

          switch (bt.movement) {
            case 'float': // sine-wave arcs
              vx += Math.cos(phase) * 0.15 * dt;
              vy += Math.sin(phase * 0.7) * 0.1 * dt;
              break;
            case 'crawl': // slow along bottom
              vy += 0.02 * dt;
              vx += (Math.random() - 0.5) * 0.08 * dt;
              if (y < size.h * 0.5) vy += 0.05 * dt;
              break;
            case 'hop': // periodic jumps
              vx += (Math.random() - 0.5) * 0.1 * dt;
              if (Math.sin(phase * 2) > 0.9) { vy -= 2.5; }
              vy += 0.08 * dt; // gravity
              break;
            case 'march': // straight lines with direction changes
              if (Math.abs(vx) < 0.3) vx = (Math.random() > 0.5 ? 1 : -1) * spd;
              vx += (Math.random() - 0.5) * 0.05 * dt;
              vy += (Math.random() - 0.5) * 0.15 * dt;
              break;
            case 'zigzag': // quick zigzag
              vx += Math.sin(phase * 3) * 0.3 * dt;
              vy += Math.cos(phase * 2) * 0.2 * dt;
              break;
            case 'wander': // random direction changes
              vx += (Math.random() - 0.5) * 0.2 * dt;
              vy += (Math.random() - 0.5) * 0.2 * dt;
              if (Math.random() < 0.01) { vx *= -0.5; vy *= -0.5; }
              break;
            case 'arc': // floating arcs
              vx += Math.sin(phase) * 0.12 * dt;
              vy += Math.cos(phase * 1.3) * 0.08 * dt;
              break;
          }

          // Speed limit
          const curSpd = Math.sqrt(vx * vx + vy * vy);
          if (curSpd > spd * 1.5) {
            vx = (vx / curSpd) * spd * 1.5;
            vy = (vy / curSpd) * spd * 1.5;
          }

          // Friction
          vx *= 0.995;
          vy *= 0.995;

          x += vx * dt;
          y += vy * dt;
          angle += (vx * 2) * dt;

          // Bounce off walls
          const m = 30;
          const maxY = size.h - 130;
          if (x < m) { x = m; vx = Math.abs(vx) * 0.7; }
          if (x > size.w - m) { x = size.w - m; vx = -Math.abs(vx) * 0.7; }
          if (y < m + 80) { y = m + 80; vy = Math.abs(vy) * 0.7; }
          if (y > maxY) { y = maxY; vy = -Math.abs(vy) * 0.7; }

          return { ...b, x, y, vx, vy, angle, phase };
        }));

        // ── Net physics (smooth follow with lag) ──
        setNet(prev => {
          let { x, y, targetX, targetY, swooping, swoopTimer } = prev;
          const lag = 0.12;
          x += (targetX - x) * lag * dt;
          y += (targetY - y) * lag * dt;
          if (swoopTimer > 0) {
            swoopTimer -= dt;
            if (swoopTimer <= 0) swooping = false;
          }
          // Try catching bugs near net
          tryCatchBug(x, y);
          return { x, y, targetX, targetY, swooping, swoopTimer };
        });
      }

      // ── Particles ──
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx * dt,
        y: p.y + p.vy * dt + (p.kind === 'confetti' ? 0.4 * dt : p.kind === 'pollen' ? 0.1 * dt : 0),
        vx: p.vx * 0.97,
        vy: p.vy * (p.kind === 'confetti' ? 0.99 : 0.97),
        life: p.life - (1 / (p.maxLife * 60)) * dt,
      })).filter(p => p.life > 0));

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [screen, getSize, caseData, tryCatchBug]);

  // ── Ambient pollen particles ──
  useEffect(() => {
    const iv = setInterval(() => {
      const sz = getSize();
      if (Math.random() > 0.4) {
        setParticles(prev => [...prev, {
          id: nid(), x: rand(0, sz.w), y: -5,
          vx: rand(-0.3, 0.3), vy: rand(0.2, 0.6),
          life: 1, maxLife: 3, size: rand(2, 4),
          hue: rand(40, 80), kind: 'pollen',
        }]);
      }
    }, 500);
    return () => clearInterval(iv);
  }, [getSize]);

  // ═══════════════════ COMPUTED ═══════════════════
  const totalCaught = caughtCounts.reduce((a, b) => a + b, 0);
  const totalTarget = targetCounts.reduce((a, b) => a + b, 0);
  const isNightTheme = caseData.bgHue > 200 && caseData.bgHue < 300;

  // ═══════════════════ RENDER: INTRO ═══════════════════
  if (screen === 'intro') {
    return (
      <div className="dd">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="garden-bg">
            <div className="sky-layer" />
            <div className="sun-glow" />
            <div className="grass" />
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-flower" style={{ left: `${5 + i * 14}%`, bottom: `${20 + Math.sin(i) * 4}%`, animationDelay: `${i * 0.4}s` }}>
                {['🌸', '🌼', '🌺', '🌷', '🌻', '💐', '🪻'][i]}
              </div>
            ))}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-bug-float" style={{ left: `${15 + i * 22}%`, top: `${15 + Math.sin(i * 2) * 10}%`, animationDelay: `${i * 1.2}s`, animationDuration: `${4 + i}s` }}>
                {['🦋', '🐝', '🐞', '🦗'][i]}
              </div>
            ))}
          </div>
          {particles.map(p => (
            <div key={p.id} className="ptcl" style={{ left: p.x, top: p.y, opacity: p.life, width: p.size, height: p.size, background: `hsla(${p.hue},60%,80%,${p.life * 0.5})` }} />
          ))}
          <div className="intro-content">
            <div className="intro-logo">
              <span className="logo-icon bounce-1">🔍</span>
              <h1>Data Detective</h1>
              <span className="logo-icon bounce-2">🪲</span>
            </div>
            <p className="intro-sub">Backyard Bug Investigation Agency</p>
            <div className="intro-card">
              <h3>🕵️ How to Investigate</h3>
              <div className="intro-step">
                <span className="step-num">1</span>
                <span className="step-ico">🪺</span>
                <p><strong>CATCH</strong> — Drag your net to catch bugs!</p>
              </div>
              <div className="intro-step">
                <span className="step-num">2</span>
                <span className="step-ico">🏺</span>
                <p><strong>SORT</strong> — Drag bugs into the correct jars</p>
              </div>
              <div className="intro-step">
                <span className="step-num">3</span>
                <span className="step-ico">📊</span>
                <p><strong>GRAPH</strong> — Watch your picture graph build</p>
              </div>
              <div className="intro-step">
                <span className="step-num">4</span>
                <span className="step-ico">🏅</span>
                <p><strong>SOLVE</strong> — Answer the mystery question!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span>🔍</span> Start Investigating <span>🔍</span>
            </button>
            {badges.length > 0 && (
              <button className="board-btn" onClick={() => setScreen('complete')}>
                View Badges ({badges.length})
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════ RENDER: CASE SOLVED ═══════════════════
  if (screen === 'solved') {
    const rank = RANKS[Math.min(level - 1, RANKS.length - 1)];
    return (
      <div className="dd">
        <style>{styles}</style>
        <div className="solved-screen">
          <div className="garden-bg">
            <div className="sky-layer" />
            <div className="sun-glow" />
            <div className="grass" />
          </div>
          <div className="confetti-shower">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="confetti-bit" style={{
                left: `${rand(0, 100)}%`, animationDelay: `${rand(0, 2)}s`, animationDuration: `${2 + rand(0, 2)}s`,
                background: `hsl(${rand(0, 360)},80%,60%)`,
              }} />
            ))}
          </div>
          {particles.map(p => (
            <div key={p.id} className="ptcl" style={{ left: p.x, top: p.y, opacity: p.life, width: p.size, height: p.size, background: `hsla(${p.hue},80%,60%,${p.life})`, borderRadius: p.kind === 'confetti' ? '2px' : '50%' }} />
          ))}
          <div className="solved-content">
            <div className="badge-anim">
              <div className="badge-glow-ring" />
              <div className="big-badge">🏅</div>
            </div>
            <h1 className="solved-title">Case Solved!</h1>
            <p className="solved-sub">Case #{level}: {caseData.name}</p>
            <div className="rank-label">{rank}</div>
            <div className="solved-stats">
              <div className="stat-box"><span className="stat-ico">⭐</span><span className="stat-num">{score}</span><span className="stat-lbl">Score</span></div>
              <div className="stat-box"><span className="stat-ico">🪲</span><span className="stat-num">{totalCaught}</span><span className="stat-lbl">Caught</span></div>
              <div className="stat-box"><span className="stat-ico">🏅</span><span className="stat-num">{badges.length}</span><span className="stat-lbl">Badges</span></div>
            </div>
            <div className="solved-btns">
              <button className="next-btn" onClick={nextCase}>
                {level >= 8 ? 'View All Badges' : `Next Case →`}
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Back to HQ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════ RENDER: GAME COMPLETE ═══════════════════
  if (screen === 'complete') {
    return (
      <div className="dd">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="garden-bg">
            <div className="sky-layer" />
            <div className="grass" />
          </div>
          <div className="complete-content">
            <h1 className="complete-title">🕵️ Detective Report 🕵️</h1>
            <div className="final-rank">{RANKS[Math.min(badges.length - 1, RANKS.length - 1)]}</div>
            <div className="final-score">Total Score: {score}</div>
            <div className="badges-grid">
              {badges.map((b, i) => (
                <div key={i} className="badge-card">
                  <div className="bc-star">⭐</div>
                  <div className="bc-emoji">{b.emoji}</div>
                  <div className="bc-case">Case #{b.caseNum}</div>
                  <div className="bc-name">{b.caseName}</div>
                  <div className="bc-rank">{b.rank}</div>
                </div>
              ))}
              {badges.length === 0 && <p className="no-badges">No cases solved yet!</p>}
            </div>
            <div className="complete-btns">
              <button className="start-btn" onClick={startGame}>Play Again</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Back to HQ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════ RENDER: MAIN GAMEPLAY ═══════════════════
  return (
    <div className="dd" ref={containerRef}>
      <style>{styles}</style>
      <div className={`game-screen ${isNightTheme ? 'night' : ''}`}>
        {/* Background */}
        <div className="garden-bg">
          <div className="sky-layer" style={{ background: isNightTheme
            ? 'linear-gradient(180deg, #1a1a3e 0%, #2d2b55 40%, #3a3660 60%, #2d4a2d 85%, #1a3a1a 100%)'
            : `linear-gradient(180deg, hsl(${caseData.bgHue + 180},70%,80%) 0%, hsl(${caseData.bgHue + 160},60%,85%) 35%, #E0F0E8 60%, #c8e6c9 80%, #4caf50 87%, #2e7d32 100%)`
          }} />
          <div className="sun-glow" />
          <div className="clouds-layer">
            <div className="cloud c1" />
            <div className="cloud c2" />
            <div className="cloud c3" />
          </div>
          <div className="grass" />
          <div className="fence-row" />
          {screen === 'catch' && [...Array(5)].map((_, i) => (
            <div key={i} className="bg-flower" style={{ left: `${5 + i * 20}%`, bottom: `${19 + Math.sin(i * 2) * 3}%`, animationDelay: `${i * 0.5}s` }}>
              {['🌸', '🌼', '🌺', '🌷', '🌻'][i]}
            </div>
          ))}
          {screen === 'catch' && [...Array(3)].map((_, i) => (
            <div key={i} className="garden-rock" style={{ left: `${15 + i * 30}%`, bottom: '22%' }}>🪨</div>
          ))}
        </div>

        {/* Particles overlay */}
        <div className="ptcl-layer">
          {particles.map(p => (
            <div key={p.id} className={`ptcl ${p.kind}`} style={{
              left: p.x, top: p.y, opacity: p.life, width: p.size, height: p.size,
              background: p.kind === 'pollen' ? `hsla(${p.hue},50%,85%,${p.life * 0.5})` : p.kind === 'confetti' ? `hsla(${p.hue},80%,60%,${p.life})` : `hsla(${p.hue},70%,65%,${p.life})`,
              borderRadius: p.kind === 'confetti' ? '2px' : '50%',
            }} />
          ))}
        </div>

        {/* Header */}
        <div className="game-hdr">
          <div className="hdr-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>←</button>
            <div className="case-pill">🔍 Case #{level}</div>
          </div>
          <div className="hdr-center">
            <div className="phase-track">
              <span className={`ph-dot ${screen === 'catch' ? 'active' : 'done'}`}>🪺</span>
              <span className="ph-line" />
              <span className={`ph-dot ${screen === 'sort' ? 'active' : (screen === 'graph' || screen === 'solve' ? 'done' : '')}`}>🏺</span>
              <span className="ph-line" />
              <span className={`ph-dot ${screen === 'graph' ? 'active' : (screen === 'solve' ? 'done' : '')}`}>📊</span>
              <span className="ph-line" />
              <span className={`ph-dot ${screen === 'solve' ? 'active' : ''}`}>🔍</span>
            </div>
          </div>
          <div className="hdr-right">
            <div className="score-pill">⭐ {score}</div>
          </div>
        </div>

        {/* Phase status bar */}
        <div className="status-bar">
          {screen === 'catch' && (
            <>
              <span className="timer-display">{timeLeft > 0 ? `⏱ ${timeLeft}s` : '⏱ Time!'}</span>
              <span className="catch-count">🪺 {totalCaught}/{totalTarget} caught</span>
            </>
          )}
          {screen === 'sort' && <span>🏺 Sort bugs into jars! ({unsorted.length} left)</span>}
          {screen === 'graph' && <span>📊 Building your picture graph...</span>}
          {screen === 'solve' && <span>🔍 Question {qIdx + 1} of {questions.length}</span>}
        </div>

        {/* ═══ CATCH PHASE ═══ */}
        {screen === 'catch' && (
          <div
            className="catch-area"
            onMouseDown={handleNetDown}
            onTouchStart={handleNetDown}
          >
            {/* Bugs */}
            {bugs.map(b => {
              const bt = caseData.bugTypes[b.type];
              if (!bt) return null;
              const isCatching = b.caught && b.catchAnim > 0;
              const animP = isCatching ? Math.min(1, (Date.now() - b.catchAnim) / CATCH_ANIM_MS) : 0;
              return (
                <div key={b.id} className={`bug ${isCatching ? 'catching' : ''} ${bt.movement}`}
                  style={{
                    left: b.x, top: b.y,
                    transform: `translate(-50%,-50%) rotate(${b.angle}deg) scale(${isCatching ? 1 - animP * 0.8 : 1}) scaleX(${b.vx >= 0 ? 1 : -1})`,
                    opacity: isCatching ? 1 - animP : 1,
                    '--bug-hue': bt.hue,
                  } as React.CSSProperties}
                >
                  <div className="bug-shadow" />
                  <span className="bug-emoji">{bt.emoji}</span>
                  <div className="bug-glow" />
                </div>
              );
            })}

            {/* Butterfly Net */}
            <div className={`net ${net.swooping ? 'swoop' : ''}`}
              style={{ left: net.x, top: net.y }}
            >
              <div className="net-handle" />
              <div className="net-rim" />
              <div className="net-mesh" />
              <div className="net-catch-zone" />
            </div>

            {/* Collection jar preview */}
            <div className="jar-preview">
              <div className="jar-preview-glass">
                <div className="jar-label">🧺 Caught</div>
                <div className="jar-bugs">
                  {caseData.bugTypes.map((bt, i) => (
                    <span key={i} className="jar-bug-count">
                      {bt.emoji} <strong>{caughtCounts[i] || 0}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ SORT PHASE ═══ */}
        {screen === 'sort' && (
          <div className="sort-area">
            {/* Unsorted tray */}
            <div className="unsorted-tray">
              <div className="tray-label">🧺 Collected Bugs — Drag to sort!</div>
              <div className="tray-items">
                {unsorted.map(item => {
                  const bt = caseData.bugTypes[item.typeIndex];
                  const isDrag = dragItem?.bugId === item.id;
                  return (
                    <div key={item.id}
                      className={`sort-bug ${isDrag ? 'dragging' : ''}`}
                      style={isDrag && containerRef.current ? {
                        position: 'fixed',
                        left: containerRef.current.getBoundingClientRect().left + dragItem.curX - 22,
                        top: containerRef.current.getBoundingClientRect().top + dragItem.curY - 22,
                        zIndex: 1000, pointerEvents: 'none',
                      } : {}}
                      onMouseDown={(e) => handleSortStart(e, item)}
                      onTouchStart={(e) => handleSortStart(e, item)}
                    >
                      {bt?.emoji ?? '?'}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sorting jars */}
            <div className="jars-row">
              {sortJars.map((jar, idx) => {
                const bt = caseData.bugTypes[jar.typeIndex];
                const isShaking = jar.wrongShake > 0 && Date.now() - jar.wrongShake < 500;
                return (
                  <div key={idx}
                    ref={el => { jarRefs.current[idx] = el; }}
                    className={`sort-jar ${jar.highlight ? 'hl' : ''} ${isShaking ? 'shake' : ''}`}
                    style={{ '--jar-color': bt?.color ?? '#888', '--jar-hue': bt?.hue ?? 0 } as React.CSSProperties}
                  >
                    <div className="jar-glass-fx" />
                    <div className="jar-top-label">{bt?.name ?? ''}</div>
                    <div className="jar-icon">{bt?.emoji ?? ''}</div>
                    <div className="jar-contents">
                      {jar.items.map((itemId, i) => (
                        <span key={itemId} className="jar-item" style={{ animationDelay: `${i * 0.05}s` }}>
                          {bt?.emoji ?? ''}
                        </span>
                      ))}
                    </div>
                    <div className="jar-count-badge">{jar.items.length}</div>
                  </div>
                );
              })}
            </div>

            {/* Sort feedback */}
            {sortFx && (
              <div className={`sort-fx ${sortFx.ok ? 'ok' : 'bad'}`} style={{ left: sortFx.x, top: sortFx.y }}>
                {sortFx.ok ? '✓' : '✗'}
              </div>
            )}
          </div>
        )}

        {/* ═══ GRAPH PHASE ═══ */}
        {(screen === 'graph' || screen === 'solve') && (
          <div className="graph-area">
            <div className="graph-card">
              <div className="graph-heading">📊 Picture Graph: {caseData.name}</div>
              <div className="graph-body">
                <div className="g-y-axis">
                  {[...Array(Math.max(...graphBars.map(b => b.count), 1) + 1)].map((_, i, arr) => (
                    <div key={i} className="g-y-label" style={{ bottom: `${(i / Math.max(arr.length - 1, 1)) * 100}%` }}>{i}</div>
                  ))}
                </div>
                <div className="g-cols">
                  {graphBars.map((bar, idx) => {
                    const bt = caseData.bugTypes[bar.typeIndex];
                    return (
                      <div key={idx} className="g-col">
                        <div className="g-col-stack">
                          {[...Array(bar.animCount)].map((_, i) => (
                            <div key={i} className="g-cell" style={{
                              '--cell-color': bt?.color ?? '#888', '--cell-hue': bt?.hue ?? 0,
                              animationDelay: `${i * 0.08}s`,
                            } as React.CSSProperties}>
                              {bt?.emoji ?? ''}
                            </div>
                          ))}
                        </div>
                        <div className="g-col-label">{bt?.emoji ?? ''} {bt?.name ?? ''}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="g-grid">
                  {[...Array(Math.max(...graphBars.map(b => b.count), 1) + 1)].map((_, i, arr) => (
                    <div key={i} className="g-gridline" style={{ bottom: `${(i / Math.max(arr.length - 1, 1)) * 100}%` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ SOLVE PHASE overlay ═══ */}
            {screen === 'solve' && questions[qIdx] && (
              <div className="solve-panel">
                <div className="notepad">
                  <div className="np-rings">
                    {[...Array(6)].map((_, i) => <div key={i} className="np-ring" />)}
                  </div>
                  <div className="np-body">
                    <div className="np-magnifier">🔍</div>
                    <div className="q-text">{questions[qIdx].text}</div>
                    <div className="q-options">
                      {questions[qIdx].answers.map((a, i) => (
                        <button key={i}
                          className={`q-opt ${selAnswer === i ? (ansResult === 'correct' ? 'correct' : ansResult === 'wrong' ? 'wrong' : 'sel') : ''} ${selAnswer !== null && i === questions[qIdx].correctIdx && ansResult === 'wrong' ? 'hint' : ''}`}
                          onClick={() => ansResult === null && answerQ(i)}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                    {ansResult === 'correct' && <div className="q-fb ok">🏅 Correct! Great detective work!</div>}
                    {ansResult === 'wrong' && <div className="q-fb bad">🤔 Look at the graph again...</div>}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          {screen === 'catch' && <span>🪺 Drag the net over bugs to catch them!</span>}
          {screen === 'sort' && <span>🏺 Drag each bug to the jar with the matching label</span>}
          {screen === 'graph' && <span>📊 Watch your data come to life!</span>}
          {screen === 'solve' && <span>🔍 Use the graph to answer the mystery question</span>}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════ STYLES ═══════════════════

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .dd {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden; position: relative;
    background: #1a3a2a;
  }

  /* ═══ GARDEN BACKGROUND ═══ */
  .garden-bg { position: absolute; inset: 0; overflow: hidden; z-index: 0; }

  .sky-layer {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0FF 35%, #E0F0E8 60%, #c8e6c9 80%, #4caf50 87%, #2e7d32 100%);
  }

  .sun-glow {
    position: absolute; top: -50px; right: 50px;
    width: 180px; height: 180px;
    background: radial-gradient(circle, rgba(255,235,59,0.5) 0%, rgba(255,200,50,0.15) 40%, transparent 70%);
    border-radius: 50%;
    pointer-events: none; z-index: 1;
    animation: sunPulse 4s ease-in-out infinite;
  }

  @keyframes sunPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.15); opacity: 1; }
  }

  .clouds-layer { position: absolute; top: 0; left: 0; right: 0; height: 40%; pointer-events: none; z-index: 1; }

  .cloud {
    position: absolute;
    background: rgba(255,255,255,0.7);
    border-radius: 50px;
    filter: blur(2px);
  }
  .cloud::before, .cloud::after {
    content: ''; position: absolute;
    background: rgba(255,255,255,0.7);
    border-radius: 50%;
  }
  .c1 { width: 120px; height: 40px; top: 8%; left: 10%; animation: cloudFloat 40s linear infinite; }
  .c1::before { width: 50px; height: 50px; top: -20px; left: 20px; }
  .c1::after { width: 40px; height: 40px; top: -15px; left: 60px; }
  .c2 { width: 90px; height: 30px; top: 14%; left: 55%; animation: cloudFloat 55s linear infinite; animation-delay: -18s; }
  .c2::before { width: 40px; height: 40px; top: -18px; left: 15px; }
  .c2::after { width: 30px; height: 30px; top: -12px; left: 50px; }
  .c3 { width: 100px; height: 35px; top: 5%; left: 80%; animation: cloudFloat 48s linear infinite; animation-delay: -10s; }
  .c3::before { width: 45px; height: 45px; top: -20px; left: 25px; }
  .c3::after { width: 35px; height: 35px; top: -14px; left: 55px; }

  @keyframes cloudFloat { 0% { transform: translateX(0); } 100% { transform: translateX(-130vw); } }

  .grass {
    position: absolute; bottom: 0; left: 0; right: 0; height: 22%;
    background: linear-gradient(180deg, #4caf50 0%, #388e3c 50%, #2e7d32 100%);
    z-index: 2;
  }
  .grass::before {
    content: ''; position: absolute; top: -10px; left: 0; right: 0; height: 20px;
    background: repeating-conic-gradient(#4caf50 0% 25%, transparent 0% 50%) 0 0 / 18px 20px;
    opacity: 0.6;
  }

  .fence-row {
    position: absolute; bottom: 18%; left: 0; right: 0; height: 45px; z-index: 3;
    background: repeating-linear-gradient(90deg, transparent 0px, transparent 22px, #8d6e63 22px, #8d6e63 27px);
    border-top: 4px solid #6d4c41; border-bottom: 3px solid #5d4037; opacity: 0.35;
  }

  .bg-flower {
    position: absolute; font-size: 1.6rem; z-index: 4;
    animation: flowerSway 3s ease-in-out infinite; transform-origin: bottom center;
  }
  @keyframes flowerSway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }

  .garden-rock { position: absolute; font-size: 1.2rem; z-index: 4; opacity: 0.6; }

  .bg-bug-float {
    position: absolute; font-size: 1.6rem; z-index: 5; pointer-events: none;
    animation: bugFloatAmbient 5s ease-in-out infinite;
  }
  @keyframes bugFloatAmbient {
    0%, 100% { transform: translateY(0) translateX(0) rotate(-5deg); }
    25% { transform: translateY(-12px) translateX(8px) rotate(3deg); }
    50% { transform: translateY(-5px) translateX(-6px) rotate(-2deg); }
    75% { transform: translateY(-15px) translateX(4px) rotate(5deg); }
  }

  /* ═══ PARTICLES ═══ */
  .ptcl-layer { position: absolute; inset: 0; pointer-events: none; z-index: 100; }
  .ptcl { position: absolute; border-radius: 50%; pointer-events: none; }
  .ptcl.leaf { border-radius: 50% 0 50% 0; }

  /* ═══ INTRO SCREEN ═══ */
  .intro-screen { height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }

  .intro-content { position: relative; z-index: 20; text-align: center; padding: 1.5rem; max-width: 520px; }

  .intro-logo { display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.3rem; }

  .intro-logo h1 {
    font-size: clamp(1.8rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #fbbf24, #f97316, #ef4444);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .logo-icon { font-size: 2.2rem; }
  .bounce-1 { animation: iconBounce 2s ease-in-out infinite; }
  .bounce-2 { animation: iconBounce 2s ease-in-out infinite 0.4s; }
  @keyframes iconBounce { 0%, 100% { transform: translateY(0) rotate(-5deg); } 50% { transform: translateY(-10px) rotate(5deg); } }

  .intro-sub { color: #2e7d32; font-size: 1.05rem; font-weight: 700; margin-bottom: 1.5rem; text-shadow: 0 1px 2px rgba(255,255,255,0.6); }

  .intro-card {
    background: rgba(255,255,255,0.88); border: 2px solid rgba(139,69,19,0.2);
    border-radius: 20px; padding: 1.5rem; margin-bottom: 1.5rem;
    backdrop-filter: blur(10px); box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
  .intro-card h3 { color: #4a2810; font-size: 1.15rem; margin-bottom: 1rem; }

  .intro-step { display: flex; align-items: center; gap: 0.7rem; margin-bottom: 0.7rem; text-align: left; }
  .intro-step:last-child { margin-bottom: 0; }
  .step-num {
    width: 26px; height: 26px;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: white; font-weight: 800; font-size: 0.8rem; flex-shrink: 0;
  }
  .step-ico { font-size: 1.3rem; flex-shrink: 0; }
  .intro-step p { color: #4a2810; font-size: 0.88rem; line-height: 1.3; }

  .start-btn, .next-btn {
    display: inline-flex; align-items: center; gap: 0.7rem;
    padding: 1rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #f97316, #ef4444);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(249,115,22,0.4);
  }
  .start-btn:hover, .next-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(249,115,22,0.5); }

  .board-btn {
    display: block; margin: 1rem auto 0; padding: 0.5rem 1.2rem;
    font-family: 'Nunito', sans-serif; font-size: 0.85rem; font-weight: 700;
    color: #4a2810; background: rgba(255,255,255,0.6); border: 2px solid rgba(139,69,19,0.3);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .board-btn:hover { background: rgba(255,255,255,0.9); }

  .menu-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #666;
    background: transparent; border: 2px solid rgba(0,0,0,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .menu-btn:hover { border-color: rgba(0,0,0,0.3); color: #333; }

  /* ═══ GAME HEADER ═══ */
  .game-screen { height: 100%; display: flex; flex-direction: column; position: relative; }

  .game-hdr {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.8rem; background: rgba(255,255,255,0.88);
    backdrop-filter: blur(10px); z-index: 50; border-bottom: 2px solid rgba(0,0,0,0.06);
  }
  .hdr-left, .hdr-right { display: flex; align-items: center; gap: 0.5rem; }

  .back-btn {
    width: 34px; height: 34px; background: rgba(0,0,0,0.08);
    border: none; border-radius: 10px; color: #4a2810; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .back-btn:hover { background: rgba(0,0,0,0.15); }

  .case-pill {
    padding: 0.35rem 0.7rem; background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 14px; font-weight: 700; color: white; font-size: 0.8rem;
  }

  .phase-track { display: flex; align-items: center; gap: 0.2rem; }
  .ph-dot {
    width: 24px; height: 24px; border-radius: 50%;
    background: rgba(0,0,0,0.08); display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; transition: all 0.3s ease;
  }
  .ph-dot.active { background: linear-gradient(135deg, #f97316, #ef4444); box-shadow: 0 2px 8px rgba(249,115,22,0.4); transform: scale(1.15); }
  .ph-dot.done { background: #22c55e; }
  .ph-line { width: 12px; height: 2px; background: rgba(0,0,0,0.1); border-radius: 1px; }

  .score-pill {
    padding: 0.35rem 0.7rem; background: rgba(251,191,36,0.15);
    border-radius: 14px; color: #b45309; font-weight: 800; font-size: 0.85rem;
  }

  .status-bar {
    display: flex; align-items: center; justify-content: center; gap: 1.2rem;
    padding: 0.4rem 0.8rem; background: rgba(255,255,255,0.7);
    backdrop-filter: blur(5px); font-size: 0.85rem; font-weight: 700; color: #4a2810; z-index: 20;
  }
  .timer-display { color: #ef4444; font-weight: 800; }
  .catch-count { color: #2e7d32; }

  /* ═══ CATCH PHASE ═══ */
  .catch-area { flex: 1; position: relative; overflow: hidden; z-index: 10; touch-action: none; cursor: none; }

  .bug {
    position: absolute; width: ${BUG_SIZE}px; height: ${BUG_SIZE}px;
    display: flex; align-items: center; justify-content: center;
    z-index: 15; pointer-events: none;
    transition: none;
  }
  .bug-emoji { font-size: 2rem; position: relative; z-index: 2; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)); }
  .bug-shadow {
    position: absolute; bottom: -4px; width: 70%; height: 20%;
    background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%);
    border-radius: 50%;
  }
  .bug-glow {
    position: absolute; inset: -6px; border-radius: 50%;
    background: radial-gradient(circle, hsla(var(--bug-hue),80%,65%,0.3) 0%, transparent 70%);
    animation: bugGlow 2s ease-in-out infinite;
    pointer-events: none;
  }
  @keyframes bugGlow { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.3); opacity: 0.9; } }

  .bug.catching {
    animation: bugCatch 0.4s ease-in forwards;
    pointer-events: none;
  }
  @keyframes bugCatch {
    0% { transform: translate(-50%,-50%) scale(1); }
    30% { transform: translate(-50%,-50%) scale(1.3) rotate(15deg); }
    100% { transform: translate(-50%,-50%) scale(0.2) rotate(-30deg); opacity: 0; }
  }

  /* Bug movement animations */
  .bug.float .bug-emoji { animation: bugFloat 2s ease-in-out infinite; }
  @keyframes bugFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

  .bug.hop .bug-emoji { animation: bugHop 1.5s ease-in-out infinite; }
  @keyframes bugHop { 0%, 100% { transform: translateY(0); } 40% { transform: translateY(-8px); } 60% { transform: translateY(-6px); } }

  .bug.zigzag .bug-emoji { animation: bugZigzag 1s ease-in-out infinite; }
  @keyframes bugZigzag { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(3px); } 75% { transform: translateX(-3px); } }

  .bug.crawl .bug-emoji { animation: bugCrawl 0.8s ease-in-out infinite; }
  @keyframes bugCrawl { 0%, 100% { transform: scaleX(1) scaleY(1); } 50% { transform: scaleX(1.05) scaleY(0.95); } }

  .bug.march .bug-emoji { animation: bugMarch 0.4s linear infinite; }
  @keyframes bugMarch { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }

  .bug.wander .bug-emoji { animation: bugWander 3s ease-in-out infinite; }
  @keyframes bugWander { 0%, 100% { transform: rotate(0deg); } 33% { transform: rotate(5deg); } 66% { transform: rotate(-5deg); } }

  /* ═══ NET ═══ */
  .net {
    position: absolute; transform: translate(-50%, -50%);
    width: ${NET_SIZE}px; height: ${NET_SIZE + 30}px;
    z-index: 50; pointer-events: none;
    transition: none;
  }
  .net-handle {
    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 6px; height: 55px;
    background: linear-gradient(180deg, #8d6e63, #6d4c41);
    border-radius: 3px; z-index: 3;
    box-shadow: 1px 0 3px rgba(0,0,0,0.2);
  }
  .net-rim {
    position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
    width: ${NET_SIZE - 10}px; height: ${NET_SIZE - 10}px;
    border: 5px solid #8d6e63;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3), inset 0 1px 3px rgba(0,0,0,0.1);
    z-index: 2;
  }
  .net-mesh {
    position: absolute; top: 58px; left: 50%; transform: translateX(-50%);
    width: ${NET_SIZE - 26}px; height: ${NET_SIZE - 20}px;
    background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(200,230,200,0.25) 100%);
    border-radius: 50% 50% 45% 45%;
    border: 2px dashed rgba(139,180,139,0.4);
    z-index: 1;
  }
  .net-catch-zone {
    position: absolute; top: 55px; left: 50%; transform: translateX(-50%);
    width: ${NET_CATCH_RADIUS * 2}px; height: ${NET_CATCH_RADIUS * 2}px;
    border-radius: 50%; border: 2px dashed rgba(76,175,80,0.25);
    pointer-events: none;
  }
  .net.swoop .net-rim { animation: netSwoop 0.3s ease; }
  .net.swoop .net-mesh { animation: netMeshSwoop 0.3s ease; }
  @keyframes netSwoop {
    0% { transform: translateX(-50%) scale(1); }
    50% { transform: translateX(-50%) scale(0.9) rotate(5deg); }
    100% { transform: translateX(-50%) scale(1); }
  }
  @keyframes netMeshSwoop {
    0% { transform: translateX(-50%) scaleY(1); }
    40% { transform: translateX(-50%) scaleY(0.85); }
    100% { transform: translateX(-50%) scaleY(1); }
  }

  /* ═══ JAR PREVIEW ═══ */
  .jar-preview {
    position: absolute; bottom: 6%; left: 50%; transform: translateX(-50%);
    z-index: 30; pointer-events: none;
  }
  .jar-preview-glass {
    background: rgba(255,255,255,0.85); border-radius: 18px;
    padding: 0.5rem 1.2rem; border: 2px solid rgba(139,69,19,0.2);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12); backdrop-filter: blur(8px);
    display: flex; flex-direction: column; align-items: center; gap: 0.2rem;
  }
  .jar-label { font-weight: 800; color: #4a2810; font-size: 0.85rem; }
  .jar-bugs { display: flex; gap: 0.8rem; font-size: 0.85rem; color: #666; }
  .jar-bug-count { font-weight: 600; display: flex; align-items: center; gap: 0.2rem; }
  .jar-bug-count strong { color: #4a2810; }

  /* ═══ SORT PHASE ═══ */
  .sort-area { flex: 1; display: flex; flex-direction: column; z-index: 10; position: relative; touch-action: none; }

  .unsorted-tray {
    padding: 0.6rem 0.8rem; background: rgba(255,255,255,0.8);
    backdrop-filter: blur(5px); border-bottom: 2px solid rgba(0,0,0,0.06);
  }
  .tray-label { font-size: 0.8rem; font-weight: 700; color: #4a2810; margin-bottom: 0.4rem; text-align: center; }
  .tray-items { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.4rem; min-height: 48px; }

  .sort-bug {
    width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; background: rgba(255,255,255,0.9);
    border: 2px solid rgba(0,0,0,0.1); border-radius: 12px; cursor: grab;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .sort-bug:active, .sort-bug.dragging {
    cursor: grabbing; transform: scale(1.18); box-shadow: 0 8px 24px rgba(0,0,0,0.2); z-index: 1000;
  }

  .jars-row { flex: 1; display: flex; justify-content: center; align-items: stretch; gap: 0.8rem; padding: 0.8rem; }

  .sort-jar {
    flex: 1; max-width: 150px; display: flex; flex-direction: column; align-items: center;
    padding: 0.7rem; border-radius: 20px; position: relative; overflow: hidden;
    transition: all 0.3s ease;
    background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.3) 100%);
    border: 3px solid rgba(0,0,0,0.1);
    box-shadow: inset 0 2px 10px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.08);
  }
  .sort-jar.hl {
    border-color: var(--jar-color); background: rgba(255,255,255,0.5);
    transform: scale(1.05); box-shadow: 0 0 20px hsla(var(--jar-hue),60%,50%,0.35);
  }
  .sort-jar.shake { animation: jarShake 0.4s ease; }
  @keyframes jarShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px) rotate(-2deg); }
    40% { transform: translateX(6px) rotate(2deg); }
    60% { transform: translateX(-4px) rotate(-1deg); }
    80% { transform: translateX(4px) rotate(1deg); }
  }

  .jar-glass-fx {
    position: absolute; inset: 0; border-radius: 20px; pointer-events: none;
    background: linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.15) 100%);
  }
  .jar-top-label { font-size: 0.75rem; font-weight: 700; color: #4a2810; margin-bottom: 0.2rem; position: relative; z-index: 2; text-align: center; }
  .jar-icon { font-size: 1.4rem; margin-bottom: 0.3rem; position: relative; z-index: 2; }
  .jar-contents {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 0.15rem;
    flex: 1; align-content: flex-end; position: relative; z-index: 2;
  }
  .jar-item { font-size: 1.1rem; animation: jarItemDrop 0.3s ease forwards; }
  @keyframes jarItemDrop {
    0% { transform: translateY(-8px); opacity: 0; }
    60% { transform: translateY(2px); }
    100% { transform: translateY(0); opacity: 1; }
  }
  .jar-count-badge {
    font-weight: 800; color: #4a2810; font-size: 1rem; margin-top: 0.2rem;
    position: relative; z-index: 2;
    background: rgba(255,255,255,0.5); border-radius: 10px; padding: 0.1rem 0.5rem;
  }

  .sort-fx {
    position: absolute; transform: translate(-50%,-50%);
    font-size: 2rem; font-weight: 900; z-index: 200; pointer-events: none;
  }
  .sort-fx.ok { color: #22c55e; animation: fxPop 0.6s ease forwards; }
  .sort-fx.bad { color: #ef4444; animation: fxShake 0.5s ease forwards; }
  @keyframes fxPop {
    0% { transform: translate(-50%,-50%) scale(0); opacity: 0; }
    30% { transform: translate(-50%,-50%) scale(1.5); opacity: 1; }
    100% { transform: translate(-50%,-80%) scale(1); opacity: 0; }
  }
  @keyframes fxShake {
    0%, 100% { transform: translate(-50%,-50%) rotate(0); opacity: 1; }
    20% { transform: translate(-40%,-50%) rotate(8deg); }
    40% { transform: translate(-60%,-50%) rotate(-8deg); }
    60% { transform: translate(-45%,-50%) rotate(4deg); }
    80% { transform: translate(-55%,-50%) rotate(-4deg); opacity: 0.4; }
    100% { opacity: 0; }
  }

  /* ═══ GRAPH PHASE ═══ */
  .graph-area { flex: 1; display: flex; flex-direction: column; z-index: 10; padding: 0.5rem; gap: 0.5rem; overflow-y: auto; }

  .graph-card {
    background: rgba(255,255,255,0.92); border-radius: 20px;
    padding: 1rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border: 2px solid rgba(0,0,0,0.05);
  }
  .graph-heading { text-align: center; font-weight: 800; font-size: 1.05rem; color: #4a2810; margin-bottom: 0.8rem; }

  .graph-body { display: flex; align-items: flex-end; position: relative; min-height: 150px; padding-left: 28px; padding-bottom: 28px; }

  .g-y-axis { position: absolute; left: 0; top: 0; bottom: 28px; width: 24px; }
  .g-y-label { position: absolute; right: 0; font-size: 0.65rem; font-weight: 700; color: #999; transform: translateY(50%); }

  .g-cols { flex: 1; display: flex; justify-content: space-evenly; align-items: flex-end; position: relative; z-index: 5; }

  .g-col { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }

  .g-col-stack { display: flex; flex-direction: column-reverse; align-items: center; gap: 2px; }

  .g-cell {
    width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; background: hsla(var(--cell-hue),70%,92%,1);
    border: 2px solid hsla(var(--cell-hue),60%,70%,0.5);
    border-radius: 8px; animation: cellPop 0.3s ease forwards;
  }
  @keyframes cellPop {
    0% { transform: scale(0) translateY(10px); opacity: 0; }
    60% { transform: scale(1.15) translateY(-3px); }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }

  .g-col-label { font-size: 0.65rem; font-weight: 700; color: #666; text-align: center; max-width: 65px; word-wrap: break-word; }

  .g-grid { position: absolute; left: 28px; right: 0; top: 0; bottom: 28px; pointer-events: none; }
  .g-gridline { position: absolute; left: 0; right: 0; height: 1px; background: rgba(0,0,0,0.07); }

  /* ═══ SOLVE PHASE ═══ */
  .solve-panel { z-index: 30; padding: 0 0.5rem; }

  .notepad {
    background: #fffde7; border-radius: 16px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    position: relative; overflow: hidden; border: 2px solid #e0d6a0;
  }
  .np-rings { position: absolute; top: 0; left: 8px; display: flex; gap: 10px; z-index: 5; }
  .np-ring { width: 12px; height: 18px; border: 3px solid #999; border-radius: 0 0 6px 6px; border-top: none; margin-top: -3px; }
  .np-body { padding: 1.2rem 1rem 1rem; position: relative; }
  .np-magnifier { position: absolute; top: 8px; right: 10px; font-size: 1.2rem; animation: magBob 2s ease-in-out infinite; }
  @keyframes magBob { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg) translateY(-3px); } }

  .q-text { font-size: 1.05rem; font-weight: 800; color: #4a2810; margin-bottom: 0.8rem; line-height: 1.4; }

  .q-options { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; }

  .q-opt {
    padding: 0.6rem 0.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; font-weight: 700; color: #4a2810;
    background: white; border: 2px solid rgba(0,0,0,0.1);
    border-radius: 12px; cursor: pointer; transition: all 0.2s ease;
  }
  .q-opt:hover { border-color: #f97316; background: #fff7ed; }
  .q-opt.correct { background: #dcfce7; border-color: #22c55e; color: #166534; animation: qCorrect 0.3s ease; }
  @keyframes qCorrect { 0% { transform: scale(1); } 50% { transform: scale(1.06); } 100% { transform: scale(1); } }
  .q-opt.wrong { background: #fef2f2; border-color: #ef4444; color: #991b1b; animation: qWrong 0.4s ease; }
  @keyframes qWrong { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-5px); } 40% { transform: translateX(5px); } 60% { transform: translateX(-3px); } 80% { transform: translateX(3px); } }
  .q-opt.hint { border-color: #22c55e; background: #f0fdf4; animation: qHint 0.8s ease-in-out infinite; }
  @keyframes qHint { 0%, 100% { box-shadow: 0 0 0 rgba(34,197,94,0); } 50% { box-shadow: 0 0 12px rgba(34,197,94,0.3); } }

  .q-fb {
    margin-top: 0.7rem; padding: 0.5rem 0.8rem; border-radius: 10px;
    font-weight: 700; font-size: 0.85rem; animation: fbSlide 0.3s ease;
  }
  @keyframes fbSlide { 0% { transform: translateY(8px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
  .q-fb.ok { background: #dcfce7; color: #166534; border: 1px solid #86efac; }
  .q-fb.bad { background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5; }

  /* ═══ SOLVED SCREEN ═══ */
  .solved-screen { height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }

  .confetti-shower { position: absolute; inset: 0; pointer-events: none; z-index: 10; overflow: hidden; }
  .confetti-bit {
    position: absolute; top: -10px; width: 8px; height: 12px;
    border-radius: 2px; animation: confDrop 3s ease-in forwards;
  }
  @keyframes confDrop { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }

  .solved-content { position: relative; z-index: 20; text-align: center; padding: 1.5rem; max-width: 440px; }

  .badge-anim { position: relative; display: inline-block; margin-bottom: 0.8rem; }
  .badge-glow-ring {
    position: absolute; inset: -28px;
    background: radial-gradient(circle, rgba(251,191,36,0.5) 0%, transparent 70%);
    border-radius: 50%; animation: bGlow 2s ease-in-out infinite;
  }
  @keyframes bGlow { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.3); opacity: 1; } }
  .big-badge { font-size: 4.5rem; animation: bSpin 1s ease-out; position: relative; z-index: 2; }
  @keyframes bSpin { 0% { transform: scale(0) rotate(-180deg); opacity: 0; } 60% { transform: scale(1.2) rotate(10deg); opacity: 1; } 100% { transform: scale(1) rotate(0deg); } }

  .solved-title { font-size: clamp(1.6rem, 6vw, 2.3rem); font-weight: 900; color: #4a2810; text-shadow: 0 2px 4px rgba(255,255,255,0.5); margin-bottom: 0.2rem; }
  .solved-sub { font-size: 0.95rem; color: #666; font-weight: 600; margin-bottom: 0.5rem; }
  .rank-label {
    display: inline-block; padding: 0.3rem 1rem; margin-bottom: 1rem;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    border-radius: 20px; color: white; font-weight: 800; font-size: 0.9rem;
  }

  .solved-stats { display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.2rem; }
  .stat-box { display: flex; flex-direction: column; align-items: center; }
  .stat-ico { font-size: 1.3rem; }
  .stat-num { font-size: 1.8rem; font-weight: 900; color: #4a2810; }
  .stat-lbl { font-size: 0.75rem; color: #888; font-weight: 600; }

  .solved-btns { display: flex; flex-direction: column; align-items: center; gap: 0.7rem; }

  /* ═══ COMPLETE SCREEN ═══ */
  .complete-screen { height: 100%; display: flex; align-items: center; justify-content: center; position: relative; overflow: auto; }
  .complete-content { position: relative; z-index: 20; text-align: center; padding: 1.5rem; max-width: 550px; width: 100%; }
  .complete-title { font-size: 1.8rem; color: #4a2810; text-shadow: 0 2px 4px rgba(255,255,255,0.5); margin-bottom: 0.5rem; }
  .final-rank {
    display: inline-block; padding: 0.3rem 1.2rem; margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    border-radius: 20px; color: white; font-weight: 800; font-size: 1rem;
  }
  .final-score { font-size: 1.1rem; font-weight: 800; color: #4a2810; margin-bottom: 1.2rem; }

  .badges-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
    gap: 0.8rem; margin-bottom: 1.2rem;
  }
  .badge-card {
    background: rgba(255,255,255,0.88); border-radius: 14px;
    padding: 0.8rem 0.4rem; border: 2px solid rgba(251,191,36,0.3);
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    display: flex; flex-direction: column; align-items: center; gap: 0.15rem;
    animation: bcAppear 0.5s ease;
  }
  @keyframes bcAppear { 0% { transform: scale(0); opacity: 0; } 60% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } }
  .bc-star { font-size: 1.5rem; }
  .bc-emoji { font-size: 1.3rem; }
  .bc-case { font-size: 0.65rem; color: #999; font-weight: 600; }
  .bc-name { font-size: 0.75rem; color: #4a2810; font-weight: 700; }
  .bc-rank { font-size: 0.6rem; color: #b45309; font-weight: 600; }
  .no-badges { color: #999; font-style: italic; grid-column: 1 / -1; padding: 2rem 0; }
  .complete-btns { display: flex; flex-direction: column; align-items: center; gap: 0.7rem; }

  /* ═══ BOTTOM BAR ═══ */
  .bottom-bar {
    padding: 0.5rem; background: rgba(255,255,255,0.7);
    backdrop-filter: blur(5px); text-align: center; z-index: 20;
    border-top: 1px solid rgba(0,0,0,0.05);
    font-size: 0.8rem; font-weight: 600; color: #8b7355;
  }

  /* ═══ NIGHT THEME ═══ */
  .game-screen.night .game-hdr { background: rgba(30,30,60,0.9); border-color: rgba(255,255,255,0.1); }
  .game-screen.night .case-pill { background: linear-gradient(135deg, #7c3aed, #4f46e5); }
  .game-screen.night .score-pill { background: rgba(251,191,36,0.2); color: #fbbf24; }
  .game-screen.night .status-bar { background: rgba(30,30,60,0.7); color: #c4b5fd; }
  .game-screen.night .bottom-bar { background: rgba(30,30,60,0.7); color: #a5b4fc; }
  .game-screen.night .back-btn { color: white; background: rgba(255,255,255,0.1); }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 600px) {
    .phase-track { display: none; }
    .intro-logo h1 { font-size: 1.5rem; }
    .logo-icon { font-size: 1.6rem; }
    .start-btn { padding: 0.8rem 1.6rem; font-size: 1rem; }
    .sort-jar { padding: 0.4rem; max-width: 95px; }
    .jar-top-label { font-size: 0.65rem; }
    .jar-icon { font-size: 1.1rem; }
    .jar-item { font-size: 0.85rem; }
    .g-cell { width: 28px; height: 28px; font-size: 0.95rem; }
    .q-options { grid-template-columns: 1fr; }
    .q-text { font-size: 0.9rem; }
    .sort-bug { width: 38px; height: 38px; font-size: 1.3rem; }
    .solved-stats { gap: 1.2rem; }
    .bug-emoji { font-size: 1.6rem; }
    .jar-preview-glass { padding: 0.4rem 0.8rem; }
    .jar-bugs { gap: 0.5rem; font-size: 0.75rem; }
  }

  @media (max-width: 380px) {
    .game-hdr { padding: 0.3rem 0.5rem; }
    .case-pill { font-size: 0.7rem; padding: 0.25rem 0.5rem; }
    .score-pill { font-size: 0.75rem; }
    .status-bar { font-size: 0.75rem; padding: 0.3rem 0.5rem; }
    .g-cell { width: 24px; height: 24px; font-size: 0.8rem; }
    .g-col-label { font-size: 0.55rem; max-width: 48px; }
  }
`;
