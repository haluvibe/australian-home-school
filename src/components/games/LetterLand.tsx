"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface LetterLandProps {
  onExit?: () => void;
}

/*
  LETTER LAND: ALPHABET ADVENTURE PLATFORMER

  A colorful platformer where you run through Letter Land.
  Uppercase letters are trapped in cages on platforms.
  Collect the matching lowercase letter key to free them!
  Enemies are "scrambled letters" (mirrored/rotated).

  Controls:
  - Arrow Keys / WASD: Move
  - Space / Up: Jump
  - Auto-collect keys on contact
*/

// =============== CONSTANTS ===============
const GRAVITY = 0.55;
const JUMP_FORCE = -12.5;
const MOVE_SPEED = 4.5;
const MAX_FALL = 14;
const FRICTION = 0.82;
const TILE = 40;
const STOMP_BOUNCE = -9;
const INV_TIME = 90;
const COMBO_WINDOW = 180;

// World themes
const WORLDS = [
  { name: 'Meadow', letters: 'ABCDEF', bg1: '#87CEEB', bg2: '#98FB98', bg3: '#228B22', platform: '#8B4513', accent: '#FFD700' },
  { name: 'Beach', letters: 'GHIJKL', bg1: '#FF7F50', bg2: '#FFD700', bg3: '#DAA520', platform: '#D2B48C', accent: '#00CED1' },
  { name: 'Forest', letters: 'MNOPQR', bg1: '#2E8B57', bg2: '#006400', bg3: '#013220', platform: '#654321', accent: '#7CFC00' },
  { name: 'Mountain', letters: 'STUVWXYZ', bg1: '#6A5ACD', bg2: '#483D8B', bg3: '#191970', platform: '#708090', accent: '#FFD700' },
];

const POWER_UP_TYPES = [
  { id: 'shield', label: 'SHIELD!', color: '#38bdf8', duration: 360 },
  { id: 'speed', label: 'SPEED!', color: '#4ade80', duration: 300 },
  { id: 'magnet', label: 'MAGNET!', color: '#c084fc', duration: 420 },
  { id: 'life', label: '+1 LIFE', color: '#ef4444', duration: 0 },
];

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number) => Math.floor(rand(lo, hi + 1));
const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// =============== LEVEL GENERATION ===============
function generateLevel(worldIdx: number, levelInWorld: number, W: number, H: number) {
  const world = WORLDS[worldIdx];
  const letters = world.letters;
  const levelIdx = levelInWorld;
  // Select 3 letter pairs per level (or fewer for last level)
  const startIdx = levelIdx * 3;
  const pairLetters = letters.slice(startIdx, startIdx + 3);
  if (pairLetters.length === 0) return null;

  const platforms: { x: number; y: number; w: number; type: string; crumbleTimer?: number; springPower?: number; moving?: { axis: string; range: number; speed: number; phase: number } }[] = [];
  const cages: { x: number; y: number; letter: string; freed: boolean; id: number }[] = [];
  const keys: { x: number; y: number; letter: string; collected: boolean; id: number; bobT: number }[] = [];
  const enemies: { x: number; y: number; vx: number; letter: string; id: number; alive: boolean; patrolLeft: number; patrolRight: number; mirrored: boolean; hp: number }[] = [];
  const coins: { x: number; y: number; id: number; collected: boolean; bobT: number }[] = [];
  const powerUps: { x: number; y: number; type: typeof POWER_UP_TYPES[number]; id: number; collected: boolean; bobT: number }[] = [];

  // Ground platform
  platforms.push({ x: 0, y: H - TILE, w: W, type: 'ground' });

  // Generate platforms in a structured layout
  const rows = 5;
  const colCount = Math.floor(W / (TILE * 3));
  const usedPositions = new Set<string>();

  for (let row = 1; row <= rows; row++) {
    const y = H - TILE - row * (TILE * 2.2);
    if (y < TILE * 2) break;

    for (let col = 0; col < colCount; col++) {
      if (Math.random() < 0.35) continue;
      const x = col * (TILE * 3) + rand(0, TILE);
      const w = TILE * 2 + rand(0, TILE * 1.5);
      const posKey = `${Math.floor(x / TILE)},${Math.floor(y / TILE)}`;
      if (usedPositions.has(posKey)) continue;
      usedPositions.add(posKey);

      let type = 'normal';
      const r = Math.random();
      if (r < 0.1 && row > 1) type = 'crumble';
      else if (r < 0.18) type = 'spring';
      else if (r < 0.28 && row > 1) type = 'moving';

      const plat: typeof platforms[number] = { x, y, w, type };
      if (type === 'crumble') plat.crumbleTimer = 0;
      if (type === 'spring') plat.springPower = -16;
      if (type === 'moving') {
        plat.moving = {
          axis: Math.random() < 0.5 ? 'x' : 'y',
          range: rand(30, 80),
          speed: rand(0.01, 0.025),
          phase: Math.random() * Math.PI * 2,
        };
      }

      platforms.push(plat);
    }
  }

  // Place cages and keys for each letter pair
  const platPool = platforms.filter(p => p.type !== 'ground' && p.y < H - TILE * 3);
  for (let i = 0; i < pairLetters.length; i++) {
    const letter = pairLetters[i];
    // Cage on a higher platform
    const cagePlat = platPool[randInt(0, Math.max(0, platPool.length - 1))];
    if (cagePlat) {
      cages.push({
        x: cagePlat.x + cagePlat.w / 2,
        y: cagePlat.y - 30,
        letter,
        freed: false,
        id: nextId(),
      });
    }
    // Key on a different platform or ground level area
    const keyX = rand(TILE * 2, W - TILE * 2);
    const keyPlat = platforms.find(p => p.type !== 'ground' && Math.abs(p.x + p.w / 2 - keyX) < p.w && (!cagePlat || Math.abs(p.y - cagePlat.y) > TILE * 3));
    const keyY = keyPlat ? keyPlat.y - 20 : H - TILE - 20;
    keys.push({
      x: keyPlat ? keyPlat.x + keyPlat.w / 2 : keyX,
      y: keyY,
      letter: letter.toLowerCase(),
      collected: false,
      id: nextId(),
      bobT: Math.random() * Math.PI * 2,
    });
  }

  // Enemies - scrambled letters patrolling platforms
  const enemyCount = 2 + worldIdx + Math.floor(levelInWorld * 0.5);
  const enemyLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < enemyCount; i++) {
    const ePlat = platforms[randInt(1, platforms.length - 1)];
    if (!ePlat || ePlat.type === 'ground') continue;
    const eLetter = enemyLetters[randInt(0, 25)];
    enemies.push({
      x: ePlat.x + ePlat.w / 2,
      y: ePlat.y - 24,
      vx: (Math.random() < 0.5 ? -1 : 1) * (1 + worldIdx * 0.3),
      letter: eLetter,
      id: nextId(),
      alive: true,
      patrolLeft: ePlat.x - 10,
      patrolRight: ePlat.x + ePlat.w + 10,
      mirrored: Math.random() < 0.5,
      hp: worldIdx >= 2 ? 2 : 1,
    });
  }

  // Coins scattered on platforms
  for (const p of platforms) {
    if (p.type === 'ground') continue;
    const coinCount = randInt(0, 2);
    for (let c = 0; c < coinCount; c++) {
      coins.push({
        x: p.x + rand(10, Math.max(20, p.w - 10)),
        y: p.y - 18 - rand(0, 20),
        id: nextId(),
        collected: false,
        bobT: Math.random() * Math.PI * 2,
      });
    }
  }
  // Ground coins
  for (let i = 0; i < 5; i++) {
    coins.push({
      x: rand(TILE, W - TILE),
      y: H - TILE - 18,
      id: nextId(),
      collected: false,
      bobT: Math.random() * Math.PI * 2,
    });
  }

  // Power-ups (1-2 per level)
  const puCount = randInt(1, 2);
  for (let i = 0; i < puCount; i++) {
    const pup = platPool[randInt(0, Math.max(0, platPool.length - 1))];
    if (pup) {
      powerUps.push({
        x: pup.x + pup.w / 2,
        y: pup.y - 28,
        type: POWER_UP_TYPES[randInt(0, POWER_UP_TYPES.length - 1)],
        id: nextId(),
        collected: false,
        bobT: Math.random() * Math.PI * 2,
      });
    }
  }

  return { platforms, cages, keys, enemies, coins, powerUps, pairLetters };
}

// =============== BOSS GENERATION ===============
function generateBoss(worldIdx: number, W: number, H: number) {
  const world = WORLDS[worldIdx];
  const letters = world.letters;
  // Boss throws scrambled letters; player must catch correct ones
  const targetLetters = letters.split('').sort(() => Math.random() - 0.5).slice(0, 3 + worldIdx);

  const platforms: { x: number; y: number; w: number; type: string; crumbleTimer?: number; springPower?: number; moving?: { axis: string; range: number; speed: number; phase: number } }[] = [];
  // Ground
  platforms.push({ x: 0, y: H - TILE, w: W, type: 'ground' });
  // A few platforms for maneuvering
  platforms.push({ x: W * 0.1, y: H - TILE * 4, w: TILE * 3, type: 'normal' });
  platforms.push({ x: W * 0.5 - TILE * 1.5, y: H - TILE * 6, w: TILE * 3, type: 'normal' });
  platforms.push({ x: W * 0.75, y: H - TILE * 4, w: TILE * 3, type: 'normal' });
  platforms.push({ x: W * 0.3, y: H - TILE * 8, w: TILE * 2.5, type: 'normal' });
  platforms.push({ x: W * 0.6, y: H - TILE * 8, w: TILE * 2.5, type: 'normal' });

  return {
    platforms,
    boss: {
      x: W / 2,
      y: 80,
      w: 100 + worldIdx * 15,
      h: 80 + worldIdx * 10,
      hp: 3 + worldIdx * 2,
      maxHP: 3 + worldIdx * 2,
      targetLetters,
      currentTargetIdx: 0,
      phase: 'enter' as string,
      shootTimer: 120,
      angle: 0,
      hitFlash: 0,
      scrambledLetters: [] as { x: number; y: number; vx: number; vy: number; letter: string; correct: boolean; id: number; alive: boolean }[],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

export default function LetterLand({ onExit }: LetterLandProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const touchRef = useRef({ left: false, right: false, jump: false });
  const prevTimeRef = useRef(0);

  const [hud, setHud] = useState({
    score: 0, lives: 3, world: 1, level: 1,
    keysCollected: [] as string[], totalPairs: 3,
    combo: 0, bossActive: false, bossHP: 0, bossMaxHP: 0,
    shieldActive: false, speedActive: false, magnetActive: false,
    timeBonus: 0, msg: '', msgTimer: 0,
  });

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

    _idCounter = 0;

    const level = generateLevel(0, 0, W, H);
    if (!level) return;

    // Parallax layers
    const bgLayers = [
      { objects: Array.from({ length: 15 }, () => ({ x: Math.random() * W, y: Math.random() * H * 0.6, size: rand(20, 60), type: randInt(0, 2) })), speed: 0.1 },
      { objects: Array.from({ length: 10 }, () => ({ x: Math.random() * W, y: Math.random() * H * 0.5 + H * 0.1, size: rand(30, 80), type: randInt(0, 3) })), speed: 0.3 },
      { objects: Array.from({ length: 8 }, () => ({ x: Math.random() * W, y: Math.random() * H * 0.4 + H * 0.2, size: rand(40, 100), type: randInt(0, 2) })), speed: 0.5 },
    ];

    gRef.current = {
      W, H, bgLayers,
      player: {
        x: W / 2, y: H - TILE - 30,
        vx: 0, vy: 0,
        w: 28, h: 34,
        onGround: false,
        facing: 1,
        invTimer: 0, flashTimer: 0,
        animFrame: 0, animTimer: 0,
        heldKey: null as string | null,
        jumpHeld: false,
      },
      camera: { x: 0, y: 0 },
      platforms: level.platforms,
      cages: level.cages,
      keys: level.keys,
      enemies: level.enemies,
      coins: level.coins,
      powerUps: level.powerUps,
      particles: [] as { x: number; y: number; vx: number; vy: number; life: number; maxL: number; color: string; sz: number }[],
      texts: [] as { x: number; y: number; text: string; color: string; life: number; maxL: number; vy: number; sz: number }[],
      score: 0, lives: 3,
      worldIdx: 0, levelInWorld: 0,
      totalPairsFreed: 0,
      pairLetters: level.pairLetters,
      combo: 0, comboTimer: 0,
      shieldTimer: 0, speedTimer: 0, magnetTimer: 0,
      boss: null,
      bossMode: false,
      levelComplete: false, levelCompleteTimer: 0,
      levelStartTimer: 120,
      levelTime: 0,
      shake: 0,
      time: 0, hudTick: 0,
      transition: null as { phase: string; timer: number } | null,
    };

    setHud({
      score: 0, lives: 3, world: 1, level: 1,
      keysCollected: [], totalPairs: level.pairLetters.length,
      combo: 0, bossActive: false, bossHP: 0, bossMaxHP: 0,
      shieldActive: false, speedActive: false, magnetActive: false,
      timeBonus: 0, msg: `${WORLDS[0].name} - Level 1`, msgTimer: 100,
    });
  }, []);

  // ========== LOAD LEVEL ==========
  function loadLevel(g: G, worldIdx: number, levelInWorld: number) {
    const world = WORLDS[worldIdx];
    const letters = world.letters;
    const maxLevels = Math.ceil(letters.length / 3);
    const isBoss = levelInWorld >= maxLevels;

    if (isBoss) {
      const bossData = generateBoss(worldIdx, g.W, g.H);
      g.platforms = bossData.platforms;
      g.cages = [];
      g.keys = [];
      g.enemies = [];
      g.coins = [];
      g.powerUps = [];
      g.boss = bossData.boss;
      g.bossMode = true;
      g.pairLetters = '';
    } else {
      const level = generateLevel(worldIdx, levelInWorld, g.W, g.H);
      if (!level) return;
      g.platforms = level.platforms;
      g.cages = level.cages;
      g.keys = level.keys;
      g.enemies = level.enemies;
      g.coins = level.coins;
      g.powerUps = level.powerUps;
      g.pairLetters = level.pairLetters;
      g.boss = null;
      g.bossMode = false;
    }

    g.player.x = g.W / 2;
    g.player.y = g.H - TILE - 30;
    g.player.vx = 0;
    g.player.vy = 0;
    g.player.heldKey = null;
    g.player.invTimer = INV_TIME;
    g.player.onGround = false;
    g.particles = [];
    g.texts = [];
    g.levelComplete = false;
    g.levelCompleteTimer = 0;
    g.levelStartTimer = 120;
    g.levelTime = 0;
    g.totalPairsFreed = 0;
    g.combo = 0;
    g.comboTimer = 0;
  }

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
  }, [screen, initGame]);

  // ========== UPDATE ==========
  function update(dt: number) {
    const g = gRef.current;
    if (!g) return;
    g.time += dt;
    if (g.shake > 0) { g.shake *= 0.88; if (g.shake < 0.3) g.shake = 0; }
    if (g.comboTimer > 0) { g.comboTimer -= dt; if (g.comboTimer <= 0) g.combo = 0; }

    // Timers
    if (g.shieldTimer > 0) g.shieldTimer -= dt;
    if (g.speedTimer > 0) g.speedTimer -= dt;
    if (g.magnetTimer > 0) g.magnetTimer -= dt;

    // Level start countdown
    if (g.levelStartTimer > 0) {
      g.levelStartTimer -= dt;
      return;
    }

    // Level complete transition
    if (g.levelComplete) {
      g.levelCompleteTimer -= dt;
      if (g.levelCompleteTimer <= 0) {
        advanceLevel(g);
      }
      return;
    }

    // Transition between worlds
    if (g.transition) {
      g.transition.timer -= dt;
      if (g.transition.timer <= 0) {
        g.transition = null;
      }
      return;
    }

    g.levelTime += dt;

    const k = keysRef.current;
    const t = touchRef.current;
    const p = g.player;

    // ---- Player input ----
    let moveX = 0;
    if (k['ArrowLeft'] || k['a'] || k['A'] || t.left) moveX -= 1;
    if (k['ArrowRight'] || k['d'] || k['D'] || t.right) moveX += 1;
    const jumpPressed = k[' '] || k['ArrowUp'] || k['w'] || k['W'] || t.jump;

    const speedMul = g.speedTimer > 0 ? 1.5 : 1;
    p.vx += moveX * 0.8 * speedMul;
    p.vx *= FRICTION;
    if (Math.abs(p.vx) > MOVE_SPEED * speedMul) p.vx = Math.sign(p.vx) * MOVE_SPEED * speedMul;
    if (Math.abs(p.vx) < 0.1) p.vx = 0;

    if (moveX !== 0) p.facing = moveX;

    // Jump
    if (jumpPressed && p.onGround && !p.jumpHeld) {
      p.vy = JUMP_FORCE;
      p.onGround = false;
      p.jumpHeld = true;
      // Jump dust
      for (let i = 0; i < 5; i++) {
        g.particles.push({ x: p.x, y: p.y + p.h / 2, vx: rand(-2, 2), vy: rand(-1, 0.5), life: 15, maxL: 15, color: '#d4c9a8', sz: rand(2, 4) });
      }
    }
    if (!jumpPressed) p.jumpHeld = false;

    // Variable jump height
    if (!jumpPressed && p.vy < -4) {
      p.vy *= 0.85;
    }

    // Gravity
    p.vy += GRAVITY * dt;
    if (p.vy > MAX_FALL) p.vy = MAX_FALL;

    // Move player
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    // Animation
    p.animTimer += dt;
    if (p.animTimer > 6) {
      p.animTimer = 0;
      p.animFrame = (p.animFrame + 1) % 4;
    }
    if (p.invTimer > 0) p.invTimer -= dt;
    if (p.flashTimer > 0) p.flashTimer -= dt;

    // Screen wrapping
    if (p.x < -p.w) p.x = g.W + p.w;
    if (p.x > g.W + p.w) p.x = -p.w;

    // ---- Platform collisions ----
    p.onGround = false;
    for (const plat of g.platforms) {
      let px = plat.x;
      let py = plat.y;

      // Moving platforms
      if (plat.moving) {
        const m = plat.moving;
        const offset = Math.sin(g.time * m.speed + m.phase) * m.range;
        if (m.axis === 'x') px = plat.x + offset;
        else py = plat.y + offset;
      }

      const platH = 12;
      // Check if player is above platform and falling
      if (p.vy >= 0 &&
        p.x + p.w / 2 > px && p.x - p.w / 2 < px + plat.w &&
        p.y + p.h / 2 > py && p.y + p.h / 2 < py + platH + p.vy * dt + 4) {
        p.y = py - p.h / 2;
        p.vy = 0;
        p.onGround = true;

        if (plat.type === 'spring') {
          p.vy = plat.springPower || -16;
          p.onGround = false;
          g.particles.push({ x: p.x, y: py, vx: 0, vy: -3, life: 20, maxL: 20, color: '#4ade80', sz: 6 });
        }

        if (plat.type === 'crumble') {
          if (plat.crumbleTimer === 0) plat.crumbleTimer = 45;
        }

        // Move with moving platform
        if (plat.moving && plat.moving.axis === 'x') {
          const m = plat.moving;
          const velOffset = Math.cos(g.time * m.speed + m.phase) * m.range * m.speed;
          p.x += velOffset * dt;
        }
      }
    }

    // Crumbling platforms
    g.platforms = g.platforms.filter((plat: G) => {
      if (plat.type === 'crumble' && plat.crumbleTimer > 0) {
        plat.crumbleTimer -= dt;
        if (plat.crumbleTimer <= 0) {
          for (let i = 0; i < 8; i++) {
            g.particles.push({ x: plat.x + rand(0, plat.w), y: plat.y, vx: rand(-2, 2), vy: rand(-3, 1), life: 25, maxL: 25, color: '#8B7355', sz: rand(3, 6) });
          }
          return false;
        }
      }
      return true;
    });

    // Fall death
    if (p.y > g.H + 50) {
      hitPlayer(g);
      p.x = g.W / 2;
      p.y = g.H - TILE - 30;
      p.vx = 0;
      p.vy = 0;
    }

    // ---- Key collection ----
    const magnetRange = g.magnetTimer > 0 ? 120 : 0;
    for (const key of g.keys) {
      if (key.collected) continue;
      key.bobT += dt * 0.08;

      if (magnetRange > 0) {
        const d = dist(p, key);
        if (d < magnetRange && d > 5) {
          const pull = 3;
          key.x += (p.x - key.x) / d * pull * dt;
          key.y += (p.y - key.y) / d * pull * dt;
        }
      }

      if (dist(p, key) < 28) {
        key.collected = true;
        p.heldKey = key.letter;
        g.score += 25;
        g.texts.push({ x: key.x, y: key.y - 20, text: `Got '${key.letter}'!`, color: '#ffd700', life: 50, maxL: 50, vy: -2, sz: 16 });
        for (let i = 0; i < 10; i++) {
          g.particles.push({ x: key.x, y: key.y, vx: rand(-3, 3), vy: rand(-3, 3), life: 20, maxL: 20, color: '#ffd700', sz: rand(2, 4) });
        }
      }
    }

    // ---- Cage freeing ----
    for (const cage of g.cages) {
      if (cage.freed) continue;
      if (p.heldKey && p.heldKey === cage.letter.toLowerCase() && dist(p, cage) < 40) {
        cage.freed = true;
        p.heldKey = null;
        g.totalPairsFreed++;
        g.combo++;
        g.comboTimer = COMBO_WINDOW;
        const comboMul = Math.min(g.combo, 5);
        const pts = 100 * comboMul;
        g.score += pts;
        g.shake = 8;
        g.texts.push({ x: cage.x, y: cage.y - 30, text: `${cage.letter}${cage.letter.toLowerCase()} FREED! +${pts}`, color: '#4ade80', life: 70, maxL: 70, vy: -1.5, sz: 20 });
        if (comboMul > 1) {
          g.texts.push({ x: cage.x, y: cage.y - 55, text: `${comboMul}x COMBO!`, color: '#c084fc', life: 50, maxL: 50, vy: -2, sz: 16 });
        }
        // Celebration particles
        for (let i = 0; i < 25; i++) {
          const angle = (i / 25) * Math.PI * 2;
          g.particles.push({
            x: cage.x, y: cage.y,
            vx: Math.cos(angle) * rand(2, 5),
            vy: Math.sin(angle) * rand(2, 5),
            life: 30, maxL: 30,
            color: ['#4ade80', '#ffd700', '#38bdf8', '#c084fc', '#ff6b6b'][i % 5],
            sz: rand(2, 5),
          });
        }

        // Check if level complete
        if (g.totalPairsFreed >= g.pairLetters.length) {
          g.levelComplete = true;
          const timeBonus = Math.max(0, Math.floor((3000 - g.levelTime) * 0.5));
          g.score += timeBonus;
          g.levelCompleteTimer = 150;
          g.texts.push({ x: g.W / 2, y: g.H / 2 - 30, text: 'LEVEL COMPLETE!', color: '#ffd700', life: 140, maxL: 140, vy: 0, sz: 32 });
          if (timeBonus > 0) {
            g.texts.push({ x: g.W / 2, y: g.H / 2 + 10, text: `Time Bonus: +${timeBonus}`, color: '#38bdf8', life: 120, maxL: 120, vy: 0, sz: 18 });
          }
        }
      }
    }

    // ---- Coin collection ----
    for (const coin of g.coins) {
      if (coin.collected) continue;
      coin.bobT += dt * 0.08;

      if (magnetRange > 0) {
        const d = dist(p, coin);
        if (d < magnetRange && d > 5) {
          coin.x += (p.x - coin.x) / d * 2.5 * dt;
          coin.y += (p.y - coin.y) / d * 2.5 * dt;
        }
      }

      if (dist(p, coin) < 22) {
        coin.collected = true;
        g.score += 10;
        for (let i = 0; i < 5; i++) {
          g.particles.push({ x: coin.x, y: coin.y, vx: rand(-2, 2), vy: rand(-3, 0), life: 12, maxL: 12, color: '#ffd700', sz: rand(1, 3) });
        }
      }
    }

    // ---- Power-up collection ----
    for (const pu of g.powerUps) {
      if (pu.collected) continue;
      pu.bobT += dt * 0.06;
      if (dist(p, pu) < 26) {
        pu.collected = true;
        if (pu.type.id === 'shield') g.shieldTimer = pu.type.duration;
        else if (pu.type.id === 'speed') g.speedTimer = pu.type.duration;
        else if (pu.type.id === 'magnet') g.magnetTimer = pu.type.duration;
        else if (pu.type.id === 'life') g.lives++;
        g.texts.push({ x: pu.x, y: pu.y - 20, text: pu.type.label, color: pu.type.color, life: 50, maxL: 50, vy: -2, sz: 18 });
        for (let i = 0; i < 12; i++) {
          g.particles.push({ x: pu.x, y: pu.y, vx: rand(-3, 3), vy: rand(-3, 3), life: 18, maxL: 18, color: pu.type.color, sz: rand(2, 4) });
        }
      }
    }

    // ---- Enemy update & collision ----
    for (const e of g.enemies) {
      if (!e.alive) continue;
      e.x += e.vx * dt;
      if (e.x < e.patrolLeft || e.x > e.patrolRight) {
        e.vx = -e.vx;
      }

      // Player collision with enemy
      if (p.invTimer <= 0 && dist(p, e) < 24) {
        // Check if stomping (player above enemy and falling)
        if (p.vy > 0 && p.y + p.h / 2 < e.y) {
          // Stomp!
          e.hp--;
          if (e.hp <= 0) {
            e.alive = false;
            g.score += 50;
            g.combo++;
            g.comboTimer = COMBO_WINDOW;
            g.texts.push({ x: e.x, y: e.y - 20, text: `+${50 * Math.min(g.combo, 5)}`, color: '#fb923c', life: 40, maxL: 40, vy: -2, sz: 16 });
            for (let i = 0; i < 12; i++) {
              g.particles.push({ x: e.x, y: e.y, vx: rand(-4, 4), vy: rand(-4, 1), life: 20, maxL: 20, color: '#ff6b6b', sz: rand(2, 5) });
            }
            // Drop a coin
            g.coins.push({ x: e.x, y: e.y, id: nextId(), collected: false, bobT: 0 });
          } else {
            e.hitFlash = 10;
            g.texts.push({ x: e.x, y: e.y - 20, text: 'HIT!', color: '#fb923c', life: 30, maxL: 30, vy: -2, sz: 14 });
          }
          p.vy = STOMP_BOUNCE;
        } else if (g.shieldTimer <= 0) {
          // Take damage
          hitPlayer(g);
        }
      }
    }

    // ---- Boss logic ----
    if (g.bossMode && g.boss) {
      const b = g.boss;
      if (b.phase === 'enter') {
        b.y += (120 - b.y) * 0.03 * dt;
        if (Math.abs(b.y - 120) < 3) {
          b.y = 120;
          b.phase = 'fight';
        }
      } else if (b.phase === 'fight') {
        b.angle += dt * 0.02;
        b.x = g.W / 2 + Math.sin(b.angle) * (g.W * 0.3);
        b.y = 100 + Math.sin(b.angle * 1.5) * 40;
        if (b.hitFlash > 0) b.hitFlash -= dt;

        // Throw scrambled letters
        b.shootTimer -= dt;
        if (b.shootTimer <= 0) {
          b.shootTimer = Math.max(40, 100 - g.worldIdx * 10);
          const isCorrect = Math.random() < 0.3;
          const targetLetter = b.targetLetters[b.currentTargetIdx];
          const letter = isCorrect ? targetLetter : String.fromCharCode(65 + randInt(0, 25));
          b.scrambledLetters.push({
            x: b.x, y: b.y + b.h / 2,
            vx: rand(-3, 3),
            vy: rand(1.5, 4),
            letter,
            correct: letter === targetLetter,
            id: nextId(),
            alive: true,
          });
        }

        // Update scrambled letters
        b.scrambledLetters = b.scrambledLetters.filter((sl: G) => {
          sl.x += sl.vx * dt;
          sl.y += sl.vy * dt;
          if (!sl.alive) return false;

          // Player catches letter
          if (dist(p, sl) < 28) {
            sl.alive = false;
            if (sl.correct) {
              b.hp--;
              b.hitFlash = 15;
              g.shake = 10;
              g.score += 200;
              g.texts.push({ x: sl.x, y: sl.y - 20, text: `Correct! ${sl.letter}`, color: '#4ade80', life: 50, maxL: 50, vy: -2, sz: 18 });
              for (let i = 0; i < 15; i++) {
                g.particles.push({ x: sl.x, y: sl.y, vx: rand(-4, 4), vy: rand(-4, 4), life: 20, maxL: 20, color: '#4ade80', sz: rand(2, 5) });
              }
              if (b.hp <= 0) {
                b.phase = 'dying';
                b.hitFlash = 0;
              } else {
                b.currentTargetIdx = (b.currentTargetIdx + 1) % b.targetLetters.length;
              }
            } else {
              if (p.invTimer <= 0 && g.shieldTimer <= 0) {
                hitPlayer(g);
              }
              g.texts.push({ x: sl.x, y: sl.y - 20, text: `Wrong! Need ${b.targetLetters[b.currentTargetIdx]}`, color: '#ef4444', life: 40, maxL: 40, vy: -2, sz: 14 });
            }
            return false;
          }

          return sl.y < g.H + 40 && sl.x > -40 && sl.x < g.W + 40;
        });
      } else if (b.phase === 'dying') {
        b.hitFlash += dt;
        if (b.hitFlash > 60) {
          for (let i = 0; i < 40; i++) {
            g.particles.push({
              x: b.x + rand(-60, 60), y: b.y + rand(-50, 50),
              vx: rand(-6, 6), vy: rand(-6, 6),
              life: 40, maxL: 40,
              color: ['#ff6b6b', '#ffd93d', '#4ade80', '#38bdf8'][randInt(0, 3)],
              sz: rand(3, 8),
            });
          }
          g.score += 1000 * (g.worldIdx + 1);
          g.shake = 20;
          g.texts.push({ x: g.W / 2, y: g.H / 2, text: `WORLD ${g.worldIdx + 1} COMPLETE!`, color: '#ffd700', life: 140, maxL: 140, vy: 0, sz: 32 });
          g.boss = null;
          g.levelComplete = true;
          g.levelCompleteTimer = 180;
        }
      }
    }

    // ---- Particles ----
    g.particles = g.particles.filter((pr: G) => {
      pr.x += pr.vx * dt;
      pr.y += pr.vy * dt;
      pr.vx *= 0.97;
      pr.vy *= 0.97;
      pr.life -= dt;
      return pr.life > 0;
    });

    // ---- Text effects ----
    g.texts = g.texts.filter((tx: G) => {
      tx.y += (tx.vy || 0) * dt;
      tx.life -= dt;
      return tx.life > 0;
    });

    // ---- HUD update ----
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      const collected = g.keys.filter((kk: G) => kk.collected).map((kk: G) => kk.letter);
      if (g.player.heldKey && !collected.includes(g.player.heldKey)) {
        collected.push(g.player.heldKey);
      }
      setHud({
        score: g.score, lives: g.lives,
        world: g.worldIdx + 1,
        level: g.levelInWorld + 1,
        keysCollected: collected,
        totalPairs: g.pairLetters ? g.pairLetters.length : 0,
        combo: g.combo,
        bossActive: g.bossMode && !!g.boss,
        bossHP: g.boss?.hp || 0, bossMaxHP: g.boss?.maxHP || 0,
        shieldActive: g.shieldTimer > 0,
        speedActive: g.speedTimer > 0,
        magnetActive: g.magnetTimer > 0,
        timeBonus: Math.max(0, Math.floor((3000 - g.levelTime) * 0.5)),
        msg: '', msgTimer: 0,
      });
    }

    // Game over
    if (g.lives <= 0) setScreen('gameover');
  }

  function hitPlayer(g: G) {
    if (g.shieldTimer > 0) {
      g.shieldTimer = 0;
      g.texts.push({ x: g.player.x, y: g.player.y - 30, text: 'SHIELD BROKE!', color: '#38bdf8', life: 40, maxL: 40, vy: -2, sz: 16 });
      return;
    }
    g.lives--;
    g.player.invTimer = INV_TIME;
    g.player.flashTimer = INV_TIME;
    g.shake = 12;
    g.combo = 0;
    for (let i = 0; i < 12; i++) {
      g.particles.push({
        x: g.player.x + rand(-10, 10), y: g.player.y + rand(-10, 10),
        vx: rand(-4, 4), vy: rand(-4, 4),
        life: 20, maxL: 20, color: '#ff6b6b', sz: rand(2, 4),
      });
    }
  }

  function advanceLevel(g: G) {
    const world = WORLDS[g.worldIdx];
    const maxLevels = Math.ceil(world.letters.length / 3);

    if (g.bossMode) {
      // Advance to next world
      g.worldIdx++;
      if (g.worldIdx >= WORLDS.length) {
        // Game complete!
        setScreen('victory');
        return;
      }
      g.levelInWorld = 0;
      g.bossMode = false;
    } else {
      g.levelInWorld++;
      if (g.levelInWorld >= maxLevels) {
        // Boss level
      }
    }

    loadLevel(g, g.worldIdx, g.levelInWorld);
    const worldName = WORLDS[g.worldIdx].name;
    const isBoss = g.bossMode;
    g.texts.push({
      x: g.W / 2, y: g.H / 2 - 30,
      text: isBoss ? `${worldName} BOSS!` : `${worldName} - Level ${g.levelInWorld + 1}`,
      color: '#ffd700', life: 100, maxL: 100, vy: 0, sz: 28,
    });
  }

  // ========== DRAW ==========
  function draw() {
    const g = gRef.current;
    const cvs = canvasRef.current;
    if (!g || !cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;
    const { W, H } = g;
    const world = WORLDS[g.worldIdx];
    const p = g.player;

    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    // ======= BACKGROUND - PARALLAX =======
    // Sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, world.bg1);
    skyGrad.addColorStop(0.5, world.bg2);
    skyGrad.addColorStop(1, world.bg3);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // Parallax layers
    for (let li = 0; li < g.bgLayers.length; li++) {
      const layer = g.bgLayers[li];
      const alpha = 0.15 + li * 0.1;
      ctx.globalAlpha = alpha;
      for (const obj of layer.objects) {
        const scrollX = (obj.x + g.time * layer.speed * 0.5) % (W + obj.size * 2) - obj.size;
        ctx.fillStyle = li === 0 ? 'rgba(255,255,255,0.3)' : li === 1 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
        if (obj.type === 0) {
          // Cloud
          drawCloud(ctx, scrollX, obj.y, obj.size);
        } else if (obj.type === 1) {
          // Hill
          drawHill(ctx, scrollX, obj.y + obj.size * 0.5, obj.size);
        } else {
          // Bush
          drawBush(ctx, scrollX, obj.y + obj.size * 0.3, obj.size * 0.6);
        }
      }
    }
    ctx.globalAlpha = 1;

    // ======= PLATFORMS =======
    for (const plat of g.platforms) {
      let px = plat.x;
      let py = plat.y;
      if (plat.moving) {
        const m = plat.moving;
        const offset = Math.sin(g.time * m.speed + m.phase) * m.range;
        if (m.axis === 'x') px = plat.x + offset;
        else py = plat.y + offset;
      }

      ctx.save();
      if (plat.type === 'crumble' && plat.crumbleTimer > 0) {
        ctx.globalAlpha = clamp(plat.crumbleTimer / 30, 0, 1);
        ctx.translate(rand(-2, 2), rand(-2, 2));
      }

      if (plat.type === 'ground') {
        // Ground
        const groundGrad = ctx.createLinearGradient(0, py, 0, py + TILE);
        groundGrad.addColorStop(0, '#5D8A3C');
        groundGrad.addColorStop(0.3, '#4A7A2E');
        groundGrad.addColorStop(1, world.platform);
        ctx.fillStyle = groundGrad;
        ctx.fillRect(px, py, plat.w, TILE);
        // Grass tufts
        ctx.fillStyle = '#6DB33F';
        for (let gx = px; gx < px + plat.w; gx += 8) {
          ctx.beginPath();
          ctx.moveTo(gx, py);
          ctx.lineTo(gx + 2, py - 4 - Math.sin(gx * 0.3 + g.time * 0.05) * 2);
          ctx.lineTo(gx + 4, py);
          ctx.fill();
        }
      } else {
        const platH = 12;
        const platGrad = ctx.createLinearGradient(px, py, px, py + platH);

        if (plat.type === 'spring') {
          platGrad.addColorStop(0, '#4ade80');
          platGrad.addColorStop(1, '#16a34a');
          ctx.fillStyle = platGrad;
          ctx.beginPath();
          ctx.roundRect(px, py, plat.w, platH, 4);
          ctx.fill();
          // Spring coil
          ctx.strokeStyle = '#ffd700';
          ctx.lineWidth = 2;
          const midX = px + plat.w / 2;
          const bounce = Math.sin(g.time * 0.15) * 3;
          ctx.beginPath();
          ctx.moveTo(midX - 6, py + platH);
          ctx.lineTo(midX - 4, py + platH + 4 + bounce);
          ctx.lineTo(midX + 4, py + platH + 4 + bounce);
          ctx.lineTo(midX + 6, py + platH);
          ctx.stroke();
        } else if (plat.type === 'moving') {
          platGrad.addColorStop(0, '#a78bfa');
          platGrad.addColorStop(1, '#7c3aed');
          ctx.fillStyle = platGrad;
          ctx.beginPath();
          ctx.roundRect(px, py, plat.w, platH, 4);
          ctx.fill();
          // Arrow indicators
          ctx.fillStyle = 'rgba(255,255,255,0.3)';
          const arrowY = py + platH / 2;
          drawArrow(ctx, px + 8, arrowY, plat.moving?.axis === 'x' ? 'h' : 'v');
          drawArrow(ctx, px + plat.w - 8, arrowY, plat.moving?.axis === 'x' ? 'h' : 'v');
        } else if (plat.type === 'crumble') {
          platGrad.addColorStop(0, '#9CA3AF');
          platGrad.addColorStop(1, '#6B7280');
          ctx.fillStyle = platGrad;
          ctx.beginPath();
          ctx.roundRect(px, py, plat.w, platH, 4);
          ctx.fill();
          // Crack lines
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(px + plat.w * 0.3, py + 2);
          ctx.lineTo(px + plat.w * 0.5, py + platH - 2);
          ctx.stroke();
        } else {
          platGrad.addColorStop(0, world.platform);
          platGrad.addColorStop(1, darkenColor(world.platform, 0.3));
          ctx.fillStyle = platGrad;
          ctx.beginPath();
          ctx.roundRect(px, py, plat.w, platH, 4);
          ctx.fill();
          // Top highlight
          ctx.fillStyle = 'rgba(255,255,255,0.15)';
          ctx.beginPath();
          ctx.roundRect(px + 2, py, plat.w - 4, 3, [2, 2, 0, 0]);
          ctx.fill();
        }
      }
      ctx.restore();
    }

    // ======= CAGES =======
    for (const cage of g.cages) {
      ctx.save();
      ctx.translate(cage.x, cage.y);

      if (cage.freed) {
        // Freed letter - floating celebration
        const floatY = Math.sin(g.time * 0.08 + cage.id) * 5;
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = '#4ade80';
        ctx.shadowColor = '#4ade80';
        ctx.shadowBlur = 12;
        ctx.font = 'bold 24px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cage.letter, 0, floatY);
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText(cage.letter.toLowerCase(), 14, floatY + 14);
        ctx.shadowBlur = 0;
      } else {
        // Cage glow
        const glowPulse = 0.3 + Math.sin(g.time * 0.08) * 0.15;
        const cageGlow = ctx.createRadialGradient(0, 0, 5, 0, 0, 35);
        cageGlow.addColorStop(0, `rgba(255,215,0,${glowPulse})`);
        cageGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = cageGlow;
        ctx.beginPath();
        ctx.arc(0, 0, 35, 0, Math.PI * 2);
        ctx.fill();

        // Cage bars
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 2.5;
        const cw = 30, ch = 34;
        // Outer frame
        ctx.strokeRect(-cw / 2, -ch / 2, cw, ch);
        // Vertical bars
        for (let bar = -cw / 2 + 6; bar < cw / 2; bar += 6) {
          ctx.beginPath();
          ctx.moveTo(bar, -ch / 2);
          ctx.lineTo(bar, ch / 2);
          ctx.stroke();
        }
        // Cross bar
        ctx.beginPath();
        ctx.moveTo(-cw / 2, 0);
        ctx.lineTo(cw / 2, 0);
        ctx.stroke();

        // Letter inside cage
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(255,255,255,0.5)';
        ctx.shadowBlur = 8;
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(cage.letter, 0, 0);
        ctx.shadowBlur = 0;
      }
      ctx.restore();
    }

    // ======= KEYS =======
    for (const key of g.keys) {
      if (key.collected) continue;
      ctx.save();
      const bobY = Math.sin(key.bobT * 3) * 4;
      ctx.translate(key.x, key.y + bobY);

      // Key glow
      const keyGlow = ctx.createRadialGradient(0, 0, 3, 0, 0, 20);
      keyGlow.addColorStop(0, 'rgba(255,215,0,0.4)');
      keyGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = keyGlow;
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.fill();

      // Key shape
      ctx.fillStyle = '#ffd700';
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 1.5;
      // Key head (circle)
      ctx.beginPath();
      ctx.arc(-5, 0, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Key shaft
      ctx.fillRect(-2, -2, 16, 4);
      ctx.strokeRect(-2, -2, 16, 4);
      // Key teeth
      ctx.fillRect(10, 2, 3, 4);
      ctx.fillRect(7, 2, 3, 3);

      // Letter on key
      ctx.fillStyle = '#8B4513';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(key.letter, -5, 0);

      ctx.restore();
    }

    // ======= COINS =======
    for (const coin of g.coins) {
      if (coin.collected) continue;
      ctx.save();
      const bobY = Math.sin(coin.bobT * 3) * 3;
      ctx.translate(coin.x, coin.y + bobY);

      // Coin spin effect
      const scaleX = Math.abs(Math.cos(g.time * 0.1 + coin.id));
      ctx.scale(scaleX, 1);

      // Coin body
      ctx.fillStyle = '#ffd700';
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Letter on coin
      if (scaleX > 0.3) {
        ctx.fillStyle = '#8B4513';
        ctx.font = 'bold 8px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('A', 0, 0);
      }

      ctx.restore();
    }

    // ======= POWER-UPS =======
    for (const pu of g.powerUps) {
      if (pu.collected) continue;
      ctx.save();
      const bobY = Math.sin(pu.bobT * 3) * 5;
      ctx.translate(pu.x, pu.y + bobY);

      // Glow
      const puGlow = ctx.createRadialGradient(0, 0, 3, 0, 0, 22);
      puGlow.addColorStop(0, pu.type.color + '60');
      puGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = puGlow;
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 2);
      ctx.fill();

      // Box
      ctx.fillStyle = pu.type.color;
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-10, -10, 20, 20, 5);
      ctx.fill();
      ctx.stroke();

      // Icon
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const icons: Record<string, string> = { shield: 'S', speed: 'F', magnet: 'M', life: '+' };
      ctx.fillText(icons[pu.type.id] || '?', 0, 0);

      ctx.restore();
    }

    // ======= ENEMIES =======
    for (const e of g.enemies) {
      if (!e.alive) continue;
      ctx.save();
      ctx.translate(e.x, e.y);

      // Enemy glow
      ctx.fillStyle = 'rgba(255,60,60,0.15)';
      ctx.beginPath();
      ctx.arc(0, 0, 22, 0, Math.PI * 2);
      ctx.fill();

      // Jagged body
      const er = 16;
      const spikes = 7;
      const bodyGrad = ctx.createRadialGradient(0, -3, 0, 0, 0, er);
      bodyGrad.addColorStop(0, (e as G).hitFlash > 0 ? '#fff' : '#ff4444');
      bodyGrad.addColorStop(1, (e as G).hitFlash > 0 ? '#ff8888' : '#8B0000');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
        const rad = i % 2 === 0 ? er * 1.2 : er * 0.7;
        if (i === 0) ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
        else ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
      }
      ctx.closePath();
      ctx.fill();

      // Angry eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-5, -3, 4, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(5, -3, 4, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      // Pupils
      ctx.fillStyle = '#000';
      const pupilDir = e.vx > 0 ? 1 : -1;
      ctx.beginPath();
      ctx.arc(-5 + pupilDir * 1.5, -3, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(5 + pupilDir * 1.5, -3, 2, 0, Math.PI * 2);
      ctx.fill();
      // Angry brow
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-8, -7);
      ctx.lineTo(-3, -5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(8, -7);
      ctx.lineTo(3, -5);
      ctx.stroke();

      // Mirrored/scrambled letter
      ctx.save();
      if (e.mirrored) ctx.scale(-1, 1);
      ctx.rotate(Math.sin(g.time * 0.05 + e.id) * 0.3);
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(e.letter, 0, 5);
      ctx.restore();

      if ((e as G).hitFlash > 0) (e as G).hitFlash -= 1;

      ctx.restore();
    }

    // ======= BOSS =======
    if (g.bossMode && g.boss) {
      const b = g.boss;
      ctx.save();
      ctx.translate(b.x, b.y);

      if (b.phase === 'dying') {
        ctx.globalAlpha = clamp(1 - b.hitFlash / 60, 0, 1);
      }

      // Boss body
      const bw = b.w / 2, bh = b.h / 2;
      const bossGrad = ctx.createRadialGradient(0, -bh * 0.3, 0, 0, 0, bw);
      bossGrad.addColorStop(0, b.hitFlash > 0 && b.phase !== 'dying' ? '#fff' : '#cc0000');
      bossGrad.addColorStop(1, '#4a0000');
      ctx.fillStyle = bossGrad;
      ctx.strokeStyle = b.hitFlash > 0 ? '#ffd700' : '#ff4444';
      ctx.lineWidth = 3;

      // Spiky body shape
      ctx.beginPath();
      const pts = 12;
      for (let i = 0; i < pts; i++) {
        const a = (i / pts) * Math.PI * 2 - Math.PI / 2;
        const rad = i % 2 === 0 ? bw * 1.1 : bw * 0.75;
        if (i === 0) ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
        else ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Boss eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-bw * 0.3, -bh * 0.15, 10, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(bw * 0.3, -bh * 0.15, 10, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ff0000';
      ctx.beginPath();
      ctx.arc(-bw * 0.3, -bh * 0.15, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(bw * 0.3, -bh * 0.15, 5, 0, Math.PI * 2);
      ctx.fill();

      // Angry brows
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-bw * 0.5, -bh * 0.4);
      ctx.lineTo(-bw * 0.15, -bh * 0.25);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bw * 0.5, -bh * 0.4);
      ctx.lineTo(bw * 0.15, -bh * 0.25);
      ctx.stroke();

      // Mouth
      ctx.fillStyle = '#300';
      ctx.beginPath();
      ctx.ellipse(0, bh * 0.15, bw * 0.3, bh * 0.2, 0, 0, Math.PI);
      ctx.fill();

      // Target letter display
      if (b.phase === 'fight') {
        const targetLetter = b.targetLetters[b.currentTargetIdx];
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = 'rgba(255,215,0,0.8)';
        ctx.shadowBlur = 12;
        ctx.font = 'bold 28px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(targetLetter, 0, -bh * 0.5 - 20);
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px sans-serif';
        ctx.fillText('CATCH THIS!', 0, -bh * 0.5 - 38);
      }

      // HP bar
      if (b.phase !== 'dying') {
        const hpW = b.w * 0.8, hpH = 6;
        const hpY = bh + 15;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.roundRect(-hpW / 2, hpY, hpW, hpH, 3);
        ctx.fill();
        const hpRatio = b.hp / b.maxHP;
        const hpGrad = ctx.createLinearGradient(-hpW / 2, 0, hpW / 2, 0);
        hpGrad.addColorStop(0, '#ef4444');
        hpGrad.addColorStop(1, '#f97316');
        ctx.fillStyle = hpGrad;
        ctx.beginPath();
        ctx.roundRect(-hpW / 2, hpY, hpW * hpRatio, hpH, 3);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.restore();

      // Scrambled letters thrown by boss
      for (const sl of b.scrambledLetters) {
        if (!sl.alive) continue;
        ctx.save();
        ctx.translate(sl.x, sl.y);
        ctx.rotate(g.time * 0.1 + sl.id);

        // Glow
        ctx.fillStyle = sl.correct ? 'rgba(74,222,128,0.3)' : 'rgba(255,100,100,0.3)';
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fill();

        // Letter circle
        ctx.fillStyle = sl.correct ? '#1a472a' : '#4a0000';
        ctx.strokeStyle = sl.correct ? '#4ade80' : '#ff4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Letter (scrambled appearance)
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (!sl.correct) ctx.scale(-1, 1); // mirror wrong letters
        ctx.fillText(sl.letter, 0, 0);

        ctx.restore();
      }
    }

    // ======= PLAYER =======
    if (!(p.flashTimer > 0 && Math.floor(p.flashTimer) % 6 < 3)) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(p.facing, 1);

      // Shield bubble
      if (g.shieldTimer > 0) {
        const shieldPulse = 24 + Math.sin(g.time * 0.15) * 3;
        ctx.strokeStyle = `rgba(56,189,248,${0.3 + Math.sin(g.time * 0.1) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, shieldPulse, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Speed lines
      if (g.speedTimer > 0) {
        ctx.strokeStyle = 'rgba(74,222,128,0.4)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 3; i++) {
          const ly = -8 + i * 8;
          ctx.beginPath();
          ctx.moveTo(-18 - rand(0, 8), ly);
          ctx.lineTo(-10, ly);
          ctx.stroke();
        }
      }

      // Body - round cute character
      const bodyR = 14;
      const bodyGrad = ctx.createRadialGradient(-2, -4, 0, 0, 0, bodyR);
      bodyGrad.addColorStop(0, '#FFB347');
      bodyGrad.addColorStop(1, '#FF8C00');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bodyR, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#CC6600';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Belly
      ctx.fillStyle = '#FFD89B';
      ctx.beginPath();
      ctx.ellipse(0, 3, 8, 7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(3, -4, 5, 5.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(-4, -4, 4, 4.5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Pupils
      ctx.fillStyle = '#222';
      ctx.beginPath();
      ctx.arc(4, -3.5, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-3.5, -3.5, 2, 0, Math.PI * 2);
      ctx.fill();
      // Eye highlights
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(5, -5, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(-2.5, -5, 0.8, 0, Math.PI * 2);
      ctx.fill();

      // Mouth
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (p.onGround) {
        // Happy smile
        ctx.arc(1, 1, 4, 0.1, Math.PI - 0.1);
      } else {
        // Surprised O when jumping
        ctx.arc(1, 2, 3, 0, Math.PI * 2);
      }
      ctx.stroke();

      // Legs (animation)
      ctx.fillStyle = '#CC6600';
      const legOffset = p.onGround && Math.abs(p.vx) > 0.5 ? Math.sin(p.animFrame * Math.PI / 2) * 5 : 0;
      // Left leg
      ctx.beginPath();
      ctx.ellipse(-5, bodyR - 2 + Math.abs(legOffset), 4, 5, legOffset * 0.05, 0, Math.PI * 2);
      ctx.fill();
      // Right leg
      ctx.beginPath();
      ctx.ellipse(5, bodyR - 2 + Math.abs(-legOffset), 4, 5, -legOffset * 0.05, 0, Math.PI * 2);
      ctx.fill();

      // Held key indicator
      if (p.heldKey) {
        const keyBob = Math.sin(g.time * 0.12) * 2;
        ctx.fillStyle = '#ffd700';
        ctx.strokeStyle = '#B8860B';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, -bodyR - 10 + keyBob, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#8B4513';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.heldKey, 0, -bodyR - 10 + keyBob);
      }

      // Magnet effect
      if (g.magnetTimer > 0) {
        ctx.strokeStyle = 'rgba(192,132,252,0.4)';
        ctx.lineWidth = 1;
        const magR = 30 + Math.sin(g.time * 0.1) * 5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(0, 0, magR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      ctx.restore();
    }

    // ======= PARTICLES =======
    for (const pr of g.particles) {
      const a = pr.life / pr.maxL;
      ctx.globalAlpha = a;
      ctx.fillStyle = pr.color;
      ctx.beginPath();
      ctx.arc(pr.x, pr.y, pr.sz * a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ======= TEXT EFFECTS =======
    for (const tx of g.texts) {
      const a = Math.min(1, tx.life / (tx.maxL * 0.3));
      ctx.globalAlpha = a;
      ctx.fillStyle = tx.color;
      ctx.font = `bold ${tx.sz}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 4;
      ctx.fillText(tx.text, tx.x, tx.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    // ======= LEVEL START OVERLAY =======
    if (g.levelStartTimer > 0) {
      ctx.fillStyle = `rgba(0,0,0,${clamp(g.levelStartTimer / 60, 0, 0.6)})`;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const worldName = WORLDS[g.worldIdx].name;
      ctx.fillText(g.bossMode ? `${worldName} BOSS!` : `${worldName}`, W / 2, H / 2 - 30);
      ctx.font = 'bold 22px sans-serif';
      ctx.fillStyle = '#ffd700';
      if (!g.bossMode) {
        ctx.fillText(`Level ${g.levelInWorld + 1}`, W / 2, H / 2 + 10);
        ctx.font = '16px sans-serif';
        ctx.fillStyle = '#aaa';
        ctx.fillText(`Free letters: ${g.pairLetters.split('').join(', ')}`, W / 2, H / 2 + 45);
      } else {
        ctx.fillText('Defeat the Word Scrambler!', W / 2, H / 2 + 10);
      }
    }

    ctx.restore();
  }

  // ========== HELPER DRAW FUNCTIONS ==========
  function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    const r = size * 0.25;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.arc(x + r * 0.8, y - r * 0.4, r * 0.7, 0, Math.PI * 2);
    ctx.arc(x + r * 1.5, y, r * 0.8, 0, Math.PI * 2);
    ctx.arc(x + r * 0.5, y + r * 0.3, r * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawHill(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.quadraticCurveTo(x, y - size * 0.6, x + size, y);
    ctx.fill();
  }

  function drawBush(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
    ctx.beginPath();
    ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
    ctx.arc(x + size * 0.2, y - size * 0.15, size * 0.25, 0, Math.PI * 2);
    ctx.arc(x - size * 0.15, y - size * 0.1, size * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawArrow(ctx: CanvasRenderingContext2D, x: number, y: number, dir: string) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    if (dir === 'h') {
      ctx.beginPath();
      ctx.moveTo(-4, 0);
      ctx.lineTo(0, -3);
      ctx.lineTo(0, 3);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(4, 0);
      ctx.lineTo(0, -3);
      ctx.lineTo(0, 3);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(0, -4);
      ctx.lineTo(-3, 0);
      ctx.lineTo(3, 0);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, 4);
      ctx.lineTo(-3, 0);
      ctx.lineTo(3, 0);
      ctx.fill();
    }
    ctx.restore();
  }

  function darkenColor(hex: string, amount: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = Math.max(0, (num >> 16) - Math.floor(256 * amount));
    const g = Math.max(0, ((num >> 8) & 0xff) - Math.floor(256 * amount));
    const b = Math.max(0, (num & 0xff) - Math.floor(256 * amount));
    return `rgb(${r},${g},${b})`;
  }

  // ========== INPUT ==========
  useEffect(() => {
    const kd = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    };
    const ku = (e: KeyboardEvent) => { keysRef.current[e.key] = false; };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku); };
  }, []);

  // ========== TOUCH INPUT ==========
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    // Touch areas: left third = left, right third = right, middle = jump
    const ts = (e: TouchEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      touchRef.current = { left: false, right: false, jump: false };
      for (let i = 0; i < e.touches.length; i++) {
        const tx = e.touches[i].clientX - rect.left;
        const ty = e.touches[i].clientY - rect.top;
        const xPct = tx / rect.width;
        const yPct = ty / rect.height;
        if (yPct > 0.7) {
          // Bottom area - movement
          if (xPct < 0.35) touchRef.current.left = true;
          else if (xPct > 0.65) touchRef.current.right = true;
          else touchRef.current.jump = true;
        } else {
          touchRef.current.jump = true;
        }
      }
    };
    const te = () => { touchRef.current = { left: false, right: false, jump: false }; };
    el.addEventListener('touchstart', ts, { passive: false });
    el.addEventListener('touchmove', ts, { passive: false });
    el.addEventListener('touchend', te);
    el.addEventListener('touchcancel', te);
    return () => {
      el.removeEventListener('touchstart', ts);
      el.removeEventListener('touchmove', ts);
      el.removeEventListener('touchend', te);
      el.removeEventListener('touchcancel', te);
    };
  }, [screen]);

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="ll-root">
        <style>{styles}</style>
        <div className="ll-intro">
          <div className="ll-intro-bg" />
          <div className="ll-intro-body">
            <div className="ll-logo-wrap">
              <div className="ll-logo-deco ll-logo-deco-l" />
              <div className="ll-logo-stack">
                <h1 className="ll-title">LETTER LAND</h1>
                <p className="ll-subtitle">ALPHABET ADVENTURE</p>
              </div>
              <div className="ll-logo-deco ll-logo-deco-r" />
            </div>

            <div className="ll-card">
              <div className="ll-card-header">
                <div className="ll-card-line" />
                <span>HOW TO PLAY</span>
                <div className="ll-card-line" />
              </div>
              <div className="ll-rules">
                <div className="ll-rule" style={{ '--rc': '#ffd700' } as React.CSSProperties}>
                  <span className="ll-rule-icon">{'🔑'}</span>
                  <div className="ll-rule-body"><strong>COLLECT KEYS</strong><span>Find lowercase letter keys floating on platforms</span></div>
                </div>
                <div className="ll-rule" style={{ '--rc': '#4ade80' } as React.CSSProperties}>
                  <span className="ll-rule-icon">{'🔓'}</span>
                  <div className="ll-rule-body"><strong>FREE LETTERS</strong><span>Bring matching key to caged uppercase letter</span></div>
                </div>
                <div className="ll-rule" style={{ '--rc': '#ff6b6b' } as React.CSSProperties}>
                  <span className="ll-rule-icon">{'👾'}</span>
                  <div className="ll-rule-body"><strong>STOMP ENEMIES</strong><span>Jump on scrambled letters to defeat them</span></div>
                </div>
                <div className="ll-rule" style={{ '--rc': '#c084fc' } as React.CSSProperties}>
                  <span className="ll-rule-icon">{'⭐'}</span>
                  <div className="ll-rule-body"><strong>EARN COMBOS</strong><span>Free letters consecutively for score multiplier</span></div>
                </div>
              </div>
              <div className="ll-worlds-preview">
                {WORLDS.map((w, i) => (
                  <span key={i} className="ll-world-badge" style={{ background: w.bg1, color: '#fff' }}>
                    {w.name}: {w.letters}
                  </span>
                ))}
              </div>
            </div>

            <div className="ll-controls">
              <div className="ll-ctrl"><kbd>{'←→'}</kbd> <span className="ll-ctrl-sep">/</span> <kbd>AD</kbd> <span className="ll-ctrl-label">Move</span></div>
              <div className="ll-ctrl"><kbd>Space</kbd> <span className="ll-ctrl-sep">/</span> <kbd>{'↑'}</kbd> <span className="ll-ctrl-label">Jump</span></div>
            </div>

            <button className="ll-start-btn" onClick={() => setScreen('playing')}>
              START ADVENTURE
              <span className="ll-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalWorld = (gRef.current?.worldIdx || 0) + 1;
    return (
      <div className="ll-root">
        <style>{styles}</style>
        <div className="ll-gameover">
          <div className="ll-intro-bg" />
          <div className="ll-go-body">
            <h1 className="ll-go-title">GAME OVER</h1>
            <div className="ll-go-stats">
              <div className="ll-go-stat">
                <span className="ll-go-label">SCORE</span>
                <span className="ll-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="ll-go-divider" />
              <div className="ll-go-stat">
                <span className="ll-go-label">WORLD</span>
                <span className="ll-go-val">{finalWorld}</span>
              </div>
            </div>
            <div className="ll-go-btns">
              <button className="ll-start-btn" onClick={() => setScreen('playing')}>
                TRY AGAIN
                <span className="ll-btn-shine" />
              </button>
              <button className="ll-menu-btn" onClick={() => setScreen('intro')}>Back to Menu</button>
              {onExit && <button className="ll-menu-btn" onClick={onExit}>Exit Game</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'victory') {
    const finalScore = gRef.current?.score || 0;
    return (
      <div className="ll-root">
        <style>{styles}</style>
        <div className="ll-victory">
          <div className="ll-intro-bg" />
          <div className="ll-go-body">
            <h1 className="ll-victory-title">YOU WIN!</h1>
            <p className="ll-victory-sub">All letters freed across every world!</p>
            <div className="ll-go-stats">
              <div className="ll-go-stat">
                <span className="ll-go-label">FINAL SCORE</span>
                <span className="ll-go-val">{finalScore.toLocaleString()}</span>
              </div>
            </div>
            <div className="ll-go-btns">
              <button className="ll-start-btn" onClick={() => setScreen('playing')}>
                PLAY AGAIN
                <span className="ll-btn-shine" />
              </button>
              <button className="ll-menu-btn" onClick={() => setScreen('intro')}>Back to Menu</button>
              {onExit && <button className="ll-menu-btn" onClick={onExit}>Exit Game</button>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="ll-root">
      <style>{styles}</style>
      <div className="ll-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="ll-canvas" />

        {/* HUD Overlay */}
        <div className="ll-hud-top">
          <div className="ll-hud-left">
            <div className="ll-wave-badge">
              <span className="ll-wave-label">WORLD</span>
              <span className="ll-wave-num">{hud.world}</span>
            </div>
            <div className="ll-level-badge">Lv {hud.level}</div>
            <div className="ll-lives">
              {[...Array(Math.max(0, hud.lives))].map((_, i) => (
                <span key={i} className="ll-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="ll-hud-center">
            {hud.keysCollected.length > 0 && (
              <div className="ll-key-display">
                <span className="ll-key-label">KEY</span>
                <span className="ll-key-letter">{hud.keysCollected[hud.keysCollected.length - 1]}</span>
              </div>
            )}
            <div className="ll-progress-bar">
              <div className="ll-progress-fill" style={{ width: `${(hud.totalPairs > 0 ? (hud.keysCollected.filter((_, i) => i < hud.totalPairs).length / hud.totalPairs) : 0) * 100}%` }} />
              <span className="ll-progress-text">{Math.min(hud.keysCollected.length, hud.totalPairs)}/{hud.totalPairs}</span>
            </div>
          </div>
          <div className="ll-hud-right">
            <div className="ll-score-badge">{hud.score.toLocaleString()}</div>
            {hud.combo > 1 && <div className="ll-combo">{hud.combo}x</div>}
            {hud.shieldActive && <div className="ll-effect-badge ll-eff-shield">SHIELD</div>}
            {hud.speedActive && <div className="ll-effect-badge ll-eff-speed">SPEED</div>}
            {hud.magnetActive && <div className="ll-effect-badge ll-eff-magnet">MAGNET</div>}
          </div>
        </div>

        {/* Boss HP overlay */}
        {hud.bossActive && (
          <div className="ll-boss-hud">
            <div className="ll-boss-label">WORD SCRAMBLER</div>
            <div className="ll-boss-bar-bg">
              <div className="ll-boss-bar-fill" style={{ width: `${(hud.bossHP / hud.bossMaxHP) * 100}%` }} />
            </div>
          </div>
        )}

        {/* Mobile touch controls hint */}
        <div className="ll-touch-hint">
          <div className="ll-touch-area ll-touch-left">{'←'}</div>
          <div className="ll-touch-area ll-touch-mid">JUMP</div>
          <div className="ll-touch-area ll-touch-right">{'→'}</div>
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============
const styles = `
* { box-sizing: border-box; margin: 0; padding: 0; }

.ll-root {
  width: 100%; height: 100%;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  overflow: hidden;
  background: #1a1a2e;
  color: #e0e0e0;
}

/* ===== SHARED ===== */
.ll-intro, .ll-gameover, .ll-victory {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.ll-intro-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(135,206,235,0.2) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(74,222,128,0.12) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(255,215,0,0.08) 0%, transparent 50%),
    #1a1a2e;
}

/* ===== INTRO ===== */
.ll-intro-body, .ll-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 1.5rem; max-width: 520px; width: 100%;
  animation: llFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes llFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.ll-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.ll-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, #4ade80, transparent);
  opacity: 0.5;
}
.ll-logo-stack { display: flex; flex-direction: column; align-items: center; }
.ll-title {
  font-size: clamp(2rem, 7vw, 3rem);
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 0 40px rgba(74,222,128,0.3), 0 2px 0 #2d6a2e;
  animation: llTitleGlow 4s ease-in-out infinite alternate;
}
@keyframes llTitleGlow {
  0% { text-shadow: 0 0 40px rgba(74,222,128,0.3), 0 2px 0 #2d6a2e; }
  50% { text-shadow: 0 0 50px rgba(255,215,0,0.35), 0 2px 0 #8B6914; }
  100% { text-shadow: 0 0 40px rgba(56,189,248,0.3), 0 2px 0 #1a5276; }
}
.ll-subtitle {
  font-size: 0.85rem; font-weight: 600;
  color: #94a3b8; letter-spacing: 6px;
  text-transform: uppercase; margin-top: 0.3rem;
}

/* Card */
.ll-card {
  background: rgba(10,15,30,0.7);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(74,222,128,0.15);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left;
}
.ll-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-size: 0.7rem; font-weight: 700;
  color: #94a3b8; letter-spacing: 3px;
  text-transform: uppercase;
}
.ll-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(74,222,128,0.2), transparent);
}
.ll-rules {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;
}
.ll-rule {
  display: flex; align-items: center; gap: 0.5rem;
  padding: 0.45rem 0.6rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px;
}
.ll-rule-icon {
  flex-shrink: 0; width: 28px; height: 28px; border-radius: 7px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem;
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.ll-rule-body {
  display: flex; flex-direction: column; gap: 0.05rem;
  font-size: 0.72rem; line-height: 1.3;
}
.ll-rule-body strong {
  font-size: 0.68rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.ll-rule-body span { color: #94a3b8; font-size: 0.66rem; }

.ll-worlds-preview {
  display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.8rem;
  justify-content: center;
}
.ll-world-badge {
  padding: 0.2rem 0.6rem; border-radius: 12px;
  font-size: 0.6rem; font-weight: 700; letter-spacing: 0.5px;
  opacity: 0.8;
}

/* Controls */
.ll-controls {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem;
  margin-bottom: 1.5rem;
}
.ll-ctrl {
  display: flex; align-items: center; gap: 0.25rem;
  font-size: 0.78rem; color: #94a3b8;
}
.ll-ctrl-sep { opacity: 0.3; }
.ll-ctrl-label {
  font-weight: 600; letter-spacing: 1px;
  font-size: 0.7rem; text-transform: uppercase;
  color: #64748b;
}
.ll-ctrl kbd {
  padding: 0.2rem 0.45rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-bottom-width: 2px;
  border-radius: 5px;
  font-family: monospace; font-size: 0.7rem;
  color: #7a8ba8;
}

/* CTA button */
.ll-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.5rem; padding: 0.85rem 2.5rem;
  font-size: 0.9rem; font-weight: 800;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #16a34a, #15803d);
  border: 1px solid rgba(74,222,128,0.4);
  border-radius: 12px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow: 0 4px 24px rgba(22,163,74,0.3);
  transition: all 0.3s;
  font-family: inherit;
}
.ll-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(22,163,74,0.5);
}
.ll-start-btn:active { transform: translateY(0); }
.ll-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: llBtnShine 3s ease-in-out infinite;
}
@keyframes llBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* ===== GAME OVER ===== */
.ll-go-title {
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.ll-victory-title {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 900; color: #ffd700;
  margin-bottom: 0.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(255,215,0,0.4);
}
.ll-victory-sub {
  font-size: 1rem; color: #94a3b8; margin-bottom: 1.5rem;
}
.ll-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 2rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(10,15,30,0.7);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}
.ll-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent);
}
.ll-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.ll-go-label {
  font-size: 0.65rem; font-weight: 700;
  color: #64748b; letter-spacing: 3px; text-transform: uppercase;
}
.ll-go-val {
  font-size: 1.8rem; font-weight: 900; color: white;
}
.ll-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.ll-menu-btn {
  padding: 0.6rem 1.8rem;
  font-size: 0.8rem; font-weight: 600; color: #94a3b8;
  background: transparent; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; cursor: pointer;
  transition: all 0.25s; letter-spacing: 1px;
  font-family: inherit;
}
.ll-menu-btn:hover {
  border-color: rgba(255,255,255,0.2); color: #e0e0e0;
  background: rgba(255,255,255,0.03);
}

/* ===== GAME ===== */
.ll-game {
  width: 100%; height: 100%; position: relative; overflow: hidden;
  cursor: default; touch-action: none;
}
.ll-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.ll-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.ll-hud-left, .ll-hud-right {
  display: flex; align-items: center; gap: 0.4rem;
}
.ll-hud-right { flex-direction: column; align-items: flex-end; gap: 0.25rem; }
.ll-hud-center { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.ll-wave-badge {
  display: flex; align-items: center; gap: 0.3rem;
  padding: 0.25rem 0.6rem;
  background: rgba(74,222,128,0.15);
  border: 1px solid rgba(74,222,128,0.25);
  border-radius: 8px;
}
.ll-wave-label {
  font-size: 0.5rem; font-weight: 700;
  color: #4ade80; letter-spacing: 2px;
  text-transform: uppercase; opacity: 0.7;
}
.ll-wave-num {
  font-size: 0.85rem; font-weight: 900; color: #fff;
}
.ll-level-badge {
  font-size: 0.65rem; font-weight: 700;
  color: #ffd700; letter-spacing: 1px;
  padding: 0.15rem 0.5rem;
  background: rgba(255,215,0,0.1);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 6px;
}
.ll-lives { display: flex; gap: 0.25rem; align-items: center; }
.ll-heart {
  display: flex; align-items: center;
  filter: drop-shadow(0 0 4px rgba(239,68,68,0.5));
}
.ll-key-display {
  display: flex; align-items: center; gap: 0.3rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255,215,0,0.15);
  border: 1px solid rgba(255,215,0,0.3);
  border-radius: 8px;
}
.ll-key-label {
  font-size: 0.5rem; font-weight: 700;
  color: #ffd700; letter-spacing: 1px;
}
.ll-key-letter {
  font-size: 1rem; font-weight: 900; color: #ffd700;
}
.ll-progress-bar {
  width: 100px; height: 8px; position: relative;
  background: rgba(255,255,255,0.1);
  border-radius: 4px; overflow: hidden;
}
.ll-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22c55e);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.ll-progress-text {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.5rem; font-weight: 700; color: #fff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}
.ll-score-badge {
  font-size: 0.85rem; font-weight: 800;
  color: rgba(255,255,255,0.8);
}
.ll-combo {
  font-size: 0.7rem; font-weight: 800;
  color: #c084fc;
  text-shadow: 0 0 10px rgba(192,132,252,0.4);
  animation: llCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes llCombo {
  0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }
}
.ll-effect-badge {
  font-size: 0.55rem; font-weight: 700;
  padding: 0.1rem 0.4rem;
  border-radius: 5px; letter-spacing: 1px;
}
.ll-eff-shield {
  color: #38bdf8;
  background: rgba(56,189,248,0.15);
  border: 1px solid rgba(56,189,248,0.3);
}
.ll-eff-speed {
  color: #4ade80;
  background: rgba(74,222,128,0.15);
  border: 1px solid rgba(74,222,128,0.3);
}
.ll-eff-magnet {
  color: #c084fc;
  background: rgba(192,132,252,0.15);
  border: 1px solid rgba(192,132,252,0.3);
}

/* Boss HUD */
.ll-boss-hud {
  position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.3rem;
  z-index: 20; pointer-events: none;
  padding: 0.4rem 1rem;
  background: rgba(10,15,30,0.7);
  border: 1px solid rgba(239,68,68,0.2);
  border-radius: 12px;
}
.ll-boss-label {
  font-size: 0.7rem; font-weight: 800; color: #ef4444;
  letter-spacing: 2px; text-transform: uppercase;
}
.ll-boss-bar-bg {
  width: 200px; height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px; overflow: hidden;
}
.ll-boss-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 3px; transition: width 0.3s;
  box-shadow: 0 0 8px rgba(239,68,68,0.4);
}

/* Touch controls */
.ll-touch-hint {
  position: absolute; bottom: 0; left: 0; right: 0;
  display: none; height: 30%;
  pointer-events: none; z-index: 15;
}
@media (pointer: coarse) {
  .ll-touch-hint { display: flex; }
}
.ll-touch-area {
  flex: 1; display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; font-weight: 900; color: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.03);
}
.ll-touch-left { border-right: 1px solid rgba(255,255,255,0.05); }
.ll-touch-right { border-left: 1px solid rgba(255,255,255,0.05); }
.ll-touch-mid { font-size: 0.8rem; letter-spacing: 2px; }

/* Responsive */
@media (max-width: 500px) {
  .ll-hud-top { padding: 0.3rem 0.4rem; }
  .ll-wave-badge { padding: 0.15rem 0.4rem; }
  .ll-score-badge { font-size: 0.7rem; }
  .ll-rules { grid-template-columns: 1fr; }
  .ll-logo-deco { display: none; }
  .ll-progress-bar { width: 70px; }
}
`;
