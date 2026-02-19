"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type React from "react";

// ============================================================
// WORD WORM  --  CVC Spelling Game
// Foundation / Year 1 English
// Core mechanic: DRAG the worm head to eat letters in order
// ============================================================

interface WordWormProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver" | "gameComplete";

// Physics constants
const WORM_FRICTION = 0.85;
const WORM_FOLLOW_SPEED = 0.12;
const SEGMENT_SPACING = 32;
const SEGMENT_FOLLOW_SPEED = 0.25;
const LETTER_FRICTION = 0.995;
const LETTER_BOUNCE = 0.8;
const EAT_DISTANCE = 48;
const WARNING_DISTANCE = 90;
const LETTER_BOB_SPEED = 0.002;
const LETTER_DRIFT_SPEED = 0.3;

interface WormSegment {
  x: number;
  y: number;
  letter?: string;
  hue: number;
}

interface LetterOrb {
  id: number;
  letter: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  isTarget: boolean;
  bobPhase: number;
  bobAmp: number;
  warning: boolean;
  warningTimer: number;
  eaten: boolean;
  eatenTimer: number;
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
  type: "crunch" | "sparkle" | "confetti" | "dirt" | "star";
  rotation: number;
  rotationSpeed: number;
}

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  life: number;
  color: string;
  width: number;
  height: number;
}

interface WordEmoji {
  word: string;
  emoji: string;
}

// CVC word bank with emoji mapping
const CVC_WORDS: WordEmoji[] = [
  { word: "cat", emoji: "\uD83D\uDC31" }, { word: "hat", emoji: "\uD83E\uDDE2" },
  { word: "bat", emoji: "\uD83E\uDD87" }, { word: "mat", emoji: "\uD83E\uDDFC" },
  { word: "sat", emoji: "\uD83E\uDDD1" }, { word: "rat", emoji: "\uD83D\uDC00" },
  { word: "pat", emoji: "\uD83D\uDC4B" }, { word: "dog", emoji: "\uD83D\uDC36" },
  { word: "log", emoji: "\uD83E\uDEB5" }, { word: "fog", emoji: "\uD83C\uDF2B\uFE0F" },
  { word: "hog", emoji: "\uD83D\uDC37" }, { word: "jog", emoji: "\uD83C\uDFC3" },
  { word: "bed", emoji: "\uD83D\uDECF\uFE0F" }, { word: "red", emoji: "\uD83D\uDD34" },
  { word: "bug", emoji: "\uD83D\uDC1B" }, { word: "rug", emoji: "\uD83E\uDEA7" },
  { word: "mug", emoji: "\u2615" }, { word: "hug", emoji: "\uD83E\uDD17" },
  { word: "tug", emoji: "\uD83D\uDEA2" }, { word: "pen", emoji: "\uD83D\uDD8A\uFE0F" },
  { word: "hen", emoji: "\uD83D\uDC14" }, { word: "ten", emoji: "\uD83D\uDD1F" },
  { word: "pin", emoji: "\uD83D\uDCCC" }, { word: "bin", emoji: "\uD83D\uDDD1\uFE0F" },
  { word: "tin", emoji: "\uD83E\uDD6B" }, { word: "can", emoji: "\uD83E\uDD6B" },
  { word: "fan", emoji: "\uD83C\uDF2C\uFE0F" }, { word: "man", emoji: "\uD83D\uDC68" },
  { word: "van", emoji: "\uD83D\uDE90" }, { word: "cup", emoji: "\uD83E\uDD64" },
  { word: "pup", emoji: "\uD83D\uDC36" }, { word: "box", emoji: "\uD83D\uDCE6" },
  { word: "fox", emoji: "\uD83E\uDD8A" }, { word: "hop", emoji: "\uD83D\uDC07" },
  { word: "mop", emoji: "\uD83E\uDDF9" }, { word: "top", emoji: "\uD83E\uDE80" },
  { word: "pop", emoji: "\uD83C\uDF7F" }, { word: "sun", emoji: "\u2600\uFE0F" },
  { word: "bun", emoji: "\uD83C\uDF5E" }, { word: "run", emoji: "\uD83C\uDFC3" },
  { word: "fun", emoji: "\uD83C\uDF89" }, { word: "gun", emoji: "\uD83D\uDD2B" },
  { word: "jam", emoji: "\uD83C\uDF53" }, { word: "ham", emoji: "\uD83C\uDF56" },
  { word: "ram", emoji: "\uD83D\uDC0F" }, { word: "yam", emoji: "\uD83C\uDF60" },
];

const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

let particleIdCounter = 0;
const nextParticleId = () => ++particleIdCounter;

let orbIdCounter = 0;
const nextOrbId = () => ++orbIdCounter;

export default function WordWorm({ onExit }: WordWormProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [totalWordsSpelled, setTotalWordsSpelled] = useState(0);

  // Game refs for animation loop (mutable state that doesn't need re-renders)
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const gameTimeRef = useRef(0);

  // Core game state in refs for perf (rendered via forceUpdate)
  const wormRef = useRef<WormSegment[]>([]);
  const orbsRef = useRef<LetterOrb[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const confettiRef = useRef<ConfettiPiece[]>([]);

  const isDraggingRef = useRef(false);
  const dragTargetRef = useRef<{ x: number; y: number }>({ x: 200, y: 300 });
  const wormVelRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  const currentWordRef = useRef<WordEmoji>({ word: "cat", emoji: "\uD83D\uDC31" });
  const letterIndexRef = useRef(0);
  const wordsCompletedRef = useRef(0);
  const wordsNeededRef = useRef(3);
  const levelRef = useRef(1);
  const livesRef = useRef(3);
  const scoreRef = useRef(0);
  const screenRef = useRef<GameScreen>("intro");

  const flashRef = useRef<{ color: string; timer: number } | null>(null);
  const celebrationRef = useRef<{ word: string; emoji: string; timer: number } | null>(null);
  const screenShakeRef = useRef(0);
  const tutorialShownRef = useRef(false);

  // Force re-render counter
  const [, setRenderTick] = useState(0);
  const forceRender = useCallback(() => setRenderTick(t => t + 1), []);

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
  const spawnParticles = useCallback((x: number, y: number, count: number, type: Particle["type"]) => {
    const colors: Record<string, string[]> = {
      crunch: ["#4ade80", "#22c55e", "#a3e635", "#86efac", "#bbf7d0"],
      sparkle: ["#facc15", "#fbbf24", "#f59e0b", "#fcd34d"],
      confetti: ["#f87171", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6", "#fb923c"],
      dirt: ["#8b6914", "#6b5b3a", "#a08060", "#705020"],
      star: ["#facc15", "#fbbf24", "#f59e0b", "#fde047"],
    };
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = type === "crunch" ? 3 + Math.random() * 5 : 2 + Math.random() * 4;
      const col = colors[type] || colors.sparkle;
      particlesRef.current.push({
        id: nextParticleId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === "confetti" ? 3 : 1),
        life: 1,
        maxLife: 0.5 + Math.random() * 0.5,
        size: type === "star" ? 6 + Math.random() * 8 : type === "confetti" ? 4 + Math.random() * 6 : 3 + Math.random() * 5,
        color: col[Math.floor(Math.random() * col.length)],
        type,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
      });
    }
  }, []);

  const spawnConfetti = useCallback((centerX: number, centerY: number, count: number) => {
    const colors = ["#f87171", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6", "#fb923c", "#22d3ee"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;
      confettiRef.current.push({
        id: nextParticleId(),
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 40,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4 - Math.random() * 3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        width: 4 + Math.random() * 8,
        height: 6 + Math.random() * 10,
      });
    }
  }, []);

  // Create letter orbs for current word state
  const spawnLetterOrbs = useCallback((word: string, letterIdx: number, lvl: number) => {
    const size = getContainerSize();
    const margin = 70;
    const playWidth = size.width - margin * 2;
    const playHeight = size.height - margin * 2;

    const targetLetter = word[letterIdx];
    const numDistractors = Math.min(2 + Math.floor(lvl * 0.7), 6);
    const newOrbs: LetterOrb[] = [];
    const vowels = "aeiou";

    // Target letter orb
    newOrbs.push({
      id: nextOrbId(),
      letter: targetLetter,
      x: margin + Math.random() * playWidth,
      y: margin + Math.random() * playHeight * 0.7,
      vx: (Math.random() - 0.5) * LETTER_DRIFT_SPEED,
      vy: (Math.random() - 0.5) * LETTER_DRIFT_SPEED,
      radius: 32 + Math.random() * 5,
      hue: vowels.includes(targetLetter) ? 140 + Math.random() * 40 : 80 + Math.random() * 40,
      isTarget: true,
      bobPhase: Math.random() * Math.PI * 2,
      bobAmp: 8 + Math.random() * 6,
      warning: false,
      warningTimer: 0,
      eaten: false,
      eatenTimer: 0,
    });

    // Distractor orbs
    for (let i = 0; i < numDistractors; i++) {
      const isVowel = vowels.includes(targetLetter);
      const pool = isVowel ? vowels : CONSONANTS;
      let distractor = pool[Math.floor(Math.random() * pool.length)];
      // Avoid duplicating the target letter
      while (distractor === targetLetter && pool.length > 1) {
        distractor = pool[Math.floor(Math.random() * pool.length)];
      }
      newOrbs.push({
        id: nextOrbId(),
        letter: distractor,
        x: margin + Math.random() * playWidth,
        y: margin + Math.random() * playHeight * 0.7,
        vx: (Math.random() - 0.5) * LETTER_DRIFT_SPEED * (1 + lvl * 0.1),
        vy: (Math.random() - 0.5) * LETTER_DRIFT_SPEED * (1 + lvl * 0.1),
        radius: 30 + Math.random() * 5,
        hue: 0 + Math.random() * 30,
        isTarget: false,
        bobPhase: Math.random() * Math.PI * 2,
        bobAmp: 6 + Math.random() * 8,
        warning: false,
        warningTimer: 0,
        eaten: false,
        eatenTimer: 0,
      });
    }

    orbsRef.current = newOrbs;
  }, [getContainerSize]);

  // Initialize a level
  const initLevel = useCallback((lvl: number) => {
    const size = getContainerSize();

    // Pick word
    const wordPool = CVC_WORDS;
    const wordData = wordPool[Math.floor(Math.random() * wordPool.length)];
    currentWordRef.current = wordData;
    letterIndexRef.current = 0;
    wordsCompletedRef.current = 0;
    wordsNeededRef.current = Math.min(3 + Math.floor((lvl - 1) / 2), 7);
    levelRef.current = lvl;

    // Init worm (head + 3 body segments)
    const startX = size.width / 2;
    const startY = size.height * 0.75;
    const segments: WormSegment[] = [];
    for (let i = 0; i < 4; i++) {
      segments.push({
        x: startX - i * SEGMENT_SPACING,
        y: startY,
        hue: 120 + i * 15,
      });
    }
    wormRef.current = segments;
    dragTargetRef.current = { x: startX, y: startY };
    wormVelRef.current = { vx: 0, vy: 0 };
    isDraggingRef.current = false;

    // Spawn letter orbs
    spawnLetterOrbs(wordData.word, 0, lvl);

    // Clear effects
    particlesRef.current = [];
    confettiRef.current = [];
    flashRef.current = null;
    celebrationRef.current = null;
    screenShakeRef.current = 0;
    tutorialShownRef.current = false;

    forceRender();
  }, [getContainerSize, spawnLetterOrbs, forceRender]);

  // Advance to next word or level complete
  const advanceWord = useCallback(() => {
    const lvl = levelRef.current;
    wordsCompletedRef.current += 1;
    const completed = wordsCompletedRef.current;
    const needed = wordsNeededRef.current;

    if (completed >= needed) {
      // Level complete
      setTimeout(() => {
        screenRef.current = "levelComplete";
        setScreen("levelComplete");
      }, 1500);
    } else {
      // Next word
      setTimeout(() => {
        const wordPool = CVC_WORDS;
        const wordData = wordPool[Math.floor(Math.random() * wordPool.length)];
        currentWordRef.current = wordData;
        letterIndexRef.current = 0;
        spawnLetterOrbs(wordData.word, 0, lvl);
        forceRender();
      }, 1000);
    }
  }, [spawnLetterOrbs, forceRender]);

  // Handle eating a letter
  const eatLetter = useCallback((orb: LetterOrb) => {
    const word = currentWordRef.current.word;
    const idx = letterIndexRef.current;
    const neededLetter = word[idx];
    const head = wormRef.current[0];

    if (orb.letter === neededLetter) {
      // Correct letter!
      // Mark orb as eaten
      orb.eaten = true;
      orb.eatenTimer = 1;

      // Crunch particles
      spawnParticles(head.x, head.y, 16, "crunch");
      spawnParticles(head.x, head.y, 8, "sparkle");

      // Flash green
      flashRef.current = { color: "rgba(74, 222, 128, 0.2)", timer: 0.3 };

      // Add letter to worm body as new segment
      const tail = wormRef.current[wormRef.current.length - 1];
      const prevTail = wormRef.current.length > 1 ? wormRef.current[wormRef.current.length - 2] : tail;
      const dx = tail.x - prevTail.x;
      const dy = tail.y - prevTail.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      wormRef.current.push({
        x: tail.x + (dx / dist) * SEGMENT_SPACING,
        y: tail.y + (dy / dist) * SEGMENT_SPACING,
        letter: orb.letter,
        hue: 200 + Math.random() * 100,
      });

      // Score
      const pts = 10 * levelRef.current;
      scoreRef.current += pts;
      setScore(scoreRef.current);

      const newIdx = idx + 1;
      letterIndexRef.current = newIdx;

      if (newIdx >= word.length) {
        // Word complete!
        celebrationRef.current = {
          word: word.toUpperCase(),
          emoji: currentWordRef.current.emoji,
          timer: 2.0,
        };
        setTotalWordsSpelled(prev => prev + 1);

        // Massive confetti
        const size = getContainerSize();
        spawnConfetti(size.width / 2, size.height / 3, 40);
        spawnParticles(size.width / 2, size.height / 3, 20, "star");

        // Bonus score for word completion
        scoreRef.current += 50 * levelRef.current;
        setScore(scoreRef.current);

        // Clear remaining orbs
        orbsRef.current = [];

        advanceWord();
      } else {
        // Spawn new letter orbs for next letter
        setTimeout(() => {
          spawnLetterOrbs(word, newIdx, levelRef.current);
          forceRender();
        }, 400);
      }
    } else {
      // Wrong letter!
      spawnParticles(orb.x, orb.y, 10, "crunch");
      flashRef.current = { color: "rgba(248, 113, 113, 0.25)", timer: 0.4 };
      screenShakeRef.current = 0.5;

      // Remove the wrong orb with shatter
      orb.eaten = true;
      orb.eatenTimer = 1;

      livesRef.current -= 1;
      setLives(livesRef.current);

      if (livesRef.current <= 0) {
        setTimeout(() => {
          screenRef.current = "gameOver";
          setScreen("gameOver");
        }, 800);
      }
    }

    forceRender();
  }, [spawnParticles, spawnConfetti, getContainerSize, advanceWord, spawnLetterOrbs, forceRender]);

  // Main physics + animation loop
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = (timestamp - lastTimeRef.current) / 16.667;
      const delta = Math.min(rawDelta, 3);
      lastTimeRef.current = timestamp;
      gameTimeRef.current = timestamp;

      const size = getContainerSize();
      const margin = 35;

      // === WORM PHYSICS ===
      const worm = wormRef.current;
      if (worm.length > 0) {
        const head = worm[0];

        if (isDraggingRef.current) {
          // Head follows drag target with spring-like physics
          const tx = dragTargetRef.current.x;
          const ty = dragTargetRef.current.y;
          const dx = tx - head.x;
          const dy = ty - head.y;

          wormVelRef.current.vx += dx * WORM_FOLLOW_SPEED;
          wormVelRef.current.vy += dy * WORM_FOLLOW_SPEED;
        }

        // Apply friction
        wormVelRef.current.vx *= WORM_FRICTION;
        wormVelRef.current.vy *= WORM_FRICTION;

        // Move head
        head.x += wormVelRef.current.vx * delta;
        head.y += wormVelRef.current.vy * delta;

        // Clamp head to bounds
        head.x = Math.max(margin, Math.min(size.width - margin, head.x));
        head.y = Math.max(margin, Math.min(size.height - margin, head.y));

        // Body segments follow with snake physics
        for (let i = 1; i < worm.length; i++) {
          const leader = worm[i - 1];
          const seg = worm[i];
          const sdx = leader.x - seg.x;
          const sdy = leader.y - seg.y;
          const dist = Math.sqrt(sdx * sdx + sdy * sdy);

          if (dist > SEGMENT_SPACING) {
            const t = SEGMENT_FOLLOW_SPEED * delta;
            const targetX = leader.x - (sdx / dist) * SEGMENT_SPACING;
            const targetY = leader.y - (sdy / dist) * SEGMENT_SPACING;
            seg.x += (targetX - seg.x) * t;
            seg.y += (targetY - seg.y) * t;
          }

          // Subtle sine-wave undulation
          const time = timestamp * 0.002;
          seg.x += Math.sin(time + i * 0.8) * 0.3 * delta;
          seg.y += Math.cos(time * 0.7 + i * 1.1) * 0.2 * delta;
        }

        // === CHECK COLLISIONS WITH LETTER ORBS ===
        const orbs = orbsRef.current;
        for (let oi = orbs.length - 1; oi >= 0; oi--) {
          const orb = orbs[oi];
          if (orb.eaten) continue;

          const odx = head.x - orb.x;
          const ody = head.y - (orb.y + Math.sin(gameTimeRef.current * LETTER_BOB_SPEED + orb.bobPhase) * orb.bobAmp);
          const oDist = Math.sqrt(odx * odx + ody * ody);

          // Warning zone
          if (oDist < WARNING_DISTANCE && !orb.isTarget) {
            orb.warning = true;
            orb.warningTimer = 0.3;
          } else if (orb.warningTimer <= 0) {
            orb.warning = false;
          }

          // Eat zone
          if (oDist < EAT_DISTANCE && isDraggingRef.current) {
            eatLetter(orb);
            break;
          }
        }
      }

      // === LETTER ORB PHYSICS ===
      const orbs = orbsRef.current;
      for (let i = orbs.length - 1; i >= 0; i--) {
        const orb = orbs[i];
        if (orb.eaten) {
          orb.eatenTimer -= 0.05 * delta;
          if (orb.eatenTimer <= 0) {
            orbs.splice(i, 1);
          }
          continue;
        }

        // Drift movement
        orb.x += orb.vx * delta;
        orb.y += orb.vy * delta;
        orb.vx *= LETTER_FRICTION;
        orb.vy *= LETTER_FRICTION;

        // Random drift nudge
        orb.vx += (Math.random() - 0.5) * 0.05 * delta;
        orb.vy += (Math.random() - 0.5) * 0.05 * delta;

        // Bounce off walls
        if (orb.x < margin + orb.radius) { orb.x = margin + orb.radius; orb.vx = Math.abs(orb.vx) * LETTER_BOUNCE; }
        if (orb.x > size.width - margin - orb.radius) { orb.x = size.width - margin - orb.radius; orb.vx = -Math.abs(orb.vx) * LETTER_BOUNCE; }
        if (orb.y < margin + orb.radius) { orb.y = margin + orb.radius; orb.vy = Math.abs(orb.vy) * LETTER_BOUNCE; }
        if (orb.y > size.height - margin - orb.radius) { orb.y = size.height - margin - orb.radius; orb.vy = -Math.abs(orb.vy) * LETTER_BOUNCE; }

        // Warning timer decay
        if (orb.warningTimer > 0) {
          orb.warningTimer -= 0.016 * delta;
        }
      }

      // === PARTICLES ===
      const parts = particlesRef.current;
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.vy += 0.12 * delta; // gravity
        p.life -= (0.03 * delta) / p.maxLife;
        p.rotation += p.rotationSpeed * delta;
        if (p.life <= 0) parts.splice(i, 1);
      }

      // === CONFETTI ===
      const conf = confettiRef.current;
      for (let i = conf.length - 1; i >= 0; i--) {
        const c = conf[i];
        c.x += c.vx * delta;
        c.y += c.vy * delta;
        c.vy += 0.08 * delta;
        c.vx *= 0.99;
        c.rotation += c.rotationSpeed * delta;
        c.life -= 0.008 * delta;
        if (c.life <= 0) conf.splice(i, 1);
      }

      // === FLASH TIMER ===
      if (flashRef.current) {
        flashRef.current.timer -= 0.016 * delta;
        if (flashRef.current.timer <= 0) flashRef.current = null;
      }

      // === CELEBRATION TIMER ===
      if (celebrationRef.current) {
        celebrationRef.current.timer -= 0.016 * delta;
        if (celebrationRef.current.timer <= 0) celebrationRef.current = null;
      }

      // === SCREEN SHAKE ===
      if (screenShakeRef.current > 0) {
        screenShakeRef.current -= 0.016 * delta;
      }

      // === AMBIENT DIRT PARTICLES ===
      if (Math.random() < 0.02 * delta) {
        spawnParticles(
          Math.random() * size.width,
          size.height * 0.6 + Math.random() * size.height * 0.4,
          1, "dirt"
        );
      }

      forceRender();
      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      lastTimeRef.current = 0;
    };
  }, [screen, getContainerSize, eatLetter, spawnParticles, forceRender]);

  // Drag handlers
  const getPointerPos = useCallback((e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return { x: 0, y: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? (e as TouchEvent).touches[0]?.clientX ?? (e as TouchEvent).changedTouches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
    const clientY = "touches" in e ? (e as TouchEvent).touches[0]?.clientY ?? (e as TouchEvent).changedTouches[0]?.clientY ?? 0 : (e as MouseEvent).clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }, []);

  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (screenRef.current !== "playing") return;
    isDraggingRef.current = true;
    const pos = getPointerPos(e as unknown as MouseEvent | TouchEvent);
    dragTargetRef.current = pos;
    if (!tutorialShownRef.current) tutorialShownRef.current = true;
  }, [getPointerPos]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const pos = getPointerPos(e);
    dragTargetRef.current = pos;
  }, [getPointerPos]);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Global drag event listeners
  useEffect(() => {
    if (screen !== "playing") return;
    const move = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const end = () => handleDragEnd();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [screen, handleDragMove, handleDragEnd]);

  // Start game
  const startGame = useCallback(() => {
    screenRef.current = "playing";
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    setTotalWordsSpelled(0);
    scoreRef.current = 0;
    livesRef.current = 3;
    initLevel(1);
  }, [initLevel]);

  // Next level
  const handleNextLevel = useCallback(() => {
    const newLvl = level + 1;
    screenRef.current = "playing";
    setScreen("playing");
    setLevel(newLvl);
    livesRef.current = Math.min(livesRef.current + 1, 3);
    setLives(livesRef.current);
    initLevel(newLvl);
  }, [level, initLevel]);

  const goToMenu = useCallback(() => {
    if (onExit) {
      onExit();
    } else {
      screenRef.current = "intro";
      setScreen("intro");
    }
  }, [onExit]);

  // Derive display values
  const worm = wormRef.current;
  const orbs = orbsRef.current;
  const particles = particlesRef.current;
  const confetti = confettiRef.current;
  const currentWord = currentWordRef.current;
  const letterIdx = letterIndexRef.current;
  const wordsCompleted = wordsCompletedRef.current;
  const wordsNeeded = wordsNeededRef.current;
  const celebration = celebrationRef.current;
  const flash = flashRef.current;
  const shakeAmount = screenShakeRef.current;

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  // Compute worm head eye direction
  let eyeAngle = 0;
  if (worm.length > 0 && orbs.length > 0) {
    const head = worm[0];
    // Find nearest non-eaten orb
    let nearestDist = Infinity;
    let nearestOrb: LetterOrb | null = null;
    for (const orb of orbs) {
      if (orb.eaten) continue;
      const dx = orb.x - head.x;
      const bobY = orb.y + Math.sin(gameTimeRef.current * LETTER_BOB_SPEED + orb.bobPhase) * orb.bobAmp;
      const dy = bobY - head.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestOrb = orb;
      }
    }
    if (nearestOrb) {
      eyeAngle = Math.atan2(
        nearestOrb.y + Math.sin(gameTimeRef.current * LETTER_BOB_SPEED + nearestOrb.bobPhase) * nearestOrb.bobAmp - head.y,
        nearestOrb.x - head.x
      );
    }
  }

  // ===================== INTRO SCREEN =====================
  if (screen === "intro") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-intro-screen">
          <div className="ww-intro-bg-layer">
            {[...Array(15)].map((_, i) => (
              <div key={`dirt-${i}`} className="ww-bg-particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 4 + Math.random() * 10,
                height: 4 + Math.random() * 10,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={`fly-${i}`} className="ww-bg-firefly" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }} />
            ))}
            {[...Array(5)].map((_, i) => (
              <div key={`root-${i}`} className="ww-bg-root" style={{
                left: `${i * 22 + Math.random() * 8}%`,
                height: `${25 + Math.random() * 35}%`,
                animationDelay: `${i * 0.6}s`,
                opacity: 0.12 + Math.random() * 0.08,
              }} />
            ))}
          </div>
          <div className="ww-intro-content">
            <div className="ww-title-row">
              <div className="ww-title-worm-preview">
                <div className="ww-preview-head" />
                <div className="ww-preview-seg" style={{ animationDelay: "0.1s" }} />
                <div className="ww-preview-seg" style={{ animationDelay: "0.2s" }} />
                <div className="ww-preview-seg" style={{ animationDelay: "0.3s" }} />
              </div>
              <h1 className="ww-title">Word Worm</h1>
            </div>
            <p className="ww-subtitle">Drag your worm to eat letters and spell words!</p>

            <div className="ww-how-to-play">
              <h3>How to Play</h3>
              <div className="ww-how-step">
                <div className="ww-how-visual">
                  <div className="ww-mini-orb" style={{ background: "radial-gradient(circle at 35% 30%, #86efac, #22c55e 60%, #15803d)" }}>c</div>
                  <div className="ww-mini-orb" style={{ background: "radial-gradient(circle at 35% 30%, #93c5fd, #3b82f6 60%, #1d4ed8)" }}>a</div>
                  <div className="ww-mini-orb" style={{ background: "radial-gradient(circle at 35% 30%, #c4b5fd, #8b5cf6 60%, #6d28d9)" }}>t</div>
                  <span className="ww-how-arrow">{"\u2192"}</span>
                  <span className="ww-how-emoji">{"\uD83D\uDC31"}</span>
                </div>
                <p><strong>DRAG</strong> the worm to <span className="ww-hl-eat">EAT</span> letters in order!</p>
              </div>
              <div className="ww-how-step">
                <div className="ww-how-visual">
                  <div className="ww-mini-worm-body">
                    <div className="ww-mini-head-circle" />
                    <div className="ww-mini-body-circle" />
                    <div className="ww-mini-body-circle" />
                    <div className="ww-mini-body-circle letter">c</div>
                    <div className="ww-mini-body-circle letter">a</div>
                    <div className="ww-mini-body-circle letter">t</div>
                  </div>
                </div>
                <p>Each letter makes the worm <span className="ww-hl-grow">GROW</span> longer!</p>
              </div>
              <div className="ww-how-step">
                <div className="ww-how-visual">
                  <span className="ww-how-hearts">{"\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F"}</span>
                </div>
                <p>Wrong letters cost a <span className="ww-hl-life">LIFE</span> -- be careful!</p>
              </div>
            </div>

            <button className="ww-play-btn" onClick={startGame}>
              Start Spelling!
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
        <div className="ww-result-screen">
          <div className="ww-result-bg">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="ww-result-confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2.5 + Math.random() * 3}s`,
                backgroundColor: ["#f87171", "#fbbf24", "#4ade80", "#38bdf8", "#a78bfa", "#f472b6"][i % 6],
                width: 5 + Math.random() * 7,
                height: 8 + Math.random() * 12,
              }} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`s-${i}`} className="ww-result-star" style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${1.5 + Math.random() * 1.5}rem`,
              }}>{["\u2728", "\u2B50", "\uD83C\uDF1F"][i % 3]}</div>
            ))}
          </div>
          <div className="ww-result-content">
            <h1 className="ww-result-title">{"\uD83C\uDF89"} Level {level} Complete! {"\uD83C\uDF89"}</h1>
            <div className="ww-result-worm-parade">
              {worm.map((seg, i) => (
                <div key={i} className="ww-parade-seg" style={{
                  animationDelay: `${i * 0.06}s`,
                  background: i === 0
                    ? "radial-gradient(circle at 35% 30%, #86efac, #22c55e 70%, #15803d)"
                    : seg.letter
                    ? "radial-gradient(circle at 35% 30%, #93c5fd, #3b82f6 70%, #1d4ed8)"
                    : "radial-gradient(circle at 35% 30%, #86efac, #4ade80 70%, #16a34a)",
                }}>
                  {i === 0 ? (
                    <div className="ww-parade-eyes">
                      <div className="ww-parade-eye"><div className="ww-parade-pupil" /></div>
                      <div className="ww-parade-eye"><div className="ww-parade-pupil" /></div>
                    </div>
                  ) : seg.letter ? (
                    <span className="ww-parade-letter">{seg.letter}</span>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="ww-result-stats">
              <div className="ww-stat">
                <div className="ww-stat-label">Score</div>
                <div className="ww-stat-value">{score}</div>
              </div>
              <div className="ww-stat">
                <div className="ww-stat-label">Words</div>
                <div className="ww-stat-value">{wordsNeeded}</div>
              </div>
              <div className="ww-stat">
                <div className="ww-stat-label">Worm Length</div>
                <div className="ww-stat-value">{worm.length}</div>
              </div>
            </div>
            <div className="ww-result-buttons">
              <button className="ww-play-btn" onClick={handleNextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button className="ww-secondary-btn" onClick={goToMenu}>Main Menu</button>
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
        <div className="ww-result-screen gameover">
          <div className="ww-result-content">
            <div className="ww-gameover-worm-icon">
              <div className="ww-go-head">
                <div className="ww-go-eyes">
                  <div className="ww-go-eye"><div className="ww-go-pupil sad" /></div>
                  <div className="ww-go-eye"><div className="ww-go-pupil sad" /></div>
                </div>
              </div>
            </div>
            <h1 className="ww-result-title">Oh no! The worm is still hungry!</h1>
            <p className="ww-gameover-sub">You spelled {totalWordsSpelled} word{totalWordsSpelled !== 1 ? "s" : ""} and reached Level {level}</p>
            <div className="ww-result-stats">
              <div className="ww-stat">
                <div className="ww-stat-label">Final Score</div>
                <div className="ww-stat-value">{score}</div>
              </div>
            </div>
            <div className="ww-result-buttons">
              <button className="ww-play-btn" onClick={startGame}>Try Again {"\uD83D\uDD04"}</button>
              <button className="ww-secondary-btn" onClick={goToMenu}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING SCREEN =====================
  const shakeX = shakeAmount > 0 ? (Math.random() - 0.5) * shakeAmount * 12 : 0;
  const shakeY = shakeAmount > 0 ? (Math.random() - 0.5) * shakeAmount * 12 : 0;

  return (
    <div className="ww-game">
      <style>{styles}</style>
      <div className="ww-playing" style={{
        transform: shakeAmount > 0 ? `translate(${shakeX}px, ${shakeY}px)` : undefined
      }}>
        {/* Flash overlay */}
        {flash && (
          <div className="ww-flash" style={{ background: flash.color, opacity: flash.timer / 0.4 }} />
        )}

        {/* Header */}
        <div className="ww-hud">
          <div className="ww-hud-left">
            <button className="ww-exit-btn" onClick={goToMenu}>{"\u2190"}</button>
            <div className="ww-level-pill">Level {level}</div>
          </div>
          <div className="ww-hud-center">
            <span className="ww-hud-lives">{livesDisplay.join(" ")}</span>
          </div>
          <div className="ww-hud-right">
            <div className="ww-score-pill">{"\u2B50"} {score}</div>
          </div>
        </div>

        {/* Word display */}
        <div className="ww-word-bar">
          <div className="ww-word-progress-text">{wordsCompleted} / {wordsNeeded} words</div>
          <div className="ww-word-slots">
            {currentWord.word.split("").map((ch, i) => {
              const filled = i < letterIdx;
              const active = i === letterIdx;
              const seg = filled ? worm.find(s => s.letter === currentWord.word[i]) : null;
              void seg; // used for styling reference
              return (
                <div key={`${currentWord.word}-${i}`}
                  className={`ww-slot ${filled ? "filled" : ""} ${active ? "active" : ""}`}
                >
                  {filled ? ch : active ? "?" : ""}
                </div>
              );
            })}
          </div>
          {!tutorialShownRef.current && letterIdx === 0 && (
            <div className="ww-tutorial-hint">
              {"\uD83D\uDC46"} Drag the worm to eat the letter <strong>{currentWord.word[0]}</strong>!
            </div>
          )}
        </div>

        {/* Game area */}
        <div
          className="ww-arena"
          ref={containerRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          {/* Underground decoration */}
          <div className="ww-underground-decor">
            {[...Array(4)].map((_, i) => (
              <div key={`root-${i}`} className="ww-decor-root" style={{
                left: `${i * 25 + 5}%`,
                height: `${20 + Math.random() * 30}%`,
                animationDelay: `${i * 0.8}s`,
              }} />
            ))}
            {[...Array(3)].map((_, i) => (
              <div key={`mush-${i}`} className="ww-decor-mushroom" style={{
                left: `${20 + i * 30}%`,
                bottom: `${5 + i * 3}%`,
                animationDelay: `${i * 1.5}s`,
              }}>{"\uD83C\uDF44"}</div>
            ))}
          </div>

          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className={`ww-ptcl ww-ptcl-${p.type}`} style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: Math.max(0, p.life),
              transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${Math.max(0, p.life)})`,
            }} />
          ))}

          {/* Confetti */}
          {confetti.map(c => (
            <div key={c.id} className="ww-confetti-p" style={{
              left: c.x,
              top: c.y,
              width: c.width,
              height: c.height,
              backgroundColor: c.color,
              opacity: Math.max(0, c.life),
              transform: `translate(-50%, -50%) rotate(${c.rotation}deg)`,
            }} />
          ))}

          {/* Letter orbs */}
          {orbs.map(orb => {
            if (orb.eaten) return null;
            const bobY = Math.sin(gameTimeRef.current * LETTER_BOB_SPEED + orb.bobPhase) * orb.bobAmp;
            const isWarn = orb.warning && !orb.isTarget;
            return (
              <div
                key={orb.id}
                className={`ww-orb ${orb.isTarget ? "target" : "distractor"} ${isWarn ? "warning" : ""}`}
                style={{
                  left: orb.x,
                  top: orb.y + bobY,
                  width: orb.radius * 2,
                  height: orb.radius * 2,
                  "--orb-hue": orb.isTarget ? orb.hue : isWarn ? 0 : orb.hue,
                } as React.CSSProperties}
              >
                <div className="ww-orb-glow" />
                <div className="ww-orb-shine" />
                <span className="ww-orb-letter">{orb.letter}</span>
              </div>
            );
          })}

          {/* Celebration effect */}
          {celebration && (
            <div className="ww-celebration" style={{
              opacity: Math.min(1, celebration.timer / 0.3),
            }}>
              <div className="ww-celeb-word">{celebration.word}!</div>
              <div className="ww-celeb-emoji">{celebration.emoji}</div>
              <div className="ww-celeb-sparkles">{"\u2728\u2B50\u2728"}</div>
            </div>
          )}

          {/* Worm */}
          {worm.map((seg, i) => {
            const isHead = i === 0;
            const segSize = isHead ? 44 : 34 - Math.min(i * 0.5, 8);
            return (
              <div
                key={i}
                className={`ww-seg ${isHead ? "head" : "body"} ${seg.letter ? "has-letter" : ""}`}
                style={{
                  left: seg.x,
                  top: seg.y,
                  width: segSize,
                  height: segSize,
                  zIndex: 100 - i,
                  "--seg-hue": seg.hue,
                } as React.CSSProperties}
              >
                {isHead ? (
                  <>
                    <div className="ww-head-shine" />
                    <div className="ww-eyes">
                      <div className="ww-eye">
                        <div className="ww-pupil" style={{
                          transform: `translate(${Math.cos(eyeAngle) * 2.5}px, ${Math.sin(eyeAngle) * 2.5}px)`,
                        }} />
                      </div>
                      <div className="ww-eye">
                        <div className="ww-pupil" style={{
                          transform: `translate(${Math.cos(eyeAngle) * 2.5}px, ${Math.sin(eyeAngle) * 2.5}px)`,
                        }} />
                      </div>
                    </div>
                    {isDraggingRef.current && <div className="ww-mouth open" />}
                    {!isDraggingRef.current && <div className="ww-mouth" />}
                  </>
                ) : (
                  <>
                    <div className="ww-body-shine" />
                    {seg.letter && <span className="ww-seg-letter">{seg.letter}</span>}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom hint */}
        <div className="ww-bottom-bar">
          <span className="ww-bottom-hint">{"\uD83D\uDC46"} Drag anywhere to move the worm</span>
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
      #1a0e05 0%, #2d1a0a 15%, #3b1f0a 35%,
      #4a2810 55%, #3b1f0a 75%, #2d1a0a 90%, #1a0e05 100%
    );
  }

  /* ===================== INTRO ===================== */
  .ww-intro-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ww-intro-bg-layer { position: absolute; inset: 0; overflow: hidden; }

  .ww-bg-particle {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, rgba(160,120,60,0.5), rgba(100,70,30,0.15));
    animation: bgFloat 7s ease-in-out infinite;
  }

  @keyframes bgFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
    50% { transform: translateY(-30px) rotate(180deg); opacity: 0.5; }
  }

  .ww-bg-firefly {
    position: absolute; width: 6px; height: 6px; border-radius: 50%;
    background: radial-gradient(circle, rgba(200,230,100,0.9), transparent);
    box-shadow: 0 0 14px 5px rgba(180,220,80,0.35);
    animation: fireflyDrift 5s ease-in-out infinite;
  }

  @keyframes fireflyDrift {
    0%, 100% { opacity: 0; transform: translate(0,0) scale(0.5); }
    25% { opacity: 1; transform: translate(12px,-18px) scale(1.1); }
    50% { opacity: 0.6; transform: translate(-10px,-30px) scale(1.3); }
    75% { opacity: 0.9; transform: translate(18px,-12px) scale(0.9); }
  }

  .ww-bg-root {
    position: absolute; top: 0; width: 3px;
    background: linear-gradient(180deg, rgba(80,50,20,0.35) 0%, rgba(60,40,15,0.15) 50%, transparent 100%);
    border-radius: 0 0 2px 2px;
    animation: rootSway 6s ease-in-out infinite;
    transform-origin: top center;
  }

  @keyframes rootSway {
    0%, 100% { transform: rotate(-4deg); }
    50% { transform: rotate(4deg); }
  }

  .ww-intro-content, .ww-result-content {
    position: relative; z-index: 10; text-align: center; padding: 1.5rem; max-width: 480px; width: 100%;
  }

  .ww-title-row {
    display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.5rem;
  }

  .ww-title-worm-preview {
    display: flex; gap: 3px; align-items: center;
    animation: previewSlither 2s ease-in-out infinite;
  }

  @keyframes previewSlither {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-6px) rotate(-2deg); }
    75% { transform: translateY(-6px) rotate(2deg); }
  }

  .ww-preview-head {
    width: 32px; height: 32px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #86efac, #22c55e 60%, #15803d);
    box-shadow: 0 4px 15px rgba(34,197,94,0.4), inset 0 -4px 8px rgba(0,0,0,0.2);
  }

  .ww-preview-seg {
    width: 24px; height: 24px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #86efac, #4ade80 60%, #16a34a);
    box-shadow: 0 3px 10px rgba(74,222,128,0.3), inset 0 -3px 6px rgba(0,0,0,0.15);
    animation: segBob 1.5s ease-in-out infinite;
  }

  @keyframes segBob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .ww-title {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #4ade80, #a3e635, #facc15, #fb923c);
    background-size: 200% 200%;
    animation: titleGrad 4s ease infinite;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    filter: drop-shadow(0 2px 8px rgba(74,222,128,0.3));
  }

  @keyframes titleGrad {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .ww-subtitle {
    color: #a3e635; font-size: 1.1rem; margin-bottom: 1.5rem;
    text-shadow: 0 0 15px rgba(163,230,53,0.3);
  }

  .ww-how-to-play {
    background: rgba(0,0,0,0.35); border: 2px solid rgba(163,230,53,0.2);
    border-radius: 24px; padding: 1.3rem; margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
  }

  .ww-how-to-play h3 { color: white; font-size: 1.15rem; margin-bottom: 1rem; }

  .ww-how-step { margin-bottom: 1.2rem; }
  .ww-how-step:last-child { margin-bottom: 0; }

  .ww-how-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;
  }

  .ww-mini-orb {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 1.1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: miniOrbPulse 2s ease-in-out infinite;
  }

  @keyframes miniOrbPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  .ww-mini-orb:nth-child(2) { animation-delay: 0.15s; }
  .ww-mini-orb:nth-child(3) { animation-delay: 0.3s; }

  .ww-how-arrow { color: #64748b; font-size: 1.3rem; }
  .ww-how-emoji { font-size: 2rem; }
  .ww-how-hearts { font-size: 1.4rem; }

  .ww-mini-worm-body {
    display: flex; align-items: center; gap: 2px;
  }

  .ww-mini-head-circle {
    width: 28px; height: 28px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #86efac, #22c55e 60%, #15803d);
    box-shadow: 0 3px 10px rgba(34,197,94,0.4);
  }

  .ww-mini-body-circle {
    width: 22px; height: 22px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #86efac, #4ade80 60%, #16a34a);
    box-shadow: 0 2px 8px rgba(74,222,128,0.3);
  }

  .ww-mini-body-circle.letter {
    background: radial-gradient(circle at 35% 30%, #93c5fd, #3b82f6 60%, #1d4ed8);
    box-shadow: 0 2px 8px rgba(59,130,246,0.3);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.65rem; font-weight: 800; color: white;
  }

  .ww-how-step p { color: #cbd5e1; font-size: 0.92rem; }
  .ww-hl-eat { color: #4ade80; font-weight: 700; }
  .ww-hl-grow { color: #fb923c; font-weight: 700; }
  .ww-hl-life { color: #f87171; font-weight: 700; }

  .ww-play-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 0.9rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(74,222,128,0.35), 0 3px 12px rgba(0,0,0,0.2);
    position: relative; overflow: hidden;
  }

  .ww-play-btn::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    border-radius: 50px;
  }

  .ww-play-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 40px rgba(74,222,128,0.45), 0 5px 18px rgba(0,0,0,0.25);
  }

  .ww-play-btn:active { transform: translateY(0) scale(0.98); }

  .ww-secondary-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .ww-secondary-btn:hover { border-color: rgba(255,255,255,0.35); color: white; }

  /* ===================== RESULT SCREENS ===================== */
  .ww-result-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ww-result-screen.gameover {
    background: linear-gradient(180deg, #1a0e05 0%, #2d1a0a 50%, #1a0e05 100%);
  }

  .ww-result-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .ww-result-confetti {
    position: absolute; top: -20px; border-radius: 2px;
    animation: rConfettiFall 4s ease-in-out infinite;
  }

  @keyframes rConfettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
  }

  .ww-result-star {
    position: absolute; animation: rStarPop 3s ease-in-out infinite;
  }

  @keyframes rStarPop {
    0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
    50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
  }

  .ww-result-title {
    font-size: clamp(1.6rem, 5.5vw, 2.4rem); color: white; margin-bottom: 1.2rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }

  .ww-result-worm-parade {
    display: flex; justify-content: center; gap: 4px; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .ww-parade-seg {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3), inset 0 -4px 8px rgba(0,0,0,0.2);
    animation: paradeWave 1.2s ease infinite;
  }

  @keyframes paradeWave {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .ww-parade-eyes { display: flex; gap: 5px; }

  .ww-parade-eye {
    width: 8px; height: 8px; border-radius: 50%;
    background: white;
    display: flex; align-items: center; justify-content: center;
  }

  .ww-parade-pupil {
    width: 4px; height: 4px; border-radius: 50%; background: #1e293b;
  }

  .ww-parade-letter {
    font-size: 0.85rem; font-weight: 800; color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .ww-gameover-worm-icon {
    margin-bottom: 1rem;
    display: flex; justify-content: center;
  }

  .ww-go-head {
    width: 64px; height: 64px; border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #86efac, #22c55e 60%, #15803d);
    box-shadow: 0 8px 25px rgba(34,197,94,0.4);
    display: flex; align-items: center; justify-content: center;
    animation: goHeadSad 2s ease-in-out infinite;
  }

  @keyframes goHeadSad {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  .ww-go-eyes { display: flex; gap: 10px; }

  .ww-go-eye {
    width: 14px; height: 14px; border-radius: 50%;
    background: white;
    display: flex; align-items: center; justify-content: center;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  }

  .ww-go-pupil {
    width: 7px; height: 7px; border-radius: 50%; background: #1e293b;
  }

  .ww-go-pupil.sad { transform: translateY(2px); }

  .ww-gameover-sub { color: #94a3b8; font-size: 1rem; margin-bottom: 1.5rem; }

  .ww-result-stats { display: flex; justify-content: center; gap: 2rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .ww-stat { display: flex; flex-direction: column; align-items: center; }
  .ww-stat-label { font-size: 0.8rem; color: #64748b; margin-bottom: 0.25rem; }
  .ww-stat-value { font-size: 1.8rem; font-weight: 900; color: white; text-shadow: 0 2px 6px rgba(0,0,0,0.3); }
  .ww-result-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  /* ===================== PLAYING ===================== */
  .ww-playing {
    height: 100%; display: flex; flex-direction: column; position: relative;
    transition: transform 0.05s ease;
  }

  .ww-flash {
    position: fixed; inset: 0; z-index: 300; pointer-events: none;
    transition: opacity 0.1s ease;
  }

  .ww-hud {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0.8rem; background: rgba(0,0,0,0.5); z-index: 50;
    border-bottom: 1px solid rgba(163,230,53,0.08);
    backdrop-filter: blur(8px);
  }

  .ww-hud-left, .ww-hud-right { display: flex; align-items: center; gap: 0.6rem; }
  .ww-hud-center { display: flex; align-items: center; }

  .ww-exit-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
    color: white; font-size: 1.1rem; cursor: pointer; transition: all 0.2s ease;
    display: flex; align-items: center; justify-content: center;
  }

  .ww-exit-btn:hover { background: rgba(255,255,255,0.15); }

  .ww-level-pill {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 16px; font-weight: 700; color: white; font-size: 0.85rem;
    box-shadow: 0 3px 10px rgba(74,222,128,0.3);
  }

  .ww-hud-lives { font-size: 1.1rem; letter-spacing: 2px; }

  .ww-score-pill {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.8rem; background: rgba(251,191,36,0.12);
    border: 1px solid rgba(251,191,36,0.18);
    border-radius: 16px; color: #fbbf24; font-weight: 700; font-size: 0.85rem;
  }

  /* Word bar */
  .ww-word-bar {
    padding: 0.6rem 0.8rem; text-align: center;
    background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%);
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .ww-word-progress-text { font-size: 0.75rem; color: #64748b; margin-bottom: 0.4rem; }

  .ww-word-slots { display: flex; justify-content: center; gap: 0.4rem; }

  .ww-slot {
    width: 48px; height: 52px;
    border: 3px dashed rgba(255,255,255,0.12); border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; font-weight: 900; color: #475569;
    transition: all 0.3s ease;
    background: rgba(0,0,0,0.2);
  }

  .ww-slot.filled {
    background: rgba(74,222,128,0.15);
    border: 3px solid rgba(74,222,128,0.5);
    color: #4ade80; border-style: solid;
    box-shadow: 0 0 12px rgba(74,222,128,0.15), inset 0 0 8px rgba(74,222,128,0.08);
    animation: slotFill 0.3s ease;
  }

  @keyframes slotFill {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.12); }
    100% { transform: scale(1); }
  }

  .ww-slot.active {
    border-color: #facc15; animation: slotActive 1.2s ease-in-out infinite;
    color: #facc15;
    box-shadow: 0 0 15px rgba(250,204,21,0.15);
  }

  @keyframes slotActive {
    0%, 100% { transform: scale(1); box-shadow: 0 0 12px rgba(250,204,21,0.1); }
    50% { transform: scale(1.05); box-shadow: 0 0 22px rgba(250,204,21,0.25); }
  }

  .ww-tutorial-hint {
    color: #facc15; font-size: 0.8rem; margin-top: 0.4rem;
    animation: hintPulse 2s ease-in-out infinite;
    text-shadow: 0 0 8px rgba(250,204,21,0.25);
  }

  @keyframes hintPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Arena */
  .ww-arena {
    flex: 1; position: relative; overflow: hidden; touch-action: none;
    cursor: grab;
    background: linear-gradient(180deg,
      rgba(0,0,0,0.15) 0%,
      rgba(30,15,5,0.25) 30%,
      rgba(40,25,10,0.35) 60%,
      rgba(20,10,3,0.4) 100%
    );
  }

  .ww-arena:active { cursor: grabbing; }

  .ww-underground-decor { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  .ww-decor-root {
    position: absolute; top: 0; width: 3px;
    background: linear-gradient(180deg, rgba(80,50,20,0.3) 0%, rgba(60,40,15,0.1) 50%, transparent 100%);
    border-radius: 0 0 2px 2px;
    animation: rootSway 6s ease-in-out infinite;
    transform-origin: top center;
  }

  .ww-decor-mushroom {
    position: absolute; font-size: 1.6rem; opacity: 0.25;
    animation: mushGlow 3.5s ease-in-out infinite;
    filter: drop-shadow(0 0 6px rgba(200,150,50,0.25));
  }

  @keyframes mushGlow {
    0%, 100% { opacity: 0.15; filter: drop-shadow(0 0 4px rgba(200,150,50,0.15)); }
    50% { opacity: 0.35; filter: drop-shadow(0 0 10px rgba(200,150,50,0.4)); }
  }

  /* Particles */
  .ww-ptcl {
    position: absolute; pointer-events: none; z-index: 150;
    transform-origin: center;
  }

  .ww-ptcl-crunch { border-radius: 50%; box-shadow: 0 0 5px currentColor; }
  .ww-ptcl-sparkle { border-radius: 50%; box-shadow: 0 0 8px currentColor; }
  .ww-ptcl-dirt { border-radius: 50%; }
  .ww-ptcl-star {
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
  .ww-ptcl-confetti { border-radius: 2px; }

  .ww-confetti-p {
    position: absolute; pointer-events: none; z-index: 150;
    border-radius: 2px;
  }

  /* Letter orbs */
  .ww-orb {
    position: absolute; transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle at 30% 25%,
      hsl(var(--orb-hue), 75%, 70%) 0%,
      hsl(var(--orb-hue), 65%, 50%) 50%,
      hsl(var(--orb-hue), 55%, 38%) 100%
    );
    box-shadow:
      0 8px 25px hsla(var(--orb-hue), 70%, 45%, 0.4),
      0 0 20px hsla(var(--orb-hue), 80%, 55%, 0.25),
      inset 0 -8px 15px hsla(var(--orb-hue), 75%, 25%, 0.3);
    display: flex; align-items: center; justify-content: center;
    z-index: 20;
    animation: orbFloat 3s ease-in-out infinite;
    transition: box-shadow 0.2s ease;
  }

  @keyframes orbFloat {
    0%, 100% { /* handled by JS bobbing */ }
  }

  .ww-orb.target {
    box-shadow:
      0 8px 25px hsla(var(--orb-hue), 70%, 45%, 0.5),
      0 0 30px hsla(var(--orb-hue), 80%, 55%, 0.35),
      inset 0 -8px 15px hsla(var(--orb-hue), 75%, 25%, 0.3);
    animation: targetPulse 2s ease-in-out infinite;
  }

  @keyframes targetPulse {
    0%, 100% { box-shadow: 0 8px 25px hsla(var(--orb-hue),70%,45%,0.5), 0 0 25px hsla(var(--orb-hue),80%,55%,0.3), inset 0 -8px 15px hsla(var(--orb-hue),75%,25%,0.3); }
    50% { box-shadow: 0 8px 30px hsla(var(--orb-hue),70%,45%,0.7), 0 0 40px hsla(var(--orb-hue),80%,60%,0.5), inset 0 -8px 15px hsla(var(--orb-hue),75%,25%,0.3); }
  }

  .ww-orb.warning {
    animation: orbShake 0.15s ease infinite;
    box-shadow:
      0 8px 25px rgba(239,68,68,0.5),
      0 0 30px rgba(239,68,68,0.4),
      inset 0 -8px 15px rgba(127,29,29,0.3);
    background: radial-gradient(circle at 30% 25%,
      hsl(0, 75%, 65%) 0%,
      hsl(0, 65%, 45%) 50%,
      hsl(0, 55%, 35%) 100%
    );
  }

  @keyframes orbShake {
    0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
    25% { transform: translate(-48%, -50%) rotate(2deg); }
    75% { transform: translate(-52%, -50%) rotate(-2deg); }
  }

  .ww-orb-glow {
    position: absolute; inset: -8px; border-radius: 50%;
    background: radial-gradient(circle,
      hsla(var(--orb-hue), 70%, 55%, 0.15) 0%, transparent 70%
    );
    pointer-events: none;
    animation: orbGlowPulse 2.5s ease-in-out infinite;
  }

  @keyframes orbGlowPulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.15); }
  }

  .ww-orb-shine {
    position: absolute; top: 12%; left: 18%; width: 35%; height: 22%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }

  .ww-orb-letter {
    font-size: 1.6rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.1);
    z-index: 2; position: relative;
  }

  /* Celebration */
  .ww-celebration {
    position: absolute; top: 30%; left: 50%; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 250; text-align: center;
    animation: celebAnim 2s ease forwards;
  }

  @keyframes celebAnim {
    0% { transform: translate(-50%, -50%) scale(0); }
    15% { transform: translate(-50%, -50%) scale(1.3); }
    30% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -80%) scale(0.8); }
  }

  .ww-celeb-word {
    padding: 0.7rem 1.5rem;
    background: linear-gradient(135deg, #facc15, #f59e0b, #fb923c);
    border-radius: 22px; font-size: 1.8rem; font-weight: 900; color: white;
    white-space: nowrap;
    box-shadow: 0 8px 35px rgba(250,204,21,0.5), 0 0 50px rgba(250,204,21,0.2);
    letter-spacing: 3px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    margin-bottom: 0.3rem;
  }

  .ww-celeb-emoji {
    font-size: 3rem;
    animation: emojiPop 0.6s ease;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
  }

  @keyframes emojiPop {
    0% { transform: scale(0) rotate(-20deg); }
    50% { transform: scale(1.4) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  .ww-celeb-sparkles {
    font-size: 1.5rem; margin-top: 0.2rem;
    animation: sparkleRotate 0.8s linear infinite;
  }

  @keyframes sparkleRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
  }

  /* Worm segments */
  .ww-seg {
    position: absolute; transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: none;
  }

  .ww-seg.head {
    background: radial-gradient(circle at 32% 28%,
      #86efac 0%, #22c55e 55%, #15803d 100%
    );
    box-shadow:
      0 6px 20px rgba(34,197,94,0.5),
      0 0 25px rgba(74,222,128,0.3),
      inset 0 -6px 12px rgba(0,0,0,0.2);
    z-index: 100;
  }

  .ww-seg.body {
    background: radial-gradient(circle at 32% 28%,
      hsl(var(--seg-hue), 70%, 65%) 0%,
      hsl(var(--seg-hue), 65%, 48%) 55%,
      hsl(var(--seg-hue), 55%, 35%) 100%
    );
    box-shadow:
      0 4px 15px hsla(var(--seg-hue), 60%, 40%, 0.4),
      inset 0 -4px 10px rgba(0,0,0,0.2);
  }

  .ww-seg.body.has-letter {
    background: radial-gradient(circle at 32% 28%,
      hsl(var(--seg-hue), 75%, 70%) 0%,
      hsl(var(--seg-hue), 70%, 52%) 55%,
      hsl(var(--seg-hue), 60%, 38%) 100%
    );
    box-shadow:
      0 4px 15px hsla(var(--seg-hue), 70%, 45%, 0.5),
      0 0 15px hsla(var(--seg-hue), 80%, 55%, 0.2),
      inset 0 -4px 10px rgba(0,0,0,0.2);
  }

  .ww-head-shine {
    position: absolute; top: 10%; left: 15%; width: 40%; height: 25%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }

  .ww-body-shine {
    position: absolute; top: 12%; left: 18%; width: 35%; height: 20%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }

  .ww-eyes {
    display: flex; gap: 8px; position: absolute;
    top: 30%; left: 50%; transform: translate(-50%, -50%);
  }

  .ww-eye {
    width: 12px; height: 12px; border-radius: 50%;
    background: white;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .ww-pupil {
    width: 6px; height: 6px; border-radius: 50%;
    background: #1e293b;
    transition: transform 0.1s ease;
  }

  .ww-mouth {
    position: absolute; bottom: 22%; left: 50%; transform: translateX(-50%);
    width: 10px; height: 5px;
    border-radius: 0 0 10px 10px;
    background: #15803d;
    transition: all 0.15s ease;
  }

  .ww-mouth.open {
    width: 14px; height: 10px;
    border-radius: 0 0 14px 14px;
    background: #991b1b;
    box-shadow: inset 0 -2px 4px rgba(0,0,0,0.3);
  }

  .ww-seg-letter {
    font-size: 0.9rem; font-weight: 800; color: white;
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    z-index: 2;
  }

  /* Bottom bar */
  .ww-bottom-bar {
    padding: 0.5rem 0.8rem; background: rgba(0,0,0,0.4); text-align: center;
  }

  .ww-bottom-hint { font-size: 0.78rem; color: #64748b; }

  @media (max-width: 600px) {
    .ww-slot { width: 40px; height: 44px; font-size: 1.3rem; }
    .ww-orb-letter { font-size: 1.3rem; }
    .ww-hud-center { display: none; }
    .ww-celeb-word { font-size: 1.4rem; padding: 0.5rem 1rem; }
    .ww-title { font-size: clamp(1.6rem, 6vw, 2.5rem); }
  }
`;
