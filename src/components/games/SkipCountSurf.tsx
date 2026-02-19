"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// SKIP COUNT SURF  --  Skip Counting Rhythm Game
// Year 1 / Year 2 Mathematics
// Curriculum: "Skip count in twos, fives or tens to at least 120"
//             "Create skip counting and repeating patterns"
// ============================================================

interface SkipCountSurfProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";
type SkipType = 2 | 5 | 10;

interface Wave {
  id: number;
  number: number;
  x: number;
  y: number;
  isCorrect: boolean;
  hit: boolean;
  missed: boolean;
  speed: number;
  wobbleOffset: number;
  wobbleSpeed: number;
  driftX: number;
  hue: number;
  scale: number;
  sinking: boolean;
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
}

interface SplashEffect {
  id: number;
  x: number;
  y: number;
  type: "correct" | "wrong" | "miss" | "combo";
  particles: SplashParticle[];
  age: number;
}

interface SeaCreature {
  id: number;
  emoji: string;
  x: number;
  y: number;
  speed: number;
  direction: 1 | -1;
  wobble: number;
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

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  age: number;
}

const SEA_CREATURE_EMOJIS = [
  "\uD83D\uDC20", "\uD83D\uDC1F", "\uD83D\uDC2C", "\uD83D\uDC22",
  "\uD83D\uDC19", "\uD83E\uDD80", "\uD83E\uDD88", "\uD83D\uDC21",
  "\uD83E\uDDAD", "\uD83E\uDD91",
];

let waveIdCounter = 0;
const nextWaveId = () => ++waveIdCounter;

let creatureIdCounter = 0;
const nextCreatureId = () => ++creatureIdCounter;

let particleIdCounter = 0;
const nextParticleId = () => ++particleIdCounter;

export default function SkipCountSurf({ onExit }: SkipCountSurfProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [skipType, setSkipType] = useState<SkipType>(2);
  const [waves, setWaves] = useState<Wave[]>([]);
  const [nextExpected, setNextExpected] = useState(0);
  const [currentSequence, setCurrentSequence] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [neededCount, setNeededCount] = useState(8);
  const [splashEffects, setSplashEffects] = useState<SplashEffect[]>([]);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [surferX, setSurferX] = useState(50);
  const [surferTargetX, setSurferTargetX] = useState(50);
  const [surferTilt, setSurferTilt] = useState(0);
  const [surferBounce, setSurferBounce] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [showSequenceHint, setShowSequenceHint] = useState(true);
  const [seaCreatures, setSeaCreatures] = useState<SeaCreature[]>([]);
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [surferCelebrating, setSurferCelebrating] = useState(false);
  const [surferWobbling, setSurferWobbling] = useState(false);
  const [timeOfDay] = useState(() => Math.random());

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const frameCountRef = useRef(0);
  const screenRef = useRef<GameScreen>(screen);
  const wavesRef = useRef(waves);
  const splashRef = useRef(splashEffects);
  const ripplesRef = useRef(ripples);
  const creaturesRef = useRef(seaCreatures);
  const surferXRef = useRef(surferX);
  const surferTargetXRef = useRef(surferTargetX);

  useEffect(() => { screenRef.current = screen; }, [screen]);
  useEffect(() => { wavesRef.current = waves; }, [waves]);
  useEffect(() => { splashRef.current = splashEffects; }, [splashEffects]);
  useEffect(() => { ripplesRef.current = ripples; }, [ripples]);
  useEffect(() => { creaturesRef.current = seaCreatures; }, [seaCreatures]);
  useEffect(() => { surferXRef.current = surferX; }, [surferX]);
  useEffect(() => { surferTargetXRef.current = surferTargetX; }, [surferTargetX]);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 400, height: 600 };
  }, []);

  const getSkipTypeForLevel = useCallback((lvl: number): SkipType => {
    if (lvl <= 3) return 2;
    if (lvl <= 6) return 5;
    if (lvl <= 9) return 10;
    const types: SkipType[] = [2, 5, 10];
    return types[(lvl - 1) % 3];
  }, []);

  const generateSequence = useCallback(
    (skip: SkipType, lvl: number): number[] => {
      const startFrom = lvl <= 3 ? 0 : Math.floor(Math.random() * 5) * skip;
      const length = Math.min(8 + Math.floor(lvl / 2), 15);
      const seq: number[] = [];
      for (let i = 0; i < length; i++) {
        seq.push(startFrom + skip * (i + 1));
      }
      return seq;
    },
    []
  );

  const createSplashParticles = useCallback((x: number, y: number, type: "correct" | "wrong" | "miss" | "combo"): SplashParticle[] => {
    const count = type === "combo" ? 24 : type === "correct" ? 16 : 10;
    const particles: SplashParticle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = type === "combo" ? 4 + Math.random() * 6 : 2 + Math.random() * 5;
      particles.push({
        id: nextParticleId(),
        x: 0,
        y: 0,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (type === "correct" ? 3 : 1),
        size: type === "combo" ? 4 + Math.random() * 6 : 3 + Math.random() * 4,
        opacity: 1,
        hue: type === "correct" || type === "combo" ? 160 + Math.random() * 40 : type === "wrong" ? 0 : 200,
      });
    }
    return particles;
  }, []);

  const spawnSeaCreatures = useCallback(() => {
    const size = getContainerSize();
    const creatures: SeaCreature[] = [];
    const numCreatures = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numCreatures; i++) {
      const dir = Math.random() > 0.5 ? 1 : -1;
      creatures.push({
        id: nextCreatureId(),
        emoji: SEA_CREATURE_EMOJIS[Math.floor(Math.random() * SEA_CREATURE_EMOJIS.length)],
        x: dir === 1 ? -50 : size.width + 50,
        y: size.height * 0.5 + Math.random() * size.height * 0.4,
        speed: 0.3 + Math.random() * 0.6,
        direction: dir as 1 | -1,
        wobble: Math.random() * Math.PI * 2,
        size: 1.2 + Math.random() * 1,
        depth: 0.3 + Math.random() * 0.7,
      });
    }
    return creatures;
  }, [getContainerSize]);

  const spawnClouds = useCallback(() => {
    const size = getContainerSize();
    const newClouds: Cloud[] = [];
    const numClouds = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numClouds; i++) {
      newClouds.push({
        id: i,
        x: Math.random() * size.width,
        y: 10 + Math.random() * 60,
        speed: 0.1 + Math.random() * 0.3,
        width: 60 + Math.random() * 120,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
    return newClouds;
  }, [getContainerSize]);

  const spawnWave = useCallback(
    (correctNumber: number, skip: SkipType, lvl: number) => {
      const size = getContainerSize();
      const waveWidth = 80;
      const numWaves = Math.min(3 + Math.floor(lvl / 3), 6);
      const newWaves: Wave[] = [];
      const speed = 0.8 + lvl * 0.12;

      const correctX =
        waveWidth + Math.random() * (size.width - waveWidth * 2);
      newWaves.push({
        id: nextWaveId(),
        number: correctNumber,
        x: correctX,
        y: -70,
        isCorrect: true,
        hit: false,
        missed: false,
        speed,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 1.5 + Math.random(),
        driftX: (Math.random() - 0.5) * 0.3,
        hue: 160 + Math.random() * 40,
        scale: 1,
        sinking: false,
      });

      for (let i = 0; i < numWaves - 1; i++) {
        let distractor: number;
        do {
          const offset = Math.floor(Math.random() * skip * 3) + 1;
          distractor =
            correctNumber + (Math.random() > 0.5 ? offset : -offset);
          distractor = Math.max(1, distractor);
        } while (distractor % skip === 0 && distractor > 0);

        newWaves.push({
          id: nextWaveId(),
          number: distractor,
          x: waveWidth + Math.random() * (size.width - waveWidth * 2),
          y: -70 - Math.random() * 50,
          isCorrect: false,
          hit: false,
          missed: false,
          speed: speed + Math.random() * 0.2,
          wobbleOffset: Math.random() * Math.PI * 2,
          wobbleSpeed: 1.5 + Math.random(),
          driftX: (Math.random() - 0.5) * 0.4,
          hue: 200 + Math.random() * 60,
          scale: 1,
          sinking: false,
        });
      }

      setWaves((prev) => [...prev, ...newWaves]);
    },
    [getContainerSize]
  );

  const initLevel = useCallback(
    (lvl: number) => {
      const skip = getSkipTypeForLevel(lvl);
      const seq = generateSequence(skip, lvl);
      setSkipType(skip);
      setCurrentSequence(seq);
      setNextExpected(0);
      setCorrectCount(0);
      setNeededCount(seq.length);
      setWaves([]);
      setSplashEffects([]);
      setRipples([]);
      setComboCount(0);
      setShowSequenceHint(true);
      setSurferCelebrating(false);
      setSurferWobbling(false);
      const size = getContainerSize();
      setSurferX(size.width / 2);
      setSurferTargetX(size.width / 2);
      setSeaCreatures(spawnSeaCreatures());
      setClouds(spawnClouds());

      setTimeout(() => spawnWave(seq[0], skip, lvl), 1000);
    },
    [getSkipTypeForLevel, generateSequence, spawnWave, getContainerSize, spawnSeaCreatures, spawnClouds]
  );

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

  const handleWaveTap = useCallback(
    (wave: Wave) => {
      if (screen !== "playing" || wave.hit || wave.missed) return;

      const expectedNumber = currentSequence[nextExpected];

      if (wave.number === expectedNumber) {
        const newCombo = comboCount + 1;
        setScore((s) => s + 15 + comboCount * 5);
        setComboCount(newCombo);
        setWaves((prev) =>
          prev.map((w) => (w.id === wave.id ? { ...w, hit: true } : w))
        );
        setSurferTargetX(wave.x);

        const splashType = newCombo >= 5 ? "combo" : "correct";
        const particles = createSplashParticles(wave.x, wave.y, splashType);
        setSplashEffects((prev) => [
          ...prev,
          { id: Date.now(), x: wave.x, y: wave.y, type: splashType, particles, age: 0 },
        ]);
        setRipples((prev) => [...prev, { id: Date.now(), x: wave.x, y: wave.y, age: 0 }]);

        if (newCombo >= 3 && newCombo % 3 === 0) {
          setSurferCelebrating(true);
          setTimeout(() => setSurferCelebrating(false), 1000);
        }

        if (showSequenceHint) setShowSequenceHint(false);

        const newNext = nextExpected + 1;
        setNextExpected(newNext);
        const newCorrect = correctCount + 1;
        setCorrectCount(newCorrect);

        if (newCorrect >= neededCount) {
          setTimeout(() => setScreen("levelComplete"), 1000);
        } else {
          setTimeout(
            () => spawnWave(currentSequence[newNext], skipType, level),
            700
          );
        }
      } else {
        setComboCount(0);
        setWaves((prev) =>
          prev.map((w) => (w.id === wave.id ? { ...w, missed: true } : w))
        );
        const particles = createSplashParticles(wave.x, wave.y, "wrong");
        setSplashEffects((prev) => [
          ...prev,
          { id: Date.now(), x: wave.x, y: wave.y, type: "wrong", particles, age: 0 },
        ]);
        setSurferWobbling(true);
        setTimeout(() => setSurferWobbling(false), 600);
        setLives((l) => {
          const newL = l - 1;
          if (newL <= 0) {
            setTimeout(() => setScreen("gameOver"), 600);
          }
          return newL;
        });
      }
    },
    [
      screen, currentSequence, nextExpected, comboCount, correctCount,
      neededCount, spawnWave, skipType, level, showSequenceHint, createSplashParticles,
    ]
  );

  // Main animation loop
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const rawDelta = timestamp - lastTimeRef.current;
      const delta = Math.min(rawDelta / 16, 3);
      lastTimeRef.current = timestamp;
      frameCountRef.current++;
      const frame = frameCountRef.current;

      const size = getContainerSize();

      // Update waves
      setWaves((prev) => {
        let anyMissed = false;
        const updated = prev
          .map((w) => {
            if (w.hit) {
              return { ...w, scale: w.scale * 0.92, y: w.y - 2 * delta };
            }
            if (w.sinking) {
              return {
                ...w,
                y: w.y + w.speed * 0.5 * delta,
                scale: w.scale * 0.98,
              };
            }
            const wobble = Math.sin(frame * 0.04 * w.wobbleSpeed + w.wobbleOffset) * 8;
            const newY = w.y + w.speed * delta;
            const newX = w.x + w.driftX * delta + Math.sin(frame * 0.02 + w.wobbleOffset) * 0.3;
            const clampedX = Math.max(40, Math.min(size.width - 40, newX));

            if (newY > size.height + 30 && w.isCorrect && !w.missed) {
              anyMissed = true;
              return { ...w, x: clampedX, y: newY, missed: true, sinking: true };
            }
            if (newY > size.height + 30 && !w.isCorrect && !w.missed) {
              return { ...w, x: clampedX, y: newY, sinking: true };
            }
            return { ...w, x: clampedX, y: newY + wobble * 0.1 };
          })
          .filter((w) => {
            if (w.hit && w.scale < 0.1) return false;
            if (w.sinking && w.scale < 0.1) return false;
            if (w.y > size.height + 150) return false;
            return true;
          });

        if (anyMissed) {
          setComboCount(0);
          setLives((l) => {
            const newL = l - 1;
            if (newL <= 0) {
              setTimeout(() => setScreen("gameOver"), 600);
            }
            return newL;
          });
          setSurferWobbling(true);
          setTimeout(() => setSurferWobbling(false), 600);
        }

        return updated;
      });

      // Update splash particles
      setSplashEffects((prev) =>
        prev
          .map((s) => ({
            ...s,
            age: s.age + delta,
            particles: s.particles.map((p) => ({
              ...p,
              x: p.x + p.vx * delta,
              y: p.y + p.vy * delta,
              vy: p.vy + 0.15 * delta,
              opacity: Math.max(0, p.opacity - 0.02 * delta),
              size: p.size * (1 - 0.01 * delta),
            })),
          }))
          .filter((s) => s.age < 60)
      );

      // Update ripples
      setRipples((prev) =>
        prev
          .map((r) => ({ ...r, age: r.age + delta }))
          .filter((r) => r.age < 40)
      );

      // Update sea creatures
      setSeaCreatures((prev) =>
        prev.map((c) => {
          let newX = c.x + c.speed * c.direction * delta;
          const wobbleY = Math.sin(frame * 0.03 + c.wobble) * 3 * c.depth;
          if (newX > size.width + 80) newX = -60;
          if (newX < -80) newX = size.width + 60;
          return { ...c, x: newX, y: c.y + wobbleY * 0.05 };
        })
      );

      // Update clouds
      setClouds((prev) =>
        prev.map((c) => {
          let newX = c.x + c.speed * delta;
          if (newX > size.width + c.width) newX = -c.width;
          return { ...c, x: newX };
        })
      );

      // Smooth surfer movement
      const currentX = surferXRef.current;
      const targetX = surferTargetXRef.current;
      const diff = targetX - currentX;
      if (Math.abs(diff) > 1) {
        const newX = currentX + diff * 0.08 * delta;
        setSurferX(newX);
        setSurferTilt(Math.max(-15, Math.min(15, diff * 0.15)));
      } else {
        setSurferTilt((t) => t * 0.9);
      }
      setSurferBounce(Math.sin(frame * 0.06) * 4);

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [screen, getContainerSize]);

  // Respawn waves that fell off
  useEffect(() => {
    if (screen !== "playing") return;
    const correctWaveExists = waves.some(
      (w) => w.isCorrect && !w.hit && !w.missed && !w.sinking
    );
    if (!correctWaveExists && correctCount < neededCount) {
      const expected = currentSequence[nextExpected];
      if (expected !== undefined) {
        const timeout = setTimeout(
          () => spawnWave(expected, skipType, level),
          1200
        );
        return () => clearTimeout(timeout);
      }
    }
  }, [waves, screen, correctCount, neededCount, currentSequence, nextExpected, spawnWave, skipType, level]);

  // Periodically spawn new sea creatures
  useEffect(() => {
    if (screen !== "playing") return;
    const interval = setInterval(() => {
      const size = getContainerSize();
      const dir = Math.random() > 0.5 ? 1 : -1;
      setSeaCreatures((prev) => {
        if (prev.length >= 8) {
          return prev.slice(1).concat({
            id: nextCreatureId(),
            emoji: SEA_CREATURE_EMOJIS[Math.floor(Math.random() * SEA_CREATURE_EMOJIS.length)],
            x: dir === 1 ? -50 : size.width + 50,
            y: size.height * 0.55 + Math.random() * size.height * 0.35,
            speed: 0.3 + Math.random() * 0.6,
            direction: dir as 1 | -1,
            wobble: Math.random() * Math.PI * 2,
            size: 1.2 + Math.random() * 1,
            depth: 0.3 + Math.random() * 0.7,
          });
        }
        return [
          ...prev,
          {
            id: nextCreatureId(),
            emoji: SEA_CREATURE_EMOJIS[Math.floor(Math.random() * SEA_CREATURE_EMOJIS.length)],
            x: dir === 1 ? -50 : size.width + 50,
            y: size.height * 0.55 + Math.random() * size.height * 0.35,
            speed: 0.3 + Math.random() * 0.6,
            direction: dir as 1 | -1,
            wobble: Math.random() * Math.PI * 2,
            size: 1.2 + Math.random() * 1,
            depth: 0.3 + Math.random() * 0.7,
          },
        ];
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

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  const skipLabel =
    skipType === 2 ? "Count by 2s" : skipType === 5 ? "Count by 5s" : "Count by 10s";

  const completedSequence = currentSequence.slice(0, nextExpected);
  const upcomingNumber = currentSequence[nextExpected];
  const futureNumbers = currentSequence.slice(nextExpected + 1, nextExpected + 4);

  // Sky gradient based on time of day
  const skyTop = timeOfDay < 0.3 ? "#ff6b35" : timeOfDay < 0.7 ? "#0284c7" : "#1e1b4b";
  const skyMid = timeOfDay < 0.3 ? "#ff8c42" : timeOfDay < 0.7 ? "#0ea5e9" : "#312e81";

  // ===================== INTRO =====================
  if (screen === "intro") {
    return (
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-intro">
          <div className="sc-intro-ocean-bg">
            {/* Sky gradient */}
            <div className="sc-intro-sky" />
            {/* Sun */}
            <div className="sc-intro-sun" />
            {/* Animated clouds */}
            {[...Array(5)].map((_, i) => (
              <div
                key={`cloud-${i}`}
                className="sc-intro-cloud"
                style={{
                  top: `${8 + i * 7}%`,
                  left: `${-20 + i * 25}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${20 + i * 5}s`,
                  opacity: 0.6 + (i % 3) * 0.15,
                  transform: `scale(${0.7 + (i % 3) * 0.3})`,
                }}
              />
            ))}
            {/* Ocean waves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`wave-${i}`}
                className="sc-intro-wave-layer"
                style={{
                  bottom: `${i * 5}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                  opacity: 0.15 + i * 0.03,
                }}
              />
            ))}
            {/* Sea creatures swimming */}
            {SEA_CREATURE_EMOJIS.slice(0, 5).map((c, i) => (
              <div
                key={`creature-${i}`}
                className="sc-intro-creature"
                style={{
                  bottom: `${3 + i * 6}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${12 + i * 3}s`,
                  fontSize: `${1.2 + (i % 3) * 0.4}rem`,
                }}
              >
                {c}
              </div>
            ))}
            {/* Surfer silhouette */}
            <div className="sc-intro-surfer-silhouette">
              <div className="sc-intro-surfer-figure">{"\uD83C\uDFC4"}</div>
            </div>
          </div>
          <div className="sc-intro-content">
            <div className="sc-logo">
              <span className="sc-logo-wave">{"\uD83C\uDF0A"}</span>
              <h1>Skip Count Surf</h1>
              <span className="sc-logo-surfer">{"\uD83C\uDFC4"}</span>
            </div>
            <p className="sc-tagline">Ride the waves of numbers!</p>
            <div className="sc-instructions-card">
              <h3>How to Surf</h3>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-num-bubble done">2</span>
                  <span className="sc-num-bubble done">4</span>
                  <span className="sc-num-bubble done">6</span>
                  <span className="sc-num-bubble active">8</span>
                  <span className="sc-num-bubble dim">?</span>
                </div>
                <p>
                  Numbers float on <span className="sc-hl-blue">OCEAN WAVES</span>
                </p>
              </div>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-surfer-icon">{"\uD83C\uDFC4"}</span>
                  <span className="sc-arrow-anim">{"\u2192"}</span>
                  <span className="sc-num-bubble correct-glow">10</span>
                </div>
                <p>
                  <strong>TAP</strong> the next number in the{" "}
                  <span className="sc-hl-green">SKIP COUNT</span> pattern!
                </p>
              </div>
              <div className="sc-instruction">
                <div className="sc-instruction-visual">
                  <span className="sc-combo-icon">{"\uD83D\uDD25"} x5</span>
                  <span className="sc-arrow-anim">{"\u2192"}</span>
                  <span className="sc-dolphin-icon">{"\uD83D\uDC2C"}</span>
                </div>
                <p>
                  Build a <span className="sc-hl-orange">COMBO</span> for spectacular
                  splashes!
                </p>
              </div>
            </div>
            <button className="sc-start-btn" onClick={startGame}>
              <span className="sc-btn-icon">{"\uD83C\uDF0A"}</span>
              Catch the Waves!
              <span className="sc-btn-icon">{"\uD83C\uDFC4"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-complete">
          <div className="sc-complete-ocean-bg">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="sc-complete-wave"
                style={{
                  bottom: `${i * 6}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.1 + i * 0.04,
                }}
              />
            ))}
          </div>
          <div className="sc-complete-content">
            <div className="sc-victory-surfer">{"\uD83C\uDFC4"}</div>
            <h1 className="sc-complete-title">
              Gnarly Ride!
            </h1>
            <p className="sc-complete-subtitle">Level {level} Complete</p>
            <div className="sc-sequence-replay">
              {currentSequence.map((n, i) => (
                <span
                  key={i}
                  className="sc-seq-replay-num"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="sc-skip-label-complete">{skipLabel} mastered!</p>
            <div className="sc-score-card">
              <div className="sc-score-item">
                <span className="sc-score-label">Score</span>
                <span className="sc-score-value">{score}</span>
              </div>
              <div className="sc-score-item">
                <span className="sc-score-label">Best Combo</span>
                <span className="sc-score-value">{"\uD83D\uDD25"} x{comboCount}</span>
              </div>
            </div>
            <div className="sc-complete-buttons">
              <button className="sc-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="sc-menu-btn"
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
      <div className="sc-game">
        <style>{scStyles}</style>
        <div className="sc-complete">
          <div className="sc-complete-ocean-bg">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="sc-complete-wave"
                style={{
                  bottom: `${i * 6}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: 0.1 + i * 0.04,
                }}
              />
            ))}
          </div>
          <div className="sc-complete-content">
            <div className="sc-wipeout-icon">{"\uD83C\uDF0A"}</div>
            <h1 className="sc-complete-title sc-wipeout-title">
              Wipeout!
            </h1>
            <p className="sc-complete-subtitle">
              You surfed {correctCount} waves on Level {level}
            </p>
            <div className="sc-score-card">
              <div className="sc-score-item">
                <span className="sc-score-label">Final Score</span>
                <span className="sc-score-value">{score}</span>
              </div>
            </div>
            <div className="sc-complete-buttons">
              <button className="sc-next-btn" onClick={startGame}>
                Paddle Back Out {"\uD83D\uDD04"}
              </button>
              <button
                className="sc-menu-btn"
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

  // ===================== PLAYING =====================
  return (
    <div className="sc-game">
      <style>{scStyles}</style>
      <div className="sc-play" style={{ '--sky-top': skyTop, '--sky-mid': skyMid } as React.CSSProperties}>
        {/* Header */}
        <div className="sc-header">
          <div className="sc-header-left">
            <button
              className="sc-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="sc-level-badge">Lv {level}</div>
            <div className="sc-skip-badge">{skipLabel}</div>
          </div>
          <div className="sc-header-center">
            <span className="sc-lives">{livesDisplay.join(" ")}</span>
            {comboCount >= 2 && (
              <span className={`sc-combo-badge ${comboCount >= 5 ? 'sc-combo-fire' : ''}`}>
                {"\uD83D\uDD25"} x{comboCount}
              </span>
            )}
          </div>
          <div className="sc-header-right">
            <div className="sc-score-badge-play">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Sequence tracker */}
        <div className="sc-sequence-bar">
          <div className="sc-seq-track">
            {completedSequence.slice(-4).map((n, i) => (
              <span key={`done-${i}`} className="sc-seq-done">
                {n}
              </span>
            ))}
            {upcomingNumber !== undefined && (
              <span className="sc-seq-next">{upcomingNumber}</span>
            )}
            {futureNumbers.map((n, i) => (
              <span key={`future-${i}`} className="sc-seq-future">
                {n}
              </span>
            ))}
          </div>
          <span className="sc-progress-text">
            {correctCount} / {neededCount}
          </span>
        </div>

        {/* Ocean area */}
        <div className="sc-ocean" ref={containerRef}>
          {/* Sky gradient overlay */}
          <div className="sc-sky-area">
            {/* Sun or moon */}
            <div className="sc-sun" />
            {/* Clouds */}
            {clouds.map((cloud) => (
              <div
                key={cloud.id}
                className="sc-cloud"
                style={{
                  left: cloud.x,
                  top: cloud.y,
                  width: cloud.width,
                  opacity: cloud.opacity,
                }}
              />
            ))}
          </div>

          {/* Water surface line */}
          <div className="sc-water-surface">
            <svg className="sc-wave-svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path className="sc-wave-path-1" />
              <path className="sc-wave-path-2" />
            </svg>
          </div>

          {/* Animated wave layers */}
          <div className="sc-wave-layers">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="sc-wave-layer"
                style={{
                  bottom: `${i * 12}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${4 + i}s`,
                  opacity: 0.06 + i * 0.02,
                  height: `${30 + i * 8}%`,
                }}
              />
            ))}
          </div>

          {/* Deep water / sea floor hints */}
          <div className="sc-deep-water" />

          {/* Sea creatures */}
          {seaCreatures.map((creature) => (
            <div
              key={creature.id}
              className="sc-sea-creature"
              style={{
                left: creature.x,
                top: creature.y,
                fontSize: `${creature.size}rem`,
                opacity: 0.3 + creature.depth * 0.4,
                transform: `scaleX(${creature.direction})`,
                filter: `blur(${(1 - creature.depth) * 2}px)`,
              }}
            >
              {creature.emoji}
            </div>
          ))}

          {/* Wave number bubbles */}
          {waves.map((wave) => (
            <button
              key={wave.id}
              className={`sc-wave-btn ${wave.hit ? "sc-wave-hit" : ""} ${
                wave.missed ? "sc-wave-missed" : ""
              } ${wave.sinking ? "sc-wave-sinking" : ""} ${
                wave.isCorrect && !wave.hit && !wave.missed ? "sc-wave-correct" : ""
              }`}
              style={{
                left: wave.x,
                top: wave.y,
                transform: `translate(-50%, -50%) scale(${wave.scale})`,
                '--wave-hue': wave.hue,
              } as React.CSSProperties}
              onClick={() => handleWaveTap(wave)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleWaveTap(wave);
              }}
              disabled={wave.hit || wave.missed}
            >
              <div className="sc-wave-crest" />
              <div className="sc-wave-foam" />
              <div className="sc-wave-number-inner">{wave.number}</div>
              {wave.isCorrect && !wave.hit && !wave.missed && (
                <div className="sc-wave-glow" />
              )}
            </button>
          ))}

          {/* Splash particle effects */}
          {splashEffects.map((splash) => (
            <div key={splash.id} className="sc-splash-container" style={{ left: splash.x, top: splash.y }}>
              {/* Central splash */}
              <div className={`sc-splash-center sc-splash-${splash.type}`}>
                {splash.type === "correct" || splash.type === "combo" ? "\uD83E\uDD19" : "\uD83D\uDCA5"}
              </div>
              {/* Spray particles */}
              {splash.particles.map((p) => (
                <div
                  key={p.id}
                  className="sc-spray-particle"
                  style={{
                    transform: `translate(${p.x}px, ${p.y}px)`,
                    width: p.size,
                    height: p.size,
                    opacity: p.opacity,
                    background: `hsl(${p.hue}, 80%, 65%)`,
                  }}
                />
              ))}
              {splash.type === "combo" && (
                <div className="sc-combo-splash-text">
                  {"\uD83D\uDC2C"} COMBO x{comboCount}!
                </div>
              )}
            </div>
          ))}

          {/* Ripple effects */}
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="sc-ripple"
              style={{
                left: ripple.x,
                top: ripple.y,
                transform: `translate(-50%, -50%) scale(${1 + ripple.age * 0.08})`,
                opacity: Math.max(0, 1 - ripple.age * 0.03),
              }}
            />
          ))}

          {/* Surfer */}
          <div
            className={`sc-surfer ${surferCelebrating ? "sc-surfer-celebrate" : ""} ${surferWobbling ? "sc-surfer-wobble" : ""}`}
            style={{
              left: surferX,
              transform: `translateX(-50%) rotate(${surferTilt}deg) translateY(${surferBounce}px)`,
            }}
          >
            <div className="sc-surfboard" />
            <div className="sc-surfer-body">{"\uD83C\uDFC4"}</div>
            <div className="sc-surf-spray" />
          </div>

          {/* Hint */}
          {showSequenceHint && upcomingNumber !== undefined && (
            <div className="sc-hint-bubble">
              <div className="sc-hint-arrow">{"\u2193"}</div>
              <p>Tap the wave with <strong>{upcomingNumber}</strong>!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const scStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .sc-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
  }

  /* ===== INTRO SCREEN ===== */
  .sc-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #ff8c42 0%, #ff6b35 15%, #0ea5e9 35%, #0284c7 55%, #075985 75%, #0c4a6e 100%);
  }

  .sc-intro-ocean-bg { position: absolute; inset: 0; overflow: hidden; }

  .sc-intro-sky {
    position: absolute; top: 0; left: 0; right: 0; height: 40%;
    background: linear-gradient(180deg,
      rgba(255,140,66,0.4) 0%,
      rgba(255,107,53,0.2) 50%,
      transparent 100%);
  }

  .sc-intro-sun {
    position: absolute; top: 8%; left: 50%; transform: translateX(-50%);
    width: 80px; height: 80px; border-radius: 50%;
    background: radial-gradient(circle, #fbbf24 0%, #f59e0b 40%, rgba(245,158,11,0) 70%);
    box-shadow: 0 0 60px rgba(251,191,36,0.6), 0 0 120px rgba(251,191,36,0.3);
    animation: scSunPulse 4s ease-in-out infinite;
  }

  @keyframes scSunPulse {
    0%, 100% { box-shadow: 0 0 60px rgba(251,191,36,0.6), 0 0 120px rgba(251,191,36,0.3); }
    50% { box-shadow: 0 0 80px rgba(251,191,36,0.8), 0 0 160px rgba(251,191,36,0.4); }
  }

  .sc-intro-cloud {
    position: absolute; width: 120px; height: 40px;
    background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%;
    animation: scCloudDrift linear infinite;
  }

  @keyframes scCloudDrift {
    0% { transform: translateX(-100px); }
    100% { transform: translateX(calc(100vw + 100px)); }
  }

  .sc-intro-wave-layer {
    position: absolute; left: -20%; right: -20%; height: 50px;
    background: rgba(255,255,255,0.12);
    border-radius: 40% 60% 40% 60%;
    animation: scIntroWaveRoll ease-in-out infinite;
  }

  @keyframes scIntroWaveRoll {
    0%, 100% { transform: translateX(-3%) scaleY(1); }
    25% { transform: translateX(2%) scaleY(1.1); }
    50% { transform: translateX(3%) scaleY(0.9); }
    75% { transform: translateX(-2%) scaleY(1.05); }
  }

  .sc-intro-creature {
    position: absolute; left: -5%;
    animation: scCreatureSwim linear infinite;
  }

  @keyframes scCreatureSwim {
    0% { transform: translateX(-30px) translateY(0); }
    25% { transform: translateX(25vw) translateY(-8px); }
    50% { transform: translateX(50vw) translateY(0); }
    75% { transform: translateX(75vw) translateY(8px); }
    100% { transform: translateX(105vw) translateY(0); }
  }

  .sc-intro-surfer-silhouette {
    position: absolute; bottom: 28%; left: 50%; transform: translateX(-50%);
    animation: scSurferFloat 3s ease-in-out infinite;
  }

  .sc-intro-surfer-figure {
    font-size: 4rem;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
  }

  @keyframes scSurferFloat {
    0%, 100% { transform: translateX(-50%) translateY(0) rotate(-3deg); }
    50% { transform: translateX(-50%) translateY(-12px) rotate(3deg); }
  }

  .sc-intro-content {
    position: relative; z-index: 10; text-align: center;
    padding: 1.5rem; max-width: 480px;
  }

  .sc-logo {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; margin-bottom: 0.5rem;
  }

  .sc-logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem); font-weight: 900;
    background: linear-gradient(135deg, #ffffff 0%, #bae6fd 50%, #7dd3fc 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-shadow: none;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  .sc-logo-wave {
    font-size: 2.2rem;
    animation: scWaveBounce 2s ease-in-out infinite;
  }

  .sc-logo-surfer {
    font-size: 2.2rem;
    animation: scWaveBounce 2s ease-in-out 0.3s infinite;
  }

  @keyframes scWaveBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
  }

  .sc-tagline {
    color: rgba(255,255,255,0.85); font-size: 1.1rem;
    margin-bottom: 1.5rem; font-weight: 600;
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .sc-instructions-card {
    background: rgba(255,255,255,0.08);
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 20px; padding: 1.2rem 1.5rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }

  .sc-instructions-card h3 {
    color: white; font-size: 1.1rem; margin-bottom: 1rem; font-weight: 800;
  }

  .sc-instruction { margin-bottom: 1rem; }
  .sc-instruction:last-child { margin-bottom: 0; }

  .sc-instruction-visual {
    display: flex; align-items: center; justify-content: center;
    gap: 0.3rem; margin-bottom: 0.3rem;
  }

  .sc-num-bubble {
    width: 34px; height: 34px; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 0.85rem;
    border: 2px solid rgba(255,255,255,0.2);
  }

  .sc-num-bubble.done {
    background: rgba(74,222,128,0.2); border-color: rgba(74,222,128,0.4); color: #4ade80;
  }
  .sc-num-bubble.active {
    background: rgba(74,222,128,0.4); border-color: #4ade80; color: white;
    box-shadow: 0 0 12px rgba(74,222,128,0.5);
    animation: scActivePulse 1s ease-in-out infinite;
  }
  .sc-num-bubble.dim { opacity: 0.3; }
  .sc-num-bubble.correct-glow {
    background: rgba(74,222,128,0.3); border-color: #4ade80; color: white;
    box-shadow: 0 0 16px rgba(74,222,128,0.6);
  }

  @keyframes scActivePulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 12px rgba(74,222,128,0.5); }
    50% { transform: scale(1.1); box-shadow: 0 0 20px rgba(74,222,128,0.8); }
  }

  .sc-surfer-icon { font-size: 1.8rem; }
  .sc-arrow-anim { color: rgba(255,255,255,0.5); font-size: 1.1rem; animation: scArrowBounce 1s ease-in-out infinite; }
  @keyframes scArrowBounce {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  .sc-combo-icon { color: #fb923c; font-weight: 800; font-size: 1rem; }
  .sc-dolphin-icon { font-size: 1.8rem; animation: scDolphinLeap 2s ease-in-out infinite; }
  @keyframes scDolphinLeap {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    30% { transform: translateY(-10px) rotate(-15deg); }
    60% { transform: translateY(-5px) rotate(10deg); }
  }

  .sc-instruction p { color: rgba(255,255,255,0.8); font-size: 0.9rem; }
  .sc-hl-blue { color: #7dd3fc; font-weight: 700; }
  .sc-hl-green { color: #4ade80; font-weight: 700; }
  .sc-hl-orange { color: #fb923c; font-weight: 700; }

  .sc-start-btn, .sc-next-btn {
    display: inline-flex; align-items: center; gap: 0.7rem;
    padding: 0.9rem 2.2rem; font-family: 'Nunito', sans-serif;
    font-size: 1.15rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(14,165,233,0.5), 0 0 0 3px rgba(255,255,255,0.1);
  }

  .sc-start-btn:hover, .sc-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(14,165,233,0.6), 0 0 0 3px rgba(255,255,255,0.2);
  }

  .sc-start-btn:active, .sc-next-btn:active {
    transform: translateY(0);
  }

  .sc-btn-icon { font-size: 1.3rem; }

  /* ===== LEVEL COMPLETE / GAME OVER ===== */
  .sc-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
    background: linear-gradient(180deg, #0369a1 0%, #0284c7 30%, #0ea5e9 60%, #075985 100%);
  }

  .sc-complete-ocean-bg { position: absolute; inset: 0; overflow: hidden; }

  .sc-complete-wave {
    position: absolute; left: -20%; right: -20%; height: 50px;
    background: rgba(255,255,255,0.1);
    border-radius: 40% 60% 40% 60%;
    animation: scIntroWaveRoll 4s ease-in-out infinite;
  }

  .sc-complete-content {
    position: relative; z-index: 10; text-align: center;
    padding: 2rem; max-width: 500px;
  }

  .sc-victory-surfer {
    font-size: 5rem; margin-bottom: 0.5rem;
    animation: scVictorySurfer 2s ease-in-out infinite;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
  }

  @keyframes scVictorySurfer {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    25% { transform: translateY(-15px) rotate(5deg); }
    50% { transform: translateY(-5px) rotate(-3deg); }
    75% { transform: translateY(-20px) rotate(8deg); }
  }

  .sc-wipeout-icon {
    font-size: 4rem; margin-bottom: 0.5rem;
    animation: scWipeoutShake 0.5s ease-in-out 3;
  }

  @keyframes scWipeoutShake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }

  .sc-complete-title {
    font-size: clamp(1.6rem, 6vw, 2.5rem); color: white; font-weight: 900;
    margin-bottom: 0.3rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .sc-wipeout-title { color: #fca5a5; }

  .sc-complete-subtitle {
    color: #7dd3fc; font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600;
  }

  .sc-sequence-replay {
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 0.3rem; margin-bottom: 0.8rem; padding: 0 1rem;
  }

  .sc-seq-replay-num {
    padding: 0.25rem 0.55rem; background: rgba(74,222,128,0.25);
    border: 1.5px solid rgba(74,222,128,0.4);
    border-radius: 10px; color: #4ade80; font-weight: 700; font-size: 0.85rem;
    animation: scSeqPopIn 0.4s ease forwards;
    opacity: 0; transform: scale(0);
  }

  @keyframes scSeqPopIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.15); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  .sc-skip-label-complete {
    color: #38bdf8; font-size: 0.95rem; margin-bottom: 1.5rem; font-weight: 600;
  }

  .sc-score-card {
    display: flex; justify-content: center; gap: 2rem;
    margin-bottom: 1.5rem; flex-wrap: wrap;
  }
  .sc-score-item { display: flex; flex-direction: column; align-items: center; }
  .sc-score-label { font-size: 0.8rem; color: #7dd3fc; margin-bottom: 0.2rem; }
  .sc-score-value { font-size: 1.4rem; font-weight: 900; color: white; }

  .sc-complete-buttons {
    display: flex; flex-direction: column; gap: 0.8rem; align-items: center;
  }

  .sc-menu-btn {
    padding: 0.7rem 1.8rem; font-family: 'Nunito', sans-serif;
    font-size: 0.95rem; font-weight: 700; color: rgba(255,255,255,0.6);
    background: transparent; border: 2px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }
  .sc-menu-btn:hover { border-color: rgba(255,255,255,0.35); color: white; }

  /* ===== PLAYING SCREEN ===== */
  .sc-play {
    height: 100%; display: flex; flex-direction: column;
    background: linear-gradient(180deg,
      var(--sky-top, #0284c7) 0%,
      var(--sky-mid, #0ea5e9) 25%,
      #0369a1 45%,
      #075985 65%,
      #0c4a6e 80%,
      #083344 100%);
  }

  .sc-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.7rem;
    background: rgba(0,0,0,0.25); backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 50; flex-wrap: wrap; gap: 0.3rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .sc-header-left, .sc-header-right { display: flex; align-items: center; gap: 0.4rem; }
  .sc-header-center { display: flex; align-items: center; gap: 0.4rem; }

  .sc-back-btn {
    width: 34px; height: 34px; background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px; color: white; font-size: 1rem;
    cursor: pointer; transition: all 0.2s ease;
    display: flex; align-items: center; justify-content: center;
  }
  .sc-back-btn:hover { background: rgba(255,255,255,0.2); }

  .sc-level-badge {
    padding: 0.3rem 0.7rem; background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border-radius: 14px; font-weight: 700; color: white; font-size: 0.8rem;
    box-shadow: 0 2px 8px rgba(14,165,233,0.3);
  }

  .sc-skip-badge {
    padding: 0.3rem 0.7rem; background: rgba(74,222,128,0.15);
    border: 1px solid rgba(74,222,128,0.3);
    border-radius: 14px; font-weight: 700; color: #4ade80; font-size: 0.75rem;
  }

  .sc-lives { font-size: 0.9rem; letter-spacing: 2px; }

  .sc-combo-badge {
    padding: 0.25rem 0.5rem; background: rgba(251,146,60,0.25);
    border: 1px solid rgba(251,146,60,0.4);
    border-radius: 10px; font-size: 0.75rem; color: #fb923c; font-weight: 700;
    animation: scComboPop 0.3s ease;
  }

  .sc-combo-fire {
    background: rgba(239,68,68,0.25);
    border-color: rgba(239,68,68,0.5);
    color: #fca5a5;
    animation: scComboFire 0.5s ease-in-out infinite alternate;
  }

  @keyframes scComboFire {
    0% { box-shadow: 0 0 4px rgba(239,68,68,0.3); }
    100% { box-shadow: 0 0 12px rgba(239,68,68,0.6); }
  }

  @keyframes scComboPop {
    0% { transform: scale(0.8); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  .sc-score-badge-play {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.3rem 0.7rem; background: rgba(251,191,36,0.15);
    border: 1px solid rgba(251,191,36,0.3);
    border-radius: 14px; color: #fbbf24; font-weight: 700; font-size: 0.8rem;
  }

  /* Sequence bar */
  .sc-sequence-bar {
    display: flex; align-items: center; justify-content: center; gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    background: rgba(0,0,0,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }

  .sc-seq-track {
    display: flex; align-items: center; gap: 0.3rem;
  }

  .sc-seq-done {
    padding: 0.2rem 0.45rem; background: rgba(74,222,128,0.25);
    border: 1px solid rgba(74,222,128,0.4);
    border-radius: 8px; color: #4ade80; font-weight: 700; font-size: 0.8rem;
  }

  .sc-seq-next {
    padding: 0.25rem 0.55rem; background: rgba(250,204,21,0.25);
    border: 2px solid rgba(250,204,21,0.5);
    border-radius: 8px; color: #facc15; font-weight: 800; font-size: 0.9rem;
    animation: scNextPulse 1s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(250,204,21,0.3);
  }

  @keyframes scNextPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(250,204,21,0.3); }
    50% { transform: scale(1.1); box-shadow: 0 0 18px rgba(250,204,21,0.5); }
  }

  .sc-seq-future {
    padding: 0.2rem 0.45rem; background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px; color: rgba(255,255,255,0.3); font-weight: 600; font-size: 0.75rem;
  }

  .sc-progress-text {
    color: rgba(255,255,255,0.3); font-size: 0.7rem; margin-left: 0.5rem; font-weight: 600;
  }

  /* ===== OCEAN PLAY AREA ===== */
  .sc-ocean {
    flex: 1; position: relative; overflow: hidden; touch-action: none;
  }

  .sc-sky-area {
    position: absolute; top: 0; left: 0; right: 0; height: 30%;
    pointer-events: none;
  }

  .sc-sun {
    position: absolute; top: 5%; right: 12%;
    width: 50px; height: 50px; border-radius: 50%;
    background: radial-gradient(circle, #fbbf24 0%, #f59e0b 40%, rgba(245,158,11,0) 70%);
    box-shadow: 0 0 40px rgba(251,191,36,0.5), 0 0 80px rgba(251,191,36,0.2);
    animation: scSunPulse 4s ease-in-out infinite;
  }

  .sc-cloud {
    position: absolute; height: 20px;
    background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%);
    border-radius: 50%; pointer-events: none;
  }

  .sc-water-surface {
    position: absolute; top: 28%; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(125,211,252,0.3) 20%,
      rgba(125,211,252,0.5) 50%,
      rgba(125,211,252,0.3) 80%,
      transparent 100%);
    z-index: 2;
    animation: scSurfaceShimmer 3s ease-in-out infinite;
  }

  @keyframes scSurfaceShimmer {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .sc-wave-svg { display: none; }

  .sc-wave-layers { position: absolute; inset: 0; pointer-events: none; }

  .sc-wave-layer {
    position: absolute; left: -30%; right: -30%;
    background: radial-gradient(ellipse at 50% 0%, rgba(125,211,252,0.15) 0%, transparent 70%);
    border-radius: 50% 50% 50% 50%;
    animation: scWaveLayerMove ease-in-out infinite;
  }

  @keyframes scWaveLayerMove {
    0%, 100% { transform: translateX(-2%) scaleY(1) rotate(0deg); }
    25% { transform: translateX(1.5%) scaleY(1.05) rotate(0.5deg); }
    50% { transform: translateX(2%) scaleY(0.95) rotate(0deg); }
    75% { transform: translateX(-1.5%) scaleY(1.02) rotate(-0.5deg); }
  }

  .sc-deep-water {
    position: absolute; bottom: 0; left: 0; right: 0; height: 20%;
    background: linear-gradient(180deg, transparent 0%, rgba(8,51,68,0.6) 50%, rgba(8,51,68,0.9) 100%);
    pointer-events: none;
  }

  /* Sea creatures */
  .sc-sea-creature {
    position: absolute; pointer-events: none; z-index: 1;
    transition: none;
  }

  /* ===== WAVE NUMBER BUBBLES ===== */
  .sc-wave-btn {
    position: absolute;
    width: 70px; height: 70px;
    border: none; background: none; padding: 0;
    cursor: pointer; z-index: 10;
    font-family: 'Nunito', sans-serif;
    transition: none;
  }

  .sc-wave-btn:active:not(:disabled) .sc-wave-crest {
    transform: scale(0.92);
  }

  .sc-wave-crest {
    position: absolute; inset: 0;
    border-radius: 50% 50% 45% 45%;
    background: radial-gradient(circle at 35% 30%,
      hsla(var(--wave-hue), 70%, 75%, 0.95) 0%,
      hsla(var(--wave-hue), 65%, 55%, 0.9) 50%,
      hsla(var(--wave-hue), 60%, 40%, 0.85) 100%);
    box-shadow:
      0 6px 20px hsla(var(--wave-hue), 60%, 40%, 0.4),
      inset 0 -6px 12px hsla(var(--wave-hue), 70%, 25%, 0.3),
      inset 0 4px 8px hsla(var(--wave-hue), 80%, 80%, 0.2);
    transition: transform 0.15s ease;
  }

  .sc-wave-foam {
    position: absolute; top: 5px; left: 12%; width: 35%; height: 18%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%;
  }

  .sc-wave-number-inner {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.5rem; font-weight: 900; color: white;
    text-shadow: 0 2px 6px rgba(0,0,0,0.4), 0 0 10px rgba(0,0,0,0.1);
    z-index: 2;
  }

  .sc-wave-glow {
    position: absolute; inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%);
    animation: scWaveGlow 1.5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes scWaveGlow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.15); }
  }

  .sc-wave-correct .sc-wave-crest {
    box-shadow:
      0 6px 20px hsla(var(--wave-hue), 60%, 40%, 0.4),
      0 0 15px rgba(74,222,128,0.2),
      inset 0 -6px 12px hsla(var(--wave-hue), 70%, 25%, 0.3),
      inset 0 4px 8px hsla(var(--wave-hue), 80%, 80%, 0.2);
  }

  .sc-wave-hit {
    pointer-events: none;
    animation: scWaveHitAnim 0.6s ease forwards;
  }

  @keyframes scWaveHitAnim {
    0% { opacity: 1; }
    30% { opacity: 1; transform: translate(-50%, -60%) scale(1.3); }
    100% { opacity: 0; transform: translate(-50%, -90%) scale(0.5); }
  }

  .sc-wave-hit .sc-wave-crest {
    background: radial-gradient(circle at 35% 30%,
      rgba(74,222,128,0.9) 0%,
      rgba(34,197,94,0.8) 50%,
      rgba(22,163,74,0.7) 100%);
    box-shadow: 0 0 30px rgba(74,222,128,0.6);
  }

  .sc-wave-missed {
    pointer-events: none;
  }

  .sc-wave-missed .sc-wave-crest {
    background: radial-gradient(circle, rgba(239,68,68,0.6) 0%, rgba(220,38,38,0.4) 100%);
    box-shadow: 0 0 15px rgba(239,68,68,0.3);
  }

  .sc-wave-missed .sc-wave-number-inner { opacity: 0.5; }

  .sc-wave-sinking {
    pointer-events: none;
    animation: scWaveSink 1s ease-in forwards;
  }

  @keyframes scWaveSink {
    0% { opacity: 0.8; }
    100% { opacity: 0; transform: translate(-50%, -30%) scale(0.3); }
  }

  /* ===== SPLASH EFFECTS ===== */
  .sc-splash-container {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 60;
  }

  .sc-splash-center {
    font-size: 2.5rem; position: relative; z-index: 2;
    animation: scSplashPop 0.6s ease forwards;
  }

  @keyframes scSplashPop {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    30% { transform: scale(1.4) rotate(10deg); opacity: 1; }
    100% { transform: scale(0.8) rotate(0deg) translateY(-20px); opacity: 0; }
  }

  .sc-splash-correct .sc-splash-center { filter: drop-shadow(0 0 10px rgba(74,222,128,0.8)); }
  .sc-splash-wrong .sc-splash-center { filter: drop-shadow(0 0 10px rgba(239,68,68,0.8)); }
  .sc-splash-combo .sc-splash-center { font-size: 3rem; filter: drop-shadow(0 0 15px rgba(251,191,36,0.8)); }

  .sc-spray-particle {
    position: absolute; top: 0; left: 0;
    border-radius: 50%;
    pointer-events: none;
    transition: none;
  }

  .sc-combo-splash-text {
    position: absolute; top: -30px; left: 50%; transform: translateX(-50%);
    white-space: nowrap; font-size: 1.1rem; font-weight: 800;
    color: #fbbf24; text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    animation: scComboTextFloat 1s ease forwards;
  }

  @keyframes scComboTextFloat {
    0% { opacity: 0; transform: translateX(-50%) translateY(0) scale(0.5); }
    30% { opacity: 1; transform: translateX(-50%) translateY(-10px) scale(1.2); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-40px) scale(1); }
  }

  /* ===== RIPPLE EFFECTS ===== */
  .sc-ripple {
    position: absolute; width: 60px; height: 20px;
    border: 2px solid rgba(125,211,252,0.4);
    border-radius: 50%; pointer-events: none;
  }

  /* ===== SURFER ===== */
  .sc-surfer {
    position: absolute; bottom: 50px;
    z-index: 30; pointer-events: none;
    transition: none;
  }

  .sc-surfboard {
    position: absolute; bottom: -8px; left: 50%;
    transform: translateX(-50%);
    width: 60px; height: 12px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%);
    border-radius: 50%;
    box-shadow: 0 3px 8px rgba(0,0,0,0.3);
  }

  .sc-surfboard::before {
    content: '';
    position: absolute; top: 2px; left: 20%; width: 60%; height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }

  .sc-surfer-body {
    font-size: 2.8rem; line-height: 1;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.4));
    position: relative; z-index: 2;
  }

  .sc-surf-spray {
    position: absolute; bottom: -4px; left: 50%;
    transform: translateX(-50%);
    width: 80px; height: 15px;
    background: radial-gradient(ellipse, rgba(255,255,255,0.3) 0%, transparent 70%);
    border-radius: 50%;
    animation: scSprayPulse 1s ease-in-out infinite;
  }

  @keyframes scSprayPulse {
    0%, 100% { opacity: 0.3; transform: translateX(-50%) scaleX(1); }
    50% { opacity: 0.6; transform: translateX(-50%) scaleX(1.2); }
  }

  .sc-surfer-celebrate .sc-surfer-body {
    animation: scCelebrate 0.5s ease-in-out 2;
  }

  @keyframes scCelebrate {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(-10deg); }
    75% { transform: translateY(-10px) rotate(10deg); }
  }

  .sc-surfer-wobble .sc-surfer-body {
    animation: scWobble 0.15s ease-in-out 4;
  }

  @keyframes scWobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-8deg); }
    75% { transform: rotate(8deg); }
  }

  .sc-surfer-wobble .sc-surfboard {
    animation: scBoardWobble 0.15s ease-in-out 4;
  }

  @keyframes scBoardWobble {
    0%, 100% { transform: translateX(-50%) rotate(0deg); }
    25% { transform: translateX(-50%) rotate(-5deg); }
    75% { transform: translateX(-50%) rotate(5deg); }
  }

  /* ===== HINT ===== */
  .sc-hint-bubble {
    position: absolute; bottom: 110px; left: 50%; transform: translateX(-50%);
    padding: 0.6rem 1.2rem;
    background: rgba(0,0,0,0.5); backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(250,204,21,0.3);
    border-radius: 14px;
    color: #facc15; font-size: 0.85rem; white-space: nowrap;
    animation: scHintFloat 2s ease-in-out infinite;
    z-index: 40;
  }

  .sc-hint-arrow {
    text-align: center; font-size: 1.2rem; margin-bottom: -2px;
    animation: scHintArrow 1s ease-in-out infinite;
  }

  @keyframes scHintArrow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes scHintFloat {
    0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
    50% { opacity: 1; transform: translateX(-50%) translateY(-5px); }
  }

  .sc-hint-bubble p { margin: 0; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .sc-wave-btn { width: 60px; height: 60px; }
    .sc-wave-number-inner { font-size: 1.2rem; }
    .sc-surfer-body { font-size: 2.2rem; }
    .sc-surfboard { width: 50px; height: 10px; }
    .sc-header { padding: 0.4rem 0.5rem; }
    .sc-sequence-bar { padding: 0.4rem 0.5rem; gap: 0.3rem; }
    .sc-header-center { display: none; }
    .sc-intro-content { padding: 1rem; }
    .sc-instructions-card { padding: 1rem; }
    .sc-start-btn, .sc-next-btn { padding: 0.8rem 1.8rem; font-size: 1rem; }
    .sc-intro-sun { width: 60px; height: 60px; }
    .sc-intro-surfer-figure { font-size: 3rem; }
  }

  @media (max-width: 380px) {
    .sc-wave-btn { width: 52px; height: 52px; }
    .sc-wave-number-inner { font-size: 1.1rem; }
    .sc-seq-done, .sc-seq-next, .sc-seq-future {
      padding: 0.15rem 0.35rem; font-size: 0.7rem;
    }
  }
`;
