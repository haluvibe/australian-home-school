"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface PhonicsBlasterProps {
  onExit?: () => void;
}

/*
  PHONICS BLASTER: BLEND SQUADRON

  A vertical scrolling shooter where your weapons are phonics blends/digraphs.
  Fire the correct blend at word endings to complete words!

  Weapons: SH, CH, TH, BL cannons
  Controls:
  - Arrow Keys / WASD: Move ship
  - Space / Z: Shoot
  - 1/2/3/4: Switch weapon (SH, CH, TH, BL)
  - Q/E: Cycle weapons
  - Mouse: Move + Click to shoot
*/

// =============== CONSTANTS ===============
const SHIP_SPEED = 7.5;
const SHOOT_COOLDOWNS = [180, 200, 200, 220];
const ENEMIES_PER_BOSS = 5;
const SPAWN_INTERVAL_MIN = 40;
const SPAWN_INTERVAL_MAX = 140;

const WEAPONS = [
  { id: 'sh', symbol: 'SH', name: 'SH', color: '#c084fc', glow: 'rgba(192,132,252,0.5)', bulletSpeed: 8, shotStyle: 'rapid' },
  { id: 'ch', symbol: 'CH', name: 'CH', color: '#4ade80', glow: 'rgba(74,222,128,0.5)', bulletSpeed: 7, shotStyle: 'homing' },
  { id: 'th', symbol: 'TH', name: 'TH', color: '#38bdf8', glow: 'rgba(56,189,248,0.5)', bulletSpeed: 7, shotStyle: 'heavy' },
  { id: 'bl', symbol: 'BL', name: 'BL', color: '#fb923c', glow: 'rgba(251,146,60,0.5)', bulletSpeed: 7, shotStyle: 'ricochet' },
];

// Word lists per blend
const WORD_DATA: Record<string, { ending: string; word: string }[]> = {
  sh: [
    { ending: 'ip', word: 'ship' }, { ending: 'op', word: 'shop' }, { ending: 'ed', word: 'shed' },
    { ending: 'ell', word: 'shell' }, { ending: 'in', word: 'shin' }, { ending: 'ut', word: 'shut' },
    { ending: 'ock', word: 'shock' }, { ending: 'are', word: 'share' }, { ending: 'ape', word: 'shape' },
    { ending: 'ine', word: 'shine' }, { ending: 'ow', word: 'show' }, { ending: 'out', word: 'shout' },
  ],
  ch: [
    { ending: 'ip', word: 'chip' }, { ending: 'op', word: 'chop' }, { ending: 'in', word: 'chin' },
    { ending: 'est', word: 'chest' }, { ending: 'eck', word: 'check' }, { ending: 'ain', word: 'chain' },
    { ending: 'air', word: 'chair' }, { ending: 'alk', word: 'chalk' }, { ending: 'ase', word: 'chase' },
    { ending: 'eer', word: 'cheer' }, { ending: 'ild', word: 'child' }, { ending: 'urn', word: 'church' },
  ],
  th: [
    { ending: 'in', word: 'thin' }, { ending: 'ick', word: 'thick' }, { ending: 'is', word: 'this' },
    { ending: 'at', word: 'that' }, { ending: 'em', word: 'them' }, { ending: 'en', word: 'then' },
    { ending: 'ink', word: 'think' }, { ending: 'ree', word: 'three' }, { ending: 'row', word: 'throw' },
    { ending: 'umb', word: 'thumb' }, { ending: 'ing', word: 'thing' }, { ending: 'ank', word: 'thank' },
  ],
  bl: [
    { ending: 'ack', word: 'black' }, { ending: 'ade', word: 'blade' }, { ending: 'ame', word: 'blame' },
    { ending: 'ank', word: 'blank' }, { ending: 'ast', word: 'blast' }, { ending: 'aze', word: 'blaze' },
    { ending: 'eed', word: 'bleed' }, { ending: 'end', word: 'blend' }, { ending: 'ess', word: 'bless' },
    { ending: 'ind', word: 'blind' }, { ending: 'ock', word: 'block' }, { ending: 'ow', word: 'blow' },
  ],
};

// Boss words: words missing their blend, player must fire correct blend
const BOSS_WORDS: Record<string, string[]> = {
  sh: ['ship', 'shell', 'shine', 'shock', 'shout', 'shape'],
  ch: ['chip', 'chest', 'chain', 'chair', 'chase', 'cheer'],
  th: ['thin', 'thick', 'think', 'three', 'throw', 'thank'],
  bl: ['black', 'blast', 'blaze', 'blend', 'blind', 'block'],
};

const BLEND_KEYS = ['sh', 'ch', 'th', 'bl'];

// World config: which blends are active per world
const WORLD_CONFIG = [
  { name: 'SH SECTOR', blends: ['sh'], color: '#c084fc' },
  { name: 'CH SECTOR', blends: ['ch'], color: '#4ade80' },
  { name: 'TH SECTOR', blends: ['th'], color: '#38bdf8' },
  { name: 'BL SECTOR', blends: ['bl'], color: '#fb923c' },
  { name: 'MIXED ZONE', blends: ['sh', 'ch', 'th', 'bl'], color: '#fbbf24' },
  { name: 'CHAOS ZONE', blends: ['sh', 'ch', 'th', 'bl'], color: '#ef4444' },
];

const PICKUP_TYPES = [
  { id: 'heart', symbol: '\u2665', label: '+1 LIFE', color: '#ef4444' },
  { id: 'shield', symbol: '\u25c6', label: 'WORD SHIELD!', color: '#38bdf8' },
  { id: 'bomb', symbol: '\u2600', label: 'BLEND BOMB!', color: '#fbbf24' },
  { id: 'rapid', symbol: '\u00bb', label: 'RAPID FIRE!', color: '#c084fc' },
];
const COMBO_PICKUP_INTERVAL = 4;

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const dist = (a: { x: number; y: number }, b: { x: number; y: number }): number => Math.hypot(a.x - b.x, a.y - b.y);
const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number): number => Math.floor(rand(lo, hi + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function getCorrectBlend(ending: string): string | null {
  for (const blend of BLEND_KEYS) {
    if (WORD_DATA[blend].some(w => w.ending === ending)) return blend;
  }
  return null;
}

function getWordForBlendEnding(blend: string, ending: string): string | null {
  const entry = WORD_DATA[blend].find(w => w.ending === ending);
  return entry ? entry.word : null;
}

function getAllMatchingBlends(ending: string): string[] {
  const matches: string[] = [];
  for (const blend of BLEND_KEYS) {
    if (WORD_DATA[blend].some(w => w.ending === ending)) matches.push(blend);
  }
  return matches;
}

// =============== MAIN COMPONENT ===============
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

export default function PhonicsBlaster({ onExit }: PhonicsBlasterProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const mouseRef = useRef({ x: 0, y: 0, down: false, active: false });
  const prevTimeRef = useRef(0);

  const [hud, setHud] = useState({
    score: 0, lives: 3, weapon: 0,
    world: 1, worldName: 'SH SECTOR', combo: 0,
    bossHP: 0, bossMaxHP: 0, bossWord: '',
    bossActive: false, bossBlend: '',
    shieldActive: false, rapidActive: false,
    wordsCompleted: 0,
    completedWords: [] as string[],
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

    const stars: G[] = [];
    for (let layer = 0; layer < 3; layer++) {
      for (let i = 0; i < 40; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          speed: (layer + 1) * 0.4,
          size: 0.4 + layer * 0.6,
          bright: 0.12 + layer * 0.22,
          flare: layer === 2 && Math.random() < 0.15,
          hue: Math.random() < 0.3 ? 200 + Math.random() * 40 : 0,
        });
      }
    }
    const nebulae: G[] = [];
    for (let i = 0; i < 4; i++) {
      nebulae.push({
        x: Math.random() * W, y: Math.random() * H,
        r: 80 + Math.random() * 120,
        hue: [260, 160, 200, 30][i],
        speed: 0.08 + Math.random() * 0.12,
        alpha: 0.025 + Math.random() * 0.02,
      });
    }

    _idCounter = 0;

    gRef.current = {
      W, H, stars, nebulae,
      ship: { x: W / 2, y: H - 90, invTimer: 0, flashTimer: 0 },
      bullets: [],
      enemies: [],
      eBullets: [],
      particles: [],
      texts: [],
      score: 0, lives: 3, weapon: 0,
      worldIdx: 0,
      spawnCooldown: 80, enemiesSpawned: 0, nextBossAt: ENEMIES_PER_BOSS,
      shootTimer: 0, combo: 0, comboTimer: 0,
      boss: null,
      pickups: [],
      shieldTimer: 0, rapidTimer: 0,
      lastComboPickup: 0,
      shake: 0, slowmo: 0,
      time: 0, hudTick: 0,
      completedWords: [] as string[],
      wordsCompleted: 0,
      transition: null as { phase: string; timer: number } | null,
    };

    setHud({
      score: 0, lives: 3, weapon: 0,
      world: 1, worldName: 'SH SECTOR', combo: 0,
      bossHP: 0, bossMaxHP: 0, bossWord: '',
      bossActive: false, bossBlend: '',
      shieldActive: false, rapidActive: false,
      wordsCompleted: 0,
      completedWords: [],
      msg: 'GET READY!', msgTimer: 80,
    });
  }, []);

  // ========== SPAWN ENEMY ==========
  function spawnEnemy(g: G) {
    const worldCfg = WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)];
    const activeBlends = worldCfg.blends;
    // Pick a random blend and a word ending for it
    const blend = pick(activeBlends);
    const wordEntry = pick(WORD_DATA[blend]);
    const ending = wordEntry.ending;
    const correctBlends = getAllMatchingBlends(ending);

    const spd = Math.min(1.2 + g.enemiesSpawned * 0.02, 3.0);
    const startX = rand(50, g.W - 50);

    // Color based on primary correct blend
    const blendIdx = BLEND_KEYS.indexOf(correctBlends[0]);
    const enemyColor = WEAPONS[blendIdx >= 0 ? blendIdx : 0].color;

    g.enemies.push({
      id: nextId(),
      x: startX, y: -40,
      vx: rand(-0.3, 0.3), vy: spd,
      ending: ending,
      correctBlends: correctBlends,
      displayText: '-' + ending,
      w: 44, h: 44,
      hitFlash: 0,
      color: enemyColor,
      wobble: Math.random() * Math.PI * 2,
      shootTimer: 200 + Math.random() * 200,
    });
    g.enemiesSpawned++;
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, initGame]);

  // ========== UPDATE ==========
  function update(dt: number) {
    const g = gRef.current;
    if (!g) return;
    g.time += dt;
    if (g.shake > 0) { g.shake *= 0.88; if (g.shake < 0.3) g.shake = 0; }
    if (g.comboTimer > 0) { g.comboTimer -= dt; if (g.comboTimer <= 0) g.combo = 0; }

    const k = keysRef.current;
    const m = mouseRef.current;
    const s = g.ship;

    // ---- world transition ----
    if (g.transition) {
      const tr = g.transition;
      tr.timer -= dt;
      if (tr.phase === 'flyOut') {
        s.x += (g.W / 2 - s.x) * 0.05 * dt;
        s.y -= 7 * dt;
        g.enemies = g.enemies.filter((e: G) => { e.y += 8 * dt; return e.y < g.H + 60; });
        g.eBullets = [];
        g.bullets = [];
        if (s.y < -60) {
          tr.phase = 'pause';
          tr.timer = 40;
          g.enemies = [];
          g.particles = [];
        }
      } else if (tr.phase === 'pause') {
        if (tr.timer <= 0) {
          tr.phase = 'flyIn';
          tr.timer = 60;
          s.x = g.W / 2;
          s.y = g.H + 60;
          s.invTimer = 120;
          s.flashTimer = 0;
          g.worldIdx++;
          g.nextBossAt = g.enemiesSpawned + ENEMIES_PER_BOSS;
          const wc = WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)];
          g.texts.push({ x: g.W / 2, y: g.H / 2 - 20, text: wc.name, color: wc.color, life: 100, maxL: 100, vy: 0, sz: 40 });
        }
      } else if (tr.phase === 'flyIn') {
        const targetY = g.H - 90;
        s.y += (targetY - s.y) * 0.06 * dt;
        if (tr.timer <= 0 && Math.abs(s.y - targetY) < 5) {
          s.y = targetY;
          g.transition = null;
          g.spawnCooldown = 30;
        }
      }
    } else {
      // ---- ship movement ----
      let dx = 0, dy = 0;
      if (k['ArrowLeft'] || k['a'] || k['A']) dx -= 1;
      if (k['ArrowRight'] || k['d'] || k['D']) dx += 1;
      if (k['ArrowUp'] || k['w'] || k['W']) dy -= 1;
      if (k['ArrowDown'] || k['s'] || k['S']) dy += 1;
      if (dx && dy) { dx *= 0.707; dy *= 0.707; }
      if (m.active && m.down) {
        const md = Math.hypot(m.x - s.x, m.y - s.y);
        if (md > 8) { dx = (m.x - s.x) / md; dy = (m.y - s.y) / md; }
      }
      s.x = clamp(s.x + dx * SHIP_SPEED * dt, 24, g.W - 24);
      s.y = clamp(s.y + dy * SHIP_SPEED * dt, 60, g.H - 40);
      if (s.invTimer > 0) s.invTimer -= dt;
      if (s.flashTimer > 0) s.flashTimer -= dt;

      // ---- weapon switch ----
      if (k['1']) g.weapon = 0;
      if (k['2']) g.weapon = 1;
      if (k['3']) g.weapon = 2;
      if (k['4']) g.weapon = 3;
      if (k['q'] || k['Q']) { k['q'] = k['Q'] = false; g.weapon = (g.weapon + WEAPONS.length - 1) % WEAPONS.length; }
      if (k['e'] || k['E']) { k['e'] = k['E'] = false; g.weapon = (g.weapon + 1) % WEAPONS.length; }

      // ---- shooting ----
      const rapidMul = g.rapidTimer > 0 ? 0.5 : 1;
      g.shootTimer -= dt * 16.667;
      const firing = k[' '] || k['z'] || k['Z'] || m.down;
      if (firing && g.shootTimer <= 0) {
        g.shootTimer = SHOOT_COOLDOWNS[g.weapon] * rapidMul;
        const w = WEAPONS[g.weapon];
        g.bullets.push({
          id: nextId(), x: s.x, y: s.y - 22,
          vx: 0, vy: -w.bulletSpeed,
          wep: g.weapon, blend: w.id,
          sz: 5, alive: true,
        });
        // Rapid fire: double shot
        if (g.rapidTimer > 0) {
          g.bullets.push({
            id: nextId(), x: s.x + 8, y: s.y - 18,
            vx: 0.3, vy: -w.bulletSpeed * 0.95,
            wep: g.weapon, blend: w.id,
            sz: 4, alive: true,
          });
          g.bullets.push({
            id: nextId(), x: s.x - 8, y: s.y - 18,
            vx: -0.3, vy: -w.bulletSpeed * 0.95,
            wep: g.weapon, blend: w.id,
            sz: 4, alive: true,
          });
        }
      }

      // ---- bullets movement ----
      g.bullets = g.bullets.filter((b: G) => {
        if (!b.alive) return false;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        return b.x > -30 && b.x < g.W + 30 && b.y > -30 && b.y < g.H + 30;
      });

      // ---- enemy spawning ----
      g.spawnCooldown -= dt;
      if (g.spawnCooldown <= 0 && !g.boss) {
        const diff = Math.min(g.enemiesSpawned / 20, 8);
        const minI = Math.max(SPAWN_INTERVAL_MIN, 70 - diff * 5);
        g.spawnCooldown = rand(minI, SPAWN_INTERVAL_MAX);
        spawnEnemy(g);

        if (g.enemiesSpawned >= g.nextBossAt && !g.boss) {
          spawnBoss(g);
        }
      }

      // ---- enemies ----
      g.enemies = g.enemies.filter((e: G) => {
        e.wobble += dt * 0.05;
        e.x += (e.vx + Math.sin(e.wobble) * 0.5) * dt;
        e.y += e.vy * dt;
        // Enemy shooting
        e.shootTimer -= dt;
        if (e.shootTimer <= 0 && e.y > 60 && e.y < g.H - 180) {
          e.shootTimer = 180 + Math.random() * 200;
          const a = Math.atan2(s.y - e.y, s.x - e.x);
          g.eBullets.push({ id: nextId(), x: e.x, y: e.y + e.h / 2, vx: Math.cos(a) * 2.2, vy: Math.sin(a) * 2.2, sz: 4, color: '#ff6b6b' });
        }
        if (e.hitFlash > 0) e.hitFlash -= dt;
        return e.y < g.H + 60 && e.y > -60 && e.x > -60 && e.x < g.W + 60;
      });

      // ---- boss ----
      if (g.boss) {
        const b = g.boss;
        if (b.phase === 'enter') {
          b.y += (b.targetY - b.y) * 0.04 * dt;
          if (Math.abs(b.y - b.targetY) < 3) { b.y = b.targetY; b.phase = 'fight'; }
        } else if (b.phase === 'fight') {
          b.angle += dt * 0.02;
          const cx = g.W / 2;
          const rangeX = g.W * 0.3;
          b.x = cx + Math.sin(b.angle) * rangeX;
          b.y = b.targetY + Math.sin(b.angle * 2) * 40;
          b.x = clamp(b.x, b.w / 2 + 10, g.W - b.w / 2 - 10);
          b.y = clamp(b.y, 60, 220);
          b.shootTimer -= dt;
          b.patternAngle += dt * 0.08;
          if (b.shootTimer <= 0) {
            b.shootTimer = Math.max(50, 120 - g.worldIdx * 8) + Math.random() * 30;
            const aimed = Math.atan2(s.y - b.y, s.x - b.x);
            const bulletCount = 2 + Math.min(g.worldIdx, 4);
            const bSpd = Math.min(2.0 + g.worldIdx * 0.2, 4.0);
            const pattern = randInt(0, 2);
            for (let i = 0; i < bulletCount; i++) {
              let a: number;
              if (pattern === 0) {
                const half = (bulletCount - 1) / 2;
                a = aimed + (i - half) * 0.3;
              } else if (pattern === 1) {
                a = b.patternAngle + (i / bulletCount) * Math.PI * 2;
              } else {
                a = aimed + (Math.random() - 0.5) * 1.2;
              }
              g.eBullets.push({ id: nextId(), x: b.x, y: b.y + b.h / 2, vx: Math.cos(a) * bSpd, vy: Math.sin(a) * bSpd, sz: 6, boss: true, color: '#ff6b6b' });
            }
          }
          // Shockwave attack every ~5 seconds
          if (Math.floor(g.time * 0.1) % 300 === 0 && b.shockCooldown <= 0) {
            b.shockCooldown = 180;
            for (let i = 0; i < 12; i++) {
              const a = (i / 12) * Math.PI * 2;
              g.eBullets.push({ id: nextId(), x: b.x, y: b.y, vx: Math.cos(a) * 2.5, vy: Math.sin(a) * 2.5, sz: 5, boss: true, color: '#fbbf24' });
            }
            g.shake = 8;
          }
          if (b.shockCooldown > 0) b.shockCooldown -= dt;
        } else if (b.phase === 'dying') {
          b.hitFlash += dt;
          if (b.hitFlash > 50) {
            for (let i = 0; i < 35; i++) {
              g.particles.push({ x: b.x + rand(-60, 60), y: b.y + rand(-50, 50), vx: rand(-6, 6), vy: rand(-6, 6), life: 30 + Math.random() * 30, maxL: 60, color: ['#ff6b6b', '#ffd93d', '#ff8a5c', '#fff'][randInt(0, 3)], sz: 3 + Math.random() * 7 });
            }
            const pts = 500 * (g.worldIdx + 1);
            g.score += pts;
            g.shake = 18;
            g.texts.push({ x: b.x, y: b.y, text: `BOSS DEFEATED! +${pts}`, color: '#ffd700', life: 100, maxL: 100, vy: -1, sz: 22 });
            g.pickups.push({ id: nextId(), x: b.x, y: b.y, vy: 1.2, type: PICKUP_TYPES[0], bobT: 0 });
            g.boss = null;
            g.texts.push({ x: g.W / 2, y: g.H / 2, text: 'WORLD COMPLETE!', color: '#4ade80', life: 120, maxL: 120, vy: -0.5, sz: 36 });
            g.transition = { phase: 'flyOut', timer: 80 };
          }
        }
        if (b && b.hitFlash > 0 && b.phase !== 'dying') b.hitFlash -= dt;
      }

      // ---- enemy bullets ----
      g.eBullets = g.eBullets.filter((b: G) => {
        b.x += b.vx * dt; b.y += b.vy * dt;
        return b.x > -20 && b.x < g.W + 20 && b.y > -20 && b.y < g.H + 20;
      });

      // ---- collisions: player bullets vs enemies ----
      for (let bi = g.bullets.length - 1; bi >= 0; bi--) {
        const bul = g.bullets[bi];
        if (!bul.alive) continue;
        for (let ei = g.enemies.length - 1; ei >= 0; ei--) {
          const en = g.enemies[ei];
          if (dist(bul, en) < en.w / 2 + bul.sz + 4) {
            // Check if blend matches
            if (en.correctBlends.includes(bul.blend)) {
              // Correct blend! Word completed!
              const word = getWordForBlendEnding(bul.blend, en.ending) || bul.blend + en.ending;
              g.combo++;
              g.comboTimer = 120;
              const base = 50;
              const bonus = Math.floor(base * g.combo * 0.2);
              g.score += base + bonus;
              g.wordsCompleted++;
              if (!g.completedWords.includes(word)) g.completedWords.push(word);

              // Word completion effects
              g.texts.push({ x: en.x, y: en.y - 30, text: word.toUpperCase(), color: '#ffd700', life: 70, maxL: 70, vy: -1.8, sz: 20 });
              g.texts.push({ x: en.x, y: en.y - 10, text: `+${base + bonus}`, color: WEAPONS[bul.wep].color, life: 45, maxL: 45, vy: -1.2, sz: 14 });

              for (let p = 0; p < 14; p++) {
                g.particles.push({ x: en.x + rand(-14, 14), y: en.y + rand(-14, 14), vx: rand(-5, 5), vy: rand(-5, 5), life: 20 + Math.random() * 16, maxL: 36, color: WEAPONS[bul.wep].color, sz: 2 + Math.random() * 5 });
              }
              // Golden sparkle burst
              for (let p = 0; p < 8; p++) {
                g.particles.push({ x: en.x + rand(-8, 8), y: en.y + rand(-8, 8), vx: rand(-3, 3), vy: rand(-6, -1), life: 25 + Math.random() * 15, maxL: 40, color: '#ffd700', sz: 1.5 + Math.random() * 3 });
              }
              g.shake = Math.min(g.shake + 4, 12);

              // Drop pickup at combo milestones
              if (g.combo >= g.lastComboPickup + COMBO_PICKUP_INTERVAL) {
                g.lastComboPickup = g.combo;
                const ptype = PICKUP_TYPES[randInt(0, PICKUP_TYPES.length - 1)];
                g.pickups.push({ id: nextId(), x: en.x, y: en.y, vy: 1.2, type: ptype, bobT: Math.random() * Math.PI * 2 });
              }

              g.enemies.splice(ei, 1);
            } else {
              // Wrong blend! Bounce off with sparks
              en.hitFlash = 10;
              g.combo = 0;
              g.comboTimer = 0;
              g.texts.push({ x: en.x, y: en.y - 28, text: 'WRONG BLEND!', color: '#ef4444', life: 40, maxL: 40, vy: -1.5, sz: 13 });
              for (let p = 0; p < 6; p++) {
                g.particles.push({ x: bul.x, y: bul.y, vx: rand(-4, 4), vy: rand(1, 5), life: 12, maxL: 12, color: '#ef4444', sz: 2 + Math.random() * 2 });
              }
              g.shake = 3;
            }
            bul.alive = false;
            break;
          }
        }

        // Player bullets vs boss
        if (bul.alive && g.boss && g.boss.phase === 'fight') {
          const bo = g.boss;
          if (dist(bul, bo) < bo.w / 2 + bul.sz) {
            if (bul.blend === bo.correctBlend) {
              bo.hp--;
              bo.hitFlash = 15;
              g.shake = 10;
              g.combo++;
              g.comboTimer = 120;
              g.texts.push({ x: bo.x, y: bo.y - 55, text: 'HIT! ' + bo.currentWord.toUpperCase(), color: '#ffd700', life: 60, maxL: 60, vy: -2, sz: 20 });
              if (!g.completedWords.includes(bo.currentWord)) g.completedWords.push(bo.currentWord);
              for (let p = 0; p < 18; p++) {
                g.particles.push({ x: bo.x + rand(-45, 45), y: bo.y + rand(-35, 35), vx: rand(-5, 5), vy: rand(-5, 5), life: 22 + Math.random() * 18, maxL: 40, color: '#ffd700', sz: 3 + Math.random() * 5 });
              }
              if (bo.hp <= 0) {
                bo.phase = 'dying';
                bo.hitFlash = 0;
              } else {
                // Next boss word
                advanceBossWord(g);
              }
            } else {
              bo.hitFlash = 4;
              g.combo = 0;
              g.texts.push({ x: bo.x, y: bo.y - 45, text: `Need ${bo.correctBlend.toUpperCase()}!`, color: '#94a3b8', life: 40, maxL: 40, vy: -1, sz: 13 });
              for (let p = 0; p < 4; p++) {
                g.particles.push({ x: bul.x, y: bul.y, vx: rand(-3, 3), vy: rand(1, 4), life: 12, maxL: 12, color: '#64748b', sz: 2 });
              }
            }
            bul.alive = false;
          }
        }
      }
      g.bullets = g.bullets.filter((b: G) => b.alive);

      // ---- collisions: player bullets vs enemy bullets ----
      for (let bi = g.bullets.length - 1; bi >= 0; bi--) {
        const bul = g.bullets[bi];
        if (!bul.alive) continue;
        for (let ei = g.eBullets.length - 1; ei >= 0; ei--) {
          if (dist(bul, g.eBullets[ei]) < bul.sz + g.eBullets[ei].sz + 2) {
            const mx = (bul.x + g.eBullets[ei].x) / 2;
            const my = (bul.y + g.eBullets[ei].y) / 2;
            for (let p = 0; p < 5; p++) {
              g.particles.push({ x: mx, y: my, vx: rand(-3, 3), vy: rand(-3, 3), life: 12 + Math.random() * 8, maxL: 20, color: '#fff', sz: 1.5 + Math.random() * 2 });
            }
            bul.alive = false;
            g.eBullets.splice(ei, 1);
            break;
          }
        }
      }
      g.bullets = g.bullets.filter((b: G) => b.alive);

      // ---- collisions: enemy bullets / enemies vs player ----
      if (s.invTimer <= 0 && g.shieldTimer <= 0) {
        for (let i = g.eBullets.length - 1; i >= 0; i--) {
          if (dist(g.eBullets[i], s) < 16 + g.eBullets[i].sz) {
            hitPlayer(g);
            g.eBullets.splice(i, 1);
            break;
          }
        }
        if (s.invTimer <= 0) {
          for (const en of g.enemies) {
            if (dist(en, s) < en.w / 2 + 14) { hitPlayer(g); break; }
          }
        }
      } else if (g.shieldTimer > 0 && s.invTimer <= 0) {
        // Shield absorbs one hit
        for (let i = g.eBullets.length - 1; i >= 0; i--) {
          if (dist(g.eBullets[i], s) < 20 + g.eBullets[i].sz) {
            g.shieldTimer = 0;
            g.eBullets.splice(i, 1);
            g.texts.push({ x: s.x, y: s.y - 30, text: 'SHIELD BLOCKED!', color: '#38bdf8', life: 40, maxL: 40, vy: -2, sz: 14 });
            g.shake = 5;
            break;
          }
        }
      }
    } // end normal gameplay

    // ---- pickups ----
    if (g.shieldTimer > 0) g.shieldTimer -= dt;
    if (g.rapidTimer > 0) g.rapidTimer -= dt;
    g.pickups = g.pickups.filter((pk: G) => {
      pk.bobT += dt * 0.1;
      pk.y += pk.vy * dt;
      pk.x += Math.sin(pk.bobT * 3) * 0.5 * dt;
      if (dist(pk, s) < 28) {
        if (pk.type.id === 'heart') {
          g.lives++;
        } else if (pk.type.id === 'shield') {
          g.shieldTimer = 300;
          s.invTimer = Math.max(s.invTimer, 10);
        } else if (pk.type.id === 'bomb') {
          // Blend bomb: complete all enemies on screen
          for (const en of g.enemies) {
            const correctB = en.correctBlends[0];
            const word = getWordForBlendEnding(correctB, en.ending) || correctB + en.ending;
            g.score += 30;
            g.wordsCompleted++;
            if (!g.completedWords.includes(word)) g.completedWords.push(word);
            g.texts.push({ x: en.x, y: en.y, text: word.toUpperCase(), color: '#fbbf24', life: 50, maxL: 50, vy: -1.5, sz: 16 });
            for (let p = 0; p < 8; p++) {
              g.particles.push({ x: en.x + rand(-10, 10), y: en.y + rand(-10, 10), vx: rand(-4, 4), vy: rand(-4, 4), life: 15 + Math.random() * 10, maxL: 25, color: '#fbbf24', sz: 2 + Math.random() * 3 });
            }
          }
          g.enemies = [];
          g.shake = 12;
        } else if (pk.type.id === 'rapid') {
          g.rapidTimer = 360;
        }
        g.texts.push({ x: pk.x, y: pk.y - 20, text: pk.type.label, color: pk.type.color, life: 60, maxL: 60, vy: -2, sz: 18 });
        for (let p = 0; p < 10; p++) {
          g.particles.push({ x: pk.x, y: pk.y, vx: rand(-4, 4), vy: rand(-4, 4), life: 15 + Math.random() * 10, maxL: 25, color: pk.type.color, sz: 2 + Math.random() * 3 });
        }
        return false;
      }
      return pk.y < g.H + 40;
    });

    // ---- particles ----
    g.particles = g.particles.filter((p: G) => { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.97; p.vy *= 0.97; p.life -= dt; return p.life > 0; });

    // ---- text effects ----
    g.texts = g.texts.filter((t: G) => { t.y += (t.vy || 0) * dt; t.life -= dt; return t.life > 0; });

    // ---- stars & nebulae ----
    for (const st of g.stars) { st.y += st.speed * dt; if (st.y > g.H) { st.y = -2; st.x = Math.random() * g.W; } }
    for (const nb of g.nebulae) { nb.y += nb.speed * dt; if (nb.y > g.H + nb.r) { nb.y = -nb.r; nb.x = Math.random() * g.W; } }

    // ---- hud update ----
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      const wc = WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)];
      setHud({
        score: g.score, lives: g.lives, weapon: g.weapon,
        world: g.worldIdx + 1, worldName: wc.name, combo: g.combo,
        bossHP: g.boss?.hp || 0, bossMaxHP: g.boss?.maxHP || 0,
        bossWord: g.boss?.displayWord || '',
        bossActive: !!g.boss, bossBlend: g.boss?.correctBlend || '',
        shieldActive: g.shieldTimer > 0, rapidActive: g.rapidTimer > 0,
        wordsCompleted: g.wordsCompleted,
        completedWords: [...g.completedWords].slice(-8),
        msg: '', msgTimer: 0,
      });
    }

    // ---- game over ----
    if (g.lives <= 0) setScreen('gameover');
  }

  function spawnBoss(g: G) {
    const worldCfg = WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)];
    const blend = pick(worldCfg.blends);
    const bossWordList = BOSS_WORDS[blend];
    const word = pick(bossWordList);
    const ending = word.slice(blend.length);
    const hp = 3 + Math.floor(g.worldIdx / 2);

    g.boss = {
      x: g.W / 2, y: -100, targetY: 110,
      w: 130, h: 90, hp, maxHP: hp,
      correctBlend: blend,
      currentWord: word,
      displayWord: '_'.repeat(blend.length) + ending,
      ending: ending,
      wordList: bossWordList,
      wordIdx: 0,
      phase: 'enter', shootTimer: 120, hitFlash: 0, angle: 0,
      patternAngle: 0, shockCooldown: 120,
    };
    g.texts.push({ x: g.W / 2, y: g.H / 2 - 50, text: WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)].name, color: '#ffd700', life: 120, maxL: 120, vy: 0, sz: 40 });
    g.texts.push({ x: g.W / 2, y: g.H / 2 + 10, text: `Boss: ${g.boss.displayWord}`, color: '#ef4444', life: 100, maxL: 100, vy: 0, sz: 22 });
  }

  function advanceBossWord(g: G) {
    const bo = g.boss;
    if (!bo) return;
    const worldCfg = WORLD_CONFIG[Math.min(g.worldIdx, WORLD_CONFIG.length - 1)];
    const blend = pick(worldCfg.blends);
    const word = pick(BOSS_WORDS[blend]);
    const ending = word.slice(blend.length);
    bo.correctBlend = blend;
    bo.currentWord = word;
    bo.displayWord = '_'.repeat(blend.length) + ending;
    bo.ending = ending;
    g.texts.push({ x: bo.x, y: bo.y + 25, text: `New word: ${bo.displayWord}`, color: '#38bdf8', life: 80, maxL: 80, vy: -0.5, sz: 15 });
  }

  function hitPlayer(g: G) {
    g.lives--;
    g.ship.invTimer = 120;
    g.ship.flashTimer = 120;
    g.shake = 14;
    g.combo = 0;
    for (let p = 0; p < 14; p++) {
      g.particles.push({ x: g.ship.x + rand(-14, 14), y: g.ship.y + rand(-14, 14), vx: rand(-5, 5), vy: rand(-5, 5), life: 18 + Math.random() * 14, maxL: 32, color: '#ff6b6b', sz: 2 + Math.random() * 4 });
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

    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    // ======= BACKGROUND =======
    ctx.fillStyle = '#04060e';
    ctx.fillRect(-10, -10, W + 20, H + 20);

    // Nebula patches
    for (const nb of g.nebulae) {
      const ng = ctx.createRadialGradient(nb.x, nb.y, 0, nb.x, nb.y, nb.r);
      ng.addColorStop(0, `hsla(${nb.hue},60%,30%,${nb.alpha})`);
      ng.addColorStop(0.5, `hsla(${nb.hue},50%,20%,${nb.alpha * 0.5})`);
      ng.addColorStop(1, 'transparent');
      ctx.fillStyle = ng;
      ctx.fillRect(nb.x - nb.r, nb.y - nb.r, nb.r * 2, nb.r * 2);
    }

    // Stars with lens flares
    for (const st of g.stars) {
      ctx.globalAlpha = st.bright;
      const col = st.hue ? `hsl(${st.hue},40%,80%)` : '#c8d6e5';
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      ctx.fill();
      if (st.flare) {
        const fl = st.size * 4;
        ctx.globalAlpha = st.bright * 0.4;
        ctx.strokeStyle = col;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(st.x - fl, st.y); ctx.lineTo(st.x + fl, st.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(st.x, st.y - fl); ctx.lineTo(st.x, st.y + fl); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    // ======= ENEMIES — word fragment orbs =======
    for (const e of g.enemies) {
      ctx.save();
      ctx.translate(e.x, e.y);
      const flash = e.hitFlash > 0;
      const pulse = 0.9 + Math.sin(g.time * 0.12 + e.id * 1.7) * 0.1;
      const r = e.w / 2;

      // Outer glow
      const gc = flash ? 'rgba(255,100,100,0.4)' : e.color + '30';
      const grad = ctx.createRadialGradient(0, 0, r * 0.3, 0, 0, r * 1.6);
      grad.addColorStop(0, gc); grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(0, 0, r * 1.6, 0, Math.PI * 2); ctx.fill();

      // Spinning orbit ring
      ctx.save();
      ctx.rotate(g.time * 0.04 + e.id);
      ctx.strokeStyle = flash ? 'rgba(255,200,200,0.4)' : e.color + '40';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.2, r * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Body — circle with gradient
      const bodyGrad = ctx.createRadialGradient(0, -r * 0.3, 0, 0, 0, r);
      bodyGrad.addColorStop(0, flash ? '#ff8888' : '#2a2040');
      bodyGrad.addColorStop(1, flash ? '#cc4444' : '#12101a');
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = flash ? '#fff' : e.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, r * pulse, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();

      // Inner glow
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.4);
      coreGrad.addColorStop(0, e.color + '40');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(0, 0, r * 0.4, 0, Math.PI * 2); ctx.fill();

      // Word ending text
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.font = `bold 13px 'Exo 2', sans-serif`;
      ctx.fillText(e.displayText, 0.5, 1.5);
      ctx.fillStyle = '#fff';
      ctx.fillText(e.displayText, 0, 1);
      ctx.restore();
    }

    // ======= BOSS =======
    if (g.boss) {
      const b = g.boss;
      ctx.save();
      ctx.translate(b.x, b.y);
      if (b.phase === 'enter') ctx.globalAlpha = 0.7;

      const blendIdx = BLEND_KEYS.indexOf(b.correctBlend);
      const bossColor = WEAPONS[blendIdx >= 0 ? blendIdx : 0].color;
      const bossHue = [270, 140, 200, 30][blendIdx >= 0 ? blendIdx : 0];
      const strokeColor = b.hitFlash > 0 ? '#fff' : bossColor;
      const r = b.w / 2;

      // Outer rotating energy ring
      ctx.save();
      ctx.rotate(g.time * 0.025);
      ctx.strokeStyle = bossColor + '40';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 6]);
      ctx.beginPath(); ctx.arc(0, 0, r * 1.25, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      for (let i = 0; i < 6; i++) {
        const da = (i / 6) * Math.PI * 2 + g.time * 0.025;
        ctx.fillStyle = bossColor + '80';
        ctx.beginPath();
        ctx.arc(Math.cos(da) * r * 1.25, Math.sin(da) * r * 1.25, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Ambient glow
      const ambGrad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, b.w);
      ambGrad.addColorStop(0, b.hitFlash > 0 ? 'rgba(255,215,0,0.45)' : bossColor + '30');
      ambGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = ambGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.w, 0, Math.PI * 2); ctx.fill();

      // Body shape — octagon
      const bodyGrad = ctx.createRadialGradient(0, -r * 0.3, 0, 0, r * 0.2, r);
      bodyGrad.addColorStop(0, b.hitFlash > 0 ? '#ffe066' : `hsl(${bossHue},60%,38%)`);
      bodyGrad.addColorStop(1, b.hitFlash > 0 ? '#cc9900' : `hsl(${bossHue},65%,18%)`);
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      ctx.closePath(); ctx.fill(); ctx.stroke();

      // Panel lines
      ctx.strokeStyle = `hsla(${bossHue},50%,70%,0.12)`;
      ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(-r * 0.6, -r * 0.1); ctx.lineTo(r * 0.6, -r * 0.1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-r * 0.4, r * 0.2); ctx.lineTo(r * 0.4, r * 0.2); ctx.stroke();

      // Core energy
      const coreP = 0.3 + Math.sin(g.time * 0.1) * 0.15;
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.w / 3);
      coreGrad.addColorStop(0, bossColor + Math.round(coreP * 255).toString(16).padStart(2, '0'));
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.w / 3, 0, Math.PI * 2); ctx.fill();

      // Display word
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = bossColor + '80';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#fff';
      ctx.font = `bold 22px 'Exo 2', sans-serif`;
      ctx.fillText(b.displayWord, 0, -3);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#7a8ba8';
      ctx.font = `600 9px 'Rajdhani', sans-serif`;
      ctx.fillText('FIRE ' + b.correctBlend.toUpperCase(), 0, 17);

      // HP bar
      const bw = b.w * 0.8, bh = 5, by = b.h / 2 + 14;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.beginPath();
      ctx.roundRect(-bw / 2, by, bw, bh, 2.5);
      ctx.fill();
      const hr = b.hp / b.maxHP;
      const hpGrad = ctx.createLinearGradient(-bw / 2, 0, bw / 2, 0);
      if (hr > 0.5) { hpGrad.addColorStop(0, '#22c55e'); hpGrad.addColorStop(1, '#4ade80'); }
      else if (hr > 0.25) { hpGrad.addColorStop(0, '#d97706'); hpGrad.addColorStop(1, '#fbbf24'); }
      else { hpGrad.addColorStop(0, '#dc2626'); hpGrad.addColorStop(1, '#ef4444'); }
      ctx.fillStyle = hpGrad;
      ctx.beginPath(); ctx.roundRect(-bw / 2, by, bw * hr, bh, 2.5); ctx.fill();

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ======= PLAYER BULLETS — blend text projectiles =======
    for (const b of g.bullets) {
      const w = WEAPONS[b.wep];
      ctx.save();
      ctx.translate(b.x, b.y);

      // Motion trail
      const spd = Math.hypot(b.vx, b.vy);
      if (spd > 1) {
        const trailLen = Math.min(spd * 3, 18);
        const nx = b.vx / spd, ny = b.vy / spd;
        const tg = ctx.createLinearGradient(nx * -trailLen, ny * -trailLen, 0, 0);
        tg.addColorStop(0, 'transparent');
        tg.addColorStop(1, w.glow);
        ctx.strokeStyle = tg;
        ctx.lineWidth = b.sz * 1.8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(nx * -trailLen, ny * -trailLen);
        ctx.lineTo(0, 0);
        ctx.stroke();
      }

      // Outer glow
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.sz * 3);
      glowGrad.addColorStop(0, w.glow); glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 3, 0, Math.PI * 2); ctx.fill();

      // Bright core
      ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 0.5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = w.color;
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 0.8, 0, Math.PI * 2); ctx.fill();

      // Blend text on bullet
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.font = `bold 8px 'Exo 2', sans-serif`;
      ctx.fillText(b.blend.toUpperCase(), 0, 0);

      ctx.restore();
    }

    // ======= ENEMY BULLETS =======
    for (const b of g.eBullets) {
      ctx.save();
      ctx.translate(b.x, b.y);
      const bc = b.color || '#ff6b6b';
      const spd = Math.hypot(b.vx, b.vy);
      if (spd > 0.5) {
        const nx = b.vx / spd, ny = b.vy / spd;
        const tLen = Math.min(spd * 2.5, 14);
        ctx.globalAlpha = 0.35;
        ctx.strokeStyle = bc;
        ctx.lineWidth = b.sz * 1.2;
        ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(nx * -tLen, ny * -tLen); ctx.lineTo(0, 0); ctx.stroke();
        ctx.globalAlpha = 1;
      }
      const eg = ctx.createRadialGradient(0, 0, 0, 0, 0, b.sz * 2);
      eg.addColorStop(0, bc + '60'); eg.addColorStop(1, 'transparent');
      ctx.fillStyle = eg;
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 2, 0, Math.PI * 2); ctx.fill();
      const og = ctx.createRadialGradient(0, -b.sz * 0.2, b.sz * 0.15, 0, 0, b.sz);
      og.addColorStop(0, '#fff'); og.addColorStop(0.3, bc); og.addColorStop(1, bc + '80');
      ctx.fillStyle = og;
      ctx.beginPath(); ctx.arc(0, 0, b.sz, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    // ======= SHIP =======
    const sh = g.ship;
    if (!(sh.flashTimer > 0 && Math.floor(sh.flashTimer) % 6 < 3)) {
      ctx.save();
      ctx.translate(sh.x, sh.y);
      const wc = WEAPONS[g.weapon];

      // Engine flames
      for (const ex of [-7, 7]) {
        const flicker = 3 + Math.random() * 6;
        const fLen = 12 + Math.random() * 8;
        const fg1 = ctx.createLinearGradient(ex, 16, ex, 16 + fLen);
        fg1.addColorStop(0, 'rgba(255,160,40,0.9)');
        fg1.addColorStop(0.4, 'rgba(255,80,20,0.5)');
        fg1.addColorStop(1, 'transparent');
        ctx.fillStyle = fg1;
        ctx.beginPath();
        ctx.moveTo(ex - flicker * 0.5, 16);
        ctx.lineTo(ex, 16 + fLen);
        ctx.lineTo(ex + flicker * 0.5, 16);
        ctx.closePath(); ctx.fill();
        const fg2 = ctx.createLinearGradient(ex, 14, ex, 14 + fLen * 0.5);
        fg2.addColorStop(0, 'rgba(255,255,200,0.9)');
        fg2.addColorStop(1, 'transparent');
        ctx.fillStyle = fg2;
        ctx.beginPath();
        ctx.moveTo(ex - 1.5, 14);
        ctx.lineTo(ex, 14 + fLen * 0.5);
        ctx.lineTo(ex + 1.5, 14);
        ctx.closePath(); ctx.fill();
      }
      // Engine glow
      const heatGlow = ctx.createRadialGradient(0, 20, 2, 0, 20, 20);
      heatGlow.addColorStop(0, 'rgba(255,140,40,0.25)');
      heatGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = heatGlow;
      ctx.beginPath(); ctx.arc(0, 20, 20, 0, Math.PI * 2); ctx.fill();

      // Body glow
      const ambGlow = ctx.createRadialGradient(0, -2, 0, 0, -2, 38);
      ambGlow.addColorStop(0, wc.glow); ambGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambGlow;
      ctx.beginPath(); ctx.arc(0, -2, 38, 0, Math.PI * 2); ctx.fill();

      // Main hull
      const hullGrad = ctx.createLinearGradient(0, -24, 0, 18);
      hullGrad.addColorStop(0, '#d0dae8');
      hullGrad.addColorStop(0.3, '#b0bece');
      hullGrad.addColorStop(0.7, '#8a98a8');
      hullGrad.addColorStop(1, '#6a7888');
      ctx.fillStyle = hullGrad;
      ctx.strokeStyle = wc.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -24);
      ctx.lineTo(5, -16); ctx.lineTo(10, -8);
      ctx.lineTo(14, -4); ctx.lineTo(20, 8); ctx.lineTo(18, 12); ctx.lineTo(14, 14);
      ctx.lineTo(10, 14); ctx.lineTo(8, 10);
      ctx.lineTo(5, 16); ctx.lineTo(-5, 16);
      ctx.lineTo(-8, 10); ctx.lineTo(-10, 14);
      ctx.lineTo(-14, 14); ctx.lineTo(-18, 12); ctx.lineTo(-20, 8); ctx.lineTo(-14, -4);
      ctx.lineTo(-10, -8); ctx.lineTo(-5, -16);
      ctx.closePath();
      ctx.fill(); ctx.stroke();

      // Panel lines
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(0, 14); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(5, -14); ctx.lineTo(16, 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-5, -14); ctx.lineTo(-16, 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-8, 0); ctx.lineTo(8, 0); ctx.stroke();

      // Highlight edge
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(-4, -22); ctx.lineTo(0, -24); ctx.lineTo(4, -22); ctx.stroke();

      // Wing accents
      ctx.fillStyle = wc.color + '40';
      ctx.beginPath(); ctx.moveTo(12, -2); ctx.lineTo(19, 8); ctx.lineTo(17, 10); ctx.lineTo(12, 4); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-12, -2); ctx.lineTo(-19, 8); ctx.lineTo(-17, 10); ctx.lineTo(-12, 4); ctx.closePath(); ctx.fill();

      // Cockpit
      const cpGrad = ctx.createLinearGradient(0, -16, 0, -4);
      cpGrad.addColorStop(0, wc.color);
      cpGrad.addColorStop(0.5, wc.color + 'cc');
      cpGrad.addColorStop(1, wc.color + '60');
      ctx.fillStyle = cpGrad;
      ctx.beginPath(); ctx.ellipse(0, -10, 3.5, 8, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath(); ctx.ellipse(-1, -13, 1.5, 3, -0.2, 0, Math.PI * 2); ctx.fill();

      // Engine nacelle dots
      for (const ex of [-7, 7]) {
        ctx.fillStyle = wc.color + '60';
        ctx.beginPath(); ctx.arc(ex, 12, 2, 0, Math.PI * 2); ctx.fill();
      }

      // Shield effect
      if (g.shieldTimer > 0) {
        const pulse = 32 + Math.sin(g.time * 0.2) * 5;
        ctx.save();
        ctx.rotate(g.time * 0.01);
        const shieldAlpha = 0.25 + Math.sin(g.time * 0.15) * 0.12;
        ctx.strokeStyle = `rgba(56,189,248,${shieldAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * pulse, Math.sin(a) * pulse) : ctx.lineTo(Math.cos(a) * pulse, Math.sin(a) * pulse);
        }
        ctx.closePath(); ctx.stroke();
        ctx.restore();
        const shGrad = ctx.createRadialGradient(0, 0, pulse * 0.6, 0, 0, pulse);
        shGrad.addColorStop(0, 'transparent');
        shGrad.addColorStop(1, `rgba(56,189,248,${shieldAlpha * 0.3})`);
        ctx.fillStyle = shGrad;
        ctx.beginPath(); ctx.arc(0, 0, pulse, 0, Math.PI * 2); ctx.fill();
      }

      // Rapid fire effect
      if (g.rapidTimer > 0) {
        const rAlpha = 0.2 + Math.sin(g.time * 0.18) * 0.1;
        const rg = ctx.createRadialGradient(0, 0, 5, 0, 0, 42);
        rg.addColorStop(0, `rgba(192,132,252,${rAlpha})`);
        rg.addColorStop(0.5, `rgba(192,132,252,${rAlpha * 0.3})`);
        rg.addColorStop(1, 'transparent');
        ctx.fillStyle = rg;
        ctx.beginPath(); ctx.arc(0, 0, 42, 0, Math.PI * 2); ctx.fill();
      }

      ctx.restore();
    }

    // ======= PICKUPS =======
    for (const pk of g.pickups) {
      ctx.save();
      ctx.translate(pk.x, pk.y);
      const bob = Math.sin(pk.bobT * 3) * 3;
      ctx.translate(0, bob);
      const pr = 13;
      const pColor = pk.type.color;
      const pulseAlpha = 0.5 + Math.sin(pk.bobT * 4) * 0.2;

      const pg = ctx.createRadialGradient(0, 0, pr * 0.3, 0, 0, pr * 2);
      pg.addColorStop(0, pColor + '50'); pg.addColorStop(0.5, pColor + '18'); pg.addColorStop(1, 'transparent');
      ctx.fillStyle = pg;
      ctx.beginPath(); ctx.arc(0, 0, pr * 2, 0, Math.PI * 2); ctx.fill();

      const hexPath = () => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * pr, Math.sin(a) * pr) : ctx.lineTo(Math.cos(a) * pr, Math.sin(a) * pr);
        }
        ctx.closePath();
      };
      const hexGrad = ctx.createRadialGradient(0, -pr * 0.3, 0, 0, 0, pr);
      hexGrad.addColorStop(0, 'rgba(20,25,40,0.85)'); hexGrad.addColorStop(1, 'rgba(8,12,20,0.9)');
      ctx.fillStyle = hexGrad;
      hexPath(); ctx.fill();
      ctx.strokeStyle = pColor + '80';
      ctx.lineWidth = 1.5;
      hexPath(); ctx.stroke();

      ctx.save();
      ctx.rotate(pk.bobT * 2);
      ctx.strokeStyle = pColor;
      ctx.lineWidth = 2;
      ctx.globalAlpha = pulseAlpha;
      ctx.beginPath(); ctx.arc(0, 0, pr + 2, 0, Math.PI * 0.7); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();

      ctx.fillStyle = pColor;
      ctx.shadowColor = pColor;
      ctx.shadowBlur = 6;
      ctx.font = `bold 13px 'Exo 2', sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(pk.type.symbol, 0, 1);
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    // ======= PARTICLES =======
    for (const p of g.particles) {
      const a = p.life / p.maxL;
      ctx.globalAlpha = a * a;
      ctx.fillStyle = p.color;
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 1.5) {
        ctx.save();
        ctx.translate(p.x, p.y);
        const ang = Math.atan2(p.vy, p.vx);
        ctx.rotate(ang);
        const len = Math.min(spd * 1.2, p.sz * 3) * a;
        const wid = p.sz * a * 0.5;
        ctx.beginPath(); ctx.ellipse(0, 0, len, Math.max(wid, 0.5), 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.sz * a, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= TEXT EFFECTS =======
    for (const t of g.texts) {
      const a = Math.min(1, t.life / (t.maxL * 0.3));
      ctx.globalAlpha = a;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.sz}px 'Exo 2', sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 5;
      ctx.fillText(t.text, t.x, t.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;
    ctx.restore();
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

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const mm = (e: MouseEvent) => { const r = el.getBoundingClientRect(); mouseRef.current.x = e.clientX - r.left; mouseRef.current.y = e.clientY - r.top; mouseRef.current.active = true; };
    const md = (e: MouseEvent) => { e.preventDefault(); mouseRef.current.down = true; };
    const mu = () => { mouseRef.current.down = false; };
    const ml = () => { mouseRef.current.active = false; mouseRef.current.down = false; };
    el.addEventListener('mousemove', mm);
    el.addEventListener('mousedown', md);
    window.addEventListener('mouseup', mu);
    el.addEventListener('mouseleave', ml);
    return () => { el.removeEventListener('mousemove', mm); el.removeEventListener('mousedown', md); window.removeEventListener('mouseup', mu); el.removeEventListener('mouseleave', ml); };
  }, [screen]);

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="pb-root">
        <style>{styles}</style>
        <div className="pb-intro">
          <div className="pb-intro-stars">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="pb-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="pb-scanlines" />
          <div className="pb-intro-body">
            <div className="pb-logo-wrap">
              <div className="pb-logo-deco pb-logo-deco-l" />
              <div className="pb-logo-stack">
                <h1 className="pb-title">PHONICS BLASTER</h1>
                <p className="pb-subtitle">BLEND SQUADRON</p>
              </div>
              <div className="pb-logo-deco pb-logo-deco-r" />
            </div>

            <div className="pb-card">
              <div className="pb-card-header">
                <div className="pb-card-line" />
                <span>ARSENAL</span>
                <div className="pb-card-line" />
              </div>
              <div className="pb-weapons-grid">
                <div className="pb-rule" style={{ '--rc': '#c084fc' } as React.CSSProperties}>
                  <span className="pb-rule-icon">SH</span>
                  <div className="pb-rule-body"><strong>SH</strong><span>ship, shop, shed, shell...</span></div>
                </div>
                <div className="pb-rule" style={{ '--rc': '#4ade80' } as React.CSSProperties}>
                  <span className="pb-rule-icon">CH</span>
                  <div className="pb-rule-body"><strong>CH</strong><span>chip, chop, chin, chest...</span></div>
                </div>
                <div className="pb-rule" style={{ '--rc': '#38bdf8' } as React.CSSProperties}>
                  <span className="pb-rule-icon">TH</span>
                  <div className="pb-rule-body"><strong>TH</strong><span>thin, thick, this, that...</span></div>
                </div>
                <div className="pb-rule" style={{ '--rc': '#fb923c' } as React.CSSProperties}>
                  <span className="pb-rule-icon">BL</span>
                  <div className="pb-rule-body"><strong>BL</strong><span>black, blast, blend, blow...</span></div>
                </div>
              </div>
              <div className="pb-boss-callout">
                Fire the correct blend at word endings to build words! Boss fights require the right blend too!
              </div>
            </div>

            <div className="pb-controls">
              <div className="pb-ctrl"><kbd>WASD</kbd> <span className="pb-ctrl-sep">/</span> <kbd>{'\u2190\u2191\u2192\u2193'}</kbd> <span className="pb-ctrl-label">Move</span></div>
              <div className="pb-ctrl"><kbd>Space</kbd> <span className="pb-ctrl-sep">/</span> <kbd>Z</kbd> <span className="pb-ctrl-label">Shoot</span></div>
              <div className="pb-ctrl"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd> <span className="pb-ctrl-label">Weapon</span></div>
            </div>

            <button className="pb-start-btn" onClick={() => setScreen('playing')}>
              LAUNCH MISSION
              <span className="pb-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalWorld = (gRef.current?.worldIdx || 0);
    const finalWords = gRef.current?.wordsCompleted || 0;
    return (
      <div className="pb-root">
        <style>{styles}</style>
        <div className="pb-gameover">
          <div className="pb-intro-stars">
            {[...Array(35)].map((_, i) => (
              <div key={i} className="pb-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="pb-scanlines" />
          <div className="pb-go-body">
            <div className="pb-go-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                <path d="M20 20L36 36M36 20L20 36" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="pb-go-title">MISSION FAILED</h1>
            <div className="pb-go-stats">
              <div className="pb-go-stat">
                <span className="pb-go-label">SCORE</span>
                <span className="pb-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="pb-go-divider" />
              <div className="pb-go-stat">
                <span className="pb-go-label">WORLD</span>
                <span className="pb-go-val">{finalWorld}</span>
              </div>
              <div className="pb-go-divider" />
              <div className="pb-go-stat">
                <span className="pb-go-label">WORDS</span>
                <span className="pb-go-val">{finalWords}</span>
              </div>
            </div>
            <div className="pb-go-btns">
              <button className="pb-start-btn" onClick={() => setScreen('playing')}>
                RETRY MISSION
                <span className="pb-btn-shine" />
              </button>
              <button className="pb-menu-btn" onClick={() => setScreen('intro')}>Return to Base</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="pb-root">
      <style>{styles}</style>
      <div className="pb-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="pb-canvas" />

        {/* HUD */}
        <div className="pb-hud-top">
          <div className="pb-hud-left">
            <div className="pb-wave-badge">
              <span className="pb-wave-label">WORLD</span>
              <span className="pb-wave-num">{hud.world}</span>
            </div>
            <div className="pb-lives">
              {[...Array(Math.max(0, hud.lives))].map((_, i) => (
                <span key={i} className="pb-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="pb-hud-center">
            <div className="pb-words-display">
              <span className="pb-words-label">WORDS</span>
              <span className="pb-words-num" key={hud.wordsCompleted}>{hud.wordsCompleted}</span>
            </div>
          </div>
          <div className="pb-hud-right">
            <div className="pb-score-badge">{hud.score.toLocaleString()}</div>
            {hud.combo > 2 && <div className="pb-combo">{hud.combo}x COMBO</div>}
            {hud.shieldActive && <div className="pb-effect-badge pb-eff-shield">{'\u25c6'} SHIELD</div>}
            {hud.rapidActive && <div className="pb-effect-badge pb-eff-rapid">{'\u00bb'} RAPID</div>}
          </div>
        </div>

        {/* Word Bank */}
        {hud.completedWords.length > 0 && (
          <div className="pb-word-bank">
            {hud.completedWords.map((w, i) => (
              <span key={w + i} className="pb-word-tag">{w}</span>
            ))}
          </div>
        )}

        {/* Weapon Bar */}
        <div className="pb-weapon-bar">
          {WEAPONS.map((w, i) => (
            <button
              key={w.id}
              className={`pb-wep-btn ${hud.weapon === i ? 'active' : ''}`}
              style={{ '--wc': w.color, '--wg': w.glow } as React.CSSProperties}
              onClick={() => { if (gRef.current) gRef.current.weapon = i; }}
            >
              <span className="pb-wep-sym">{w.symbol}</span>
              <span className="pb-wep-name">{w.name}</span>
              <kbd className="pb-wep-key">{i + 1}</kbd>
            </button>
          ))}
        </div>

        {/* Boss HUD */}
        {hud.bossActive && (
          <div className="pb-boss-hud">
            <div className="pb-boss-label">
              BOSS — <strong>{hud.bossWord}</strong> — Fire <strong>{hud.bossBlend.toUpperCase()}</strong>
            </div>
            <div className="pb-boss-bar-bg">
              <div className="pb-boss-bar-fill" style={{ width: `${(hud.bossHP / hud.bossMaxHP) * 100}%` }} />
              <div className="pb-boss-bar-shine" />
            </div>
          </div>
        )}
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
  --pb-bg: #04060e;
  --pb-surface: rgba(255,255,255,0.03);
  --pb-border: rgba(255,255,255,0.06);
  --pb-glass: rgba(8,12,24,0.7);
  --pb-glass-border: rgba(100,140,255,0.12);
  --pb-text: #c8d6e5;
  --pb-text-dim: #4a5568;
  --pb-accent: #c084fc;
  --pb-glow: rgba(192,132,252,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.pb-root {
  width: 100%; height: 100%;
  font-family: 'Exo 2', sans-serif;
  overflow: hidden;
  background: var(--pb-bg);
  color: var(--pb-text);
}

.pb-intro, .pb-gameover {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120,60,200,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(60,80,180,0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(40,120,200,0.06) 0%, transparent 50%),
    var(--pb-bg);
}
.pb-intro-stars { position: absolute; inset: 0; pointer-events: none; }
.pb-star {
  position: absolute; border-radius: 50%; background: #fff;
  animation: pbTwinkle 3s ease-in-out infinite alternate;
}
@keyframes pbTwinkle {
  0% { opacity: 0.08; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.5); }
}
.pb-scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 5;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px);
  mix-blend-mode: multiply;
}
.pb-intro-body, .pb-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 480px; width: 100%;
  animation: pbFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes pbFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.pb-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.pb-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--pb-accent), transparent);
  opacity: 0.4;
  animation: pbDecoGlow 3s ease-in-out infinite alternate;
}
@keyframes pbDecoGlow {
  0% { opacity: 0.2; width: 30px; } 100% { opacity: 0.6; width: 60px; }
}
.pb-logo-stack { display: flex; flex-direction: column; align-items: center; }
.pb-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.6rem, 6vw, 2.4rem);
  font-weight: 900; letter-spacing: 4px; color: #fff;
  text-shadow: 0 0 40px rgba(192,132,252,0.3), 0 0 80px rgba(192,132,252,0.1);
  animation: pbTitleShimmer 4s ease-in-out infinite alternate;
}
@keyframes pbTitleShimmer {
  0% { text-shadow: 0 0 40px rgba(192,132,252,0.3), 0 0 80px rgba(192,132,252,0.1); }
  50% { text-shadow: 0 0 50px rgba(74,222,128,0.35), 0 0 100px rgba(74,222,128,0.12); }
  100% { text-shadow: 0 0 40px rgba(56,189,248,0.3), 0 0 80px rgba(56,189,248,0.1); }
}
.pb-subtitle {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem; font-weight: 500;
  color: var(--pb-text-dim); letter-spacing: 8px; text-transform: uppercase;
}
.pb-card {
  background: var(--pb-glass);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--pb-glass-border);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left; position: relative; overflow: hidden;
}
.pb-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(192,132,252,0.3), transparent);
}
.pb-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 600;
  color: var(--pb-text-dim); letter-spacing: 4px; text-transform: uppercase;
}
.pb-card-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--pb-border), transparent); }
.pb-weapons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
.pb-rule {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px; transition: border-color 0.3s, background 0.3s;
}
.pb-rule:hover {
  border-color: color-mix(in srgb, var(--rc) 25%, transparent);
  background: color-mix(in srgb, var(--rc) 4%, transparent);
}
.pb-rule-icon {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.85rem; font-weight: 900; color: var(--rc);
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.pb-rule-body { display: flex; flex-direction: column; gap: 0.1rem; font-size: 0.78rem; line-height: 1.3; }
.pb-rule-body strong {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.72rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.pb-rule-body span { color: var(--pb-text-dim); font-size: 0.72rem; }
.pb-boss-callout {
  margin-top: 0.8rem; padding: 0.5rem 0.7rem;
  text-align: center; font-size: 0.72rem;
  color: #94a3b8; line-height: 1.4;
  border-top: 1px solid var(--pb-border);
  font-family: 'Rajdhani', sans-serif; font-weight: 500; letter-spacing: 0.5px;
}
.pb-controls {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem;
  margin-bottom: 1.8rem;
}
.pb-ctrl { display: flex; align-items: center; gap: 0.25rem; font-size: 0.78rem; color: var(--pb-text-dim); }
.pb-ctrl-sep { opacity: 0.3; margin: 0 0.1rem; }
.pb-ctrl-label {
  font-family: 'Rajdhani', sans-serif; font-weight: 600; letter-spacing: 1px;
  font-size: 0.7rem; text-transform: uppercase; color: var(--pb-text-dim);
}
.pb-ctrl kbd {
  padding: 0.2rem 0.45rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08); border-bottom-width: 2px;
  border-radius: 5px; font-family: 'Orbitron', monospace; font-size: 0.65rem; color: #7a8ba8;
}
.pb-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Orbitron', sans-serif; font-size: 0.85rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #7c3aed, #6020a0);
  border: 1px solid rgba(192,132,252,0.3);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow: 0 4px 24px rgba(124,58,237,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.pb-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(124,58,237,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  border-color: rgba(192,160,255,0.5);
}
.pb-start-btn:active { transform: translateY(0); }
.pb-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: pbBtnShine 3s ease-in-out infinite;
}
@keyframes pbBtnShine { 0% { left: -100%; } 40%,100% { left: 200%; } }

/* Game Over */
.pb-go-icon { margin-bottom: 1rem; animation: pbGoIcon 2s ease-in-out infinite alternate; }
@keyframes pbGoIcon { 0% { opacity: 0.5; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }
.pb-go-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.pb-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 1.5rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: var(--pb-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--pb-glass-border); border-radius: 14px;
}
.pb-go-divider { width: 1px; height: 40px; background: linear-gradient(180deg, transparent, var(--pb-glass-border), transparent); }
.pb-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.pb-go-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.65rem; font-weight: 600;
  color: var(--pb-text-dim); letter-spacing: 3px; text-transform: uppercase;
}
.pb-go-val {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem; font-weight: 900; color: white;
  text-shadow: 0 0 20px rgba(255,255,255,0.15);
}
.pb-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.pb-menu-btn {
  padding: 0.6rem 1.8rem; font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: var(--pb-text-dim);
  background: transparent; border: 1px solid var(--pb-border);
  border-radius: 8px; cursor: pointer; transition: all 0.25s; letter-spacing: 1px;
}
.pb-menu-btn:hover { border-color: rgba(255,255,255,0.15); color: var(--pb-text); background: rgba(255,255,255,0.03); }

/* Game */
.pb-game { width: 100%; height: 100%; position: relative; overflow: hidden; cursor: crosshair; }
.pb-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.pb-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(4,6,14,0.85) 0%, rgba(4,6,14,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.pb-hud-left, .pb-hud-right { display: flex; align-items: center; gap: 0.5rem; }
.pb-hud-right { flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.pb-wave-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(192,132,252,0.1);
  border: 1px solid rgba(192,132,252,0.2);
  border-radius: 8px;
}
.pb-wave-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.55rem; font-weight: 600;
  color: var(--pb-accent); letter-spacing: 2px; text-transform: uppercase; opacity: 0.7;
}
.pb-wave-num { font-family: 'Orbitron', sans-serif; font-size: 0.85rem; font-weight: 800; color: #fff; }
.pb-lives { display: flex; gap: 0.3rem; align-items: center; }
.pb-heart { display: flex; align-items: center; filter: drop-shadow(0 0 4px rgba(239,68,68,0.5)); }
.pb-hud-center { display: flex; flex-direction: column; align-items: center; }
.pb-words-display {
  display: flex; align-items: baseline; gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  background: var(--pb-glass);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--pb-glass-border); border-radius: 10px;
}
.pb-words-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.6rem; font-weight: 600;
  color: var(--pb-text-dim); letter-spacing: 2px;
}
.pb-words-num {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem; font-weight: 900; color: #fff;
  text-shadow: 0 0 12px rgba(255,255,255,0.2);
  animation: pbWordPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes pbWordPop {
  0% { transform: scale(1.3); color: var(--pb-accent); }
  100% { transform: scale(1); color: #fff; }
}
.pb-score-badge {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem; font-weight: 700;
  color: rgba(255,255,255,0.7); padding: 0.2rem 0;
}
.pb-combo {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem; font-weight: 700; color: #c084fc;
  text-shadow: 0 0 10px rgba(192,132,252,0.4);
  animation: pbCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes pbCombo { 0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
.pb-effect-badge {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.6rem; font-weight: 700;
  padding: 0.15rem 0.5rem; border-radius: 6px; letter-spacing: 1px;
}
.pb-eff-shield {
  color: #38bdf8; background: rgba(56,189,248,0.1);
  border: 1px solid rgba(56,189,248,0.25);
  animation: pbEffectPulse 1.2s ease-in-out infinite alternate;
}
.pb-eff-rapid {
  color: #c084fc; background: rgba(192,132,252,0.1);
  border: 1px solid rgba(192,132,252,0.25);
  animation: pbEffectPulse 0.8s ease-in-out infinite alternate;
}
@keyframes pbEffectPulse { 0% { opacity: 0.6; } 100% { opacity: 1; } }

/* Word Bank */
.pb-word-bank {
  position: absolute; bottom: 60px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 0.3rem; flex-wrap: wrap; justify-content: center;
  max-width: 90%; z-index: 20; pointer-events: none;
}
.pb-word-tag {
  padding: 0.15rem 0.5rem;
  background: rgba(255,215,0,0.08);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 6px;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.6rem; font-weight: 700;
  color: rgba(255,215,0,0.7); letter-spacing: 1px;
  text-transform: uppercase;
}

/* Weapon bar */
.pb-weapon-bar {
  position: absolute; bottom: 0.5rem; left: 50%; transform: translateX(-50%);
  display: flex; gap: 0.35rem; z-index: 20; pointer-events: auto;
  padding: 0.3rem;
  background: var(--pb-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--pb-glass-border); border-radius: 14px;
}
.pb-wep-btn {
  display: flex; flex-direction: column; align-items: center;
  gap: 0.05rem; padding: 0.35rem 0.75rem;
  background: transparent; border: 1px solid transparent;
  border-radius: 10px; cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative; font-family: 'Exo 2', sans-serif;
}
.pb-wep-btn:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.06); }
.pb-wep-btn.active {
  background: color-mix(in srgb, var(--wc) 10%, transparent);
  border-color: color-mix(in srgb, var(--wc) 30%, transparent);
  box-shadow: 0 2px 16px color-mix(in srgb, var(--wc) 20%, transparent);
}
.pb-wep-sym { font-size: 1rem; font-weight: 900; color: var(--wc); transition: transform 0.2s; }
.pb-wep-btn.active .pb-wep-sym { transform: scale(1.15); }
.pb-wep-name {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.5rem; font-weight: 700; color: var(--pb-text-dim);
  letter-spacing: 1.5px; text-transform: uppercase; transition: color 0.2s;
}
.pb-wep-btn.active .pb-wep-name { color: var(--wc); }
.pb-wep-key {
  position: absolute; top: -5px; right: -3px;
  padding: 0.05rem 0.25rem;
  background: var(--pb-bg);
  border: 1px solid var(--pb-border);
  border-radius: 4px; font-size: 0.55rem; color: var(--pb-text-dim);
  font-family: 'Orbitron', monospace; transition: all 0.2s;
}
.pb-wep-btn.active .pb-wep-key { color: var(--wc); border-color: color-mix(in srgb, var(--wc) 40%, transparent); }

/* Boss HUD */
.pb-boss-hud {
  position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
  z-index: 20; pointer-events: none;
  padding: 0.4rem 1rem;
  background: var(--pb-glass);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(239,68,68,0.15);
  border-radius: 12px;
  animation: pbBossIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes pbBossIn {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.pb-boss-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 700; color: #ef4444;
  letter-spacing: 2px; text-transform: uppercase;
}
.pb-boss-label strong { color: #fff; }
.pb-boss-bar-bg {
  width: 220px; height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px; overflow: hidden; position: relative;
}
.pb-boss-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 3px; transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(239,68,68,0.4);
}
.pb-boss-bar-shine {
  position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
  border-radius: 3px 3px 0 0;
}

/* Responsive */
@media (max-width: 500px) {
  .pb-hud-top { padding: 0.3rem 0.4rem; }
  .pb-words-num { font-size: 1.2rem; }
  .pb-wave-badge { padding: 0.2rem 0.5rem; }
  .pb-wave-num { font-size: 0.75rem; }
  .pb-score-badge { font-size: 0.7rem; }
  .pb-wep-btn { padding: 0.25rem 0.5rem; }
  .pb-wep-sym { font-size: 0.85rem; }
  .pb-weapons-grid { grid-template-columns: 1fr; }
  .pb-logo-deco { display: none; }
  .pb-word-bank { bottom: 50px; }
}
`;
