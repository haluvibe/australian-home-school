"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// WORD WORM  --  CVC Spelling Game
// Foundation / Year 1 English
// Curriculum: "Spell most consonant-vowel-consonant words"
//             "Know and use the most common sounds represented by letters"
// ============================================================

interface WordWormProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";

interface FallingLetter {
  id: number;
  letter: string;
  x: number;
  y: number;
  speed: number;
  wobbleOffset: number;
  wobbleSpeed: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  opacity: number;
  hue: number;
  isCorrect: boolean;
}

interface WormSegment {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
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
  color: string;
  type: "sparkle" | "dirt" | "confetti" | "star" | "shatter";
  rotation: number;
  rotationSpeed: number;
}

interface Firefly {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  size: number;
  hue: number;
}

interface FloatingRoot {
  id: number;
  x: number;
  startY: number;
  segments: number;
  amplitude: number;
  phase: number;
  thickness: number;
  color: string;
}

interface LetterFlyEffect {
  id: number;
  letter: string;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  progress: number;
}

interface ShatterPiece {
  id: number;
  letter: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  size: number;
}

interface ComboState {
  count: number;
  timer: number;
  lastTime: number;
}

// CVC word banks grouped by difficulty
const WORD_BANK_EASY: string[] = [
  "cat", "bat", "hat", "mat", "rat", "sat", "pat", "fat",
  "dog", "log", "fog", "hog", "jog", "bog",
  "pin", "bin", "din", "fin", "tin", "win",
  "cup", "pup", "bus", "sun", "run", "fun", "bun", "gun",
  "bed", "red", "led", "fed", "hen", "pen", "ten", "men",
  "big", "dig", "fig", "pig", "wig", "jig",
  "hot", "pot", "not", "got", "dot", "lot",
  "bug", "dug", "hug", "mug", "rug", "tug",
];

const WORD_BANK_MEDIUM: string[] = [
  "ship", "chin", "chop", "thin", "then", "this",
  "frog", "trip", "drum", "slug", "snap", "swim",
  "plum", "clap", "grab", "drop", "stop", "step",
  "lamp", "jump", "bump", "camp", "damp", "dump",
  "nest", "best", "rest", "test", "west", "vest",
  "milk", "silk", "belt", "felt", "melt", "wilt",
];

const WORD_BANK_HARD: string[] = [
  "crisp", "brand", "blend", "frost", "grump", "trunk",
  "stamp", "clamp", "crunch", "splash", "string", "spring",
  "strum", "shrimp", "script", "strict", "strand", "sprint",
];

const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
const VOWELS = "aeiou";

const WORM_HEAD = "\uD83D\uDC1B";
const WORM_BODY = "\uD83D\uDFE2";
const UNDERGROUND_CRITTERS = ["\uD83D\uDC1C", "\uD83E\uDEB1", "\uD83D\uDC0C", "\uD83D\uDD77\uFE0F", "\uD83E\uDD97"];

let idCounter = 0;
const nextId = () => ++idCounter;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function WordWorm({ onExit }: WordWormProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentWord, setCurrentWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [fallingLetters, setFallingLetters] = useState<FallingLetter[]>([]);
  const [wormSegments, setWormSegments] = useState<WormSegment[]>([]);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [wordsNeeded, setWordsNeeded] = useState(3);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const [letterFly, setLetterFly] = useState<LetterFlyEffect | null>(null);
  const [shatterPieces, setShatterPieces] = useState<ShatterPiece[]>([]);
  const [combo, setCombo] = useState<ComboState>({ count: 0, timer: 0, lastTime: 0 });
  const [flashColor, setFlashColor] = useState<string | null>(null);
  const [wordCompleteText, setWordCompleteText] = useState<string | null>(null);
  const [floatingRoots] = useState<FloatingRoot[]>(() => {
    const roots: FloatingRoot[] = [];
    for (let i = 0; i < 8; i++) {
      roots.push({
        id: i,
        x: Math.random() * 100,
        startY: Math.random() * 30,
        segments: 5 + Math.floor(Math.random() * 8),
        amplitude: 10 + Math.random() * 20,
        phase: Math.random() * Math.PI * 2,
        thickness: 1.5 + Math.random() * 2.5,
        color: `rgba(${60 + Math.floor(Math.random() * 40)}, ${30 + Math.floor(Math.random() * 30)}, ${10 + Math.floor(Math.random() * 20)}, ${0.2 + Math.random() * 0.15})`,
      });
    }
    return roots;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const timeRef = useRef(0);
  const wordDisplayRef = useRef<HTMLDivElement>(null);

  // Refs for values needed in animation loop without re-triggering effects
  const fallingLettersRef = useRef(fallingLetters);
  fallingLettersRef.current = fallingLetters;
  const particlesRef = useRef(particles);
  particlesRef.current = particles;
  const firefliesRef = useRef(fireflies);
  firefliesRef.current = fireflies;
  const letterFlyRef = useRef(letterFly);
  letterFlyRef.current = letterFly;
  const shatterPiecesRef = useRef(shatterPieces);
  shatterPiecesRef.current = shatterPieces;
  const wormSegmentsRef = useRef(wormSegments);
  wormSegmentsRef.current = wormSegments;

  const getWordBank = useCallback((lvl: number): string[] => {
    if (lvl <= 3) return WORD_BANK_EASY;
    if (lvl <= 6) return [...WORD_BANK_EASY, ...WORD_BANK_MEDIUM];
    return [...WORD_BANK_EASY, ...WORD_BANK_MEDIUM, ...WORD_BANK_HARD];
  }, []);

  const pickWord = useCallback((lvl: number): string => {
    const bank = getWordBank(lvl);
    return bank[Math.floor(Math.random() * bank.length)];
  }, [getWordBank]);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 400, height: 600 };
  }, []);

  // Spawn particles
  const spawnParticles = useCallback((x: number, y: number, count: number, type: Particle["type"], baseColor?: string) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      const colors = type === "sparkle"
        ? ["#4ade80", "#22c55e", "#a3e635", "#facc15"]
        : type === "shatter"
        ? ["#f87171", "#ef4444", "#dc2626", "#fca5a5"]
        : type === "confetti"
        ? ["#f87171", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6"]
        : type === "star"
        ? ["#facc15", "#fbbf24", "#f59e0b"]
        : ["#8b6d3f", "#6b5b3a", "#a08060"];
      newParticles.push({
        id: nextId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === "confetti" ? 3 : 0),
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        size: type === "confetti" ? 4 + Math.random() * 6 : type === "star" ? 8 + Math.random() * 8 : 3 + Math.random() * 4,
        color: baseColor || colors[Math.floor(Math.random() * colors.length)],
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnLetter = useCallback((word: string, idx: number, lvl: number) => {
    const size = getContainerSize();
    const correctLetter = word[idx];
    const numDistractors = Math.min(2 + Math.floor(lvl / 2), 5);
    const letters: FallingLetter[] = [];
    const letterHues = { a: 120, e: 200, i: 280, o: 40, u: 320 };

    // Always include the correct letter
    const hue = VOWELS.includes(correctLetter)
      ? (letterHues as Record<string, number>)[correctLetter] || 120
      : 80 + Math.random() * 60;

    letters.push({
      id: nextId(),
      letter: correctLetter,
      x: 50 + Math.random() * (size.width - 100),
      y: -50,
      speed: 0.8 + lvl * 0.12,
      wobbleOffset: Math.random() * Math.PI * 2,
      wobbleSpeed: 1.5 + Math.random() * 1.5,
      rotation: (Math.random() - 0.5) * 30,
      rotationSpeed: (Math.random() - 0.5) * 2,
      scale: 1,
      opacity: 1,
      hue,
      isCorrect: true,
    });

    // Add distractors
    for (let i = 0; i < numDistractors; i++) {
      const isVowel = VOWELS.includes(correctLetter);
      const pool = isVowel ? VOWELS : CONSONANTS;
      let distractor = pool[Math.floor(Math.random() * pool.length)];
      if (distractor === correctLetter && pool.length > 1) {
        const chars = pool.split("").filter((c) => c !== correctLetter);
        distractor = chars[Math.floor(Math.random() * chars.length)];
      }
      letters.push({
        id: nextId(),
        letter: distractor,
        x: 40 + Math.random() * (size.width - 80),
        y: -50 - Math.random() * 80,
        speed: 0.7 + lvl * 0.1 + Math.random() * 0.4,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 1 + Math.random() * 2,
        rotation: (Math.random() - 0.5) * 40,
        rotationSpeed: (Math.random() - 0.5) * 3,
        scale: 1,
        opacity: 1,
        hue: 20 + Math.random() * 40,
        isCorrect: false,
      });
    }

    setFallingLetters(prev => [...prev, ...letters]);
  }, [getContainerSize]);

  // Initialize fireflies
  const initFireflies = useCallback(() => {
    const size = getContainerSize();
    const flies: Firefly[] = [];
    for (let i = 0; i < 6; i++) {
      flies.push({
        id: nextId(),
        x: Math.random() * size.width,
        y: Math.random() * size.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        phase: Math.random() * Math.PI * 2,
        size: 3 + Math.random() * 4,
        hue: 60 + Math.random() * 80,
      });
    }
    setFireflies(flies);
  }, [getContainerSize]);

  const initLevel = useCallback((lvl: number) => {
    const word = pickWord(lvl);
    const needed = Math.min(3 + Math.floor(lvl / 2), 7);
    setCurrentWord(word);
    setLetterIndex(0);
    setCollectedLetters([]);
    setWordsCompleted(0);
    setWordsNeeded(needed);
    setFallingLetters([]);
    setParticles([]);
    setShatterPieces([]);
    setLetterFly(null);
    setShakeScreen(false);
    setShowHint(true);
    setFlashColor(null);
    setWordCompleteText(null);
    setCombo({ count: 0, timer: 0, lastTime: 0 });

    // Init worm
    const size = getContainerSize();
    const baseX = size.width / 2;
    const baseY = size.height - 40;
    const segments: WormSegment[] = [];
    for (let i = 0; i < 4; i++) {
      const sx = baseX - i * 22;
      segments.push({ x: sx, y: baseY, targetX: sx, targetY: baseY });
    }
    setWormSegments(segments);
    initFireflies();

    // Start spawning
    setTimeout(() => spawnLetter(word, 0, lvl), 600);
  }, [pickWord, getContainerSize, spawnLetter, initFireflies]);

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  // Handle tapping a falling letter
  const handleLetterTap = useCallback(
    (letter: FallingLetter) => {
      if (screen !== "playing") return;

      const neededLetter = currentWord[letterIndex];

      if (letter.letter === neededLetter) {
        // Correct! Spawn green sparkles
        spawnParticles(letter.x, letter.y, 12, "sparkle");

        // Flash green
        setFlashColor("rgba(74, 222, 128, 0.15)");
        setTimeout(() => setFlashColor(null), 200);

        // Combo tracking
        const now = Date.now();
        setCombo(prev => {
          const timeSinceLast = now - prev.lastTime;
          if (timeSinceLast < 3000) {
            return { count: prev.count + 1, timer: 3, lastTime: now };
          }
          return { count: 1, timer: 3, lastTime: now };
        });

        const comboMultiplier = Math.min(combo.count + 1, 5);
        setScore(s => s + 10 * level * comboMultiplier);

        // Letter fly animation - find target slot position
        const slotIndex = letterIndex;
        const wordDisplay = wordDisplayRef.current;
        let toX = letter.x;
        let toY = 80;
        if (wordDisplay && containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          const slots = wordDisplay.querySelectorAll(".ww-word-slot");
          if (slots[slotIndex]) {
            const slotRect = slots[slotIndex].getBoundingClientRect();
            toX = slotRect.left + slotRect.width / 2 - containerRect.left;
            toY = slotRect.top + slotRect.height / 2 - containerRect.top;
          }
        }

        setLetterFly({
          id: nextId(),
          letter: letter.letter,
          fromX: letter.x,
          fromY: letter.y,
          toX,
          toY,
          progress: 0,
        });

        const newCollected = [...collectedLetters, letter.letter];
        setCollectedLetters(newCollected);
        setFallingLetters(prev => prev.filter(l => l.id !== letter.id));

        if (showHint) setShowHint(false);

        const newIdx = letterIndex + 1;
        if (newIdx >= currentWord.length) {
          // Word complete! Big celebration
          setWordCompleteText(currentWord.toUpperCase());
          setTimeout(() => setWordCompleteText(null), 1500);

          // Rainbow confetti burst
          const size = getContainerSize();
          for (let burst = 0; burst < 3; burst++) {
            setTimeout(() => {
              spawnParticles(
                size.width * (0.2 + burst * 0.3),
                size.height * 0.3,
                15,
                "confetti"
              );
              spawnParticles(
                size.width * (0.3 + burst * 0.2),
                size.height * 0.5,
                8,
                "star"
              );
            }, burst * 150);
          }

          // Grow worm
          setWormSegments(prev => {
            const last = prev[prev.length - 1];
            return [...prev, {
              x: last.x - 22,
              y: last.y,
              targetX: last.targetX - 22,
              targetY: last.targetY,
            }];
          });

          const newCompleted = wordsCompleted + 1;
          setWordsCompleted(newCompleted);

          if (newCompleted >= wordsNeeded) {
            setTimeout(() => setScreen("levelComplete"), 1200);
          } else {
            const newWord = pickWord(level);
            setTimeout(() => {
              setCurrentWord(newWord);
              setLetterIndex(0);
              setCollectedLetters([]);
              setFallingLetters([]);
              setTimeout(() => spawnLetter(newWord, 0, level), 400);
            }, 800);
          }
        } else {
          setLetterIndex(newIdx);
          setFallingLetters([]);
          setTimeout(() => spawnLetter(currentWord, newIdx, level), 500);
        }
      } else {
        // Wrong letter! Red shake + shatter
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 500);

        setFlashColor("rgba(248, 113, 113, 0.2)");
        setTimeout(() => setFlashColor(null), 300);

        // Shatter effect
        const pieces: ShatterPiece[] = [];
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 * i) / 6;
          pieces.push({
            id: nextId(),
            letter: letter.letter,
            x: letter.x,
            y: letter.y,
            vx: Math.cos(angle) * (2 + Math.random() * 3),
            vy: Math.sin(angle) * (2 + Math.random() * 3) - 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 20,
            life: 1,
            size: 0.4 + Math.random() * 0.4,
          });
        }
        setShatterPieces(prev => [...prev, ...pieces]);
        spawnParticles(letter.x, letter.y, 8, "shatter");

        // Reset combo
        setCombo({ count: 0, timer: 0, lastTime: 0 });

        setFallingLetters(prev => prev.filter(l => l.id !== letter.id));
        setLives(l => {
          const newLives = l - 1;
          if (newLives <= 0) {
            setTimeout(() => setScreen("gameOver"), 600);
          }
          return newLives;
        });
      }
    },
    [
      screen, currentWord, letterIndex, collectedLetters, level,
      wordsCompleted, wordsNeeded, pickWord, spawnLetter, showHint,
      combo, spawnParticles, getContainerSize,
    ]
  );

  // Main animation loop - handles ALL physics and animation
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = (timestamp - lastTimeRef.current) / 16;
      const delta = Math.min(rawDelta, 3);
      lastTimeRef.current = timestamp;
      timeRef.current = timestamp;

      const size = getContainerSize();

      // Update falling letters (position, wobble, rotation)
      setFallingLetters(prev => {
        const updated = prev.map(l => ({
          ...l,
          y: l.y + l.speed * delta,
          rotation: l.rotation + l.rotationSpeed * delta,
          wobbleOffset: l.wobbleOffset + l.wobbleSpeed * 0.02 * delta,
        })).filter(l => l.y < size.height + 60);
        return updated;
      });

      // Update particles
      setParticles(prev => {
        if (prev.length === 0) return prev;
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * delta,
            y: p.y + p.vy * delta,
            vy: p.vy + (p.type === "confetti" ? 0.15 : 0.1) * delta,
            life: p.life - (delta * 0.03) / p.maxLife,
            rotation: p.rotation + p.rotationSpeed * delta,
          }))
          .filter(p => p.life > 0);
      });

      // Update fireflies
      setFireflies(prev => {
        return prev.map(f => {
          let nx = f.x + f.vx * delta;
          let ny = f.y + f.vy * delta;
          let nvx = f.vx + (Math.random() - 0.5) * 0.05 * delta;
          let nvy = f.vy + (Math.random() - 0.5) * 0.05 * delta;
          // Keep in bounds
          if (nx < 0 || nx > size.width) nvx = -nvx;
          if (ny < 0 || ny > size.height) nvy = -nvy;
          nx = Math.max(0, Math.min(size.width, nx));
          ny = Math.max(0, Math.min(size.height, ny));
          // Speed damping
          nvx *= 0.99;
          nvy *= 0.99;
          return {
            ...f,
            x: nx,
            y: ny,
            vx: nvx,
            vy: nvy,
            phase: f.phase + 0.03 * delta,
          };
        });
      });

      // Update letter fly effect
      setLetterFly(prev => {
        if (!prev) return null;
        const newProgress = prev.progress + 0.04 * delta;
        if (newProgress >= 1) return null;
        return { ...prev, progress: newProgress };
      });

      // Update shatter pieces
      setShatterPieces(prev => {
        if (prev.length === 0) return prev;
        return prev
          .map(p => ({
            ...p,
            x: p.x + p.vx * delta,
            y: p.y + p.vy * delta,
            vy: p.vy + 0.15 * delta,
            rotation: p.rotation + p.rotationSpeed * delta,
            life: p.life - 0.025 * delta,
          }))
          .filter(p => p.life > 0);
      });

      // Update worm segments (smooth follow with sine-wave slither)
      setWormSegments(prev => {
        if (prev.length === 0) return prev;
        const time = timestamp * 0.003;
        const newSegs = [...prev];
        // Head stays put but wobbles slightly
        const headWobbleX = Math.sin(time * 2) * 3;
        const headWobbleY = Math.cos(time * 3) * 1.5;
        newSegs[0] = {
          ...newSegs[0],
          x: lerp(newSegs[0].x, newSegs[0].targetX + headWobbleX, 0.08 * delta),
          y: lerp(newSegs[0].y, newSegs[0].targetY + headWobbleY, 0.08 * delta),
        };
        // Each segment follows the one before with a sine offset
        for (let i = 1; i < newSegs.length; i++) {
          const leader = newSegs[i - 1];
          const sineOffset = Math.sin(time * 2.5 + i * 0.8) * (4 + i * 0.5);
          const targetX = leader.x - 20 + sineOffset;
          const targetY = leader.y + Math.sin(time * 1.5 + i * 1.2) * 2;
          newSegs[i] = {
            ...newSegs[i],
            x: lerp(newSegs[i].x, targetX, 0.06 * delta),
            y: lerp(newSegs[i].y, targetY, 0.06 * delta),
            targetX: newSegs[i].targetX,
            targetY: newSegs[i].targetY,
          };
        }
        return newSegs;
      });

      // Combo timer decay
      setCombo(prev => {
        if (prev.timer <= 0) return prev;
        return { ...prev, timer: Math.max(0, prev.timer - 0.016 * delta) };
      });

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [screen, getContainerSize]);

  // Respawn letters if all fall off screen
  useEffect(() => {
    if (screen !== "playing") return;
    const check = setInterval(() => {
      setFallingLetters(prev => {
        if (prev.length === 0 && currentWord && letterIndex < currentWord.length) {
          setTimeout(() => spawnLetter(currentWord, letterIndex, level), 300);
        }
        return prev;
      });
    }, 1800);
    return () => clearInterval(check);
  }, [screen, currentWord, letterIndex, level, spawnLetter]);

  // Ambient dirt particles
  useEffect(() => {
    if (screen !== "playing") return;
    const interval = setInterval(() => {
      const size = getContainerSize();
      spawnParticles(
        Math.random() * size.width,
        size.height * 0.7 + Math.random() * size.height * 0.3,
        1,
        "dirt"
      );
    }, 800);
    return () => clearInterval(interval);
  }, [screen, getContainerSize, spawnParticles]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  // ===================== INTRO SCREEN =====================
  if (screen === "intro") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-intro">
          <div className="ww-intro-bg">
            {/* Animated dirt particles */}
            {[...Array(18)].map((_, i) => (
              <div
                key={`dirt-${i}`}
                className="ww-bg-dirt-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: 4 + Math.random() * 8,
                  height: 4 + Math.random() * 8,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 6}s`,
                }}
              />
            ))}
            {/* Floating roots decoration */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`root-${i}`}
                className="ww-intro-root"
                style={{
                  left: `${i * 18 + Math.random() * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  height: `${30 + Math.random() * 30}%`,
                  opacity: 0.15 + Math.random() * 0.1,
                }}
              />
            ))}
            {/* Glowing fireflies */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`fly-${i}`}
                className="ww-intro-firefly"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 3}s`,
                }}
              />
            ))}
            {/* Bouncing emoji decorations */}
            {UNDERGROUND_CRITTERS.map((critter, i) => (
              <div
                key={`critter-${i}`}
                className="ww-intro-critter-float"
                style={{
                  left: `${8 + i * 20}%`,
                  bottom: `${5 + (i % 3) * 8}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {critter}
              </div>
            ))}
          </div>
          <div className="ww-intro-content">
            <div className="ww-logo">
              <span className="ww-logo-worm">{WORM_HEAD}</span>
              <h1>Word Worm</h1>
              <span className="ww-logo-worm flip">{WORM_HEAD}</span>
            </div>
            <p className="ww-tagline">Dig deep and spell words!</p>
            <div className="ww-instructions-card">
              <h3>How to Play</h3>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-letter-preview glow-a">c</span>
                  <span className="ww-letter-preview glow-b">a</span>
                  <span className="ww-letter-preview glow-c">t</span>
                  <span className="ww-arrow-icon">{"\u2192"}</span>
                  <span className="ww-word-result">cat!</span>
                </div>
                <p>
                  <strong>TAP</strong> falling letters in order to{" "}
                  <span className="ww-hl-green">SPELL</span> words!
                </p>
              </div>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-mini-worm">{WORM_HEAD}</span>
                  <span className="ww-arrow-icon">{"\u2192"}</span>
                  <span className="ww-mini-worm-chain">
                    {WORM_HEAD}{WORM_BODY}{WORM_BODY}{WORM_BODY}
                  </span>
                </div>
                <p>
                  Each word makes the worm{" "}
                  <span className="ww-hl-orange">GROW</span> longer!
                </p>
              </div>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-heart-icon">{"\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F"}</span>
                </div>
                <p>
                  Wrong letters cost a <span className="ww-hl-red">LIFE</span>{" "}
                  -- be careful!
                </p>
              </div>
            </div>
            <button className="ww-start-btn" onClick={startGame}>
              <span className="ww-btn-emoji">{WORM_HEAD}</span>
              Start Spelling!
              <span className="ww-btn-emoji">{WORM_HEAD}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-complete">
          <div className="ww-complete-bg">
            {/* Confetti rain */}
            {[...Array(30)].map((_, i) => (
              <div
                key={`conf-${i}`}
                className="ww-confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  backgroundColor: ["#f87171", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6"][i % 6],
                  width: 6 + Math.random() * 6,
                  height: 6 + Math.random() * 10,
                }}
              />
            ))}
            {/* Celebration sparkles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="ww-celebration-star"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  fontSize: `${1 + Math.random() * 1.5}rem`,
                }}
              >
                {["\u2728", "\u2B50", "\uD83C\uDF1F"][i % 3]}
              </div>
            ))}
          </div>
          <div className="ww-complete-content">
            <h1 className="ww-complete-title">
              {"\uD83C\uDF89"} Level {level} Complete! {"\uD83C\uDF89"}
            </h1>
            <div className="ww-worm-parade">
              {wormSegments.map((_, i) => (
                <span
                  key={i}
                  className="ww-parade-segment"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {i === 0 ? WORM_HEAD : WORM_BODY}
                </span>
              ))}
            </div>
            <div className="ww-score-card">
              <div className="ww-score-item">
                <span className="ww-score-label">Score</span>
                <span className="ww-score-value animate-count">{score}</span>
              </div>
              <div className="ww-score-item">
                <span className="ww-score-label">Words Spelled</span>
                <span className="ww-score-value">{wordsNeeded}</span>
              </div>
              <div className="ww-score-item">
                <span className="ww-score-label">Worm Length</span>
                <span className="ww-score-value">{wormSegments.length}</span>
              </div>
            </div>
            <div className="ww-complete-buttons">
              <button className="ww-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="ww-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== GAME OVER =====================
  if (screen === "gameOver") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-complete gameover">
          <div className="ww-complete-content">
            <div className="ww-gameover-worm">{WORM_HEAD}</div>
            <h1 className="ww-complete-title">
              Oh no! The worm is still hungry!
            </h1>
            <p className="ww-gameover-subtitle">
              You spelled {wordsCompleted} word{wordsCompleted !== 1 ? "s" : ""} and reached Level{" "}
              {level}
            </p>
            <div className="ww-score-card">
              <div className="ww-score-item">
                <span className="ww-score-label">Final Score</span>
                <span className="ww-score-value">{score}</span>
              </div>
            </div>
            <div className="ww-complete-buttons">
              <button className="ww-next-btn" onClick={startGame}>
                Try Again {"\uD83D\uDD04"}
              </button>
              <button
                className="ww-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING SCREEN =====================
  const time = timeRef.current * 0.001;

  return (
    <div className="ww-game">
      <style>{styles}</style>
      <div className={`ww-play ${shakeScreen ? "ww-shake" : ""}`}>
        {/* Screen flash overlay */}
        {flashColor && (
          <div className="ww-flash-overlay" style={{ background: flashColor }} />
        )}

        {/* Header */}
        <div className="ww-header">
          <div className="ww-header-left">
            <button
              className="ww-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="ww-level-badge">Level {level}</div>
          </div>
          <div className="ww-header-center">
            <span className="ww-lives">{livesDisplay.join(" ")}</span>
          </div>
          <div className="ww-header-right">
            <div className="ww-score-badge">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Word display */}
        <div className="ww-word-display" ref={wordDisplayRef}>
          <div className="ww-word-progress">
            {wordsCompleted} / {wordsNeeded} words
            {combo.count > 1 && combo.timer > 0 && (
              <span className="ww-combo-badge">
                {combo.count}x Combo!
              </span>
            )}
          </div>
          <div className="ww-word-letters">
            {currentWord.split("").map((ch, i) => (
              <div
                key={`${currentWord}-${i}`}
                className={`ww-word-slot ${
                  i < letterIndex ? "filled" : i === letterIndex ? "active" : ""
                }`}
              >
                {i < letterIndex ? collectedLetters[i] : i === letterIndex ? "?" : ""}
              </div>
            ))}
          </div>
          {showHint && currentWord.length > 0 && (
            <div className="ww-hint-text">
              Tap the letter <strong>{currentWord[0]}</strong> to start!
            </div>
          )}
        </div>

        {/* Game area */}
        <div className="ww-game-area" ref={containerRef}>
          {/* Underground atmosphere layers */}
          <div className="ww-underground-bg">
            {/* Animated root tendrils on edges */}
            {floatingRoots.map(root => (
              <svg
                key={root.id}
                className="ww-root-svg"
                style={{
                  left: `${root.x}%`,
                  top: 0,
                  position: "absolute",
                  width: "60px",
                  height: "100%",
                  pointerEvents: "none",
                  overflow: "visible",
                }}
              >
                <path
                  d={(() => {
                    let d = `M 30 ${root.startY}`;
                    for (let s = 0; s < root.segments; s++) {
                      const progress = (s + 1) / root.segments;
                      const sx = 30 + Math.sin(time * 0.5 + root.phase + s * 0.7) * root.amplitude * progress;
                      const sy = root.startY + progress * 300;
                      d += ` Q ${sx + 10} ${sy - 15}, ${sx} ${sy}`;
                    }
                    return d;
                  })()}
                  stroke={root.color}
                  strokeWidth={root.thickness}
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            ))}

            {/* Background critters */}
            {UNDERGROUND_CRITTERS.map((c, i) => (
              <div
                key={i}
                className="ww-bg-critter"
                style={{
                  left: `${10 + i * 18}%`,
                  top: `${55 + (i % 3) * 14}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {c}
              </div>
            ))}

            {/* Glowing mushrooms */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`mush-${i}`}
                className="ww-mushroom"
                style={{
                  left: `${15 + i * 35}%`,
                  bottom: `${8 + i * 5}%`,
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                {"\uD83C\uDF44"}
              </div>
            ))}
          </div>

          {/* Fireflies */}
          {fireflies.map(f => {
            const brightness = 0.3 + Math.sin(f.phase) * 0.7;
            return (
              <div
                key={f.id}
                className="ww-firefly"
                style={{
                  left: f.x,
                  top: f.y,
                  width: f.size,
                  height: f.size,
                  opacity: Math.max(0, brightness),
                  boxShadow: `0 0 ${f.size * 3}px ${f.size}px hsla(${f.hue}, 100%, 70%, ${brightness * 0.5})`,
                  background: `radial-gradient(circle, hsla(${f.hue}, 100%, 80%, ${brightness}), transparent)`,
                }}
              />
            );
          })}

          {/* Particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className={`ww-particle ww-particle-${p.type}`}
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

          {/* Shatter pieces */}
          {shatterPieces.map(p => (
            <div
              key={p.id}
              className="ww-shatter-piece"
              style={{
                left: p.x,
                top: p.y,
                opacity: p.life,
                transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${p.size * p.life})`,
                fontSize: `${1 + p.size}rem`,
              }}
            >
              {p.letter}
            </div>
          ))}

          {/* Letter fly effect */}
          {letterFly && (
            <div
              className="ww-letter-fly"
              style={{
                left: lerp(letterFly.fromX, letterFly.toX, letterFly.progress),
                top: lerp(letterFly.fromY, letterFly.toY, letterFly.progress)
                  - Math.sin(letterFly.progress * Math.PI) * 60,
                transform: `translate(-50%, -50%) scale(${1 + Math.sin(letterFly.progress * Math.PI) * 0.5}) rotate(${letterFly.progress * 360}deg)`,
                opacity: 1 - letterFly.progress * 0.3,
              }}
            >
              {letterFly.letter}
            </div>
          )}

          {/* Falling letters */}
          {fallingLetters.map(letter => {
            const wobbleX = Math.sin(letter.wobbleOffset) * 15;
            return (
              <button
                key={letter.id}
                className="ww-falling-letter"
                style={{
                  left: letter.x + wobbleX,
                  top: letter.y,
                  transform: `translate(-50%, -50%) rotate(${letter.rotation}deg) scale(${letter.scale})`,
                  "--letter-hue": letter.hue,
                } as React.CSSProperties}
                onClick={() => handleLetterTap(letter)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleLetterTap(letter);
                }}
              >
                <div className="ww-letter-glow" />
                <div className="ww-letter-shine" />
                <span className="ww-letter-char">{letter.letter}</span>
              </button>
            );
          })}

          {/* Word complete celebration text */}
          {wordCompleteText && (
            <div className="ww-word-complete-effect">
              <div className="ww-word-complete-text">{wordCompleteText}!</div>
              <div className="ww-word-complete-stars">
                {"\u2728\u2B50\u2728"}
              </div>
            </div>
          )}

          {/* Worm at bottom */}
          <div className="ww-worm">
            {wormSegments.map((seg, i) => {
              const segScale = i === 0 ? 1.2 : 1 - i * 0.02;
              return (
                <div
                  key={i}
                  className={`ww-worm-segment ${i === 0 ? "head" : ""}`}
                  style={{
                    left: seg.x,
                    top: seg.y,
                    transform: `translate(-50%, -50%) scale(${Math.max(0.6, segScale)})`,
                    zIndex: wormSegments.length - i,
                  }}
                >
                  {i === 0 ? WORM_HEAD : WORM_BODY}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ww-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg,
      #1a0e05 0%,
      #2d1a0a 15%,
      #3b1f0a 30%,
      #4a2810 50%,
      #3b1f0a 70%,
      #2d1a0a 85%,
      #1a0e05 100%
    );
  }

  /* ===================== INTRO SCREEN ===================== */
  .ww-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ww-intro-bg {
    position: absolute; inset: 0; overflow: hidden;
  }

  .ww-bg-dirt-float {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(160, 120, 60, 0.5), rgba(100, 70, 30, 0.2));
    animation: dirtFloat 6s ease-in-out infinite;
  }

  @keyframes dirtFloat {
    0%, 100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.2; }
    33% { transform: translateY(-25px) scale(1.2) rotate(120deg); opacity: 0.5; }
    66% { transform: translateY(-10px) scale(0.9) rotate(240deg); opacity: 0.35; }
  }

  .ww-intro-root {
    position: absolute; top: 0; width: 3px;
    background: linear-gradient(180deg,
      rgba(80, 50, 20, 0.4) 0%,
      rgba(60, 40, 15, 0.2) 50%,
      transparent 100%
    );
    border-radius: 0 0 2px 2px;
    animation: rootSway 5s ease-in-out infinite;
    transform-origin: top center;
  }

  @keyframes rootSway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  .ww-intro-firefly {
    position: absolute; width: 6px; height: 6px; border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 230, 100, 0.9), rgba(150, 200, 50, 0.3), transparent);
    box-shadow: 0 0 12px 4px rgba(180, 220, 80, 0.4);
    animation: fireflyGlow 4s ease-in-out infinite;
  }

  @keyframes fireflyGlow {
    0%, 100% { opacity: 0; transform: translate(0, 0) scale(0.5); }
    20% { opacity: 1; transform: translate(10px, -15px) scale(1); }
    50% { opacity: 0.7; transform: translate(-8px, -25px) scale(1.2); }
    80% { opacity: 0.9; transform: translate(15px, -10px) scale(0.8); }
  }

  .ww-intro-critter-float {
    position: absolute; font-size: 2rem;
    animation: critterBob 4s ease-in-out infinite;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  @keyframes critterBob {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    25% { transform: translateY(-12px) rotate(3deg); }
    50% { transform: translateY(-5px) rotate(-3deg); }
    75% { transform: translateY(-15px) rotate(5deg); }
  }

  .ww-intro-content, .ww-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .ww-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .ww-logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #4ade80, #a3e635, #facc15, #fb923c);
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    filter: drop-shadow(0 2px 8px rgba(74, 222, 128, 0.3));
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .ww-logo-worm {
    font-size: 2.8rem; animation: wormBounce 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  .ww-logo-worm.flip { transform: scaleX(-1); animation: wormBounceFlip 2s ease-in-out infinite; }

  @keyframes wormBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-12px) rotate(5deg); }
  }

  @keyframes wormBounceFlip {
    0%, 100% { transform: scaleX(-1) translateY(0) rotate(5deg); }
    50% { transform: scaleX(-1) translateY(-12px) rotate(-5deg); }
  }

  .ww-tagline {
    color: #a3e635; font-size: 1.2rem; margin-bottom: 2rem;
    text-shadow: 0 0 20px rgba(163, 230, 53, 0.3);
    animation: taglinePulse 3s ease-in-out infinite;
  }

  @keyframes taglinePulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }

  .ww-instructions-card {
    background: rgba(0, 0, 0, 0.35);
    border: 2px solid rgba(163, 230, 53, 0.25);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem;
    backdrop-filter: blur(12px);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  .ww-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1.2rem; }

  .ww-instruction { margin-bottom: 1.3rem; }
  .ww-instruction:last-child { margin-bottom: 0; }

  .ww-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.5rem;
  }

  .ww-letter-preview {
    width: 38px; height: 38px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 1.2rem;
    transition: transform 0.2s ease;
  }

  .ww-letter-preview.glow-a {
    background: linear-gradient(135deg, #4ade80, #22c55e);
    box-shadow: 0 4px 15px rgba(74, 222, 128, 0.4);
    animation: letterPreviewPop 2s ease-in-out infinite;
  }

  .ww-letter-preview.glow-b {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
    animation: letterPreviewPop 2s ease-in-out 0.15s infinite;
  }

  .ww-letter-preview.glow-c {
    background: linear-gradient(135deg, #c084fc, #a855f7);
    box-shadow: 0 4px 15px rgba(192, 132, 252, 0.4);
    animation: letterPreviewPop 2s ease-in-out 0.3s infinite;
  }

  @keyframes letterPreviewPop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .ww-arrow-icon { color: #64748b; font-size: 1.2rem; }
  .ww-word-result {
    color: #facc15; font-weight: 800; font-size: 1.3rem;
    text-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
  }
  .ww-mini-worm { font-size: 1.8rem; }
  .ww-mini-worm-chain { font-size: 1.4rem; letter-spacing: -3px; }
  .ww-heart-icon { font-size: 1.5rem; }
  .ww-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .ww-hl-green { color: #4ade80; font-weight: 700; }
  .ww-hl-orange { color: #fb923c; font-weight: 700; }
  .ww-hl-red { color: #f87171; font-weight: 700; }

  .ww-start-btn, .ww-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(74, 222, 128, 0.35), 0 4px 15px rgba(0,0,0,0.2);
    position: relative; overflow: hidden;
  }

  .ww-start-btn::before, .ww-next-btn::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    border-radius: 50px;
  }

  .ww-start-btn:hover, .ww-next-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 50px rgba(74, 222, 128, 0.45), 0 6px 20px rgba(0,0,0,0.25);
  }

  .ww-start-btn:active, .ww-next-btn:active {
    transform: translateY(0) scale(0.98);
  }

  .ww-btn-emoji { font-size: 1.5rem; animation: btnEmojiWiggle 1.5s ease-in-out infinite; }

  @keyframes btnEmojiWiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  /* ===================== LEVEL COMPLETE ===================== */
  .ww-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ww-complete.gameover {
    background: linear-gradient(180deg, #1a0e05 0%, #2d1a0a 50%, #1a0e05 100%);
  }

  .ww-complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .ww-confetti-piece {
    position: absolute; top: -20px;
    border-radius: 2px;
    animation: confettiFall 4s ease-in-out infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .ww-celebration-star {
    position: absolute;
    animation: celebStar 3s ease-in-out infinite;
  }

  @keyframes celebStar {
    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
  }

  .ww-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1.5rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }

  .ww-gameover-worm {
    font-size: 4rem; margin-bottom: 1rem;
    animation: sadWorm 2s ease-in-out infinite;
  }

  @keyframes sadWorm {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .ww-gameover-subtitle {
    color: #94a3b8; font-size: 1.1rem; margin-bottom: 1.5rem;
  }

  .ww-worm-parade {
    display: flex; justify-content: center; gap: 0.2rem; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .ww-parade-segment {
    font-size: 2rem; animation: paradeSlither 1.2s ease infinite;
    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3));
  }

  @keyframes paradeSlither {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-6px) rotate(-8deg); }
    75% { transform: translateY(-6px) rotate(8deg); }
  }

  .ww-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }

  .ww-score-item { display: flex; flex-direction: column; align-items: center; }
  .ww-score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .ww-score-value {
    font-size: 2rem; font-weight: 900; color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .ww-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .ww-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .ww-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ===================== PLAYING SCREEN ===================== */
  .ww-play {
    height: 100%; display: flex; flex-direction: column; position: relative;
  }

  .ww-play.ww-shake { animation: shakeIt 0.5s ease; }

  @keyframes shakeIt {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-6px) rotate(-0.5deg); }
    30% { transform: translateX(8px) rotate(0.5deg); }
    50% { transform: translateX(-8px) rotate(-0.3deg); }
    70% { transform: translateX(6px) rotate(0.3deg); }
    90% { transform: translateX(-3px); }
  }

  .ww-flash-overlay {
    position: fixed; inset: 0; z-index: 200; pointer-events: none;
    animation: flashFade 0.3s ease forwards;
  }

  @keyframes flashFade {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .ww-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 1rem; background: rgba(0, 0, 0, 0.5); z-index: 50;
    border-bottom: 1px solid rgba(163, 230, 53, 0.1);
    backdrop-filter: blur(8px);
  }

  .ww-header-left, .ww-header-right { display: flex; align-items: center; gap: 0.8rem; }

  .ww-back-btn {
    width: 40px; height: 40px; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
    color: white; font-size: 1.2rem; cursor: pointer; transition: all 0.2s ease;
  }

  .ww-back-btn:hover { background: rgba(255,255,255,0.15); }

  .ww-level-badge {
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 20px; font-weight: 700; color: white; font-size: 0.9rem;
    box-shadow: 0 4px 12px rgba(74, 222, 128, 0.3);
  }

  .ww-lives { font-size: 1.2rem; letter-spacing: 2px; }

  .ww-score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251, 191, 36, 0.15);
    border: 1px solid rgba(251, 191, 36, 0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  /* Word display */
  .ww-word-display {
    padding: 0.8rem; text-align: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .ww-word-progress {
    font-size: 0.8rem; color: #64748b; margin-bottom: 0.5rem;
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  }

  .ww-combo-badge {
    display: inline-block; padding: 0.15rem 0.6rem;
    background: linear-gradient(135deg, #f59e0b, #f97316);
    border-radius: 10px; font-size: 0.75rem; font-weight: 800; color: white;
    animation: comboPulse 0.5s ease infinite;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .ww-word-letters {
    display: flex; justify-content: center; gap: 0.5rem;
  }

  .ww-word-slot {
    width: 50px; height: 54px;
    border: 3px dashed rgba(255, 255, 255, 0.15); border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.7rem; font-weight: 900; color: #64748b;
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.2);
  }

  .ww-word-slot.filled {
    background: rgba(74, 222, 128, 0.2);
    border: 3px solid rgba(74, 222, 128, 0.6);
    color: #4ade80; border-style: solid;
    box-shadow: 0 0 15px rgba(74, 222, 128, 0.2), inset 0 0 10px rgba(74, 222, 128, 0.1);
    animation: slotFillPop 0.3s ease;
  }

  @keyframes slotFillPop {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .ww-word-slot.active {
    border-color: #facc15; animation: slotPulse 1.2s ease-in-out infinite;
    color: #facc15;
    box-shadow: 0 0 20px rgba(250, 204, 21, 0.2);
  }

  @keyframes slotPulse {
    0%, 100% { transform: scale(1); border-color: #facc15; box-shadow: 0 0 15px rgba(250, 204, 21, 0.15); }
    50% { transform: scale(1.06); border-color: #fbbf24; box-shadow: 0 0 25px rgba(250, 204, 21, 0.3); }
  }

  .ww-hint-text {
    color: #facc15; font-size: 0.85rem; margin-top: 0.5rem;
    animation: hintFade 2s ease-in-out infinite;
    text-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
  }

  @keyframes hintFade {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Game area */
  .ww-game-area {
    flex: 1; position: relative; overflow: hidden; touch-action: none;
    background: linear-gradient(180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(30, 15, 5, 0.3) 30%,
      rgba(40, 25, 10, 0.4) 60%,
      rgba(20, 10, 3, 0.5) 100%
    );
  }

  .ww-underground-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  .ww-bg-critter {
    position: absolute; font-size: 1.6rem; opacity: 0.12;
    animation: critterWiggle 4s ease-in-out infinite;
    filter: drop-shadow(0 0 4px rgba(0,0,0,0.5));
  }

  @keyframes critterWiggle {
    0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
    25% { transform: translateY(-4px) rotate(-8deg) scale(1.05); }
    50% { transform: translateY(-8px) rotate(5deg) scale(1); }
    75% { transform: translateY(-3px) rotate(-3deg) scale(0.95); }
  }

  .ww-mushroom {
    position: absolute; font-size: 1.8rem; opacity: 0.3;
    animation: mushroomGlow 3s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(200, 150, 50, 0.3));
  }

  @keyframes mushroomGlow {
    0%, 100% { opacity: 0.2; filter: drop-shadow(0 0 5px rgba(200, 150, 50, 0.2)); }
    50% { opacity: 0.4; filter: drop-shadow(0 0 12px rgba(200, 150, 50, 0.5)); }
  }

  /* Fireflies */
  .ww-firefly {
    position: absolute; border-radius: 50%;
    pointer-events: none; z-index: 5;
    transition: opacity 0.3s ease;
  }

  /* Particles */
  .ww-particle {
    position: absolute; pointer-events: none; z-index: 100;
    transform-origin: center;
  }

  .ww-particle-sparkle {
    border-radius: 50%;
    box-shadow: 0 0 6px currentColor;
  }

  .ww-particle-dirt {
    border-radius: 50%;
    opacity: 0.3;
  }

  .ww-particle-confetti {
    border-radius: 2px;
  }

  .ww-particle-star {
    border-radius: 2px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }

  .ww-particle-shatter {
    border-radius: 50%;
    box-shadow: 0 0 4px currentColor;
  }

  /* Shatter pieces */
  .ww-shatter-piece {
    position: absolute; pointer-events: none; z-index: 100;
    color: #f87171; font-weight: 900;
    text-shadow: 0 0 8px rgba(248, 113, 113, 0.5);
    font-family: 'Nunito', sans-serif;
  }

  /* Letter fly effect */
  .ww-letter-fly {
    position: absolute; pointer-events: none; z-index: 150;
    font-size: 1.8rem; font-weight: 900; color: #4ade80;
    text-shadow: 0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4);
    font-family: 'Nunito', sans-serif;
  }

  /* Falling letters */
  .ww-falling-letter {
    position: absolute;
    width: 60px; height: 60px; border-radius: 16px;
    background: linear-gradient(135deg,
      hsl(var(--letter-hue), 40%, 35%) 0%,
      hsl(var(--letter-hue), 50%, 28%) 50%,
      hsl(var(--letter-hue), 45%, 22%) 100%
    );
    border: 2px solid rgba(255, 255, 255, 0.15);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.4),
      0 0 15px hsla(var(--letter-hue), 60%, 40%, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -3px 0 rgba(0, 0, 0, 0.2);
    font-family: 'Nunito', sans-serif;
    z-index: 20;
    position: absolute;
    animation: letterPulseGlow 2s ease-in-out infinite;
    transition: box-shadow 0.15s ease;
  }

  @keyframes letterPulseGlow {
    0%, 100% { box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 12px hsla(var(--letter-hue), 60%, 40%, 0.2), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.2); }
    50% { box-shadow: 0 6px 20px rgba(0,0,0,0.4), 0 0 25px hsla(var(--letter-hue), 60%, 50%, 0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.2); }
  }

  .ww-falling-letter:hover {
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.5),
      0 0 30px hsla(var(--letter-hue), 70%, 50%, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      inset 0 -3px 0 rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .ww-falling-letter:active {
    transform: translate(-50%, -50%) scale(0.9) !important;
  }

  .ww-letter-glow {
    position: absolute; inset: -6px; border-radius: 20px;
    background: radial-gradient(circle,
      hsla(var(--letter-hue), 60%, 50%, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
    animation: glowPulse 2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
  }

  .ww-letter-shine {
    position: absolute; top: 4px; left: 6px; right: 6px; height: 40%;
    background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 60%,
      transparent 100%
    );
    border-radius: 12px 12px 50% 50%;
    pointer-events: none;
  }

  .ww-letter-char {
    font-size: 1.7rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4), 0 0 10px rgba(255, 255, 255, 0.1);
    z-index: 2; position: relative;
  }

  /* Word complete effect */
  .ww-word-complete-effect {
    position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200; text-align: center;
    animation: wordCompleteAnim 1.5s ease forwards;
  }

  @keyframes wordCompleteAnim {
    0% { transform: translate(-50%, -50%) scale(0) rotate(-10deg); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3) rotate(3deg); opacity: 1; }
    40% { transform: translate(-50%, -50%) scale(1) rotate(-1deg); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(0.8) rotate(0deg); opacity: 0; }
  }

  .ww-word-complete-text {
    padding: 0.8rem 1.8rem;
    background: linear-gradient(135deg, #facc15, #f59e0b, #fb923c);
    border-radius: 24px; font-size: 2rem; font-weight: 900; color: white;
    white-space: nowrap;
    box-shadow: 0 10px 40px rgba(250, 204, 21, 0.5), 0 0 60px rgba(250, 204, 21, 0.2);
    letter-spacing: 4px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .ww-word-complete-stars {
    font-size: 2rem; margin-top: 0.3rem;
    animation: starsRotate 0.6s linear infinite;
  }

  @keyframes starsRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }

  /* Worm */
  .ww-worm {
    position: absolute; bottom: 0; left: 0; right: 0; height: 80px;
    pointer-events: none;
  }

  .ww-worm-segment {
    position: absolute; font-size: 1.8rem;
    transition: none;
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4));
  }

  .ww-worm-segment.head {
    font-size: 2.4rem;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  }

  /* Root SVG */
  .ww-root-svg {
    pointer-events: none; z-index: 1;
  }

  @media (max-width: 600px) {
    .ww-word-slot { width: 42px; height: 46px; font-size: 1.4rem; }
    .ww-falling-letter { width: 50px; height: 50px; }
    .ww-letter-char { font-size: 1.4rem; }
    .ww-header-center { display: none; }
    .ww-word-complete-text { font-size: 1.5rem; padding: 0.6rem 1.2rem; }
    .ww-worm-segment { font-size: 1.4rem; }
    .ww-worm-segment.head { font-size: 2rem; }
  }
`;
