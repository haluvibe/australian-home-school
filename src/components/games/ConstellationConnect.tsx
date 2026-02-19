"use client";

import { useState, useEffect, useCallback, useRef } from 'react';

// --- Types ---

interface Star {
  id: number;
  value: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  connected: boolean;
  wrong: boolean;
  twinkleDelay: number;
}

interface ConstellationShape {
  name: string;
  displayName: string;
  starPositions: [number, number][]; // [x%, y%] for each star
}

interface Level {
  patternLabel: string;
  patternHint: string;
  sequence: number[];
  constellation: ConstellationShape;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
  life: number;
  tapped: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
}

type GameScreen = 'intro' | 'playing' | 'reveal' | 'complete';

interface ConstellationConnectProps {
  onExit?: () => void;
}

// --- Constellation Shapes ---

const CONSTELLATIONS: ConstellationShape[] = [
  {
    name: 'southern-cross',
    displayName: 'THE SOUTHERN CROSS',
    starPositions: [[50, 15], [50, 40], [50, 65], [35, 40], [65, 40]],
  },
  {
    name: 'big-dipper',
    displayName: 'THE BIG DIPPER',
    starPositions: [[20, 60], [30, 50], [42, 45], [55, 42], [62, 30], [72, 22], [82, 28]],
  },
  {
    name: 'crown',
    displayName: 'THE CROWN',
    starPositions: [[25, 50], [35, 30], [45, 20], [55, 20], [65, 30], [75, 50]],
  },
  {
    name: 'boat',
    displayName: 'THE STAR SHIP',
    starPositions: [[20, 55], [35, 55], [50, 55], [65, 55], [80, 55], [50, 30], [50, 15]],
  },
  {
    name: 'fish',
    displayName: 'THE COSMIC FISH',
    starPositions: [[20, 45], [30, 35], [45, 30], [60, 35], [70, 45], [60, 55], [45, 60], [30, 55]],
  },
  {
    name: 'orion',
    displayName: 'ORION THE HUNTER',
    starPositions: [[40, 15], [60, 15], [50, 30], [50, 45], [35, 60], [50, 60], [65, 60], [45, 75], [55, 75]],
  },
  {
    name: 'house',
    displayName: 'THE CELESTIAL HOUSE',
    starPositions: [[30, 70], [30, 40], [50, 20], [70, 40], [70, 70], [30, 70]],
  },
  {
    name: 'leo',
    displayName: 'LEO THE LION',
    starPositions: [[25, 55], [35, 35], [50, 25], [65, 30], [75, 45], [65, 60]],
  },
  {
    name: 'scorpius',
    displayName: 'SCORPIUS',
    starPositions: [[15, 30], [25, 25], [35, 30], [45, 40], [55, 50], [60, 60], [65, 68], [75, 65], [82, 55]],
  },
  {
    name: 'diamond',
    displayName: 'THE DIAMOND STAR',
    starPositions: [[50, 15], [70, 40], [50, 65], [30, 40], [50, 15]],
  },
];

// --- Level Generation ---

function generateLevels(): Level[] {
  return [
    // Level 1: Count by 2s (5 stars)
    {
      patternLabel: 'Count by 2s',
      patternHint: '2, 4, 6, 8, ?',
      sequence: [2, 4, 6, 8, 10],
      constellation: CONSTELLATIONS[0], // Southern Cross
    },
    // Level 2: Count by 5s (6 stars)
    {
      patternLabel: 'Count by 5s',
      patternHint: '5, 10, 15, 20, ?',
      sequence: [5, 10, 15, 20, 25, 30],
      constellation: CONSTELLATIONS[2], // Crown
    },
    // Level 3: Count by 10s (7 stars)
    {
      patternLabel: 'Count by 10s',
      patternHint: '10, 20, 30, 40, ?',
      sequence: [10, 20, 30, 40, 50, 60, 70],
      constellation: CONSTELLATIONS[1], // Big Dipper
    },
    // Level 4: Add 3 pattern (7 stars)
    {
      patternLabel: 'Add 3 each time',
      patternHint: '3, 6, 9, 12, ?',
      sequence: [3, 6, 9, 12, 15, 18, 21],
      constellation: CONSTELLATIONS[3], // Boat
    },
    // Level 5: Count by 2s from 1 (odd numbers) (8 stars)
    {
      patternLabel: 'Odd numbers',
      patternHint: '1, 3, 5, 7, ?',
      sequence: [1, 3, 5, 7, 9, 11, 13, 15],
      constellation: CONSTELLATIONS[4], // Fish
    },
    // Level 6: Count down by 5s (9 stars)
    {
      patternLabel: 'Count down by 5',
      patternHint: '50, 45, 40, 35, ?',
      sequence: [50, 45, 40, 35, 30, 25, 20, 15, 10],
      constellation: CONSTELLATIONS[5], // Orion
    },
    // Level 7: Even numbers from 10 (6 stars)
    {
      patternLabel: 'Even numbers from 10',
      patternHint: '10, 12, 14, 16, ?',
      sequence: [10, 12, 14, 16, 18, 20],
      constellation: CONSTELLATIONS[7], // Leo
    },
    // Level 8: Count by 4s (7 stars)
    {
      patternLabel: 'Count by 4s',
      patternHint: '4, 8, 12, 16, ?',
      sequence: [4, 8, 12, 16, 20, 24, 28],
      constellation: CONSTELLATIONS[1], // Big Dipper
    },
    // Level 9: Count down by 10 (9 stars)
    {
      patternLabel: 'Count down by 10',
      patternHint: '90, 80, 70, 60, ?',
      sequence: [90, 80, 70, 60, 50, 40, 30, 20, 10],
      constellation: CONSTELLATIONS[8], // Scorpius
    },
    // Level 10: Count by 3s from 2 (8 stars)
    {
      patternLabel: 'Start at 2, add 3',
      patternHint: '2, 5, 8, 11, ?',
      sequence: [2, 5, 8, 11, 14, 17, 20, 23],
      constellation: CONSTELLATIONS[4], // Fish
    },
  ];
}

const LEVELS = generateLevels();

// --- Component ---

export default function ConstellationConnect({ onExit }: ConstellationConnectProps = {}) {
  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [stars, setStars] = useState<Star[]>([]);
  const [nextIndex, setNextIndex] = useState<number>(0); // which star in sequence to connect next
  const [connections, setConnections] = useState<[number, number][][]>([]); // pairs of [x,y] for lines
  const [comboCount, setComboCount] = useState<number>(0);
  const [maxCombo, setMaxCombo] = useState<number>(0);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showAurora, setShowAurora] = useState<boolean>(false);
  const [wrongStarId, setWrongStarId] = useState<number | null>(null);
  const [revealPhase, setRevealPhase] = useState<number>(0); // 0=lines glow, 1=name, 2=done
  const [introPhase, setIntroPhase] = useState<number>(0);
  const [bgStars, setBgStars] = useState<{x: number; y: number; size: number; delay: number; duration: number}[]>([]);
  const [nebulaPatches, setNebulaPatches] = useState<{x: number; y: number; size: number; hue: number; delay: number}[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const shootingStarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const particleIdRef = useRef<number>(0);

  // Generate background stars and nebulae once
  useEffect(() => {
    const newBgStars = [];
    for (let i = 0; i < 120; i++) {
      newBgStars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      });
    }
    setBgStars(newBgStars);

    const newNebulae = [];
    for (let i = 0; i < 4; i++) {
      newNebulae.push({
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 150 + Math.random() * 200,
        hue: Math.random() * 360,
        delay: Math.random() * 10,
      });
    }
    setNebulaPatches(newNebulae);
  }, []);

  // Intro animation
  useEffect(() => {
    if (gameState !== 'intro') return;
    setIntroPhase(0);
    const t1 = setTimeout(() => setIntroPhase(1), 500);
    const t2 = setTimeout(() => setIntroPhase(2), 1200);
    const t3 = setTimeout(() => setIntroPhase(3), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [gameState]);

  const currentLevel = LEVELS[level] || LEVELS[LEVELS.length - 1];

  // Shuffle star positions so the numbered stars aren't in order spatially
  const shufflePositions = useCallback((positions: [number, number][]): [number, number][] => {
    const shuffled = [...positions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const initLevel = useCallback((lvl: number) => {
    const levelData = LEVELS[lvl] || LEVELS[LEVELS.length - 1];
    const seq = levelData.sequence;
    const constellation = levelData.constellation;

    // Get positions, pad or trim to match sequence length
    let positions = [...constellation.starPositions];
    while (positions.length < seq.length) {
      positions.push([20 + Math.random() * 60, 20 + Math.random() * 60]);
    }
    positions = positions.slice(0, seq.length);

    // Shuffle positions so the number ordering doesn't match spatial layout
    const shuffledPositions = shufflePositions(positions);

    const newStars: Star[] = seq.map((value, i) => ({
      id: i,
      value,
      x: shuffledPositions[i][0],
      y: shuffledPositions[i][1],
      connected: false,
      wrong: false,
      twinkleDelay: Math.random() * 3,
    }));

    setStars(newStars);
    setNextIndex(0);
    setConnections([]);
    setComboCount(0);
    setShowAurora(false);
    setWrongStarId(null);
    setRevealPhase(0);
    setParticles([]);
    setGameState('playing');
  }, [shufflePositions]);

  // Spawn shooting stars periodically
  useEffect(() => {
    if (gameState !== 'playing') return;

    const spawnShootingStar = () => {
      const delay = 4000 + Math.random() * 8000;
      shootingStarTimerRef.current = setTimeout(() => {
        const fromLeft = Math.random() > 0.5;
        setShootingStars(prev => [...prev, {
          id: Date.now(),
          x: fromLeft ? -5 : 105,
          y: 5 + Math.random() * 40,
          angle: fromLeft ? 15 + Math.random() * 30 : 150 + Math.random() * 30,
          speed: 0.8 + Math.random() * 0.5,
          life: 100,
          tapped: false,
        }]);
        spawnShootingStar();
      }, delay);
    };

    spawnShootingStar();
    return () => {
      if (shootingStarTimerRef.current) clearTimeout(shootingStarTimerRef.current);
    };
  }, [gameState]);

  // Animation loop for shooting stars and particles
  useEffect(() => {
    if (gameState !== 'playing' && gameState !== 'reveal') return;

    const animate = () => {
      setShootingStars(prev => {
        return prev
          .map(s => {
            if (s.tapped) return { ...s, life: s.life - 5 };
            const rad = (s.angle * Math.PI) / 180;
            return {
              ...s,
              x: s.x + Math.cos(rad) * s.speed,
              y: s.y + Math.sin(rad) * s.speed,
              life: s.life - 0.5,
            };
          })
          .filter(s => s.life > 0 && s.x > -20 && s.x < 120 && s.y < 120);
      });

      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.02,
            life: p.life - 1,
          }))
          .filter(p => p.life > 0)
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameState]);

  const spawnParticles = useCallback((x: number, y: number, count: number, hue: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 0.5 + Math.random() * 1.5;
      newParticles.push({
        id: ++particleIdRef.current,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 40 + Math.random() * 30,
        maxLife: 70,
        hue,
        size: 2 + Math.random() * 3,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const handleStarTap = useCallback((star: Star) => {
    if (gameState !== 'playing') return;
    if (star.connected) return;

    const seq = currentLevel.sequence;
    const expectedValue = seq[nextIndex];

    if (star.value === expectedValue) {
      // Correct!
      const newCombo = comboCount + 1;
      setComboCount(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      const pointsBase = 100;
      const comboMultiplier = Math.min(newCombo, 5);
      setScore(prev => prev + pointsBase * comboMultiplier);

      // Spawn particles at star position
      spawnParticles(star.x, star.y, 12, 50);

      // Build connection line
      if (nextIndex > 0) {
        const prevStar = stars.find(s => s.value === seq[nextIndex - 1]);
        if (prevStar) {
          setConnections(prev => [...prev, [[prevStar.x, prevStar.y], [star.x, star.y]]]);
        }
      }

      setStars(prev => prev.map(s => s.id === star.id ? { ...s, connected: true } : s));
      const newNextIndex = nextIndex + 1;
      setNextIndex(newNextIndex);

      // Check if level complete
      if (newNextIndex >= seq.length) {
        // Reveal phase!
        setGameState('reveal');
        setShowAurora(true);

        // Phase timings
        setTimeout(() => setRevealPhase(1), 800);
        setTimeout(() => setRevealPhase(2), 2000);
        setTimeout(() => {
          setGameState('complete');
        }, 4000);
      }
    } else {
      // Wrong!
      setComboCount(0);
      setWrongStarId(star.id);
      setStars(prev => prev.map(s => s.id === star.id ? { ...s, wrong: true } : s));
      setTimeout(() => {
        setWrongStarId(null);
        setStars(prev => prev.map(s => s.id === star.id ? { ...s, wrong: false } : s));
      }, 600);
    }
  }, [gameState, currentLevel, nextIndex, comboCount, maxCombo, stars, spawnParticles]);

  const handleShootingStarTap = useCallback((id: number) => {
    setShootingStars(prev => prev.map(s =>
      s.id === id && !s.tapped ? { ...s, tapped: true } : s
    ));
    setScore(prev => prev + 50);
    const star = shootingStars.find(s => s.id === id);
    if (star) {
      spawnParticles(star.x, star.y, 8, 30);
    }
  }, [shootingStars, spawnParticles]);

  const startGame = () => {
    setLevel(0);
    setScore(0);
    setMaxCombo(0);
    initLevel(0);
  };

  const nextLevelHandler = () => {
    const newLevel = Math.min(level + 1, LEVELS.length - 1);
    setLevel(newLevel);
    initLevel(newLevel);
  };

  const connectedCount = stars.filter(s => s.connected).length;
  const totalStars = stars.length;

  // --- Render ---

  if (gameState === 'intro') {
    return (
      <div className="constellation-game">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="sky-bg">
            {bgStars.map((s, i) => (
              <div key={i} className="bg-star" style={{
                left: `${s.x}%`, top: `${s.y}%`,
                width: s.size, height: s.size,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }} />
            ))}
            {nebulaPatches.map((n, i) => (
              <div key={i} className="nebula" style={{
                left: `${n.x}%`, top: `${n.y}%`,
                width: n.size, height: n.size,
                background: `radial-gradient(circle, hsla(${n.hue}, 70%, 50%, 0.08) 0%, transparent 70%)`,
                animationDelay: `${n.delay}s`,
              }} />
            ))}
          </div>

          <div className="moon" />

          <div className={`intro-content ${introPhase >= 1 ? 'visible' : ''}`}>
            <div className={`telescope-icon ${introPhase >= 2 ? 'zoomed' : ''}`}>
              <div className="telescope-body" />
              <div className="telescope-lens" />
              <div className="telescope-stand" />
            </div>

            <h1 className={`game-title ${introPhase >= 2 ? 'visible' : ''}`}>
              Constellation Connect
            </h1>
            <p className={`game-tagline ${introPhase >= 2 ? 'visible' : ''}`}>
              Connect the stars, reveal the sky!
            </p>

            <div className={`intro-instructions ${introPhase >= 3 ? 'visible' : ''}`}>
              <h3>How to Play</h3>
              <div className="intro-instruction">
                <div className="instruction-visual">
                  <span className="mini-star">2</span>
                  <span className="intro-arrow">→</span>
                  <span className="mini-star">4</span>
                  <span className="intro-arrow">→</span>
                  <span className="mini-star glow">6</span>
                </div>
                <p>Follow the <strong>number pattern</strong> - tap stars in order!</p>
              </div>
              <div className="intro-instruction">
                <div className="instruction-visual">
                  <span className="mini-star connected">✦</span>
                  <span className="glow-line" />
                  <span className="mini-star connected">✦</span>
                </div>
                <p>Draw <strong>glowing lines</strong> between the stars!</p>
              </div>
              <div className="intro-instruction">
                <div className="instruction-visual">
                  <span className="constellation-preview">✨⭐✨</span>
                </div>
                <p>Reveal beautiful <strong>constellations</strong> in the sky!</p>
              </div>
            </div>

            <button className={`start-btn ${introPhase >= 3 ? 'visible' : ''}`} onClick={startGame}>
              <span className="btn-star">⭐</span>
              Begin Stargazing
              <span className="btn-star">🌟</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'complete') {
    const perfectRun = maxCombo >= totalStars;
    return (
      <div className="constellation-game">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="sky-bg">
            {bgStars.map((s, i) => (
              <div key={i} className="bg-star" style={{
                left: `${s.x}%`, top: `${s.y}%`,
                width: s.size, height: s.size,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }} />
            ))}
          </div>

          {showAurora && <div className="aurora" />}

          <div className="complete-content">
            <h1 className="complete-title">
              {perfectRun ? '🌟 Perfect Discovery! 🌟' : '✨ Constellation Found! ✨'}
            </h1>

            <div className="discovered-constellation">
              <svg className="constellation-svg complete-constellation" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="completeLine">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
                  </filter>
                  <filter id="completeGlow">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                  </filter>
                </defs>
                {connections.map((conn, i) => (
                  <g key={i}>
                    <line x1={conn[0][0]} y1={conn[0][1]} x2={conn[1][0]} y2={conn[1][1]}
                      stroke="rgba(255,215,0,0.3)" strokeWidth="2" filter="url(#completeGlow)" />
                    <line x1={conn[0][0]} y1={conn[0][1]} x2={conn[1][0]} y2={conn[1][1]}
                      stroke="#FFD700" strokeWidth="0.6" filter="url(#completeLine)" />
                  </g>
                ))}
                {stars.map(star => (
                  <circle key={star.id} cx={star.x} cy={star.y} r="2.5"
                    fill="#FFD700" filter="url(#completeGlow)" />
                ))}
              </svg>
              <p className="constellation-name">{currentLevel.constellation.displayName}</p>
            </div>

            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Best Combo</span>
                <span className="score-value">{maxCombo}x</span>
              </div>
              <div className="score-item">
                <span className="score-label">Level</span>
                <span className="score-value">{level + 1}</span>
              </div>
            </div>

            <div className="complete-buttons">
              {level < LEVELS.length - 1 && (
                <button className="next-btn" onClick={nextLevelHandler}>
                  Level {level + 2} →
                </button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Playing & Reveal states
  return (
    <div className="constellation-game">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Sky background */}
        <div className="sky-bg">
          {bgStars.map((s, i) => (
            <div key={i} className="bg-star" style={{
              left: `${s.x}%`, top: `${s.y}%`,
              width: s.size, height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }} />
          ))}
          {nebulaPatches.map((n, i) => (
            <div key={i} className="nebula" style={{
              left: `${n.x}%`, top: `${n.y}%`,
              width: n.size, height: n.size,
              background: `radial-gradient(circle, hsla(${n.hue}, 70%, 50%, 0.08) 0%, transparent 70%)`,
              animationDelay: `${n.delay}s`,
            }} />
          ))}
        </div>

        {/* Moon */}
        <div className="moon" />

        {/* Aurora (level complete) */}
        {showAurora && <div className="aurora" />}

        {/* Game Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level + 1}</div>
          </div>
          <div className="header-center">
            <div className="star-progress">
              <span className="progress-icon">⭐</span>
              <span className="progress-text">{connectedCount} / {totalStars}</span>
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">✨</span>
              <span>{score}</span>
            </div>
            {comboCount > 1 && (
              <div className="combo-badge">
                {comboCount}x
              </div>
            )}
          </div>
        </div>

        {/* Pattern Hint */}
        <div className={`pattern-hint ${gameState === 'reveal' ? 'fading' : ''}`}>
          <span className="pattern-label">{currentLevel.patternLabel}</span>
          <span className="pattern-sequence">{currentLevel.patternHint}</span>
        </div>

        {/* SVG Connection Lines */}
        <svg className="constellation-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="lineGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
            </filter>
            <filter id="lineGlowBright">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
            </filter>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#88ccff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="lineGradGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>

          {connections.map((conn, i) => {
            const isReveal = gameState === 'reveal';
            return (
              <g key={i} className={isReveal ? 'connection-reveal' : 'connection-draw'}>
                {/* Outer glow */}
                <line
                  x1={conn[0][0]} y1={conn[0][1]}
                  x2={conn[1][0]} y2={conn[1][1]}
                  stroke={isReveal ? 'rgba(255,215,0,0.4)' : 'rgba(136,204,255,0.3)'}
                  strokeWidth={isReveal ? '2' : '1.5'}
                  filter="url(#lineGlowBright)"
                  className="line-outer"
                />
                {/* Core line */}
                <line
                  x1={conn[0][0]} y1={conn[0][1]}
                  x2={conn[1][0]} y2={conn[1][1]}
                  stroke={isReveal ? 'url(#lineGradGold)' : 'url(#lineGrad)'}
                  strokeWidth={isReveal ? '0.5' : '0.35'}
                  filter="url(#lineGlow)"
                  className="line-core"
                />
              </g>
            );
          })}
        </svg>

        {/* Stars */}
        <div className="stars-layer">
          {stars.map(star => {
            const isNext = !star.connected && star.value === currentLevel.sequence[nextIndex];
            return (
              <div
                key={star.id}
                className={`game-star ${star.connected ? 'connected' : ''} ${star.wrong ? 'wrong' : ''} ${isNext ? 'hint-pulse' : ''} ${gameState === 'reveal' ? 'reveal-glow' : ''}`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  animationDelay: `${star.twinkleDelay}s`,
                }}
                onClick={() => handleStarTap(star)}
                onTouchEnd={(e) => { e.preventDefault(); handleStarTap(star); }}
              >
                <div className="star-glow-outer" />
                <div className="star-glow-inner" />
                <div className="star-core" />
                <span className="star-number">{star.value}</span>
                {star.connected && <div className="star-connected-ring" />}
              </div>
            );
          })}
        </div>

        {/* Shooting Stars */}
        {shootingStars.map(ss => (
          <div
            key={ss.id}
            className={`shooting-star ${ss.tapped ? 'tapped' : ''}`}
            style={{
              left: `${ss.x}%`,
              top: `${ss.y}%`,
              transform: `rotate(${ss.angle}deg)`,
              opacity: ss.tapped ? 0 : Math.min(1, ss.life / 20),
            }}
            onClick={() => handleShootingStarTap(ss.id)}
            onTouchEnd={(e) => { e.preventDefault(); handleShootingStarTap(ss.id); }}
          >
            <div className="shooting-star-head" />
            <div className="shooting-star-tail" />
            {ss.tapped && <span className="shooting-bonus">+50</span>}
          </div>
        ))}

        {/* Particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.life / p.maxLife,
              background: `hsl(${p.hue}, 100%, 75%)`,
            }}
          />
        ))}

        {/* Reveal overlay */}
        {gameState === 'reveal' && (
          <div className="reveal-overlay">
            {revealPhase >= 1 && (
              <div className="reveal-name">
                {currentLevel.constellation.displayName}
              </div>
            )}
            {revealPhase >= 2 && (
              <div className="reveal-sparkles">
                {[...Array(12)].map((_, i) => (
                  <span key={i} className="reveal-sparkle" style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}>✦</span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Wrong star feedback */}
        {wrongStarId !== null && (
          <div className="wrong-feedback">Not this one!</div>
        )}

        {/* Telescope decoration */}
        <div className="telescope">
          <div className="telescope-base" />
          <div className="telescope-tube" />
          <div className="telescope-lens-glow" />
        </div>

        {/* Bottom bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-pattern">🔢 {currentLevel.patternLabel}</span>
            <span className="hint-tap">👆 Tap stars in pattern order</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Styles ---

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .constellation-game {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #030014 0%, #0a0025 30%, #0d0030 60%, #050018 100%);
  }

  /* ====== SKY BACKGROUND ====== */

  .sky-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  }

  .bg-star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle var(--dur, 3s) ease-in-out infinite;
    animation-duration: inherit;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.3); }
  }

  .nebula {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: nebulaDrift 20s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes nebulaDrift {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
    50% { transform: translate(-48%, -52%) scale(1.1); opacity: 1; }
  }

  /* ====== MOON ====== */

  .moon {
    position: absolute;
    top: 6%;
    right: 8%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #f5f0d0 0%, #e8dfa0 40%, #c9b870 100%);
    box-shadow:
      0 0 20px rgba(245, 240, 208, 0.3),
      0 0 60px rgba(245, 240, 208, 0.15),
      inset -8px -4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1;
    animation: moonGlow 5s ease-in-out infinite;
  }

  .moon::before {
    content: '';
    position: absolute;
    top: 12px; left: 10px;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.08);
    box-shadow:
      15px 5px 0 4px rgba(0, 0, 0, 0.06),
      5px 18px 0 3px rgba(0, 0, 0, 0.07);
  }

  @keyframes moonGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(245, 240, 208, 0.3), 0 0 60px rgba(245, 240, 208, 0.15), inset -8px -4px 12px rgba(0, 0, 0, 0.15); }
    50% { box-shadow: 0 0 30px rgba(245, 240, 208, 0.4), 0 0 80px rgba(245, 240, 208, 0.2), inset -8px -4px 12px rgba(0, 0, 0, 0.15); }
  }

  /* ====== AURORA ====== */

  .aurora {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(
      180deg,
      rgba(0, 255, 128, 0.08) 0%,
      rgba(0, 200, 255, 0.06) 30%,
      rgba(128, 0, 255, 0.04) 60%,
      transparent 100%
    );
    animation: auroraWave 3s ease-in-out infinite;
    pointer-events: none;
    z-index: 2;
  }

  @keyframes auroraWave {
    0% { transform: scaleY(1) translateX(0); opacity: 0.5; }
    33% { transform: scaleY(1.3) translateX(2%); opacity: 0.8; }
    66% { transform: scaleY(0.9) translateX(-2%); opacity: 0.6; }
    100% { transform: scaleY(1) translateX(0); opacity: 0.5; }
  }

  /* ====== INTRO SCREEN ====== */

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
    padding: 2rem;
    max-width: 500px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
  }

  .intro-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .telescope-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
    transform: scale(0.8);
    transition: all 1s ease;
  }

  .telescope-icon.zoomed {
    transform: scale(1);
  }

  .telescope-body {
    width: 60px;
    height: 14px;
    background: linear-gradient(180deg, #cd7f32, #a0522d);
    border-radius: 4px;
    transform: rotate(-30deg);
    box-shadow: 0 2px 8px rgba(205, 127, 50, 0.4);
  }

  .telescope-lens {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 40%, #88ccff, #4488cc);
    box-shadow: 0 0 15px rgba(136, 204, 255, 0.6);
    margin-top: -8px;
    margin-left: -32px;
    animation: lensPulse 2s ease-in-out infinite;
  }

  @keyframes lensPulse {
    0%, 100% { box-shadow: 0 0 15px rgba(136, 204, 255, 0.6); }
    50% { box-shadow: 0 0 25px rgba(136, 204, 255, 0.9); }
  }

  .telescope-stand {
    width: 4px;
    height: 30px;
    background: #8b4513;
    margin-top: -4px;
  }

  .game-title {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #88ccff, #c8a2ff, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }

  .game-title.visible { opacity: 1; transform: translateY(0); }

  .game-tagline {
    color: #7a8aac;
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease 0.2s;
  }

  .game-tagline.visible { opacity: 1; transform: translateY(0); }

  .intro-instructions {
    background: rgba(255, 255, 255, 0.03);
    border: 2px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }

  .intro-instructions.visible { opacity: 1; transform: translateY(0); }

  .intro-instructions h3 {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  .intro-instruction {
    margin-bottom: 1.2rem;
  }

  .intro-instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.4rem;
  }

  .mini-star {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff, #88ccff, #4466aa);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: #0a0025;
    font-size: 0.9rem;
    box-shadow: 0 0 10px rgba(136, 204, 255, 0.5);
  }

  .mini-star.glow {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
    background: radial-gradient(circle at 35% 35%, #ffffff, #FFD700, #cc8800);
  }

  .mini-star.connected {
    background: radial-gradient(circle at 35% 35%, #FFD700, #cc8800);
    color: white;
    font-size: 1.2rem;
  }

  .intro-arrow { color: #4a5568; font-size: 1.2rem; }

  .glow-line {
    display: inline-block;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #88ccff, #FFD700);
    box-shadow: 0 0 8px rgba(136, 204, 255, 0.5);
    border-radius: 2px;
  }

  .constellation-preview { font-size: 1.8rem; }

  .intro-instruction p { color: #b0bec5; font-size: 0.9rem; }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    background: linear-gradient(135deg, #1a4a8a, #6b3fa0);
    border: 2px solid rgba(136, 204, 255, 0.3);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(107, 63, 160, 0.4);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease;
  }

  .start-btn.visible, .next-btn { opacity: 1; transform: translateY(0); }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(107, 63, 160, 0.6);
    border-color: rgba(136, 204, 255, 0.6);
  }

  .btn-star { font-size: 1.3rem; }

  /* ====== GAME SCREEN ====== */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 50;
    position: relative;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.6rem; }

  .back-btn {
    width: 38px;
    height: 38px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255, 255, 255, 0.15); }

  .level-badge {
    padding: 0.4rem 0.9rem;
    background: linear-gradient(135deg, #1a4a8a, #6b3fa0);
    border-radius: 20px;
    font-weight: 700;
    color: white;
    font-size: 0.9rem;
  }

  .star-progress {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
  }

  .progress-icon { font-size: 1rem; }
  .progress-text { color: white; font-weight: 600; font-size: 0.9rem; }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    background: rgba(255, 215, 0, 0.15);
    border-radius: 20px;
    color: #FFD700;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  .combo-badge {
    padding: 0.3rem 0.7rem;
    background: linear-gradient(135deg, #FF6B00, #FF2D00);
    border-radius: 14px;
    color: white;
    font-weight: 800;
    font-size: 0.85rem;
    animation: comboPulse 0.5s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* ====== PATTERN HINT ====== */

  .pattern-hint {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.6rem 1rem;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    transition: opacity 0.5s ease;
  }

  .pattern-hint.fading { opacity: 0.3; }

  .pattern-label {
    color: #88ccff;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .pattern-sequence {
    color: #FFD700;
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  /* ====== CONSTELLATION SVG ====== */

  .constellation-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    pointer-events: none;
  }

  .connection-draw {
    animation: lineDrawIn 0.4s ease forwards;
  }

  @keyframes lineDrawIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .connection-reveal .line-outer {
    animation: revealGlow 1.5s ease-in-out infinite;
  }

  @keyframes revealGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
  }

  /* ====== STARS ====== */

  .stars-layer {
    position: absolute;
    inset: 0;
    z-index: 10;
  }

  .game-star {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 62px;
    height: 62px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 15;
    transition: transform 0.2s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .game-star:hover {
    transform: translate(-50%, -50%) scale(1.15);
    z-index: 20;
  }

  .star-glow-outer {
    position: absolute;
    inset: -15px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(136, 204, 255, 0.15) 0%, transparent 70%);
    animation: twinkle 3s ease-in-out infinite;
  }

  .star-glow-inner {
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 220, 255, 0.25) 0%, transparent 70%);
  }

  .star-core {
    position: absolute;
    inset: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #c8e0ff 40%, #6699cc 80%, #335588 100%);
    box-shadow:
      0 0 12px rgba(136, 204, 255, 0.6),
      0 0 25px rgba(136, 204, 255, 0.3);
  }

  .star-number {
    position: relative;
    z-index: 5;
    font-size: 1.2rem;
    font-weight: 900;
    color: #0a0025;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
  }

  /* Connected star */
  .game-star.connected .star-core {
    background: radial-gradient(circle at 35% 35%, #FFD700 0%, #FFA500 50%, #cc8800 100%);
    box-shadow:
      0 0 20px rgba(255, 215, 0, 0.7),
      0 0 40px rgba(255, 215, 0, 0.3);
  }

  .game-star.connected .star-glow-outer {
    background: radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%);
  }

  .game-star.connected .star-number {
    color: #3a1f00;
  }

  .star-connected-ring {
    position: absolute;
    inset: -4px;
    border: 2px solid rgba(255, 215, 0, 0.6);
    border-radius: 50%;
    animation: connectedRing 1.5s ease-in-out infinite;
  }

  @keyframes connectedRing {
    0%, 100% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.2; }
  }

  /* Wrong star */
  .game-star.wrong {
    animation: starShake 0.4s ease;
  }

  .game-star.wrong .star-core {
    background: radial-gradient(circle at 35% 35%, #ff6666, #cc3333, #881111);
    box-shadow: 0 0 15px rgba(255, 60, 60, 0.6);
  }

  @keyframes starShake {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    20% { transform: translate(-50%, -50%) translateX(-6px); }
    40% { transform: translate(-50%, -50%) translateX(6px); }
    60% { transform: translate(-50%, -50%) translateX(-4px); }
    80% { transform: translate(-50%, -50%) translateX(4px); }
  }

  /* Hint pulse for next expected star */
  .game-star.hint-pulse .star-glow-outer {
    animation: hintPulse 1.5s ease-in-out infinite;
  }

  @keyframes hintPulse {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.5); opacity: 0.8; }
  }

  /* Reveal glow */
  .game-star.reveal-glow .star-core {
    background: radial-gradient(circle at 35% 35%, #FFD700 0%, #FFA500 50%, #cc8800 100%);
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4);
    animation: revealStarPulse 1s ease-in-out infinite;
  }

  @keyframes revealStarPulse {
    0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.4); }
    50% { box-shadow: 0 0 40px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 215, 0, 0.6); }
  }

  /* ====== SHOOTING STARS ====== */

  .shooting-star {
    position: absolute;
    z-index: 8;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .shooting-star-head {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(200, 220, 255, 0.5);
  }

  .shooting-star-tail {
    position: absolute;
    top: 2px;
    right: 8px;
    width: 40px;
    height: 4px;
    background: linear-gradient(90deg, transparent, rgba(200, 220, 255, 0.4), rgba(255, 255, 255, 0.7));
    border-radius: 2px;
    transform-origin: right center;
  }

  .shooting-star.tapped {
    animation: shootingBurst 0.3s ease forwards;
  }

  @keyframes shootingBurst {
    0% { transform: scale(1); }
    50% { transform: scale(2); }
    100% { transform: scale(0); opacity: 0; }
  }

  .shooting-bonus {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    color: #FFD700;
    font-weight: 900;
    font-size: 1rem;
    animation: bonusFloat 0.6s ease forwards;
    white-space: nowrap;
  }

  @keyframes bonusFloat {
    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
    100% { transform: translateX(-50%) translateY(-30px); opacity: 0; }
  }

  /* ====== PARTICLES ====== */

  .particle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    z-index: 25;
    transform: translate(-50%, -50%);
  }

  /* ====== REVEAL OVERLAY ====== */

  .reveal-overlay {
    position: absolute;
    inset: 0;
    z-index: 30;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reveal-name {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight: 900;
    color: #FFD700;
    text-shadow:
      0 0 20px rgba(255, 215, 0, 0.5),
      0 0 40px rgba(255, 215, 0, 0.3);
    animation: revealNameIn 1s ease forwards;
    letter-spacing: 3px;
    text-align: center;
    padding: 0 1rem;
  }

  @keyframes revealNameIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.15); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }

  .reveal-sparkles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .reveal-sparkle {
    position: absolute;
    font-size: 1.5rem;
    animation: sparkleReveal 1s ease forwards;
    color: #FFD700;
  }

  @keyframes sparkleReveal {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
    100% { transform: scale(1) rotate(360deg); opacity: 0.6; }
  }

  /* ====== WRONG FEEDBACK ====== */

  .wrong-feedback {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1.2rem;
    background: rgba(255, 60, 60, 0.2);
    border: 1px solid rgba(255, 60, 60, 0.4);
    border-radius: 20px;
    color: #ff6b6b;
    font-weight: 700;
    font-size: 0.9rem;
    z-index: 40;
    animation: wrongFade 0.6s ease forwards;
  }

  @keyframes wrongFade {
    0% { transform: translateX(-50%) scale(0.8); opacity: 0; }
    30% { transform: translateX(-50%) scale(1.05); opacity: 1; }
    100% { transform: translateX(-50%) scale(1); opacity: 0; }
  }

  /* ====== TELESCOPE DECORATION ====== */

  .telescope {
    position: absolute;
    bottom: 40px;
    right: 20px;
    z-index: 3;
    pointer-events: none;
  }

  .telescope-base {
    width: 20px;
    height: 8px;
    background: #5a3a1a;
    border-radius: 2px;
    margin: 0 auto;
  }

  .telescope-tube {
    width: 40px;
    height: 10px;
    background: linear-gradient(180deg, #cd7f32, #a0522d);
    border-radius: 3px;
    transform: rotate(-25deg);
    transform-origin: right bottom;
    margin-bottom: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }

  .telescope-lens-glow {
    position: absolute;
    top: -6px;
    left: -8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(136, 204, 255, 0.4), transparent);
    animation: lensPulse 2s ease-in-out infinite;
  }

  /* ====== BOTTOM BAR ====== */

  .bottom-bar {
    position: relative;
    z-index: 20;
    padding: 0.6rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    text-align: center;
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 0.8rem;
  }

  .hint-pattern { color: #88ccff; }
  .hint-tap { color: #7a8aac; }

  /* ====== COMPLETE SCREEN ====== */

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
    padding: 2rem;
    max-width: 500px;
    animation: completeSlideIn 0.8s ease forwards;
  }

  @keyframes completeSlideIn {
    0% { transform: translateY(40px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .complete-title {
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    color: white;
    margin-bottom: 1.5rem;
  }

  .discovered-constellation {
    margin-bottom: 1.5rem;
  }

  .complete-constellation {
    width: 160px;
    height: 160px;
    margin: 0 auto 0.5rem;
    display: block;
  }

  .constellation-name {
    color: #FFD700;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
    animation: nameGlow 2s ease-in-out infinite;
  }

  @keyframes nameGlow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.4); }
    50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8); }
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .score-label { font-size: 0.8rem; color: #7a8aac; margin-bottom: 0.2rem; }
  .score-value { font-size: 1.8rem; font-weight: 900; color: white; }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #7a8aac;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(255, 255, 255, 0.35); color: white; }

  /* ====== RESPONSIVE ====== */

  @media (max-width: 600px) {
    .game-star {
      width: 54px;
      height: 54px;
    }

    .star-number { font-size: 1rem; }

    .pattern-hint { flex-direction: column; gap: 0.2rem; padding: 0.4rem; }

    .hint-text { flex-direction: column; gap: 0.2rem; }

    .header-center { display: none; }

    .moon { width: 35px; height: 35px; }

    .telescope { display: none; }

    .score-card { gap: 1rem; }
    .score-value { font-size: 1.5rem; }
  }

  @media (max-width: 400px) {
    .game-star {
      width: 48px;
      height: 48px;
    }

    .star-core { inset: 6px; }
    .star-number { font-size: 0.9rem; }
  }
`;
