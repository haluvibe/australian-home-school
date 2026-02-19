import { useState, useEffect, useCallback, useRef } from 'react';

/*
  ⚡ MATHSTORM: NUMBER SQUADRON ⚡

  A vertical scrolling shooter where your weapons are math operations.
  Blast enemies to transform your Power Number, then match boss shields!

  Weapons: Addition (+), Subtraction (−), Multiplication (×), Division (÷)

  Controls:
  - Arrow Keys / WASD: Move ship
  - Space / Z: Shoot
  - 1/2/3/4: Switch weapon (+, −, ×, ÷)
  - Q/E: Cycle weapons
  - Mouse: Move + Click to shoot
*/

// =============== CONSTANTS ===============
const SHIP_SPEED = 7.5;
const SHOOT_COOLDOWNS = [130, 200, 250, 300];
const MAX_POWER = 99;
const MIN_POWER = 0;

const WEAPONS = [
  { id: 'add', symbol: '+', name: 'ADD', color: '#4ade80', glow: 'rgba(74,222,128,0.5)', bulletSpeed: 9, shotStyle: 'rapid' },
  { id: 'sub', symbol: '−', name: 'SUB', color: '#fb923c', glow: 'rgba(251,146,60,0.5)', bulletSpeed: 7, shotStyle: 'homing' },
  { id: 'mul', symbol: '×', name: 'MUL', color: '#a78bfa', glow: 'rgba(167,139,250,0.5)', bulletSpeed: 6, shotStyle: 'heavy' },
  { id: 'div', symbol: '÷', name: 'DIV', color: '#38bdf8', glow: 'rgba(56,189,248,0.5)', bulletSpeed: 7, shotStyle: 'ricochet' },
];

// Generate random boss targets based on world index
function generateBossTargets(worldIdx) {
  const hp = 2 + Math.floor(worldIdx / 2);
  const minTarget = worldIdx <= 2 ? 2 + worldIdx : Math.floor(3 + worldIdx * 3);
  const maxTarget = worldIdx <= 2 ? 5 + worldIdx * 3 : Math.floor(10 + worldIdx * worldIdx * 1.5);
  const targets = [];
  for (let i = 0; i < hp; i++) {
    targets.push(randInt(minTarget, Math.min(maxTarget, MAX_POWER)));
  }
  return { hp, targets };
}

// Continuous spawn: random interval between 0.1s and 2.0s (~6–120 frames at 60fps)
const SPAWN_INTERVAL_MIN = 6;
const SPAWN_INTERVAL_MAX = 120;
const ENEMIES_PER_BOSS = 3;

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const lerp = (a, b, t) => a + (b - a) * t;
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const rand = (lo, hi) => lo + Math.random() * (hi - lo);
const randInt = (lo, hi) => Math.floor(rand(lo, hi + 1));

function applyOp(power, opIndex, value) {
  if (opIndex === 0) return clamp(power + value, MIN_POWER, MAX_POWER);
  if (opIndex === 1) return clamp(power - value, MIN_POWER, MAX_POWER);
  if (opIndex === 2) return clamp(power * value, MIN_POWER, MAX_POWER);
  if (opIndex === 3) return value === 0 ? power : clamp(Math.floor(power / value), MIN_POWER, MAX_POWER);
  return power;
}

function opSymbol(i) { return ['+', '\u2212', '\u00d7', '\u00f7'][i] || '?'; }

function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const PICKUP_TYPES = [
  { id: 'heart', symbol: '\u2665', label: '+1 LIFE', color: '#ef4444' },
  { id: 'shield', symbol: '\u25c6', label: 'SHIELD!', color: '#38bdf8' },
  { id: 'prime', symbol: '\u26a1', label: 'PRIME SURGE!', color: '#ffd700' },
];
const COMBO_PICKUP_INTERVAL = 5; // drop a pickup every N combo hits

// =============== MAIN COMPONENT ===============
export default function MathStorm() {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const animRef = useRef(null);
  const gRef = useRef(null);
  const keysRef = useRef({});
  const mouseRef = useRef({ x: 0, y: 0, down: false, active: false });
  const prevTimeRef = useRef(0);

  // HUD state (updated periodically from game loop)
  const [hud, setHud] = useState({
    score: 0, lives: 3, power: 0, weapon: 0,
    world: 1, combo: 0, bossHP: 0, bossMaxHP: 0,
    bossTarget: 0, bossActive: false, powerMatch: false,
    shieldActive: false, primeActive: false, isPrime: false,
    msg: '', msgTimer: 0,
  });

  // ========== INIT ==========
  const initGame = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    const cvs = canvasRef.current;
    cvs.width = W;
    cvs.height = H;

    // Starfield with nebula patches
    const stars = [];
    for (let layer = 0; layer < 3; layer++) {
      for (let i = 0; i < 40; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          speed: (layer + 1) * 0.4,
          size: 0.4 + layer * 0.6,
          bright: 0.12 + layer * 0.22,
          flare: layer === 2 && Math.random() < 0.15, // some bright stars get lens flares
          hue: Math.random() < 0.3 ? 200 + Math.random() * 40 : 0, // some blue-tinted
        });
      }
    }
    // Nebula patches — slow-drifting colored fog
    const nebulae = [];
    for (let i = 0; i < 4; i++) {
      nebulae.push({
        x: Math.random() * W, y: Math.random() * H,
        r: 80 + Math.random() * 120,
        hue: [220, 280, 340, 200][i],
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
      score: 0, lives: 3, power: 0, weapon: 0,
      worldIdx: 0,
      spawnCooldown: 60, enemiesSpawned: 0, nextBossAt: ENEMIES_PER_BOSS,
      shootTimer: 0, combo: 0, comboTimer: 0,
      boss: null,
      pickups: [],
      shieldTimer: 0, primeTimer: 0,
      lastComboPickup: 0, // tracks combo count at last pickup drop
      shake: 0, slowmo: 0,
      time: 0, hudTick: 0,
      // World transition: null | { phase: 'flyOut'|'pause'|'flyIn', timer: number }
      transition: null,
    };

    setHud({
      score: 0, lives: 3, power: 0, weapon: 0,
      world: 1, combo: 0, bossHP: 0, bossMaxHP: 0,
      bossTarget: 0, bossActive: false, powerMatch: false,
      msg: 'GET READY!', msgTimer: 80,
    });
  }, []);

  // ========== SPAWN SINGLE ENEMY ==========
  function generateWaypoints(g, world) {
    const W = g.W, H = g.H;
    const startX = rand(40, W - 40);
    const steer = Math.min(0.5 + world * 0.15, 2.5); // turning intensity scales with world
    const pts = [];
    const numPts = 2 + Math.min(world, 5); // more waypoints = more complex paths

    for (let i = 0; i < numPts; i++) {
      pts.push({
        x: rand(40, W - 40),
        y: 60 + ((i + 1) / (numPts + 1)) * (H - 100),
      });
    }
    // Final exit point off screen
    pts.push({ x: rand(40, W - 40), y: H + 60 });
    return { startX, pts, steer };
  }

  function spawnEnemy(g) {
    const diff = Math.min(g.enemiesSpawned / 30, 10);
    const world = g.worldIdx;
    const minVal = 1;
    const maxVal = Math.min(2 + Math.floor(diff * 0.8), 9);
    const val = randInt(minVal, maxVal);
    const spd = Math.min(1.8 + diff * 0.12, 4.5);
    const shootRate = Math.max(80, 250 - diff * 15);

    // Generate smooth waypoint path
    const wp = generateWaypoints(g, world);
    // Entry angle: early worlds = straight down, later = from sides
    let startX = wp.startX, startY = -35;
    const entryStyle = world <= 1 ? 0 : randInt(0, Math.min(world, 3));
    if (entryStyle === 1) { startX = -20; startY = rand(60, g.H * 0.3); } // from left
    else if (entryStyle === 2) { startX = g.W + 20; startY = rand(60, g.H * 0.3); } // from right
    else if (entryStyle === 3) { startX = rand(40, g.W - 40); startY = -35; } // diagonal entry

    g.enemies.push({
      id: nextId(),
      x: startX, y: startY,
      vx: 0, vy: spd,
      value: val,
      hp: val > 7 ? 2 : 1,
      maxHP: val > 7 ? 2 : 1,
      baseSpeed: spd,
      w: 34, h: 34, hitFlash: 0,
      waypoints: wp.pts, wpIdx: 0,
      steer: wp.steer,
      shootTimer: 80 + Math.random() * shootRate,
      shootRate: shootRate,
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

    const tick = (now) => {
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
  function update(dt) {
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
        // Ship centers and accelerates upward off screen
        s.x += (g.W / 2 - s.x) * 0.05 * dt;
        s.y -= 7 * dt;
        // Clear remaining enemies and bullets off screen
        g.enemies = g.enemies.filter(e => { e.y += 8 * dt; return e.y < g.H + 60; });
        g.eBullets = [];
        g.bullets = [];
        if (s.y < -60) {
          tr.phase = 'pause';
          tr.timer = 40;
          g.enemies = [];
          g.particles = [];
        }
      } else if (tr.phase === 'pause') {
        // Brief pause — clear screen, reset power
        g.power = 0;
        if (tr.timer <= 0) {
          tr.phase = 'flyIn';
          tr.timer = 60;
          s.x = g.W / 2;
          s.y = g.H + 60;
          s.invTimer = 120;
          s.flashTimer = 0;
          // Advance world and set up next boss threshold
          g.worldIdx++;
          g.nextBossAt = g.enemiesSpawned + ENEMIES_PER_BOSS;
          g.texts.push({ x: g.W / 2, y: g.H / 2 - 20, text: `WORLD ${g.worldIdx + 1}`, color: '#ffd700', life: 100, maxL: 100, vy: 0, sz: 48 });
        }
      } else if (tr.phase === 'flyIn') {
        // Ship flies in from the bottom to starting position
        const targetY = g.H - 90;
        s.y += (targetY - s.y) * 0.06 * dt;
        if (tr.timer <= 0 && Math.abs(s.y - targetY) < 5) {
          s.y = targetY;
          g.transition = null;
          g.spawnCooldown = 30;
        }
      }

      // Stars still scroll during transition (handled below)
      // Skip all normal gameplay
    } else {
    // ---- ship ----
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
    g.shootTimer -= dt * 16.667;
    const firing = k[' '] || k['z'] || k['Z'] || m.down;
    if (firing && g.shootTimer <= 0) {
      g.shootTimer = SHOOT_COOLDOWNS[g.weapon];
      const w = WEAPONS[g.weapon];
      if (g.weapon === 0) {
        // ADD: rapid single shots
        g.bullets.push({ id: nextId(), x: s.x, y: s.y - 22, vx: 0, vy: -w.bulletSpeed, wep: 0, sz: 4, alive: true });
      } else if (g.weapon === 1) {
        // SUB: single homing shot
        g.bullets.push({ id: nextId(), x: s.x, y: s.y - 18, vx: 0, vy: -w.bulletSpeed, wep: 1, sz: 5, alive: true, homing: true });
      } else if (g.weapon === 2) {
        // MUL: heavy shot that splits into a burst after short travel
        g.bullets.push({ id: nextId(), x: s.x, y: s.y - 22, vx: 0, vy: -w.bulletSpeed, wep: 2, sz: 8, alive: true, splitTimer: 18 });
      } else if (g.weapon === 3) {
        // DIV: ricochet shot that bounces off walls, passes through enemies
        const spread = (Math.random() - 0.5) * 1.2;
        g.bullets.push({ id: nextId(), x: s.x, y: s.y - 22, vx: spread, vy: -w.bulletSpeed, wep: 3, sz: 4, alive: true, bounces: 3, trail: [] });
      }
    }

    // ---- bullets ----
    g.bullets = g.bullets.filter(b => {
      if (!b.alive) return false;
      if (b.homing && g.enemies.length > 0) {
        let best = null, bestD = 280;
        for (const e of g.enemies) { const d = dist(b, e); if (d < bestD) { bestD = d; best = e; } }
        if (best) {
          const a = Math.atan2(best.y - b.y, best.x - b.x);
          b.vx += Math.cos(a) * 0.35 * dt;
          b.vy += Math.sin(a) * 0.35 * dt;
          const spd = Math.hypot(b.vx, b.vy);
          if (spd > 0.01) {
            const want = WEAPONS[1].bulletSpeed;
            b.vx = (b.vx / spd) * want;
            b.vy = (b.vy / spd) * want;
          }
        }
      }
      // MUL: split into burst ring after timer expires
      if (b.splitTimer !== undefined) {
        b.splitTimer -= dt;
        if (b.splitTimer <= 0) {
          const count = 6;
          for (let i = 0; i < count; i++) {
            const a = (i / count) * Math.PI * 2 + rand(-0.15, 0.15);
            const spd = WEAPONS[2].bulletSpeed * 0.9;
            g.bullets.push({ id: nextId(), x: b.x, y: b.y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd - 2, wep: 2, sz: 4, alive: true, child: true });
          }
          // Spark effect at split point
          for (let p = 0; p < 8; p++) {
            g.particles.push({ x: b.x, y: b.y, vx: rand(-4, 4), vy: rand(-4, 4), life: 12 + Math.random() * 8, maxL: 20, color: WEAPONS[2].color, sz: 2 + Math.random() * 3 });
          }
          b.alive = false;
        }
      }
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      // Ricochet: bounce off walls
      if (b.bounces !== undefined) {
        if (b.trail) { b.trail.push({ x: b.x, y: b.y }); if (b.trail.length > 12) b.trail.shift(); }
        if (b.x < 4 || b.x > g.W - 4) {
          if (b.bounces > 0) { b.vx = -b.vx; b.x = clamp(b.x, 4, g.W - 4); b.bounces--; g.particles.push({ x: b.x, y: b.y, vx: 0, vy: 0, life: 10, maxL: 10, color: '#38bdf8', sz: 6 }); }
          else return false;
        }
        if (b.y < 4 || b.y > g.H - 4) {
          if (b.bounces > 0) { b.vy = -b.vy; b.y = clamp(b.y, 4, g.H - 4); b.bounces--; g.particles.push({ x: b.x, y: b.y, vx: 0, vy: 0, life: 10, maxL: 10, color: '#38bdf8', sz: 6 }); }
          else return false;
        }
        return true;
      }
      return b.x > -30 && b.x < g.W + 30 && b.y > -30 && b.y < g.H + 30;
    });

    // ---- continuous enemy spawning ----
    g.spawnCooldown -= dt;
    if (g.spawnCooldown <= 0) {
      const diff = Math.min(g.enemiesSpawned / 30, 10);
      const minInterval = Math.max(SPAWN_INTERVAL_MIN, 60 - diff * 6);
      g.spawnCooldown = rand(minInterval, SPAWN_INTERVAL_MAX);
      spawnEnemy(g);

      // Spawn boss after 3 enemies, if no boss active
      if (g.enemiesSpawned >= g.nextBossAt && !g.boss) {
        const bossCfg = generateBossTargets(g.worldIdx);
        const bulletCount = g.worldIdx + 1; // +1 bullet per world
        const fireRate = Math.max(40, 120 - g.worldIdx * 8);
        const bulletSpeed = Math.min(2.0 + g.worldIdx * 0.25, 4.5);
        g.boss = {
          x: g.W / 2, y: -100, targetY: 110,
          w: 130, h: 90, hp: bossCfg.hp, maxHP: bossCfg.hp,
          targets: bossCfg.targets, targetIdx: 0,
          target: bossCfg.targets[0],
          bulletCount, fireRate, bulletSpeed,
          phase: 'enter', shootTimer: 120, hitFlash: 0, angle: 0,
          patternAngle: 0,
        };
        g.texts.push({ x: g.W / 2, y: g.H / 2 - 50, text: `WORLD ${g.worldIdx + 1}`, color: '#ffd700', life: 120, maxL: 120, vy: 0, sz: 48 });
        g.texts.push({ x: g.W / 2, y: g.H / 2 + 10, text: `Boss Shield: ${bossCfg.targets[0]}`, color: '#ef4444', life: 100, maxL: 100, vy: 0, sz: 22 });
      }
    }
    } // end normal gameplay (not in transition)

    if (!g.transition) {
    // ---- enemies ----
    g.enemies = g.enemies.filter(e => {
      // Smooth waypoint steering (like 1942/Raptor)
      if (e.waypoints && e.wpIdx < e.waypoints.length) {
        const wp = e.waypoints[e.wpIdx];
        const dx = wp.x - e.x;
        const dy = wp.y - e.y;
        const d = Math.hypot(dx, dy);
        if (d < 20) {
          e.wpIdx++; // reached waypoint, steer toward next
        } else {
          // Smoothly steer velocity toward waypoint
          const targetAngle = Math.atan2(dy, dx);
          const curAngle = Math.atan2(e.vy, e.vx);
          let diff = targetAngle - curAngle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          const newAngle = curAngle + diff * e.steer * 0.05 * dt;
          e.vx = Math.cos(newAngle) * e.baseSpeed;
          e.vy = Math.sin(newAngle) * e.baseSpeed;
        }
      }
      e.x += e.vx * dt;
      e.y += e.vy * dt;

      // e.shootTimer -= dt;
      // if (e.shootTimer <= 0 && e.y > 60 && e.y < g.H - 180 && e.shootRate > 0) {
      //   e.shootTimer = e.shootRate + Math.random() * 80;
      //   const a = Math.atan2(s.y - e.y, s.x - e.x);
      //   g.eBullets.push({ id: nextId(), x: e.x, y: e.y, vx: Math.cos(a) * 2.8, vy: Math.sin(a) * 2.8, sz: 4 });
      // }
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
        // Movement complexity scales with world
        const w = g.worldIdx;
        const cx = g.W / 2, rangeX = g.W * 0.3, rangeY = 60;
        if (w <= 1) {
          // Simple slow sway
          b.x = cx + Math.sin(b.angle) * rangeX * 0.6;
        } else if (w <= 3) {
          // Figure-8 pattern
          b.x = cx + Math.sin(b.angle) * rangeX;
          b.y = b.targetY + Math.sin(b.angle * 2) * rangeY * 0.5;
        } else if (w <= 5) {
          // Diagonal sweeps with vertical bobbing
          b.x = cx + Math.sin(b.angle * 0.7) * rangeX + Math.cos(b.angle * 1.3) * rangeX * 0.3;
          b.y = b.targetY + Math.sin(b.angle * 1.1) * rangeY * 0.7 + Math.cos(b.angle * 0.5) * rangeY * 0.3;
        } else {
          // Complex Lissajous patrol — wide sweeping arcs
          b.x = cx + Math.sin(b.angle * 0.8) * rangeX + Math.sin(b.angle * 1.9) * rangeX * 0.4;
          b.y = b.targetY + Math.sin(b.angle * 1.3) * rangeY + Math.cos(b.angle * 0.6) * rangeY * 0.5;
        }
        b.x = clamp(b.x, b.w / 2 + 10, g.W - b.w / 2 - 10);
        b.y = clamp(b.y, 60, 220);
        b.shootTimer -= dt;
        b.patternAngle += dt * 0.08;
        if (b.shootTimer <= 0) {
          b.shootTimer = b.fireRate + Math.random() * 30;
          const aimed = Math.atan2(s.y - b.y, s.x - b.x);
          const pattern = randInt(0, 3);
          const patternColors = ['#ff6b6b', '#a78bfa', '#fbbf24', '#38bdf8']; // red=fan, purple=spiral, gold=shotgun, blue=ring
          const col = patternColors[pattern];
          for (let i = 0; i < b.bulletCount; i++) {
            let a, spd = b.bulletSpeed;
            if (pattern === 0) {
              // Fan spread aimed at player
              const half = (b.bulletCount - 1) / 2;
              a = aimed + (i - half) * 0.3;
            } else if (pattern === 1) {
              // Spiral burst from rotating angle
              a = b.patternAngle + (i / b.bulletCount) * Math.PI * 2;
              spd *= 0.8 + Math.random() * 0.4;
            } else if (pattern === 2) {
              // Shotgun scatter toward player
              a = aimed + (Math.random() - 0.5) * 1.2;
              spd *= 0.7 + Math.random() * 0.6;
            } else {
              // Ring burst in all directions
              a = (i / b.bulletCount) * Math.PI * 2 + Math.random() * 0.3;
            }
            g.eBullets.push({ id: nextId(), x: b.x, y: b.y + b.h / 2, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd, sz: 6, boss: true, color: col });
          }
        }
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
          // Boss always drops a heart
          g.pickups.push({ id: nextId(), x: b.x, y: b.y, vy: 1.2, type: PICKUP_TYPES[0], bobT: 0 });
          g.boss = null;
          g.texts.push({ x: g.W / 2, y: g.H / 2, text: 'WORLD COMPLETE!', color: '#4ade80', life: 120, maxL: 120, vy: -0.5, sz: 36 });
          // Start world transition
          g.transition = { phase: 'flyOut', timer: 80 };
        }
      }
      if (b && b.hitFlash > 0 && b.phase !== 'dying') b.hitFlash -= dt;
    }

    // ---- enemy bullets ----
    g.eBullets = g.eBullets.filter(b => {
      b.x += b.vx * dt; b.y += b.vy * dt;
      return b.x > -20 && b.x < g.W + 20 && b.y > -20 && b.y < g.H + 20;
    });

    // ---- collisions: player bullets vs enemies ----
    for (let bi = g.bullets.length - 1; bi >= 0; bi--) {
      const bul = g.bullets[bi];
      if (!bul.alive) continue;

      for (let ei = g.enemies.length - 1; ei >= 0; ei--) {
        const en = g.enemies[ei];
        // DIV pierce: skip enemies already hit by this bullet
        if (bul.pierce && bul.hitIds.includes(en.id)) continue;
        if (dist(bul, en) < en.w / 2 + bul.sz + 4) {
          const oldP = g.power;
          const newP = applyOp(g.power, bul.wep, en.value);
          if (newP !== oldP) {
            g.power = newP;
            g.shake = Math.min(g.shake + 6, 15);
          } else {
            g.power = newP;
          }

          g.texts.push({ x: en.x, y: en.y - 28, text: `${oldP} ${opSymbol(bul.wep)} ${en.value} = ${newP}`, color: WEAPONS[bul.wep].color, life: 55, maxL: 55, vy: -1.6, sz: 17 });
          en.hp -= 1;
          en.hitFlash = 8;
          g.combo++;
          g.comboTimer = 100;

          if (en.hp <= 0) {
            const base = en.value * 10;
            const bonus = Math.floor(base * g.combo * 0.1);
            g.score += base + bonus;
            for (let p = 0; p < 10; p++) {
              g.particles.push({ x: en.x + rand(-12, 12), y: en.y + rand(-12, 12), vx: rand(-4, 4), vy: rand(-4, 4), life: 18 + Math.random() * 14, maxL: 32, color: WEAPONS[bul.wep].color, sz: 2 + Math.random() * 4 });
            }
            g.shake = Math.min(g.shake + 3, 10);

            // Drop pickup at combo milestones
            if (g.combo >= g.lastComboPickup + COMBO_PICKUP_INTERVAL) {
              g.lastComboPickup = g.combo;
              const ptype = PICKUP_TYPES[randInt(0, PICKUP_TYPES.length - 1)];
              g.pickups.push({ id: nextId(), x: en.x, y: en.y, vy: 1.2, type: ptype, bobT: Math.random() * Math.PI * 2 });
            }

            g.enemies.splice(ei, 1);
          }
          if (bul.pierce) {
            // DIV: pass through, track hit enemy
            bul.hitIds.push(en.id);
          } else {
            bul.alive = false;
            break;
          }
        }
      }

      // player bullets vs boss
      if (bul.alive && g.boss && g.boss.phase === 'fight') {
        const bo = g.boss;
        if (dist(bul, bo) < bo.w / 2 + bul.sz) {
          if (g.power === bo.target) {
            const primeDmg = (g.primeTimer > 0 && isPrime(g.power)) ? 2 : 1;
            bo.hp -= primeDmg;
            bo.hitFlash = 15;
            g.shake = 10;
            const breakText = primeDmg > 1 ? 'PRIME BREAK! x2' : 'SHIELD BREAK!';
            g.texts.push({ x: bo.x, y: bo.y - 55, text: breakText, color: '#ffd700', life: 60, maxL: 60, vy: -2, sz: 20 });
            for (let p = 0; p < 18; p++) {
              g.particles.push({ x: bo.x + rand(-45, 45), y: bo.y + rand(-35, 35), vx: rand(-5, 5), vy: rand(-5, 5), life: 22 + Math.random() * 18, maxL: 40, color: '#ffd700', sz: 3 + Math.random() * 5 });
            }
            if (bo.hp <= 0) {
              bo.phase = 'dying';
              bo.hitFlash = 0;
            } else {
              bo.targetIdx++;
              bo.target = bo.targets[bo.targetIdx % bo.targets.length];
              g.texts.push({ x: bo.x, y: bo.y + 25, text: `New shield: ${bo.target}`, color: '#38bdf8', life: 80, maxL: 80, vy: -0.5, sz: 15 });
            }
          } else {
            bo.hitFlash = 4;
            g.texts.push({ x: bo.x, y: bo.y - 45, text: `Need ${bo.target}!  You: ${g.power}`, color: '#94a3b8', life: 40, maxL: 40, vy: -1, sz: 13 });
            for (let p = 0; p < 4; p++) {
              g.particles.push({ x: bul.x, y: bul.y, vx: rand(-3, 3), vy: rand(1, 4), life: 12, maxL: 12, color: '#64748b', sz: 2 });
            }
          }
          bul.alive = false;
        }
      }
    }
    g.bullets = g.bullets.filter(b => b.alive);

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
    g.bullets = g.bullets.filter(b => b.alive);

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
    }
    } // end !transition guard

    // ---- pickups ----
    if (g.shieldTimer > 0) g.shieldTimer -= dt;
    if (g.primeTimer > 0) g.primeTimer -= dt;
    g.pickups = g.pickups.filter(pk => {
      pk.bobT += dt * 0.1;
      pk.y += pk.vy * dt;
      pk.x += Math.sin(pk.bobT * 3) * 0.5 * dt;
      // Collect if player touches
      if (dist(pk, s) < 28) {
        if (pk.type.id === 'heart') {
          g.lives++;
        } else if (pk.type.id === 'shield') {
          g.shieldTimer = 300; // ~5 seconds
          s.invTimer = Math.max(s.invTimer, 10);
        } else if (pk.type.id === 'prime') {
          g.primeTimer = 480; // ~8 seconds
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
    g.particles = g.particles.filter(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.97; p.vy *= 0.97; p.life -= dt; return p.life > 0; });

    // ---- text effects ----
    g.texts = g.texts.filter(t => { t.y += (t.vy || 0) * dt; t.life -= dt; return t.life > 0; });

    // ---- stars & nebulae ----
    for (const st of g.stars) { st.y += st.speed * dt; if (st.y > g.H) { st.y = -2; st.x = Math.random() * g.W; } }
    for (const nb of g.nebulae) { nb.y += nb.speed * dt; if (nb.y > g.H + nb.r) { nb.y = -nb.r; nb.x = Math.random() * g.W; } }

    // ---- hud update ----
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      setHud({
        score: g.score, lives: g.lives, power: g.power, weapon: g.weapon,
        world: g.worldIdx + 1, combo: g.combo,
        bossHP: g.boss?.hp || 0, bossMaxHP: g.boss?.maxHP || 0,
        bossTarget: g.boss?.target || 0, bossActive: !!g.boss,
        powerMatch: !!(g.boss && g.boss.phase === 'fight' && g.power === g.boss.target),
        shieldActive: g.shieldTimer > 0, primeActive: g.primeTimer > 0,
        isPrime: isPrime(g.power),
        msg: '', msgTimer: 0,
      });
    }

    // ---- game over ----
    if (g.lives <= 0) setScreen('gameover');
  }

  function hitPlayer(g) {
    g.lives--;
    g.ship.invTimer = 120;
    g.ship.flashTimer = 120;
    g.shake = 14;
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

    // Nebula patches — soft colored fog
    for (const nb of g.nebulae) {
      const ng = ctx.createRadialGradient(nb.x, nb.y, 0, nb.x, nb.y, nb.r);
      ng.addColorStop(0, `hsla(${nb.hue},60%,30%,${nb.alpha})`);
      ng.addColorStop(0.5, `hsla(${nb.hue},50%,20%,${nb.alpha * 0.5})`);
      ng.addColorStop(1, 'transparent');
      ctx.fillStyle = ng;
      ctx.fillRect(nb.x - nb.r, nb.y - nb.r, nb.r * 2, nb.r * 2);
    }

    // Stars with lens flares on bright ones
    for (const st of g.stars) {
      ctx.globalAlpha = st.bright;
      const col = st.hue ? `hsl(${st.hue},40%,80%)` : '#c8d6e5';
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      ctx.fill();
      if (st.flare) {
        // Cross-shaped lens flare
        const fl = st.size * 4;
        ctx.globalAlpha = st.bright * 0.4;
        ctx.strokeStyle = col;
        ctx.lineWidth = 0.5;
        ctx.beginPath(); ctx.moveTo(st.x - fl, st.y); ctx.lineTo(st.x + fl, st.y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(st.x, st.y - fl); ctx.lineTo(st.x, st.y + fl); ctx.stroke();
        // Diagonal smaller
        ctx.globalAlpha = st.bright * 0.2;
        const fl2 = fl * 0.5;
        ctx.beginPath(); ctx.moveTo(st.x - fl2, st.y - fl2); ctx.lineTo(st.x + fl2, st.y + fl2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(st.x + fl2, st.y - fl2); ctx.lineTo(st.x - fl2, st.y + fl2); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    // ======= ENEMIES — faceted alien drones =======
    for (const e of g.enemies) {
      ctx.save();
      ctx.translate(e.x, e.y);
      // Hand-picked hues for max contrast between adjacent numbers
      const ENEMY_HUES = [0, 30, 200, 55, 290, 160, 340, 100, 240, 20];
      const hue = ENEMY_HUES[e.value % ENEMY_HUES.length];
      const r = e.w / 2;
      const flash = e.hitFlash > 0;
      const pulse = 0.9 + Math.sin(g.time * 0.12 + e.id * 1.7) * 0.1;

      // Outer ambient glow
      const gc = flash ? 'rgba(255,180,180,0.4)' : `hsla(${hue},60%,50%,0.18)`;
      const grad = ctx.createRadialGradient(0, 0, r * 0.3, 0, 0, r * 1.4);
      grad.addColorStop(0, gc); grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(0, 0, r * 1.4, 0, Math.PI * 2); ctx.fill();

      // Spinning orbit ring
      ctx.save();
      ctx.rotate(g.time * 0.04 + e.id);
      ctx.strokeStyle = flash ? 'rgba(255,200,200,0.4)' : `hsla(${hue},50%,55%,0.2)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, r * 1.1, r * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      // Orbiting dot
      const od = g.time * 0.06 + e.id * 2;
      ctx.fillStyle = flash ? '#ffa0a0' : `hsl(${hue},70%,65%)`;
      ctx.beginPath();
      ctx.arc(Math.cos(od) * r * 1.1, Math.sin(od) * r * 0.5, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Body — gradient-filled hexagon
      const bodyGrad = ctx.createRadialGradient(0, -r * 0.3, 0, 0, 0, r);
      bodyGrad.addColorStop(0, flash ? '#ff8888' : `hsl(${hue},50%,42%)`);
      bodyGrad.addColorStop(1, flash ? '#cc4444' : `hsl(${hue},55%,22%)`);
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = flash ? '#fff' : `hsl(${hue},60%,55%)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const rr = r * pulse;
        i === 0 ? ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr) : ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
      }
      ctx.closePath(); ctx.fill(); ctx.stroke();

      // Inner detail — smaller hex rotated
      ctx.save();
      ctx.rotate(Math.PI / 6);
      ctx.strokeStyle = `hsla(${hue},50%,60%,0.25)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        const rr = r * 0.55;
        i === 0 ? ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr) : ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
      }
      ctx.closePath(); ctx.stroke();
      ctx.restore();

      // Core glow
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, r * 0.35);
      coreGrad.addColorStop(0, flash ? 'rgba(255,255,255,0.6)' : `hsla(${hue},80%,70%,0.4)`);
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(0, 0, r * 0.35, 0, Math.PI * 2); ctx.fill();

      // Number — with shadow for depth
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.font = `bold 14px 'Exo 2', sans-serif`;
      ctx.fillText(e.value, 0.5, 1.5);
      ctx.fillStyle = '#fff';
      ctx.fillText(e.value, 0, 1);

      // HP bar
      if (e.maxHP > 1) {
        const ratio = e.hp / e.maxHP;
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(-e.w / 2, e.w / 2 + 4, e.w, 3);
        const hpGrad = ctx.createLinearGradient(-e.w / 2, 0, e.w / 2, 0);
        if (ratio > 0.5) { hpGrad.addColorStop(0, '#22c55e'); hpGrad.addColorStop(1, '#4ade80'); }
        else { hpGrad.addColorStop(0, '#dc2626'); hpGrad.addColorStop(1, '#ef4444'); }
        ctx.fillStyle = hpGrad;
        ctx.fillRect(-e.w / 2, e.w / 2 + 4, e.w * ratio, 3);
      }
      ctx.restore();
    }

    // ======= BOSS — enhanced with orbital energy ring =======
    if (g.boss) {
      const b = g.boss;
      const powerMatch = g.power === b.target && b.phase === 'fight';
      ctx.save();
      ctx.translate(b.x, b.y);
      if (b.phase === 'enter') ctx.globalAlpha = 0.7;

      const bossStyle = g.worldIdx % 6;
      const bossHues = [0, 280, 160, 30, 200, 330];
      const bossHue = bossHues[bossStyle];
      const strokeColor = b.hitFlash > 0 ? '#fff' : powerMatch ? '#ffd700' : `hsl(${bossHue},75%,55%)`;
      const r = b.w / 2;

      // Outer rotating energy ring
      ctx.save();
      ctx.rotate(g.time * 0.025);
      ctx.strokeStyle = `hsla(${bossHue},70%,60%,${0.15 + Math.sin(g.time * 0.08) * 0.08})`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 6]);
      ctx.beginPath(); ctx.arc(0, 0, r * 1.25, 0, Math.PI * 2); ctx.stroke();
      ctx.setLineDash([]);
      // Energy dots on ring
      for (let i = 0; i < 6; i++) {
        const da = (i / 6) * Math.PI * 2 + g.time * 0.025;
        ctx.fillStyle = `hsla(${bossHue},80%,70%,0.5)`;
        ctx.beginPath();
        ctx.arc(Math.cos(da) * r * 1.25, Math.sin(da) * r * 1.25, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Power match pulsing glow
      if (powerMatch) {
        const pulseSize = b.w * 1.3 + Math.sin(g.time * 0.15) * 15;
        const matchGrad = ctx.createRadialGradient(0, 0, b.w * 0.3, 0, 0, pulseSize);
        matchGrad.addColorStop(0, 'rgba(255,215,0,0.5)');
        matchGrad.addColorStop(0.6, 'rgba(255,215,0,0.15)');
        matchGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = matchGrad;
        ctx.beginPath(); ctx.arc(0, 0, pulseSize, 0, Math.PI * 2); ctx.fill();
      }

      // Ambient glow
      const bgc = b.hitFlash > 0 ? 'rgba(255,215,0,0.45)' : powerMatch ? 'rgba(255,215,0,0.35)' : `hsla(${bossHue},70%,50%,0.2)`;
      const ambGrad = ctx.createRadialGradient(0, 0, r * 0.2, 0, 0, b.w);
      ambGrad.addColorStop(0, bgc); ambGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = ambGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.w, 0, Math.PI * 2); ctx.fill();

      // Body shape with gradient fill
      const bodyGrad = ctx.createRadialGradient(0, -r * 0.3, 0, 0, r * 0.2, r);
      bodyGrad.addColorStop(0, b.hitFlash > 0 ? '#ffe066' : powerMatch ? `hsl(${bossHue},65%,32%)` : `hsl(${bossHue},60%,38%)`);
      bodyGrad.addColorStop(1, b.hitFlash > 0 ? '#cc9900' : powerMatch ? `hsl(${bossHue},70%,18%)` : `hsl(${bossHue},65%,18%)`);
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2.5;

      // Shape based on world style (same shapes as before)
      if (bossStyle === 0) {
        ctx.beginPath();
        for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2 - Math.PI / 2; i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
      } else if (bossStyle === 1) {
        ctx.beginPath();
        for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const rad = i % 2 === 0 ? r * 1.1 : r * 0.5; i === 0 ? ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad) : ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
      } else if (bossStyle === 2) {
        ctx.beginPath();
        ctx.moveTo(0, -r * 1.2); ctx.lineTo(r * 0.4, -r * 0.4); ctx.lineTo(r * 1.1, -r * 0.2); ctx.lineTo(r * 0.6, r * 0.15); ctx.lineTo(r * 0.9, r * 0.7); ctx.lineTo(0, r * 0.5); ctx.lineTo(-r * 0.9, r * 0.7); ctx.lineTo(-r * 0.6, r * 0.15); ctx.lineTo(-r * 1.1, -r * 0.2); ctx.lineTo(-r * 0.4, -r * 0.4);
        ctx.closePath(); ctx.fill(); ctx.stroke();
      } else if (bossStyle === 3) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2 - Math.PI / 2; i === 0 ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r) : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.save(); ctx.rotate(g.time * 0.03);
        ctx.strokeStyle = `hsla(${bossHue},90%,70%,0.5)`;  ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < 3; i++) { const a = (i / 3) * Math.PI * 2; i === 0 ? ctx.moveTo(Math.cos(a) * r * 0.55, Math.sin(a) * r * 0.55) : ctx.lineTo(Math.cos(a) * r * 0.55, Math.sin(a) * r * 0.55); }
        ctx.closePath(); ctx.stroke(); ctx.restore();
      } else if (bossStyle === 4) {
        const teeth = 12; ctx.beginPath();
        for (let i = 0; i < teeth * 2; i++) { const a = (i / (teeth * 2)) * Math.PI * 2 - Math.PI / 2; const rad = i % 2 === 0 ? r * 1.05 : r * 0.8; i === 0 ? ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad) : ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = `hsl(${bossHue},50%,16%)`; ctx.beginPath(); ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = strokeColor; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2); ctx.stroke();
      } else {
        const facets = 9; ctx.beginPath();
        for (let i = 0; i < facets; i++) { const a = (i / facets) * Math.PI * 2 - Math.PI / 2; const rad = r * (0.8 + 0.3 * Math.sin(i * 2.7 + 1.3)); i === 0 ? ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad) : ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad); }
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = `hsla(${bossHue},80%,70%,0.2)`; ctx.lineWidth = 0.8;
        for (let i = 0; i < facets; i++) { const a = (i / facets) * Math.PI * 2 - Math.PI / 2; const rad = r * (0.8 + 0.3 * Math.sin(i * 2.7 + 1.3)); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * rad * 0.85, Math.sin(a) * rad * 0.85); ctx.stroke(); }
      }

      // Panel detail lines across body
      ctx.strokeStyle = `hsla(${bossHue},50%,70%,0.12)`;
      ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(-r * 0.6, -r * 0.1); ctx.lineTo(r * 0.6, -r * 0.1); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-r * 0.4, r * 0.2); ctx.lineTo(r * 0.4, r * 0.2); ctx.stroke();

      // Pulsing core energy
      const coreP = 0.3 + Math.sin(g.time * 0.1) * 0.15;
      const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.w / 3);
      coreGrad.addColorStop(0, powerMatch ? `rgba(255,215,0,${coreP + 0.2})` : `hsla(${bossHue},80%,70%,${coreP})`);
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.w / 3, 0, Math.PI * 2); ctx.fill();

      // Inner core ring
      ctx.strokeStyle = powerMatch ? 'rgba(255,215,0,0.5)' : `hsla(${bossHue},60%,60%,0.25)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(0, 0, b.w / 3, 0, Math.PI * 2); ctx.stroke();

      // Shield number with glow
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = powerMatch ? 'rgba(255,215,0,0.8)' : `hsla(${bossHue},80%,60%,0.5)`;
      ctx.shadowBlur = powerMatch ? 16 : 8;
      ctx.fillStyle = powerMatch ? '#ffd700' : '#fff';
      ctx.font = `bold 26px 'Exo 2', sans-serif`;
      ctx.fillText(b.target, 0, -3);
      ctx.shadowBlur = 0;
      ctx.fillStyle = powerMatch ? '#ffd700' : '#7a8ba8';
      ctx.font = `600 9px 'Rajdhani', sans-serif`;
      ctx.letterSpacing = '2px';
      ctx.fillText(powerMatch ? 'HIT ME!' : 'SHIELD', 0, 17);

      // HP bar with gradient
      const bw = b.w * 0.8, bh = 5, by = b.h / 2 + 14;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.beginPath();
      const hpR = 2.5;
      ctx.roundRect(-bw / 2, by, bw, bh, hpR);
      ctx.fill();
      const hr = b.hp / b.maxHP;
      const hpGrad = ctx.createLinearGradient(-bw / 2, 0, bw / 2, 0);
      if (hr > 0.5) { hpGrad.addColorStop(0, '#22c55e'); hpGrad.addColorStop(1, '#4ade80'); }
      else if (hr > 0.25) { hpGrad.addColorStop(0, '#d97706'); hpGrad.addColorStop(1, '#fbbf24'); }
      else { hpGrad.addColorStop(0, '#dc2626'); hpGrad.addColorStop(1, '#ef4444'); }
      ctx.fillStyle = hpGrad;
      ctx.beginPath(); ctx.roundRect(-bw / 2, by, bw * hr, bh, hpR); ctx.fill();
      // Highlight
      ctx.fillStyle = 'rgba(255,255,255,0.15)';
      ctx.beginPath(); ctx.roundRect(-bw / 2, by, bw * hr, bh * 0.4, [hpR, hpR, 0, 0]); ctx.fill();

      if (powerMatch) {
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = 'rgba(255,215,0,0.6)'; ctx.shadowBlur = 10;
        ctx.font = `bold 11px Orbitron, sans-serif`;
        ctx.fillText('\u26A1 VULNERABLE \u26A1', 0, -b.h / 2 - 20);
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ======= PLAYER BULLETS — streaked with hot core =======
    for (const b of g.bullets) {
      const w = WEAPONS[b.wep];
      ctx.save();
      ctx.translate(b.x, b.y);

      // Motion trail (stretched glow in velocity direction)
      const spd = Math.hypot(b.vx, b.vy);
      if (spd > 1) {
        const trailLen = Math.min(spd * 3, 18);
        const nx = b.vx / spd, ny = b.vy / spd;
        const tg = ctx.createLinearGradient(nx * -trailLen, ny * -trailLen, 0, 0);
        tg.addColorStop(0, 'transparent');
        tg.addColorStop(1, w.glow);
        ctx.strokeStyle = tg;
        ctx.lineWidth = b.sz * 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(nx * -trailLen, ny * -trailLen);
        ctx.lineTo(0, 0);
        ctx.stroke();
      }

      // Outer glow halo
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.sz * 2.5);
      glowGrad.addColorStop(0, w.glow); glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 2.5, 0, Math.PI * 2); ctx.fill();

      // Per-weapon shape with bright core
      if (b.wep === 0) {
        // ADD: bright elongated bolt
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.ellipse(0, 0, b.sz * 0.6, b.sz * 1.2, Math.atan2(b.vy, b.vx) + Math.PI / 2, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = w.color;
        ctx.beginPath(); ctx.arc(0, 0, b.sz * 0.9, 0, Math.PI * 2); ctx.fill();
      } else if (b.wep === 1) {
        // SUB: arrowhead with gradient
        const ang = Math.atan2(b.vy, b.vx);
        ctx.save(); ctx.rotate(ang + Math.PI / 2);
        const sg = ctx.createLinearGradient(0, -b.sz * 1.5, 0, b.sz);
        sg.addColorStop(0, '#fff'); sg.addColorStop(0.4, w.color); sg.addColorStop(1, w.color);
        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.moveTo(0, -b.sz * 1.8);
        ctx.lineTo(-b.sz * 0.9, b.sz * 0.5);
        ctx.lineTo(0, b.sz * 0.1);
        ctx.lineTo(b.sz * 0.9, b.sz * 0.5);
        ctx.closePath(); ctx.fill();
        ctx.restore();
      } else if (b.wep === 2) {
        // MUL: pulsing star with spinning arms
        const rot = g.time * 0.18;
        const pulse = 1 + Math.sin(g.time * 0.2 + b.id * 0.5) * 0.15;
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(0, 0, b.sz * 0.4 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        for (let i = 0; i < 4; i++) {
          const a = rot + (i / 4) * Math.PI * 2;
          const armLen = b.sz * 1.6 * pulse;
          ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a) * armLen, Math.sin(a) * armLen); ctx.stroke();
        }
      } else if (b.wep === 3) {
        // DIV: ricochet diamond with fading trail
        if (b.trail && b.trail.length > 1) {
          for (let ti = 1; ti < b.trail.length; ti++) {
            const alpha = ti / b.trail.length * 0.5;
            ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(b.trail[ti - 1].x - b.x, b.trail[ti - 1].y - b.y); ctx.lineTo(b.trail[ti].x - b.x, b.trail[ti].y - b.y); ctx.stroke();
          }
        }
        // Spinning diamond
        const spin = g.time * 0.2 + (b.id || 0);
        ctx.save(); ctx.rotate(spin);
        ctx.fillStyle = w.color;
        ctx.beginPath();
        ctx.moveTo(0, -b.sz * 1.8);
        ctx.lineTo(-b.sz, 0);
        ctx.lineTo(0, b.sz * 1.8);
        ctx.lineTo(b.sz, 0);
        ctx.closePath(); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath();
        ctx.moveTo(0, -b.sz * 1);
        ctx.lineTo(-b.sz * 0.4, 0);
        ctx.lineTo(0, b.sz * 1);
        ctx.lineTo(b.sz * 0.4, 0);
        ctx.closePath(); ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    }

    // ======= ENEMY BULLETS — gradient orbs with trail =======
    for (const b of g.eBullets) {
      ctx.save();
      ctx.translate(b.x, b.y);
      const bc = b.color || (b.boss ? '#ff6b6b' : '#fbbf24');

      // Motion trail
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

      // Outer glow
      const eg = ctx.createRadialGradient(0, 0, 0, 0, 0, b.sz * 2);
      eg.addColorStop(0, bc + '60'); eg.addColorStop(1, 'transparent');
      ctx.fillStyle = eg;
      ctx.beginPath(); ctx.arc(0, 0, b.sz * 2, 0, Math.PI * 2); ctx.fill();

      // Gradient orb body
      const og = ctx.createRadialGradient(0, -b.sz * 0.2, b.sz * 0.15, 0, 0, b.sz);
      og.addColorStop(0, '#fff'); og.addColorStop(0.3, bc); og.addColorStop(1, bc + '80');
      ctx.fillStyle = og;
      ctx.beginPath(); ctx.arc(0, 0, b.sz, 0, Math.PI * 2); ctx.fill();

      // Spinning inner cross
      ctx.save();
      ctx.rotate(g.time * 0.15 + b.id * 0.7);
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(-b.sz * 0.5, 0); ctx.lineTo(b.sz * 0.5, 0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -b.sz * 0.5); ctx.lineTo(0, b.sz * 0.5); ctx.stroke();
      ctx.restore();

      ctx.restore();
    }

    // ======= SHIP — detailed multi-panel fighter =======
    const sh = g.ship;
    if (!(sh.flashTimer > 0 && Math.floor(sh.flashTimer) % 6 < 3)) {
      ctx.save();
      ctx.translate(sh.x, sh.y);
      const wc = WEAPONS[g.weapon];

      // Dual engine flames (left and right nacelles)
      for (const ex of [-7, 7]) {
        const flicker = 3 + Math.random() * 6;
        const fLen = 12 + Math.random() * 8;
        // Outer flame
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
        // Inner hot core flame
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
      // Engine heat glow behind ship
      const heatGlow = ctx.createRadialGradient(0, 20, 2, 0, 20, 20);
      heatGlow.addColorStop(0, 'rgba(255,140,40,0.25)');
      heatGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = heatGlow;
      ctx.beginPath(); ctx.arc(0, 20, 20, 0, Math.PI * 2); ctx.fill();

      // Body ambient glow (weapon-colored)
      const ambGlow = ctx.createRadialGradient(0, -2, 0, 0, -2, 38);
      ambGlow.addColorStop(0, wc.glow); ambGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambGlow;
      ctx.beginPath(); ctx.arc(0, -2, 38, 0, Math.PI * 2); ctx.fill();

      // Main hull — gradient metallic fill
      const hullGrad = ctx.createLinearGradient(0, -24, 0, 18);
      hullGrad.addColorStop(0, '#d0dae8');
      hullGrad.addColorStop(0.3, '#b0bece');
      hullGrad.addColorStop(0.7, '#8a98a8');
      hullGrad.addColorStop(1, '#6a7888');
      ctx.fillStyle = hullGrad;
      ctx.strokeStyle = wc.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      // Nose
      ctx.moveTo(0, -24);
      // Right side
      ctx.lineTo(5, -16);
      ctx.lineTo(10, -8);
      // Right wing nacelle
      ctx.lineTo(14, -4);
      ctx.lineTo(20, 8);
      ctx.lineTo(18, 12);
      ctx.lineTo(14, 14);
      // Right engine
      ctx.lineTo(10, 14);
      ctx.lineTo(8, 10);
      // Bottom
      ctx.lineTo(5, 16);
      ctx.lineTo(-5, 16);
      // Left engine
      ctx.lineTo(-8, 10);
      ctx.lineTo(-10, 14);
      // Left wing nacelle
      ctx.lineTo(-14, 14);
      ctx.lineTo(-18, 12);
      ctx.lineTo(-20, 8);
      ctx.lineTo(-14, -4);
      // Left side
      ctx.lineTo(-10, -8);
      ctx.lineTo(-5, -16);
      ctx.closePath();
      ctx.fill(); ctx.stroke();

      // Hull panel lines — subtle detail
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 0.6;
      // Center line
      ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(0, 14); ctx.stroke();
      // Wing creases
      ctx.beginPath(); ctx.moveTo(5, -14); ctx.lineTo(16, 6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-5, -14); ctx.lineTo(-16, 6); ctx.stroke();
      // Cross panel
      ctx.beginPath(); ctx.moveTo(-8, 0); ctx.lineTo(8, 0); ctx.stroke();

      // Highlight edge — top of hull catches light
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-4, -22); ctx.lineTo(0, -24); ctx.lineTo(4, -22);
      ctx.stroke();

      // Wing accent stripes (weapon-colored)
      ctx.fillStyle = wc.color + '40';
      // Right wing
      ctx.beginPath();
      ctx.moveTo(12, -2); ctx.lineTo(19, 8); ctx.lineTo(17, 10); ctx.lineTo(12, 4);
      ctx.closePath(); ctx.fill();
      // Left wing
      ctx.beginPath();
      ctx.moveTo(-12, -2); ctx.lineTo(-19, 8); ctx.lineTo(-17, 10); ctx.lineTo(-12, 4);
      ctx.closePath(); ctx.fill();

      // Cockpit canopy — gradient glass
      const cpGrad = ctx.createLinearGradient(0, -16, 0, -4);
      cpGrad.addColorStop(0, wc.color);
      cpGrad.addColorStop(0.5, wc.color + 'cc');
      cpGrad.addColorStop(1, wc.color + '60');
      ctx.fillStyle = cpGrad;
      ctx.beginPath();
      ctx.ellipse(0, -10, 3.5, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      // Canopy highlight
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath();
      ctx.ellipse(-1, -13, 1.5, 3, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Engine nacelle detail dots
      for (const ex of [-7, 7]) {
        ctx.fillStyle = wc.color + '60';
        ctx.beginPath(); ctx.arc(ex, 12, 2, 0, Math.PI * 2); ctx.fill();
      }

      // Shield bubble effect
      if (g.shieldTimer > 0) {
        const pulse = 32 + Math.sin(g.time * 0.2) * 5;
        // Hex shield pattern
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
        // Inner glow
        const shGrad = ctx.createRadialGradient(0, 0, pulse * 0.6, 0, 0, pulse);
        shGrad.addColorStop(0, 'transparent');
        shGrad.addColorStop(1, `rgba(56,189,248,${shieldAlpha * 0.3})`);
        ctx.fillStyle = shGrad;
        ctx.beginPath(); ctx.arc(0, 0, pulse, 0, Math.PI * 2); ctx.fill();
      }

      // Prime surge effect
      if (g.primeTimer > 0 && isPrime(g.power)) {
        const primeAlpha = 0.25 + Math.sin(g.time * 0.12) * 0.1;
        const pg = ctx.createRadialGradient(0, 0, 5, 0, 0, 42);
        pg.addColorStop(0, `rgba(255,215,0,${primeAlpha})`);
        pg.addColorStop(0.5, `rgba(255,215,0,${primeAlpha * 0.3})`);
        pg.addColorStop(1, 'transparent');
        ctx.fillStyle = pg;
        ctx.beginPath(); ctx.arc(0, 0, 42, 0, Math.PI * 2); ctx.fill();
        // Spinning golden ring
        ctx.save(); ctx.rotate(g.time * 0.06);
        ctx.strokeStyle = `rgba(255,215,0,${primeAlpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.beginPath(); ctx.arc(0, 0, 34, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]); ctx.restore();
      }

      ctx.restore();
    }

    // ======= PICKUPS — hexagonal containers =======
    for (const pk of g.pickups) {
      ctx.save();
      ctx.translate(pk.x, pk.y);
      const bob = Math.sin(pk.bobT * 3) * 3;
      ctx.translate(0, bob);
      const pr = 13;
      const pColor = pk.type.color;
      const pulseAlpha = 0.5 + Math.sin(pk.bobT * 4) * 0.2;

      // Outer pulsing glow
      const pg = ctx.createRadialGradient(0, 0, pr * 0.3, 0, 0, pr * 2);
      pg.addColorStop(0, pColor + '50');
      pg.addColorStop(0.5, pColor + '18');
      pg.addColorStop(1, 'transparent');
      ctx.fillStyle = pg;
      ctx.beginPath(); ctx.arc(0, 0, pr * 2, 0, Math.PI * 2); ctx.fill();

      // Hexagonal body
      const hexPath = () => {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
          i === 0 ? ctx.moveTo(Math.cos(a) * pr, Math.sin(a) * pr) : ctx.lineTo(Math.cos(a) * pr, Math.sin(a) * pr);
        }
        ctx.closePath();
      };
      // Dark fill
      const hexGrad = ctx.createRadialGradient(0, -pr * 0.3, 0, 0, 0, pr);
      hexGrad.addColorStop(0, 'rgba(20,25,40,0.85)');
      hexGrad.addColorStop(1, 'rgba(8,12,20,0.9)');
      ctx.fillStyle = hexGrad;
      hexPath(); ctx.fill();
      // Border
      ctx.strokeStyle = pColor + '80';
      ctx.lineWidth = 1.5;
      hexPath(); ctx.stroke();

      // Rotating highlight arc
      ctx.save();
      ctx.rotate(pk.bobT * 2);
      ctx.strokeStyle = pColor;
      ctx.lineWidth = 2;
      ctx.globalAlpha = pulseAlpha;
      ctx.beginPath();
      ctx.arc(0, 0, pr + 2, 0, Math.PI * 0.7);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.restore();

      // Inner glow
      const ig = ctx.createRadialGradient(0, 0, 0, 0, 0, pr * 0.5);
      ig.addColorStop(0, pColor + '30'); ig.addColorStop(1, 'transparent');
      ctx.fillStyle = ig;
      ctx.beginPath(); ctx.arc(0, 0, pr * 0.5, 0, Math.PI * 2); ctx.fill();

      // Symbol
      ctx.fillStyle = pColor;
      ctx.shadowColor = pColor;
      ctx.shadowBlur = 6;
      ctx.font = `bold 13px 'Exo 2', sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(pk.type.symbol, 0, 1);
      ctx.shadowBlur = 0;
      ctx.restore();
    }

    // ======= PARTICLES — velocity-elongated streaks =======
    for (const p of g.particles) {
      const a = p.life / p.maxL;
      ctx.globalAlpha = a * a; // quadratic falloff for smoother fade
      ctx.fillStyle = p.color;
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 1.5) {
        // Elongated streak along velocity
        ctx.save();
        ctx.translate(p.x, p.y);
        const ang = Math.atan2(p.vy, p.vx);
        ctx.rotate(ang);
        const len = Math.min(spd * 1.2, p.sz * 3) * a;
        const wid = p.sz * a * 0.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, len, Math.max(wid, 0.5), 0, 0, Math.PI * 2);
        ctx.fill();
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
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
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
    const kd = (e) => {
      keysRef.current[e.key] = true;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
    };
    const ku = (e) => { keysRef.current[e.key] = false; };
    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    return () => { window.removeEventListener('keydown', kd); window.removeEventListener('keyup', ku); };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const mm = (e) => { const r = el.getBoundingClientRect(); mouseRef.current.x = e.clientX - r.left; mouseRef.current.y = e.clientY - r.top; mouseRef.current.active = true; };
    const md = (e) => { e.preventDefault(); mouseRef.current.down = true; };
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
      <div className="ms-root">
        <style>{styles}</style>
        <div className="ms-intro">
          <div className="ms-intro-stars">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="ms-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="ms-scanlines" />
          <div className="ms-intro-body">
            <div className="ms-logo-wrap">
              <div className="ms-logo-deco ms-logo-deco-l" />
              <div className="ms-logo-stack">
                <h1 className="ms-title">MATHSTORM</h1>
                <p className="ms-subtitle">NUMBER SQUADRON</p>
              </div>
              <div className="ms-logo-deco ms-logo-deco-r" />
            </div>

            <div className="ms-card">
              <div className="ms-card-header">
                <div className="ms-card-line" />
                <span>ARSENAL</span>
                <div className="ms-card-line" />
              </div>
              <div className="ms-weapons-grid">
                <div className="ms-rule" style={{ '--rc': '#4ade80' }}>
                  <span className="ms-rule-icon">+</span>
                  <div className="ms-rule-body"><strong>ADD</strong><span>Rapid fire. Adds to your Power.</span></div>
                </div>
                <div className="ms-rule" style={{ '--rc': '#fb923c' }}>
                  <span className="ms-rule-icon">{'\u2212'}</span>
                  <div className="ms-rule-body"><strong>SUB</strong><span>Homing shots. Subtracts from Power.</span></div>
                </div>
                <div className="ms-rule" style={{ '--rc': '#a78bfa' }}>
                  <span className="ms-rule-icon">{'\u00d7'}</span>
                  <div className="ms-rule-body"><strong>MUL</strong><span>Heavy burst. Multiplies your Power.</span></div>
                </div>
                <div className="ms-rule" style={{ '--rc': '#38bdf8' }}>
                  <span className="ms-rule-icon">{'\u00f7'}</span>
                  <div className="ms-rule-body"><strong>DIV</strong><span>Pierce shot. Divides your Power.</span></div>
                </div>
              </div>
              <div className="ms-boss-callout">
                Match your Power number to the boss shield to break through!
              </div>
            </div>

            <div className="ms-controls">
              <div className="ms-ctrl"><kbd>WASD</kbd> <span className="ms-ctrl-sep">/</span> <kbd>{'\u2190\u2191\u2192\u2193'}</kbd> <span className="ms-ctrl-label">Move</span></div>
              <div className="ms-ctrl"><kbd>Space</kbd> <span className="ms-ctrl-sep">/</span> <kbd>Z</kbd> <span className="ms-ctrl-label">Shoot</span></div>
              <div className="ms-ctrl"><kbd>1</kbd><kbd>2</kbd><kbd>3</kbd><kbd>4</kbd> <span className="ms-ctrl-label">Weapon</span></div>
            </div>

            <button className="ms-start-btn" onClick={() => setScreen('playing')}>
              LAUNCH MISSION
              <span className="ms-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalWorld = (gRef.current?.worldIdx || 0);
    return (
      <div className="ms-root">
        <style>{styles}</style>
        <div className="ms-gameover">
          <div className="ms-intro-stars">
            {[...Array(35)].map((_, i) => (
              <div key={i} className="ms-star" style={{
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: 1 + Math.random() * 2.5, height: 1 + Math.random() * 2.5,
                animationDelay: `${Math.random() * 5}s`, animationDuration: `${2 + Math.random() * 4}s`,
              }} />
            ))}
          </div>
          <div className="ms-scanlines" />
          <div className="ms-go-body">
            <div className="ms-go-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                <path d="M20 20L36 36M36 20L20 36" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="ms-go-title">MISSION FAILED</h1>
            <div className="ms-go-stats">
              <div className="ms-go-stat">
                <span className="ms-go-label">SCORE</span>
                <span className="ms-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="ms-go-divider" />
              <div className="ms-go-stat">
                <span className="ms-go-label">WORLD</span>
                <span className="ms-go-val">{finalWorld}</span>
              </div>
            </div>
            <div className="ms-go-btns">
              <button className="ms-start-btn" onClick={() => setScreen('playing')}>
                RETRY MISSION
                <span className="ms-btn-shine" />
              </button>
              <button className="ms-menu-btn" onClick={() => setScreen('intro')}>Return to Base</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="ms-root">
      <style>{styles}</style>
      <div className="ms-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="ms-canvas" />

        {/* HUD Overlay */}
        <div className="ms-hud-top">
          <div className="ms-hud-left">
            <div className="ms-wave-badge">
              <span className="ms-wave-label">WORLD</span>
              <span className="ms-wave-num">{hud.world}</span>
            </div>
            <div className="ms-lives">
              {[...Array(Math.max(0, hud.lives))].map((_, i) => (
                <span key={i} className="ms-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="ms-hud-center">
            <div className="ms-power-display">
              <span className="ms-power-label">PWR</span>
              <span className="ms-power-num" key={hud.power}>{hud.power}</span>
            </div>
          </div>
          <div className="ms-hud-right">
            <div className="ms-score-badge">{hud.score.toLocaleString()}</div>
            {hud.combo > 2 && <div className="ms-combo">{hud.combo}x</div>}
            {hud.shieldActive && <div className="ms-effect-badge ms-eff-shield">{'\u25c6'} SHIELD</div>}
            {hud.primeActive && <div className="ms-effect-badge ms-eff-prime">{'\u26a1'} PRIME{hud.isPrime ? ' !' : ''}</div>}
          </div>
        </div>

        {/* Weapon Bar */}
        <div className="ms-weapon-bar">
          {WEAPONS.map((w, i) => (
            <button
              key={w.id}
              className={`ms-wep-btn ${hud.weapon === i ? 'active' : ''}`}
              style={{ '--wc': w.color, '--wg': w.glow }}
              onClick={() => { if (gRef.current) gRef.current.weapon = i; }}
            >
              <span className="ms-wep-sym">{w.symbol}</span>
              <span className="ms-wep-name">{w.name}</span>
              <kbd className="ms-wep-key">{i + 1}</kbd>
            </button>
          ))}
        </div>

        {/* Boss HP overlay */}
        {hud.bossActive && (
          <div className={`ms-boss-hud ${hud.powerMatch ? 'ms-boss-match' : ''}`}>
            <div className="ms-boss-label">
              {hud.powerMatch
                ? <span className="ms-match-text">{'\u26A1'} POWER MATCHED {'\u2014'} FIRE! {'\u26A1'}</span>
                : <>BOSS {'\u2014'} Shield: <strong>{hud.bossTarget}</strong></>
              }
            </div>
            <div className="ms-boss-bar-bg">
              <div className="ms-boss-bar-fill" style={{ width: `${(hud.bossHP / hud.bossMaxHP) * 100}%` }} />
              <div className="ms-boss-bar-shine" />
            </div>
            {!hud.powerMatch && hud.bossTarget > 0 && (
              <div className="ms-boss-hint">Get POWER to <strong>{hud.bossTarget}</strong> then attack!</div>
            )}
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
  --ms-bg: #04060e;
  --ms-surface: rgba(255,255,255,0.03);
  --ms-border: rgba(255,255,255,0.06);
  --ms-glass: rgba(8,12,24,0.7);
  --ms-glass-border: rgba(100,140,255,0.12);
  --ms-text: #c8d6e5;
  --ms-text-dim: #4a5568;
  --ms-accent: #6c8cff;
  --ms-glow: rgba(108,140,255,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.ms-root {
  width: 100%; height: 100vh;
  font-family: 'Exo 2', sans-serif;
  overflow: hidden;
  background: var(--ms-bg);
  color: var(--ms-text);
}

/* ===== SHARED ===== */
.ms-intro, .ms-gameover {
  height: 100vh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(60,80,180,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(120,60,200,0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(40,120,200,0.06) 0%, transparent 50%),
    var(--ms-bg);
}
.ms-intro-stars { position: absolute; inset: 0; pointer-events: none; }
.ms-star {
  position: absolute; border-radius: 50%; background: #fff;
  animation: msTwinkle 3s ease-in-out infinite alternate;
}
@keyframes msTwinkle {
  0% { opacity: 0.08; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(1.5); }
}

/* Scanline overlay */
.ms-scanlines {
  position: absolute; inset: 0; pointer-events: none; z-index: 5;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.08) 2px,
    rgba(0,0,0,0.08) 4px
  );
  mix-blend-mode: multiply;
}

/* ===== INTRO ===== */
.ms-intro-body, .ms-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 480px; width: 100%;
  animation: msFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes msFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.ms-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.ms-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--ms-accent), transparent);
  opacity: 0.4;
  animation: msDecoGlow 3s ease-in-out infinite alternate;
}
@keyframes msDecoGlow {
  0% { opacity: 0.2; width: 30px; } 100% { opacity: 0.6; width: 60px; }
}
.ms-logo-stack { display: flex; flex-direction: column; align-items: center; }
.ms-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2rem, 7vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  text-shadow: 0 0 40px rgba(108,140,255,0.3), 0 0 80px rgba(108,140,255,0.1);
  animation: msTitleShimmer 4s ease-in-out infinite alternate;
}
@keyframes msTitleShimmer {
  0% { text-shadow: 0 0 40px rgba(108,140,255,0.3), 0 0 80px rgba(108,140,255,0.1); }
  50% { text-shadow: 0 0 50px rgba(160,120,255,0.35), 0 0 100px rgba(160,120,255,0.12); }
  100% { text-shadow: 0 0 40px rgba(80,180,255,0.3), 0 0 80px rgba(80,180,255,0.1); }
}
.ms-subtitle {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.85rem; font-weight: 500;
  color: var(--ms-text-dim); letter-spacing: 8px;
  text-transform: uppercase;
}

/* Card */
.ms-card {
  background: var(--ms-glass);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--ms-glass-border);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left;
  position: relative; overflow: hidden;
}
.ms-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(108,140,255,0.3), transparent);
}
.ms-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 600;
  color: var(--ms-text-dim); letter-spacing: 4px;
  text-transform: uppercase;
}
.ms-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, var(--ms-border), transparent);
}
.ms-weapons-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;
}
.ms-rule {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px;
  transition: border-color 0.3s, background 0.3s;
}
.ms-rule:hover {
  border-color: color-mix(in srgb, var(--rc) 25%, transparent);
  background: color-mix(in srgb, var(--rc) 4%, transparent);
}
.ms-rule-icon {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 900;
  color: var(--rc);
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.ms-rule-body {
  display: flex; flex-direction: column; gap: 0.1rem;
  font-size: 0.78rem; line-height: 1.3;
}
.ms-rule-body strong {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.72rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.ms-rule-body span { color: var(--ms-text-dim); font-size: 0.72rem; }
.ms-boss-callout {
  margin-top: 0.8rem; padding: 0.5rem 0.7rem;
  text-align: center; font-size: 0.72rem;
  color: #94a3b8; line-height: 1.4;
  border-top: 1px solid var(--ms-border);
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500; letter-spacing: 0.5px;
}

/* Controls */
.ms-controls {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem;
  margin-bottom: 1.8rem;
}
.ms-ctrl {
  display: flex; align-items: center; gap: 0.25rem;
  font-size: 0.78rem; color: var(--ms-text-dim);
}
.ms-ctrl-sep { opacity: 0.3; margin: 0 0.1rem; }
.ms-ctrl-label {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600; letter-spacing: 1px;
  font-size: 0.7rem; text-transform: uppercase;
  color: var(--ms-text-dim);
}
.ms-ctrl kbd {
  padding: 0.2rem 0.45rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-bottom-width: 2px;
  border-radius: 5px;
  font-family: 'Orbitron', monospace; font-size: 0.65rem;
  color: #7a8ba8;
}

/* CTA button */
.ms-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Orbitron', sans-serif; font-size: 0.85rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #4060d0, #6040c0);
  border: 1px solid rgba(120,140,255,0.3);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow:
    0 4px 24px rgba(64,96,208,0.25),
    inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.ms-start-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 40px rgba(64,96,208,0.4),
    inset 0 1px 0 rgba(255,255,255,0.15);
  border-color: rgba(140,160,255,0.5);
}
.ms-start-btn:active { transform: translateY(0); }
.ms-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: msBtnShine 3s ease-in-out infinite;
}
@keyframes msBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* ===== GAME OVER ===== */
.ms-go-icon {
  margin-bottom: 1rem;
  animation: msGoIcon 2s ease-in-out infinite alternate;
}
@keyframes msGoIcon {
  0% { opacity: 0.5; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.05); }
}
.ms-go-title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.ms-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 2rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: var(--ms-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--ms-glass-border);
  border-radius: 14px;
}
.ms-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, var(--ms-glass-border), transparent);
}
.ms-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.ms-go-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.65rem; font-weight: 600;
  color: var(--ms-text-dim); letter-spacing: 3px; text-transform: uppercase;
}
.ms-go-val {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem; font-weight: 900; color: white;
  text-shadow: 0 0 20px rgba(255,255,255,0.15);
}
.ms-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.ms-menu-btn {
  padding: 0.6rem 1.8rem; font-family: 'Rajdhani', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: var(--ms-text-dim);
  background: transparent; border: 1px solid var(--ms-border);
  border-radius: 8px; cursor: pointer;
  transition: all 0.25s; letter-spacing: 1px;
}
.ms-menu-btn:hover {
  border-color: rgba(255,255,255,0.15); color: var(--ms-text);
  background: rgba(255,255,255,0.03);
}

/* ===== GAME ===== */
.ms-game {
  width: 100%; height: 100vh; position: relative; overflow: hidden;
  cursor: crosshair;
}
.ms-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.ms-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(4,6,14,0.85) 0%, rgba(4,6,14,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.ms-hud-left, .ms-hud-right {
  display: flex; align-items: center; gap: 0.5rem;
}
.ms-hud-right { flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.ms-wave-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(108,140,255,0.1);
  border: 1px solid rgba(108,140,255,0.2);
  border-radius: 8px;
}
.ms-wave-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.55rem; font-weight: 600;
  color: var(--ms-accent); letter-spacing: 2px;
  text-transform: uppercase; opacity: 0.7;
}
.ms-wave-num {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem; font-weight: 800; color: #fff;
}
.ms-lives { display: flex; gap: 0.3rem; align-items: center; }
.ms-heart {
  display: flex; align-items: center;
  filter: drop-shadow(0 0 4px rgba(239,68,68,0.5));
}
.ms-hud-center { display: flex; flex-direction: column; align-items: center; }
.ms-power-display {
  display: flex; align-items: baseline; gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  background: var(--ms-glass);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--ms-glass-border);
  border-radius: 10px;
}
.ms-power-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.6rem; font-weight: 600;
  color: var(--ms-text-dim); letter-spacing: 2px;
}
.ms-power-num {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem; font-weight: 900; color: #fff;
  text-shadow: 0 0 12px rgba(255,255,255,0.2);
  animation: msPowerPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes msPowerPop {
  0% { transform: scale(1.3); color: var(--ms-accent); }
  100% { transform: scale(1); color: #fff; }
}
.ms-score-badge {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem; font-weight: 700;
  color: rgba(255,255,255,0.7);
  padding: 0.2rem 0;
}
.ms-combo {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.65rem; font-weight: 700;
  color: #c084fc;
  text-shadow: 0 0 10px rgba(192,132,252,0.4);
  animation: msCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes msCombo {
  0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }
}
.ms-effect-badge {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.6rem; font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 6px; letter-spacing: 1px;
}
.ms-eff-shield {
  color: #38bdf8;
  background: rgba(56,189,248,0.1);
  border: 1px solid rgba(56,189,248,0.25);
  animation: msEffectPulse 1.2s ease-in-out infinite alternate;
}
.ms-eff-prime {
  color: #fbbf24;
  background: rgba(251,191,36,0.1);
  border: 1px solid rgba(251,191,36,0.25);
  animation: msEffectPulse 0.8s ease-in-out infinite alternate;
}
@keyframes msEffectPulse {
  0% { opacity: 0.6; } 100% { opacity: 1; }
}

/* Weapon bar */
.ms-weapon-bar {
  position: absolute; bottom: 0.5rem; left: 50%; transform: translateX(-50%);
  display: flex; gap: 0.35rem; z-index: 20; pointer-events: auto;
  padding: 0.3rem;
  background: var(--ms-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--ms-glass-border);
  border-radius: 14px;
}
.ms-wep-btn {
  display: flex; flex-direction: column; align-items: center;
  gap: 0.05rem; padding: 0.35rem 0.75rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px; cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  font-family: 'Exo 2', sans-serif;
}
.ms-wep-btn:hover {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.06);
}
.ms-wep-btn.active {
  background: color-mix(in srgb, var(--wc) 10%, transparent);
  border-color: color-mix(in srgb, var(--wc) 30%, transparent);
  box-shadow: 0 2px 16px color-mix(in srgb, var(--wc) 20%, transparent);
}
.ms-wep-sym {
  font-size: 1.2rem; font-weight: 900; color: var(--wc);
  transition: transform 0.2s;
}
.ms-wep-btn.active .ms-wep-sym { transform: scale(1.15); }
.ms-wep-name {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.5rem; font-weight: 700; color: var(--ms-text-dim);
  letter-spacing: 1.5px; text-transform: uppercase;
  transition: color 0.2s;
}
.ms-wep-btn.active .ms-wep-name { color: var(--wc); }
.ms-wep-key {
  position: absolute; top: -5px; right: -3px;
  padding: 0.05rem 0.25rem;
  background: var(--ms-bg);
  border: 1px solid var(--ms-border);
  border-radius: 4px; font-size: 0.55rem; color: var(--ms-text-dim);
  font-family: 'Orbitron', monospace;
  transition: all 0.2s;
}
.ms-wep-btn.active .ms-wep-key {
  color: var(--wc);
  border-color: color-mix(in srgb, var(--wc) 40%, transparent);
}

/* Boss HUD */
.ms-boss-hud {
  position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
  z-index: 20; pointer-events: none;
  padding: 0.4rem 1rem;
  background: var(--ms-glass);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(239,68,68,0.15);
  border-radius: 12px;
  animation: msBossIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes msBossIn {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.ms-boss-label {
  font-family: 'Rajdhani', sans-serif;
  font-size: 0.7rem; font-weight: 700; color: #ef4444;
  letter-spacing: 2px; text-transform: uppercase;
}
.ms-boss-label strong { color: #fff; }
.ms-boss-bar-bg {
  width: 220px; height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px; overflow: hidden;
  position: relative;
}
.ms-boss-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #ef4444, #f97316);
  border-radius: 3px; transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(239,68,68,0.4);
}
.ms-boss-bar-shine {
  position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
  border-radius: 3px 3px 0 0;
}
.ms-boss-match {
  border-color: rgba(255,215,0,0.3);
  background: rgba(255,215,0,0.05);
}
.ms-match-text {
  color: #fbbf24; font-weight: 800;
  animation: msMatchPulse 0.6s ease-in-out infinite alternate;
}
@keyframes msMatchPulse {
  0% { opacity: 0.7; } 100% { opacity: 1; }
}
.ms-boss-hint {
  font-size: 0.58rem; color: var(--ms-text-dim); margin-top: 0.1rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500; letter-spacing: 0.5px;
}
.ms-boss-hint strong { color: #fff; }

/* Responsive */
@media (max-width: 500px) {
  .ms-hud-top { padding: 0.3rem 0.4rem; }
  .ms-power-num { font-size: 1.2rem; }
  .ms-wave-badge { padding: 0.2rem 0.5rem; }
  .ms-wave-num { font-size: 0.75rem; }
  .ms-score-badge { font-size: 0.7rem; }
  .ms-wep-btn { padding: 0.25rem 0.5rem; }
  .ms-wep-sym { font-size: 0.95rem; }
  .ms-weapons-grid { grid-template-columns: 1fr; }
  .ms-logo-deco { display: none; }
}
`;
