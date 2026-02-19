"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface SightWordSprintProps {
  onExit?: () => void;
}

/*
  SIGHT WORD SPRINT — Endless Runner Platformer

  A canvas-based 60fps endless runner where your character auto-runs
  through themed zones. Jump to collect correct sight words, duck under
  obstacles, and build combos for massive scores.

  Controls:
  - Space / Up Arrow: Jump
  - Down Arrow: Duck/Slide
  - Touch: Tap top half = jump, tap bottom half = slide
*/

// =============== CONSTANTS ===============
const GRAVITY = 0.65;
const JUMP_FORCE = -14;
const GROUND_Y_RATIO = 0.78;
const BASE_SPEED = 4;
const MAX_SPEED = 12;
const SPEED_INCREMENT = 0.0008;
const PLATFORM_MIN_GAP = 120;
const PLATFORM_MAX_GAP = 240;
const SLIDE_DURATION = 30;
const INVINCIBLE_DURATION = 90;
const BOSS_ZONE_INTERVAL = 10;
const BOSS_ZONE_REQUIRED = 5;

// =============== SIGHT WORDS ===============
const EASY_WORDS = ['the','a','I','is','it','in','at','to','we','go','no','my','up','on','am','an','and','can','has','had','not','got','big','but'];
const MEDIUM_WORDS = ['was','said','have','come','some','were','there','they','what','when','with','from','been','into','this','that','over','will','back','just'];
const HARD_WORDS = ['because','through','people','friend','could','would','should','again','after','before','where','their','every','many','about'];

// =============== ZONE CONFIG ===============
const ZONES = [
  { name: 'FOREST', words: EASY_WORDS, bg1: '#1a2f1a', bg2: '#0d1f0d', sky: '#1a3040', accent: '#4ade80', treeLine: '#2d5a2d', ground: '#3d6b3d', groundDark: '#2a4f2a', platformColor: '#5a3a1a', platformTop: '#6b8a3a' },
  { name: 'CITY', words: MEDIUM_WORDS, bg1: '#1a1a2f', bg2: '#0d0d1f', sky: '#1a1a40', accent: '#60a5fa', treeLine: '#3a3a6a', ground: '#4a4a5a', groundDark: '#3a3a4a', platformColor: '#5a5a6a', platformTop: '#7a7a8a' },
  { name: 'SPACE', words: HARD_WORDS, bg1: '#0a0a1a', bg2: '#050510', sky: '#080818', accent: '#c084fc', treeLine: '#2a1a3a', ground: '#2a2a4a', groundDark: '#1a1a3a', platformColor: '#3a2a5a', platformTop: '#6a4a8a' },
];

// =============== POWER-UP TYPES ===============
const POWERUP_TYPES = [
  { id: 'magnet', symbol: 'M', label: 'MAGNET', color: '#fbbf24', duration: 300 },
  { id: 'shield', symbol: 'S', label: 'SHIELD', color: '#38bdf8', duration: 0 },
  { id: 'blast', symbol: 'B', label: 'WORD BLAST', color: '#ef4444', duration: 0 },
  { id: 'speed', symbol: 'F', label: 'SPEED BOOST', color: '#4ade80', duration: 180 },
  { id: 'multiplier', symbol: '2x', label: '2x SCORE', color: '#c084fc', duration: 360 },
];

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number): number => Math.floor(rand(lo, hi + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getZoneForScore(wordsCollected: number): number {
  if (wordsCollected < 15) return 0;
  if (wordsCollected < 35) return 1;
  return 2;
}

function getDistractorWords(target: string, zone: typeof ZONES[number], count: number): string[] {
  const pool = zone.words.filter(w => w !== target);
  const shuffled = shuffle(pool);
  return shuffled.slice(0, count);
}

// AABB collision
function aabb(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number): boolean {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

// =============== MAIN COMPONENT ===============
export default function SightWordSprint({ onExit }: SightWordSprintProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const prevTimeRef = useRef(0);
  const highScoreRef = useRef(0);

  const [hud, setHud] = useState({
    score: 0, hearts: 3, streak: 0, distance: 0,
    targetWord: '', zone: 'FOREST', bossZone: false,
    bossRemaining: 0, multiplier: 1,
    shieldActive: false, magnetActive: false, speedBoost: false,
  });

  // ========== GENERATE NEXT TARGET ==========
  function pickNewTarget(g: G) {
    const zoneIdx = getZoneForScore(g.wordsCollected);
    const zone = ZONES[zoneIdx];
    g.zoneIdx = zoneIdx;
    g.targetWord = pick(zone.words);
    g.targetFlash = 30;
  }

  // ========== GENERATE PLATFORM SEGMENT ==========
  function generateSegment(g: G) {
    const W = g.W, H = g.H;
    const groundY = H * GROUND_Y_RATIO;
    const rightEdge = g.platforms.length > 0
      ? Math.max(...g.platforms.map((p: any) => p.x + p.w))
      : W;

    const segStart = rightEdge + rand(PLATFORM_MIN_GAP, PLATFORM_MAX_GAP) * (1 - g.speed * 0.02);
    const segWidth = rand(150, 350);

    // Ground platform
    g.platforms.push({
      id: nextId(),
      x: segStart,
      y: groundY,
      w: segWidth,
      h: 40,
      type: 'ground',
    });

    // Elevated platform (sometimes)
    if (Math.random() < 0.4 + g.speed * 0.02) {
      const elevW = rand(80, 180);
      const elevX = segStart + rand(0, segWidth - elevW);
      const elevY = groundY - rand(80, 150);
      g.platforms.push({
        id: nextId(),
        x: elevX,
        y: elevY,
        w: elevW,
        h: 18,
        type: 'elevated',
      });
    }

    // Floating platform (rarer)
    if (Math.random() < 0.2 + g.speed * 0.01) {
      const floatW = rand(60, 120);
      const floatX = segStart + rand(20, segWidth - floatW);
      const floatY = groundY - rand(140, 220);
      g.platforms.push({
        id: nextId(),
        x: floatX,
        y: floatY,
        w: floatW,
        h: 14,
        type: 'floating',
      });
    }

    // Place word signs on the segment
    placeWordSigns(g, segStart, segStart + segWidth, groundY);

    // Obstacles
    if (Math.random() < 0.35 + g.speed * 0.02) {
      const obsX = segStart + rand(30, segWidth - 60);
      if (Math.random() < 0.5) {
        // Spike pit (on ground level)
        g.obstacles.push({
          id: nextId(),
          x: obsX,
          y: groundY - 20,
          w: 40,
          h: 20,
          type: 'spike',
        });
      } else {
        // Low branch (must duck)
        g.obstacles.push({
          id: nextId(),
          x: obsX,
          y: groundY - 70,
          w: 60,
          h: 25,
          type: 'branch',
        });
      }
    }

    // Letter coins
    if (Math.random() < 0.5) {
      const coinCount = randInt(3, 7);
      const coinStartX = segStart + rand(20, segWidth / 2);
      for (let i = 0; i < coinCount; i++) {
        const coinY = groundY - rand(40, 160);
        g.coins.push({
          id: nextId(),
          x: coinStartX + i * 30,
          y: coinY,
          letter: String.fromCharCode(65 + randInt(0, 25)),
          collected: false,
          bobOffset: rand(0, Math.PI * 2),
        });
      }
    }

    // Power-up (rare)
    if (Math.random() < 0.08) {
      const puType = pick(POWERUP_TYPES);
      g.powerups.push({
        id: nextId(),
        x: segStart + rand(40, segWidth - 40),
        y: groundY - rand(60, 140),
        type: puType,
        collected: false,
        bobOffset: rand(0, Math.PI * 2),
      });
    }
  }

  // ========== PLACE WORD SIGNS ==========
  function placeWordSigns(g: G, segStart: number, segEnd: number, groundY: number) {
    if (!g.targetWord) return;

    const zone = ZONES[g.zoneIdx];
    const numSigns = g.bossZone ? randInt(3, 5) : randInt(2, 4);
    const hasCorrect = Math.random() < 0.6; // 60% chance this segment has the correct word

    const distractors = getDistractorWords(g.targetWord, zone, numSigns);
    const words = hasCorrect
      ? [g.targetWord, ...distractors.slice(0, numSigns - 1)]
      : distractors.slice(0, numSigns);

    const shuffledWords = shuffle(words);
    const spacing = (segEnd - segStart) / (numSigns + 1);

    for (let i = 0; i < shuffledWords.length; i++) {
      const signX = segStart + spacing * (i + 1);
      const onElevated = Math.random() < 0.3;
      const signY = onElevated
        ? groundY - rand(90, 160)
        : groundY - 50;

      g.wordSigns.push({
        id: nextId(),
        x: signX,
        y: signY,
        word: shuffledWords[i],
        isCorrect: shuffledWords[i] === g.targetWord,
        collected: false,
        wrong: false,
        wrongTimer: 0,
      });
    }
  }

  // ========== INIT GAME ==========
  const initGame = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    const cvs = canvasRef.current;
    if (!cvs) return;
    cvs.width = W;
    cvs.height = H;

    const groundY = H * GROUND_Y_RATIO;

    // Parallax layers
    const bgStars: any[] = [];
    for (let i = 0; i < 50; i++) {
      bgStars.push({ x: Math.random() * W, y: Math.random() * H * 0.7, size: 0.5 + Math.random() * 2, bright: 0.1 + Math.random() * 0.4 });
    }

    const farTrees: any[] = [];
    for (let i = 0; i < 20; i++) {
      farTrees.push({ x: i * (W / 10) + rand(-20, 20), h: rand(40, 80), w: rand(15, 30) });
    }

    const nearBushes: any[] = [];
    for (let i = 0; i < 30; i++) {
      nearBushes.push({ x: i * (W / 15) + rand(-15, 15), h: rand(20, 40), w: rand(20, 45) });
    }

    _idCounter = 0;

    // Initial ground platform spanning the screen
    const initPlatforms = [{
      id: nextId(),
      x: 0,
      y: groundY,
      w: W + 200,
      h: 40,
      type: 'ground',
    }];

    gRef.current = {
      W, H, groundY,
      bgStars, farTrees, nearBushes,
      // Player
      player: {
        x: W * 0.2,
        y: groundY - 50,
        w: 30,
        h: 50,
        vy: 0,
        grounded: false,
        jumping: false,
        sliding: false,
        slideTimer: 0,
        runFrame: 0,
        runTimer: 0,
        invTimer: 0,
        flashTimer: 0,
        trailTimer: 0,
      },
      // World
      platforms: initPlatforms,
      wordSigns: [] as any[],
      obstacles: [] as any[],
      coins: [] as any[],
      powerups: [] as any[],
      particles: [] as any[],
      texts: [] as any[],
      // Camera
      cameraX: 0,
      // Game state
      speed: BASE_SPEED,
      score: 0,
      hearts: 3,
      streak: 0,
      bestStreak: 0,
      multiplier: 1,
      distance: 0,
      wordsCollected: 0,
      zoneIdx: 0,
      targetWord: '',
      targetFlash: 0,
      // Boss zone
      bossZone: false,
      bossWordsNeeded: 0,
      bossWordsGot: 0,
      bossMistakes: 0,
      // Power-up timers
      magnetTimer: 0,
      shieldTimer: 0,
      speedBoostTimer: 0,
      multiplierTimer: 0,
      // Generation
      lastGenX: W + 200,
      genCooldown: 0,
      // Timing
      time: 0,
      hudTick: 0,
      shake: 0,
      // Combo trail
      comboTrail: [] as any[],
    };

    const g = gRef.current;
    pickNewTarget(g);

    // Generate initial segments
    for (let i = 0; i < 5; i++) {
      generateSegment(g);
    }

    setHud({
      score: 0, hearts: 3, streak: 0, distance: 0,
      targetWord: g.targetWord, zone: ZONES[0].name, bossZone: false,
      bossRemaining: 0, multiplier: 1,
      shieldActive: false, magnetActive: false, speedBoost: false,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ========== GAME LOOP ==========
  useEffect(() => {
    if (screen !== 'playing') {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    initGame();
    prevTimeRef.current = performance.now();

    const tick = (now: number) => {
      const raw = (now - prevTimeRef.current) / 16.667;
      prevTimeRef.current = now;
      const dt = Math.min(raw, 3);
      update(dt);
      draw();
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, initGame]);

  // ========== UPDATE ==========
  function update(dt: number) {
    const g = gRef.current;
    if (!g) return;
    g.time += dt;
    if (g.shake > 0) { g.shake *= 0.88; if (g.shake < 0.3) g.shake = 0; }
    if (g.targetFlash > 0) g.targetFlash -= dt;

    const k = keysRef.current;
    const p = g.player;

    // ---- speed increases over time ----
    const speedMul = g.speedBoostTimer > 0 ? 1.5 : 1;
    g.speed = Math.min(BASE_SPEED + g.distance * SPEED_INCREMENT, MAX_SPEED) * speedMul;

    // ---- camera follows player ----
    g.cameraX += g.speed * dt;
    g.distance += g.speed * dt * 0.1;

    // ---- player auto-run (x stays fixed on screen, world scrolls) ----
    // Jump
    const jumpPressed = k['ArrowUp'] || k[' '] || k['w'] || k['W'];
    if (jumpPressed && p.grounded) {
      p.vy = JUMP_FORCE;
      p.grounded = false;
      p.jumping = true;
      // Jump dust
      for (let i = 0; i < 6; i++) {
        g.particles.push({
          x: p.x + g.cameraX, y: p.y + p.h,
          vx: rand(-3, 3), vy: rand(-2, 0),
          life: 15 + rand(0, 10), maxL: 25,
          color: '#c8b89a', sz: 2 + rand(0, 3),
        });
      }
    }

    // Slide/duck
    const slidePressed = k['ArrowDown'] || k['s'] || k['S'];
    if (slidePressed && p.grounded && !p.sliding) {
      p.sliding = true;
      p.slideTimer = SLIDE_DURATION;
      p.h = 28;
      p.y += 22; // lower hitbox
    }
    if (p.sliding) {
      p.slideTimer -= dt;
      if (p.slideTimer <= 0 || !slidePressed) {
        p.sliding = false;
        p.h = 50;
        p.y -= 22;
      }
    }

    // Gravity
    if (!p.grounded) {
      p.vy += GRAVITY * dt;
      p.y += p.vy * dt;
    }

    // ---- platform collision ----
    p.grounded = false;
    const playerWorldX = p.x + g.cameraX;
    for (const plat of g.platforms) {
      // Player must be above platform and falling
      if (p.vy >= 0) {
        const px = playerWorldX;
        const py = p.y + p.h;
        const prevPy = py - p.vy * dt;
        if (px + p.w * 0.7 > plat.x && px + p.w * 0.3 < plat.x + plat.w) {
          if (prevPy <= plat.y + 2 && py >= plat.y - 2) {
            p.y = plat.y - p.h;
            p.vy = 0;
            p.grounded = true;
            p.jumping = false;
            break;
          }
        }
      }
    }

    // Fall off screen = lose heart
    if (p.y > g.H + 50) {
      hitPlayer(g);
      p.y = g.groundY - 150;
      p.vy = 0;
      // Find nearest platform ahead and teleport player above it
      const ahead = g.platforms
        .filter((pl: any) => pl.x + pl.w > g.cameraX + p.x)
        .sort((a: any, b: any) => a.x - b.x);
      if (ahead.length > 0) {
        const target = ahead[0];
        g.cameraX = target.x - p.x + 20;
        p.y = target.y - p.h - 20;
      }
    }

    // ---- invincibility timer ----
    if (p.invTimer > 0) p.invTimer -= dt;
    if (p.flashTimer > 0) p.flashTimer -= dt;

    // ---- run animation ----
    if (p.grounded && !p.sliding) {
      p.runTimer += dt * g.speed * 0.15;
      if (p.runTimer > 1) {
        p.runTimer = 0;
        p.runFrame = (p.runFrame + 1) % 4;
      }
    }

    // ---- running particles ----
    p.trailTimer += dt;
    if (p.grounded && !p.sliding && p.trailTimer > 3) {
      p.trailTimer = 0;
      g.particles.push({
        x: playerWorldX + rand(-5, 5), y: p.y + p.h,
        vx: rand(-1.5, -0.5) * g.speed * 0.3, vy: rand(-1, 0),
        life: 8 + rand(0, 5), maxL: 13,
        color: '#c8b89a', sz: 1.5 + rand(0, 2),
      });
    }

    // ---- combo trail ----
    if (g.streak >= 3) {
      if (g.time % 2 < dt) {
        g.comboTrail.push({
          x: playerWorldX + p.w / 2, y: p.y + p.h / 2,
          life: 20, maxL: 20,
          hue: (g.time * 5) % 360,
        });
      }
    }
    g.comboTrail = g.comboTrail.filter((c: any) => { c.life -= dt; return c.life > 0; });

    // ---- word sign collision ----
    for (const sign of g.wordSigns) {
      if (sign.collected || sign.wrong) continue;
      const sx = sign.x - g.cameraX;
      const sy = sign.y;
      const sw = sign.word.length * 14 + 30;
      const sh = 36;

      // Magnet effect
      if (g.magnetTimer > 0 && sign.isCorrect) {
        const dx = (p.x + p.w / 2) - sx;
        const dy = (p.y + p.h / 2) - (sy + sh / 2);
        const d = Math.hypot(dx, dy);
        if (d < 200 && d > 5) {
          sign.x -= (dx / d) * 3 * dt;
          sign.y -= (dy / d) * 3 * dt;
        }
      }

      if (aabb(p.x, p.y, p.w, p.h, sx - sw / 2, sy - sh / 2, sw, sh)) {
        sign.collected = true;
        if (sign.isCorrect) {
          collectCorrectWord(g, sign);
        } else {
          collectWrongWord(g, sign);
        }
      }
    }

    // ---- obstacle collision ----
    if (p.invTimer <= 0) {
      for (const obs of g.obstacles) {
        const ox = obs.x - g.cameraX;
        if (aabb(p.x, p.y, p.w, p.h, ox, obs.y, obs.w, obs.h)) {
          if (g.shieldTimer > 0) {
            g.shieldTimer = 0;
            // Destroy obstacle with particles
            for (let i = 0; i < 10; i++) {
              g.particles.push({
                x: obs.x, y: obs.y,
                vx: rand(-4, 4), vy: rand(-5, 1),
                life: 15 + rand(0, 10), maxL: 25,
                color: '#38bdf8', sz: 2 + rand(0, 3),
              });
            }
            g.texts.push({ x: obs.x, y: obs.y - 20, text: 'SHIELD!', color: '#38bdf8', life: 40, maxL: 40, vy: -2, sz: 16 });
            obs.x = -9999; // remove
          } else {
            hitPlayer(g);
            obs.x = -9999;
          }
        }
      }
    }

    // ---- coin collision ----
    for (const coin of g.coins) {
      if (coin.collected) continue;
      const cx = coin.x - g.cameraX;
      const cy = coin.y + Math.sin(g.time * 0.1 + coin.bobOffset) * 5;

      // Magnet attracts coins too
      if (g.magnetTimer > 0) {
        const dx = (p.x + p.w / 2) - cx;
        const dy = (p.y + p.h / 2) - cy;
        const d = Math.hypot(dx, dy);
        if (d < 180 && d > 5) {
          coin.x -= (dx / d) * 4 * dt;
          coin.y -= (dy / d) * 4 * dt;
        }
      }

      if (aabb(p.x - 5, p.y - 5, p.w + 10, p.h + 10, cx - 10, cy - 10, 20, 20)) {
        coin.collected = true;
        const pts = 5 * g.multiplier;
        g.score += pts;
        g.particles.push({
          x: coin.x, y: coin.y,
          vx: 0, vy: -2,
          life: 15, maxL: 15,
          color: '#ffd700', sz: 3,
        });
      }
    }

    // ---- power-up collision ----
    for (const pu of g.powerups) {
      if (pu.collected) continue;
      const px2 = pu.x - g.cameraX;
      const py2 = pu.y + Math.sin(g.time * 0.08 + pu.bobOffset) * 6;
      if (aabb(p.x - 5, p.y - 5, p.w + 10, p.h + 10, px2 - 15, py2 - 15, 30, 30)) {
        pu.collected = true;
        activatePowerUp(g, pu.type);
      }
    }

    // ---- power-up timers ----
    if (g.magnetTimer > 0) g.magnetTimer -= dt;
    if (g.shieldTimer > 0) g.shieldTimer -= dt;
    if (g.speedBoostTimer > 0) g.speedBoostTimer -= dt;
    if (g.multiplierTimer > 0) {
      g.multiplierTimer -= dt;
      if (g.multiplierTimer <= 0) g.multiplier = 1;
    }

    // ---- particles ----
    g.particles = g.particles.filter((p2: any) => {
      p2.x += (p2.vx || 0) * dt;
      p2.y += (p2.vy || 0) * dt;
      if (p2.vx) p2.vx *= 0.96;
      if (p2.vy) p2.vy *= 0.96;
      p2.life -= dt;
      return p2.life > 0;
    });

    // ---- text effects ----
    g.texts = g.texts.filter((t: any) => {
      t.y += (t.vy || 0) * dt;
      t.life -= dt;
      return t.life > 0;
    });

    // ---- word sign wrong flash decay ----
    for (const sign of g.wordSigns) {
      if (sign.wrong && sign.wrongTimer > 0) {
        sign.wrongTimer -= dt;
      }
    }

    // ---- cleanup off-screen objects ----
    const leftEdge = g.cameraX - 200;
    g.platforms = g.platforms.filter((p2: any) => p2.x + p2.w > leftEdge);
    g.wordSigns = g.wordSigns.filter((s: any) => s.x > leftEdge);
    g.obstacles = g.obstacles.filter((o: any) => o.x > leftEdge);
    g.coins = g.coins.filter((c: any) => c.x > leftEdge);
    g.powerups = g.powerups.filter((p2: any) => p2.x > leftEdge);

    // ---- generate new segments ----
    const rightmostPlatform = g.platforms.reduce((max: number, p2: any) => Math.max(max, p2.x + p2.w), 0);
    if (rightmostPlatform < g.cameraX + g.W + 600) {
      generateSegment(g);
    }

    // ---- parallax scroll ----
    for (const st of g.bgStars) {
      st.x -= g.speed * 0.1 * dt;
      if (st.x < -5) { st.x = g.W + 5; st.y = rand(0, g.H * 0.7); }
    }
    for (const tree of g.farTrees) {
      tree.x -= g.speed * 0.3 * dt;
      if (tree.x < -50) { tree.x = g.W + rand(0, 50); tree.h = rand(40, 80); tree.w = rand(15, 30); }
    }
    for (const bush of g.nearBushes) {
      bush.x -= g.speed * 0.6 * dt;
      if (bush.x < -60) { bush.x = g.W + rand(0, 60); bush.h = rand(20, 40); bush.w = rand(20, 45); }
    }

    // ---- boss zone check ----
    if (!g.bossZone && g.wordsCollected > 0 && g.wordsCollected % BOSS_ZONE_INTERVAL === 0 && g.wordsCollected !== g.lastBossAt) {
      g.bossZone = true;
      g.bossWordsNeeded = BOSS_ZONE_REQUIRED;
      g.bossWordsGot = 0;
      g.bossMistakes = 0;
      g.lastBossAt = g.wordsCollected;
      g.texts.push({ x: playerWorldX, y: p.y - 40, text: 'BOSS ZONE!', color: '#ffd700', life: 80, maxL: 80, vy: -1, sz: 28 });
    }

    // ---- HUD update ----
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      setHud({
        score: g.score,
        hearts: g.hearts,
        streak: g.streak,
        distance: Math.floor(g.distance),
        targetWord: g.targetWord,
        zone: ZONES[g.zoneIdx].name,
        bossZone: g.bossZone,
        bossRemaining: g.bossZone ? g.bossWordsNeeded - g.bossWordsGot : 0,
        multiplier: g.multiplier,
        shieldActive: g.shieldTimer > 0,
        magnetActive: g.magnetTimer > 0,
        speedBoost: g.speedBoostTimer > 0,
      });
    }

    // ---- game over ----
    if (g.hearts <= 0) {
      if (g.score > highScoreRef.current) highScoreRef.current = g.score;
      setScreen('gameover');
    }
  }

  // ========== COLLECT CORRECT WORD ==========
  function collectCorrectWord(g: G, sign: any) {
    const pts = (50 + g.streak * 10) * g.multiplier;
    g.score += pts;
    g.streak++;
    if (g.streak > g.bestStreak) g.bestStreak = g.streak;
    g.wordsCollected++;

    // Boss zone progress
    if (g.bossZone) {
      g.bossWordsGot++;
      if (g.bossWordsGot >= g.bossWordsNeeded) {
        const bonus = 500 * g.multiplier;
        g.score += bonus;
        g.bossZone = false;
        g.texts.push({ x: sign.x, y: sign.y - 60, text: `BOSS CLEAR! +${bonus}`, color: '#ffd700', life: 70, maxL: 70, vy: -1.5, sz: 24 });
      }
    }

    // Particles
    for (let i = 0; i < 15; i++) {
      g.particles.push({
        x: sign.x + rand(-15, 15), y: sign.y + rand(-10, 10),
        vx: rand(-4, 4), vy: rand(-5, 1),
        life: 18 + rand(0, 12), maxL: 30,
        color: ZONES[g.zoneIdx].accent, sz: 2 + rand(0, 4),
      });
    }

    g.texts.push({ x: sign.x, y: sign.y - 30, text: `+${pts}`, color: '#ffd700', life: 50, maxL: 50, vy: -2, sz: 18 });
    if (g.streak > 2) {
      g.texts.push({ x: sign.x, y: sign.y - 50, text: `${g.streak}x STREAK!`, color: '#c084fc', life: 45, maxL: 45, vy: -1.5, sz: 14 });
    }

    pickNewTarget(g);
  }

  // ========== COLLECT WRONG WORD ==========
  function collectWrongWord(g: G, sign: any) {
    sign.wrong = true;
    sign.wrongTimer = 30;
    g.streak = 0;

    if (g.shieldTimer > 0) {
      g.shieldTimer = 0;
      g.texts.push({ x: sign.x, y: sign.y - 30, text: 'SHIELD SAVED!', color: '#38bdf8', life: 40, maxL: 40, vy: -2, sz: 14 });
      for (let i = 0; i < 8; i++) {
        g.particles.push({
          x: sign.x, y: sign.y,
          vx: rand(-3, 3), vy: rand(-3, 1),
          life: 12 + rand(0, 8), maxL: 20,
          color: '#38bdf8', sz: 2 + rand(0, 2),
        });
      }
    } else {
      g.hearts--;
      g.player.invTimer = INVINCIBLE_DURATION;
      g.player.flashTimer = INVINCIBLE_DURATION;
      g.shake = 12;

      // Boss zone fail
      if (g.bossZone) {
        g.bossMistakes++;
        if (g.bossMistakes >= 3) {
          g.bossZone = false;
          g.texts.push({ x: sign.x, y: sign.y - 50, text: 'BOSS ZONE FAILED!', color: '#ef4444', life: 60, maxL: 60, vy: -1, sz: 20 });
        }
      }

      g.texts.push({ x: sign.x, y: sign.y - 30, text: 'WRONG!', color: '#ef4444', life: 40, maxL: 40, vy: -2, sz: 18 });
      for (let i = 0; i < 10; i++) {
        g.particles.push({
          x: sign.x, y: sign.y,
          vx: rand(-4, 4), vy: rand(-4, 1),
          life: 15 + rand(0, 10), maxL: 25,
          color: '#ef4444', sz: 2 + rand(0, 3),
        });
      }
    }
  }

  // ========== HIT PLAYER ==========
  function hitPlayer(g: G) {
    if (g.player.invTimer > 0) return;
    if (g.shieldTimer > 0) {
      g.shieldTimer = 0;
      g.texts.push({
        x: g.player.x + g.cameraX, y: g.player.y - 20,
        text: 'SHIELD!', color: '#38bdf8', life: 40, maxL: 40, vy: -2, sz: 16,
      });
      return;
    }
    g.hearts--;
    g.streak = 0;
    g.player.invTimer = INVINCIBLE_DURATION;
    g.player.flashTimer = INVINCIBLE_DURATION;
    g.shake = 14;
    for (let i = 0; i < 12; i++) {
      g.particles.push({
        x: g.player.x + g.cameraX + rand(-10, 10),
        y: g.player.y + rand(-10, 10),
        vx: rand(-5, 5), vy: rand(-5, 2),
        life: 15 + rand(0, 10), maxL: 25,
        color: '#ff6b6b', sz: 2 + rand(0, 3),
      });
    }
  }

  // ========== ACTIVATE POWER-UP ==========
  function activatePowerUp(g: G, type: typeof POWERUP_TYPES[number]) {
    if (type.id === 'magnet') {
      g.magnetTimer = type.duration;
    } else if (type.id === 'shield') {
      g.shieldTimer = 300;
    } else if (type.id === 'blast') {
      // Clear all wrong words on screen
      let cleared = 0;
      for (const sign of g.wordSigns) {
        if (!sign.collected && !sign.isCorrect) {
          sign.collected = true;
          cleared++;
          for (let i = 0; i < 5; i++) {
            g.particles.push({
              x: sign.x, y: sign.y,
              vx: rand(-3, 3), vy: rand(-3, 1),
              life: 12, maxL: 12,
              color: '#ef4444', sz: 2,
            });
          }
        }
      }
      g.texts.push({
        x: g.player.x + g.cameraX, y: g.player.y - 30,
        text: `WORD BLAST! (${cleared})`, color: '#ef4444', life: 50, maxL: 50, vy: -2, sz: 16,
      });
    } else if (type.id === 'speed') {
      g.speedBoostTimer = type.duration;
    } else if (type.id === 'multiplier') {
      g.multiplier = 2;
      g.multiplierTimer = type.duration;
    }
    g.texts.push({
      x: g.player.x + g.cameraX, y: g.player.y - 50,
      text: type.label + '!', color: type.color, life: 50, maxL: 50, vy: -1.5, sz: 18,
    });
    for (let i = 0; i < 12; i++) {
      g.particles.push({
        x: g.player.x + g.cameraX, y: g.player.y + g.player.h / 2,
        vx: rand(-5, 5), vy: rand(-5, 5),
        life: 18 + rand(0, 10), maxL: 28,
        color: type.color, sz: 2 + rand(0, 4),
      });
    }
  }

  // ========== DRAW ==========
  function draw() {
    const g = gRef.current;
    const cvs = canvasRef.current;
    if (!g || !cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;
    const { W, H } = g;
    const zone = ZONES[g.zoneIdx];

    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    // ======= BACKGROUND: SKY GRADIENT =======
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, zone.sky);
    skyGrad.addColorStop(0.5, zone.bg1);
    skyGrad.addColorStop(1, zone.bg2);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // ======= PARALLAX LAYER 1: STARS/SKY =======
    for (const st of g.bgStars) {
      ctx.globalAlpha = st.bright;
      ctx.fillStyle = g.zoneIdx === 2 ? `hsl(${260 + Math.random() * 40},60%,80%)` : '#dde4ee';
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ======= PARALLAX LAYER 2: FAR TREES/BUILDINGS =======
    const groundY = g.groundY;
    for (const tree of g.farTrees) {
      ctx.fillStyle = zone.treeLine;
      ctx.globalAlpha = 0.4;
      if (g.zoneIdx === 0) {
        // Forest: triangle trees
        ctx.beginPath();
        ctx.moveTo(tree.x, groundY - 20);
        ctx.lineTo(tree.x - tree.w / 2, groundY - 20);
        ctx.lineTo(tree.x, groundY - 20 - tree.h);
        ctx.lineTo(tree.x + tree.w / 2, groundY - 20);
        ctx.closePath();
        ctx.fill();
      } else if (g.zoneIdx === 1) {
        // City: rectangles (buildings)
        ctx.fillRect(tree.x - tree.w / 2, groundY - 20 - tree.h, tree.w, tree.h);
        // Windows
        ctx.fillStyle = 'rgba(255,255,200,0.15)';
        for (let wy = groundY - 15 - tree.h; wy < groundY - 25; wy += 12) {
          for (let wx = tree.x - tree.w / 2 + 4; wx < tree.x + tree.w / 2 - 4; wx += 8) {
            ctx.fillRect(wx, wy, 4, 4);
          }
        }
      } else {
        // Space: asteroids/planets
        ctx.beginPath();
        ctx.arc(tree.x, groundY - 30 - tree.h / 2, tree.w / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= PARALLAX LAYER 3: NEAR BUSHES =======
    for (const bush of g.nearBushes) {
      ctx.fillStyle = zone.treeLine;
      ctx.globalAlpha = 0.3;
      if (g.zoneIdx === 0) {
        ctx.beginPath();
        ctx.ellipse(bush.x, groundY - 10, bush.w / 2, bush.h / 2, 0, 0, Math.PI * 2);
        ctx.fill();
      } else if (g.zoneIdx === 1) {
        // Cars or street objects
        ctx.fillRect(bush.x - bush.w / 2, groundY - 10 - bush.h / 2, bush.w, bush.h / 2);
      } else {
        // Crystal formations
        ctx.beginPath();
        ctx.moveTo(bush.x, groundY - 10);
        ctx.lineTo(bush.x - 5, groundY - 10 - bush.h);
        ctx.lineTo(bush.x + 5, groundY - 10 - bush.h * 0.7);
        ctx.closePath();
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= SPEED LINES (when going fast) =======
    if (g.speed > 7) {
      const intensity = (g.speed - 7) / (MAX_SPEED - 7);
      ctx.globalAlpha = intensity * 0.3;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1;
      for (let i = 0; i < Math.floor(intensity * 8); i++) {
        const ly = rand(50, H - 50);
        const lx = rand(0, W);
        const ll = rand(30, 80) * intensity;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(lx - ll, ly);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // ======= PLATFORMS =======
    for (const plat of g.platforms) {
      const px = plat.x - g.cameraX;
      if (px > W + 50 || px + plat.w < -50) continue;

      ctx.fillStyle = zone.ground;
      ctx.fillRect(px, plat.y, plat.w, plat.h);

      // Top surface
      ctx.fillStyle = zone.platformTop;
      ctx.fillRect(px, plat.y, plat.w, 4);

      // Grass/detail tufts on top
      if (plat.type === 'ground' && g.zoneIdx === 0) {
        ctx.fillStyle = '#5a9a3a';
        for (let tx = px; tx < px + plat.w; tx += rand(8, 16)) {
          const th = rand(3, 8);
          ctx.fillRect(tx, plat.y - th, 2, th);
        }
      }

      // Platform edge detail
      ctx.fillStyle = zone.groundDark;
      ctx.fillRect(px, plat.y + plat.h - 3, plat.w, 3);

      // Texture lines on elevated/floating
      if (plat.type !== 'ground') {
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(px + 4, plat.y + plat.h / 2);
        ctx.lineTo(px + plat.w - 4, plat.y + plat.h / 2);
        ctx.stroke();
      }
    }

    // ======= GROUND FILL (below platforms to bottom) =======
    ctx.fillStyle = zone.groundDark;
    ctx.fillRect(0, groundY + 40, W, H - groundY - 40);

    // ======= OBSTACLES =======
    for (const obs of g.obstacles) {
      const ox = obs.x - g.cameraX;
      if (ox > W + 50 || ox + obs.w < -50) continue;

      if (obs.type === 'spike') {
        // Triangle spikes
        ctx.fillStyle = '#8a4a4a';
        const spikeCount = Math.floor(obs.w / 12);
        for (let i = 0; i < spikeCount; i++) {
          const sx2 = ox + i * 12 + 6;
          ctx.beginPath();
          ctx.moveTo(sx2 - 5, obs.y + obs.h);
          ctx.lineTo(sx2, obs.y);
          ctx.lineTo(sx2 + 5, obs.y + obs.h);
          ctx.closePath();
          ctx.fill();
        }
        // Spike highlight
        ctx.fillStyle = '#aa6a6a';
        for (let i = 0; i < spikeCount; i++) {
          const sx2 = ox + i * 12 + 6;
          ctx.beginPath();
          ctx.moveTo(sx2 - 2, obs.y + obs.h);
          ctx.lineTo(sx2, obs.y + 4);
          ctx.lineTo(sx2 + 2, obs.y + obs.h);
          ctx.closePath();
          ctx.fill();
        }
      } else if (obs.type === 'branch') {
        // Brown branch rectangle with detail
        ctx.fillStyle = '#5a3a1a';
        ctx.fillRect(ox, obs.y, obs.w, obs.h);
        // Bark texture
        ctx.strokeStyle = '#4a2a0a';
        ctx.lineWidth = 1;
        for (let ly = obs.y + 4; ly < obs.y + obs.h - 2; ly += 6) {
          ctx.beginPath();
          ctx.moveTo(ox + 2, ly);
          ctx.lineTo(ox + obs.w - 2, ly + rand(-2, 2));
          ctx.stroke();
        }
        // Leaves
        ctx.fillStyle = '#4a8a2a';
        for (let lx = ox; lx < ox + obs.w; lx += rand(10, 18)) {
          ctx.beginPath();
          ctx.ellipse(lx, obs.y - 3, 6, 4, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // ======= WORD SIGNS =======
    for (const sign of g.wordSigns) {
      if (sign.collected && !sign.wrong) continue;
      const signX = sign.x - g.cameraX;
      const signY = sign.y;
      if (signX > W + 100 || signX < -100) continue;

      const word = sign.word;
      const signW = word.length * 14 + 30;
      const signH = 36;

      // Wrong flash
      if (sign.wrong && sign.wrongTimer > 0) {
        ctx.globalAlpha = sign.wrongTimer / 30;
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(signX - signW / 2 - 4, signY - signH / 2 - 4, signW + 8, signH + 8);
        ctx.globalAlpha = 1;
        continue;
      }

      // Sign post
      ctx.fillStyle = zone.platformColor;
      ctx.fillRect(signX - 2, signY + signH / 2, 4, 25);

      // Sign board
      const isTarget = sign.isCorrect;
      const boardGrad = ctx.createLinearGradient(signX - signW / 2, signY - signH / 2, signX - signW / 2, signY + signH / 2);
      boardGrad.addColorStop(0, isTarget ? '#5a4a2a' : '#4a3a2a');
      boardGrad.addColorStop(1, isTarget ? '#4a3a1a' : '#3a2a1a');
      ctx.fillStyle = boardGrad;

      // Rounded rect for sign
      const bx = signX - signW / 2;
      const by = signY - signH / 2;
      const br = 6;
      ctx.beginPath();
      ctx.roundRect(bx, by, signW, signH, br);
      ctx.fill();

      // Border
      ctx.strokeStyle = isTarget ? zone.accent + '60' : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bx, by, signW, signH, br);
      ctx.stroke();

      // Glow for correct sign (subtle hint, not too obvious)
      if (isTarget && g.streak >= 5) {
        ctx.shadowColor = zone.accent;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.roundRect(bx, by, signW, signH, br);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Word text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(word, signX, signY);
    }

    // ======= COINS =======
    for (const coin of g.coins) {
      if (coin.collected) continue;
      const cx = coin.x - g.cameraX;
      const cy = coin.y + Math.sin(g.time * 0.1 + coin.bobOffset) * 5;
      if (cx > W + 30 || cx < -30) continue;

      // Glow
      const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 12);
      cGrad.addColorStop(0, 'rgba(255,215,0,0.3)');
      cGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = cGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();

      // Coin body
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();

      // Inner
      ctx.fillStyle = '#ffed4a';
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fill();

      // Letter
      ctx.fillStyle = '#8a6a00';
      ctx.font = 'bold 9px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(coin.letter, cx, cy + 1);
    }

    // ======= POWER-UPS =======
    for (const pu of g.powerups) {
      if (pu.collected) continue;
      const px2 = pu.x - g.cameraX;
      const py2 = pu.y + Math.sin(g.time * 0.08 + pu.bobOffset) * 6;
      if (px2 > W + 30 || px2 < -30) continue;

      const puColor = pu.type.color;

      // Rotating glow ring
      ctx.save();
      ctx.translate(px2, py2);
      ctx.rotate(g.time * 0.05);
      ctx.strokeStyle = puColor + '50';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Outer glow
      const puGrad = ctx.createRadialGradient(px2, py2, 0, px2, py2, 20);
      puGrad.addColorStop(0, puColor + '40');
      puGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = puGrad;
      ctx.beginPath();
      ctx.arc(px2, py2, 20, 0, Math.PI * 2);
      ctx.fill();

      // Body hexagon
      ctx.fillStyle = 'rgba(10,15,30,0.85)';
      ctx.strokeStyle = puColor + '90';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        i === 0 ? ctx.moveTo(px2 + Math.cos(a) * 13, py2 + Math.sin(a) * 13) : ctx.lineTo(px2 + Math.cos(a) * 13, py2 + Math.sin(a) * 13);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Symbol
      ctx.fillStyle = puColor;
      ctx.font = 'bold 11px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pu.type.symbol, px2, py2 + 1);
    }

    // ======= COMBO TRAIL =======
    for (const ct of g.comboTrail) {
      const a = ct.life / ct.maxL;
      const ctX = ct.x - g.cameraX;
      ctx.globalAlpha = a * 0.5;
      ctx.fillStyle = `hsl(${ct.hue},70%,60%)`;
      ctx.beginPath();
      ctx.arc(ctX, ct.y, 4 * a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ======= PLAYER CHARACTER =======
    const p = g.player;
    if (!(p.flashTimer > 0 && Math.floor(p.flashTimer) % 6 < 3)) {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);

      // Shield bubble
      if (g.shieldTimer > 0) {
        const shieldPulse = 30 + Math.sin(g.time * 0.15) * 4;
        ctx.strokeStyle = `rgba(56,189,248,${0.3 + Math.sin(g.time * 0.1) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, shieldPulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = 'rgba(56,189,248,0.05)';
        ctx.beginPath();
        ctx.arc(0, 0, shieldPulse, 0, Math.PI * 2);
        ctx.fill();
      }

      // Magnet aura
      if (g.magnetTimer > 0) {
        ctx.save();
        ctx.rotate(g.time * 0.03);
        ctx.strokeStyle = `rgba(251,191,36,${0.2 + Math.sin(g.time * 0.08) * 0.1})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, 35, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      if (p.sliding) {
        // Sliding pose: lower, wider
        // Body
        ctx.fillStyle = '#4a90d9';
        ctx.fillRect(-18, -8, 36, 16);
        // Head
        ctx.fillStyle = '#f0c8a0';
        ctx.beginPath();
        ctx.arc(12, -6, 8, 0, Math.PI * 2);
        ctx.fill();
        // Hair
        ctx.fillStyle = '#5a3a1a';
        ctx.beginPath();
        ctx.arc(12, -9, 8, Math.PI, Math.PI * 2);
        ctx.fill();
        // Eyes
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(15, -7, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.arc(15.5, -7, 1, 0, Math.PI * 2);
        ctx.fill();
        // Slide sparks
        if (g.time % 2 < 0.5) {
          ctx.fillStyle = '#ffd700';
          ctx.beginPath();
          ctx.arc(-15 + rand(-5, 0), 10, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Standing/running/jumping character
        const runPhase = p.grounded ? p.runFrame : (p.vy < 0 ? -1 : -2);

        // Body torso
        ctx.fillStyle = '#4a90d9';
        ctx.fillRect(-8, -12, 16, 22);

        // Legs (animated)
        ctx.fillStyle = '#3a6a9a';
        if (runPhase >= 0) {
          // Run cycle
          const legAngle = Math.sin(p.runTimer * Math.PI * 2) * 0.6;
          // Left leg
          ctx.save();
          ctx.translate(-3, 10);
          ctx.rotate(legAngle);
          ctx.fillRect(-3, 0, 6, 16);
          ctx.restore();
          // Right leg
          ctx.save();
          ctx.translate(3, 10);
          ctx.rotate(-legAngle);
          ctx.fillRect(-3, 0, 6, 16);
          ctx.restore();
        } else if (runPhase === -1) {
          // Jumping up: legs together, slightly bent
          ctx.fillRect(-5, 10, 10, 14);
        } else {
          // Falling: legs spread
          ctx.save();
          ctx.translate(-4, 10);
          ctx.rotate(-0.3);
          ctx.fillRect(-3, 0, 6, 14);
          ctx.restore();
          ctx.save();
          ctx.translate(4, 10);
          ctx.rotate(0.3);
          ctx.fillRect(-3, 0, 6, 14);
          ctx.restore();
        }

        // Arms (animated)
        ctx.fillStyle = '#f0c8a0';
        if (runPhase >= 0) {
          const armAngle = Math.sin(p.runTimer * Math.PI * 2 + Math.PI) * 0.5;
          // Left arm
          ctx.save();
          ctx.translate(-8, -6);
          ctx.rotate(armAngle);
          ctx.fillRect(-2, 0, 4, 12);
          ctx.restore();
          // Right arm
          ctx.save();
          ctx.translate(8, -6);
          ctx.rotate(-armAngle);
          ctx.fillRect(-2, 0, 4, 12);
          ctx.restore();
        } else {
          // Arms up when jumping
          ctx.save();
          ctx.translate(-9, -8);
          ctx.rotate(-0.8);
          ctx.fillRect(-2, 0, 4, 10);
          ctx.restore();
          ctx.save();
          ctx.translate(9, -8);
          ctx.rotate(0.8);
          ctx.fillRect(-2, 0, 4, 10);
          ctx.restore();
        }

        // Head
        ctx.fillStyle = '#f0c8a0';
        ctx.beginPath();
        ctx.arc(0, -18, 10, 0, Math.PI * 2);
        ctx.fill();

        // Hair
        ctx.fillStyle = '#5a3a1a';
        ctx.beginPath();
        ctx.arc(0, -21, 10, Math.PI, Math.PI * 2);
        ctx.fill();
        // Side hair
        ctx.fillRect(-10, -22, 4, 8);
        ctx.fillRect(6, -22, 4, 8);

        // Eyes
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(3, -19, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.arc(4, -19, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Smile
        ctx.strokeStyle = '#8a5a3a';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(2, -15, 3, 0.1, Math.PI - 0.1);
        ctx.stroke();

        // Streak fire effect around character
        if (g.streak >= 5) {
          const fireLevels = Math.min(g.streak - 4, 5);
          for (let fi = 0; fi < fireLevels; fi++) {
            const fireY = 10 + fi * 4;
            const fireR = 3 + fi * 1.5;
            const fireOff = Math.sin(g.time * 0.2 + fi) * 3;
            ctx.globalAlpha = 0.4 - fi * 0.06;
            ctx.fillStyle = `hsl(${30 + fi * 20},90%,${60 - fi * 5}%)`;
            ctx.beginPath();
            ctx.arc(fireOff, -25 - fi * 6, fireR, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
      }
      ctx.restore();
    }

    // ======= PARTICLES =======
    for (const part of g.particles) {
      const a = part.life / part.maxL;
      const partX = part.x - g.cameraX;
      ctx.globalAlpha = a * a;
      ctx.fillStyle = part.color;
      ctx.beginPath();
      ctx.arc(partX, part.y, part.sz * a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ======= TEXT EFFECTS =======
    for (const t of g.texts) {
      const a = Math.min(1, t.life / (t.maxL * 0.3));
      const tx = t.x - g.cameraX;
      ctx.globalAlpha = a;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.sz}px "Outfit", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.7)';
      ctx.shadowBlur = 4;
      ctx.fillText(t.text, tx, t.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    // ======= TARGET WORD HUD (on canvas) =======
    const targetPulse = g.targetFlash > 0 ? 1 + Math.sin(g.targetFlash * 0.3) * 0.1 : 1;
    ctx.save();
    ctx.translate(W / 2, 55);
    ctx.scale(targetPulse, targetPulse);

    // Background pill
    const tw = ctx.measureText(g.targetWord).width;
    const pillW = Math.max(tw + 80, 140);
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.roundRect(-pillW / 2, -22, pillW, 44, 22);
    ctx.fill();
    ctx.strokeStyle = zone.accent + '60';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(-pillW / 2, -22, pillW, 44, 22);
    ctx.stroke();

    // "FIND:" label
    ctx.fillStyle = zone.accent;
    ctx.font = '600 11px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('FIND:', 0, -8);

    // Target word
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px "Outfit", sans-serif';
    ctx.fillText(g.targetWord, 0, 10);

    ctx.restore();

    // ======= BOSS ZONE INDICATOR =======
    if (g.bossZone) {
      const bossAlpha = 0.6 + Math.sin(g.time * 0.1) * 0.2;
      ctx.fillStyle = `rgba(255,215,0,${bossAlpha * 0.1})`;
      ctx.fillRect(0, 0, W, 4);
      ctx.fillRect(0, H - 4, W, 4);
      ctx.fillRect(0, 0, 4, H);
      ctx.fillRect(W - 4, 0, 4, H);
    }

    ctx.restore(); // end shake transform
  }

  // ========== INPUT ==========
  useEffect(() => {
    const kd = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
      if (['ArrowUp', 'ArrowDown', ' '].includes(e.key)) e.preventDefault();
    };
    const ku = (e: KeyboardEvent) => { keysRef.current[e.key] = false; };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku); };
  }, []);

  // Touch controls
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ts = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      const y = touch.clientY - rect.top;
      const halfH = rect.height / 2;
      if (y < halfH) {
        keysRef.current['ArrowUp'] = true;
      } else {
        keysRef.current['ArrowDown'] = true;
      }
    };
    const te = (e: TouchEvent) => {
      e.preventDefault();
      keysRef.current['ArrowUp'] = false;
      keysRef.current['ArrowDown'] = false;
    };
    el.addEventListener('touchstart', ts, { passive: false });
    el.addEventListener('touchend', te, { passive: false });
    el.addEventListener('touchcancel', te, { passive: false });
    return () => {
      el.removeEventListener('touchstart', ts);
      el.removeEventListener('touchend', te);
      el.removeEventListener('touchcancel', te);
    };
  }, [screen]);

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="sws-root">
        <style>{styles}</style>
        <div className="sws-intro">
          <div className="sws-intro-bg">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="sws-leaf" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`, animationDuration: `${3 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="sws-scanlines" />
          <div className="sws-intro-body">
            <div className="sws-logo-wrap">
              <div className="sws-logo-deco sws-logo-deco-l" />
              <div className="sws-logo-stack">
                <h1 className="sws-title">SIGHT WORD</h1>
                <p className="sws-title-sub">SPRINT</p>
              </div>
              <div className="sws-logo-deco sws-logo-deco-r" />
            </div>

            <div className="sws-card">
              <div className="sws-card-header">
                <div className="sws-card-line" />
                <span>HOW TO PLAY</span>
                <div className="sws-card-line" />
              </div>
              <div className="sws-rules">
                <div className="sws-rule" style={{ '--rc': '#4ade80' } as React.CSSProperties}>
                  <span className="sws-rule-icon">{'\u2B06'}</span>
                  <div className="sws-rule-body"><strong>JUMP</strong><span>Space / Up Arrow / Tap Top</span></div>
                </div>
                <div className="sws-rule" style={{ '--rc': '#60a5fa' } as React.CSSProperties}>
                  <span className="sws-rule-icon">{'\u2B07'}</span>
                  <div className="sws-rule-body"><strong>SLIDE</strong><span>Down Arrow / Tap Bottom</span></div>
                </div>
                <div className="sws-rule" style={{ '--rc': '#fbbf24' } as React.CSSProperties}>
                  <span className="sws-rule-icon">{'\u2B50'}</span>
                  <div className="sws-rule-body"><strong>COLLECT</strong><span>Grab the matching sight word!</span></div>
                </div>
                <div className="sws-rule" style={{ '--rc': '#ef4444' } as React.CSSProperties}>
                  <span className="sws-rule-icon">{'\u26A0'}</span>
                  <div className="sws-rule-body"><strong>AVOID</strong><span>Wrong words cost a heart!</span></div>
                </div>
              </div>
              <div className="sws-zones-info">
                <span className="sws-zone-tag" style={{ background: 'rgba(74,222,128,0.15)', color: '#4ade80' }}>Forest: Easy</span>
                <span className="sws-zone-tag" style={{ background: 'rgba(96,165,250,0.15)', color: '#60a5fa' }}>City: Medium</span>
                <span className="sws-zone-tag" style={{ background: 'rgba(192,132,252,0.15)', color: '#c084fc' }}>Space: Hard</span>
              </div>
            </div>

            <button className="sws-start-btn" onClick={() => setScreen('playing')}>
              START RUNNING
              <span className="sws-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalDist = Math.floor(gRef.current?.distance || 0);
    const finalWords = gRef.current?.wordsCollected || 0;
    const finalBest = gRef.current?.bestStreak || 0;
    return (
      <div className="sws-root">
        <style>{styles}</style>
        <div className="sws-gameover">
          <div className="sws-intro-bg">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="sws-leaf" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="sws-scanlines" />
          <div className="sws-go-body">
            <div className="sws-go-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                <path d="M20 20L36 36M36 20L20 36" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="sws-go-title">RUN OVER!</h1>
            <div className="sws-go-stats">
              <div className="sws-go-stat">
                <span className="sws-go-label">SCORE</span>
                <span className="sws-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="sws-go-divider" />
              <div className="sws-go-stat">
                <span className="sws-go-label">DISTANCE</span>
                <span className="sws-go-val">{finalDist}m</span>
              </div>
              <div className="sws-go-divider" />
              <div className="sws-go-stat">
                <span className="sws-go-label">WORDS</span>
                <span className="sws-go-val">{finalWords}</span>
              </div>
            </div>
            <div className="sws-go-extra">
              <span>Best Streak: {finalBest}x</span>
              {highScoreRef.current > 0 && <span>High Score: {highScoreRef.current.toLocaleString()}</span>}
            </div>
            <div className="sws-go-btns">
              <button className="sws-start-btn" onClick={() => setScreen('playing')}>
                TRY AGAIN
                <span className="sws-btn-shine" />
              </button>
              <button className="sws-menu-btn" onClick={() => setScreen('intro')}>Back to Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="sws-root">
      <style>{styles}</style>
      <div className="sws-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="sws-canvas" />

        {/* HUD Overlay */}
        <div className="sws-hud-top">
          <div className="sws-hud-left">
            <div className="sws-zone-badge">
              <span className="sws-zone-label">ZONE</span>
              <span className="sws-zone-name">{hud.zone}</span>
            </div>
            <div className="sws-lives">
              {[...Array(Math.max(0, hud.hearts))].map((_, i) => (
                <span key={i} className="sws-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="sws-hud-right">
            <div className="sws-score-badge">{hud.score.toLocaleString()}</div>
            <div className="sws-dist">{hud.distance}m</div>
            {hud.streak > 2 && <div className="sws-streak">{hud.streak}x STREAK</div>}
            {hud.multiplier > 1 && <div className="sws-effect-badge sws-eff-mul">2x SCORE</div>}
            {hud.shieldActive && <div className="sws-effect-badge sws-eff-shield">SHIELD</div>}
            {hud.magnetActive && <div className="sws-effect-badge sws-eff-magnet">MAGNET</div>}
            {hud.speedBoost && <div className="sws-effect-badge sws-eff-speed">SPEED!</div>}
          </div>
        </div>

        {/* Boss Zone overlay */}
        {hud.bossZone && (
          <div className="sws-boss-hud">
            <span className="sws-boss-label">BOSS ZONE</span>
            <span className="sws-boss-remain">{hud.bossRemaining} words left</span>
          </div>
        )}
      </div>
    </div>
  );
}

// =============== STYLES ===============
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --sws-bg: #0d1f0d;
  --sws-surface: rgba(255,255,255,0.03);
  --sws-border: rgba(255,255,255,0.06);
  --sws-glass: rgba(8,18,12,0.75);
  --sws-glass-border: rgba(74,222,128,0.12);
  --sws-text: #c8e5c8;
  --sws-text-dim: #4a6a4a;
  --sws-accent: #4ade80;
  --sws-glow: rgba(74,222,128,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.sws-root {
  width: 100%; height: 100%;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  background: var(--sws-bg);
  color: var(--sws-text);
}

/* ===== SHARED ===== */
.sws-intro, .sws-gameover {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(40,120,60,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(60,140,80,0.08) 0%, transparent 50%),
    var(--sws-bg);
}
.sws-intro-bg { position: absolute; inset: 0; pointer-events: none; }
.sws-leaf {
  position: absolute; width: 6px; height: 6px;
  border-radius: 50% 0 50% 0;
  background: rgba(74,222,128,0.3);
  animation: swsFloat 4s ease-in-out infinite alternate;
}
@keyframes swsFloat {
  0% { opacity: 0.1; transform: translateY(0) rotate(0deg); }
  100% { opacity: 0.5; transform: translateY(-20px) rotate(180deg); }
}

.sws-scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 5;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px);
  mix-blend-mode: multiply;
}

/* ===== INTRO ===== */
.sws-intro-body, .sws-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 480px; width: 100%;
  animation: swsFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes swsFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.sws-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.sws-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--sws-accent), transparent);
  opacity: 0.4;
  animation: swsDecoGlow 3s ease-in-out infinite alternate;
}
@keyframes swsDecoGlow {
  0% { opacity: 0.2; width: 30px; } 100% { opacity: 0.6; width: 60px; }
}
.sws-logo-stack { display: flex; flex-direction: column; align-items: center; }
.sws-title {
  font-size: clamp(2rem, 7vw, 2.8rem);
  font-weight: 900; letter-spacing: 3px; color: #fff;
  text-shadow: 0 0 40px rgba(74,222,128,0.3), 0 0 80px rgba(74,222,128,0.1);
  animation: swsTitleShimmer 4s ease-in-out infinite alternate;
}
.sws-title-sub {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  font-weight: 900; letter-spacing: 8px; color: var(--sws-accent);
  text-shadow: 0 0 30px rgba(74,222,128,0.4);
}
@keyframes swsTitleShimmer {
  0% { text-shadow: 0 0 40px rgba(74,222,128,0.3), 0 0 80px rgba(74,222,128,0.1); }
  50% { text-shadow: 0 0 50px rgba(96,165,250,0.3), 0 0 100px rgba(96,165,250,0.1); }
  100% { text-shadow: 0 0 40px rgba(192,132,252,0.3), 0 0 80px rgba(192,132,252,0.1); }
}

/* Card */
.sws-card {
  background: var(--sws-glass);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--sws-glass-border);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left; position: relative; overflow: hidden;
}
.sws-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(74,222,128,0.3), transparent);
}
.sws-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-size: 0.7rem; font-weight: 700;
  color: var(--sws-text-dim); letter-spacing: 4px; text-transform: uppercase;
}
.sws-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, var(--sws-border), transparent);
}
.sws-rules {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;
}
.sws-rule {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px;
  transition: border-color 0.3s, background 0.3s;
}
.sws-rule:hover {
  border-color: color-mix(in srgb, var(--rc) 25%, transparent);
  background: color-mix(in srgb, var(--rc) 4%, transparent);
}
.sws-rule-icon {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 900; color: var(--rc);
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.sws-rule-body {
  display: flex; flex-direction: column; gap: 0.1rem;
  font-size: 0.78rem; line-height: 1.3;
}
.sws-rule-body strong {
  font-size: 0.72rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.sws-rule-body span { color: var(--sws-text-dim); font-size: 0.72rem; }

.sws-zones-info {
  display: flex; justify-content: center; gap: 0.5rem;
  margin-top: 0.8rem; padding-top: 0.7rem;
  border-top: 1px solid var(--sws-border);
}
.sws-zone-tag {
  padding: 0.2rem 0.6rem; border-radius: 6px;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 0.5px;
}

/* CTA button */
.sws-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Outfit', sans-serif; font-size: 0.85rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #2d8a4e, #1a6a3a);
  border: 1px solid rgba(74,222,128,0.3);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow: 0 4px 24px rgba(74,222,128,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.sws-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(74,222,128,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  border-color: rgba(74,222,128,0.5);
}
.sws-start-btn:active { transform: translateY(0); }
.sws-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: swsBtnShine 3s ease-in-out infinite;
}
@keyframes swsBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* ===== GAME OVER ===== */
.sws-go-icon {
  margin-bottom: 1rem;
  animation: swsGoIcon 2s ease-in-out infinite alternate;
}
@keyframes swsGoIcon {
  0% { opacity: 0.5; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.05); }
}
.sws-go-title {
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.sws-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 1.5rem; margin-bottom: 1rem;
  padding: 1rem 1.5rem;
  background: var(--sws-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--sws-glass-border);
  border-radius: 14px;
}
.sws-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, var(--sws-glass-border), transparent);
}
.sws-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.sws-go-label {
  font-size: 0.6rem; font-weight: 700;
  color: var(--sws-text-dim); letter-spacing: 3px; text-transform: uppercase;
}
.sws-go-val {
  font-size: 1.5rem; font-weight: 900; color: white;
  text-shadow: 0 0 20px rgba(255,255,255,0.15);
}
.sws-go-extra {
  display: flex; justify-content: center; gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem; color: var(--sws-text-dim);
}
.sws-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.sws-menu-btn {
  padding: 0.6rem 1.8rem; font-family: 'Outfit', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: var(--sws-text-dim);
  background: transparent; border: 1px solid var(--sws-border);
  border-radius: 8px; cursor: pointer;
  transition: all 0.25s; letter-spacing: 1px;
}
.sws-menu-btn:hover {
  border-color: rgba(255,255,255,0.15); color: var(--sws-text);
  background: rgba(255,255,255,0.03);
}

/* ===== GAME ===== */
.sws-game {
  width: 100%; height: 100%; position: relative; overflow: hidden;
  cursor: default;
}
.sws-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.sws-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(13,31,13,0.85) 0%, rgba(13,31,13,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.sws-hud-left, .sws-hud-right {
  display: flex; align-items: center; gap: 0.5rem;
}
.sws-hud-right { flex-direction: column; align-items: flex-end; gap: 0.25rem; }
.sws-zone-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(74,222,128,0.1);
  border: 1px solid rgba(74,222,128,0.2);
  border-radius: 8px;
}
.sws-zone-label {
  font-size: 0.5rem; font-weight: 700;
  color: var(--sws-accent); letter-spacing: 2px;
  text-transform: uppercase; opacity: 0.7;
}
.sws-zone-name {
  font-size: 0.75rem; font-weight: 800; color: #fff;
}
.sws-lives { display: flex; gap: 0.3rem; align-items: center; }
.sws-heart {
  display: flex; align-items: center;
  filter: drop-shadow(0 0 4px rgba(239,68,68,0.5));
}
.sws-score-badge {
  font-size: 0.8rem; font-weight: 700;
  color: rgba(255,255,255,0.7); padding: 0.2rem 0;
}
.sws-dist {
  font-size: 0.65rem; font-weight: 600; color: var(--sws-text-dim);
  letter-spacing: 1px;
}
.sws-streak {
  font-size: 0.65rem; font-weight: 700;
  color: #c084fc;
  text-shadow: 0 0 10px rgba(192,132,252,0.4);
  animation: swsCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes swsCombo {
  0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }
}
.sws-effect-badge {
  font-size: 0.55rem; font-weight: 700;
  padding: 0.12rem 0.45rem;
  border-radius: 5px; letter-spacing: 1px;
  animation: swsEffPulse 1s ease-in-out infinite alternate;
}
@keyframes swsEffPulse {
  0% { opacity: 0.6; } 100% { opacity: 1; }
}
.sws-eff-shield {
  color: #38bdf8; background: rgba(56,189,248,0.1);
  border: 1px solid rgba(56,189,248,0.25);
}
.sws-eff-mul {
  color: #c084fc; background: rgba(192,132,252,0.1);
  border: 1px solid rgba(192,132,252,0.25);
}
.sws-eff-magnet {
  color: #fbbf24; background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.25);
}
.sws-eff-speed {
  color: #4ade80; background: rgba(74,222,128,0.1);
  border: 1px solid rgba(74,222,128,0.25);
}

/* Boss HUD */
.sws-boss-hud {
  position: absolute; top: 90px; left: 50%; transform: translateX(-50%);
  display: flex; align-items: center; gap: 0.5rem;
  z-index: 20; pointer-events: none;
  padding: 0.3rem 0.8rem;
  background: rgba(255,215,0,0.08);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 10px;
  animation: swsBossIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes swsBossIn {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.sws-boss-label {
  font-size: 0.7rem; font-weight: 800; color: #fbbf24;
  letter-spacing: 2px; text-transform: uppercase;
}
.sws-boss-remain {
  font-size: 0.65rem; font-weight: 600; color: #fff;
}

/* Responsive */
@media (max-width: 500px) {
  .sws-hud-top { padding: 0.3rem 0.4rem; }
  .sws-score-badge { font-size: 0.7rem; }
  .sws-zone-badge { padding: 0.2rem 0.5rem; }
  .sws-zone-name { font-size: 0.65rem; }
  .sws-rules { grid-template-columns: 1fr; }
  .sws-logo-deco { display: none; }
  .sws-go-stats { gap: 0.8rem; padding: 0.7rem; }
  .sws-go-val { font-size: 1.2rem; }
}
`;
