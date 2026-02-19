"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface SyllableSamuraiProps {
  onExit?: () => void;
}

/*
  SYLLABLE SAMURAI — Fruit Ninja style word slicing

  Words launch upward on wooden planks. Slash them at syllable break
  points to split them correctly! Wrong slash = shatter. Miss = lose heart.
  Bomb words (1-syllable tricks) must be avoided. Golden words = 3x points.

  Controls: Mouse/touch drag to slash
*/

// =============== CONSTANTS ===============
const GRAVITY = 0.18;
const LAUNCH_VY_MIN = -11;
const LAUNCH_VY_MAX = -8;
const LAUNCH_VX_RANGE = 2.5;
const PLANK_HEIGHT = 44;
const PLANK_PAD = 24;
const SLASH_MIN_LEN = 40;
const COMBO_DECAY_TIME = 180;
const MAX_COMBO_MULTI = 5;
const BOSS_INTERVAL = 5;
const MAX_LIVES = 5;
const PETAL_COUNT = 25;
const SPARK_COUNT = 12;

// =============== WORD DATA ===============
interface WordEntry {
  word: string;
  syllables: string[];
}

const WORDS_1: WordEntry[] = [
  { word: 'cat', syllables: ['cat'] },
  { word: 'dog', syllables: ['dog'] },
  { word: 'fish', syllables: ['fish'] },
  { word: 'hat', syllables: ['hat'] },
  { word: 'bed', syllables: ['bed'] },
  { word: 'cup', syllables: ['cup'] },
  { word: 'run', syllables: ['run'] },
  { word: 'big', syllables: ['big'] },
  { word: 'red', syllables: ['red'] },
  { word: 'sun', syllables: ['sun'] },
  { word: 'tree', syllables: ['tree'] },
  { word: 'house', syllables: ['house'] },
  { word: 'ball', syllables: ['ball'] },
  { word: 'book', syllables: ['book'] },
  { word: 'hand', syllables: ['hand'] },
];

const WORDS_2: WordEntry[] = [
  { word: 'happy', syllables: ['hap', 'py'] },
  { word: 'kitten', syllables: ['kit', 'ten'] },
  { word: 'puppy', syllables: ['pup', 'py'] },
  { word: 'rabbit', syllables: ['rab', 'bit'] },
  { word: 'monkey', syllables: ['mon', 'key'] },
  { word: 'tiger', syllables: ['ti', 'ger'] },
  { word: 'apple', syllables: ['ap', 'ple'] },
  { word: 'garden', syllables: ['gar', 'den'] },
  { word: 'flower', syllables: ['flow', 'er'] },
  { word: 'butter', syllables: ['but', 'ter'] },
  { word: 'candle', syllables: ['can', 'dle'] },
  { word: 'pencil', syllables: ['pen', 'cil'] },
  { word: 'doctor', syllables: ['doc', 'tor'] },
  { word: 'window', syllables: ['win', 'dow'] },
  { word: 'basket', syllables: ['bas', 'ket'] },
];

const WORDS_3: WordEntry[] = [
  { word: 'elephant', syllables: ['el', 'e', 'phant'] },
  { word: 'butterfly', syllables: ['but', 'ter', 'fly'] },
  { word: 'umbrella', syllables: ['um', 'brel', 'la'] },
  { word: 'dinosaur', syllables: ['di', 'no', 'saur'] },
  { word: 'tomato', syllables: ['to', 'ma', 'to'] },
  { word: 'banana', syllables: ['ba', 'na', 'na'] },
  { word: 'potato', syllables: ['po', 'ta', 'to'] },
  { word: 'crocodile', syllables: ['croc', 'o', 'dile'] },
  { word: 'kangaroo', syllables: ['kan', 'ga', 'roo'] },
  { word: 'chocolate', syllables: ['choc', 'o', 'late'] },
  { word: 'adventure', syllables: ['ad', 'ven', 'ture'] },
  { word: 'wonderful', syllables: ['won', 'der', 'ful'] },
  { word: 'beautiful', syllables: ['beau', 'ti', 'ful'] },
  { word: 'dangerous', syllables: ['dan', 'ger', 'ous'] },
  { word: 'hamburger', syllables: ['ham', 'bur', 'ger'] },
];

const WORDS_4: WordEntry[] = [
  { word: 'caterpillar', syllables: ['cat', 'er', 'pil', 'lar'] },
  { word: 'alligator', syllables: ['al', 'li', 'ga', 'tor'] },
  { word: 'watermelon', syllables: ['wa', 'ter', 'mel', 'on'] },
  { word: 'calculator', syllables: ['cal', 'cu', 'la', 'tor'] },
  { word: 'helicopter', syllables: ['hel', 'i', 'cop', 'ter'] },
  { word: 'rhinoceros', syllables: ['rhi', 'noc', 'er', 'os'] },
  { word: 'trampoline', syllables: ['tram', 'po', 'li', 'ne'] },
  { word: 'pepperoni', syllables: ['pep', 'per', 'o', 'ni'] },
  { word: 'macaroni', syllables: ['mac', 'a', 'ro', 'ni'] },
  { word: 'television', syllables: ['tel', 'e', 'vi', 'sion'] },
];

// Bomb words: 1-syllable words that LOOK like they could be multi-syllable
const BOMB_WORDS: WordEntry[] = [
  { word: 'through', syllables: ['through'] },
  { word: 'thought', syllables: ['thought'] },
  { word: 'brought', syllables: ['brought'] },
  { word: 'strange', syllables: ['strange'] },
  { word: 'twelve', syllables: ['twelve'] },
  { word: 'caught', syllables: ['caught'] },
  { word: 'stretched', syllables: ['stretched'] },
  { word: 'squeezed', syllables: ['squeezed'] },
  { word: 'straight', syllables: ['straight'] },
  { word: 'clothes', syllables: ['clothes'] },
];

function getWordsForLevel(level: number): WordEntry[] {
  if (level <= 2) return [...WORDS_1, ...WORDS_2];
  if (level <= 5) return [...WORDS_1, ...WORDS_2, ...WORDS_3];
  return [...WORDS_1, ...WORDS_2, ...WORDS_3, ...WORDS_4];
}

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number): number => Math.floor(rand(lo, hi + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Line segment intersection test
function lineIntersectsRect(
  x1: number, y1: number, x2: number, y2: number,
  rx: number, ry: number, rw: number, rh: number
): boolean {
  // Check if line segment intersects axis-aligned rectangle
  const left = rx - rw / 2;
  const right = rx + rw / 2;
  const top = ry - rh / 2;
  const bottom = ry + rh / 2;

  // Cohen-Sutherland style clip
  function code(x: number, y: number) {
    let c = 0;
    if (x < left) c |= 1;
    else if (x > right) c |= 2;
    if (y < top) c |= 4;
    else if (y > bottom) c |= 8;
    return c;
  }

  let c1 = code(x1, y1), c2 = code(x2, y2);
  let lx1 = x1, ly1 = y1, lx2 = x2, ly2 = y2;

  for (let i = 0; i < 10; i++) {
    if (!(c1 | c2)) return true; // both inside
    if (c1 & c2) return false; // both outside same side
    const c = c1 || c2;
    let x = 0, y = 0;
    if (c & 8) { x = lx1 + (lx2 - lx1) * (bottom - ly1) / (ly2 - ly1); y = bottom; }
    else if (c & 4) { x = lx1 + (lx2 - lx1) * (top - ly1) / (ly2 - ly1); y = top; }
    else if (c & 2) { y = ly1 + (ly2 - ly1) * (right - lx1) / (lx2 - lx1); x = right; }
    else if (c & 1) { y = ly1 + (ly2 - ly1) * (left - lx1) / (lx2 - lx1); x = left; }
    if (c === c1) { lx1 = x; ly1 = y; c1 = code(x, y); }
    else { lx2 = x; ly2 = y; c2 = code(x, y); }
  }
  return false;
}

// Where does a line segment cross a vertical line x=vx within a rect's vertical bounds
function slashCrossX(
  x1: number, y1: number, x2: number, y2: number,
  vx: number, rectTop: number, rectBot: number
): boolean {
  if ((x1 < vx && x2 < vx) || (x1 > vx && x2 > vx)) return false;
  if (Math.abs(x2 - x1) < 0.001) return false;
  const t = (vx - x1) / (x2 - x1);
  if (t < 0 || t > 1) return false;
  const iy = y1 + (y2 - y1) * t;
  return iy >= rectTop && iy <= rectBot;
}

// =============== TYPES ===============
interface Plank {
  id: number;
  word: WordEntry;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  width: number;
  height: number;
  alive: boolean;
  isBomb: boolean;
  isGolden: boolean;
  // For boss planks
  isBoss: boolean;
  bossHP: number;
  bossMaxHP: number;
  bossSlashIdx: number;
  bossFlash: number;
}

interface SplitPiece {
  id: number;
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  width: number;
  height: number;
  life: number;
  maxLife: number;
  correct: boolean;
  isGolden: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  sz: number;
  type: 'spark' | 'petal' | 'ring' | 'text' | 'ember';
  text?: string;
  fontSize?: number;
  rotation?: number;
  rotSpeed?: number;
}

interface SlashPoint {
  x: number;
  y: number;
  age: number;
}

interface PowerUp {
  id: number;
  type: 'slowmo' | 'beam' | 'shield';
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  alive: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

// =============== MAIN COMPONENT ===============
export default function SyllableSamurai({ onExit }: SyllableSamuraiProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const prevTimeRef = useRef(0);

  // Slash tracking
  const slashRef = useRef<{
    active: boolean;
    points: { x: number; y: number }[];
    startTime: number;
  }>({ active: false, points: [], startTime: 0 });

  // HUD state
  const [hud, setHud] = useState({
    score: 0,
    lives: 3,
    level: 1,
    combo: 0,
    comboMulti: 1,
    msg: '',
    msgTimer: 0,
    bossActive: false,
    bossHP: 0,
    bossMaxHP: 0,
    slowmo: false,
    shield: false,
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

    // Cherry blossom petals
    const petals: Particle[] = [];
    for (let i = 0; i < PETAL_COUNT; i++) {
      petals.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: rand(0.2, 0.8),
        vy: rand(0.3, 0.9),
        life: 9999,
        maxLife: 9999,
        color: pick(['#ffb7c5', '#ff9fb5', '#ffd1dc', '#ffcce0', '#f8a4bf']),
        sz: rand(3, 7),
        type: 'petal',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: rand(-0.03, 0.03),
      });
    }

    // Background mountains
    const mtns1: { x: number; h: number }[] = [];
    const mtns2: { x: number; h: number }[] = [];
    for (let i = 0; i < 12; i++) {
      mtns1.push({ x: (i / 11) * W, h: rand(0.15, 0.35) * H });
      mtns2.push({ x: (i / 11) * W, h: rand(0.1, 0.25) * H });
    }

    _idCounter = 0;

    gRef.current = {
      W, H, petals, mtns1, mtns2,
      planks: [] as Plank[],
      splitPieces: [] as SplitPiece[],
      particles: [] as Particle[],
      powerUps: [] as PowerUp[],
      slashTrail: [] as SlashPoint[],
      score: 0,
      lives: 3,
      level: 1,
      combo: 0,
      comboTimer: 0,
      maxCombo: 0,
      wordsSlashed: 0,
      totalWords: 0,

      // Spawn timing
      spawnTimer: 60,
      spawnRate: 120,
      spawnBatch: 1,
      planksThisLevel: 0,
      planksNeeded: 8,

      // Boss
      bossActive: false,
      bossPlank: null as Plank | null,

      // Power-ups
      slowmoTimer: 0,
      shieldActive: false,
      beamActive: false,
      beamTimer: 0,

      // Effects
      shake: 0,
      bgPulse: 0,
      time: 0,
      hudTick: 0,

      // Level transition
      transition: null as null | { phase: string; timer: number },

      // Parallax offset
      parallaxX: 0,
    };

    setHud({
      score: 0, lives: 3, level: 1, combo: 0, comboMulti: 1,
      msg: 'READY!', msgTimer: 80, bossActive: false, bossHP: 0, bossMaxHP: 0,
      slowmo: false, shield: false,
    });
  }, []);

  // ========== SPAWN PLANK ==========
  function spawnPlank(g: G, forceBoss?: boolean) {
    const words = getWordsForLevel(g.level);
    const isBoss = forceBoss || false;
    let entry: WordEntry;
    let isBomb = false;
    let isGolden = false;

    if (isBoss) {
      // Boss words are 3-4 syllable words
      const bossPool = g.level >= 6 ? WORDS_4 : WORDS_3;
      entry = pick(bossPool);
    } else {
      // Chance of bomb word increases with level
      const bombChance = Math.min(0.08 + g.level * 0.02, 0.2);
      const goldenChance = 0.06;

      if (Math.random() < bombChance) {
        entry = pick(BOMB_WORDS);
        isBomb = true;
      } else if (Math.random() < goldenChance) {
        entry = pick(words.filter(w => w.syllables.length >= 2));
        isGolden = true;
      } else {
        entry = pick(words);
      }
    }

    const ctx = canvasRef.current?.getContext('2d');
    let textW = entry.word.length * 22;
    if (ctx) {
      ctx.font = `bold ${isBoss ? 32 : 26}px 'Outfit', sans-serif`;
      textW = ctx.measureText(entry.word.toUpperCase()).width;
    }
    const plankW = textW + PLANK_PAD * 2;
    const plankH = isBoss ? 56 : PLANK_HEIGHT;

    // Launch from bottom, random x
    const margin = plankW / 2 + 20;
    const x = rand(margin, g.W - margin);
    const y = g.H + plankH;

    // Velocity: upward arc
    const speedMult = 1 + Math.min(g.level * 0.05, 0.5);
    const vy = rand(LAUNCH_VY_MIN, LAUNCH_VY_MAX) * speedMult;
    const vx = rand(-LAUNCH_VX_RANGE, LAUNCH_VX_RANGE);

    const plank: Plank = {
      id: nextId(),
      word: entry,
      x, y, vx, vy,
      rotation: rand(-0.08, 0.08),
      rotSpeed: rand(-0.015, 0.015),
      width: plankW,
      height: plankH,
      alive: true,
      isBomb,
      isGolden,
      isBoss,
      bossHP: isBoss ? entry.syllables.length : 0,
      bossMaxHP: isBoss ? entry.syllables.length : 0,
      bossSlashIdx: 0,
      bossFlash: 0,
    };

    g.planks.push(plank);
    g.totalWords++;
  }

  function spawnPowerUp(g: G) {
    const types: PowerUp['type'][] = ['slowmo', 'beam', 'shield'];
    const type = pick(types);
    const x = rand(60, g.W - 60);
    const y = g.H + 30;
    const vy = rand(LAUNCH_VY_MIN * 0.8, LAUNCH_VY_MAX * 0.8);

    g.powerUps.push({
      id: nextId(),
      type,
      x, y,
      vx: rand(-1.5, 1.5),
      vy,
      rotation: 0,
      rotSpeed: rand(-0.04, 0.04),
      alive: true,
    });
  }

  // ========== SLASH DETECTION ==========
  function processSlash(g: G, x1: number, y1: number, x2: number, y2: number) {
    const slashLen = Math.hypot(x2 - x1, y2 - y1);
    if (slashLen < SLASH_MIN_LEN) return;

    let hitSomething = false;

    // Check power-ups first
    for (let i = g.powerUps.length - 1; i >= 0; i--) {
      const pu = g.powerUps[i];
      if (!pu.alive) continue;
      if (lineIntersectsRect(x1, y1, x2, y2, pu.x, pu.y, 50, 50)) {
        pu.alive = false;
        activatePowerUp(g, pu);
        hitSomething = true;
      }
    }

    // Beam power-up: slash ALL planks on screen
    if (g.beamActive) {
      for (let i = g.planks.length - 1; i >= 0; i--) {
        const p = g.planks[i];
        if (!p.alive) continue;
        if (p.isBomb) {
          hitBomb(g, p);
        } else {
          correctSlash(g, p, Math.floor(p.width * 0.5));
        }
      }
      g.beamActive = false;
      g.beamTimer = 0;
      return;
    }

    // Check planks
    for (let i = g.planks.length - 1; i >= 0; i--) {
      const p = g.planks[i];
      if (!p.alive) continue;

      // Does slash cross this plank?
      if (!lineIntersectsRect(x1, y1, x2, y2, p.x, p.y, p.width, p.height + 12)) continue;

      hitSomething = true;

      // BOMB: don't slash!
      if (p.isBomb) {
        hitBomb(g, p);
        continue;
      }

      // BOSS plank: sequential slash at break points
      if (p.isBoss && p.bossHP > 0) {
        handleBossSlash(g, p, x1, y1, x2, y2);
        continue;
      }

      // Normal plank: find where slash crosses relative to plank center
      // Calculate slash position on the plank's x-axis
      const slashMidX = (x1 + x2) / 2;
      const relX = slashMidX - (p.x - p.width / 2); // 0 = left edge, plankW = right edge
      const slashRatio = relX / p.width;

      // Determine which syllable break point (if any) the slash is near
      const syls = p.word.syllables;
      if (syls.length <= 1) {
        // 1-syllable word — any slash is wrong
        wrongSlash(g, p);
        continue;
      }

      // Calculate break point positions
      const breakPoints: number[] = [];
      const totalChars = p.word.word.length;
      let charsSoFar = 0;
      for (let s = 0; s < syls.length - 1; s++) {
        charsSoFar += syls[s].length;
        breakPoints.push(charsSoFar / totalChars);
      }

      // Check if slash is near any break point
      const tolerance = 0.18 + (0.04 * Math.max(0, 3 - syls.length)); // Easier for 2-syl
      let hitBreak = false;
      for (const bp of breakPoints) {
        if (Math.abs(slashRatio - bp) < tolerance) {
          hitBreak = true;
          break;
        }
      }

      if (hitBreak) {
        correctSlash(g, p, relX);
      } else {
        wrongSlash(g, p);
      }
    }

    if (hitSomething) {
      // Slash impact sparks at midpoint
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      for (let i = 0; i < 6; i++) {
        g.particles.push({
          x: mx, y: my,
          vx: rand(-4, 4), vy: rand(-4, 4),
          life: 15 + Math.random() * 10,
          maxLife: 25,
          color: '#fff',
          sz: 2 + Math.random() * 2,
          type: 'spark',
        });
      }
    }
  }

  function handleBossSlash(g: G, p: Plank, x1: number, y1: number, x2: number, y2: number) {
    const syls = p.word.syllables;
    const totalChars = p.word.word.length;

    // Current target break point
    const idx = p.bossSlashIdx;
    if (idx >= syls.length - 1) {
      // All breaks slashed — final split
      correctSlash(g, p, p.width * 0.5);
      return;
    }

    let charsSoFar = 0;
    for (let s = 0; s <= idx; s++) {
      charsSoFar += syls[s].length;
    }
    const targetRatio = charsSoFar / totalChars;
    const targetX = p.x - p.width / 2 + targetRatio * p.width;

    // Check if slash crosses near the target break
    const top = p.y - p.height / 2;
    const bot = p.y + p.height / 2;
    if (slashCrossX(x1, y1, x2, y2, targetX, top - 10, bot + 10) ||
      Math.abs(((x1 + x2) / 2) - targetX) < p.width * 0.15) {
      // Correct boss slash
      p.bossSlashIdx++;
      p.bossHP--;
      p.bossFlash = 15;
      g.shake = Math.min(g.shake + 6, 12);
      g.combo++;
      g.comboTimer = COMBO_DECAY_TIME;

      // Spawn crack particles at break
      for (let i = 0; i < SPARK_COUNT; i++) {
        g.particles.push({
          x: targetX, y: p.y,
          vx: rand(-5, 5), vy: rand(-5, 3),
          life: 18 + Math.random() * 12,
          maxLife: 30,
          color: pick(['#ffd700', '#ffaa00', '#fff5cc']),
          sz: 2 + Math.random() * 4,
          type: 'spark',
        });
      }

      // Text popup
      g.particles.push({
        x: p.x, y: p.y - 40,
        vx: 0, vy: -2,
        life: 50, maxLife: 50,
        color: '#ffd700',
        sz: 0,
        type: 'text',
        text: `${p.bossSlashIdx}/${syls.length - 1}`,
        fontSize: 22,
      });

      if (p.bossHP <= 0) {
        // Boss defeated!
        correctSlash(g, p, p.width * 0.5);
        g.bossActive = false;
        g.bossPlank = null;
        const pts = 500 * g.level;
        g.score += pts;
        g.shake = 18;

        g.particles.push({
          x: g.W / 2, y: g.H / 2 - 60,
          vx: 0, vy: -0.5,
          life: 100, maxLife: 100,
          color: '#ffd700',
          sz: 0,
          type: 'text',
          text: `BOSS DEFEATED! +${pts}`,
          fontSize: 32,
        });

        // Advance level
        startLevelTransition(g);
      }
    } else {
      // Wrong position
      p.bossFlash = 10;
      g.shake = 4;
      g.particles.push({
        x: p.x, y: p.y - 35,
        vx: 0, vy: -1.5,
        life: 40, maxLife: 40,
        color: '#ef4444',
        sz: 0,
        type: 'text',
        text: 'WRONG SPOT!',
        fontSize: 18,
      });
    }
  }

  function correctSlash(g: G, p: Plank, relX: number) {
    p.alive = false;
    g.wordsSlashed++;
    g.planksThisLevel++;
    g.combo++;
    g.comboTimer = COMBO_DECAY_TIME;
    if (g.combo > g.maxCombo) g.maxCombo = g.combo;

    const multi = Math.min(Math.floor(g.combo / 3) + 1, MAX_COMBO_MULTI);
    const basePoints = p.word.syllables.length * 50;
    const points = basePoints * multi * (p.isGolden ? 3 : 1);
    g.score += points;

    // Split pieces
    const syls = p.word.syllables;
    const totalChars = p.word.word.length;
    let charPos = 0;

    for (let i = 0; i < syls.length; i++) {
      const sylLen = syls[i].length;
      const startRatio = charPos / totalChars;
      const endRatio = (charPos + sylLen) / totalChars;
      const midRatio = (startRatio + endRatio) / 2;
      charPos += sylLen;

      const pieceX = p.x - p.width / 2 + midRatio * p.width;
      const pieceW = (endRatio - startRatio) * p.width + 10;
      const dir = i < syls.length / 2 ? -1 : 1;

      g.splitPieces.push({
        id: nextId(),
        text: syls[i],
        x: pieceX,
        y: p.y,
        vx: dir * rand(2, 5) + p.vx,
        vy: rand(-4, -1) + p.vy * 0.5,
        rotation: p.rotation,
        rotSpeed: dir * rand(0.05, 0.15),
        width: pieceW,
        height: p.height,
        life: 80,
        maxLife: 80,
        correct: true,
        isGolden: p.isGolden,
      });
    }

    // Sparks
    for (let i = 0; i < SPARK_COUNT; i++) {
      g.particles.push({
        x: p.x + rand(-20, 20),
        y: p.y + rand(-10, 10),
        vx: rand(-6, 6),
        vy: rand(-6, 3),
        life: 20 + Math.random() * 15,
        maxLife: 35,
        color: p.isGolden
          ? pick(['#ffd700', '#ffaa00', '#fff5cc', '#ffcc33'])
          : pick(['#4ade80', '#22c55e', '#86efac', '#bbf7d0']),
        sz: 2 + Math.random() * 4,
        type: 'spark',
      });
    }

    // Energy ring
    g.particles.push({
      x: p.x, y: p.y,
      vx: 0, vy: 0,
      life: 25, maxLife: 25,
      color: p.isGolden ? '#ffd700' : '#4ade80',
      sz: 10,
      type: 'ring',
    });

    // Score text
    const syllableText = `${syls.length} syllable${syls.length > 1 ? 's' : ''}!`;
    g.particles.push({
      x: p.x, y: p.y - 35,
      vx: 0, vy: -2,
      life: 55, maxLife: 55,
      color: p.isGolden ? '#ffd700' : '#4ade80',
      sz: 0,
      type: 'text',
      text: syllableText,
      fontSize: 20,
    });

    g.particles.push({
      x: p.x, y: p.y - 60,
      vx: 0, vy: -1.8,
      life: 50, maxLife: 50,
      color: '#fff',
      sz: 0,
      type: 'text',
      text: `+${points}`,
      fontSize: 24,
    });

    if (multi > 1) {
      g.particles.push({
        x: p.x + 50, y: p.y - 45,
        vx: 0, vy: -1.5,
        life: 45, maxLife: 45,
        color: '#c084fc',
        sz: 0,
        type: 'text',
        text: `${multi}x COMBO`,
        fontSize: 16,
      });
    }

    g.bgPulse = 15;

    // Check if level complete (non-boss)
    if (!g.bossActive && g.planksThisLevel >= g.planksNeeded) {
      // Spawn boss
      triggerBoss(g);
    }
  }

  function wrongSlash(g: G, p: Plank) {
    p.alive = false;
    g.combo = 0;
    g.comboTimer = 0;

    if (!g.shieldActive) {
      g.lives--;
      g.shake = 10;
    } else {
      g.shieldActive = false;
      g.shake = 6;
    }

    // Shatter fragments
    const fragCount = 8;
    for (let i = 0; i < fragCount; i++) {
      const angle = (i / fragCount) * Math.PI * 2;
      const spd = rand(2, 6);
      g.splitPieces.push({
        id: nextId(),
        text: '',
        x: p.x + rand(-15, 15),
        y: p.y + rand(-10, 10),
        vx: Math.cos(angle) * spd + p.vx,
        vy: Math.sin(angle) * spd + p.vy,
        rotation: Math.random() * Math.PI,
        rotSpeed: rand(-0.2, 0.2),
        width: rand(12, 25),
        height: rand(8, 18),
        life: 50,
        maxLife: 50,
        correct: false,
        isGolden: false,
      });
    }

    // Red sparks
    for (let i = 0; i < SPARK_COUNT; i++) {
      g.particles.push({
        x: p.x + rand(-20, 20),
        y: p.y + rand(-15, 15),
        vx: rand(-5, 5),
        vy: rand(-5, 3),
        life: 20 + Math.random() * 10,
        maxLife: 30,
        color: pick(['#ef4444', '#f87171', '#fca5a5', '#dc2626']),
        sz: 2 + Math.random() * 3,
        type: 'spark',
      });
    }

    g.particles.push({
      x: p.x, y: p.y - 35,
      vx: 0, vy: -2,
      life: 50, maxLife: 50,
      color: '#ef4444',
      sz: 0,
      type: 'text',
      text: g.shieldActive ? 'SHIELD!' : 'WRONG!',
      fontSize: 22,
    });

    if (g.lives <= 0) {
      setScreen('gameover');
    }
  }

  function hitBomb(g: G, p: Plank) {
    p.alive = false;
    g.combo = 0;
    g.comboTimer = 0;

    if (!g.shieldActive) {
      g.lives--;
      g.shake = 14;
    } else {
      g.shieldActive = false;
      g.shake = 8;
    }

    // Explosion particles
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const spd = rand(3, 8);
      g.particles.push({
        x: p.x, y: p.y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 25 + Math.random() * 15,
        maxLife: 40,
        color: pick(['#ef4444', '#f97316', '#fbbf24', '#fff']),
        sz: 3 + Math.random() * 5,
        type: 'spark',
      });
    }

    // Big ring
    g.particles.push({
      x: p.x, y: p.y,
      vx: 0, vy: 0,
      life: 30, maxLife: 30,
      color: '#ef4444',
      sz: 15,
      type: 'ring',
    });

    g.particles.push({
      x: p.x, y: p.y - 40,
      vx: 0, vy: -2,
      life: 60, maxLife: 60,
      color: '#ef4444',
      sz: 0,
      type: 'text',
      text: 'BOMB!',
      fontSize: 28,
    });

    if (g.lives <= 0) {
      setScreen('gameover');
    }
  }

  function activatePowerUp(g: G, pu: PowerUp) {
    if (pu.type === 'slowmo') {
      g.slowmoTimer = 300; // ~5s
      g.particles.push({
        x: g.W / 2, y: g.H / 2,
        vx: 0, vy: -1,
        life: 60, maxLife: 60,
        color: '#38bdf8',
        sz: 0,
        type: 'text',
        text: 'SLOW MOTION!',
        fontSize: 30,
      });
    } else if (pu.type === 'beam') {
      g.beamActive = true;
      g.beamTimer = 180;
      g.particles.push({
        x: g.W / 2, y: g.H / 2,
        vx: 0, vy: -1,
        life: 60, maxLife: 60,
        color: '#a78bfa',
        sz: 0,
        type: 'text',
        text: 'SWORD BEAM!',
        fontSize: 30,
      });
    } else if (pu.type === 'shield') {
      g.shieldActive = true;
      g.particles.push({
        x: g.W / 2, y: g.H / 2,
        vx: 0, vy: -1,
        life: 60, maxLife: 60,
        color: '#22d3ee',
        sz: 0,
        type: 'text',
        text: 'SHIELD!',
        fontSize: 30,
      });
    }

    // Pickup sparks
    for (let i = 0; i < 10; i++) {
      g.particles.push({
        x: pu.x, y: pu.y,
        vx: rand(-4, 4), vy: rand(-4, 4),
        life: 15 + Math.random() * 10,
        maxLife: 25,
        color: pu.type === 'slowmo' ? '#38bdf8' : pu.type === 'beam' ? '#a78bfa' : '#22d3ee',
        sz: 2 + Math.random() * 3,
        type: 'spark',
      });
    }
  }

  function triggerBoss(g: G) {
    g.bossActive = true;
    g.particles.push({
      x: g.W / 2, y: g.H / 2 - 40,
      vx: 0, vy: -0.5,
      life: 100, maxLife: 100,
      color: '#fbbf24',
      sz: 0,
      type: 'text',
      text: 'BOSS WORD!',
      fontSize: 36,
    });
    // Spawn boss plank after a brief delay (via timer)
    g.bossSpawnDelay = 60;
  }

  function startLevelTransition(g: G) {
    g.transition = { phase: 'clear', timer: 80 };
    g.particles.push({
      x: g.W / 2, y: g.H / 2,
      vx: 0, vy: -0.5,
      life: 100, maxLife: 100,
      color: '#4ade80',
      sz: 0,
      type: 'text',
      text: `LEVEL ${g.level} COMPLETE!`,
      fontSize: 34,
    });
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

    const timeMult = g.slowmoTimer > 0 ? 0.5 : 1;
    const adt = dt * timeMult; // adjusted dt for game objects
    g.time += dt;

    if (g.shake > 0) { g.shake *= 0.88; if (g.shake < 0.3) g.shake = 0; }
    if (g.bgPulse > 0) g.bgPulse -= dt;
    if (g.slowmoTimer > 0) g.slowmoTimer -= dt;
    if (g.beamTimer > 0) { g.beamTimer -= dt; if (g.beamTimer <= 0) g.beamActive = false; }

    // Combo decay
    if (g.comboTimer > 0) {
      g.comboTimer -= dt;
      if (g.comboTimer <= 0) g.combo = 0;
    }

    // Level transition
    if (g.transition) {
      g.transition.timer -= dt;
      if (g.transition.timer <= 0) {
        // Advance level
        g.level++;
        g.planksThisLevel = 0;
        g.planksNeeded = Math.min(8 + g.level * 2, 20);
        g.spawnRate = Math.max(50, 120 - g.level * 8);
        g.spawnBatch = Math.min(1 + Math.floor(g.level / 3), 3);
        g.bossActive = false;
        g.bossPlank = null;
        g.transition = null;
        g.spawnTimer = 60;

        g.particles.push({
          x: g.W / 2, y: g.H / 2 - 20,
          vx: 0, vy: -0.8,
          life: 80, maxLife: 80,
          color: '#fff',
          sz: 0,
          type: 'text',
          text: `LEVEL ${g.level}`,
          fontSize: 40,
        });
      }
      // Still update particles and pieces during transition
    }

    // Spawn planks
    if (!g.transition && !g.bossActive) {
      g.spawnTimer -= adt;
      if (g.spawnTimer <= 0) {
        g.spawnTimer = g.spawnRate + rand(-20, 20);
        const count = g.spawnBatch;
        for (let i = 0; i < count; i++) {
          spawnPlank(g);
        }
        // Occasional power-up
        if (Math.random() < 0.08) {
          spawnPowerUp(g);
        }
      }
    }

    // Boss spawn delay
    if (g.bossSpawnDelay !== undefined && g.bossSpawnDelay > 0) {
      g.bossSpawnDelay -= dt;
      if (g.bossSpawnDelay <= 0) {
        spawnPlank(g, true);
        g.bossPlank = g.planks[g.planks.length - 1];
        delete g.bossSpawnDelay;
      }
    }

    // Update planks
    g.planks = g.planks.filter((p: Plank) => {
      if (!p.alive) return false;
      p.x += p.vx * adt;
      p.vy += GRAVITY * adt;
      p.y += p.vy * adt;
      p.rotation += p.rotSpeed * adt;
      if (p.bossFlash > 0) p.bossFlash -= dt;

      // Boss plank hovers longer
      if (p.isBoss && p.y < g.H * 0.35 && p.vy < 0) {
        p.vy *= 0.96; // Decelerate more near the top
      }

      // Missed: fell below screen
      if (p.y > g.H + p.height + 20) {
        if (!p.isBomb) {
          // Missing a non-bomb word costs a heart
          if (!g.shieldActive) {
            g.lives--;
            g.shake = 8;
          } else {
            g.shieldActive = false;
          }
          g.combo = 0;
          g.comboTimer = 0;

          g.particles.push({
            x: p.x, y: g.H - 20,
            vx: 0, vy: -2,
            life: 50, maxLife: 50,
            color: '#ef4444',
            sz: 0,
            type: 'text',
            text: 'MISSED!',
            fontSize: 22,
          });

          if (p.isBoss) {
            g.bossActive = false;
            g.bossPlank = null;
          }

          if (g.lives <= 0) {
            setScreen('gameover');
          }
        }
        return false;
      }
      return true;
    });

    // Update power-ups
    g.powerUps = g.powerUps.filter((pu: PowerUp) => {
      if (!pu.alive) return false;
      pu.x += pu.vx * adt;
      pu.vy += GRAVITY * adt;
      pu.y += pu.vy * adt;
      pu.rotation += pu.rotSpeed * adt;
      return pu.y < g.H + 60;
    });

    // Update split pieces
    g.splitPieces = g.splitPieces.filter((sp: SplitPiece) => {
      sp.x += sp.vx * dt;
      sp.vy += GRAVITY * 0.5 * dt;
      sp.y += sp.vy * dt;
      sp.rotation += sp.rotSpeed * dt;
      sp.life -= dt;
      return sp.life > 0;
    });

    // Update particles
    g.particles = g.particles.filter((p: Particle) => {
      if (p.type === 'petal') {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.x += Math.sin(g.time * 0.03 + (p.rotation || 0) * 10) * 0.3 * dt;
        if (p.rotation !== undefined && p.rotSpeed !== undefined) {
          p.rotation += p.rotSpeed * dt;
        }
        // Wrap around
        if (p.x > g.W + 10) p.x = -10;
        if (p.y > g.H + 10) { p.y = -10; p.x = Math.random() * g.W; }
        return true;
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.type === 'spark' || p.type === 'ember') {
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.05 * dt;
      }
      p.life -= dt;
      return p.life > 0;
    });

    // Update slash trail
    const sl = slashRef.current;
    if (sl.active && sl.points.length > 0) {
      // Add points to game trail
      const lastP = sl.points[sl.points.length - 1];
      g.slashTrail.push({ x: lastP.x, y: lastP.y, age: 0 });
    }
    g.slashTrail = g.slashTrail.filter((sp: SlashPoint) => {
      sp.age += dt;
      return sp.age < 20;
    });

    // Parallax offset based on slash
    if (sl.active && sl.points.length > 1) {
      const lastP = sl.points[sl.points.length - 1];
      g.parallaxX = lerp(g.parallaxX, (lastP.x - g.W / 2) * 0.02, 0.05);
    } else {
      g.parallaxX = lerp(g.parallaxX, 0, 0.03);
    }

    // HUD update
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      const multi = Math.min(Math.floor(g.combo / 3) + 1, MAX_COMBO_MULTI);
      setHud({
        score: g.score,
        lives: g.lives,
        level: g.level,
        combo: g.combo,
        comboMulti: multi,
        msg: '',
        msgTimer: 0,
        bossActive: g.bossActive,
        bossHP: g.bossPlank?.bossHP || 0,
        bossMaxHP: g.bossPlank?.bossMaxHP || 0,
        slowmo: g.slowmoTimer > 0,
        shield: g.shieldActive,
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

    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    ctx.save();
    ctx.translate(sx, sy);

    // ======= BACKGROUND — Japanese dojo scene =======
    drawBackground(ctx, g, W, H);

    // ======= CHERRY BLOSSOM PETALS (behind planks) =======
    for (const p of g.petals) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation || 0);
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = p.color;
      // Petal shape
      ctx.beginPath();
      ctx.ellipse(0, 0, p.sz, p.sz * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Highlight
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.ellipse(-p.sz * 0.2, -p.sz * 0.1, p.sz * 0.4, p.sz * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ======= POWER-UPS =======
    for (const pu of g.powerUps) {
      if (!pu.alive) continue;
      ctx.save();
      ctx.translate(pu.x, pu.y);
      ctx.rotate(pu.rotation);

      const puColors: Record<string, string> = {
        slowmo: '#38bdf8',
        beam: '#a78bfa',
        shield: '#22d3ee',
      };
      const puSymbols: Record<string, string> = {
        slowmo: '\u23F1',
        beam: '\u2694',
        shield: '\u2666',
      };
      const col = puColors[pu.type] || '#fff';

      // Glow
      const glow = ctx.createRadialGradient(0, 0, 5, 0, 0, 30);
      glow.addColorStop(0, col + '60');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.fill();

      // Circle body
      const bg = ctx.createRadialGradient(0, -5, 3, 0, 0, 20);
      bg.addColorStop(0, col);
      bg.addColorStop(1, col + '80');
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.stroke();

      // Symbol
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(puSymbols[pu.type] || '?', 0, 1);

      ctx.restore();
    }

    // ======= PLANKS (word blocks) =======
    for (const p of g.planks) {
      if (!p.alive) continue;
      drawPlank(ctx, g, p);
    }

    // ======= SPLIT PIECES =======
    for (const sp of g.splitPieces) {
      const alpha = clamp(sp.life / (sp.maxLife * 0.3), 0, 1);
      ctx.save();
      ctx.translate(sp.x, sp.y);
      ctx.rotate(sp.rotation);
      ctx.globalAlpha = alpha;

      if (sp.text) {
        // Syllable piece
        const col = sp.correct
          ? (sp.isGolden ? '#ffd700' : '#4ade80')
          : '#ef4444';

        // Plank body
        drawPlankBody(ctx, sp.width, sp.height, sp.correct ? (sp.isGolden ? 'golden' : 'correct') : 'wrong');

        // Text
        ctx.fillStyle = sp.correct ? '#1a472a' : '#7f1d1d';
        ctx.font = `bold 20px 'Outfit', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(sp.text.toUpperCase(), 0, 1);

        // Glow border
        ctx.strokeStyle = col + '80';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-sp.width / 2, -sp.height / 2, sp.width, sp.height, 6);
        ctx.stroke();
      } else {
        // Shatter fragment
        ctx.fillStyle = '#8B6914';
        ctx.beginPath();
        ctx.roundRect(-sp.width / 2, -sp.height / 2, sp.width, sp.height, 3);
        ctx.fill();
        ctx.strokeStyle = '#654d0e';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(-sp.width / 2, -sp.height / 2, sp.width, sp.height, 3);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    // ======= SLASH TRAIL =======
    if (g.slashTrail.length > 1) {
      const multi = Math.min(Math.floor(g.combo / 3) + 1, MAX_COMBO_MULTI);
      for (let i = 1; i < g.slashTrail.length; i++) {
        const prev = g.slashTrail[i - 1];
        const curr = g.slashTrail[i];
        const alpha = clamp(1 - curr.age / 20, 0, 1);
        if (alpha <= 0) continue;

        ctx.globalAlpha = alpha * 0.8;
        const width = (1 - curr.age / 20) * (3 + multi);

        // Outer glow
        ctx.strokeStyle = multi >= 3 ? '#ffd700' : multi >= 2 ? '#c084fc' : '#fff';
        ctx.lineWidth = width + 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();

        // Inner bright core
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(curr.x, curr.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // Active slash line
    const sl = slashRef.current;
    if (sl.active && sl.points.length > 1) {
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(sl.points[0].x, sl.points[0].y);
      for (let i = 1; i < sl.points.length; i++) {
        ctx.lineTo(sl.points[i].x, sl.points[i].y);
      }
      ctx.stroke();

      // Glow
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(sl.points[0].x, sl.points[0].y);
      for (let i = 1; i < sl.points.length; i++) {
        ctx.lineTo(sl.points[i].x, sl.points[i].y);
      }
      ctx.stroke();
    }

    // ======= PARTICLES =======
    for (const p of g.particles) {
      if (p.type === 'petal') continue; // Drawn above

      if (p.type === 'text') {
        const alpha = clamp(p.life / (p.maxLife * 0.3), 0, 1);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.font = `bold ${p.fontSize || 20}px 'Outfit', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 6;
        ctx.fillText(p.text || '', p.x, p.y);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        continue;
      }

      if (p.type === 'ring') {
        const progress = 1 - p.life / p.maxLife;
        const radius = p.sz + progress * 60;
        const alpha = (1 - progress) * 0.6;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 3 * (1 - progress);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        continue;
      }

      // spark / ember
      const alpha = clamp(p.life / p.maxLife, 0, 1);
      ctx.globalAlpha = alpha * alpha;
      ctx.fillStyle = p.color;
      const spd = Math.hypot(p.vx, p.vy);
      if (spd > 1.5) {
        ctx.save();
        ctx.translate(p.x, p.y);
        const ang = Math.atan2(p.vy, p.vx);
        ctx.rotate(ang);
        const len = Math.min(spd * 1.2, p.sz * 3) * alpha;
        const wid = p.sz * alpha * 0.5;
        ctx.beginPath();
        ctx.ellipse(0, 0, len, Math.max(wid, 0.5), 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz * alpha, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // ======= SLOWMO overlay =======
    if (g.slowmoTimer > 0) {
      ctx.fillStyle = 'rgba(56,189,248,0.04)';
      ctx.fillRect(0, 0, W, H);
      // Vignette
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.7);
      vig.addColorStop(0, 'transparent');
      vig.addColorStop(1, 'rgba(56,189,248,0.08)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);
    }

    // ======= BEAM ready overlay =======
    if (g.beamActive) {
      ctx.strokeStyle = `rgba(167,139,250,${0.3 + Math.sin(g.time * 0.15) * 0.15})`;
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 4]);
      ctx.strokeRect(10, 10, W - 20, H - 20);
      ctx.setLineDash([]);
    }

    ctx.restore();
  }

  // ======= BACKGROUND DRAWING =======
  function drawBackground(ctx: CanvasRenderingContext2D, g: G, W: number, H: number) {
    // Sky gradient — warm sunset dojo
    const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
    const pulseAmt = Math.max(0, g.bgPulse) * 0.01;
    skyGrad.addColorStop(0, `rgb(${25 + pulseAmt * 80},${15 + pulseAmt * 30},${45 + pulseAmt * 40})`);
    skyGrad.addColorStop(0.3, `rgb(${80 + pulseAmt * 60},${30 + pulseAmt * 40},${60 + pulseAmt * 30})`);
    skyGrad.addColorStop(0.55, `rgb(${160 + pulseAmt * 40},${80 + pulseAmt * 30},${50 + pulseAmt * 20})`);
    skyGrad.addColorStop(0.75, `rgb(${200 + pulseAmt * 30},${130 + pulseAmt * 20},${60})`);
    skyGrad.addColorStop(1, '#1a0a05');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, W, H);

    const px = g.parallaxX || 0;

    // Sun/moon
    const sunY = H * 0.28;
    const sunX = W * 0.7 + px * 2;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 80);
    sunGrad.addColorStop(0, 'rgba(255,200,100,0.5)');
    sunGrad.addColorStop(0.4, 'rgba(255,150,80,0.2)');
    sunGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 80, 0, Math.PI * 2);
    ctx.fill();

    // Core sun
    ctx.fillStyle = 'rgba(255,220,150,0.4)';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 25, 0, Math.PI * 2);
    ctx.fill();

    // Far mountains (parallax layer 1)
    const mtns = g.mtns1;
    ctx.fillStyle = 'rgba(60,30,50,0.6)';
    ctx.beginPath();
    ctx.moveTo(-10, H);
    for (let i = 0; i < mtns.length; i++) {
      ctx.lineTo(mtns[i].x + px * 0.5, H * 0.55 - mtns[i].h);
    }
    ctx.lineTo(W + 10, H);
    ctx.closePath();
    ctx.fill();

    // Near mountains (parallax layer 2)
    const mtns2 = g.mtns2;
    ctx.fillStyle = 'rgba(40,20,35,0.7)';
    ctx.beginPath();
    ctx.moveTo(-10, H);
    for (let i = 0; i < mtns2.length; i++) {
      ctx.lineTo(mtns2[i].x + px * 1, H * 0.65 - mtns2[i].h);
    }
    ctx.lineTo(W + 10, H);
    ctx.closePath();
    ctx.fill();

    // Pagoda silhouette
    drawPagoda(ctx, W * 0.2 + px * 1.5, H * 0.45, 0.7);

    // Torii gate
    drawTorii(ctx, W * 0.75 + px * 1.2, H * 0.55, 0.5);

    // Ground — dark dojo floor
    const groundY = H * 0.82;
    const groundGrad = ctx.createLinearGradient(0, groundY, 0, H);
    groundGrad.addColorStop(0, '#1a0e08');
    groundGrad.addColorStop(0.3, '#120a06');
    groundGrad.addColorStop(1, '#0a0604');
    ctx.fillStyle = groundGrad;
    ctx.fillRect(0, groundY, W, H - groundY);

    // Ground line
    ctx.strokeStyle = 'rgba(200,120,60,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(W, groundY);
    ctx.stroke();

    // Floor boards (subtle)
    ctx.strokeStyle = 'rgba(200,120,60,0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 8; i++) {
      const bx = (i / 7) * W;
      ctx.beginPath();
      ctx.moveTo(bx, groundY);
      ctx.lineTo(bx + (bx < W / 2 ? -40 : 40), H);
      ctx.stroke();
    }
  }

  function drawPagoda(ctx: CanvasRenderingContext2D, x: number, baseY: number, scale: number) {
    ctx.save();
    ctx.translate(x, baseY);
    ctx.scale(scale, scale);
    ctx.fillStyle = 'rgba(30,15,25,0.7)';
    ctx.strokeStyle = 'rgba(100,50,40,0.3)';
    ctx.lineWidth = 1;

    // Base
    ctx.fillRect(-35, -5, 70, 15);

    // Floors
    const floors = 4;
    for (let i = 0; i < floors; i++) {
      const floorY = -5 - i * 30;
      const floorW = 55 - i * 8;
      const roofW = floorW + 20;

      // Walls
      ctx.fillRect(-floorW / 2, floorY - 25, floorW, 25);

      // Roof
      ctx.beginPath();
      ctx.moveTo(-roofW / 2 - 10, floorY);
      ctx.quadraticCurveTo(-roofW / 2, floorY - 10, 0, floorY - 12);
      ctx.quadraticCurveTo(roofW / 2, floorY - 10, roofW / 2 + 10, floorY);
      ctx.closePath();
      ctx.fill();

      // Curved roof tips
      ctx.beginPath();
      ctx.moveTo(-roofW / 2 - 10, floorY);
      ctx.quadraticCurveTo(-roofW / 2 - 5, floorY - 6, -roofW / 2 - 12, floorY - 4);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(roofW / 2 + 10, floorY);
      ctx.quadraticCurveTo(roofW / 2 + 5, floorY - 6, roofW / 2 + 12, floorY - 4);
      ctx.stroke();
    }

    // Spire
    const spireY = -5 - floors * 30;
    ctx.beginPath();
    ctx.moveTo(0, spireY - 20);
    ctx.lineTo(-3, spireY);
    ctx.lineTo(3, spireY);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  function drawTorii(ctx: CanvasRenderingContext2D, x: number, baseY: number, scale: number) {
    ctx.save();
    ctx.translate(x, baseY);
    ctx.scale(scale, scale);
    ctx.fillStyle = 'rgba(120,30,30,0.5)';
    ctx.strokeStyle = 'rgba(150,40,40,0.4)';
    ctx.lineWidth = 2;

    // Pillars
    ctx.fillRect(-40, -80, 8, 80);
    ctx.fillRect(32, -80, 8, 80);

    // Top beam (kasagi)
    ctx.fillRect(-55, -85, 110, 8);

    // Curved top
    ctx.beginPath();
    ctx.moveTo(-58, -85);
    ctx.quadraticCurveTo(0, -95, 58, -85);
    ctx.lineTo(55, -85);
    ctx.quadraticCurveTo(0, -92, -55, -85);
    ctx.closePath();
    ctx.fill();

    // Lower beam (nuki)
    ctx.fillRect(-48, -70, 96, 5);

    ctx.restore();
  }

  function drawPlankBody(ctx: CanvasRenderingContext2D, w: number, h: number, style: string) {
    const grad = ctx.createLinearGradient(0, -h / 2, 0, h / 2);
    if (style === 'golden') {
      grad.addColorStop(0, '#ffd700');
      grad.addColorStop(0.3, '#ffcc00');
      grad.addColorStop(0.7, '#e6ac00');
      grad.addColorStop(1, '#cc9900');
    } else if (style === 'correct') {
      grad.addColorStop(0, '#c8b080');
      grad.addColorStop(0.3, '#b89c6a');
      grad.addColorStop(0.7, '#a08650');
      grad.addColorStop(1, '#8a7040');
    } else if (style === 'wrong') {
      grad.addColorStop(0, '#8B4513');
      grad.addColorStop(0.3, '#7a3c11');
      grad.addColorStop(0.7, '#6b340f');
      grad.addColorStop(1, '#5a2d0e');
    } else if (style === 'bomb') {
      grad.addColorStop(0, '#4a1a1a');
      grad.addColorStop(0.3, '#3d1515');
      grad.addColorStop(0.7, '#301010');
      grad.addColorStop(1, '#250c0c');
    } else {
      // Normal wood
      grad.addColorStop(0, '#c8a872');
      grad.addColorStop(0.15, '#bf9e68');
      grad.addColorStop(0.5, '#a88850');
      grad.addColorStop(0.85, '#9a7a44');
      grad.addColorStop(1, '#8a6c3a');
    }

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, 8);
    ctx.fill();

    // Wood grain lines
    ctx.strokeStyle = style === 'golden' ? 'rgba(255,255,200,0.15)' :
      style === 'bomb' ? 'rgba(255,50,50,0.1)' :
        'rgba(139,105,20,0.15)';
    ctx.lineWidth = 0.6;
    for (let i = 0; i < 4; i++) {
      const ly = -h / 2 + (i + 0.5) * (h / 4);
      ctx.beginPath();
      ctx.moveTo(-w / 2 + 4, ly + rand(-2, 2));
      ctx.quadraticCurveTo(0, ly + rand(-3, 3), w / 2 - 4, ly + rand(-2, 2));
      ctx.stroke();
    }

    // Top highlight
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h * 0.35, [8, 8, 0, 0]);
    ctx.fill();

    // Border
    ctx.strokeStyle = style === 'golden' ? 'rgba(255,215,0,0.5)' :
      style === 'bomb' ? 'rgba(255,60,60,0.4)' :
        'rgba(100,70,20,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(-w / 2, -h / 2, w, h, 8);
    ctx.stroke();
  }

  function drawPlank(ctx: CanvasRenderingContext2D, g: G, p: Plank) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    const flash = p.bossFlash > 0;

    // Glow behind plank
    if (p.isGolden) {
      const glow = ctx.createRadialGradient(0, 0, p.width * 0.2, 0, 0, p.width * 0.7);
      glow.addColorStop(0, 'rgba(255,215,0,0.3)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, p.width * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
    if (p.isBomb) {
      const glow = ctx.createRadialGradient(0, 0, p.width * 0.15, 0, 0, p.width * 0.6);
      glow.addColorStop(0, 'rgba(255,50,50,0.25)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, p.width * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }
    if (p.isBoss) {
      const pulse = 0.2 + Math.sin(g.time * 0.08) * 0.08;
      const glow = ctx.createRadialGradient(0, 0, p.width * 0.2, 0, 0, p.width * 0.8);
      glow.addColorStop(0, `rgba(255,180,50,${pulse})`);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, p.width * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // Plank body
    const style = p.isBomb ? 'bomb' : p.isGolden ? 'golden' : p.isBoss ? 'golden' : 'normal';
    drawPlankBody(ctx, p.width, p.height, flash ? 'correct' : style);

    // Syllable dividers (visual hint for multi-syllable words)
    const syls = p.word.syllables;
    if (syls.length > 1 && !p.isBomb) {
      let charPos = 0;
      const totalChars = p.word.word.length;
      ctx.strokeStyle = p.isGolden || p.isBoss ? 'rgba(255,255,200,0.25)' : 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      for (let s = 0; s < syls.length - 1; s++) {
        charPos += syls[s].length;
        const ratio = charPos / totalChars;
        const divX = -p.width / 2 + ratio * p.width;

        // Highlight the NEXT break point for boss
        if (p.isBoss && s === p.bossSlashIdx) {
          ctx.strokeStyle = 'rgba(255,215,0,0.6)';
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 2]);
        } else {
          ctx.strokeStyle = p.isGolden || p.isBoss ? 'rgba(255,255,200,0.2)' : 'rgba(255,255,255,0.12)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
        }

        ctx.beginPath();
        ctx.moveTo(divX, -p.height / 2 + 4);
        ctx.lineTo(divX, p.height / 2 - 4);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // Word text
    const textColor = p.isBomb ? '#ff6b6b' : p.isGolden ? '#4a3000' : p.isBoss ? '#4a3000' : '#3d2b14';
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.font = `bold ${p.isBoss ? 30 : 24}px 'Outfit', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.word.word.toUpperCase(), 1, 2);
    ctx.fillStyle = textColor;
    ctx.fillText(p.word.word.toUpperCase(), 0, 1);

    // Bomb icon
    if (p.isBomb) {
      ctx.fillStyle = '#ff4444';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText('\u26A0', -p.width / 2 + 14, 0);
      ctx.fillText('\u26A0', p.width / 2 - 14, 0);
    }

    // Boss HP bar
    if (p.isBoss && p.bossMaxHP > 0) {
      const barW = p.width * 0.7;
      const barH = 5;
      const barY = p.height / 2 + 8;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.beginPath();
      ctx.roundRect(-barW / 2, barY, barW, barH, 2);
      ctx.fill();

      const ratio = p.bossHP / p.bossMaxHP;
      const hpGrad = ctx.createLinearGradient(-barW / 2, 0, barW / 2, 0);
      hpGrad.addColorStop(0, '#ef4444');
      hpGrad.addColorStop(1, '#f97316');
      ctx.fillStyle = hpGrad;
      ctx.beginPath();
      ctx.roundRect(-barW / 2, barY, barW * ratio, barH, 2);
      ctx.fill();

      // Boss label
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('BOSS', 0, -p.height / 2 - 10);
    }

    // Syllable count hint for non-bomb
    if (!p.isBomb && !p.isBoss && syls.length > 1) {
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${syls.length}`, p.width / 2 - 6, -p.height / 2 + 11);
    }

    ctx.restore();
  }

  // ========== INPUT HANDLING ==========
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || screen !== 'playing') return;

    function getPos(e: MouseEvent | Touch): { x: number; y: number } {
      const r = el!.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    // Mouse handlers
    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const pos = getPos(e);
      slashRef.current = { active: true, points: [pos], startTime: Date.now() };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!slashRef.current.active) return;
      const pos = getPos(e);
      slashRef.current.points.push(pos);

      // Process slash segments
      const pts = slashRef.current.points;
      if (pts.length >= 2) {
        const g = gRef.current;
        if (g) {
          const p1 = pts[pts.length - 2];
          const p2 = pts[pts.length - 1];
          processSlash(g, p1.x, p1.y, p2.x, p2.y);
        }
      }
    };

    const onMouseUp = () => {
      slashRef.current.active = false;
      slashRef.current.points = [];
    };

    // Touch handlers
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const pos = getPos(e.touches[0]);
      slashRef.current = { active: true, points: [pos], startTime: Date.now() };
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!slashRef.current.active) return;
      const pos = getPos(e.touches[0]);
      slashRef.current.points.push(pos);

      const pts = slashRef.current.points;
      if (pts.length >= 2) {
        const g = gRef.current;
        if (g) {
          const p1 = pts[pts.length - 2];
          const p2 = pts[pts.length - 1];
          processSlash(g, p1.x, p1.y, p2.x, p2.y);
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      slashRef.current.active = false;
      slashRef.current.points = [];
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    el.addEventListener('touchstart', onTouchStart, { passive: false });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: false });

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  // ========== SCREENS ==========

  if (screen === 'intro') {
    return (
      <div className="ss-root">
        <style>{styles}</style>
        <div className="ss-intro">
          <div className="ss-intro-petals">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="ss-petal" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 4 + Math.random() * 6,
                height: 3 + Math.random() * 4,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                backgroundColor: ['#ffb7c5', '#ff9fb5', '#ffd1dc', '#ffcce0'][i % 4],
              }} />
            ))}
          </div>
          <div className="ss-intro-body">
            <div className="ss-logo-wrap">
              <div className="ss-logo-deco ss-logo-deco-l" />
              <div className="ss-logo-stack">
                <h1 className="ss-title">SYLLABLE</h1>
                <h1 className="ss-title ss-title-2">SAMURAI</h1>
                <p className="ss-subtitle">SLICE THE SYLLABLES</p>
              </div>
              <div className="ss-logo-deco ss-logo-deco-r" />
            </div>

            <div className="ss-card">
              <div className="ss-card-header">
                <div className="ss-card-line" />
                <span>HOW TO PLAY</span>
                <div className="ss-card-line" />
              </div>
              <div className="ss-rules">
                <div className="ss-rule" style={{ '--rc': '#4ade80' } as React.CSSProperties}>
                  <span className="ss-rule-icon">{'\u2694'}</span>
                  <div className="ss-rule-body">
                    <strong>SLASH</strong>
                    <span>Swipe across words at the syllable break points</span>
                  </div>
                </div>
                <div className="ss-rule" style={{ '--rc': '#fbbf24' } as React.CSSProperties}>
                  <span className="ss-rule-icon">{'\u2728'}</span>
                  <div className="ss-rule-body">
                    <strong>SPLIT</strong>
                    <span>{'"but-ter" splits into "but" + "ter" = 2 syllables!'}</span>
                  </div>
                </div>
                <div className="ss-rule" style={{ '--rc': '#ef4444' } as React.CSSProperties}>
                  <span className="ss-rule-icon">{'\u26A0'}</span>
                  <div className="ss-rule-body">
                    <strong>BOMBS</strong>
                    <span>{"Don't slash red bomb words — they're 1-syllable tricks!"}</span>
                  </div>
                </div>
                <div className="ss-rule" style={{ '--rc': '#c084fc' } as React.CSSProperties}>
                  <span className="ss-rule-icon">{'\u26A1'}</span>
                  <div className="ss-rule-body">
                    <strong>COMBOS</strong>
                    <span>Chain correct slashes for multiplier bonuses up to 5x!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="ss-controls-hint">
              <span>Drag to slash</span>
              <span className="ss-ctrl-divider">|</span>
              <span>Mouse or touch</span>
            </div>

            <button className="ss-start-btn" onClick={() => setScreen('playing')}>
              DRAW SWORD
              <span className="ss-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalLevel = gRef.current?.level || 1;
    const finalMaxCombo = gRef.current?.maxCombo || 0;
    const totalWords = gRef.current?.totalWords || 0;
    const wordsSlashed = gRef.current?.wordsSlashed || 0;
    const accuracy = totalWords > 0 ? Math.round((wordsSlashed / totalWords) * 100) : 0;

    return (
      <div className="ss-root">
        <style>{styles}</style>
        <div className="ss-gameover">
          <div className="ss-intro-petals">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="ss-petal" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 4 + Math.random() * 6,
                height: 3 + Math.random() * 4,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                backgroundColor: '#fca5a5',
              }} />
            ))}
          </div>
          <div className="ss-go-body">
            <div className="ss-go-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                <path d="M14 28L28 14L42 28L28 42Z" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M28 18V38M18 28H38" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="ss-go-title">BLADE BROKEN</h1>
            <div className="ss-go-stats">
              <div className="ss-go-stat">
                <span className="ss-go-label">SCORE</span>
                <span className="ss-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="ss-go-divider" />
              <div className="ss-go-stat">
                <span className="ss-go-label">LEVEL</span>
                <span className="ss-go-val">{finalLevel}</span>
              </div>
              <div className="ss-go-divider" />
              <div className="ss-go-stat">
                <span className="ss-go-label">BEST COMBO</span>
                <span className="ss-go-val">{finalMaxCombo}x</span>
              </div>
              <div className="ss-go-divider" />
              <div className="ss-go-stat">
                <span className="ss-go-label">ACCURACY</span>
                <span className="ss-go-val">{accuracy}%</span>
              </div>
            </div>
            <div className="ss-go-btns">
              <button className="ss-start-btn" onClick={() => setScreen('playing')}>
                SHARPEN BLADE
                <span className="ss-btn-shine" />
              </button>
              <button className="ss-menu-btn" onClick={() => setScreen('intro')}>Return to Dojo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="ss-root">
      <style>{styles}</style>
      <div className="ss-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="ss-canvas" />

        {/* HUD Overlay */}
        <div className="ss-hud-top">
          <div className="ss-hud-left">
            <div className="ss-level-badge">
              <span className="ss-level-label">LEVEL</span>
              <span className="ss-level-num">{hud.level}</span>
            </div>
            <div className="ss-lives">
              {[...Array(Math.max(0, hud.lives))].map((_, i) => (
                <span key={i} className="ss-heart">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="#ef4444">
                    <path d="M7 12.5 C7 12.5 0.5 8 0.5 4.5 C0.5 2.5 2 1 3.8 1 C5.1 1 6.3 1.8 7 3 C7.7 1.8 8.9 1 10.2 1 C12 1 13.5 2.5 13.5 4.5 C13.5 8 7 12.5 7 12.5Z"/>
                  </svg>
                </span>
              ))}
            </div>
          </div>
          <div className="ss-hud-right">
            <div className="ss-score-badge">{hud.score.toLocaleString()}</div>
            {hud.combo > 2 && (
              <div className="ss-combo" key={hud.combo}>{hud.comboMulti}x COMBO</div>
            )}
            {hud.slowmo && <div className="ss-effect-badge ss-eff-slowmo">{'\u23F1'} SLOW-MO</div>}
            {hud.shield && <div className="ss-effect-badge ss-eff-shield">{'\u2666'} SHIELD</div>}
          </div>
        </div>

        {/* Boss HUD */}
        {hud.bossActive && hud.bossMaxHP > 0 && (
          <div className="ss-boss-hud">
            <div className="ss-boss-label">BOSS WORD</div>
            <div className="ss-boss-bar-bg">
              <div className="ss-boss-bar-fill" style={{ width: `${(hud.bossHP / hud.bossMaxHP) * 100}%` }} />
              <div className="ss-boss-bar-shine" />
            </div>
            <div className="ss-boss-hint">Slash each syllable break in order!</div>
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
  --ss-bg: #1a0a05;
  --ss-surface: rgba(255,255,255,0.03);
  --ss-border: rgba(255,255,255,0.06);
  --ss-glass: rgba(20,10,5,0.75);
  --ss-glass-border: rgba(200,120,60,0.12);
  --ss-text: #e8d5c4;
  --ss-text-dim: #7a5c42;
  --ss-accent: #e8a050;
  --ss-glow: rgba(232,160,80,0.3);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

.ss-root {
  width: 100%; height: 100%;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  background: var(--ss-bg);
  color: var(--ss-text);
}

/* ===== SHARED ===== */
.ss-intro, .ss-gameover {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(120,40,40,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(200,100,40,0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 100%, rgba(80,30,30,0.06) 0%, transparent 50%),
    var(--ss-bg);
}

.ss-intro-petals { position: absolute; inset: 0; pointer-events: none; }
.ss-petal {
  position: absolute; border-radius: 50% 0 50% 0;
  animation: ssPetalFall 10s ease-in-out infinite;
  opacity: 0.5;
}
@keyframes ssPetalFall {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0.5; }
  25% { transform: translate(30px, 25vh) rotate(90deg); opacity: 0.7; }
  50% { transform: translate(-10px, 50vh) rotate(180deg); opacity: 0.5; }
  75% { transform: translate(20px, 75vh) rotate(270deg); opacity: 0.3; }
  100% { transform: translate(0, 100vh) rotate(360deg); opacity: 0; }
}

/* ===== INTRO ===== */
.ss-intro-body, .ss-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 480px; width: 100%;
  animation: ssFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes ssFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.ss-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.ss-logo-deco {
  width: 50px; height: 2px;
  background: linear-gradient(90deg, transparent, var(--ss-accent), transparent);
  opacity: 0.4;
  animation: ssDecoGlow 3s ease-in-out infinite alternate;
}
@keyframes ssDecoGlow {
  0% { opacity: 0.2; width: 30px; } 100% { opacity: 0.6; width: 60px; }
}
.ss-logo-stack { display: flex; flex-direction: column; align-items: center; }
.ss-title {
  font-size: clamp(2rem, 7vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 6px;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 40px rgba(232,160,80,0.3), 0 0 80px rgba(232,160,80,0.1);
  animation: ssTitleShimmer 4s ease-in-out infinite alternate;
}
.ss-title-2 {
  color: #e8a050;
  letter-spacing: 10px;
  font-size: clamp(1.6rem, 6vw, 2.4rem);
}
@keyframes ssTitleShimmer {
  0% { text-shadow: 0 0 40px rgba(232,160,80,0.3), 0 0 80px rgba(232,160,80,0.1); }
  50% { text-shadow: 0 0 50px rgba(255,140,60,0.35), 0 0 100px rgba(255,140,60,0.12); }
  100% { text-shadow: 0 0 40px rgba(200,100,40,0.3), 0 0 80px rgba(200,100,40,0.1); }
}
.ss-subtitle {
  font-size: 0.75rem; font-weight: 500;
  color: var(--ss-text-dim); letter-spacing: 6px;
  text-transform: uppercase; margin-top: 0.5rem;
}

/* Card */
.ss-card {
  background: var(--ss-glass);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--ss-glass-border);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left;
  position: relative; overflow: hidden;
}
.ss-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(232,160,80,0.3), transparent);
}
.ss-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-size: 0.7rem; font-weight: 600;
  color: var(--ss-text-dim); letter-spacing: 4px;
  text-transform: uppercase;
}
.ss-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, var(--ss-border), transparent);
}

.ss-rules {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;
}
.ss-rule {
  display: flex; align-items: center; gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 10px;
  transition: border-color 0.3s, background 0.3s;
}
.ss-rule:hover {
  border-color: color-mix(in srgb, var(--rc) 25%, transparent);
  background: color-mix(in srgb, var(--rc) 4%, transparent);
}
.ss-rule-icon {
  flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  color: var(--rc);
  background: color-mix(in srgb, var(--rc) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--rc) 20%, transparent);
}
.ss-rule-body {
  display: flex; flex-direction: column; gap: 0.1rem;
  font-size: 0.78rem; line-height: 1.3;
}
.ss-rule-body strong {
  font-size: 0.72rem; font-weight: 700;
  color: var(--rc); letter-spacing: 1px; text-transform: uppercase;
}
.ss-rule-body span { color: var(--ss-text-dim); font-size: 0.68rem; }

.ss-controls-hint {
  display: flex; justify-content: center; align-items: center; gap: 0.8rem;
  margin-bottom: 1.5rem;
  font-size: 0.75rem; color: var(--ss-text-dim);
  letter-spacing: 1px;
}
.ss-ctrl-divider { opacity: 0.3; }

/* CTA button */
.ss-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 700;
  color: white; letter-spacing: 3px;
  background: linear-gradient(135deg, #c0522e, #a0422e);
  border: 1px solid rgba(200,100,60,0.3);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow:
    0 4px 24px rgba(192,82,46,0.25),
    inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.ss-start-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 40px rgba(192,82,46,0.4),
    inset 0 1px 0 rgba(255,255,255,0.15);
  border-color: rgba(220,120,80,0.5);
}
.ss-start-btn:active { transform: translateY(0); }
.ss-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: ssBtnShine 3s ease-in-out infinite;
}
@keyframes ssBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* ===== GAME OVER ===== */
.ss-go-icon {
  margin-bottom: 1rem;
  animation: ssGoIcon 2s ease-in-out infinite alternate;
}
@keyframes ssGoIcon {
  0% { opacity: 0.5; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.05); }
}
.ss-go-title {
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 900; color: #ef4444;
  margin-bottom: 1.5rem; letter-spacing: 4px;
  text-shadow: 0 0 30px rgba(239,68,68,0.3);
}
.ss-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 1.2rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: var(--ss-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--ss-glass-border);
  border-radius: 14px;
  flex-wrap: wrap;
}
.ss-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, var(--ss-glass-border), transparent);
}
.ss-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.ss-go-label {
  font-size: 0.6rem; font-weight: 600;
  color: var(--ss-text-dim); letter-spacing: 2px; text-transform: uppercase;
}
.ss-go-val {
  font-size: 1.5rem; font-weight: 900; color: white;
  text-shadow: 0 0 20px rgba(255,255,255,0.15);
}
.ss-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.ss-menu-btn {
  padding: 0.6rem 1.8rem;
  font-size: 0.8rem; font-weight: 600; color: var(--ss-text-dim);
  background: transparent; border: 1px solid var(--ss-border);
  border-radius: 8px; cursor: pointer;
  transition: all 0.25s; letter-spacing: 1px;
  font-family: 'Outfit', sans-serif;
}
.ss-menu-btn:hover {
  border-color: rgba(255,255,255,0.15); color: var(--ss-text);
  background: rgba(255,255,255,0.03);
}

/* ===== GAME ===== */
.ss-game {
  width: 100%; height: 100%; position: relative; overflow: hidden;
  cursor: none;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}
.ss-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.ss-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(26,10,5,0.85) 0%, rgba(26,10,5,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.ss-hud-left, .ss-hud-right {
  display: flex; align-items: center; gap: 0.5rem;
}
.ss-hud-right { flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.ss-level-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(232,160,80,0.1);
  border: 1px solid rgba(232,160,80,0.2);
  border-radius: 8px;
}
.ss-level-label {
  font-size: 0.55rem; font-weight: 600;
  color: var(--ss-accent); letter-spacing: 2px;
  text-transform: uppercase; opacity: 0.7;
}
.ss-level-num {
  font-size: 0.85rem; font-weight: 800; color: #fff;
}
.ss-lives { display: flex; gap: 0.3rem; align-items: center; }
.ss-heart {
  display: flex; align-items: center;
  filter: drop-shadow(0 0 4px rgba(239,68,68,0.5));
}
.ss-score-badge {
  font-size: 0.85rem; font-weight: 700;
  color: rgba(255,255,255,0.7);
  padding: 0.2rem 0;
}
.ss-combo {
  font-size: 0.7rem; font-weight: 700;
  color: #c084fc;
  text-shadow: 0 0 10px rgba(192,132,252,0.4);
  animation: ssCombo 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes ssCombo {
  0% { transform: scale(1.6); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; }
}
.ss-effect-badge {
  font-size: 0.6rem; font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 6px; letter-spacing: 1px;
}
.ss-eff-slowmo {
  color: #38bdf8;
  background: rgba(56,189,248,0.1);
  border: 1px solid rgba(56,189,248,0.25);
  animation: ssEffectPulse 1.2s ease-in-out infinite alternate;
}
.ss-eff-shield {
  color: #22d3ee;
  background: rgba(34,211,238,0.1);
  border: 1px solid rgba(34,211,238,0.25);
  animation: ssEffectPulse 0.8s ease-in-out infinite alternate;
}
@keyframes ssEffectPulse {
  0% { opacity: 0.6; } 100% { opacity: 1; }
}

/* Boss HUD */
.ss-boss-hud {
  position: absolute; top: 50px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
  z-index: 20; pointer-events: none;
  padding: 0.4rem 1rem;
  background: var(--ss-glass);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(251,191,36,0.2);
  border-radius: 12px;
  animation: ssBossIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes ssBossIn {
  0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.ss-boss-label {
  font-size: 0.7rem; font-weight: 700; color: #fbbf24;
  letter-spacing: 2px; text-transform: uppercase;
}
.ss-boss-bar-bg {
  width: 220px; height: 6px;
  background: rgba(255,255,255,0.06);
  border-radius: 3px; overflow: hidden;
  position: relative;
}
.ss-boss-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #fbbf24, #f97316);
  border-radius: 3px; transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(251,191,36,0.4);
}
.ss-boss-bar-shine {
  position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
  border-radius: 3px 3px 0 0;
}
.ss-boss-hint {
  font-size: 0.58rem; color: var(--ss-text-dim); margin-top: 0.1rem;
  font-weight: 500; letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 500px) {
  .ss-hud-top { padding: 0.3rem 0.4rem; }
  .ss-level-badge { padding: 0.2rem 0.5rem; }
  .ss-level-num { font-size: 0.75rem; }
  .ss-score-badge { font-size: 0.7rem; }
  .ss-rules { grid-template-columns: 1fr; }
  .ss-logo-deco { display: none; }
  .ss-title { letter-spacing: 3px; }
  .ss-title-2 { letter-spacing: 5px; }
  .ss-go-stats { gap: 0.8rem; }
  .ss-go-val { font-size: 1.2rem; }
}
`;
