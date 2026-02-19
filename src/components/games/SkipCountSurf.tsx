"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type React from "react";

// ============================================================
// SKIP COUNT SURF  --  Skip Counting Surfing Game
// Year 1 / Year 2 Mathematics
// Curriculum: "Skip count in twos, fives or tens to at least 120"
// Core: Surfer moves forward automatically, player drags UP/DOWN
//        to steer toward correct buoys in a skip-count sequence.
// ============================================================

interface SkipCountSurfProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";
type SkipType = 2 | 5 | 10;

interface Buoy {
  id: number;
  number: number;
  x: number;
  y: number;
  isCorrect: boolean;
  collected: boolean;
  missed: boolean;
  bobOffset: number;
  bobSpeed: number;
  hue: number;
  scale: number;
  opacity: number;
}

interface SplashParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
}

interface FoamParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
}

interface FlyingNumber {
  id: number;
  value: number;
  startX: number;
  startY: number;
  age: number;
}

interface SeaCreature {
  id: number;
  emoji: string;
  x: number;
  y: number;
  speed: number;
  direction: 1 | -1;
  wobblePhase: number;
  size: number;
  depth: number;
}

interface Cloud {
  id: number;
  x: number;
  y: number;
  speed: number;
  width: number;
  opacity: number;
}

const SEA_CREATURES = [
  "\uD83D\uDC20", "\uD83D\uDC1F", "\uD83D\uDC2C", "\uD83D\uDC22",
  "\uD83D\uDC19", "\uD83E\uDD80", "\uD83E\uDD88", "\uD83D\uDC21",
  "\uD83E\uDDAD", "\uD83E\uDD91",
];

let idCounter = 0;
const nextId = () => ++idCounter;

export default function SkipCountSurf({ onExit }: SkipCountSurfProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [skipType, setSkipType] = useState<SkipType>(2);
  const [buoys, setBuoys] = useState<Buoy[]>([]);
  const [nextExpectedIdx, setNextExpectedIdx] = useState(0);
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [collectedSequence, setCollectedSequence] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [neededCount, setNeededCount] = useState(8);
  const [splashParticles, setSplashParticles] = useState<SplashParticle[]>([]);
  const [foamTrail, setFoamTrail] = useState<FoamParticle[]>([]);
  const [flyingNumbers, setFlyingNumbers] = useState<FlyingNumber[]>([]);
  const [comboCount, setComboCount] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [seaCreatures, setSeaCreatures] = useState<SeaCreature[]>([]);
  const [clouds, setClouds] = useState<Cloud[]>([]);

  // Surfer state
  const [surferY, setSurferY] = useState(0.5); // 0..1 normalized
  const [surferVy, setSurferVy] = useState(0);
  const [surferLean, setSurferLean] = useState(0); // visual lean
  const [wipeoutAnim, setWipeoutAnim] = useState(false);
  const [boostAnim, setBoostAnim] = useState(false);

  // Drag state
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const surferStartYRef = useRef(0.5);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const frameRef = useRef(0);
  const scrollXRef = useRef(0); // horizontal scroll position
  const buoySpawnTimerRef = useRef(0);

  // Refs for animation loop
  const screenRef = useRef(screen);
  const buoysRef = useRef(buoys);
  const surferYRef = useRef(surferY);
  const surferVyRef = useRef(surferVy);
  const livesRef = useRef(lives);
  const comboRef = useRef(comboCount);
  const nextExpectedRef = useRef(nextExpectedIdx);
  const correctCountRef = useRef(correctCount);
  const neededCountRef = useRef(neededCount);
  const currentSeqRef = useRef(currentSequence);
  const skipTypeRef = useRef(skipType);
  const levelRef = useRef(level);

  useEffect(() => { screenRef.current = screen; }, [screen]);
  useEffect(() => { buoysRef.current = buoys; }, [buoys]);
  useEffect(() => { surferYRef.current = surferY; }, [surferY]);
  useEffect(() => { surferVyRef.current = surferVy; }, [surferVy]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { comboRef.current = comboCount; }, [comboCount]);
  useEffect(() => { nextExpectedRef.current = nextExpectedIdx; }, [nextExpectedIdx]);
  useEffect(() => { correctCountRef.current = correctCount; }, [correctCount]);
  useEffect(() => { neededCountRef.current = neededCount; }, [neededCount]);
  useEffect(() => { currentSeqRef.current = currentSequence; }, [currentSequence]);
  useEffect(() => { skipTypeRef.current = skipType; }, [skipType]);
  useEffect(() => { levelRef.current = level; }, [level]);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 400, height: 500 };
  }, []);

  const getSkipForLevel = useCallback((lvl: number): SkipType => {
    if (lvl <= 3) return 2;
    if (lvl <= 6) return 5;
    if (lvl <= 9) return 10;
    const types: SkipType[] = [2, 5, 10];
    return types[(lvl - 1) % 3];
  }, []);

  const generateSequence = useCallback((skip: SkipType, lvl: number): number[] => {
    const startFrom = lvl <= 3 ? 0 : Math.floor(Math.random() * 5) * skip;
    const length = Math.min(8 + Math.floor(lvl / 2), 15);
    const seq: number[] = [];
    for (let i = 0; i < length; i++) {
      seq.push(startFrom + skip * (i + 1));
    }
    return seq;
  }, []);

  const createSplash = useCallback((x: number, y: number, type: "correct" | "wrong" | "combo"): SplashParticle[] => {
    const count = type === "combo" ? 30 : type === "correct" ? 20 : 12;
    const particles: SplashParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
      const speed = type === "combo" ? 5 + Math.random() * 8 : 3 + Math.random() * 6;
      particles.push({
        id: nextId(),
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === "correct" || type === "combo" ? 4 : 2),
        size: type === "combo" ? 5 + Math.random() * 7 : 3 + Math.random() * 5,
        opacity: 1,
        hue: type === "correct" || type === "combo" ? 170 + Math.random() * 30 : 0 + Math.random() * 20,
        life: 0,
      });
    }
    return particles;
  }, []);

  const spawnBuoyWave = useCallback((scrollPos: number, expectedNum: number, skip: SkipType, lvl: number) => {
    const size = getContainerSize();
    const newBuoys: Buoy[] = [];
    const numBuoys = Math.min(3 + Math.floor(lvl / 3), 6);
    const spacing = size.height / (numBuoys + 1);
    const baseX = scrollPos + size.width + 100 + Math.random() * 80;

    // Place correct buoy
    const correctSlot = Math.floor(Math.random() * numBuoys);
    for (let i = 0; i < numBuoys; i++) {
      const yPos = spacing * (i + 1);
      const isCorrect = i === correctSlot;
      let num: number;
      if (isCorrect) {
        num = expectedNum;
      } else {
        // Distractor: nearby but wrong number
        do {
          const offset = Math.floor(Math.random() * skip * 3) + 1;
          num = expectedNum + (Math.random() > 0.5 ? offset : -offset);
          num = Math.max(1, num);
        } while (num === expectedNum);
      }

      newBuoys.push({
        id: nextId(),
        number: num,
        x: baseX + (Math.random() - 0.5) * 60,
        y: yPos,
        isCorrect,
        collected: false,
        missed: false,
        bobOffset: Math.random() * Math.PI * 2,
        bobSpeed: 1.5 + Math.random() * 1,
        hue: isCorrect ? 150 + Math.random() * 30 : 200 + Math.random() * 80,
        scale: 1,
        opacity: 1,
      });
    }

    setBuoys(prev => [...prev, ...newBuoys]);
  }, [getContainerSize]);

  const spawnCreatures = useCallback(() => {
    const size = getContainerSize();
    const creatures: SeaCreature[] = [];
    for (let i = 0; i < 5; i++) {
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      creatures.push({
        id: nextId(),
        emoji: SEA_CREATURES[Math.floor(Math.random() * SEA_CREATURES.length)],
        x: dir === 1 ? -50 : size.width + 50,
        y: size.height * 0.4 + Math.random() * size.height * 0.5,
        speed: 0.3 + Math.random() * 0.5,
        direction: dir,
        wobblePhase: Math.random() * Math.PI * 2,
        size: 1 + Math.random() * 0.8,
        depth: 0.3 + Math.random() * 0.7,
      });
    }
    return creatures;
  }, [getContainerSize]);

  const spawnClouds = useCallback(() => {
    const size = getContainerSize();
    const c: Cloud[] = [];
    for (let i = 0; i < 5; i++) {
      c.push({
        id: i,
        x: Math.random() * size.width,
        y: 10 + Math.random() * 50,
        speed: 0.1 + Math.random() * 0.25,
        width: 70 + Math.random() * 120,
        opacity: 0.3 + Math.random() * 0.35,
      });
    }
    return c;
  }, [getContainerSize]);

  const initLevel = useCallback((lvl: number) => {
    const skip = getSkipForLevel(lvl);
    const seq = generateSequence(skip, lvl);
    setSkipType(skip);
    setCurrentSequence(seq);
    setNextExpectedIdx(0);
    setCollectedSequence([]);
    setCorrectCount(0);
    setNeededCount(seq.length);
    setBuoys([]);
    setSplashParticles([]);
    setFoamTrail([]);
    setFlyingNumbers([]);
    setComboCount(0);
    setMaxCombo(0);
    setSurferY(0.5);
    setSurferVy(0);
    setSurferLean(0);
    setWipeoutAnim(false);
    setBoostAnim(false);
    scrollXRef.current = 0;
    buoySpawnTimerRef.current = 0;
    frameRef.current = 0;
    setSeaCreatures(spawnCreatures());
    setClouds(spawnClouds());

    // Spawn first wave of buoys after a short delay
    setTimeout(() => {
      spawnBuoyWave(0, seq[0], skip, lvl);
    }, 600);
  }, [getSkipForLevel, generateSequence, spawnBuoyWave, spawnCreatures, spawnClouds]);

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
    setLives(3);
    initLevel(newLevel);
  };

  // ---- DRAG HANDLING ----
  const handlePointerDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (screen !== "playing") return;
    e.preventDefault();
    isDraggingRef.current = true;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    dragStartYRef.current = clientY;
    surferStartYRef.current = surferYRef.current;
  }, [screen]);

  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientX !== undefined ? (e as MouseEvent).clientY : 0;
    const size = getContainerSize();
    const deltaY = clientY - dragStartYRef.current;
    const normalizedDelta = deltaY / size.height;
    let newY = surferStartYRef.current + normalizedDelta;
    newY = Math.max(0.05, Math.min(0.95, newY));
    setSurferY(newY);
    const lean = (newY - surferYRef.current) * 80;
    setSurferLean(Math.max(-25, Math.min(25, lean)));
  }, [getContainerSize]);

  const handlePointerUp = useCallback(() => {
    isDraggingRef.current = false;
    setSurferLean(0);
  }, []);

  useEffect(() => {
    if (screen !== "playing") return;
    const moveHandler = (e: MouseEvent | TouchEvent) => handlePointerMove(e);
    const upHandler = () => handlePointerUp();
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchmove", moveHandler, { passive: false });
    window.addEventListener("touchend", upHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", upHandler);
    };
  }, [screen, handlePointerMove, handlePointerUp]);

  // ---- MAIN GAME LOOP ----
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const SURFER_X_RATIO = 0.22; // surfer sits at 22% from left
    const BASE_SCROLL_SPEED = 1.2;
    const HIT_DISTANCE = 55;

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = timestamp - lastTimeRef.current;
      const delta = Math.min(rawDelta / 16, 3);
      lastTimeRef.current = timestamp;
      frameRef.current++;
      const frame = frameRef.current;
      const size = getContainerSize();

      // Scroll speed increases with level
      const scrollSpeed = (BASE_SCROLL_SPEED + levelRef.current * 0.15) * delta;
      scrollXRef.current += scrollSpeed;
      const scrollX = scrollXRef.current;

      const surferScreenX = size.width * SURFER_X_RATIO;
      const surferScreenY = surferYRef.current * size.height;

      // Surfer Y physics (smooth towards drag position, with some inertia when not dragging)
      if (!isDraggingRef.current) {
        // Slight drift back to center
        const centerForce = (0.5 - surferYRef.current) * 0.002 * delta;
        const newVy = (surferVyRef.current + centerForce) * 0.95;
        const newSY = Math.max(0.05, Math.min(0.95, surferYRef.current + newVy * delta));
        setSurferVy(newVy);
        setSurferY(newSY);
        setSurferLean(l => l * 0.9);
      }

      // Foam trail
      if (frame % 3 === 0) {
        setFoamTrail(prev => {
          const newFoam: FoamParticle = {
            id: nextId(),
            x: surferScreenX - 15 - Math.random() * 10,
            y: surferScreenY + (Math.random() - 0.5) * 12,
            size: 3 + Math.random() * 5,
            opacity: 0.5 + Math.random() * 0.3,
            life: 0,
          };
          return [...prev.filter(f => f.life < 30), newFoam];
        });
      }

      // Update foam
      setFoamTrail(prev => prev.map(f => ({
        ...f,
        x: f.x - scrollSpeed * 0.5,
        opacity: Math.max(0, f.opacity - 0.02 * delta),
        size: f.size * (1 + 0.01 * delta),
        life: f.life + delta,
      })).filter(f => f.life < 30));

      // Detect collisions BEFORE updating buoy state
      type HitResult = { type: "correct" | "wrong"; x: number; y: number; num: number } | { type: "missed" } | null;
      let hitResult: HitResult = null;

      // Scan current buoys for collisions
      const currentBuoys = buoysRef.current;
      for (const buoy of currentBuoys) {
        if (buoy.collected || buoy.missed) continue;
        const bob = Math.sin(frame * 0.04 * buoy.bobSpeed + buoy.bobOffset) * 6;
        const screenBuoyX = buoy.x - scrollX;
        const dx = screenBuoyX - surferScreenX;
        const dy = (buoy.y + bob * 0.3) - surferScreenY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < HIT_DISTANCE) {
          const expectedNum = currentSeqRef.current[nextExpectedRef.current];
          if (buoy.number === expectedNum) {
            hitResult = { type: "correct", x: screenBuoyX, y: buoy.y, num: buoy.number };
          } else {
            hitResult = { type: "wrong", x: screenBuoyX, y: buoy.y, num: buoy.number };
          }
          break;
        }

        // Check if correct buoy passed off the left side
        if (screenBuoyX < -80 && buoy.isCorrect) {
          hitResult = { type: "missed" };
          break;
        }
      }

      // Update buoys (animations, removal, mark hit/missed)
      setBuoys(prev => {
        const updated = prev.map(buoy => {
          if (buoy.collected || buoy.missed) {
            return {
              ...buoy,
              scale: buoy.scale * 0.92,
              opacity: buoy.opacity * 0.92,
            };
          }

          const screenBuoyX = buoy.x - scrollX;

          // Mark based on hit result
          if (hitResult && hitResult.type === "correct" && "num" in hitResult && buoy.number === hitResult.num) {
            const bob = Math.sin(frame * 0.04 * buoy.bobSpeed + buoy.bobOffset) * 6;
            const dx = screenBuoyX - surferScreenX;
            const dy = (buoy.y + bob * 0.3) - surferScreenY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < HIT_DISTANCE) {
              return { ...buoy, collected: true };
            }
          }

          if (hitResult && hitResult.type === "wrong" && "num" in hitResult && buoy.number === hitResult.num) {
            const bob = Math.sin(frame * 0.04 * buoy.bobSpeed + buoy.bobOffset) * 6;
            const dx = screenBuoyX - surferScreenX;
            const dy = (buoy.y + bob * 0.3) - surferScreenY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < HIT_DISTANCE) {
              return { ...buoy, missed: true };
            }
          }

          if (hitResult && hitResult.type === "missed" && buoy.isCorrect && screenBuoyX < -80) {
            return { ...buoy, missed: true };
          }

          return buoy;
        }).filter(b => {
          if ((b.collected || b.missed) && b.scale < 0.1) return false;
          const screenX = b.x - scrollX;
          if (screenX < -200) return false;
          return true;
        });
        return updated;
      });

      // Handle hit results
      if (hitResult && hitResult.type === "correct") {
        const { x: hx, y: hy, num: hnum } = hitResult;
        const newCombo = comboRef.current + 1;
        setComboCount(newCombo);
        setMaxCombo(prev => Math.max(prev, newCombo));
        setScore(s => s + 15 + comboRef.current * 5);
        setCollectedSequence(prev => [...prev, hnum]);
        setBoostAnim(true);
        setTimeout(() => setBoostAnim(false), 500);

        // Splash
        const splashType = newCombo >= 5 ? "combo" : "correct";
        const newParticles = createSplash(hx, hy, splashType as "correct" | "combo");
        setSplashParticles(prev => [...prev, ...newParticles]);

        // Flying number
        setFlyingNumbers(prev => [...prev, { id: nextId(), value: hnum, startX: hx, startY: hy, age: 0 }]);

        const newNext = nextExpectedRef.current + 1;
        setNextExpectedIdx(newNext);
        const newCorrect = correctCountRef.current + 1;
        setCorrectCount(newCorrect);

        if (newCorrect >= neededCountRef.current) {
          setTimeout(() => setScreen("levelComplete"), 800);
        } else {
          const nextNum = currentSeqRef.current[newNext];
          if (nextNum !== undefined) {
            setTimeout(() => {
              spawnBuoyWave(scrollXRef.current, nextNum, skipTypeRef.current, levelRef.current);
            }, 300);
          }
        }
      } else if (hitResult && hitResult.type === "wrong") {
        const { x: hx, y: hy } = hitResult;
        setComboCount(0);
        setWipeoutAnim(true);
        setTimeout(() => setWipeoutAnim(false), 700);
        const newParticles = createSplash(hx, hy, "wrong");
        setSplashParticles(prev => [...prev, ...newParticles]);
        setLives(l => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 700);
          }
          return newL;
        });
      } else if (hitResult && hitResult.type === "missed") {
        setComboCount(0);
        setWipeoutAnim(true);
        setTimeout(() => setWipeoutAnim(false), 700);
        setLives(l => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 700);
          }
          return newL;
        });
      }

      // Respawn buoys if none visible with correct answer
      buoySpawnTimerRef.current += delta;
      if (buoySpawnTimerRef.current > 80) {
        buoySpawnTimerRef.current = 0;
        const hasActiveCorrect = buoysRef.current.some(b =>
          b.isCorrect && !b.collected && !b.missed && (b.x - scrollXRef.current) > -80
        );
        if (!hasActiveCorrect && correctCountRef.current < neededCountRef.current) {
          const expected = currentSeqRef.current[nextExpectedRef.current];
          if (expected !== undefined) {
            spawnBuoyWave(scrollXRef.current, expected, skipTypeRef.current, levelRef.current);
          }
        }
      }

      // Update splash particles
      setSplashParticles(prev =>
        prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta,
          vy: p.vy + 0.18 * delta,
          opacity: Math.max(0, p.opacity - 0.025 * delta),
          size: p.size * (1 - 0.008 * delta),
          life: p.life + delta,
        })).filter(p => p.life < 50 && p.opacity > 0)
      );

      // Update flying numbers
      setFlyingNumbers(prev =>
        prev.map(f => ({ ...f, age: f.age + delta })).filter(f => f.age < 40)
      );

      // Update sea creatures
      setSeaCreatures(prev =>
        prev.map(c => {
          let newX = c.x + c.speed * c.direction * delta;
          if (newX > size.width + 80) newX = -60;
          if (newX < -80) newX = size.width + 60;
          const wobbleY = Math.sin(frame * 0.03 + c.wobblePhase) * 2 * c.depth;
          return { ...c, x: newX, y: c.y + wobbleY * 0.04 };
        })
      );

      // Update clouds
      setClouds(prev =>
        prev.map(c => {
          let newX = c.x + c.speed * delta;
          if (newX > size.width + c.width) newX = -c.width;
          return { ...c, x: newX };
        })
      );

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [screen, getContainerSize, createSplash, spawnBuoyWave]);

  // Periodically spawn new sea creatures
  useEffect(() => {
    if (screen !== "playing") return;
    const interval = setInterval(() => {
      const size = getContainerSize();
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      setSeaCreatures(prev => {
        const creature: SeaCreature = {
          id: nextId(),
          emoji: SEA_CREATURES[Math.floor(Math.random() * SEA_CREATURES.length)],
          x: dir === 1 ? -50 : size.width + 50,
          y: size.height * 0.45 + Math.random() * size.height * 0.45,
          speed: 0.3 + Math.random() * 0.5,
          direction: dir,
          wobblePhase: Math.random() * Math.PI * 2,
          size: 1 + Math.random() * 0.8,
          depth: 0.3 + Math.random() * 0.7,
        };
        if (prev.length >= 8) return [...prev.slice(1), creature];
        return [...prev, creature];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [screen, getContainerSize]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // ---- DERIVED STATE ----
  const livesDisplay = Array.from({ length: 3 }, (_, i) => i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D");
  const skipLabel = skipType === 2 ? "Count by 2s" : skipType === 5 ? "Count by 5s" : "Count by 10s";
  const upcomingNumber = currentSequence[nextExpectedIdx];
  const futureNumbers = currentSequence.slice(nextExpectedIdx + 1, nextExpectedIdx + 3);
  const size = getContainerSize();
  const surferScreenX = size.width * 0.22;
  const surferScreenY = surferY * size.height;

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="scs-game">
        <style>{scsStyles}</style>
        <div className="scs-intro">
          <div className="scs-intro-bg">
            <div className="scs-intro-sky" />
            <div className="scs-intro-sun" />
            <div className="scs-sun-rays" />
            {[...Array(5)].map((_, i) => (
              <div key={`cloud-${i}`} className="scs-intro-cloud" style={{
                top: `${6 + i * 6}%`,
                left: `${-20 + i * 22}%`,
                animationDelay: `${i * 2.5}s`,
                animationDuration: `${22 + i * 4}s`,
                opacity: 0.5 + (i % 3) * 0.15,
                transform: `scale(${0.6 + (i % 3) * 0.35})`,
              }} />
            ))}
            {[...Array(4)].map((_, i) => (
              <div key={`wave-${i}`} className="scs-intro-wave-layer" style={{
                bottom: `${i * 8}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3.5 + i * 0.8}s`,
                opacity: 0.12 + i * 0.04,
              }} />
            ))}
            {SEA_CREATURES.slice(0, 4).map((c, i) => (
              <div key={`creature-${i}`} className="scs-intro-creature" style={{
                bottom: `${4 + i * 7}%`,
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${14 + i * 3}s`,
                fontSize: `${1.3 + (i % 3) * 0.4}rem`,
              }}>{c}</div>
            ))}
            <div className="scs-intro-surfer">
              <div className="scs-intro-surfer-emoji">{"\uD83C\uDFC4"}</div>
              <div className="scs-intro-board" />
              <div className="scs-intro-wake" />
            </div>
          </div>
          <div className="scs-intro-content">
            <div className="scs-logo">
              <span className="scs-logo-wave">{"\uD83C\uDF0A"}</span>
              <h1>Skip Count Surf</h1>
              <span className="scs-logo-surfer">{"\uD83C\uDFC4"}</span>
            </div>
            <p className="scs-tagline">Ride the waves of numbers!</p>
            <div className="scs-instructions-card">
              <h3>How to Surf</h3>
              <div className="scs-instruction">
                <div className="scs-instruction-visual">
                  <span className="scs-mini-buoy done">2</span>
                  <span className="scs-mini-buoy done">4</span>
                  <span className="scs-mini-buoy done">6</span>
                  <span className="scs-mini-buoy active">8</span>
                  <span className="scs-mini-buoy dim">?</span>
                </div>
                <p>Number buoys float in the <span className="scs-hl-blue">OCEAN</span> ahead</p>
              </div>
              <div className="scs-instruction">
                <div className="scs-instruction-visual">
                  <span className="scs-drag-icon">{"\u2195\uFE0F"}</span>
                  <span className="scs-mini-surfer">{"\uD83C\uDFC4"}</span>
                  <span className="scs-arrow-anim">{"\u27A1"}</span>
                  <span className="scs-mini-buoy correct-glow">10</span>
                </div>
                <p><strong>DRAG</strong> up and down to steer into the <span className="scs-hl-green">CORRECT</span> number!</p>
              </div>
              <div className="scs-instruction">
                <div className="scs-instruction-visual">
                  <span className="scs-combo-icon">{"\uD83D\uDD25"} x5</span>
                  <span className="scs-arrow-anim">{"\u27A1"}</span>
                  <span className="scs-splash-icon">{"\uD83D\uDCA6"}</span>
                </div>
                <p>Build a <span className="scs-hl-orange">COMBO</span> for massive splashes!</p>
              </div>
            </div>
            <button className="scs-start-btn" onClick={startGame}>
              <span className="scs-btn-icon">{"\uD83C\uDF0A"}</span>
              Catch the Waves!
              <span className="scs-btn-icon">{"\uD83C\uDFC4"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="scs-game">
        <style>{scsStyles}</style>
        <div className="scs-complete">
          <div className="scs-complete-bg">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="scs-complete-wave" style={{
                bottom: `${i * 7}%`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.1 + i * 0.03,
              }} />
            ))}
            <div className="scs-complete-sparkles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="scs-sparkle" style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1.5 + Math.random() * 1.5}s`,
                }} />
              ))}
            </div>
          </div>
          <div className="scs-complete-content">
            <div className="scs-victory-surfer">{"\uD83C\uDFC4"}</div>
            <h1 className="scs-complete-title">Gnarly Ride!</h1>
            <p className="scs-complete-subtitle">Level {level} Complete</p>
            <div className="scs-sequence-replay">
              {currentSequence.map((n, i) => (
                <span key={i} className="scs-seq-replay-num" style={{ animationDelay: `${i * 0.08}s` }}>{n}</span>
              ))}
            </div>
            <p className="scs-skip-label-complete">{skipLabel} mastered!</p>
            <div className="scs-score-card">
              <div className="scs-score-item">
                <span className="scs-score-label">Score</span>
                <span className="scs-score-value">{score}</span>
              </div>
              <div className="scs-score-item">
                <span className="scs-score-label">Best Combo</span>
                <span className="scs-score-value">{"\uD83D\uDD25"} x{maxCombo}</span>
              </div>
              <div className="scs-score-item">
                <span className="scs-score-label">Lives Left</span>
                <span className="scs-score-value">{livesDisplay.join(" ")}</span>
              </div>
            </div>
            <div className="scs-complete-buttons">
              <button className="scs-next-btn" onClick={nextLevel}>Level {level + 1} {"\u2192"}</button>
              <button className="scs-menu-btn" onClick={() => onExit ? onExit() : setScreen("intro")}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== GAME OVER =====================
  if (screen === "gameOver") {
    return (
      <div className="scs-game">
        <style>{scsStyles}</style>
        <div className="scs-complete">
          <div className="scs-complete-bg">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="scs-complete-wave" style={{
                bottom: `${i * 7}%`,
                animationDelay: `${i * 0.3}s`,
                opacity: 0.1 + i * 0.03,
              }} />
            ))}
          </div>
          <div className="scs-complete-content">
            <div className="scs-wipeout-icon">{"\uD83C\uDF0A"}</div>
            <h1 className="scs-complete-title scs-wipeout-title">Wipeout!</h1>
            <p className="scs-complete-subtitle">You surfed {correctCount} waves on Level {level}</p>
            <div className="scs-sequence-replay">
              {collectedSequence.map((n, i) => (
                <span key={i} className="scs-seq-replay-num" style={{ animationDelay: `${i * 0.08}s` }}>{n}</span>
              ))}
            </div>
            <div className="scs-score-card">
              <div className="scs-score-item">
                <span className="scs-score-label">Final Score</span>
                <span className="scs-score-value">{score}</span>
              </div>
              <div className="scs-score-item">
                <span className="scs-score-label">Best Combo</span>
                <span className="scs-score-value">{"\uD83D\uDD25"} x{maxCombo}</span>
              </div>
            </div>
            <div className="scs-complete-buttons">
              <button className="scs-next-btn" onClick={startGame}>Paddle Back Out {"\uD83D\uDD04"}</button>
              <button className="scs-menu-btn" onClick={() => onExit ? onExit() : setScreen("intro")}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING =====================
  return (
    <div className="scs-game">
      <style>{scsStyles}</style>
      <div className="scs-play">
        {/* Header */}
        <div className="scs-header">
          <div className="scs-header-left">
            <button className="scs-back-btn" onClick={() => onExit ? onExit() : setScreen("intro")}>{"\u2190"}</button>
            <div className="scs-level-badge">Lv {level}</div>
            <div className="scs-skip-badge">{skipLabel}</div>
          </div>
          <div className="scs-header-center">
            <span className="scs-lives">{livesDisplay.join(" ")}</span>
            {comboCount >= 2 && (
              <span className={`scs-combo-badge ${comboCount >= 5 ? "scs-combo-fire" : ""}`}>
                {"\uD83D\uDD25"} x{comboCount}
              </span>
            )}
          </div>
          <div className="scs-header-right">
            <div className="scs-score-badge-play">{"\u2B50"} {score}</div>
          </div>
        </div>

        {/* Sequence tracker */}
        <div className="scs-sequence-bar">
          <div className="scs-seq-track">
            {collectedSequence.slice(-4).map((n, i) => (
              <span key={`done-${i}`} className="scs-seq-done">{n}</span>
            ))}
            {upcomingNumber !== undefined && (
              <span className="scs-seq-next">{upcomingNumber}</span>
            )}
            {futureNumbers.map((n, i) => (
              <span key={`future-${i}`} className="scs-seq-future">{n}</span>
            ))}
          </div>
          <span className="scs-progress-text">{correctCount} / {neededCount}</span>
        </div>

        {/* Ocean area */}
        <div
          className="scs-ocean"
          ref={containerRef}
          onMouseDown={handlePointerDown}
          onTouchStart={handlePointerDown}
        >
          {/* Sky */}
          <div className="scs-sky-area">
            <div className="scs-play-sun" />
            {clouds.map(cloud => (
              <div key={cloud.id} className="scs-play-cloud" style={{
                left: cloud.x,
                top: cloud.y,
                width: cloud.width,
                opacity: cloud.opacity,
              }} />
            ))}
          </div>

          {/* Animated wave layers (parallax) */}
          <div className="scs-wave-layers">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="scs-wave-layer" style={{
                bottom: `${i * 12}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4.5 + i * 0.8}s`,
                opacity: 0.05 + i * 0.02,
                height: `${28 + i * 8}%`,
              }} />
            ))}
          </div>

          {/* Deep water gradient */}
          <div className="scs-deep-water" />

          {/* Sea creatures */}
          {seaCreatures.map(creature => (
            <div key={creature.id} className="scs-sea-creature" style={{
              left: creature.x,
              top: creature.y,
              fontSize: `${creature.size}rem`,
              opacity: 0.25 + creature.depth * 0.35,
              transform: `scaleX(${creature.direction})`,
              filter: `blur(${(1 - creature.depth) * 2}px)`,
            }}>{creature.emoji}</div>
          ))}

          {/* Foam trail */}
          {foamTrail.map(f => (
            <div key={f.id} className="scs-foam-dot" style={{
              left: f.x,
              top: f.y,
              width: f.size,
              height: f.size,
              opacity: f.opacity,
            }} />
          ))}

          {/* Buoys */}
          {buoys.map(buoy => {
            const screenX = buoy.x - scrollXRef.current;
            const bob = Math.sin(frameRef.current * 0.04 * buoy.bobSpeed + buoy.bobOffset) * 6;
            if (screenX < -100 || screenX > size.width + 200) return null;
            return (
              <div
                key={buoy.id}
                className={`scs-buoy ${buoy.collected ? "scs-buoy-collected" : ""} ${buoy.missed ? "scs-buoy-missed" : ""} ${buoy.isCorrect && !buoy.collected && !buoy.missed ? "scs-buoy-correct" : ""}`}
                style={{
                  left: screenX,
                  top: buoy.y + bob,
                  transform: `translate(-50%, -50%) scale(${buoy.scale})`,
                  opacity: buoy.opacity,
                  "--buoy-hue": buoy.hue,
                } as React.CSSProperties}
              >
                <div className="scs-buoy-body" />
                <div className="scs-buoy-shine" />
                <div className="scs-buoy-number">{buoy.number}</div>
                {buoy.isCorrect && !buoy.collected && !buoy.missed && (
                  <div className="scs-buoy-glow" />
                )}
                <div className="scs-buoy-water" />
              </div>
            );
          })}

          {/* Splash particles */}
          {splashParticles.map(p => (
            <div key={p.id} className="scs-splash-particle" style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              background: `radial-gradient(circle, hsl(${p.hue}, 80%, 75%), hsl(${p.hue}, 70%, 55%))`,
            }} />
          ))}

          {/* Flying numbers */}
          {flyingNumbers.map(f => (
            <div key={f.id} className="scs-flying-number" style={{
              left: f.startX,
              top: f.startY,
              transform: `translate(-50%, ${-f.age * 3}px) scale(${1 + f.age * 0.01})`,
              opacity: Math.max(0, 1 - f.age * 0.03),
            }}>{f.value}</div>
          ))}

          {/* Surfer */}
          <div
            className={`scs-surfer ${wipeoutAnim ? "scs-surfer-wipeout" : ""} ${boostAnim ? "scs-surfer-boost" : ""}`}
            style={{
              left: surferScreenX,
              top: surferScreenY,
              transform: `translate(-50%, -50%) rotate(${surferLean}deg)`,
            }}
          >
            <div className="scs-surfer-wake" />
            <div className="scs-surfboard">
              <div className="scs-board-stripe" />
            </div>
            <div className="scs-surfer-emoji">{"\uD83C\uDFC4"}</div>
            <div className="scs-surfer-spray-left" />
            <div className="scs-surfer-spray-right" />
          </div>

          {/* Drag hint overlay */}
          {correctCount === 0 && upcomingNumber !== undefined && (
            <div className="scs-drag-hint">
              <div className="scs-drag-hint-arrows">{"\u2195\uFE0F"}</div>
              <p>Drag up/down to steer!</p>
              <p className="scs-drag-hint-sub">Hit the buoy with <strong>{upcomingNumber}</strong></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// STYLES
// ============================================================
const scsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .scs-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #0c4a6e;
  }

  /* ===== INTRO ===== */
  .scs-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #ff8c42 0%, #ff6b35 12%, #0ea5e9 32%, #0284c7 52%, #075985 72%, #0c4a6e 100%);
  }

  .scs-intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .scs-intro-sky {
    position: absolute; top: 0; left: 0; right: 0; height: 38%;
    background: linear-gradient(180deg, rgba(255,140,66,0.5) 0%, rgba(255,107,53,0.25) 50%, transparent 100%);
  }

  .scs-intro-sun {
    position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
    width: 90px; height: 90px; border-radius: 50%;
    background: radial-gradient(circle, #fde68a 0%, #fbbf24 30%, #f59e0b 55%, rgba(245,158,11,0) 75%);
    box-shadow: 0 0 70px rgba(251,191,36,0.7), 0 0 140px rgba(251,191,36,0.3), 0 0 200px rgba(253,230,138,0.15);
    animation: scsSunPulse 4s ease-in-out infinite;
  }

  .scs-sun-rays {
    position: absolute; top: 6%; left: 50%; transform: translateX(-50%);
    width: 200px; height: 200px;
    background: conic-gradient(from 0deg, transparent 0deg, rgba(251,191,36,0.08) 10deg, transparent 20deg, rgba(251,191,36,0.06) 30deg, transparent 40deg, rgba(251,191,36,0.08) 50deg, transparent 60deg);
    border-radius: 50%;
    animation: scsSunRaysRotate 30s linear infinite;
  }

  @keyframes scsSunRaysRotate {
    from { transform: translateX(-50%) rotate(0deg); }
    to { transform: translateX(-50%) rotate(360deg); }
  }

  @keyframes scsSunPulse {
    0%, 100% { box-shadow: 0 0 70px rgba(251,191,36,0.7), 0 0 140px rgba(251,191,36,0.3); transform: translateX(-50%) scale(1); }
    50% { box-shadow: 0 0 90px rgba(251,191,36,0.9), 0 0 180px rgba(251,191,36,0.4); transform: translateX(-50%) scale(1.05); }
  }

  .scs-intro-cloud {
    position: absolute; width: 130px; height: 40px;
    background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: scsCloudDrift linear infinite;
  }

  @keyframes scsCloudDrift {
    0% { transform: translateX(-120px) scaleX(1); }
    50% { transform: translateX(50vw) scaleX(1.1); }
    100% { transform: translateX(calc(100vw + 120px)) scaleX(1); }
  }

  .scs-intro-wave-layer {
    position: absolute; left: -25%; right: -25%; height: 50px;
    background: rgba(255,255,255,0.12);
    border-radius: 40% 60% 40% 60%;
    animation: scsWaveRoll ease-in-out infinite;
  }

  @keyframes scsWaveRoll {
    0%, 100% { transform: translateX(-3%) scaleY(1); }
    25% { transform: translateX(2%) scaleY(1.15); }
    50% { transform: translateX(3%) scaleY(0.85); }
    75% { transform: translateX(-2%) scaleY(1.08); }
  }

  .scs-intro-creature {
    position: absolute; left: -5%;
    animation: scsCreatureSwim linear infinite;
  }

  @keyframes scsCreatureSwim {
    0% { transform: translateX(-30px) translateY(0) scaleX(1); }
    25% { transform: translateX(25vw) translateY(-10px) scaleX(1); }
    50% { transform: translateX(50vw) translateY(0) scaleX(1); }
    75% { transform: translateX(75vw) translateY(10px) scaleX(1); }
    100% { transform: translateX(105vw) translateY(0) scaleX(1); }
  }

  .scs-intro-surfer {
    position: absolute; bottom: 30%; left: 50%; transform: translateX(-50%);
    animation: scsSurferFloat 3s ease-in-out infinite;
  }

  .scs-intro-surfer-emoji {
    font-size: 4.5rem;
    filter: drop-shadow(0 6px 16px rgba(0,0,0,0.5));
    position: relative; z-index: 2;
  }

  .scs-intro-board {
    position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%);
    width: 70px; height: 14px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.35);
  }

  .scs-intro-wake {
    position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);
    width: 100px; height: 20px;
    background: radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%);
    border-radius: 50%;
    animation: scsWakePulse 1.5s ease-in-out infinite;
  }

  @keyframes scsWakePulse {
    0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleX(1); }
    50% { opacity: 0.6; transform: translateX(-50%) scaleX(1.3); }
  }

  @keyframes scsSurferFloat {
    0%, 100% { transform: translateX(-50%) translateY(0) rotate(-3deg); }
    33% { transform: translateX(-50%) translateY(-14px) rotate(4deg); }
    66% { transform: translateX(-50%) translateY(-6px) rotate(-2deg); }
  }

  .scs-intro-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 480px;
  }

  .scs-logo {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; margin-bottom: 0.5rem;
  }

  .scs-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #ffffff 0%, #bae6fd 50%, #7dd3fc 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
  }

  .scs-logo-wave { font-size: 2.2rem; animation: scsLogoBounce 2s ease-in-out infinite; }
  .scs-logo-surfer { font-size: 2.2rem; animation: scsLogoBounce 2s ease-in-out 0.3s infinite; }

  @keyframes scsLogoBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  .scs-tagline {
    color: rgba(255,255,255,0.85); font-size: 1.1rem;
    margin-bottom: 1.5rem; font-weight: 600;
    text-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .scs-instructions-card {
    background: rgba(255,255,255,0.08);
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 20px; padding: 1.2rem 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }

  .scs-instructions-card h3 {
    color: white; font-size: 1.1rem; margin-bottom: 1rem; font-weight: 800;
  }

  .scs-instruction { margin-bottom: 1rem; }
  .scs-instruction:last-child { margin-bottom: 0; }

  .scs-instruction-visual {
    display: flex; align-items: center; justify-content: center;
    gap: 0.35rem; margin-bottom: 0.35rem;
  }

  .scs-mini-buoy {
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 0.85rem;
    border: 2px solid rgba(255,255,255,0.2);
  }

  .scs-mini-buoy.done { background: rgba(74,222,128,0.2); border-color: rgba(74,222,128,0.4); color: #4ade80; }
  .scs-mini-buoy.active {
    background: rgba(74,222,128,0.4); border-color: #4ade80; color: white;
    box-shadow: 0 0 12px rgba(74,222,128,0.5);
    animation: scsBuoyActivePulse 1s ease-in-out infinite;
  }
  .scs-mini-buoy.dim { opacity: 0.3; }
  .scs-mini-buoy.correct-glow {
    background: rgba(74,222,128,0.3); border-color: #4ade80; color: white;
    box-shadow: 0 0 16px rgba(74,222,128,0.6);
  }

  @keyframes scsBuoyActivePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .scs-drag-icon { font-size: 1.6rem; }
  .scs-mini-surfer { font-size: 1.8rem; }
  .scs-arrow-anim { color: rgba(255,255,255,0.5); font-size: 1.2rem; animation: scsArrowSlide 1s ease-in-out infinite; }
  @keyframes scsArrowSlide { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
  .scs-combo-icon { color: #fb923c; font-weight: 800; font-size: 1rem; }
  .scs-splash-icon { font-size: 1.6rem; animation: scsSplashBounce 1.5s ease-in-out infinite; }
  @keyframes scsSplashBounce { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-6px) scale(1.15); } }

  .scs-instruction p { color: rgba(255,255,255,0.8); font-size: 0.9rem; }
  .scs-hl-blue { color: #7dd3fc; font-weight: 700; }
  .scs-hl-green { color: #4ade80; font-weight: 700; }
  .scs-hl-orange { color: #fb923c; font-weight: 700; }

  .scs-start-btn, .scs-next-btn {
    display: inline-flex; align-items: center; gap: 0.7rem;
    padding: 0.9rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(14,165,233,0.5), 0 0 0 3px rgba(255,255,255,0.1);
  }

  .scs-start-btn:hover, .scs-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(14,165,233,0.6), 0 0 0 3px rgba(255,255,255,0.2);
  }

  .scs-start-btn:active, .scs-next-btn:active { transform: translateY(0); }

  .scs-btn-icon { font-size: 1.3rem; }

  /* ===== COMPLETE / GAME OVER ===== */
  .scs-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #0369a1 0%, #0284c7 30%, #0ea5e9 60%, #075985 100%);
  }

  .scs-complete-bg { position: absolute; inset: 0; overflow: hidden; }

  .scs-complete-wave {
    position: absolute; left: -25%; right: -25%; height: 50px;
    background: rgba(255,255,255,0.1);
    border-radius: 40% 60% 40% 60%;
    animation: scsWaveRoll 4s ease-in-out infinite;
  }

  .scs-complete-sparkles { position: absolute; inset: 0; pointer-events: none; }

  .scs-sparkle {
    position: absolute; width: 6px; height: 6px;
    background: radial-gradient(circle, #fde68a, #fbbf24);
    border-radius: 50%;
    animation: scsSparkle ease-in-out infinite;
    opacity: 0;
  }

  @keyframes scsSparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }

  .scs-complete-content {
    position: relative; z-index: 10; text-align: center;
    padding: 2rem; max-width: 500px;
  }

  .scs-victory-surfer {
    font-size: 5rem; margin-bottom: 0.5rem;
    animation: scsVictorySurfer 2s ease-in-out infinite;
    filter: drop-shadow(0 6px 16px rgba(0,0,0,0.4));
  }

  @keyframes scsVictorySurfer {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    25% { transform: translateY(-18px) rotate(5deg); }
    50% { transform: translateY(-6px) rotate(-3deg); }
    75% { transform: translateY(-22px) rotate(8deg); }
  }

  .scs-wipeout-icon {
    font-size: 4rem; margin-bottom: 0.5rem;
    animation: scsWipeoutShake 0.5s ease-in-out 3;
  }

  @keyframes scsWipeoutShake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-12deg); }
    75% { transform: rotate(12deg); }
  }

  .scs-complete-title {
    font-size: clamp(1.6rem, 6vw, 2.5rem); color: white; font-weight: 900;
    margin-bottom: 0.3rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  .scs-wipeout-title { color: #fca5a5; }

  .scs-complete-subtitle {
    color: #7dd3fc; font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600;
  }

  .scs-sequence-replay {
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 0.3rem; margin-bottom: 0.8rem; padding: 0 1rem;
  }

  .scs-seq-replay-num {
    padding: 0.25rem 0.55rem; background: rgba(74,222,128,0.25);
    border: 1.5px solid rgba(74,222,128,0.4);
    border-radius: 10px; color: #4ade80; font-weight: 700; font-size: 0.85rem;
    animation: scsSeqPopIn 0.4s ease forwards;
    opacity: 0; transform: scale(0);
  }

  @keyframes scsSeqPopIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  .scs-skip-label-complete {
    color: #38bdf8; font-size: 0.95rem; margin-bottom: 1.5rem; font-weight: 600;
  }

  .scs-score-card {
    display: flex; justify-content: center; gap: 1.5rem;
    margin-bottom: 1.5rem; flex-wrap: wrap;
  }
  .scs-score-item { display: flex; flex-direction: column; align-items: center; }
  .scs-score-label { font-size: 0.8rem; color: #7dd3fc; margin-bottom: 0.2rem; }
  .scs-score-value { font-size: 1.4rem; font-weight: 900; color: white; }

  .scs-complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  .scs-menu-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.6);
    background: transparent; border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .scs-menu-btn:hover { border-color: rgba(255,255,255,0.35); color: white; }

  /* ===== PLAYING SCREEN ===== */
  .scs-play {
    height: 100%; display: flex; flex-direction: column;
    background: linear-gradient(180deg,
      #0284c7 0%,
      #0ea5e9 20%,
      #0369a1 40%,
      #075985 60%,
      #0c4a6e 80%,
      #083344 100%);
  }

  .scs-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.7rem;
    background: rgba(0,0,0,0.3); backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 50; flex-wrap: wrap; gap: 0.3rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }

  .scs-header-left, .scs-header-right { display: flex; align-items: center; gap: 0.4rem; }
  .scs-header-center { display: flex; align-items: center; gap: 0.4rem; }

  .scs-back-btn {
    width: 34px; height: 34px; background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; color: white; font-size: 1rem;
    cursor: pointer; transition: all 0.2s ease;
    display: flex; align-items: center; justify-content: center;
  }
  .scs-back-btn:hover { background: rgba(255,255,255,0.2); }

  .scs-level-badge {
    padding: 0.3rem 0.7rem; background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border-radius: 14px; font-weight: 700; color: white; font-size: 0.8rem;
    box-shadow: 0 2px 8px rgba(14,165,233,0.3);
  }

  .scs-skip-badge {
    padding: 0.3rem 0.7rem; background: rgba(74,222,128,0.15);
    border: 1px solid rgba(74,222,128,0.3);
    border-radius: 14px; font-weight: 700; color: #4ade80; font-size: 0.75rem;
  }

  .scs-lives { font-size: 0.9rem; letter-spacing: 2px; }

  .scs-combo-badge {
    padding: 0.25rem 0.5rem; background: rgba(251,146,60,0.25);
    border: 1px solid rgba(251,146,60,0.4);
    border-radius: 10px; font-size: 0.75rem; color: #fb923c; font-weight: 700;
    animation: scsComboPop 0.3s ease;
  }

  .scs-combo-fire {
    background: rgba(239,68,68,0.25);
    border-color: rgba(239,68,68,0.5);
    color: #fca5a5;
    animation: scsComboFire 0.5s ease-in-out infinite alternate;
  }

  @keyframes scsComboFire {
    0% { box-shadow: 0 0 4px rgba(239,68,68,0.3); }
    100% { box-shadow: 0 0 14px rgba(239,68,68,0.6); }
  }

  @keyframes scsComboPop {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.25); }
    100% { transform: scale(1); }
  }

  .scs-score-badge-play {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.3rem 0.7rem; background: rgba(251,191,36,0.15);
    border: 1px solid rgba(251,191,36,0.3);
    border-radius: 14px; color: #fbbf24; font-weight: 700; font-size: 0.8rem;
  }

  /* Sequence bar */
  .scs-sequence-bar {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    background: rgba(0,0,0,0.25);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .scs-seq-track { display: flex; align-items: center; gap: 0.3rem; }

  .scs-seq-done {
    padding: 0.2rem 0.45rem; background: rgba(74,222,128,0.25);
    border: 1px solid rgba(74,222,128,0.4);
    border-radius: 8px; color: #4ade80; font-weight: 700; font-size: 0.8rem;
  }

  .scs-seq-next {
    padding: 0.25rem 0.55rem; background: rgba(250,204,21,0.25);
    border: 2px solid rgba(250,204,21,0.5);
    border-radius: 8px; color: #facc15; font-weight: 800; font-size: 0.9rem;
    animation: scsNextPulse 1s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(250,204,21,0.3);
  }

  @keyframes scsNextPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(250,204,21,0.3); }
    50% { transform: scale(1.12); box-shadow: 0 0 20px rgba(250,204,21,0.5); }
  }

  .scs-seq-future {
    padding: 0.2rem 0.45rem; background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px; color: rgba(255,255,255,0.3); font-weight: 600; font-size: 0.75rem;
  }

  .scs-progress-text {
    color: rgba(255,255,255,0.3); font-size: 0.7rem; margin-left: 0.5rem; font-weight: 600;
  }

  /* ===== OCEAN PLAY AREA ===== */
  .scs-ocean {
    flex: 1; position: relative; overflow: hidden;
    touch-action: none; cursor: grab;
  }

  .scs-ocean:active { cursor: grabbing; }

  .scs-sky-area {
    position: absolute; top: 0; left: 0; right: 0; height: 25%;
    pointer-events: none;
  }

  .scs-play-sun {
    position: absolute; top: 4%; right: 10%;
    width: 45px; height: 45px; border-radius: 50%;
    background: radial-gradient(circle, #fde68a 0%, #fbbf24 35%, rgba(245,158,11,0) 70%);
    box-shadow: 0 0 35px rgba(251,191,36,0.5), 0 0 70px rgba(251,191,36,0.2);
    animation: scsSunPulse 4s ease-in-out infinite;
  }

  .scs-play-cloud {
    position: absolute; height: 18px;
    background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%; pointer-events: none;
  }

  /* Wave layers (parallax) */
  .scs-wave-layers { position: absolute; inset: 0; pointer-events: none; }

  .scs-wave-layer {
    position: absolute; left: -30%; right: -30%;
    background: radial-gradient(ellipse at 50% 0%, rgba(125,211,252,0.15) 0%, transparent 70%);
    border-radius: 50% 50% 50% 50%;
    animation: scsWaveLayerMove ease-in-out infinite;
  }

  @keyframes scsWaveLayerMove {
    0%, 100% { transform: translateX(-2%) scaleY(1) rotate(0deg); }
    25% { transform: translateX(1.5%) scaleY(1.06) rotate(0.5deg); }
    50% { transform: translateX(2%) scaleY(0.94) rotate(0deg); }
    75% { transform: translateX(-1.5%) scaleY(1.03) rotate(-0.5deg); }
  }

  .scs-deep-water {
    position: absolute; bottom: 0; left: 0; right: 0; height: 22%;
    background: linear-gradient(180deg, transparent 0%, rgba(8,51,68,0.6) 50%, rgba(8,51,68,0.9) 100%);
    pointer-events: none;
  }

  .scs-sea-creature {
    position: absolute; pointer-events: none; z-index: 1; transition: none;
  }

  /* ===== FOAM TRAIL ===== */
  .scs-foam-dot {
    position: absolute; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(186,230,253,0.3) 50%, transparent 70%);
    pointer-events: none; z-index: 8;
    transform: translate(-50%, -50%);
  }

  /* ===== BUOYS ===== */
  .scs-buoy {
    position: absolute; width: 80px; height: 80px;
    z-index: 12; pointer-events: none;
    transition: none;
  }

  .scs-buoy-body {
    position: absolute; inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
      hsl(var(--buoy-hue), 75%, 72%) 0%,
      hsl(var(--buoy-hue), 68%, 52%) 50%,
      hsl(var(--buoy-hue), 60%, 38%) 100%);
    box-shadow:
      0 8px 25px hsla(var(--buoy-hue), 65%, 40%, 0.5),
      inset 0 -8px 18px hsla(var(--buoy-hue), 75%, 25%, 0.35),
      inset 0 4px 10px hsla(var(--buoy-hue), 80%, 80%, 0.25);
  }

  .scs-buoy-shine {
    position: absolute; top: 14%; left: 18%; width: 32%; height: 22%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%);
    border-radius: 50%;
  }

  .scs-buoy-number {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.8rem; font-weight: 900; color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 12px rgba(0,0,0,0.15);
    z-index: 3;
  }

  .scs-buoy-glow {
    position: absolute; inset: -12px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74,222,128,0.35) 0%, transparent 70%);
    animation: scsBuoyGlow 1.5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes scsBuoyGlow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.18); }
  }

  .scs-buoy-water {
    position: absolute; bottom: -6px; left: -10%; right: -10%; height: 20px;
    background: radial-gradient(ellipse at 50% 0%, rgba(125,211,252,0.25) 0%, transparent 70%);
    border-radius: 50%;
    animation: scsBuoyWater 2s ease-in-out infinite;
  }

  @keyframes scsBuoyWater {
    0%, 100% { transform: scaleX(1); opacity: 0.6; }
    50% { transform: scaleX(1.15); opacity: 0.9; }
  }

  .scs-buoy-correct .scs-buoy-body {
    box-shadow:
      0 8px 25px hsla(var(--buoy-hue), 65%, 40%, 0.5),
      0 0 18px rgba(74,222,128,0.25),
      inset 0 -8px 18px hsla(var(--buoy-hue), 75%, 25%, 0.35),
      inset 0 4px 10px hsla(var(--buoy-hue), 80%, 80%, 0.25);
  }

  .scs-buoy-collected {
    pointer-events: none;
    animation: scsBuoyCollected 0.5s ease forwards;
  }

  @keyframes scsBuoyCollected {
    0% { opacity: 1; }
    30% { opacity: 1; transform: translate(-50%, -50%) scale(1.35); }
    100% { opacity: 0; transform: translate(-50%, -90%) scale(0.4); }
  }

  .scs-buoy-collected .scs-buoy-body {
    background: radial-gradient(circle at 30% 30%,
      rgba(74,222,128,0.9) 0%,
      rgba(34,197,94,0.8) 50%,
      rgba(22,163,74,0.7) 100%);
    box-shadow: 0 0 35px rgba(74,222,128,0.7);
  }

  .scs-buoy-missed {
    pointer-events: none;
  }

  .scs-buoy-missed .scs-buoy-body {
    background: radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(220,38,38,0.4) 100%);
    box-shadow: 0 0 18px rgba(239,68,68,0.3);
  }

  .scs-buoy-missed .scs-buoy-number { opacity: 0.4; }

  /* ===== SPLASH PARTICLES ===== */
  .scs-splash-particle {
    position: absolute; border-radius: 50%;
    pointer-events: none; z-index: 55;
    transform: translate(-50%, -50%);
  }

  /* ===== FLYING NUMBERS ===== */
  .scs-flying-number {
    position: absolute; z-index: 60; pointer-events: none;
    font-size: 2rem; font-weight: 900; color: #4ade80;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4), 0 0 15px rgba(74,222,128,0.6);
    animation: scsFlyingNumPop 0.3s ease;
  }

  @keyframes scsFlyingNumPop {
    0% { transform: translate(-50%, 0) scale(0.5); }
    60% { transform: translate(-50%, -10px) scale(1.3); }
    100% { transform: translate(-50%, -15px) scale(1); }
  }

  /* ===== SURFER ===== */
  .scs-surfer {
    position: absolute; z-index: 30; pointer-events: none;
    transition: none;
    width: 100px; height: 100px;
  }

  .scs-surfer-emoji {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -65%);
    font-size: 3.5rem; line-height: 1;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5));
    z-index: 3;
  }

  .scs-surfboard {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, 20%);
    width: 70px; height: 14px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%);
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    z-index: 2;
  }

  .scs-board-stripe {
    position: absolute; top: 3px; left: 15%; width: 70%; height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }

  .scs-surfer-wake {
    position: absolute; top: 50%; left: -20px;
    transform: translateY(-50%);
    width: 40px; height: 50px;
    background: radial-gradient(ellipse at 100% 50%, rgba(255,255,255,0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: scsWakeFlow 1s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes scsWakeFlow {
    0%, 100% { opacity: 0.3; transform: translateY(-50%) scaleX(1); }
    50% { opacity: 0.5; transform: translateY(-50%) scaleX(1.3); }
  }

  .scs-surfer-spray-left {
    position: absolute; top: 50%; right: 60%;
    transform: translateY(-30%);
    width: 20px; height: 30px;
    background: radial-gradient(ellipse at 100% 50%, rgba(186,230,253,0.3) 0%, transparent 70%);
    border-radius: 50%;
    animation: scsSprayAnim 0.8s ease-in-out infinite;
  }

  .scs-surfer-spray-right {
    position: absolute; top: 50%; right: 60%;
    transform: translateY(10%);
    width: 18px; height: 25px;
    background: radial-gradient(ellipse at 100% 50%, rgba(186,230,253,0.25) 0%, transparent 70%);
    border-radius: 50%;
    animation: scsSprayAnim 0.8s ease-in-out 0.3s infinite;
  }

  @keyframes scsSprayAnim {
    0%, 100% { opacity: 0.2; transform: translateY(-30%) scaleX(0.8); }
    50% { opacity: 0.5; transform: translateY(-30%) scaleX(1.2); }
  }

  /* Wipeout */
  .scs-surfer-wipeout .scs-surfer-emoji {
    animation: scsWipeout 0.7s ease;
  }

  @keyframes scsWipeout {
    0% { transform: translate(-50%, -65%) rotate(0deg); }
    20% { transform: translate(-50%, -80%) rotate(-20deg); }
    40% { transform: translate(-50%, -50%) rotate(25deg); }
    60% { transform: translate(-50%, -30%) rotate(-15deg) scaleY(0.8); }
    80% { transform: translate(-50%, -50%) rotate(10deg); }
    100% { transform: translate(-50%, -65%) rotate(0deg); }
  }

  .scs-surfer-wipeout .scs-surfboard {
    animation: scsBoardWipeout 0.7s ease;
  }

  @keyframes scsBoardWipeout {
    0% { transform: translate(-50%, 20%) rotate(0deg); }
    25% { transform: translate(-50%, 20%) rotate(-15deg); }
    50% { transform: translate(-50%, 30%) rotate(20deg); }
    75% { transform: translate(-50%, 20%) rotate(-10deg); }
    100% { transform: translate(-50%, 20%) rotate(0deg); }
  }

  /* Boost */
  .scs-surfer-boost .scs-surfer-emoji {
    animation: scsBoost 0.5s ease;
  }

  @keyframes scsBoost {
    0% { transform: translate(-50%, -65%) scale(1); filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5)); }
    30% { transform: translate(-50%, -80%) scale(1.15); filter: drop-shadow(0 0 20px rgba(74,222,128,0.7)); }
    100% { transform: translate(-50%, -65%) scale(1); filter: drop-shadow(0 6px 14px rgba(0,0,0,0.5)); }
  }

  .scs-surfer-boost .scs-surfboard {
    animation: scsBoardBoost 0.5s ease;
  }

  @keyframes scsBoardBoost {
    0% { box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
    30% { box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 0 20px rgba(74,222,128,0.5); }
    100% { box-shadow: 0 4px 12px rgba(0,0,0,0.4); }
  }

  /* ===== DRAG HINT ===== */
  .scs-drag-hint {
    position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%);
    padding: 0.8rem 1.5rem;
    background: rgba(0,0,0,0.55); backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1.5px solid rgba(250,204,21,0.35);
    border-radius: 16px;
    text-align: center;
    animation: scsDragHintFloat 2.5s ease-in-out infinite;
    z-index: 40;
  }

  .scs-drag-hint-arrows {
    font-size: 2rem; margin-bottom: 0.3rem;
    animation: scsUpDown 1s ease-in-out infinite;
  }

  @keyframes scsUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .scs-drag-hint p {
    color: #facc15; font-size: 0.9rem; font-weight: 700; margin: 0;
  }

  .scs-drag-hint-sub {
    color: rgba(255,255,255,0.6) !important; font-size: 0.8rem !important; margin-top: 0.2rem !important;
  }

  @keyframes scsDragHintFloat {
    0%, 100% { opacity: 0.7; transform: translateX(-50%) translateY(0); }
    50% { opacity: 1; transform: translateX(-50%) translateY(-6px); }
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .scs-buoy { width: 65px; height: 65px; }
    .scs-buoy-number { font-size: 1.4rem; }
    .scs-surfer-emoji { font-size: 2.8rem; }
    .scs-surfboard { width: 55px; height: 12px; }
    .scs-header { padding: 0.4rem 0.5rem; }
    .scs-sequence-bar { padding: 0.4rem 0.5rem; }
    .scs-header-center { display: none; }
    .scs-intro-content { padding: 1rem; }
    .scs-instructions-card { padding: 1rem; }
    .scs-start-btn, .scs-next-btn { padding: 0.8rem 1.8rem; font-size: 1rem; }
    .scs-intro-sun { width: 65px; height: 65px; }
    .scs-intro-surfer-emoji { font-size: 3.5rem; }
  }

  @media (max-width: 380px) {
    .scs-buoy { width: 55px; height: 55px; }
    .scs-buoy-number { font-size: 1.2rem; }
    .scs-seq-done, .scs-seq-next, .scs-seq-future {
      padding: 0.15rem 0.35rem; font-size: 0.7rem;
    }
  }
`;
