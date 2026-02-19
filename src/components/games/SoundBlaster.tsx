"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface SoundBlasterProps {
  onExit?: () => void;
}

/*
  SOUND BLASTER: PHONICS PLATFORMER

  A side-scrolling platformer where you run through themed worlds.
  Objects float above platforms. Your character has a SOUND BLASTER weapon.
  Shoot the correct beginning-sound letter at objects to collect them.

  Controls:
  - Arrow Keys / WASD: Move left/right, Jump
  - Letter keys: Load a letter into blaster
  - Click / X: Fire blaster
  - Mobile: virtual buttons + letter rack
*/

// =============== CONSTANTS ===============
const GRAVITY = 0.55;
const JUMP_FORCE = -12;
const DOUBLE_JUMP_FORCE = -10.5;
const MOVE_SPEED = 5;
const MOVE_ACCEL = 0.6;
const FRICTION = 0.82;
const MAX_VX = 6;
const PROJECTILE_SPEED = 10;
const PLAYER_W = 28;
const PLAYER_H = 36;
const COMBO_TIMEOUT = 180; // frames
const BOSS_HP_PER_WORLD = 5;

// World definitions
const WORLDS = [
  { name: 'Forest', bg1: '#1a3a2a', bg2: '#0d2818', bg3: '#071a10', platformColor: '#4a7a3a', accentColor: '#6abf4a', letters: ['B','C','D','F'], skyTop: '#0a1628', skyBot: '#1a3a2a' },
  { name: 'Ocean', bg1: '#0a2a4a', bg2: '#061a3a', bg3: '#040e28', platformColor: '#2a6a8a', accentColor: '#4ac8f0', letters: ['G','H','J','K'], skyTop: '#040e28', skyBot: '#0a2a4a' },
  { name: 'Sky', bg1: '#2a1a4a', bg2: '#1a1040', bg3: '#0e0828', platformColor: '#6a4a9a', accentColor: '#b48af0', letters: ['L','M','N','P'], skyTop: '#1a0a38', skyBot: '#2a1a4a' },
  { name: 'Cave', bg1: '#2a1a0a', bg2: '#1a1008', bg3: '#0e0804', platformColor: '#8a6a3a', accentColor: '#d4a84a', letters: ['R','S','T','W'], skyTop: '#0e0804', skyBot: '#2a1a0a' },
];

// Objects with their beginning sounds and emoji representations
const GAME_OBJECTS: { name: string; letter: string; emoji: string }[] = [
  { name: 'Apple', letter: 'A', emoji: '🍎' },
  { name: 'Ball', letter: 'B', emoji: '⚽' },
  { name: 'Cat', letter: 'C', emoji: '🐱' },
  { name: 'Dog', letter: 'D', emoji: '🐶' },
  { name: 'Egg', letter: 'E', emoji: '🥚' },
  { name: 'Fish', letter: 'F', emoji: '🐟' },
  { name: 'Goat', letter: 'G', emoji: '🐐' },
  { name: 'Hat', letter: 'H', emoji: '🎩' },
  { name: 'Jam', letter: 'J', emoji: '🫙' },
  { name: 'Kite', letter: 'K', emoji: '🪁' },
  { name: 'Lion', letter: 'L', emoji: '🦁' },
  { name: 'Moon', letter: 'M', emoji: '🌙' },
  { name: 'Nest', letter: 'N', emoji: '🪹' },
  { name: 'Pig', letter: 'P', emoji: '🐷' },
  { name: 'Ring', letter: 'R', emoji: '💍' },
  { name: 'Sun', letter: 'S', emoji: '☀️' },
  { name: 'Tree', letter: 'T', emoji: '🌳' },
  { name: 'Web', letter: 'W', emoji: '🕸️' },
];

const POWER_UP_TYPES = [
  { id: 'speed', symbol: '👟', label: 'SPEED!', color: '#4ade80', duration: 480 },
  { id: 'shield', symbol: '⭐', label: 'SHIELD!', color: '#38bdf8', duration: 360 },
  { id: 'multi', symbol: '🔱', label: 'MULTI-SHOT!', color: '#a78bfa', duration: 300 },
  { id: 'magnet', symbol: '🧲', label: 'MAGNET!', color: '#fb923c', duration: 420 },
];

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number) => Math.floor(rand(lo, hi + 1));
const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(a.x - b.x, a.y - b.y);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

// =============== LEVEL GENERATION ===============
function generateLevel(worldIdx: number, levelInWorld: number, W: number, H: number) {
  const world = WORLDS[worldIdx % WORLDS.length];
  const levelWidth = W * 3 + levelInWorld * W * 0.5;
  const platforms: { x: number; y: number; w: number; h: number; type: string; vx?: number; moveRange?: number; originX?: number; crumbleTimer?: number; crumbling?: boolean }[] = [];
  const objects: { id: number; x: number; y: number; name: string; letter: string; emoji: string; collected: boolean; glowPhase: number; bobPhase: number }[] = [];
  const enemies: { id: number; x: number; y: number; vx: number; letter: string; w: number; h: number; hp: number; patrolLeft: number; patrolRight: number; hitFlash: number; onGround: boolean; vy: number }[] = [];
  const powerUps: { id: number; x: number; y: number; type: typeof POWER_UP_TYPES[number]; collected: boolean; bobPhase: number }[] = [];

  // Ground platform
  platforms.push({ x: 0, y: H - 40, w: levelWidth, h: 60, type: 'ground' });

  // Generate platforms
  const numPlatforms = 15 + levelInWorld * 5;
  for (let i = 0; i < numPlatforms; i++) {
    const px = 200 + (i / numPlatforms) * (levelWidth - 400);
    const py = H - 120 - Math.random() * (H - 220);
    const pw = 80 + Math.random() * 120;
    const isMoving = Math.random() < 0.15 + worldIdx * 0.05;
    const isCrumbling = !isMoving && Math.random() < 0.1 + worldIdx * 0.03;

    if (isMoving) {
      const moveRange = 60 + Math.random() * 80;
      platforms.push({ x: px, y: py, w: pw, h: 16, type: 'moving', vx: 0.8 + Math.random() * 0.8, moveRange, originX: px, crumbleTimer: 0 });
    } else if (isCrumbling) {
      platforms.push({ x: px, y: py, w: pw, h: 16, type: 'crumbling', crumbleTimer: 0, crumbling: false });
    } else {
      platforms.push({ x: px, y: py, w: pw, h: 16, type: 'solid' });
    }
  }

  // Generate collectible objects
  const worldLetters = world.letters;
  const worldObjects = GAME_OBJECTS.filter(o => worldLetters.includes(o.letter));
  const numObjects = 8 + levelInWorld * 3;
  for (let i = 0; i < numObjects; i++) {
    const obj = worldObjects[i % worldObjects.length];
    const ox = 250 + (i / numObjects) * (levelWidth - 500);
    // Place objects above platforms or floating
    const plat = platforms[1 + (i % (platforms.length - 1))];
    const oy = plat ? plat.y - 50 - Math.random() * 30 : H - 200 - Math.random() * 200;
    objects.push({
      id: nextId(), x: ox, y: oy,
      name: obj.name, letter: obj.letter, emoji: obj.emoji,
      collected: false, glowPhase: Math.random() * Math.PI * 2, bobPhase: Math.random() * Math.PI * 2,
    });
  }

  // Generate enemies (wrong-letter monsters)
  const numEnemies = 4 + levelInWorld * 2 + worldIdx;
  for (let i = 0; i < numEnemies; i++) {
    const wrongLetters = 'XZQVY';
    const letter = wrongLetters[randInt(0, wrongLetters.length - 1)];
    const ex = 300 + (i / numEnemies) * (levelWidth - 600);
    const plat = platforms[1 + (i % (platforms.length - 1))];
    const ey = plat ? plat.y - 20 : H - 60;
    const patrolRange = 60 + Math.random() * 100;
    enemies.push({
      id: nextId(), x: ex, y: ey, vx: 1 + Math.random() * 1.5,
      letter, w: 30, h: 30, hp: 1 + Math.floor(worldIdx / 2),
      patrolLeft: ex - patrolRange, patrolRight: ex + patrolRange,
      hitFlash: 0, onGround: true, vy: 0,
    });
  }

  // Power-ups: 2-3 per level
  const numPowerUps = 2 + Math.floor(Math.random() * 2);
  for (let i = 0; i < numPowerUps; i++) {
    const type = POWER_UP_TYPES[randInt(0, POWER_UP_TYPES.length - 1)];
    const px2 = 400 + (i / numPowerUps) * (levelWidth - 800);
    const plat = platforms[2 + (i % Math.max(1, platforms.length - 2))];
    const py2 = plat ? plat.y - 45 : H - 250;
    powerUps.push({ id: nextId(), x: px2, y: py2, type, collected: false, bobPhase: Math.random() * Math.PI * 2 });
  }

  return { platforms, objects, enemies, powerUps, levelWidth, world };
}

function generateBoss(worldIdx: number, W: number, levelWidth: number) {
  const world = WORLDS[worldIdx % WORLDS.length];
  const correctLetter = world.letters[randInt(0, world.letters.length - 1)];
  const bossObj = GAME_OBJECTS.find(o => o.letter === correctLetter) || GAME_OBJECTS[0];
  return {
    x: levelWidth - W * 0.5,
    y: 150,
    w: 90, h: 90,
    hp: BOSS_HP_PER_WORLD,
    maxHP: BOSS_HP_PER_WORLD,
    letter: correctLetter,
    emoji: bossObj.emoji,
    name: bossObj.name,
    phase: 'enter' as string,
    shootTimer: 0,
    moveAngle: 0,
    hitFlash: 0,
    attackTimer: 0,
    shockwaveTimer: 0,
    spawnTimer: 0,
    targetY: 150,
  };
}

// =============== MAIN COMPONENT ===============
export default function SoundBlaster({ onExit }: SoundBlasterProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const prevTimeRef = useRef(0);
  const touchRef = useRef<{ left: boolean; right: boolean; jump: boolean; shoot: boolean }>({ left: false, right: false, jump: false, shoot: false });

  const [hud, setHud] = useState({
    score: 0, lives: 3, loadedLetter: '',
    world: 1, level: 1, combo: 0, comboMultiplier: 1,
    collected: 0, totalObjects: 0,
    bossActive: false, bossHP: 0, bossMaxHP: 0, bossLetter: '',
    speedActive: false, shieldActive: false, multiActive: false, magnetActive: false,
    msg: '', msgTimer: 0,
  });

  // ========== INIT ==========
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

    // Parallax layers
    const parallaxFar: { x: number; y: number; w: number; h: number; hue: number }[] = [];
    const parallaxMid: { x: number; y: number; w: number; h: number; hue: number }[] = [];
    const parallaxNear: { x: number; y: number; w: number; h: number; hue: number }[] = [];
    for (let i = 0; i < 12; i++) {
      parallaxFar.push({ x: i * 200, y: H - 160 - Math.random() * 80, w: 120 + Math.random() * 100, h: 80 + Math.random() * 80, hue: 120 + Math.random() * 40 });
    }
    for (let i = 0; i < 18; i++) {
      parallaxMid.push({ x: i * 140, y: H - 120 - Math.random() * 60, w: 60 + Math.random() * 80, h: 60 + Math.random() * 80, hue: 100 + Math.random() * 50 });
    }
    for (let i = 0; i < 24; i++) {
      parallaxNear.push({ x: i * 100, y: H - 80 - Math.random() * 40, w: 40 + Math.random() * 50, h: 40 + Math.random() * 60, hue: 80 + Math.random() * 60 });
    }

    // Stars
    const stars: { x: number; y: number; size: number; bright: number; speed: number }[] = [];
    for (let i = 0; i < 80; i++) {
      stars.push({ x: Math.random() * W * 3, y: Math.random() * H * 0.6, size: 0.5 + Math.random() * 2, bright: 0.2 + Math.random() * 0.6, speed: 0.1 + Math.random() * 0.3 });
    }

    gRef.current = {
      W, H,
      camera: { x: 0, y: 0 },
      player: {
        x: 100, y: H - 100, vx: 0, vy: 0,
        onGround: false, jumping: false, doubleJumpAvail: true,
        facing: 1, // 1 = right, -1 = left
        animFrame: 0, animTimer: 0,
        shooting: false, shootTimer: 0,
        invTimer: 0, flashTimer: 0,
        loadedLetter: '',
      },
      projectiles: [],
      particles: [],
      texts: [],
      // Level data
      platforms: level.platforms,
      objects: level.objects,
      enemies: level.enemies,
      powerUps: level.powerUps,
      levelWidth: level.levelWidth,
      world: level.world,
      // Game state
      worldIdx: 0,
      levelInWorld: 0,
      score: 0, lives: 3,
      combo: 0, comboTimer: 0, comboMultiplier: 1,
      collected: 0, totalObjects: level.objects.length,
      // Boss
      boss: null,
      bossDefeated: false,
      // Power-ups
      speedTimer: 0, shieldTimer: 0, multiTimer: 0, magnetTimer: 0,
      // Parallax
      parallaxFar, parallaxMid, parallaxNear, stars,
      // Effects
      shake: 0, slowmo: 0,
      time: 0, hudTick: 0,
      // Transition
      transition: null,
      levelComplete: false,
      // Level tracking
      levelsInWorld: 3, // 3 levels per world, then boss
    };

    setHud({
      score: 0, lives: 3, loadedLetter: '',
      world: 1, level: 1, combo: 0, comboMultiplier: 1,
      collected: 0, totalObjects: level.objects.length,
      bossActive: false, bossHP: 0, bossMaxHP: 0, bossLetter: '',
      speedActive: false, shieldActive: false, multiActive: false, magnetActive: false,
      msg: 'FOREST WORLD!', msgTimer: 120,
    });
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
  }, [screen, initGame]);

  // ========== UPDATE ==========
  function update(dt: number) {
    const g = gRef.current;
    if (!g) return;
    g.time += dt;
    if (g.shake > 0) { g.shake *= 0.88; if (g.shake < 0.3) g.shake = 0; }
    if (g.comboTimer > 0) { g.comboTimer -= dt; if (g.comboTimer <= 0) { g.combo = 0; g.comboMultiplier = 1; } }

    const k = keysRef.current;
    const t = touchRef.current;
    const p = g.player;

    // ---- Level transition ----
    if (g.transition) {
      g.transition.timer -= dt;
      if (g.transition.timer <= 0) {
        advanceLevel(g);
        g.transition = null;
      }
      updateParallaxAndStars(g, dt);
      updateParticles(g, dt);
      updateTexts(g, dt);
      syncHud(g);
      return;
    }

    // ---- Player movement ----
    let moveDir = 0;
    if (k['ArrowLeft'] || k['a'] || k['A'] || t.left) moveDir -= 1;
    if (k['ArrowRight'] || k['d'] || k['D'] || t.right) moveDir += 1;

    const speedMul = g.speedTimer > 0 ? 1.5 : 1;
    if (moveDir !== 0) {
      p.vx += moveDir * MOVE_ACCEL * dt * speedMul;
      p.vx = clamp(p.vx, -MAX_VX * speedMul, MAX_VX * speedMul);
      p.facing = moveDir;
    } else {
      p.vx *= FRICTION;
    }

    // Jump
    const jumpPressed = k['ArrowUp'] || k['w'] || k['W'] || k[' '] || t.jump;
    if (jumpPressed && !p.jumping) {
      if (p.onGround) {
        p.vy = JUMP_FORCE;
        p.onGround = false;
        p.jumping = true;
        // Jump dust
        for (let i = 0; i < 6; i++) {
          g.particles.push({ x: p.x, y: p.y + PLAYER_H / 2, vx: rand(-2, 2), vy: rand(-1, 0.5), life: 15 + Math.random() * 10, maxL: 25, color: '#b0b8c0', sz: 2 + Math.random() * 3 });
        }
      } else if (p.doubleJumpAvail) {
        p.vy = DOUBLE_JUMP_FORCE;
        p.doubleJumpAvail = false;
        p.jumping = true;
        for (let i = 0; i < 8; i++) {
          g.particles.push({ x: p.x, y: p.y + PLAYER_H / 2, vx: rand(-3, 3), vy: rand(-2, 1), life: 12 + Math.random() * 8, maxL: 20, color: '#88ccff', sz: 2 + Math.random() * 2 });
        }
      }
    }
    if (!jumpPressed) p.jumping = false;

    // Gravity
    p.vy += GRAVITY * dt;
    p.vy = clamp(p.vy, -15, 15);

    // Apply velocity
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    // Platform collision
    p.onGround = false;
    for (const plat of g.platforms) {
      if (plat.type === 'crumbling' && plat.crumbleTimer > 60) continue; // fallen away
      const platX = plat.type === 'moving' ? plat.x : plat.x;
      if (p.x + PLAYER_W / 2 > platX && p.x - PLAYER_W / 2 < platX + plat.w) {
        // Landing on top
        if (p.vy >= 0 && p.y + PLAYER_H / 2 >= plat.y && p.y + PLAYER_H / 2 - p.vy * dt <= plat.y + 8) {
          p.y = plat.y - PLAYER_H / 2;
          p.vy = 0;
          p.onGround = true;
          p.doubleJumpAvail = true;
          if (plat.type === 'crumbling' && !plat.crumbling) {
            plat.crumbling = true;
            plat.crumbleTimer = 0;
          }
          if (plat.type === 'moving' && plat.vx) {
            p.x += plat.vx * dt;
          }
        }
      }
    }

    // World bounds
    p.x = clamp(p.x, PLAYER_W / 2, g.levelWidth - PLAYER_W / 2);
    if (p.y > g.H + 50) {
      hitPlayer(g);
      p.x = g.camera.x + g.W / 2;
      p.y = 100;
      p.vy = 0;
      p.vx = 0;
    }

    // Invincibility timer
    if (p.invTimer > 0) p.invTimer -= dt;
    if (p.flashTimer > 0) p.flashTimer -= dt;

    // ---- Letter loading via keyboard ----
    for (let c = 65; c <= 90; c++) {
      const ch = String.fromCharCode(c);
      if (k[ch] || k[ch.toLowerCase()]) {
        p.loadedLetter = ch;
        k[ch] = false;
        k[ch.toLowerCase()] = false;
      }
    }

    // ---- Shooting ----
    p.shootTimer -= dt;
    const shootPressed = k['x'] || k['X'] || t.shoot;
    if (shootPressed && p.shootTimer <= 0 && p.loadedLetter) {
      p.shootTimer = 18;
      p.shooting = true;
      const multiShot = g.multiTimer > 0;
      const angles = multiShot ? [-0.2, 0, 0.2] : [0];
      for (const angle of angles) {
        const speed = PROJECTILE_SPEED;
        const vx = Math.cos(angle) * speed * p.facing;
        const vy = Math.sin(angle) * speed;
        g.projectiles.push({
          id: nextId(),
          x: p.x + p.facing * 18,
          y: p.y - 4,
          vx, vy: vy - 1,
          letter: p.loadedLetter,
          alive: true,
          trail: [],
        });
      }
      // Muzzle flash particles
      for (let i = 0; i < 5; i++) {
        g.particles.push({
          x: p.x + p.facing * 20, y: p.y - 4,
          vx: p.facing * rand(2, 6), vy: rand(-2, 2),
          life: 8 + Math.random() * 6, maxL: 14,
          color: '#ffd700', sz: 2 + Math.random() * 3,
        });
      }
      k['x'] = k['X'] = false;
    }
    if (p.shootTimer < 10) p.shooting = false;

    // ---- Projectiles ----
    g.projectiles = g.projectiles.filter((proj: G) => {
      if (!proj.alive) return false;
      proj.x += proj.vx * dt;
      proj.y += proj.vy * dt;
      proj.trail.push({ x: proj.x, y: proj.y });
      if (proj.trail.length > 8) proj.trail.shift();

      // Check vs objects
      for (const obj of g.objects) {
        if (obj.collected) continue;
        if (Math.abs(proj.x - obj.x) < 28 && Math.abs(proj.y - obj.y) < 28) {
          if (proj.letter === obj.letter) {
            // Correct hit!
            obj.collected = true;
            proj.alive = false;
            g.collected++;
            g.combo++;
            g.comboTimer = COMBO_TIMEOUT;
            g.comboMultiplier = Math.min(1 + Math.floor(g.combo / 3) * 0.5, 5);
            const pts = Math.floor(100 * g.comboMultiplier);
            g.score += pts;
            g.texts.push({ x: obj.x, y: obj.y - 20, text: `${obj.name}! +${pts}`, color: '#4ade80', life: 60, maxL: 60, vy: -1.5, sz: 16 });
            // Collect sparkle burst
            for (let i = 0; i < 15; i++) {
              g.particles.push({
                x: obj.x + rand(-10, 10), y: obj.y + rand(-10, 10),
                vx: rand(-4, 4), vy: rand(-4, 4),
                life: 20 + Math.random() * 15, maxL: 35,
                color: ['#4ade80', '#ffd700', '#38bdf8', '#fff'][randInt(0, 3)],
                sz: 2 + Math.random() * 4,
              });
            }
            g.shake = 4;
          } else {
            // Wrong letter - bounce off with sparks
            proj.alive = false;
            g.combo = 0;
            g.comboMultiplier = 1;
            g.comboTimer = 0;
            g.texts.push({ x: obj.x, y: obj.y - 20, text: `Not ${proj.letter}!`, color: '#ef4444', life: 40, maxL: 40, vy: -1, sz: 14 });
            for (let i = 0; i < 8; i++) {
              g.particles.push({
                x: obj.x + rand(-8, 8), y: obj.y + rand(-8, 8),
                vx: rand(-3, 3), vy: rand(-3, 3),
                life: 12 + Math.random() * 8, maxL: 20,
                color: '#ef4444', sz: 2 + Math.random() * 3,
              });
            }
          }
          break;
        }
      }

      // Check vs enemies
      if (proj.alive) {
        for (let i = g.enemies.length - 1; i >= 0; i--) {
          const en = g.enemies[i];
          if (dist(proj, en) < en.w / 2 + 10) {
            en.hp--;
            en.hitFlash = 8;
            proj.alive = false;
            if (en.hp <= 0) {
              g.score += 50;
              g.texts.push({ x: en.x, y: en.y - 20, text: '+50', color: '#fb923c', life: 40, maxL: 40, vy: -1.5, sz: 14 });
              for (let p2 = 0; p2 < 10; p2++) {
                g.particles.push({ x: en.x + rand(-12, 12), y: en.y + rand(-12, 12), vx: rand(-4, 4), vy: rand(-4, 4), life: 18 + Math.random() * 12, maxL: 30, color: '#fb923c', sz: 2 + Math.random() * 4 });
              }
              g.enemies.splice(i, 1);
              g.shake = 5;
            }
            break;
          }
        }
      }

      // Check vs boss
      if (proj.alive && g.boss && g.boss.phase === 'fight') {
        const bo = g.boss;
        if (dist(proj, bo) < bo.w / 2 + 12) {
          if (proj.letter === bo.letter) {
            bo.hp--;
            bo.hitFlash = 12;
            g.shake = 10;
            g.texts.push({ x: bo.x, y: bo.y - 50, text: 'CORRECT!', color: '#ffd700', life: 60, maxL: 60, vy: -2, sz: 20 });
            for (let p2 = 0; p2 < 18; p2++) {
              g.particles.push({ x: bo.x + rand(-40, 40), y: bo.y + rand(-40, 40), vx: rand(-5, 5), vy: rand(-5, 5), life: 22 + Math.random() * 16, maxL: 38, color: '#ffd700', sz: 3 + Math.random() * 5 });
            }
            if (bo.hp <= 0) {
              bo.phase = 'dying';
              bo.hitFlash = 0;
              g.slowmo = 30;
            }
          } else {
            bo.hitFlash = 4;
            g.texts.push({ x: bo.x, y: bo.y - 40, text: `Need "${bo.letter}"!`, color: '#94a3b8', life: 40, maxL: 40, vy: -1, sz: 13 });
            for (let p2 = 0; p2 < 5; p2++) {
              g.particles.push({ x: proj.x, y: proj.y, vx: rand(-3, 3), vy: rand(-2, 3), life: 10, maxL: 10, color: '#64748b', sz: 2 });
            }
          }
          proj.alive = false;
        }
      }

      return proj.alive && proj.x > g.camera.x - 50 && proj.x < g.camera.x + g.W + 50 && proj.y > -50 && proj.y < g.H + 50;
    });

    // ---- Moving platforms ----
    for (const plat of g.platforms) {
      if (plat.type === 'moving' && plat.originX !== undefined && plat.moveRange) {
        plat.x += plat.vx * dt;
        if (plat.x > plat.originX + plat.moveRange || plat.x < plat.originX - plat.moveRange) {
          plat.vx = -plat.vx;
        }
      }
      if (plat.type === 'crumbling' && plat.crumbling) {
        plat.crumbleTimer += dt;
        if (plat.crumbleTimer > 30 && plat.crumbleTimer < 60) {
          // shaking
        }
      }
    }

    // ---- Enemies ----
    for (const en of g.enemies) {
      en.x += en.vx * dt;
      if (en.x > en.patrolRight || en.x < en.patrolLeft) en.vx = -en.vx;
      if (en.hitFlash > 0) en.hitFlash -= dt;

      // Player collision with enemy
      if (p.invTimer <= 0 && g.shieldTimer <= 0) {
        if (Math.abs(p.x - en.x) < (PLAYER_W + en.w) / 2 && Math.abs(p.y - en.y) < (PLAYER_H + en.h) / 2) {
          // Check if stomping from above
          if (p.vy > 0 && p.y + PLAYER_H / 2 < en.y) {
            // Stomp!
            en.hp--;
            en.hitFlash = 8;
            p.vy = JUMP_FORCE * 0.7;
            g.score += 30;
            g.texts.push({ x: en.x, y: en.y - 20, text: 'STOMP! +30', color: '#fb923c', life: 40, maxL: 40, vy: -1.5, sz: 14 });
            if (en.hp <= 0) {
              for (let p2 = 0; p2 < 10; p2++) {
                g.particles.push({ x: en.x + rand(-10, 10), y: en.y + rand(-10, 10), vx: rand(-3, 3), vy: rand(-4, 1), life: 15 + Math.random() * 10, maxL: 25, color: '#fb923c', sz: 2 + Math.random() * 3 });
              }
              g.enemies = g.enemies.filter((e: G) => e.id !== en.id);
            }
          } else {
            hitPlayer(g);
          }
        }
      }
    }

    // ---- Boss ----
    if (g.boss) {
      const bo = g.boss;
      if (bo.phase === 'enter') {
        bo.y += (bo.targetY - bo.y) * 0.03 * dt;
        if (Math.abs(bo.y - bo.targetY) < 3) { bo.y = bo.targetY; bo.phase = 'fight'; }
      } else if (bo.phase === 'fight') {
        bo.moveAngle += dt * 0.025;
        bo.x = bo.x + Math.sin(bo.moveAngle) * 1.5 * dt;
        bo.y = bo.targetY + Math.sin(bo.moveAngle * 1.7) * 30;
        bo.x = clamp(bo.x, g.camera.x + 100, g.camera.x + g.W - 100);

        // Boss attacks
        bo.attackTimer -= dt;
        if (bo.attackTimer <= 0) {
          bo.attackTimer = 80 + rand(0, 40);
          // Spawn falling letters
          for (let i = 0; i < 3 + g.worldIdx; i++) {
            const wrongLetters = 'XZQVY';
            const letter = wrongLetters[randInt(0, wrongLetters.length - 1)];
            g.projectiles.push({
              id: nextId(),
              x: bo.x + rand(-60, 60),
              y: bo.y + bo.h / 2,
              vx: rand(-1, 1), vy: 3 + rand(0, 2),
              letter, alive: true, trail: [], isEnemy: true,
            });
          }
        }

        // Boss shockwave
        bo.shockwaveTimer -= dt;
        if (bo.shockwaveTimer <= 0) {
          bo.shockwaveTimer = 150 + rand(0, 60);
          g.particles.push({ x: bo.x, y: bo.y + bo.h / 2, vx: 0, vy: 0, life: 30, maxL: 30, color: '#ef4444', sz: 5, isShockwave: true, radius: 0 });
        }

        // Spawn mini-enemies periodically
        bo.spawnTimer -= dt;
        if (bo.spawnTimer <= 0) {
          bo.spawnTimer = 200 + rand(0, 80);
          const wrongLetters = 'XZQVY';
          const letter = wrongLetters[randInt(0, wrongLetters.length - 1)];
          g.enemies.push({
            id: nextId(), x: bo.x + rand(-40, 40), y: bo.y + 50, vx: rand(-1, 1) > 0 ? 1.5 : -1.5,
            letter, w: 24, h: 24, hp: 1,
            patrolLeft: g.camera.x + 50, patrolRight: g.camera.x + g.W - 50,
            hitFlash: 0, onGround: false, vy: 0,
          });
        }

        if (bo.hitFlash > 0) bo.hitFlash -= dt;
      } else if (bo.phase === 'dying') {
        bo.hitFlash += dt;
        if (bo.hitFlash > 60) {
          // Boss defeated explosion
          for (let i = 0; i < 40; i++) {
            g.particles.push({ x: bo.x + rand(-60, 60), y: bo.y + rand(-50, 50), vx: rand(-6, 6), vy: rand(-6, 6), life: 30 + Math.random() * 30, maxL: 60, color: ['#ff6b6b', '#ffd93d', '#ff8a5c', '#fff'][randInt(0, 3)], sz: 3 + Math.random() * 7 });
          }
          const pts = 500 * (g.worldIdx + 1);
          g.score += pts;
          g.shake = 20;
          g.texts.push({ x: bo.x, y: bo.y, text: `BOSS DEFEATED! +${pts}`, color: '#ffd700', life: 100, maxL: 100, vy: -1, sz: 22 });
          g.boss = null;
          g.bossDefeated = true;
          g.transition = { timer: 120 };
          g.texts.push({ x: g.camera.x + g.W / 2, y: g.H / 2, text: `${g.world.name} COMPLETE!`, color: '#4ade80', life: 120, maxL: 120, vy: -0.3, sz: 32 });
        }
      }
    }

    // ---- Enemy projectiles vs player ----
    if (p.invTimer <= 0 && g.shieldTimer <= 0) {
      for (let i = g.projectiles.length - 1; i >= 0; i--) {
        const proj = g.projectiles[i];
        if (proj.isEnemy && proj.alive && dist(proj, p) < 20) {
          hitPlayer(g);
          proj.alive = false;
          break;
        }
      }
    }

    // ---- Shockwave particles vs player ----
    for (const part of g.particles) {
      if (part.isShockwave) {
        part.radius += 3 * dt;
        if (p.invTimer <= 0 && g.shieldTimer <= 0) {
          const d = dist(part, p);
          if (Math.abs(d - part.radius) < 15) {
            hitPlayer(g);
          }
        }
      }
    }

    // ---- Power-ups ----
    for (const pu of g.powerUps) {
      if (pu.collected) continue;
      pu.bobPhase += dt * 0.08;
      if (dist(p, pu) < 30 || (g.magnetTimer > 0 && dist(p, pu) < 150)) {
        if (g.magnetTimer > 0 && dist(p, pu) > 30) {
          // Magnet pull
          const dx = p.x - pu.x, dy = p.y - pu.y;
          const d = Math.hypot(dx, dy);
          pu.x += (dx / d) * 3 * dt;
          pu.y += (dy / d) * 3 * dt;
        } else {
          pu.collected = true;
          if (pu.type.id === 'speed') g.speedTimer = pu.type.duration;
          else if (pu.type.id === 'shield') g.shieldTimer = pu.type.duration;
          else if (pu.type.id === 'multi') g.multiTimer = pu.type.duration;
          else if (pu.type.id === 'magnet') g.magnetTimer = pu.type.duration;
          g.texts.push({ x: pu.x, y: pu.y - 20, text: pu.type.label, color: pu.type.color, life: 60, maxL: 60, vy: -2, sz: 18 });
          for (let j = 0; j < 12; j++) {
            g.particles.push({ x: pu.x, y: pu.y, vx: rand(-4, 4), vy: rand(-4, 4), life: 15 + Math.random() * 10, maxL: 25, color: pu.type.color, sz: 2 + Math.random() * 3 });
          }
        }
      }
    }

    // Magnet effect on uncollected objects
    if (g.magnetTimer > 0) {
      for (const obj of g.objects) {
        if (obj.collected) continue;
        if (dist(p, obj) < 120) {
          const dx = p.x - obj.x, dy = p.y - obj.y;
          const d = Math.hypot(dx, dy);
          obj.x += (dx / d) * 1.5 * dt;
          obj.y += (dy / d) * 1.5 * dt;
        }
      }
    }

    // Decrement power-up timers
    if (g.speedTimer > 0) g.speedTimer -= dt;
    if (g.shieldTimer > 0) g.shieldTimer -= dt;
    if (g.multiTimer > 0) g.multiTimer -= dt;
    if (g.magnetTimer > 0) g.magnetTimer -= dt;

    // ---- Object bobbing ----
    for (const obj of g.objects) {
      if (!obj.collected) {
        obj.bobPhase += dt * 0.06;
        obj.glowPhase += dt * 0.1;
      }
    }

    // ---- Player animation ----
    p.animTimer += dt;
    if (Math.abs(p.vx) > 0.5 && p.onGround) {
      if (p.animTimer > 5) { p.animTimer = 0; p.animFrame = (p.animFrame + 1) % 4; }
    } else if (!p.onGround) {
      p.animFrame = 5; // jump pose
    } else {
      p.animFrame = 0;
    }

    // ---- Camera ----
    const targetCamX = p.x - g.W / 2;
    g.camera.x = lerp(g.camera.x, clamp(targetCamX, 0, g.levelWidth - g.W), 0.08 * dt);

    // ---- Check level completion ----
    if (!g.levelComplete && !g.boss && !g.transition) {
      const allCollected = g.objects.every((o: G) => o.collected);
      if (allCollected || g.collected >= g.totalObjects) {
        g.levelComplete = true;
        g.levelInWorld++;

        if (g.levelInWorld >= g.levelsInWorld) {
          // Spawn boss
          g.boss = generateBoss(g.worldIdx, g.W, g.levelWidth);
          g.boss.x = p.x + g.W * 0.5;
          g.levelComplete = false;
          g.texts.push({ x: g.camera.x + g.W / 2, y: g.H / 2 - 30, text: 'BOSS BATTLE!', color: '#ef4444', life: 100, maxL: 100, vy: 0, sz: 36 });
        } else {
          g.transition = { timer: 90 };
          g.texts.push({ x: g.camera.x + g.W / 2, y: g.H / 2, text: 'LEVEL COMPLETE!', color: '#4ade80', life: 90, maxL: 90, vy: -0.3, sz: 28 });
        }
      }
    }

    // ---- Parallax & stars, particles, texts ----
    updateParallaxAndStars(g, dt);
    updateParticles(g, dt);
    updateTexts(g, dt);

    // ---- HUD sync ----
    syncHud(g);

    // ---- Game over ----
    if (g.lives <= 0) setScreen('gameover');
  }

  function updateParallaxAndStars(g: G, _dt: number) {
    // Stars handled in draw via camera offset
    void _dt;
    void g;
  }

  function updateParticles(g: G, dt: number) {
    g.particles = g.particles.filter((p2: G) => {
      p2.x += (p2.vx || 0) * dt;
      p2.y += (p2.vy || 0) * dt;
      if (p2.vx) p2.vx *= 0.97;
      if (p2.vy) p2.vy *= 0.97;
      p2.life -= dt;
      return p2.life > 0;
    });
  }

  function updateTexts(g: G, dt: number) {
    g.texts = g.texts.filter((t2: G) => { t2.y += (t2.vy || 0) * dt; t2.life -= dt; return t2.life > 0; });
  }

  function syncHud(g: G) {
    g.hudTick = (g.hudTick || 0) + 1;
    if (g.hudTick > 4) {
      g.hudTick = 0;
      setHud({
        score: g.score, lives: g.lives, loadedLetter: g.player.loadedLetter,
        world: g.worldIdx + 1, level: g.levelInWorld + 1, combo: g.combo, comboMultiplier: g.comboMultiplier,
        collected: g.collected, totalObjects: g.totalObjects,
        bossActive: !!g.boss, bossHP: g.boss?.hp || 0, bossMaxHP: g.boss?.maxHP || 0, bossLetter: g.boss?.letter || '',
        speedActive: g.speedTimer > 0, shieldActive: g.shieldTimer > 0, multiActive: g.multiTimer > 0, magnetActive: g.magnetTimer > 0,
        msg: '', msgTimer: 0,
      });
    }
  }

  function hitPlayer(g: G) {
    if (g.shieldTimer > 0) { g.shieldTimer = 0; return; }
    g.lives--;
    g.player.invTimer = 120;
    g.player.flashTimer = 120;
    g.shake = 14;
    for (let i = 0; i < 14; i++) {
      g.particles.push({ x: g.player.x + rand(-14, 14), y: g.player.y + rand(-14, 14), vx: rand(-5, 5), vy: rand(-5, 5), life: 18 + Math.random() * 14, maxL: 32, color: '#ff6b6b', sz: 2 + Math.random() * 4 });
    }
  }

  function advanceLevel(g: G) {
    const W = g.W, H = g.H;
    if (g.bossDefeated) {
      g.worldIdx = (g.worldIdx + 1) % WORLDS.length;
      g.levelInWorld = 0;
      g.bossDefeated = false;
    }
    const level = generateLevel(g.worldIdx, g.levelInWorld, W, H);
    g.platforms = level.platforms;
    g.objects = level.objects;
    g.enemies = level.enemies;
    g.powerUps = level.powerUps;
    g.levelWidth = level.levelWidth;
    g.world = level.world;
    g.collected = 0;
    g.totalObjects = level.objects.length;
    g.levelComplete = false;
    g.boss = null;
    g.player.x = 100;
    g.player.y = H - 100;
    g.player.vx = 0;
    g.player.vy = 0;
    g.camera.x = 0;
    g.projectiles = [];
    g.texts.push({ x: W / 2, y: H / 2 - 20, text: `${level.world.name} - Level ${g.levelInWorld + 1}`, color: '#ffd700', life: 80, maxL: 80, vy: 0, sz: 28 });
  }

  // ========== DRAW ==========
  function draw() {
    const g = gRef.current;
    const cvs = canvasRef.current;
    if (!g || !cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;
    const { W, H } = g;
    const cam = g.camera;
    const world = g.world || WORLDS[0];

    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    // ======= SKY GRADIENT =======
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    skyGrad.addColorStop(0, world.skyTop);
    skyGrad.addColorStop(1, world.skyBot);
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    // ======= STARS =======
    for (const st of g.stars) {
      const sx2 = st.x - cam.x * st.speed * 0.1;
      const wrappedX = ((sx2 % (W * 2)) + W * 2) % (W * 2);
      if (wrappedX < W) {
        ctx.globalAlpha = st.bright * (0.5 + Math.sin(g.time * 0.05 + st.x) * 0.5);
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(wrappedX, st.y, st.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= PARALLAX FAR (mountains) =======
    for (const m of g.parallaxFar) {
      const px = m.x - cam.x * 0.15;
      const wrappedX = ((px % (W * 3)) + W * 3) % (W * 3) - W * 0.5;
      if (wrappedX > -m.w && wrappedX < W + m.w) {
        ctx.fillStyle = `hsla(${m.hue}, 30%, 15%, 0.6)`;
        ctx.beginPath();
        ctx.moveTo(wrappedX, H);
        ctx.lineTo(wrappedX + m.w * 0.2, m.y);
        ctx.lineTo(wrappedX + m.w * 0.5, m.y - m.h * 0.3);
        ctx.lineTo(wrappedX + m.w * 0.8, m.y);
        ctx.lineTo(wrappedX + m.w, H);
        ctx.closePath();
        ctx.fill();
      }
    }

    // ======= PARALLAX MID (trees/structures) =======
    for (const t2 of g.parallaxMid) {
      const px = t2.x - cam.x * 0.35;
      const wrappedX = ((px % (W * 2.5)) + W * 2.5) % (W * 2.5) - W * 0.3;
      if (wrappedX > -t2.w && wrappedX < W + t2.w) {
        ctx.fillStyle = `hsla(${t2.hue}, 35%, 18%, 0.7)`;
        ctx.beginPath();
        ctx.moveTo(wrappedX, H);
        ctx.lineTo(wrappedX + t2.w * 0.3, t2.y);
        ctx.lineTo(wrappedX + t2.w * 0.5, t2.y - t2.h * 0.5);
        ctx.lineTo(wrappedX + t2.w * 0.7, t2.y);
        ctx.lineTo(wrappedX + t2.w, H);
        ctx.closePath();
        ctx.fill();
      }
    }

    // ======= PARALLAX NEAR (bushes) =======
    for (const b of g.parallaxNear) {
      const px = b.x - cam.x * 0.6;
      const wrappedX = ((px % (W * 2)) + W * 2) % (W * 2) - W * 0.2;
      if (wrappedX > -b.w && wrappedX < W + b.w) {
        ctx.fillStyle = `hsla(${b.hue}, 40%, 12%, 0.8)`;
        ctx.beginPath();
        ctx.arc(wrappedX + b.w / 2, H - 10, b.w / 2, Math.PI, 0);
        ctx.lineTo(wrappedX + b.w, H);
        ctx.lineTo(wrappedX, H);
        ctx.closePath();
        ctx.fill();
      }
    }

    // ======= WORLD-SPACE RENDERING (shifted by camera) =======
    ctx.save();
    ctx.translate(-cam.x, 0);

    // ======= PLATFORMS =======
    for (const plat of g.platforms) {
      if (plat.x + plat.w < cam.x - 50 || plat.x > cam.x + W + 50) continue;

      ctx.save();
      if (plat.type === 'crumbling' && plat.crumbling && plat.crumbleTimer > 0) {
        const shakeAmt = plat.crumbleTimer > 30 ? 3 : 1;
        ctx.translate((Math.random() - 0.5) * shakeAmt, (Math.random() - 0.5) * shakeAmt);
        if (plat.crumbleTimer > 60) {
          ctx.globalAlpha = Math.max(0, 1 - (plat.crumbleTimer - 60) / 20);
          ctx.translate(0, (plat.crumbleTimer - 60) * 2);
        }
      }

      if (plat.type === 'ground') {
        // Ground with gradient
        const grdGrad = ctx.createLinearGradient(0, plat.y, 0, plat.y + plat.h);
        grdGrad.addColorStop(0, world.platformColor);
        grdGrad.addColorStop(1, world.bg3);
        ctx.fillStyle = grdGrad;
        ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
        // Top edge highlight
        ctx.fillStyle = world.accentColor + '40';
        ctx.fillRect(plat.x, plat.y, plat.w, 3);
      } else {
        // Platform tile with depth
        const pGrad = ctx.createLinearGradient(0, plat.y, 0, plat.y + plat.h);
        pGrad.addColorStop(0, world.platformColor);
        pGrad.addColorStop(1, world.bg2);
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.roundRect(plat.x, plat.y, plat.w, plat.h, 4);
        ctx.fill();
        // Top edge
        ctx.fillStyle = world.accentColor + '60';
        ctx.fillRect(plat.x + 2, plat.y, plat.w - 4, 2);
        // Bottom shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(plat.x + 4, plat.y + plat.h, plat.w - 8, 4);

        if (plat.type === 'moving') {
          // Moving platform indicator dots
          ctx.fillStyle = world.accentColor + '80';
          for (let d = 0; d < 3; d++) {
            ctx.beginPath();
            ctx.arc(plat.x + plat.w / 2 - 8 + d * 8, plat.y + plat.h / 2, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();
    }

    // ======= POWER-UPS =======
    for (const pu of g.powerUps) {
      if (pu.collected) continue;
      if (pu.x < cam.x - 50 || pu.x > cam.x + W + 50) continue;
      const bobY = Math.sin(pu.bobPhase) * 6;
      ctx.save();
      ctx.translate(pu.x, pu.y + bobY);

      // Glow
      const puGlow = ctx.createRadialGradient(0, 0, 5, 0, 0, 25);
      puGlow.addColorStop(0, pu.type.color + '60');
      puGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = puGlow;
      ctx.beginPath(); ctx.arc(0, 0, 25, 0, Math.PI * 2); ctx.fill();

      // Body
      ctx.fillStyle = 'rgba(20,25,40,0.8)';
      ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = pu.type.color + '80';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.stroke();

      // Symbol
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(pu.type.symbol, 0, 1);
      ctx.restore();
    }

    // ======= OBJECTS (collectibles) =======
    for (const obj of g.objects) {
      if (obj.collected) continue;
      if (obj.x < cam.x - 60 || obj.x > cam.x + W + 60) continue;

      const bobY = Math.sin(obj.bobPhase) * 5;
      const glowAlpha = 0.3 + Math.sin(obj.glowPhase) * 0.2;

      ctx.save();
      ctx.translate(obj.x, obj.y + bobY);

      // Pulsing glow
      const objGlow = ctx.createRadialGradient(0, 0, 8, 0, 0, 35);
      objGlow.addColorStop(0, `rgba(255,215,0,${glowAlpha})`);
      objGlow.addColorStop(0.6, `rgba(255,215,0,${glowAlpha * 0.3})`);
      objGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = objGlow;
      ctx.beginPath(); ctx.arc(0, 0, 35, 0, Math.PI * 2); ctx.fill();

      // Object emoji
      ctx.font = '28px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(obj.emoji, 0, 0);

      // Letter hint below
      ctx.font = 'bold 11px "Exo 2", sans-serif';
      ctx.fillStyle = '#ffd700';
      ctx.shadowColor = 'rgba(255,215,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText(obj.name, 0, 22);
      ctx.shadowBlur = 0;

      ctx.restore();
    }

    // ======= ENEMIES =======
    for (const en of g.enemies) {
      if (en.x < cam.x - 50 || en.x > cam.x + W + 50) continue;
      const flash = en.hitFlash > 0;

      ctx.save();
      ctx.translate(en.x, en.y);

      // Body - letter-shaped creature
      const enHue = en.letter.charCodeAt(0) * 15 % 360;
      const enGrad = ctx.createRadialGradient(0, -3, 0, 0, 0, en.w / 2);
      enGrad.addColorStop(0, flash ? '#ff8888' : `hsl(${enHue}, 60%, 45%)`);
      enGrad.addColorStop(1, flash ? '#cc4444' : `hsl(${enHue}, 60%, 25%)`);
      ctx.fillStyle = enGrad;
      ctx.beginPath(); ctx.arc(0, 0, en.w / 2, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = flash ? '#fff' : `hsl(${enHue}, 70%, 55%)`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, en.w / 2, 0, Math.PI * 2); ctx.stroke();

      // Letter on enemy
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.font = `bold 16px "Exo 2", sans-serif`;
      ctx.fillText(en.letter, 0, 1);

      // Angry eyes
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(-6, -5, 4, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(6, -5, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ff0000';
      ctx.beginPath(); ctx.arc(-5, -5, 2, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(7, -5, 2, 0, Math.PI * 2); ctx.fill();

      // Angry eyebrows
      ctx.strokeStyle = `hsl(${enHue}, 70%, 35%)`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-10, -10); ctx.lineTo(-3, -8); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(10, -10); ctx.lineTo(3, -8); ctx.stroke();

      ctx.restore();
    }

    // ======= BOSS =======
    if (g.boss) {
      const bo = g.boss;
      if (bo.x < cam.x - 100 || bo.x > cam.x + W + 100) { /* skip */ } else {
        ctx.save();
        ctx.translate(bo.x, bo.y);
        const bossFlash = bo.hitFlash > 0 && bo.phase !== 'dying';
        const bossHue = bo.letter.charCodeAt(0) * 20 % 360;

        // Dying phase: pulsing
        if (bo.phase === 'dying') {
          ctx.globalAlpha = 0.5 + Math.sin(g.time * 0.3) * 0.3;
        }

        // Outer aura
        const auraGrad = ctx.createRadialGradient(0, 0, bo.w * 0.2, 0, 0, bo.w);
        auraGrad.addColorStop(0, bossFlash ? 'rgba(255,215,0,0.4)' : `hsla(${bossHue},60%,50%,0.2)`);
        auraGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = auraGrad;
        ctx.beginPath(); ctx.arc(0, 0, bo.w, 0, Math.PI * 2); ctx.fill();

        // Rotating energy ring
        ctx.save();
        ctx.rotate(g.time * 0.03);
        ctx.strokeStyle = `hsla(${bossHue},70%,60%,0.3)`;
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 8]);
        ctx.beginPath(); ctx.arc(0, 0, bo.w / 2 + 10, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();

        // Body
        const bodyGrad = ctx.createRadialGradient(0, -bo.h * 0.15, 0, 0, bo.h * 0.1, bo.w / 2);
        bodyGrad.addColorStop(0, bossFlash ? '#ffe066' : `hsl(${bossHue},55%,40%)`);
        bodyGrad.addColorStop(1, bossFlash ? '#cc9900' : `hsl(${bossHue},60%,18%)`);
        ctx.fillStyle = bodyGrad;
        ctx.strokeStyle = bossFlash ? '#fff' : `hsl(${bossHue},70%,55%)`;
        ctx.lineWidth = 3;
        // Octagonal shape
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
          const r = bo.w / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        ctx.closePath(); ctx.fill(); ctx.stroke();

        // Boss emoji
        ctx.font = '36px sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(bo.emoji, 0, -5);

        // Letter target
        ctx.font = `bold 18px "Exo 2", sans-serif`;
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = 'rgba(255,215,0,0.5)';
        ctx.shadowBlur = 8;
        ctx.fillText(`"${bo.letter}"`, 0, bo.h / 2 - 10);
        ctx.shadowBlur = 0;

        // HP bar
        const barW = bo.w * 0.8, barH = 6, barY = bo.h / 2 + 8;
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.beginPath(); ctx.roundRect(-barW / 2, barY, barW, barH, 3); ctx.fill();
        const hpRatio = bo.hp / bo.maxHP;
        const hpGrad = ctx.createLinearGradient(-barW / 2, 0, barW / 2, 0);
        if (hpRatio > 0.5) { hpGrad.addColorStop(0, '#22c55e'); hpGrad.addColorStop(1, '#4ade80'); }
        else if (hpRatio > 0.25) { hpGrad.addColorStop(0, '#d97706'); hpGrad.addColorStop(1, '#fbbf24'); }
        else { hpGrad.addColorStop(0, '#dc2626'); hpGrad.addColorStop(1, '#ef4444'); }
        ctx.fillStyle = hpGrad;
        ctx.beginPath(); ctx.roundRect(-barW / 2, barY, barW * hpRatio, barH, 3); ctx.fill();

        ctx.globalAlpha = 1;
        ctx.restore();
      }
    }

    // ======= PROJECTILES =======
    for (const proj of g.projectiles) {
      if (!proj.alive) continue;
      if (proj.x < cam.x - 30 || proj.x > cam.x + W + 30) continue;

      ctx.save();
      ctx.translate(proj.x, proj.y);

      const isEnemy = proj.isEnemy;
      const color = isEnemy ? '#ef4444' : '#ffd700';
      const glowColor = isEnemy ? 'rgba(239,68,68,0.4)' : 'rgba(255,215,0,0.4)';

      // Trail
      if (proj.trail && proj.trail.length > 1) {
        for (let ti = 1; ti < proj.trail.length; ti++) {
          const alpha = ti / proj.trail.length * 0.5;
          ctx.strokeStyle = isEnemy ? `rgba(239,68,68,${alpha})` : `rgba(255,215,0,${alpha})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(proj.trail[ti - 1].x - proj.x, proj.trail[ti - 1].y - proj.y);
          ctx.lineTo(proj.trail[ti].x - proj.x, proj.trail[ti].y - proj.y);
          ctx.stroke();
        }
      }

      // Glow
      const projGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 14);
      projGlow.addColorStop(0, glowColor);
      projGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = projGlow;
      ctx.beginPath(); ctx.arc(0, 0, 14, 0, Math.PI * 2); ctx.fill();

      // Body
      ctx.fillStyle = color;
      ctx.beginPath(); ctx.arc(0, 0, 7, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(-1, -1, 3, 0, Math.PI * 2); ctx.fill();

      // Letter on projectile
      ctx.font = `bold 10px "Exo 2", sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = isEnemy ? '#fff' : '#000';
      ctx.fillText(proj.letter, 0, 1);

      ctx.restore();
    }

    // ======= PLAYER =======
    const pl = g.player;
    if (!(pl.flashTimer > 0 && Math.floor(pl.flashTimer) % 6 < 3)) {
      ctx.save();
      ctx.translate(pl.x, pl.y);

      // Shield effect
      if (g.shieldTimer > 0) {
        const shieldAlpha = 0.2 + Math.sin(g.time * 0.15) * 0.1;
        ctx.strokeStyle = `rgba(56,189,248,${shieldAlpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.stroke();
        const shieldGrad = ctx.createRadialGradient(0, 0, 15, 0, 0, 24);
        shieldGrad.addColorStop(0, 'transparent');
        shieldGrad.addColorStop(1, `rgba(56,189,248,${shieldAlpha * 0.3})`);
        ctx.fillStyle = shieldGrad;
        ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.fill();
      }

      const facing = pl.facing;
      const bobY = pl.onGround && Math.abs(pl.vx) > 0.5 ? Math.sin(g.time * 0.3) * 2 : 0;

      ctx.save();
      ctx.scale(facing, 1);
      ctx.translate(0, bobY);

      // Robot body (rounded rect)
      const bodyGrad = ctx.createLinearGradient(0, -PLAYER_H / 2, 0, PLAYER_H / 2);
      bodyGrad.addColorStop(0, '#60a5fa');
      bodyGrad.addColorStop(0.5, '#3b82f6');
      bodyGrad.addColorStop(1, '#2563eb');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.roundRect(-PLAYER_W / 2, -PLAYER_H / 2, PLAYER_W, PLAYER_H, 6);
      ctx.fill();
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-PLAYER_W / 2, -PLAYER_H / 2, PLAYER_W, PLAYER_H, 6);
      ctx.stroke();

      // Head (circle)
      ctx.fillStyle = '#93c5fd';
      ctx.beginPath(); ctx.arc(0, -PLAYER_H / 2 - 8, 10, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(0, -PLAYER_H / 2 - 8, 10, 0, Math.PI * 2); ctx.stroke();

      // Antenna
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, -PLAYER_H / 2 - 18); ctx.lineTo(0, -PLAYER_H / 2 - 26); ctx.stroke();
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath(); ctx.arc(0, -PLAYER_H / 2 - 27, 3, 0, Math.PI * 2); ctx.fill();

      // Eyes (glowing)
      const eyeGlow = g.shieldTimer > 0 ? '#38bdf8' : g.speedTimer > 0 ? '#4ade80' : '#fbbf24';
      ctx.fillStyle = eyeGlow;
      ctx.shadowColor = eyeGlow;
      ctx.shadowBlur = 6;
      ctx.beginPath(); ctx.arc(-4, -PLAYER_H / 2 - 9, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(4, -PLAYER_H / 2 - 9, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;

      // Blaster arm
      if (pl.shooting) {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.roundRect(PLAYER_W / 2, -6, 14, 8, 3);
        ctx.fill();
        // Muzzle glow
        const mGlow = ctx.createRadialGradient(PLAYER_W / 2 + 14, -2, 0, PLAYER_W / 2 + 14, -2, 10);
        mGlow.addColorStop(0, 'rgba(255,215,0,0.6)');
        mGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = mGlow;
        ctx.beginPath(); ctx.arc(PLAYER_W / 2 + 14, -2, 10, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.roundRect(PLAYER_W / 2, -4, 10, 6, 2);
        ctx.fill();
      }

      // Loaded letter display on chest
      if (pl.loadedLetter) {
        ctx.fillStyle = '#ffd700';
        ctx.font = `bold 12px "Exo 2", sans-serif`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(255,215,0,0.5)';
        ctx.shadowBlur = 4;
        ctx.fillText(pl.loadedLetter, 0, 0);
        ctx.shadowBlur = 0;
      }

      // Legs (simple)
      const legPhase = Math.abs(pl.vx) > 0.5 && pl.onGround ? Math.sin(g.time * 0.35) * 4 : 0;
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(-8, PLAYER_H / 2, 6, 6 + (pl.onGround ? 0 : -2));
      ctx.fillRect(2, PLAYER_H / 2, 6, 6 + (pl.onGround ? 0 : -2));
      if (pl.onGround && Math.abs(pl.vx) > 0.5) {
        ctx.fillRect(-8 + legPhase, PLAYER_H / 2, 6, 6);
        ctx.fillRect(2 - legPhase, PLAYER_H / 2, 6, 6);
      }

      ctx.restore();
      ctx.restore();
    }

    // ======= SHOCKWAVE PARTICLES =======
    for (const part of g.particles) {
      if (part.isShockwave) {
        const alpha = part.life / part.maxL;
        ctx.strokeStyle = `rgba(239,68,68,${alpha * 0.5})`;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(part.x, part.y, part.radius, 0, Math.PI * 2); ctx.stroke();
      }
    }

    ctx.restore(); // end world-space

    // ======= SCREEN-SPACE PARTICLES =======
    for (const part of g.particles) {
      if (part.isShockwave) continue;
      const alpha = part.life / part.maxL;
      const screenX = part.x - cam.x;
      const screenY = part.y;
      if (screenX < -20 || screenX > W + 20) continue;
      ctx.globalAlpha = alpha * alpha;
      ctx.fillStyle = part.color;
      const spd = Math.hypot(part.vx || 0, part.vy || 0);
      if (spd > 1.5) {
        ctx.save();
        ctx.translate(screenX, screenY);
        const ang = Math.atan2(part.vy || 0, part.vx || 0);
        ctx.rotate(ang);
        const len = Math.min(spd * 1.2, part.sz * 3) * alpha;
        const wid = part.sz * alpha * 0.5;
        ctx.beginPath(); ctx.ellipse(0, 0, len, Math.max(wid, 0.5), 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath(); ctx.arc(screenX, screenY, part.sz * alpha, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= TEXT EFFECTS =======
    for (const t2 of g.texts) {
      const alpha = Math.min(1, t2.life / (t2.maxL * 0.3));
      const screenX = t2.x - cam.x;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = t2.color;
      ctx.font = `bold ${t2.sz}px "Exo 2", sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 5;
      ctx.fillText(t2.text, screenX, t2.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    // ======= CANVAS HUD ELEMENTS =======
    // Loaded letter display (top center)
    if (g.player.loadedLetter) {
      ctx.save();
      ctx.translate(W / 2, 50);
      const hudGlow = ctx.createRadialGradient(0, 0, 10, 0, 0, 30);
      hudGlow.addColorStop(0, 'rgba(255,215,0,0.3)');
      hudGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = hudGlow;
      ctx.beginPath(); ctx.arc(0, 0, 30, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, 20, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffd700';
      ctx.font = `bold 20px "Exo 2", sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(g.player.loadedLetter, 0, 1);
      ctx.font = `600 8px "Exo 2", sans-serif`;
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('LOADED', 0, 28);
      ctx.restore();
    }

    ctx.restore(); // end shake transform
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

  // Touch input for mobile
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const handleTouch = (e: TouchEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const t = touchRef.current;
      t.left = false; t.right = false; t.jump = false; t.shoot = false;
      for (let i = 0; i < e.touches.length; i++) {
        const tx = e.touches[i].clientX - rect.left;
        const ty = e.touches[i].clientY - rect.top;
        const W = rect.width;
        const H = rect.height;
        // Left third = move left
        if (tx < W * 0.25) t.left = true;
        // Right side top = shoot
        else if (tx > W * 0.65 && ty < H * 0.6) t.shoot = true;
        // Right third bottom = move right
        else if (tx > W * 0.55) t.right = true;
        // Middle = jump
        if (ty < H * 0.4 && tx > W * 0.25 && tx < W * 0.75) t.jump = true;
      }
    };
    const handleTouchEnd = () => {
      const t = touchRef.current;
      t.left = false; t.right = false; t.jump = false; t.shoot = false;
    };
    el.addEventListener('touchstart', handleTouch, { passive: false });
    el.addEventListener('touchmove', handleTouch, { passive: false });
    el.addEventListener('touchend', handleTouchEnd);
    el.addEventListener('touchcancel', handleTouchEnd);
    return () => {
      el.removeEventListener('touchstart', handleTouch);
      el.removeEventListener('touchmove', handleTouch);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [screen]);

  // ========== LETTER SELECTION (mobile letter rack) ==========
  const selectLetter = (letter: string) => {
    if (gRef.current) {
      gRef.current.player.loadedLetter = letter;
    }
  };

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="sb-root">
        <style>{styles}</style>
        <div className="sb-intro">
          <div className="sb-intro-stars">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="sb-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="sb-intro-body">
            <div className="sb-logo-wrap">
              <div className="sb-logo-deco" />
              <div className="sb-logo-stack">
                <h1 className="sb-title">SOUND BLASTER</h1>
                <p className="sb-subtitle">PHONICS PLATFORMER</p>
              </div>
              <div className="sb-logo-deco" />
            </div>

            <div className="sb-card">
              <div className="sb-card-header">
                <div className="sb-card-line" />
                <span>HOW TO PLAY</span>
                <div className="sb-card-line" />
              </div>
              <div className="sb-rules">
                <div className="sb-rule" style={{ '--rc': '#4ade80' } as React.CSSProperties}>
                  <span className="sb-rule-icon">🏃</span>
                  <div className="sb-rule-body"><strong>RUN &amp; JUMP</strong><span>Arrows/WASD to move, Space to jump. Double-jump unlocked!</span></div>
                </div>
                <div className="sb-rule" style={{ '--rc': '#ffd700' } as React.CSSProperties}>
                  <span className="sb-rule-icon">🔤</span>
                  <div className="sb-rule-body"><strong>LOAD A LETTER</strong><span>Press a letter key to load it into your blaster.</span></div>
                </div>
                <div className="sb-rule" style={{ '--rc': '#38bdf8' } as React.CSSProperties}>
                  <span className="sb-rule-icon">💥</span>
                  <div className="sb-rule-body"><strong>BLAST OBJECTS</strong><span>Press X to shoot! Match the beginning sound. B for Ball!</span></div>
                </div>
                <div className="sb-rule" style={{ '--rc': '#a78bfa' } as React.CSSProperties}>
                  <span className="sb-rule-icon">👾</span>
                  <div className="sb-rule-body"><strong>BEAT BOSSES</strong><span>Boss every world! Shoot correct letter 5 times to win.</span></div>
                </div>
              </div>
            </div>

            <div className="sb-controls">
              <div className="sb-ctrl"><kbd>WASD</kbd> <span className="sb-ctrl-sep">/</span> <kbd>{'\u2190\u2191\u2192\u2193'}</kbd> <span className="sb-ctrl-label">Move</span></div>
              <div className="sb-ctrl"><kbd>A-Z</kbd> <span className="sb-ctrl-label">Load Letter</span></div>
              <div className="sb-ctrl"><kbd>X</kbd> <span className="sb-ctrl-label">Shoot</span></div>
            </div>

            <button className="sb-start-btn" onClick={() => setScreen('playing')}>
              START ADVENTURE
              <span className="sb-btn-shine" />
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
      <div className="sb-root">
        <style>{styles}</style>
        <div className="sb-gameover">
          <div className="sb-intro-stars">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="sb-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="sb-go-body">
            <h1 className="sb-go-title">GAME OVER</h1>
            <div className="sb-go-stats">
              <div className="sb-go-stat">
                <span className="sb-go-label">SCORE</span>
                <span className="sb-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="sb-go-divider" />
              <div className="sb-go-stat">
                <span className="sb-go-label">WORLD</span>
                <span className="sb-go-val">{finalWorld}</span>
              </div>
            </div>
            <div className="sb-go-btns">
              <button className="sb-start-btn" onClick={() => setScreen('playing')}>
                TRY AGAIN
                <span className="sb-btn-shine" />
              </button>
              <button className="sb-menu-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  const worldLetters = WORLDS[(gRef.current?.worldIdx || 0) % WORLDS.length].letters;
  const allLetters = 'ABCDEFGHJKLMNPRSTW'.split('');

  return (
    <div className="sb-root">
      <style>{styles}</style>
      <div className="sb-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="sb-canvas" />

        {/* HUD Overlay */}
        <div className="sb-hud-top">
          <div className="sb-hud-left">
            <div className="sb-wave-badge">
              <span className="sb-wave-label">WORLD</span>
              <span className="sb-wave-num">{hud.world}</span>
            </div>
            <div className="sb-lives">
              {[...Array(Math.max(0, hud.lives))].map((_, i) => (
                <span key={i} className="sb-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="sb-hud-center">
            <div className="sb-collect-display">
              <span className="sb-collect-label">COLLECTED</span>
              <span className="sb-collect-num">{hud.collected}/{hud.totalObjects}</span>
            </div>
          </div>
          <div className="sb-hud-right">
            <div className="sb-score-badge">{hud.score.toLocaleString()}</div>
            {hud.combo > 1 && <div className="sb-combo">{hud.comboMultiplier.toFixed(1)}x</div>}
            {hud.speedActive && <div className="sb-effect-badge sb-eff-speed">SPEED</div>}
            {hud.shieldActive && <div className="sb-effect-badge sb-eff-shield">SHIELD</div>}
            {hud.multiActive && <div className="sb-effect-badge sb-eff-multi">MULTI</div>}
            {hud.magnetActive && <div className="sb-effect-badge sb-eff-magnet">MAGNET</div>}
          </div>
        </div>

        {/* Boss HP overlay */}
        {hud.bossActive && (
          <div className="sb-boss-hud">
            <div className="sb-boss-label">
              BOSS {'\u2014'} Shoot: <strong>&quot;{hud.bossLetter}&quot;</strong>
            </div>
            <div className="sb-boss-bar-bg">
              <div className="sb-boss-bar-fill" style={{ width: `${(hud.bossHP / hud.bossMaxHP) * 100}%` }} />
              <div className="sb-boss-bar-shine" />
            </div>
          </div>
        )}

        {/* Mobile letter rack */}
        <div className="sb-letter-rack">
          {allLetters.map(letter => (
            <button
              key={letter}
              className={`sb-letter-btn ${hud.loadedLetter === letter ? 'active' : ''} ${worldLetters.includes(letter) ? 'world-letter' : ''}`}
              onClick={() => selectLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

:root {
  --sb-bg: #04060e;
  --sb-surface: rgba(255,255,255,0.03);
  --sb-border: rgba(255,255,255,0.06);
  --sb-glass: rgba(8,12,24,0.7);
  --sb-glass-border: rgba(100,140,255,0.12);
  --sb-text: #c8d6e5;
  --sb-text-dim: #4a5568;
  --sb-accent: #60a5fa;
  --sb-glow: rgba(96,165,250,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.sb-root {
  width: 100%; height: 100%;
  font-family: 'Exo 2', sans-serif;
  overflow: hidden;
  background: var(--sb-bg);
  color: var(--sb-text);
  user-select: none; -webkit-user-select: none;
}

/* ===== SHARED ===== */
.sb-intro, .sb-gameover {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(60,80,180,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(40,120,80,0.08) 0%, transparent 50%),
    var(--sb-bg);
}
.sb-intro-stars { position: absolute; inset: 0; pointer-events: none; }
.sb-star {
  position: absolute; border-radius: 50%; background: #fff;
  animation: sbTwinkle 3s ease-in-out infinite alternate;
}
@keyframes sbTwinkle {
  0% { opacity: 0.08; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.5); }
}

/* ===== INTRO ===== */
.sb-intro-body, .sb-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 500px; width: 100%;
  animation: sbFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes sbFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.sb-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.sb-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--sb-accent), transparent);
  opacity: 0.4;
}
.sb-logo-stack { display: flex; flex-direction: column; align-items: center; }
.sb-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.8rem, 7vw, 2.8rem);
  font-weight: 900; letter-spacing: 4px; color: #fff;
  text-shadow: 0 0 40px rgba(96,165,250,0.3), 0 0 80px rgba(96,165,250,0.1);
}
.sb-subtitle {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem; font-weight: 500;
  color: var(--sb-text-dim); letter-spacing: 8px;
  text-transform: uppercase;
}

/* Card */
.sb-card {
  background: var(--sb-glass);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--sb-glass-border);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left; position: relative; overflow: hidden;
}
.sb-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(96,165,250,0.3), transparent);
}
.sb-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 600;
  color: var(--sb-text-dim); letter-spacing: 4px;
  text-transform: uppercase;
}
.sb-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, var(--sb-border), transparent);
}
.sb-rules { display: flex; flex-direction: column; gap: 0.6rem; }
.sb-rule {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px;
}
.sb-rule-icon {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem;
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.sb-rule-body {
  display: flex; flex-direction: column; gap: 0.1rem;
  font-size: 0.78rem; line-height: 1.3;
}
.sb-rule-body strong {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.72rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.sb-rule-body span { color: var(--sb-text-dim); font-size: 0.72rem; }

/* Controls */
.sb-controls {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem;
  margin-bottom: 1.8rem;
}
.sb-ctrl {
  display: flex; align-items: center; gap: 0.25rem;
  font-size: 0.78rem; color: var(--sb-text-dim);
}
.sb-ctrl-sep { opacity: 0.3; margin: 0 0.1rem; }
.sb-ctrl-label {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600; letter-spacing: 1px;
  font-size: 0.7rem; text-transform: uppercase;
  color: var(--sb-text-dim);
}
.sb-ctrl kbd {
  padding: 0.2rem 0.45rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-bottom-width: 2px;
  border-radius: 5px;
  font-family: 'Orbitron', monospace; font-size: 0.65rem;
  color: #7a8ba8;
}

/* CTA button */
.sb-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Orbitron', sans-serif; font-size: 0.85rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  border: 1px solid rgba(96,165,250,0.3);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow: 0 4px 24px rgba(37,99,235,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.sb-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
}
.sb-start-btn:active { transform: translateY(0); }
.sb-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: sbBtnShine 3s ease-in-out infinite;
}
@keyframes sbBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* ===== GAME OVER ===== */
.sb-go-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.sb-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 2rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: var(--sb-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--sb-glass-border);
  border-radius: 14px;
}
.sb-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, var(--sb-glass-border), transparent);
}
.sb-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.sb-go-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.65rem; font-weight: 600;
  color: var(--sb-text-dim); letter-spacing: 3px; text-transform: uppercase;
}
.sb-go-val {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem; font-weight: 900; color: white;
  text-shadow: 0 0 20px rgba(255,255,255,0.15);
}
.sb-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.sb-menu-btn {
  padding: 0.6rem 1.8rem; font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: var(--sb-text-dim);
  background: transparent; border: 1px solid var(--sb-border);
  border-radius: 8px; cursor: pointer; transition: all 0.25s; letter-spacing: 1px;
}
.sb-menu-btn:hover { border-color: rgba(255,255,255,0.15); color: var(--sb-text); }

/* ===== GAME ===== */
.sb-game {
  width: 100%; height: 100%; position: relative; overflow: hidden;
}
.sb-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.sb-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(4,6,14,0.85) 0%, rgba(4,6,14,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.sb-hud-left, .sb-hud-right { display: flex; align-items: center; gap: 0.5rem; }
.sb-hud-right { flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.sb-wave-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(96,165,250,0.1);
  border: 1px solid rgba(96,165,250,0.2);
  border-radius: 8px;
}
.sb-wave-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.55rem; font-weight: 600;
  color: var(--sb-accent); letter-spacing: 2px;
  text-transform: uppercase; opacity: 0.7;
}
.sb-wave-num {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem; font-weight: 800; color: #fff;
}
.sb-lives { display: flex; gap: 0.3rem; align-items: center; }
.sb-heart {
  display: flex; align-items: center;
  filter: drop-shadow(0 0 4px rgba(239,68,68,0.5));
}
.sb-hud-center { display: flex; flex-direction: column; align-items: center; }
.sb-collect-display {
  display: flex; align-items: baseline; gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  background: var(--sb-glass);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--sb-glass-border);
  border-radius: 10px;
}
.sb-collect-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.55rem; font-weight: 600;
  color: var(--sb-text-dim); letter-spacing: 2px;
}
.sb-collect-num {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem; font-weight: 900; color: #fff;
}
.sb-score-badge {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem; font-weight: 700;
  color: rgba(255,255,255,0.7); padding: 0.2rem 0;
}
.sb-combo {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem; font-weight: 700;
  color: #fbbf24;
  text-shadow: 0 0 10px rgba(251,191,36,0.4);
  animation: sbCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes sbCombo {
  0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }
}
.sb-effect-badge {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.55rem; font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 6px; letter-spacing: 1px;
  animation: sbEffectPulse 1s ease-in-out infinite alternate;
}
@keyframes sbEffectPulse { 0% { opacity: 0.6; } 100% { opacity: 1; } }
.sb-eff-speed { color: #4ade80; background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.25); }
.sb-eff-shield { color: #38bdf8; background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); }
.sb-eff-multi { color: #a78bfa; background: rgba(167,139,250,0.1); border: 1px solid rgba(167,139,250,0.25); }
.sb-eff-magnet { color: #fb923c; background: rgba(251,146,60,0.1); border: 1px solid rgba(251,146,60,0.25); }

/* Boss HUD */
.sb-boss-hud {
  position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
  z-index: 20; pointer-events: none;
  padding: 0.4rem 1rem;
  background: var(--sb-glass);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(239,68,68,0.15);
  border-radius: 12px;
  animation: sbBossIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes sbBossIn {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.sb-boss-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 700; color: #ef4444;
  letter-spacing: 2px; text-transform: uppercase;
}
.sb-boss-label strong { color: #ffd700; font-size: 0.9rem; }
.sb-boss-bar-bg {
  width: 220px; height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px; overflow: hidden; position: relative;
}
.sb-boss-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 3px; transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(239,68,68,0.4);
}
.sb-boss-bar-shine {
  position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
  border-radius: 3px 3px 0 0;
}

/* Letter rack (mobile) */
.sb-letter-rack {
  position: absolute; bottom: 0.4rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.2rem;
  z-index: 20; pointer-events: auto;
  padding: 0.3rem;
  background: var(--sb-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--sb-glass-border);
  border-radius: 12px;
  max-width: 95vw;
}
.sb-letter-btn {
  width: 30px; height: 30px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Orbitron', sans-serif; font-size: 0.65rem; font-weight: 700;
  color: var(--sb-text-dim);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px; cursor: pointer;
  transition: all 0.15s;
}
.sb-letter-btn:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.1); }
.sb-letter-btn.active {
  color: #ffd700;
  background: rgba(255,215,0,0.1);
  border-color: rgba(255,215,0,0.3);
  box-shadow: 0 0 10px rgba(255,215,0,0.2);
}
.sb-letter-btn.world-letter {
  color: #60a5fa;
}
.sb-letter-btn.world-letter.active {
  color: #ffd700;
}

/* Responsive */
@media (max-width: 500px) {
  .sb-hud-top { padding: 0.3rem 0.4rem; }
  .sb-collect-num { font-size: 0.9rem; }
  .sb-wave-badge { padding: 0.2rem 0.5rem; }
  .sb-wave-num { font-size: 0.75rem; }
  .sb-score-badge { font-size: 0.7rem; }
  .sb-letter-btn { width: 26px; height: 26px; font-size: 0.55rem; }
  .sb-logo-deco { display: none; }
  .sb-rules { gap: 0.4rem; }
}
`;
