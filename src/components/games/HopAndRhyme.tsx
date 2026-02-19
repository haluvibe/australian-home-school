"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

/*
  🐸 HOP & RHYME — A Rhyming Platformer
  ───────────────────────────────────────
  A frog hops between floating platforms to find words that rhyme.
  Click / tap a platform — or press 1–4 — to make the frog jump!

  Foundation level vocabulary: CVC rhyme families
  8 progressive levels covering -at, -og, -un, -an, -ig, -op, -ed, -ug
*/

// ═══════════════════ CONSTANTS ═══════════════════
const GRAV        = 0.28;     // gravity px/frame²
const JUMP_DUR    = 54;       // frames for a full jump arc (~900ms@60fps)
const FLOAT_AMP   = 12;       // platform float amplitude px
const PW          = 142;      // platform width
const PH          = 54;       // platform height
const HOME_R      = 42;       // home pad radius
const FROG_UNIT   = 30;       // frog base size unit
const CLOUD_COUNT = 5;
const HUD_TICK    = 4;        // update React HUD every N frames

// ═══════════════════ DATA ═══════════════════

const RHYME_FAMILIES = [
  { suffix: 'at', words: ['cat','hat','bat','mat','rat','sat','fat','pat'] },
  { suffix: 'og', words: ['dog','log','fog','hog','jog','bog'] },
  { suffix: 'un', words: ['sun','fun','run','bun','gun'] },
  { suffix: 'an', words: ['can','fan','man','van','pan','ran'] },
  { suffix: 'ig', words: ['big','dig','fig','pig','wig','jig'] },
  { suffix: 'op', words: ['hop','mop','top','pop','cop'] },
  { suffix: 'ed', words: ['bed','red','fed','led','wed'] },
  { suffix: 'ug', words: ['bug','rug','mug','hug','tug'] },
];

const LEVELS = [
  { families: ['at'],                needed: 3, label: 'The -AT Family',    slots: 3 },
  { families: ['og'],                needed: 3, label: 'The -OG Family',    slots: 3 },
  { families: ['at','og'],           needed: 4, label: '-AT and -OG Mix!',  slots: 4 },
  { families: ['un','an'],           needed: 4, label: '-UN and -AN Words', slots: 4 },
  { families: ['ig','op'],           needed: 4, label: '-IG and -OP Words', slots: 4 },
  { families: ['ed','ug'],           needed: 4, label: '-ED and -UG Words', slots: 4 },
  { families: ['at','un','ig'],      needed: 5, label: 'Mixed Rhymes!',     slots: 4 },
  { families: ['og','an','op','ug'], needed: 5, label: 'Champion Round!',   slots: 4 },
];

// Platform colour palette — index matches platform slot
const PLT_COLS = [
  { main:'#FF7043', rim:'#BF360C', shine:'rgba(255,220,200,0.35)' }, // orange
  { main:'#42A5F5', rim:'#0D47A1', shine:'rgba(180,220,255,0.35)' }, // blue
  { main:'#AB47BC', rim:'#4A148C', shine:'rgba(220,180,255,0.35)' }, // purple
  { main:'#26A69A', rim:'#004D40', shine:'rgba(160,230,220,0.35)' }, // teal
];
const CORRECT_COL = { main:'#43A047', rim:'#1B5E20', shine:'rgba(180,255,180,0.35)' };
const WRONG_COL   = { main:'#EF5350', rim:'#B71C1C', shine:'rgba(255,200,200,0.35)' };
const HINT_COL    = { main:'#66BB6A', rim:'#2E7D32', shine:'rgba(200,255,200,0.35)' };

// Relative platform slot positions [rx, ry] (fraction of W/H)
// We have two layouts: 3-slot and 4-slot
const SLOT3 = [
  [0.22, 0.37],
  [0.55, 0.24],
  [0.80, 0.43],
];
const SLOT4 = [
  [0.19, 0.40],
  [0.50, 0.23],
  [0.78, 0.38],
  [0.42, 0.60],
];

// ═══════════════════ TYPES ═══════════════════

interface PlatCol { main: string; rim: string; shine: string; }

interface Platform {
  id: number;
  cx: number; cy: number;        // centre (cx fixed, cy is base centre)
  word: string;
  isTarget: boolean;
  col: PlatCol;
  floatPhase: number;
  floatSpeed: number;
  state: 'idle' | 'correct' | 'wrong' | 'hint' | 'hidden';
  stateTimer: number;
  shakeX: number;
}

interface Frog {
  x: number; y: number;          // feet position
  jumpFromX: number; jumpFromY: number;
  jumpToX: number;   jumpToY: number;
  jumpArcH: number;
  jumpT: number;                  // 0→1 progress
  state: 'idle' | 'jumping' | 'returning' | 'celebrating' | 'sad';
  idlePhase: number;
  idleAmp: number;
  celebTimer: number;
  sadTimer: number;
  facingRight: boolean;
  squash: number;
  rotation: number;
}

interface Cloud {
  x: number; y: number;
  r: number;                      // base radius
  speed: number;
  alpha: number;
  bumps: Array<{ ox: number; oy: number; r: number }>;
}

interface Particle {
  id: number;
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  col: string;
  size: number;
  type: 'circle' | 'star' | 'rect';
  angle: number; spin: number;
}

interface TextFX {
  id: number;
  x: number; y: number; vy: number;
  text: string;
  col: string;
  alpha: number;
  size: number;
  life: number;
}

type GamePhase = 'waiting' | 'jumping' | 'celebrating' | 'returning' | 'sad' | 'done';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

interface HudState {
  level: number;
  levelLabel: string;
  done: number;
  needed: number;
  score: number;
  lives: number;
  targetWord: string;
  combo: number;
  msg: string;
  msgTimer: number;
}

interface HopAndRhymeProps { onExit?: () => void; }

// ═══════════════════ HELPERS ═══════════════════

let _uid = 0;
const uid = () => ++_uid;
const rand  = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const randI = (lo: number, hi: number) => Math.floor(rand(lo, hi + 1));
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const lerp  = (a: number, b: number, t: number) => a + (b - a) * t;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = randI(0, i);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getFamily(word: string): string | null {
  for (const f of RHYME_FAMILIES) if (f.words.includes(word)) return f.suffix;
  return null;
}

function doRhyme(a: string, b: string): boolean {
  const fa = getFamily(a), fb = getFamily(b);
  return fa !== null && fa === fb;
}

// Build a challenge: pick target word + platform words
function makeChallenge(levelIdx: number, usedTargets: Set<string>): { target: string; words: string[]; isTarget: boolean[] } {
  const cfg = LEVELS[Math.min(levelIdx, LEVELS.length - 1)];
  const numSlots = cfg.slots;

  // Pick target family
  const tFamSuffix = cfg.families[randI(0, cfg.families.length - 1)];
  const tFam = RHYME_FAMILIES.find(f => f.suffix === tFamSuffix)!;

  // Pick target word (prefer unused)
  const pool = tFam.words.filter(w => !usedTargets.has(w));
  const target = (pool.length > 0 ? pool : tFam.words)[randI(0, (pool.length > 0 ? pool : tFam.words).length - 1)];

  // Pick exactly ONE correct rhyme (different from target)
  const rhymePool = tFam.words.filter(w => w !== target);
  const correctRhyme = rhymePool[randI(0, rhymePool.length - 1)];

  // Pick distractors from other families
  const otherFams = RHYME_FAMILIES.filter(f => f.suffix !== tFamSuffix);
  const shuffledOthers = shuffle(otherFams);
  const distractors: string[] = [];
  for (const f of shuffledOthers) {
    if (distractors.length >= numSlots - 1) break;
    const w = f.words[randI(0, f.words.length - 1)];
    if (!distractors.includes(w)) distractors.push(w);
  }

  // Build platform words array
  const entries = shuffle([
    { word: correctRhyme, isTarget: true },
    ...distractors.slice(0, numSlots - 1).map(w => ({ word: w, isTarget: false })),
  ]);

  return {
    target,
    words: entries.map(e => e.word),
    isTarget: entries.map(e => e.isTarget),
  };
}

// ═══════════════════ CANVAS DRAWING ═══════════════════

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function starPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, points = 5, angle = 0) {
  const inner = r * 0.42;
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const a = (Math.PI / points) * i + angle;
    const rad = i % 2 === 0 ? r : inner;
    if (i === 0) ctx.moveTo(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
    else ctx.lineTo(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
  }
  ctx.closePath();
}

function drawBackground(ctx: CanvasRenderingContext2D, W: number, H: number, time: number) {
  // Sky gradient
  const sky = ctx.createLinearGradient(0, 0, 0, H * 0.82);
  sky.addColorStop(0,   '#5BBFE8');
  sky.addColorStop(0.5, '#8AD4F5');
  sky.addColorStop(1,   '#C8ECFF');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H * 0.82);

  // Distant hills (parallax layer 1 — very slow)
  const hillOffset1 = (time * 0.004) % W;
  ctx.fillStyle = '#6BAE7A';
  for (let pass = -1; pass <= 1; pass++) {
    const ox = pass * W - hillOffset1;
    ctx.beginPath();
    ctx.moveTo(ox, H * 0.82);
    for (let x = 0; x <= W + 40; x += 20) {
      const y = H * 0.72 - Math.sin((x + ox) * 0.0028) * H * 0.06
                          - Math.sin((x + ox) * 0.0058) * H * 0.04;
      if (x === 0) ctx.moveTo(ox + x, y);
      else ctx.lineTo(ox + x, y);
    }
    ctx.lineTo(ox + W + 40, H * 0.82);
    ctx.lineTo(ox, H * 0.82);
    ctx.closePath();
    ctx.fill();
  }

  // Mid hills (slightly faster)
  const hillOffset2 = (time * 0.010) % W;
  ctx.fillStyle = '#4A9C5A';
  for (let pass = -1; pass <= 1; pass++) {
    const ox = pass * W - hillOffset2;
    ctx.beginPath();
    ctx.moveTo(ox, H * 0.82);
    for (let x = 0; x <= W + 40; x += 16) {
      const y = H * 0.76 - Math.sin((x + ox) * 0.004) * H * 0.055
                          - Math.sin((x + ox) * 0.009) * H * 0.03;
      if (x === 0) ctx.moveTo(ox + x, y);
      else ctx.lineTo(ox + x, y);
    }
    ctx.lineTo(ox + W + 40, H * 0.82);
    ctx.lineTo(ox, H * 0.82);
    ctx.closePath();
    ctx.fill();
  }

  // Ground strip
  const gGrad = ctx.createLinearGradient(0, H * 0.82, 0, H);
  gGrad.addColorStop(0, '#3D8B40');
  gGrad.addColorStop(0.25, '#2E7D32');
  gGrad.addColorStop(1, '#1B5E20');
  ctx.fillStyle = gGrad;
  ctx.fillRect(0, H * 0.82, W, H * 0.18);

  // Ground top edge highlight
  ctx.strokeStyle = '#66BB6A';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, H * 0.82 + 1.5);
  ctx.lineTo(W, H * 0.82 + 1.5);
  ctx.stroke();

  // Grass tufts
  ctx.fillStyle = '#66BB6A';
  for (let x = 8; x < W; x += 24 + Math.sin(x * 0.17) * 8) {
    const h = 6 + Math.abs(Math.sin(x * 0.21)) * 5;
    ctx.beginPath();
    ctx.moveTo(x, H * 0.82);
    ctx.quadraticCurveTo(x + 5, H * 0.82 - h, x + 10, H * 0.82);
    ctx.fill();
  }
}

function drawClouds(ctx: CanvasRenderingContext2D, clouds: Cloud[]) {
  for (const c of clouds) {
    ctx.save();
    ctx.globalAlpha = c.alpha;
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(180,220,255,0.5)';
    ctx.shadowBlur = 12;
    // Main cloud: ellipses grouped around base position
    ctx.beginPath();
    ctx.ellipse(c.x, c.y, c.r, c.r * 0.6, 0, 0, Math.PI * 2);
    for (const b of c.bumps) {
      ctx.ellipse(c.x + b.ox, c.y + b.oy, b.r, b.r * 0.75, 0, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.restore();
  }
}

function drawHomePad(ctx: CanvasRenderingContext2D, hx: number, hy: number, time: number) {
  // Glowing lily pad / home base
  const glow = ctx.createRadialGradient(hx, hy, 4, hx, hy, HOME_R * 1.5);
  glow.addColorStop(0, 'rgba(100,220,120,0.3)');
  glow.addColorStop(1, 'rgba(100,220,120,0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(hx, hy, HOME_R * 1.8, 0, Math.PI * 2);
  ctx.fill();

  // Shadow on ground
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.beginPath();
  ctx.ellipse(hx, hy + 6, HOME_R + 6, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Pad body
  const padGrad = ctx.createRadialGradient(hx - HOME_R * 0.3, hy - HOME_R * 0.3, 2, hx, hy, HOME_R);
  padGrad.addColorStop(0, '#81C784');
  padGrad.addColorStop(0.6, '#4CAF50');
  padGrad.addColorStop(1, '#2E7D32');
  ctx.fillStyle = padGrad;
  ctx.beginPath();
  ctx.arc(hx, hy, HOME_R, 0, Math.PI * 2);
  ctx.fill();

  // Pad rim
  ctx.strokeStyle = '#1B5E20';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Pad detail lines (lily pad style)
  ctx.strokeStyle = 'rgba(30,100,30,0.4)';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 * i) / 6;
    ctx.beginPath();
    ctx.moveTo(hx, hy);
    ctx.lineTo(hx + Math.cos(angle) * HOME_R * 0.85, hy + Math.sin(angle) * HOME_R * 0.85);
    ctx.stroke();
  }

  // Orbiting stars
  ctx.fillStyle = '#FFD700';
  for (let i = 0; i < 3; i++) {
    const a = time * 0.04 + (Math.PI * 2 * i) / 3;
    const sx = hx + Math.cos(a) * (HOME_R + 16);
    const sy = hy + Math.sin(a) * (HOME_R + 16) * 0.4;
    starPath(ctx, sx, sy, 5, 5, a);
    ctx.fill();
  }

  // "HOME" text
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 12px "Nunito", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('HOME', hx, hy);
}

function drawPlatform(
  ctx: CanvasRenderingContext2D,
  plat: Platform,
  floatY: number,
  hovered: boolean,
  time: number
) {
  if (plat.state === 'hidden') return;

  const px = plat.cx + plat.shakeX;
  const py = floatY;
  const hw = PW / 2, hh = PH / 2;

  // Determine colour
  let col = plat.col;
  if (plat.state === 'correct') col = CORRECT_COL;
  else if (plat.state === 'wrong')   col = WRONG_COL;
  else if (plat.state === 'hint')    col = HINT_COL;

  const scale = hovered && plat.state === 'idle' ? 1.06 : 1;

  ctx.save();
  ctx.translate(px, py);
  ctx.scale(scale, scale);

  // Drop shadow
  ctx.shadowColor = 'rgba(0,0,0,0.28)';
  ctx.shadowBlur  = 10;
  ctx.shadowOffsetY = 6;

  // 3-D bottom face
  ctx.fillStyle = col.rim;
  roundRect(ctx, -hw, -hh + 6, PW, PH, 14);
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Top face
  ctx.fillStyle = col.main;
  roundRect(ctx, -hw, -hh, PW, PH, 14);
  ctx.fill();

  // Shine overlay
  const shine = ctx.createLinearGradient(-hw, -hh, -hw, 0);
  shine.addColorStop(0, col.shine);
  shine.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = shine;
  roundRect(ctx, -hw, -hh, PW, PH / 2, 14);
  ctx.fill();

  // Hint pulse ring
  if (plat.state === 'hint') {
    const pulse = 0.5 + 0.5 * Math.sin(time * 0.14);
    ctx.strokeStyle = `rgba(100,220,100,${0.5 + pulse * 0.5})`;
    ctx.lineWidth = 3 + pulse * 2;
    roundRect(ctx, -hw - 4, -hh - 4, PW + 8, PH + 8, 17);
    ctx.stroke();
  }

  // Platform number label (small corner indicator)
  ctx.restore(); // restore before text so scale doesn't affect font

  // Word text (unscaled for readability)
  ctx.save();
  ctx.translate(px, py);

  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.round(PH * 0.44)}px "Nunito", "Comic Sans MS", cursive`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.4)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 1;
  ctx.fillText(plat.word, 0, 0);
  ctx.shadowColor = 'transparent';

  ctx.restore();
}

function drawFrog(
  ctx: CanvasRenderingContext2D,
  frog: Frog,
  time: number
) {
  const { x, y, state, squash, rotation, facingRight, idlePhase, celebTimer } = frog;
  const U = FROG_UNIT;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);

  // Squash/stretch transform
  const sx = 1 + squash * 0.45;
  const sy = 1 - squash * 0.35;
  ctx.scale(facingRight ? sx : -sx, sy);

  // Shadow on ground (only when near ground)
  if (state !== 'jumping' && state !== 'returning') {
    ctx.save();
    ctx.translate(0, 8);
    ctx.scale(1, 0.25);
    ctx.fillStyle = 'rgba(0,0,0,0.20)';
    ctx.beginPath();
    ctx.ellipse(0, 0, U * 1.0, U * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // ── Hind legs ──
  const jumping = state === 'jumping' || state === 'returning';
  ctx.fillStyle = '#388E3C';
  if (jumping) {
    // Legs swept back during jump
    ctx.beginPath();
    ctx.ellipse(-U * 0.72, U * 0.38, U * 0.55, U * 0.26, 0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(U * 0.72, U * 0.38, U * 0.55, U * 0.26, -0.55, 0, Math.PI * 2);
    ctx.fill();
    // Feet (small ovals at end of legs)
    ctx.fillStyle = '#2E7D32';
    ctx.beginPath();
    ctx.ellipse(-U * 1.1, U * 0.52, U * 0.35, U * 0.16, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(U * 1.1, U * 0.52, U * 0.35, U * 0.16, -0.3, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Crouching sitting legs
    ctx.beginPath();
    ctx.ellipse(-U * 0.75, U * 0.3, U * 0.48, U * 0.3, 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(U * 0.75, U * 0.3, U * 0.48, U * 0.3, -0.7, 0, Math.PI * 2);
    ctx.fill();
    // Toes
    ctx.fillStyle = '#2E7D32';
    const toeOffsets = [-0.36, -0.12, 0.12];
    for (const to of toeOffsets) {
      ctx.beginPath();
      ctx.ellipse(-U * 1.0 + to * U * 0.4, U * 0.54, U * 0.12, U * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(U * 1.0 + to * U * 0.4, U * 0.54, U * 0.12, U * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // ── Body ──
  const bodyGrad = ctx.createRadialGradient(-U * 0.2, -U * 0.1, U * 0.1, 0, U * 0.1, U * 0.75);
  bodyGrad.addColorStop(0, '#81C784');
  bodyGrad.addColorStop(0.5, '#4CAF50');
  bodyGrad.addColorStop(1, '#2E7D32');
  ctx.fillStyle = bodyGrad;
  ctx.beginPath();
  ctx.ellipse(0, U * 0.12, U * 0.72, U * 0.56, 0, 0, Math.PI * 2);
  ctx.fill();

  // Belly
  const bellyGrad = ctx.createRadialGradient(0, U * 0.28, 0, 0, U * 0.28, U * 0.38);
  bellyGrad.addColorStop(0, '#C8E6C9');
  bellyGrad.addColorStop(1, '#A5D6A7');
  ctx.fillStyle = bellyGrad;
  ctx.beginPath();
  ctx.ellipse(0, U * 0.28, U * 0.38, U * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Front arms (celebrating: raised, else: at sides) ──
  const celebrating = state === 'celebrating';
  ctx.fillStyle = '#4CAF50';
  if (celebrating && celebTimer > 0) {
    // Arms raised
    const wobble = Math.sin(time * 0.25) * 0.15;
    ctx.beginPath();
    ctx.ellipse(-U * 0.7, -U * 0.25, U * 0.38, U * 0.2, -1.1 + wobble, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(U * 0.7, -U * 0.25, U * 0.38, U * 0.2, 1.1 - wobble, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Normal arms at sides
    ctx.beginPath();
    ctx.ellipse(-U * 0.62, U * 0.1, U * 0.28, U * 0.18, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(U * 0.62, U * 0.1, U * 0.28, U * 0.18, 0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Head ──
  const headGrad = ctx.createRadialGradient(-U * 0.15, -U * 0.7, U * 0.05, 0, -U * 0.6, U * 0.58);
  headGrad.addColorStop(0, '#A5D6A7');
  headGrad.addColorStop(0.6, '#4CAF50');
  headGrad.addColorStop(1, '#2E7D32');
  ctx.fillStyle = headGrad;
  ctx.beginPath();
  ctx.ellipse(0, -U * 0.58, U * 0.66, U * 0.54, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Eyes (on top of head) ──
  const drawEye = (ex: number, ey: number, lookedAway: boolean) => {
    // Eye socket (elevated bulge)
    const sockGrad = ctx.createRadialGradient(ex - 2, ey - 2, 1, ex, ey, U * 0.32);
    sockGrad.addColorStop(0, '#A5D6A7');
    sockGrad.addColorStop(1, '#4CAF50');
    ctx.fillStyle = sockGrad;
    ctx.beginPath();
    ctx.ellipse(ex, ey, U * 0.31, U * 0.26, 0, 0, Math.PI * 2);
    ctx.fill();
    // White sclera
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(ex, ey, U * 0.24, U * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    // Pupil (looking direction)
    const pdx = lookedAway ? -2 : 2;
    ctx.fillStyle = '#1a1a1a';
    ctx.beginPath();
    ctx.ellipse(ex + pdx, ey + 1, U * 0.14, U * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    // Iris highlight
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.ellipse(ex + pdx + 2, ey - 2, U * 0.055, U * 0.055, 0, 0, Math.PI * 2);
    ctx.fill();
  };
  drawEye(-U * 0.36, -U * 0.85, false);
  drawEye( U * 0.36, -U * 0.85, false);

  // ── Mouth ──
  ctx.strokeStyle = '#1B5E20';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  if (celebrating && celebTimer > 0) {
    // Big open smile with tongue
    ctx.beginPath();
    ctx.arc(0, -U * 0.45, U * 0.34, 0.15, Math.PI - 0.15);
    ctx.stroke();
    // Tongue
    ctx.fillStyle = '#E91E63';
    ctx.beginPath();
    ctx.ellipse(0, -U * 0.14, U * 0.17, U * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (state === 'sad') {
    // Frown
    ctx.beginPath();
    ctx.arc(0, -U * 0.32, U * 0.28, Math.PI + 0.2, -0.2);
    ctx.stroke();
    // Sweat drop
    ctx.fillStyle = '#64B5F6';
    ctx.beginPath();
    ctx.ellipse(U * 0.55, -U * 0.7, U * 0.07, U * 0.1, 0.2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Normal small smile
    ctx.beginPath();
    ctx.arc(0, -U * 0.4, U * 0.22, 0.2, Math.PI - 0.2);
    ctx.stroke();
  }

  // Idle bob highlight (small shine on head)
  if (state === 'idle') {
    ctx.fillStyle = `rgba(255,255,255,${0.15 + 0.08 * Math.sin(idlePhase)})`;
    ctx.beginPath();
    ctx.ellipse(-U * 0.18, -U * 0.78, U * 0.22, U * 0.14, -0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawParticles(ctx: CanvasRenderingContext2D, particles: Particle[]) {
  for (const p of particles) {
    const alpha = p.life / p.maxLife;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.col;
    if (p.type === 'star') {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      starPath(ctx, 0, 0, p.size, 5, 0);
      ctx.fill();
      ctx.restore();
    } else if (p.type === 'rect') {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillRect(-p.size / 2, -p.size * 1.6, p.size, p.size * 1.6);
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawTextEffects(ctx: CanvasRenderingContext2D, texts: TextFX[]) {
  for (const t of texts) {
    ctx.save();
    ctx.globalAlpha = t.alpha;
    ctx.fillStyle = t.col;
    ctx.font = `900 ${t.size}px "Nunito", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;
    ctx.fillText(t.text, t.x, t.y);
    ctx.restore();
  }
}

// ═══════════════════ MAIN COMPONENT ═══════════════════

export default function HopAndRhyme({ onExit }: HopAndRhymeProps = {}) {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'levelup' | 'gameover' | 'complete'>('intro');
  const [hud, setHud] = useState<HudState>({
    level: 1, levelLabel: LEVELS[0].label,
    done: 0, needed: LEVELS[0].needed,
    score: 0, lives: 3,
    targetWord: '', combo: 0,
    msg: '', msgTimer: 0,
  });

  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const wrapRef     = useRef<HTMLDivElement>(null);
  const animRef     = useRef<number | null>(null);
  const gRef        = useRef<G>(null);
  const prevTimeRef = useRef<number>(0);
  const mouseRef    = useRef({ x: 0, y: 0, hoveredPlatId: -1, clicked: false, clickX: 0, clickY: 0 });
  const keysRef     = useRef<Record<string, boolean>>({});

  // ── INIT GAME ──
  const initGame = useCallback((levelIdx = 0) => {
    const wrap = wrapRef.current;
    const cvs  = canvasRef.current;
    if (!wrap || !cvs) return;

    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    cvs.width  = W;
    cvs.height = H;

    _uid = 0;

    const groundY = H * 0.82;
    const homeX   = W * 0.09;
    const homeY   = groundY - 4;

    // Clouds
    const clouds: Cloud[] = Array.from({ length: CLOUD_COUNT }, (_, i) => {
      const baseR = rand(36, 72);
      return {
        x: rand(0, W),
        y: rand(H * 0.04, H * 0.28),
        r: baseR,
        speed: rand(0.25, 0.65),
        alpha: rand(0.6, 0.9),
        bumps: Array.from({ length: randI(2, 4) }, () => ({
          ox: rand(-baseR * 0.8, baseR * 0.8),
          oy: rand(-baseR * 0.5, 0),
          r:  rand(baseR * 0.45, baseR * 0.8),
        })),
      };
    });

    // Platform base positions
    const cfg  = LEVELS[Math.min(levelIdx, LEVELS.length - 1)];
    const slots = cfg.slots === 3 ? SLOT3 : SLOT4;

    const challenge = makeChallenge(levelIdx, new Set<string>());

    const platforms: Platform[] = challenge.words.map((word, i) => ({
      id: uid(),
      cx: W * slots[i][0],
      cy: H * slots[i][1],
      word,
      isTarget: challenge.isTarget[i],
      col: PLT_COLS[i % PLT_COLS.length],
      floatPhase: rand(0, Math.PI * 2),
      floatSpeed: rand(0.018, 0.030),
      state: 'idle' as const,
      stateTimer: 0,
      shakeX: 0,
    }));

    const frog: Frog = {
      x: homeX, y: homeY,
      jumpFromX: homeX, jumpFromY: homeY,
      jumpToX: homeX,   jumpToY: homeY,
      jumpArcH: 140,
      jumpT: 0,
      state: 'idle',
      idlePhase: 0, idleAmp: 4,
      celebTimer: 0, sadTimer: 0,
      facingRight: true,
      squash: 0, rotation: 0,
    };

    gRef.current = {
      W, H, groundY,
      homeX, homeY,
      time: 0,
      level: levelIdx,
      challengesDone: 0,
      challengesNeeded: cfg.needed,
      score: 0,
      lives: 3,
      targetWord: challenge.target,
      usedTargets: new Set([challenge.target]),
      phase: 'waiting' as GamePhase,
      phaseTimer: 0,
      wrongCount: 0,
      combo: 0,
      platforms,
      clouds,
      frog,
      particles: [] as Particle[],
      texts: [] as TextFX[],
      hudTick: 0,
      pendingLevelup: false,
      pendingDead: false,
    };

    setHud({
      level: levelIdx + 1,
      levelLabel: cfg.label,
      done: 0,
      needed: cfg.needed,
      score: 0,
      lives: 3,
      targetWord: challenge.target,
      combo: 0,
      msg: `Level ${levelIdx + 1}: ${cfg.label}`,
      msgTimer: 180,
    });
  }, []);

  // ── SPAWN PARTICLES ──
  function spawnCorrect(g: G, cx: number, cy: number) {
    const COLS = ['#FFD700','#FF7043','#42A5F5','#AB47BC','#4CAF50','#fff'];
    for (let i = 0; i < 36; i++) {
      const angle  = (Math.PI * 2 * i) / 36 + rand(-0.2, 0.2);
      const spd    = rand(3, 9);
      const type   = i % 3 === 0 ? 'star' : i % 3 === 1 ? 'rect' : 'circle';
      g.particles.push({
        id: uid(), x: cx, y: cy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - rand(1, 3),
        life: rand(45, 80), maxLife: 80,
        col: COLS[i % COLS.length],
        size: rand(4, 9),
        type, angle: rand(0, Math.PI * 2), spin: rand(-0.15, 0.15),
      });
    }
  }

  function spawnWrong(g: G, cx: number, cy: number) {
    for (let i = 0; i < 12; i++) {
      const angle = rand(0, Math.PI * 2);
      const spd   = rand(2, 5);
      g.particles.push({
        id: uid(), x: cx, y: cy,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 28, maxLife: 28,
        col: '#EF5350',
        size: rand(3, 6),
        type: 'circle', angle: 0, spin: 0,
      });
    }
  }

  function addText(g: G, x: number, y: number, text: string, col: string, size = 28) {
    g.texts.push({ id: uid(), x, y, vy: -1.8, text, col, alpha: 1, size, life: 60 });
  }

  // ── NEXT CHALLENGE ──
  function nextChallenge(g: G) {
    g.challengesDone += 1;
    const cfg  = LEVELS[Math.min(g.level, LEVELS.length - 1)];
    const slots = cfg.slots === 3 ? SLOT3 : SLOT4;

    const ch = makeChallenge(g.level, g.usedTargets);
    g.usedTargets.add(ch.target);
    g.targetWord = ch.target;
    g.wrongCount = 0;

    // Rebuild platforms
    g.platforms = ch.words.map((word: string, i: number) => ({
      id: uid(),
      cx: g.W * slots[i][0],
      cy: g.H * slots[i][1],
      word,
      isTarget: ch.isTarget[i],
      col: PLT_COLS[i % PLT_COLS.length],
      floatPhase: rand(0, Math.PI * 2),
      floatSpeed: rand(0.018, 0.030),
      state: 'idle' as const,
      stateTimer: 0,
      shakeX: 0,
    }));

    g.phase = 'waiting';
    g.phaseTimer = 0;
  }

  // ── GAME LOOP ──
  useEffect(() => {
    if (screen !== 'playing') {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    initGame(0);
    prevTimeRef.current = performance.now();

    const tick = (now: number) => {
      const rawDt = (now - prevTimeRef.current) / 16.667;
      prevTimeRef.current = now;
      const dt = clamp(rawDt, 0.1, 3.0);

      const g   = gRef.current;
      const cvs = canvasRef.current;
      if (!g || !cvs) { animRef.current = requestAnimationFrame(tick); return; }
      const ctx = cvs.getContext('2d');
      if (!ctx) { animRef.current = requestAnimationFrame(tick); return; }

      g.time += dt;

      // ─── UPDATE ───

      // Clouds
      for (const c of g.clouds) {
        c.x += c.speed * dt;
        if (c.x - c.r * 2.5 > g.W) c.x = -c.r * 2.5;
      }

      // Platform float + shake decay
      for (const p of g.platforms) {
        p.floatPhase += p.floatSpeed * dt;
        if (p.shakeX !== 0) p.shakeX *= 0.75;
        if (p.stateTimer > 0) {
          p.stateTimer -= dt;
          if (p.stateTimer <= 0) {
            if (p.state === 'correct') p.state = 'hidden';
            else if (p.state === 'wrong' || p.state === 'hint') p.state = 'idle';
          }
        }
      }

      // Particles
      g.particles = (g.particles as Particle[]).filter((p: Particle) => p.life > 0);
      for (const p of g.particles as Particle[]) {
        p.x    += p.vx * dt;
        p.y    += p.vy * dt;
        p.vy   += GRAV * 0.7 * dt;
        p.vx   *= 0.98;
        p.angle += p.spin * dt;
        p.life -= dt;
      }

      // Text effects
      g.texts = (g.texts as TextFX[]).filter((t: TextFX) => t.life > 0);
      for (const t of g.texts as TextFX[]) {
        t.y    += t.vy * dt;
        t.life -= dt;
        t.alpha = t.life / 60;
      }

      // Frog
      const frog: Frog = g.frog;

      if (frog.state === 'idle') {
        frog.idlePhase += 0.06 * dt;
        frog.y = g.homeY - Math.abs(Math.sin(frog.idlePhase)) * frog.idleAmp * 0.5;
        frog.squash = 0;
        frog.rotation = Math.sin(frog.idlePhase * 0.5) * 0.04;
      }

      if (frog.state === 'jumping' || frog.state === 'returning') {
        frog.jumpT += dt / JUMP_DUR;
        if (frog.jumpT >= 1) {
          frog.jumpT = 1;
          frog.x = frog.jumpToX;
          frog.y = frog.jumpToY;
          frog.rotation = 0;

          if (frog.state === 'returning') {
            // Landed back home — squash land + advance challenge if we were celebrating
            frog.state = 'idle';
            frog.squash = 0.6;
            if (g.phase === 'celebrating') {
              const done = g.challengesDone + 1;
              if (done >= g.challengesNeeded) {
                g.pendingLevelup = true;
              } else {
                nextChallenge(g);
              }
            } else {
              g.phase = 'waiting';
            }
          } else {
            // Landed on a platform — check result
            const target = (g.platforms as Platform[]).find((p: Platform) => p.id === g.jumpTargetId);
            if (target) {
              if (target.isTarget) {
                // CORRECT!
                target.state = 'correct';
                target.stateTimer = 80;
                frog.state = 'celebrating';
                frog.celebTimer = 90;
                g.combo += 1;
                const bonus = g.combo >= 3 ? 150 : 100;
                g.score += bonus;
                spawnCorrect(g, target.cx, target.cy);
                addText(g, target.cx, target.cy - PH, g.combo >= 3 ? `+${bonus} COMBO!` : `+${bonus}`, '#FFD700', g.combo >= 3 ? 34 : 28);
                addText(g, target.cx, target.cy - PH * 2.2, 'RHYMES! 🎉', '#4CAF50', 30);
                g.phase = 'celebrating';
                g.phaseTimer = 90;
              } else {
                // WRONG!
                target.state = 'wrong';
                target.stateTimer = 50;
                frog.state = 'sad';
                frog.sadTimer = 55;
                g.combo = 0;
                g.wrongCount += 1;
                g.lives -= 1;
                spawnWrong(g, target.cx, target.cy);
                addText(g, target.cx, target.cy - PH, 'Oops!', '#EF5350', 28);

                // Show hint after 1 wrong
                if (g.wrongCount >= 1) {
                  for (const p of g.platforms as Platform[]) {
                    if (p.isTarget && p.state === 'idle') {
                      p.state = 'hint';
                      p.stateTimer = 120;
                    }
                  }
                }
                g.phase = 'sad';
                g.phaseTimer = 60;

                if (g.lives <= 0) {
                  g.pendingDead = true;
                }
              }
            } else {
              frog.state = 'idle';
              g.phase = 'waiting';
            }
          }
        } else {
          const t = frog.jumpT;
          const tEased = t;
          const arc = Math.sin(Math.PI * t);
          frog.x = lerp(frog.jumpFromX, frog.jumpToX, tEased);
          frog.y = lerp(frog.jumpFromY, frog.jumpToY, tEased) - frog.jumpArcH * arc;

          // Rotation: tilt in jump direction
          const dir = frog.jumpToX > frog.jumpFromX ? 1 : -1;
          frog.rotation = dir * 0.25 * Math.sin(Math.PI * t);

          // Squash on landing approach
          frog.squash = t > 0.88 ? (t - 0.88) / 0.12 * 0.6 : 0;
          frog.facingRight = frog.jumpToX >= frog.jumpFromX;
        }
      }

      if (frog.state === 'celebrating') {
        frog.celebTimer -= dt;
        frog.y = g.jumpTargetY - Math.abs(Math.sin(frog.idlePhase * 2)) * 10;
        frog.idlePhase += 0.12 * dt;
        frog.squash = 0;
        frog.rotation = Math.sin(frog.idlePhase * 0.5) * 0.15;
        if (frog.celebTimer <= 0) {
          // Jump back home
          frog.state = 'returning';
          frog.jumpFromX = frog.x;
          frog.jumpFromY = frog.y;
          frog.jumpToX = g.homeX;
          frog.jumpToY = g.homeY;
          frog.jumpT = 0;
          const dx = frog.jumpToX - frog.jumpFromX;
          const dy = frog.jumpToY - frog.jumpFromY;
          frog.jumpArcH = Math.max(80, Math.abs(dy) + Math.abs(dx) * 0.35);
        }
      }

      if (frog.state === 'sad') {
        frog.sadTimer -= dt;
        frog.squash = Math.sin(frog.sadTimer * 0.25) * 0.3;
        if (frog.sadTimer <= 0) {
          frog.state = 'returning';
          frog.jumpFromX = frog.x;
          frog.jumpFromY = frog.y;
          frog.jumpToX = g.homeX;
          frog.jumpToY = g.homeY;
          frog.jumpT = 0;
          const dx = frog.jumpToX - frog.jumpFromX;
          const dy = frog.jumpToY - frog.jumpFromY;
          frog.jumpArcH = Math.max(60, Math.abs(dy) + Math.abs(dx) * 0.25);
        }
      }

      // Platform shake oscillation for 'wrong' state
      for (const p of g.platforms as Platform[]) {
        if (p.state === 'wrong' && p.stateTimer > 0) {
          p.shakeX = Math.sin(p.stateTimer * 1.6) * 5 * (p.stateTimer / 50);
        }
      }

      // HUD update
      g.hudTick++;
      if (g.hudTick % HUD_TICK === 0) {
        setHud(prev => ({
          ...prev,
          score: g.score,
          lives: g.lives,
          targetWord: g.targetWord,
          combo: g.combo,
          done: g.challengesDone,
          needed: g.challengesNeeded,
        }));
      }

      // Pending transitions
      if (g.pendingDead) {
        g.pendingDead = false;
        setScreen('gameover');
        return;
      }
      if (g.pendingLevelup) {
        g.pendingLevelup = false;
        if (g.level >= LEVELS.length - 1) {
          setScreen('complete');
        } else {
          setScreen('levelup');
        }
        return;
      }

      // ─── DRAW ───
      const { W, H } = g;

      // Clear
      ctx.clearRect(0, 0, W, H);

      // Background
      drawBackground(ctx, W, H, g.time);

      // Clouds
      drawClouds(ctx, g.clouds);

      // Platforms (draw behind the frog except the one being jumped to)
      for (const plat of g.platforms as Platform[]) {
        const floatY = plat.cy + Math.sin(plat.floatPhase) * FLOAT_AMP;
        const hov = mouseRef.current.hoveredPlatId === plat.id;
        drawPlatform(ctx, plat, floatY, hov, g.time);
      }

      // Platform keyboard shortcuts labels
      ctx.save();
      ctx.font = 'bold 11px "Nunito", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < (g.platforms as Platform[]).length; i++) {
        const plat = (g.platforms as Platform[])[i];
        if (plat.state === 'hidden') continue;
        const floatY = plat.cy + Math.sin(plat.floatPhase) * FLOAT_AMP;
        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.fillText(`[${i + 1}]`, plat.cx, floatY - PH / 2 - 9);
      }
      ctx.restore();

      // Home pad
      drawHomePad(ctx, g.homeX, g.homeY, g.time);

      // Frog
      drawFrog(ctx, g.frog, g.time);

      // Particles (on top)
      drawParticles(ctx, g.particles);

      // Text effects (on top)
      drawTextEffects(ctx, g.texts);

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [screen, initGame]);

  // ── CLICK / TOUCH HANDLER (canvas) ──
  const handleCanvasInteract = useCallback((cx: number, cy: number) => {
    const g = gRef.current;
    if (!g) return;
    if (g.frog.state !== 'idle') return;

    const platforms = g.platforms as Platform[];
    for (const plat of platforms) {
      if (plat.state === 'hidden') continue;
      const floatY = plat.cy + Math.sin(plat.floatPhase) * FLOAT_AMP;
      if (
        cx >= plat.cx - PW / 2 - 8 && cx <= plat.cx + PW / 2 + 8 &&
        cy >= floatY - PH / 2 - 8   && cy <= floatY + PH / 2 + 8
      ) {
        startJump(g, plat, floatY);
        break;
      }
    }
  }, []);

  function startJump(g: G, plat: Platform, platY: number) {
    const frog = g.frog as Frog;
    const targetY = platY - 4; // frog feet land on top of platform

    frog.state = 'jumping';
    frog.jumpFromX = frog.x;
    frog.jumpFromY = frog.y;
    frog.jumpToX = plat.cx;
    frog.jumpToY = targetY;
    frog.jumpT = 0;

    const dx = frog.jumpToX - frog.jumpFromX;
    const dy = frog.jumpToY - frog.jumpFromY;
    frog.jumpArcH = Math.max(100, Math.abs(dy) + Math.abs(dx) * 0.4 + 40);
    frog.facingRight = dx >= 0;

    g.jumpTargetId = plat.id;
    g.jumpTargetY  = targetY;
    g.phase = 'jumping';
  }

  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const rect = cvs.getBoundingClientRect();
    const scaleX = cvs.width / rect.width;
    const scaleY = cvs.height / rect.height;
    handleCanvasInteract((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
  }, [handleCanvasInteract]);

  const handleCanvasTouch = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const cvs = canvasRef.current;
    if (!cvs || e.touches.length === 0) return;
    const rect = cvs.getBoundingClientRect();
    const scaleX = cvs.width / rect.width;
    const scaleY = cvs.height / rect.height;
    const t = e.touches[0];
    handleCanvasInteract((t.clientX - rect.left) * scaleX, (t.clientY - rect.top) * scaleY);
  }, [handleCanvasInteract]);

  // Mouse move for platform hover
  const handleCanvasMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const cvs = canvasRef.current;
    const g   = gRef.current;
    if (!cvs || !g) return;
    const rect   = cvs.getBoundingClientRect();
    const scaleX = cvs.width / rect.width;
    const scaleY = cvs.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top)  * scaleY;

    let found = -1;
    for (const plat of g.platforms as Platform[]) {
      if (plat.state === 'hidden') continue;
      const floatY = plat.cy + Math.sin(plat.floatPhase) * FLOAT_AMP;
      if (mx >= plat.cx - PW / 2 - 6 && mx <= plat.cx + PW / 2 + 6 &&
          my >= floatY - PH / 2 - 6   && my <= floatY + PH / 2 + 6) {
        found = plat.id; break;
      }
    }
    mouseRef.current.hoveredPlatId = found;
  }, []);

  // Keyboard handler
  useEffect(() => {
    if (screen !== 'playing') return;
    const onKey = (e: KeyboardEvent) => {
      const g = gRef.current;
      if (!g || g.frog.state !== 'idle') return;
      const numMap: Record<string, number> = { '1':0, '2':1, '3':2, '4':3 };
      const idx = numMap[e.key];
      if (idx !== undefined) {
        const platforms = g.platforms as Platform[];
        const visible = platforms.filter((p: Platform) => p.state !== 'hidden');
        const plat = visible[idx];
        if (plat) {
          const floatY = plat.cy + Math.sin(plat.floatPhase) * FLOAT_AMP;
          startJump(g, plat, floatY);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [screen]);

  // Resize handler
  useEffect(() => {
    if (screen !== 'playing') return;
    const onResize = () => {
      const wrap = wrapRef.current;
      const cvs  = canvasRef.current;
      const g    = gRef.current;
      if (!wrap || !cvs || !g) return;
      cvs.width  = wrap.clientWidth;
      cvs.height = wrap.clientHeight;
      g.W = wrap.clientWidth;
      g.H = wrap.clientHeight;
      // Re-position platforms
      const cfg   = LEVELS[Math.min(g.level, LEVELS.length - 1)];
      const slots  = cfg.slots === 3 ? SLOT3 : SLOT4;
      (g.platforms as Platform[]).forEach((p: Platform, i: number) => {
        if (slots[i]) { p.cx = g.W * slots[i][0]; p.cy = g.H * slots[i][1]; }
      });
      g.groundY = g.H * 0.82;
      g.homeX   = g.W * 0.09;
      g.homeY   = g.groundY - 4;
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [screen]);

  // ── LEVEL UP HANDLER ──
  const handleNextLevel = useCallback(() => {
    const g = gRef.current;
    const nextLevel = g ? g.level + 1 : 1;
    initGame(nextLevel);
    setScreen('playing');
  }, [initGame]);

  // ════════════════════════════════════════════════════
  //  SCREENS
  // ════════════════════════════════════════════════════

  if (screen === 'intro') {
    return (
      <div className="rh-root">
        <style>{styles}</style>
        <div className="rh-intro">
          {/* Animated background */}
          <div className="rh-intro-sky" />
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rh-cloud-deco" style={{
              left: `${10 + i * 16}%`,
              top:  `${8 + (i % 3) * 7}%`,
              animationDelay: `${i * 0.9}s`,
              width: `${60 + i * 12}px`,
              opacity: 0.75,
            }} />
          ))}

          <div className="rh-intro-content">
            <div className="rh-intro-frog">🐸</div>
            <h1 className="rh-intro-title">Hop &amp; Rhyme!</h1>
            <p className="rh-intro-sub">Jump to the word that rhymes!</p>

            <div className="rh-instructions">
              <div className="rh-instr-row">
                <span className="rh-instr-icon">🎯</span>
                <p>A <strong>target word</strong> appears at the bottom</p>
              </div>
              <div className="rh-instr-row">
                <span className="rh-instr-icon">👆</span>
                <p><strong>Tap a platform</strong> to jump the frog there</p>
              </div>
              <div className="rh-instr-row">
                <span className="rh-instr-icon">✅</span>
                <p>Land on the word that <strong>rhymes</strong> to score!</p>
              </div>
              <div className="rh-instr-row">
                <span className="rh-instr-icon">⌨️</span>
                <p>Keyboard: press <strong>1 2 3 4</strong> to jump</p>
              </div>
            </div>

            <div className="rh-example-row">
              <div className="rh-ex-badge">cat</div>
              <span className="rh-ex-arrow">→</span>
              <div className="rh-ex-badge rh-ex-green">hat ✓</div>
              <div className="rh-ex-badge rh-ex-red">dog ✗</div>
            </div>

            <button className="rh-start-btn" onClick={() => setScreen('playing')}>
              <span>🐸</span> Start Hopping! <span>🌟</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'levelup') {
    const g = gRef.current;
    const nextIdx = g ? g.level + 1 : 1;
    const isLast  = nextIdx >= LEVELS.length;
    return (
      <div className="rh-root">
        <style>{styles}</style>
        <div className="rh-overlay rh-levelup">
          <div className="rh-levelup-stars">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="rh-star-burst" style={{
                left: `${5 + i * 8}%`, top: `${10 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.12}s`,
                fontSize: `${1.2 + (i % 3) * 0.6}rem`,
              }}>⭐</div>
            ))}
          </div>
          <div className="rh-overlay-content">
            <div className="rh-lu-frog">🐸</div>
            <h2 className="rh-lu-title">Level Complete!</h2>
            <p className="rh-lu-sub">Amazing rhyming! You crushed the {g?.targetWord ? `'-${getFamily(g.targetWord) ?? '?'}' family` : 'rhymes'}!</p>
            <div className="rh-score-card">
              <div className="rh-score-row">
                <span>Score</span>
                <span className="rh-score-val">{hud.score}</span>
              </div>
              <div className="rh-score-row">
                <span>Rhymes found</span>
                <span className="rh-score-val">{hud.done}</span>
              </div>
              <div className="rh-score-row">
                <span>Best combo</span>
                <span className="rh-score-val">{hud.combo}×</span>
              </div>
            </div>
            <div className="rh-lu-btns">
              {!isLast && (
                <button className="rh-next-btn" onClick={handleNextLevel}>
                  Level {nextIdx + 1}: {LEVELS[nextIdx].label} →
                </button>
              )}
              {isLast && (
                <button className="rh-next-btn" onClick={() => setScreen('complete')}>
                  See Final Score →
                </button>
              )}
              <button className="rh-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                ← Games Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    return (
      <div className="rh-root">
        <style>{styles}</style>
        <div className="rh-overlay rh-gameover">
          <div className="rh-overlay-content">
            <div className="rh-go-frog">😢</div>
            <h2 className="rh-go-title">Oh no!</h2>
            <p className="rh-go-sub">You ran out of lives. Try again!</p>
            <div className="rh-score-card">
              <div className="rh-score-row">
                <span>Final Score</span>
                <span className="rh-score-val">{hud.score}</span>
              </div>
              <div className="rh-score-row">
                <span>Rhymes found</span>
                <span className="rh-score-val">{hud.done}</span>
              </div>
            </div>
            <div className="rh-lu-btns">
              <button className="rh-next-btn" onClick={() => { initGame(0); setScreen('playing'); }}>
                🐸 Try Again!
              </button>
              <button className="rh-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                ← Games Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'complete') {
    return (
      <div className="rh-root">
        <style>{styles}</style>
        <div className="rh-overlay rh-complete">
          <div className="rh-complete-rain">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="rh-rain-star" style={{
                left: `${i * 5}%`, animationDelay: `${i * 0.18}s`,
              }}>⭐</div>
            ))}
          </div>
          <div className="rh-overlay-content">
            <div className="rh-lu-frog" style={{ animationDuration: '0.6s' }}>🐸</div>
            <h2 className="rh-lu-title">🏆 Champion Rhymer! 🏆</h2>
            <p className="rh-lu-sub">You&apos;ve completed ALL 8 levels! You&apos;re a rhyme superstar!</p>
            <div className="rh-score-card">
              <div className="rh-score-row">
                <span>Final Score</span>
                <span className="rh-score-val">{hud.score}</span>
              </div>
            </div>
            <div className="rh-lu-btns">
              <button className="rh-next-btn" onClick={() => { initGame(0); setScreen('playing'); }}>
                🐸 Play Again!
              </button>
              <button className="rh-back-btn" onClick={() => onExit ? onExit() : setScreen('intro')}>
                ← Games Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── GAME SCREEN ──
  return (
    <div className="rh-root" ref={wrapRef}>
      <style>{styles}</style>

      {/* Canvas — full screen */}
      <canvas
        ref={canvasRef}
        className="rh-canvas"
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        onTouchStart={handleCanvasTouch}
      />

      {/* HUD: Top bar */}
      <div className="rh-hud-top">
        <div className="rh-hud-left">
          <button className="rh-exit-btn" onClick={() => onExit ? onExit() : setScreen('intro')} title="Exit">✕</button>
          <div className="rh-level-badge">Lvl {hud.level}</div>
          <div className="rh-level-label">{hud.levelLabel}</div>
        </div>
        <div className="rh-hud-center">
          {hud.combo >= 3 && (
            <div className="rh-combo-badge">
              🔥 {hud.combo}× Combo!
            </div>
          )}
        </div>
        <div className="rh-hud-right">
          <div className="rh-lives">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className={i < hud.lives ? 'rh-heart-full' : 'rh-heart-empty'}>
                {i < hud.lives ? '❤️' : '🖤'}
              </span>
            ))}
          </div>
          <div className="rh-score-badge">⭐ {hud.score}</div>
        </div>
      </div>

      {/* Progress: bottom-left */}
      <div className="rh-progress-bar-wrap">
        <div className="rh-progress-bar" style={{ width: `${Math.min((hud.done / hud.needed) * 100, 100)}%` }} />
        <span className="rh-progress-label">{hud.done}/{hud.needed}</span>
      </div>

      {/* Target word: bottom banner */}
      <div className="rh-target-banner">
        <div className="rh-target-inner">
          <span className="rh-target-emoji">🎯</span>
          <span className="rh-target-text">
            Find a word that rhymes with:
          </span>
          <span className="rh-target-word">{hud.targetWord}</span>
        </div>
        <div className="rh-hint-text">tap a platform or press 1–4</div>
      </div>
    </div>
  );
}

// ═══════════════════ STYLES ═══════════════════

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  *:focus { outline: none; }

  .rh-root {
    position: relative;
    width: 100%; height: 100%;
    font-family: 'Nunito', 'Comic Sans MS', cursive;
    overflow: hidden;
    background: #87CEEB;
    user-select: none; -webkit-user-select: none;
  }

  /* ── CANVAS ── */
  .rh-canvas {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    display: block;
    cursor: pointer;
    touch-action: none;
  }

  /* ── HUD TOP ── */
  .rh-hud-top {
    position: absolute; top: 0; left: 0; right: 0;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.55rem 0.85rem;
    background: rgba(0,0,0,0.35);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.12);
    z-index: 30; pointer-events: auto;
  }

  .rh-hud-left, .rh-hud-right { display: flex; align-items: center; gap: 0.55rem; }
  .rh-hud-center { flex: 1; display: flex; align-items: center; justify-content: center; }

  .rh-exit-btn {
    width: 34px; height: 34px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 10px;
    color: rgba(255,255,255,0.7); font-size: 0.9rem;
    cursor: pointer; transition: all 0.2s;
    display: flex; align-items: center; justify-content: center;
  }
  .rh-exit-btn:hover { background: rgba(255,255,255,0.22); color: #fff; }

  .rh-level-badge {
    padding: 0.32rem 0.75rem;
    background: linear-gradient(135deg, #FF7043, #FF5722);
    border-radius: 20px;
    font-size: 0.78rem; font-weight: 800; color: #fff;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(255,112,67,0.4);
  }

  .rh-level-label {
    font-size: 0.72rem; color: rgba(255,255,255,0.7); font-weight: 700;
  }

  .rh-combo-badge {
    padding: 0.32rem 0.9rem;
    background: rgba(255,165,0,0.25);
    border: 1.5px solid rgba(255,165,0,0.5);
    border-radius: 20px;
    font-size: 0.82rem; font-weight: 800; color: #FFD700;
    animation: rhComboPulse 0.55s ease-in-out infinite alternate;
  }
  @keyframes rhComboPulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.06); }
  }

  .rh-lives { display: flex; gap: 0.1rem; }
  .rh-heart-full, .rh-heart-empty { font-size: 1.1rem; }

  .rh-score-badge {
    padding: 0.32rem 0.75rem;
    background: rgba(255,215,0,0.18);
    border: 1px solid rgba(255,215,0,0.35);
    border-radius: 20px;
    font-size: 0.82rem; font-weight: 800; color: #FFD700;
  }

  /* ── PROGRESS BAR ── */
  .rh-progress-bar-wrap {
    position: absolute;
    bottom: 110px; left: 12px;
    width: 130px; height: 10px;
    background: rgba(0,0,0,0.25);
    border-radius: 5px; overflow: hidden;
    z-index: 30; pointer-events: none;
    border: 1px solid rgba(255,255,255,0.18);
  }
  .rh-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #43A047, #66BB6A);
    border-radius: 5px;
    transition: width 0.5s cubic-bezier(0.34,1.56,0.64,1);
    box-shadow: 0 0 8px rgba(67,160,71,0.6);
  }
  .rh-progress-label {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.6rem; font-weight: 800;
    color: rgba(255,255,255,0.8); pointer-events: none;
  }

  /* ── TARGET BANNER ── */
  .rh-target-banner {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: rgba(0,0,0,0.48);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-top: 1px solid rgba(255,255,255,0.12);
    padding: 0.7rem 1rem 0.75rem;
    z-index: 30; pointer-events: none;
    text-align: center;
  }

  .rh-target-inner {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; flex-wrap: wrap;
  }

  .rh-target-emoji { font-size: 1.2rem; }

  .rh-target-text {
    font-size: clamp(0.85rem, 2.5vw, 1.05rem);
    color: rgba(255,255,255,0.85); font-weight: 600;
  }

  .rh-target-word {
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    font-weight: 900; color: #FFD700;
    text-shadow: 0 0 20px rgba(255,215,0,0.6), 0 2px 4px rgba(0,0,0,0.4);
    animation: rhWordPulse 2.5s ease-in-out infinite;
    letter-spacing: 0.03em;
  }
  @keyframes rhWordPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }

  .rh-hint-text {
    font-size: 0.72rem; color: rgba(255,255,255,0.4); margin-top: 0.2rem;
    font-weight: 600;
  }

  /* ════════════════════════════════════════
     INTRO SCREEN
     ════════════════════════════════════════ */
  .rh-intro {
    position: relative;
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .rh-intro-sky {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, #5BBFE8 0%, #8AD4F5 50%, #3D8B40 75%, #2E7D32 100%);
  }

  .rh-cloud-deco {
    position: absolute;
    height: 35px;
    background: rgba(255,255,255,0.82);
    border-radius: 50px;
    animation: rhCloudDrift 12s linear infinite;
  }
  .rh-cloud-deco::before, .rh-cloud-deco::after {
    content: '';
    position: absolute;
    background: rgba(255,255,255,0.82);
    border-radius: 50%;
  }
  .rh-cloud-deco::before {
    width: 50%; height: 140%;
    top: -50%; left: 20%;
  }
  .rh-cloud-deco::after {
    width: 35%; height: 100%;
    top: -35%; right: 15%;
  }
  @keyframes rhCloudDrift {
    0% { transform: translateX(0); }
    50% { transform: translateX(20px); }
    100% { transform: translateX(0); }
  }

  .rh-intro-content {
    position: relative; z-index: 10;
    display: flex; flex-direction: column; align-items: center;
    gap: 1rem; padding: 1.5rem;
    max-width: 480px; width: 92%;
  }

  .rh-intro-frog {
    font-size: 5rem;
    animation: rhFrogBounce 1.4s ease-in-out infinite;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));
  }
  @keyframes rhFrogBounce {
    0%, 100% { transform: translateY(0) scale(1); }
    40% { transform: translateY(-18px) scale(1.08, 0.94); }
    55% { transform: translateY(0) scale(0.92, 1.1); }
    70% { transform: translateY(-6px) scale(1.03, 0.97); }
  }

  .rh-intro-title {
    font-size: clamp(2rem, 8vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FF7043, #FFD700, #42A5F5);
    background-size: 200%;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rhTitleShimmer 4s linear infinite;
    text-shadow: none;
  }
  @keyframes rhTitleShimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  .rh-intro-sub {
    font-size: 1.05rem; color: rgba(255,255,255,0.85); font-weight: 700;
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  }

  .rh-instructions {
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 18px; padding: 1.1rem 1.3rem;
    display: flex; flex-direction: column; gap: 0.7rem; width: 100%;
  }

  .rh-instr-row {
    display: flex; align-items: center; gap: 0.75rem;
  }
  .rh-instr-icon { font-size: 1.3rem; flex-shrink: 0; }
  .rh-instr-row p { font-size: 0.9rem; color: rgba(255,255,255,0.85); line-height: 1.3; }
  .rh-instr-row p strong { color: #FFD700; }

  .rh-example-row {
    display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;
    justify-content: center;
  }

  .rh-ex-badge {
    padding: 0.45rem 1rem;
    background: #42A5F5; border-radius: 14px;
    font-size: 1.1rem; font-weight: 800; color: #fff;
    box-shadow: 0 3px 10px rgba(66,165,245,0.4);
  }
  .rh-ex-green { background: #43A047; box-shadow: 0 3px 10px rgba(67,160,71,0.4); }
  .rh-ex-red   { background: #EF5350; box-shadow: 0 3px 10px rgba(239,83,80,0.4); }
  .rh-ex-arrow { color: rgba(255,255,255,0.6); font-size: 1.2rem; }

  .rh-start-btn {
    display: flex; align-items: center; gap: 0.7rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, #FF7043, #FF5722);
    border: none; border-radius: 50px;
    font-family: 'Nunito', cursive;
    font-size: 1.2rem; font-weight: 900; color: #fff;
    cursor: pointer;
    box-shadow: 0 6px 24px rgba(255,112,67,0.5), 0 2px 6px rgba(0,0,0,0.2);
    transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
  }
  .rh-start-btn:hover {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 10px 32px rgba(255,112,67,0.6);
  }
  .rh-start-btn:active { transform: scale(0.97); }

  /* ════════════════════════════════════════
     OVERLAY SCREENS (Level Up / Game Over / Complete)
     ════════════════════════════════════════ */
  .rh-overlay {
    position: relative; width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .rh-levelup {
    background: linear-gradient(180deg, #1a3a1a 0%, #0d2a1a 100%);
  }
  .rh-gameover {
    background: linear-gradient(180deg, #2a1a1a 0%, #1a0d0d 100%);
  }
  .rh-complete {
    background: linear-gradient(180deg, #1a1a3a 0%, #0d0d2a 100%);
  }

  .rh-levelup-stars {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
  }
  .rh-star-burst {
    position: absolute;
    animation: rhStarPop 1.2s ease-out forwards;
  }
  @keyframes rhStarPop {
    0% { transform: scale(0) rotate(0deg); opacity: 0; }
    40% { transform: scale(1.5) rotate(20deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
  }

  .rh-complete-rain {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
  }
  .rh-rain-star {
    position: absolute; top: -20px; font-size: 1.3rem;
    animation: rhRainDrop 3s linear infinite;
  }
  @keyframes rhRainDrop {
    0% { transform: translateY(-20px); opacity: 0; }
    10% { opacity: 1; }
    100% { transform: translateY(105vh); opacity: 0; }
  }

  .rh-overlay-content {
    position: relative; z-index: 10;
    display: flex; flex-direction: column; align-items: center;
    gap: 1rem; padding: 2rem; max-width: 440px; width: 90%;
    text-align: center;
  }

  .rh-lu-frog {
    font-size: 4.5rem;
    animation: rhFrogBounce 1.4s ease-in-out infinite;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.3));
  }

  .rh-go-frog { font-size: 4rem; animation: rhGoFrog 1s ease-in-out infinite alternate; }
  @keyframes rhGoFrog {
    0% { transform: rotate(-8deg); }
    100% { transform: rotate(8deg); }
  }

  .rh-lu-title {
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    font-weight: 900; color: #FFD700;
    text-shadow: 0 2px 10px rgba(255,215,0,0.4);
  }
  .rh-go-title {
    font-size: clamp(1.8rem, 6vw, 2.6rem);
    font-weight: 900; color: #EF5350;
    text-shadow: 0 2px 10px rgba(239,83,80,0.4);
  }

  .rh-lu-sub, .rh-go-sub {
    font-size: 0.95rem; color: rgba(255,255,255,0.75); font-weight: 600;
    line-height: 1.5;
  }

  .rh-score-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 18px;
    padding: 1rem 1.5rem; width: 100%;
    display: flex; flex-direction: column; gap: 0.6rem;
  }

  .rh-score-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.9rem; color: rgba(255,255,255,0.7); font-weight: 600;
  }
  .rh-score-val { font-size: 1.3rem; font-weight: 900; color: #FFD700; }

  .rh-lu-btns {
    display: flex; flex-direction: column; gap: 0.75rem; align-items: center; width: 100%;
  }

  .rh-next-btn {
    width: 100%; padding: 0.9rem 1.5rem;
    background: linear-gradient(135deg, #43A047, #2E7D32);
    border: none; border-radius: 40px;
    font-family: 'Nunito', cursive;
    font-size: 1rem; font-weight: 800; color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(67,160,71,0.4);
    transition: all 0.2s cubic-bezier(0.34,1.56,0.64,1);
  }
  .rh-next-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 8px 24px rgba(67,160,71,0.5); }

  .rh-back-btn {
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.2);
    border-radius: 30px; padding: 0.6rem 1.5rem;
    font-family: 'Nunito', cursive;
    font-size: 0.88rem; font-weight: 700; color: rgba(255,255,255,0.55);
    cursor: pointer; transition: all 0.2s;
  }
  .rh-back-btn:hover { border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.8); }

  /* ── RESPONSIVE ── */
  @media (max-width: 500px) {
    .rh-hud-top { padding: 0.4rem 0.6rem; }
    .rh-level-label { display: none; }
    .rh-hint-text { display: none; }
    .rh-target-banner { padding: 0.55rem 0.8rem 0.6rem; }
    .rh-progress-bar-wrap { display: none; }
    .rh-start-btn { padding: 0.85rem 2rem; font-size: 1.05rem; }
    .rh-intro-frog { font-size: 3.5rem; }
  }
`;
