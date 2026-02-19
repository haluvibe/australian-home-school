"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface SyllableSmasherProps {
  onExit?: () => void;
}

/*
  SYLLABLE SMASHER — Physics Word Breaking Game

  Swing a hammer at the correct syllable break point on word blocks.
  Correct = satisfying split with physics! Wrong = bounce + sparks.

  Controls:
  - Desktop: Click on the break point
  - Mobile: Tap on the break point
*/

// =============== CONSTANTS ===============
const GRAVITY = 0.35;
const PIECE_FRICTION = 0.98;
const PIECE_ROTATION_DAMPING = 0.97;
const HAMMER_SWING_SPEED = 0.18;
const SCREEN_SHAKE_DECAY = 0.88;
const COMBO_TIMEOUT = 300; // frames ~5s

// Materials: Wood, Stone, Metal, Crystal
const MATERIALS = [
  { id: 'wood', name: 'WOOD', color: '#b5651d', colorLight: '#d4a574', colorDark: '#7a4410', particleColors: ['#c4813a', '#a0632a', '#d4a060', '#8b5e2f'], crackColor: '#6b3a0a' },
  { id: 'stone', name: 'STONE', color: '#808080', colorLight: '#a8a8a8', colorDark: '#505050', particleColors: ['#909090', '#b0b0b0', '#686868', '#c0c0c0'], crackColor: '#404040' },
  { id: 'metal', name: 'METAL', color: '#708090', colorLight: '#9ab0c0', colorDark: '#4a6070', particleColors: ['#c0d0e0', '#ffd700', '#e0e8f0', '#ffa500'], crackColor: '#354555' },
  { id: 'crystal', name: 'CRYSTAL', color: '#9370db', colorLight: '#c8a2e8', colorDark: '#5b3a8a', particleColors: ['#e0b0ff', '#ff69b4', '#87ceeb', '#dda0dd'], crackColor: '#3a1a6a' },
];

// =============== WORD DATA ===============
interface WordEntry {
  word: string;
  breaks: number[]; // character indices where syllable breaks occur
  syllables: string[];
}

const EASY_WORDS: WordEntry[] = [
  { word: 'happy', breaks: [3], syllables: ['hap', 'py'] },
  { word: 'kitten', breaks: [3], syllables: ['kit', 'ten'] },
  { word: 'puppy', breaks: [3], syllables: ['pup', 'py'] },
  { word: 'rabbit', breaks: [3], syllables: ['rab', 'bit'] },
  { word: 'apple', breaks: [2], syllables: ['ap', 'ple'] },
  { word: 'monkey', breaks: [3], syllables: ['mon', 'key'] },
  { word: 'pencil', breaks: [3], syllables: ['pen', 'cil'] },
  { word: 'doctor', breaks: [3], syllables: ['doc', 'tor'] },
  { word: 'window', breaks: [3], syllables: ['win', 'dow'] },
  { word: 'garden', breaks: [3], syllables: ['gar', 'den'] },
  { word: 'flower', breaks: [4], syllables: ['flow', 'er'] },
  { word: 'basket', breaks: [3], syllables: ['bas', 'ket'] },
  { word: 'butter', breaks: [3], syllables: ['but', 'ter'] },
  { word: 'candle', breaks: [3], syllables: ['can', 'dle'] },
  { word: 'dinner', breaks: [3], syllables: ['din', 'ner'] },
];

const MEDIUM_WORDS: WordEntry[] = [
  { word: 'spider', breaks: [3], syllables: ['spi', 'der'] },
  { word: 'tiger', breaks: [2], syllables: ['ti', 'ger'] },
  { word: 'water', breaks: [2], syllables: ['wa', 'ter'] },
  { word: 'paper', breaks: [2], syllables: ['pa', 'per'] },
  { word: 'river', breaks: [3], syllables: ['riv', 'er'] },
  { word: 'sister', breaks: [3], syllables: ['sis', 'ter'] },
  { word: 'brother', breaks: [5], syllables: ['broth', 'er'] },
  { word: 'mother', breaks: [4], syllables: ['moth', 'er'] },
  { word: 'father', breaks: [2], syllables: ['fa', 'ther'] },
  { word: 'teacher', breaks: [5], syllables: ['teach', 'er'] },
  { word: 'cricket', breaks: [5], syllables: ['crick', 'et'] },
  { word: 'picnic', breaks: [3], syllables: ['pic', 'nic'] },
  { word: 'sunset', breaks: [3], syllables: ['sun', 'set'] },
  { word: 'rainbow', breaks: [4], syllables: ['rain', 'bow'] },
  { word: 'bookworm', breaks: [4], syllables: ['book', 'worm'] },
];

const BOSS_WORDS: WordEntry[] = [
  { word: 'butterfly', breaks: [3, 6], syllables: ['but', 'ter', 'fly'] },
  { word: 'umbrella', breaks: [2, 5], syllables: ['um', 'brel', 'la'] },
  { word: 'dinosaur', breaks: [2, 4], syllables: ['di', 'no', 'saur'] },
  { word: 'elephant', breaks: [2, 4], syllables: ['el', 'e', 'phant'] },
  { word: 'banana', breaks: [2, 4], syllables: ['ba', 'na', 'na'] },
  { word: 'kangaroo', breaks: [3, 5], syllables: ['kan', 'ga', 'roo'] },
  { word: 'chocolate', breaks: [4, 6], syllables: ['choc', 'o', 'late'] },
  { word: 'hamburger', breaks: [3, 6], syllables: ['ham', 'bur', 'ger'] },
];

// =============== LEVEL STRUCTURE ===============
interface LevelConfig {
  name: string;
  wordPool: WordEntry[];
  materialIndex: number;
  wordsNeeded: number;
  isBoss: boolean;
  isSpeed: boolean;
  speedTimer?: number; // frames for speed rounds
}

function buildLevels(): LevelConfig[] {
  return [
    // Level 1-3: Wood, easy words
    { name: 'WOOD I', wordPool: EASY_WORDS, materialIndex: 0, wordsNeeded: 3, isBoss: false, isSpeed: false },
    { name: 'WOOD II', wordPool: EASY_WORDS, materialIndex: 0, wordsNeeded: 4, isBoss: false, isSpeed: false },
    { name: 'SPEED ROUND!', wordPool: EASY_WORDS, materialIndex: 0, wordsNeeded: 99, isBoss: false, isSpeed: true, speedTimer: 1800 },
    // Level 4-6: Stone, medium words
    { name: 'STONE I', wordPool: MEDIUM_WORDS, materialIndex: 1, wordsNeeded: 4, isBoss: false, isSpeed: false },
    { name: 'STONE II', wordPool: [...EASY_WORDS, ...MEDIUM_WORDS], materialIndex: 1, wordsNeeded: 5, isBoss: false, isSpeed: false },
    { name: 'BOSS: BUTTERFLY', wordPool: BOSS_WORDS, materialIndex: 1, wordsNeeded: 1, isBoss: true, isSpeed: false },
    // Level 7-9: Metal, mixed words
    { name: 'METAL I', wordPool: MEDIUM_WORDS, materialIndex: 2, wordsNeeded: 5, isBoss: false, isSpeed: false },
    { name: 'SPEED ROUND!', wordPool: [...EASY_WORDS, ...MEDIUM_WORDS], materialIndex: 2, wordsNeeded: 99, isBoss: false, isSpeed: true, speedTimer: 1800 },
    { name: 'BOSS: DINOSAUR', wordPool: BOSS_WORDS, materialIndex: 2, wordsNeeded: 1, isBoss: true, isSpeed: false },
    // Level 10: Crystal boss
    { name: 'CRYSTAL BOSS', wordPool: BOSS_WORDS, materialIndex: 3, wordsNeeded: 2, isBoss: true, isSpeed: false },
    // Endless
    { name: 'ENDLESS', wordPool: [...EASY_WORDS, ...MEDIUM_WORDS, ...BOSS_WORDS], materialIndex: 3, wordsNeeded: 999, isBoss: false, isSpeed: false },
  ];
}

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const rand = (lo: number, hi: number): number => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number): number => Math.floor(rand(lo, hi + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// =============== TYPE ALIASES ===============
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

// =============== MAIN COMPONENT ===============
export default function SyllableSmasher({ onExit }: SyllableSmasherProps = {}) {
  const [screen, setScreen] = useState('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const prevTimeRef = useRef(0);

  const [hud, setHud] = useState({
    score: 0, combo: 0, lives: 3, level: 1, levelName: '',
    wordsSmashed: 0, wordsNeeded: 3, material: 'WOOD',
    isBoss: false, isSpeed: false, speedTimer: 0,
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
    const levels = buildLevels();

    gRef.current = {
      W, H,
      levels,
      levelIdx: 0,
      // Current word block
      block: null as G,
      // Hammer state
      hammer: {
        x: W / 2, y: H * 0.4,
        targetX: W / 2, targetY: H * 0.4,
        angle: -Math.PI / 4, // resting angle (tilted left)
        swinging: false,
        swingPhase: 0, // 0 = idle, 0->1 = swing down, 1->2 = return
        swingTargetX: 0,
        swingTargetY: 0,
        impactX: 0,
        impactY: 0,
        power: 0, // 0-3 combo power level
      },
      // Split pieces flying apart
      pieces: [] as G[],
      // Particles
      particles: [] as G[],
      // Floating text effects
      texts: [] as G[],
      // Shockwave rings
      shockwaves: [] as G[],
      // Crack marks on wrong attempts
      cracks: [] as G[],
      // Background elements
      bgLanterns: [] as G[],
      bgEmbers: [] as G[],
      // Game state
      score: 0,
      combo: 0,
      comboTimer: 0,
      lives: 3,
      wordsSmashed: 0,
      wordsNeededThisLevel: levels[0].wordsNeeded,
      totalWordsSmashed: 0,
      shake: 0,
      time: 0,
      hudTick: 0,
      // Speed round timer
      speedTimer: 0,
      isSpeedRound: false,
      // State machine for block presentation
      phase: 'entering' as 'entering' | 'ready' | 'swinging' | 'impact' | 'splitting' | 'waiting' | 'levelComplete' | 'bossBreak',
      phaseTimer: 0,
      // Break points to hit for current word (boss words need multiple)
      breaksRemaining: [] as number[],
      currentBreakIdx: 0,
      // Hint system
      showHint: false,
      hintTimer: 0,
      wrongAttempts: 0,
      // Dotted break lines positions (pixel x positions)
      breakLinePositions: [] as { x: number; charIdx: number }[],
      // Syllable clap animation
      clapPhase: -1,
      clapTimer: 0,
    };

    // Init background
    initBackground(gRef.current);
    // Spawn first block
    spawnBlock(gRef.current);

    setHud({
      score: 0, combo: 0, lives: 3, level: 1, levelName: levels[0].name,
      wordsSmashed: 0, wordsNeeded: levels[0].wordsNeeded, material: MATERIALS[levels[0].materialIndex].name,
      isBoss: levels[0].isBoss, isSpeed: levels[0].isSpeed, speedTimer: 0,
      msg: 'READY?', msgTimer: 80,
    });
  }, []);

  function initBackground(g: G) {
    // Dojo lanterns
    g.bgLanterns = [];
    for (let i = 0; i < 4; i++) {
      g.bgLanterns.push({
        x: (i + 0.5) * (g.W / 4),
        y: rand(30, 80),
        size: rand(20, 35),
        swayOffset: rand(0, Math.PI * 2),
        swaySpeed: rand(0.008, 0.015),
        hue: pick([10, 25, 40, 350]),
      });
    }
    // Floating embers
    g.bgEmbers = [];
    for (let i = 0; i < 25; i++) {
      g.bgEmbers.push({
        x: rand(0, g.W),
        y: rand(0, g.H),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.6, -0.15),
        size: rand(1, 3),
        alpha: rand(0.2, 0.6),
        flicker: rand(0, Math.PI * 2),
      });
    }
  }

  function spawnBlock(g: G) {
    const level = g.levels[g.levelIdx];
    const wordEntry = pick(level.wordPool as WordEntry[]);
    const mat = MATERIALS[level.materialIndex];

    // Calculate block dimensions based on word length
    const charWidth = Math.min(42, g.W * 0.08);
    const blockW = wordEntry.word.length * charWidth + 60;
    const blockH = 80;
    const blockX = g.W / 2;
    const blockY = g.H * 0.48;

    // Calculate break line pixel positions
    const textStartX = blockX - blockW / 2 + 30;
    const breakLines: { x: number; charIdx: number }[] = [];

    // Add all possible break positions (between every pair of characters)
    for (let i = 1; i < wordEntry.word.length; i++) {
      breakLines.push({
        x: textStartX + i * charWidth,
        charIdx: i,
      });
    }

    g.block = {
      id: nextId(),
      word: wordEntry.word,
      wordEntry,
      x: blockX,
      y: -120, // start above screen
      targetY: blockY,
      w: blockW,
      h: blockH,
      material: mat,
      materialIndex: level.materialIndex,
      charWidth,
      enterTimer: 0,
      // Pedestal
      pedestalY: blockY + blockH / 2 + 15,
      pedestalW: blockW * 0.6,
      pedestalH: 25,
    };

    g.breakLinePositions = breakLines;
    g.breaksRemaining = [...wordEntry.breaks];
    g.currentBreakIdx = 0;
    g.phase = 'entering';
    g.phaseTimer = 0;
    g.wrongAttempts = 0;
    g.showHint = false;
    g.hintTimer = 0;
    g.cracks = [];
    g.clapPhase = -1;
    g.clapTimer = 0;

    // Speed round timer
    if (level.isSpeed && g.speedTimer <= 0) {
      g.speedTimer = level.speedTimer || 1800;
      g.isSpeedRound = true;
    }
  }

  function advanceLevel(g: G) {
    g.wordsSmashed = 0;
    g.levelIdx++;
    if (g.levelIdx >= g.levels.length) {
      g.levelIdx = g.levels.length - 1; // stay on endless
    }
    const level = g.levels[g.levelIdx];
    g.wordsNeededThisLevel = level.wordsNeeded;
    g.isSpeedRound = level.isSpeed;
    g.speedTimer = level.isSpeed ? (level.speedTimer || 1800) : 0;

    g.phase = 'levelComplete';
    g.phaseTimer = 120;
    g.texts.push({
      x: g.W / 2, y: g.H / 2 - 40,
      text: level.name,
      color: '#ffd700', life: 100, maxL: 100, vy: -0.5, sz: 38,
    });
    if (level.isBoss) {
      g.texts.push({
        x: g.W / 2, y: g.H / 2 + 10,
        text: 'BOSS BLOCK!',
        color: '#ef4444', life: 100, maxL: 100, vy: -0.3, sz: 22,
      });
    }
  }

  // ========== HANDLE TAP / CLICK ==========
  function handleTap(g: G, tapX: number, tapY: number) {
    if (!g || !g.block) return;
    if (g.phase !== 'ready') return;

    const block = g.block;
    const blockLeft = block.x - block.w / 2;
    const blockRight = block.x + block.w / 2;
    const blockTop = block.y - block.h / 2;
    const blockBottom = block.y + block.h / 2;

    // Check if tap is roughly on the block
    if (tapX < blockLeft - 30 || tapX > blockRight + 30 || tapY < blockTop - 50 || tapY > blockBottom + 50) {
      return;
    }

    // Find closest break line to tap position
    let closestBreak: { x: number; charIdx: number } | null = null;
    let closestDist = Infinity;
    for (const bl of g.breakLinePositions) {
      const d = Math.abs(tapX - bl.x);
      if (d < closestDist) {
        closestDist = d;
        closestBreak = bl;
      }
    }

    if (!closestBreak || closestDist > block.charWidth * 1.2) return;

    // Start hammer swing
    g.phase = 'swinging';
    g.hammer.swingPhase = 0;
    g.hammer.swinging = true;
    g.hammer.swingTargetX = closestBreak.x;
    g.hammer.swingTargetY = block.y;
    g.hammer.impactX = closestBreak.x;
    g.hammer.impactY = block.y;

    // Check if this is a correct break
    const targetBreak = g.breaksRemaining[g.currentBreakIdx];
    const isCorrect = closestBreak.charIdx === targetBreak;

    // Store result for impact phase
    g._pendingResult = isCorrect;
    g._pendingBreakX = closestBreak.x;
    g._pendingCharIdx = closestBreak.charIdx;
  }

  function onCorrectBreak(g: G) {
    const block = g.block;
    const wordEntry = block.wordEntry;
    const breakX = g._pendingBreakX;
    const charIdx = g._pendingCharIdx;

    // Screen shake
    g.shake = 15;

    // Combo
    g.combo++;
    g.comboTimer = COMBO_TIMEOUT;

    // Update hammer power based on combo
    g.hammer.power = Math.min(Math.floor(g.combo / 3), 3);

    // Shockwave
    g.shockwaves.push({
      x: breakX, y: block.y,
      radius: 5, maxRadius: 150, speed: 5,
      alpha: 1, color: MATERIALS[block.materialIndex].particleColors[0],
    });

    // Determine syllable pieces
    const currentBreakIdx = g.currentBreakIdx;
    g.currentBreakIdx++;

    // Check if all breaks are done
    if (g.currentBreakIdx >= g.breaksRemaining.length) {
      // Full split! Create all syllable pieces
      g.phase = 'splitting';
      g.phaseTimer = 80;

      const syllables = wordEntry.syllables;
      const numPieces = syllables.length;
      const totalCharWidth = block.charWidth;
      const blockLeft = block.x - block.w / 2;

      let charOffset = 0;
      for (let i = 0; i < numPieces; i++) {
        const syl = syllables[i];
        const pieceW = syl.length * totalCharWidth + 20;
        const pieceX = blockLeft + 30 + charOffset * totalCharWidth + (syl.length * totalCharWidth) / 2;

        const dirX = i === 0 ? -1 : i === numPieces - 1 ? 1 : (Math.random() - 0.5) * 2;
        const force = 4 + g.hammer.power * 2;

        g.pieces.push({
          id: nextId(),
          text: syl,
          x: pieceX, y: block.y,
          vx: dirX * force + rand(-1, 1),
          vy: rand(-8, -4),
          rotation: 0,
          vr: dirX * rand(0.05, 0.15),
          w: pieceW, h: block.h,
          material: block.material,
          materialIndex: block.materialIndex,
          alpha: 1,
          life: 120,
        });

        charOffset += syl.length;
      }

      // Massive particle burst at break point
      const mat = MATERIALS[block.materialIndex];
      for (let p = 0; p < 40 + g.hammer.power * 15; p++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1, 8 + g.hammer.power * 2);
        g.particles.push({
          x: breakX + rand(-10, 10),
          y: block.y + rand(-20, 20),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          life: 30 + Math.random() * 40,
          maxL: 70,
          color: pick(mat.particleColors),
          sz: 2 + Math.random() * 5,
          gravity: true,
        });
      }

      // Dust cloud
      for (let p = 0; p < 15; p++) {
        g.particles.push({
          x: breakX + rand(-30, 30),
          y: block.y + rand(-10, 30),
          vx: rand(-2, 2),
          vy: rand(-1, 1),
          life: 40 + Math.random() * 30,
          maxL: 70,
          color: `rgba(200,180,160,0.4)`,
          sz: 8 + Math.random() * 15,
          gravity: false,
          dust: true,
        });
      }

      // Score
      const baseScore = 100 * (block.materialIndex + 1);
      const comboBonus = Math.floor(baseScore * g.combo * 0.2);
      const totalPts = baseScore + comboBonus;
      g.score += totalPts;

      // Text effects
      g.texts.push({
        x: breakX, y: block.y - 60,
        text: `${wordEntry.syllables.length} SYLLABLES!`,
        color: '#ffd700', life: 80, maxL: 80, vy: -2, sz: 28,
      });
      g.texts.push({
        x: breakX, y: block.y - 90,
        text: `+${totalPts}`,
        color: '#4ade80', life: 60, maxL: 60, vy: -2.5, sz: 22,
      });
      if (g.combo > 1) {
        g.texts.push({
          x: breakX + 50, y: block.y - 70,
          text: `${g.combo}x COMBO!`,
          color: '#c084fc', life: 60, maxL: 60, vy: -1.5, sz: 18,
        });
      }

      // Clear the block
      g.block = null;
      g.wordsSmashed++;
      g.totalWordsSmashed++;

      // Check level progress
      const level = g.levels[g.levelIdx];
      if (!level.isSpeed && g.wordsSmashed >= g.wordsNeededThisLevel) {
        advanceLevel(g);
      }
    } else {
      // Boss: partial break — just do particles and mark this break done
      g.phase = 'bossBreak';
      g.phaseTimer = 40;

      const mat = MATERIALS[block.materialIndex];
      for (let p = 0; p < 25; p++) {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1, 5);
        g.particles.push({
          x: breakX + rand(-5, 5), y: block.y + rand(-15, 15),
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 1,
          life: 20 + Math.random() * 20, maxL: 40,
          color: pick(mat.particleColors), sz: 2 + Math.random() * 3,
          gravity: true,
        });
      }

      g.shake = 8;
      g.shockwaves.push({
        x: breakX, y: block.y,
        radius: 5, maxRadius: 80, speed: 4,
        alpha: 0.7, color: '#ffd700',
      });

      // Add a crack line at this break
      g.cracks.push({
        x: breakX, y: block.y,
        correct: true,
      });

      const pts = 50 * (block.materialIndex + 1);
      g.score += pts;
      g.texts.push({
        x: breakX, y: block.y - 60,
        text: 'CRACK! +' + pts,
        color: '#fbbf24', life: 50, maxL: 50, vy: -2, sz: 20,
      });
      g.texts.push({
        x: breakX, y: block.y - 85,
        text: `Break ${g.currentBreakIdx}/${g.breaksRemaining.length}`,
        color: '#38bdf8', life: 50, maxL: 50, vy: -1.5, sz: 15,
      });
    }
  }

  function onWrongBreak(g: G) {
    const block = g.block;
    const breakX = g._pendingBreakX;
    const mat = MATERIALS[block.materialIndex];

    // Shake (less)
    g.shake = 6;

    // Reset combo
    g.combo = 0;
    g.comboTimer = 0;
    g.hammer.power = 0;

    g.wrongAttempts++;

    // Sparks
    for (let p = 0; p < 15; p++) {
      const angle = rand(-Math.PI * 0.8, -Math.PI * 0.2);
      const speed = rand(2, 6);
      g.particles.push({
        x: breakX + rand(-5, 5), y: block.y + rand(-10, 10),
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        life: 15 + Math.random() * 15, maxL: 30,
        color: pick(['#ffd700', '#ff6b00', '#fff', '#ffa500']),
        sz: 1.5 + Math.random() * 2.5,
        gravity: true,
        spark: true,
      });
    }

    // Crack mark at wrong spot
    g.cracks.push({
      x: breakX, y: block.y,
      correct: false,
    });

    // Bounce effect
    g.phase = 'impact';
    g.phaseTimer = 30;

    g.texts.push({
      x: breakX, y: block.y - 60,
      text: 'TRY AGAIN!',
      color: '#ef4444', life: 50, maxL: 50, vy: -2, sz: 20,
    });

    // Show hint after 2 wrong attempts
    if (g.wrongAttempts >= 2) {
      g.showHint = true;
      g.hintTimer = 180;

      // Show syllable clap pattern
      g.clapPhase = 0;
      g.clapTimer = 0;

      const syllableText = block.wordEntry.syllables.join(' - ');
      g.texts.push({
        x: g.W / 2, y: block.y + block.h / 2 + 60,
        text: syllableText,
        color: '#38bdf8', life: 120, maxL: 120, vy: 0, sz: 22,
      });
    }

    // Lose a life after 4 wrong attempts on the same word
    if (g.wrongAttempts >= 4) {
      g.lives--;
      g.wrongAttempts = 0;
      g.texts.push({
        x: g.W / 2, y: g.H / 2,
        text: '-1 LIFE',
        color: '#ef4444', life: 60, maxL: 60, vy: -1.5, sz: 26,
      });
    }
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

    // Screen shake decay
    if (g.shake > 0) { g.shake *= SCREEN_SHAKE_DECAY; if (g.shake < 0.3) g.shake = 0; }

    // Combo timer
    if (g.comboTimer > 0) { g.comboTimer -= dt; if (g.comboTimer <= 0) { g.combo = 0; g.hammer.power = 0; } }

    // Speed round timer
    if (g.isSpeedRound && g.speedTimer > 0 && g.phase !== 'levelComplete') {
      g.speedTimer -= dt;
      if (g.speedTimer <= 0) {
        g.speedTimer = 0;
        g.isSpeedRound = false;
        advanceLevel(g);
      }
    }

    // Hint timer
    if (g.hintTimer > 0) { g.hintTimer -= dt; if (g.hintTimer <= 0) g.showHint = false; }

    // Clap animation
    if (g.clapPhase >= 0 && g.block) {
      g.clapTimer += dt;
      if (g.clapTimer > 25) {
        g.clapTimer = 0;
        g.clapPhase++;
        if (g.clapPhase >= g.block.wordEntry.syllables.length) {
          g.clapPhase = -1;
        }
      }
    }

    // ---- Phase state machine ----
    if (g.phase === 'entering' && g.block) {
      g.block.enterTimer += dt;
      const t = Math.min(g.block.enterTimer / 30, 1);
      // Ease out bounce
      const ease = t < 0.7 ? (t / 0.7) * (t / 0.7) : 1 - Math.pow(2 * (1 - t), 2) * 0.15 + 0.15;
      g.block.y = lerp(-120, g.block.targetY, Math.min(ease, 1));
      if (t >= 1) {
        g.block.y = g.block.targetY;
        g.phase = 'ready';
      }
    }

    if (g.phase === 'swinging') {
      g.hammer.swingPhase += HAMMER_SWING_SPEED * dt;
      if (g.hammer.swingPhase >= 1) {
        // Impact!
        g.hammer.swingPhase = 1;
        g.phase = 'impact';
        g.phaseTimer = 10;

        if (g._pendingResult) {
          onCorrectBreak(g);
        } else {
          onWrongBreak(g);
        }
      }
    }

    if (g.phase === 'impact') {
      g.phaseTimer -= dt;
      // Hammer recoil
      g.hammer.swingPhase = lerp(1, 1.3, 1 - g.phaseTimer / 10);
      if (g.phaseTimer <= 0) {
        g.hammer.swinging = false;
        g.hammer.swingPhase = 0;
        if (g.block) {
          g.phase = 'ready';
        } else {
          g.phase = 'waiting';
          g.phaseTimer = 40;
        }
      }
    }

    if (g.phase === 'bossBreak') {
      g.phaseTimer -= dt;
      g.hammer.swingPhase = lerp(1, 1.3, 1 - g.phaseTimer / 40);
      if (g.phaseTimer <= 0) {
        g.hammer.swinging = false;
        g.hammer.swingPhase = 0;
        g.phase = 'ready';
      }
    }

    if (g.phase === 'splitting') {
      g.phaseTimer -= dt;
      if (g.phaseTimer <= 0) {
        g.phase = 'waiting';
        g.phaseTimer = 30;
      }
    }

    if (g.phase === 'waiting') {
      g.phaseTimer -= dt;
      if (g.phaseTimer <= 0) {
        spawnBlock(g);
      }
    }

    if (g.phase === 'levelComplete') {
      g.phaseTimer -= dt;
      if (g.phaseTimer <= 0) {
        spawnBlock(g);
      }
    }

    // ---- Pieces physics ----
    g.pieces = g.pieces.filter((p: G) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += GRAVITY * dt;
      p.vx *= PIECE_FRICTION;
      p.rotation += p.vr * dt;
      p.vr *= PIECE_ROTATION_DAMPING;
      p.life -= dt;
      p.alpha = Math.max(0, p.life / 60);

      // Bounce off floor
      if (p.y > g.H - 30) {
        p.y = g.H - 30;
        p.vy *= -0.4;
        p.vr *= 0.5;
      }

      return p.life > 0 && p.x > -200 && p.x < g.W + 200;
    });

    // ---- Particles ----
    g.particles = g.particles.filter((p: G) => {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      if (p.gravity) p.vy += 0.15 * dt;
      if (p.dust) {
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.sz *= 1.01;
      } else {
        p.vx *= 0.97;
        p.vy *= 0.97;
      }
      p.life -= dt;
      return p.life > 0;
    });

    // ---- Shockwaves ----
    g.shockwaves = g.shockwaves.filter((s: G) => {
      s.radius += s.speed * dt;
      s.alpha = 1 - s.radius / s.maxRadius;
      return s.radius < s.maxRadius;
    });

    // ---- Text effects ----
    g.texts = g.texts.filter((t: G) => {
      t.y += (t.vy || 0) * dt;
      t.life -= dt;
      return t.life > 0;
    });

    // ---- Background embers ----
    for (const e of g.bgEmbers) {
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      e.flicker += dt * 0.05;
      if (e.y < -10) { e.y = g.H + 10; e.x = rand(0, g.W); }
      if (e.x < -10) e.x = g.W + 10;
      if (e.x > g.W + 10) e.x = -10;
    }

    // ---- HUD update ----
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      const level = g.levels[g.levelIdx];
      setHud({
        score: g.score, combo: g.combo, lives: g.lives,
        level: g.levelIdx + 1, levelName: level.name,
        wordsSmashed: g.wordsSmashed, wordsNeeded: g.wordsNeededThisLevel,
        material: MATERIALS[level.materialIndex].name,
        isBoss: level.isBoss, isSpeed: level.isSpeed,
        speedTimer: Math.ceil(g.speedTimer / 60),
        msg: '', msgTimer: 0,
      });
    }

    // ---- Game over ----
    if (g.lives <= 0) setScreen('gameover');
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

    // ======= BACKGROUND: Dojo / Workshop =======
    drawBackground(ctx, g);

    // ======= PEDESTAL =======
    if (g.block) {
      drawPedestal(ctx, g);
    }

    // ======= BLOCK =======
    if (g.block) {
      drawBlock(ctx, g);
    }

    // ======= BREAK LINES =======
    if (g.block && (g.phase === 'ready' || g.phase === 'swinging')) {
      drawBreakLines(ctx, g);
    }

    // ======= CRACKS =======
    drawCracks(ctx, g);

    // ======= PIECES =======
    drawPieces(ctx, g);

    // ======= HAMMER =======
    drawHammer(ctx, g);

    // ======= SHOCKWAVES =======
    drawShockwaves(ctx, g);

    // ======= PARTICLES =======
    drawParticles(ctx, g);

    // ======= TEXT EFFECTS =======
    drawTexts(ctx, g);

    // ======= SYLLABLE CLAP HINT =======
    if (g.clapPhase >= 0 && g.block) {
      drawClapHint(ctx, g);
    }

    ctx.restore();
  }

  // ---- DRAW HELPERS ----
  function drawBackground(ctx: CanvasRenderingContext2D, g: G) {
    const { W, H } = g;

    // Dark dojo background with warm gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#1a0f0a');
    bgGrad.addColorStop(0.3, '#241510');
    bgGrad.addColorStop(0.7, '#1e1208');
    bgGrad.addColorStop(1, '#100a05');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(-10, -10, W + 20, H + 20);

    // Subtle radial light from center (dramatic lighting)
    const spotGrad = ctx.createRadialGradient(W / 2, H * 0.45, 20, W / 2, H * 0.45, H * 0.6);
    spotGrad.addColorStop(0, 'rgba(255,200,120,0.08)');
    spotGrad.addColorStop(0.5, 'rgba(255,150,80,0.03)');
    spotGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = spotGrad;
    ctx.fillRect(0, 0, W, H);

    // Wood floor planks at bottom
    ctx.fillStyle = '#2a1a0e';
    ctx.fillRect(0, H * 0.78, W, H * 0.22);
    ctx.strokeStyle = 'rgba(60,40,20,0.4)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const y = H * 0.78 + i * (H * 0.22 / 8);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }
    // Vertical plank divisions
    ctx.strokeStyle = 'rgba(50,30,15,0.3)';
    for (let i = 0; i < 6; i++) {
      const x = (i + 0.5) * (W / 6) + Math.sin(i * 2.1) * 20;
      ctx.beginPath();
      ctx.moveTo(x, H * 0.78);
      ctx.lineTo(x, H);
      ctx.stroke();
    }

    // Wall panelling at top
    ctx.fillStyle = '#1e120a';
    ctx.fillRect(0, 0, W, H * 0.15);
    ctx.strokeStyle = 'rgba(80,50,25,0.3)';
    ctx.lineWidth = 1;
    const panelW = W / 5;
    for (let i = 0; i <= 5; i++) {
      ctx.beginPath();
      ctx.moveTo(i * panelW, 0);
      ctx.lineTo(i * panelW, H * 0.15);
      ctx.stroke();
    }

    // Lanterns
    for (const lan of g.bgLanterns) {
      const sway = Math.sin(g.time * lan.swaySpeed + lan.swayOffset) * 5;
      const lx = lan.x + sway;
      const ly = lan.y;

      // Rope
      ctx.strokeStyle = 'rgba(100,70,40,0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, ly - lan.size / 2);
      ctx.stroke();

      // Lantern glow
      const glowGrad = ctx.createRadialGradient(lx, ly, 2, lx, ly, lan.size * 2);
      glowGrad.addColorStop(0, `hsla(${lan.hue},80%,50%,0.12)`);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(lx, ly, lan.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Lantern body
      const lanGrad = ctx.createLinearGradient(lx - lan.size / 3, ly - lan.size / 2, lx + lan.size / 3, ly + lan.size / 2);
      lanGrad.addColorStop(0, `hsla(${lan.hue},70%,45%,0.8)`);
      lanGrad.addColorStop(1, `hsla(${lan.hue},70%,30%,0.8)`);
      ctx.fillStyle = lanGrad;
      ctx.beginPath();
      ctx.ellipse(lx, ly, lan.size / 3, lan.size / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `hsla(${lan.hue},60%,60%,0.4)`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    // Floating embers
    for (const e of g.bgEmbers) {
      const flicker = 0.3 + Math.sin(e.flicker) * 0.3;
      ctx.globalAlpha = e.alpha * flicker;
      ctx.fillStyle = '#ff8833';
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function drawPedestal(ctx: CanvasRenderingContext2D, g: G) {
    const b = g.block;
    if (!b) return;
    const px = b.x;
    const py = b.pedestalY;
    const pw = b.pedestalW;
    const ph = b.pedestalH;

    // Pedestal body: stone look
    const pedGrad = ctx.createLinearGradient(px - pw / 2, py, px + pw / 2, py + ph);
    pedGrad.addColorStop(0, '#555555');
    pedGrad.addColorStop(0.3, '#444444');
    pedGrad.addColorStop(1, '#333333');
    ctx.fillStyle = pedGrad;

    // Trapezoid shape
    ctx.beginPath();
    ctx.moveTo(px - pw / 2, py);
    ctx.lineTo(px + pw / 2, py);
    ctx.lineTo(px + pw / 2 + 10, py + ph);
    ctx.lineTo(px - pw / 2 - 10, py + ph);
    ctx.closePath();
    ctx.fill();

    // Pedestal highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px - pw / 2, py);
    ctx.lineTo(px + pw / 2, py);
    ctx.stroke();

    // Shadow beneath
    const shadGrad = ctx.createRadialGradient(px, py + ph + 5, 5, px, py + ph + 5, pw * 0.7);
    shadGrad.addColorStop(0, 'rgba(0,0,0,0.3)');
    shadGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = shadGrad;
    ctx.beginPath();
    ctx.ellipse(px, py + ph + 5, pw * 0.7, 8, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawBlock(ctx: CanvasRenderingContext2D, g: G) {
    const b = g.block;
    if (!b) return;
    const mat = b.material;
    const x = b.x;
    const y = b.y;
    const w = b.w;
    const h = b.h;

    ctx.save();
    ctx.translate(x, y);

    // 3D block: top face
    const topH = 12;
    const topGrad = ctx.createLinearGradient(-w / 2, -h / 2 - topH, w / 2, -h / 2);
    topGrad.addColorStop(0, mat.colorLight);
    topGrad.addColorStop(1, mat.color);
    ctx.fillStyle = topGrad;
    ctx.beginPath();
    ctx.moveTo(-w / 2, -h / 2);
    ctx.lineTo(-w / 2 + 10, -h / 2 - topH);
    ctx.lineTo(w / 2 + 10, -h / 2 - topH);
    ctx.lineTo(w / 2, -h / 2);
    ctx.closePath();
    ctx.fill();

    // 3D block: right face
    ctx.fillStyle = mat.colorDark;
    ctx.beginPath();
    ctx.moveTo(w / 2, -h / 2);
    ctx.lineTo(w / 2 + 10, -h / 2 - topH);
    ctx.lineTo(w / 2 + 10, h / 2 - topH);
    ctx.lineTo(w / 2, h / 2);
    ctx.closePath();
    ctx.fill();

    // Front face
    const frontGrad = ctx.createLinearGradient(0, -h / 2, 0, h / 2);
    frontGrad.addColorStop(0, mat.color);
    frontGrad.addColorStop(1, mat.colorDark);
    ctx.fillStyle = frontGrad;
    ctx.fillRect(-w / 2, -h / 2, w, h);

    // Front face border
    ctx.strokeStyle = mat.colorLight + '60';
    ctx.lineWidth = 2;
    ctx.strokeRect(-w / 2, -h / 2, w, h);

    // Material-specific texture
    if (mat.id === 'wood') {
      // Wood grain lines
      ctx.strokeStyle = 'rgba(100,60,20,0.2)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const gy = -h / 2 + (i + 1) * (h / 6);
        ctx.beginPath();
        ctx.moveTo(-w / 2 + 5, gy + Math.sin(i * 1.3) * 3);
        ctx.quadraticCurveTo(0, gy + Math.cos(i * 2.1) * 5, w / 2 - 5, gy + Math.sin(i * 0.7) * 3);
        ctx.stroke();
      }
    } else if (mat.id === 'stone') {
      // Stone cracks
      ctx.strokeStyle = 'rgba(40,40,40,0.25)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 4; i++) {
        const sx = rand(-w / 3, w / 3);
        const sy = rand(-h / 3, h / 3);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + rand(-15, 15), sy + rand(-10, 10));
        ctx.stroke();
      }
    } else if (mat.id === 'metal') {
      // Rivets
      for (let i = 0; i < 4; i++) {
        const rx = -w / 2 + 15 + i * ((w - 30) / 3);
        for (const ry of [-h / 2 + 10, h / 2 - 10]) {
          ctx.fillStyle = '#5a6a7a';
          ctx.beginPath();
          ctx.arc(rx, ry, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,0.3)';
          ctx.beginPath();
          ctx.arc(rx - 1, ry - 1, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Metallic sheen
      const sheenGrad = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
      sheenGrad.addColorStop(0, 'rgba(255,255,255,0.05)');
      sheenGrad.addColorStop(0.5, 'rgba(255,255,255,0.12)');
      sheenGrad.addColorStop(1, 'rgba(255,255,255,0.02)');
      ctx.fillStyle = sheenGrad;
      ctx.fillRect(-w / 2, -h / 2, w, h);
    } else if (mat.id === 'crystal') {
      // Crystal facets
      ctx.strokeStyle = 'rgba(200,160,255,0.2)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 6; i++) {
        const fx = rand(-w / 2, w / 2);
        const fy = rand(-h / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(fx, fy);
        ctx.lineTo(fx + rand(-20, 20), fy + rand(-15, 15));
        ctx.lineTo(fx + rand(-20, 20), fy + rand(-15, 15));
        ctx.closePath();
        ctx.stroke();
      }
      // Crystal shimmer
      const shimmer = Math.sin(g.time * 0.06) * 0.08 + 0.08;
      ctx.fillStyle = `rgba(200,160,255,${shimmer})`;
      ctx.fillRect(-w / 2, -h / 2, w, h);
      // Sparkle points
      for (let i = 0; i < 3; i++) {
        const sparkX = Math.sin(g.time * 0.04 + i * 2.1) * (w / 3);
        const sparkY = Math.cos(g.time * 0.03 + i * 1.7) * (h / 3);
        const sparkAlpha = 0.5 + Math.sin(g.time * 0.1 + i * 3) * 0.3;
        ctx.fillStyle = `rgba(255,255,255,${sparkAlpha})`;
        ctx.beginPath();
        ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Word text on block
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.font = `bold ${Math.min(40, g.W * 0.07)}px 'Outfit', 'Segoe UI', sans-serif`;
    ctx.fillText(b.word, 1, 3);
    // Main text
    ctx.fillStyle = '#fff';
    ctx.shadowColor = 'rgba(255,255,255,0.3)';
    ctx.shadowBlur = 8;
    ctx.fillText(b.word, 0, 1);
    ctx.shadowBlur = 0;

    ctx.restore();
  }

  function drawBreakLines(ctx: CanvasRenderingContext2D, g: G) {
    const b = g.block;
    if (!b) return;

    const targetBreak = g.breaksRemaining[g.currentBreakIdx];

    for (const bl of g.breakLinePositions) {
      // Skip already-broken lines
      const alreadyBroken = g.cracks.some((c: G) => c.correct && Math.abs(c.x - bl.x) < 5);
      if (alreadyBroken) continue;

      const isTarget = bl.charIdx === targetBreak;
      const pulse = 0.5 + Math.sin(g.time * 0.08) * 0.2;

      // Dotted line
      ctx.save();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = g.showHint && isTarget
        ? `rgba(74,222,128,${pulse + 0.3})`
        : `rgba(255,255,255,${pulse * 0.5})`;
      ctx.lineWidth = g.showHint && isTarget ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(bl.x, b.y - b.h / 2 - 5);
      ctx.lineTo(bl.x, b.y + b.h / 2 + 5);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Hover glow for hint target
      if (g.showHint && isTarget) {
        const glowGrad = ctx.createRadialGradient(bl.x, b.y, 5, bl.x, b.y, 40);
        glowGrad.addColorStop(0, `rgba(74,222,128,${pulse * 0.3})`);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(bl.x, b.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawCracks(ctx: CanvasRenderingContext2D, g: G) {
    if (!g.block) return;
    const b = g.block;

    for (const crack of g.cracks) {
      if (crack.correct) {
        // Golden crack for correct partial breaks
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 3;
        ctx.shadowColor = 'rgba(255,215,0,0.5)';
        ctx.shadowBlur = 6;
      } else {
        // Dark crack for wrong attempts
        ctx.strokeStyle = b.material.crackColor;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.moveTo(crack.x, b.y - b.h / 2);
      // Jagged crack line
      const segments = 6;
      for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const jag = crack.correct ? 0 : (Math.sin(i * 2.7 + crack.x) * 4);
        ctx.lineTo(crack.x + jag, b.y - b.h / 2 + t * b.h);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  function drawPieces(ctx: CanvasRenderingContext2D, g: G) {
    for (const p of g.pieces) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.alpha;

      const mat = p.material;

      // Piece body
      const grad = ctx.createLinearGradient(0, -p.h / 2, 0, p.h / 2);
      grad.addColorStop(0, mat.color);
      grad.addColorStop(1, mat.colorDark);
      ctx.fillStyle = grad;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);

      // Border
      ctx.strokeStyle = mat.colorLight + '80';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h);

      // Jagged edge (broken side)
      ctx.strokeStyle = mat.crackColor;
      ctx.lineWidth = 2;

      // Text on piece
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.font = `bold ${Math.min(34, g.W * 0.06)}px 'Outfit', 'Segoe UI', sans-serif`;
      ctx.fillText(p.text, 0, 1);
      ctx.shadowBlur = 0;

      ctx.globalAlpha = 1;
      ctx.restore();
    }
  }

  function drawHammer(ctx: CanvasRenderingContext2D, g: G) {
    const h = g.hammer;
    const { W, H } = g;

    // Hammer position: rests at right side, swings down to impact point
    let hammerX: number, hammerY: number, hammerAngle: number;

    if (h.swinging) {
      const t = h.swingPhase;
      if (t <= 1) {
        // Swing arc from raised position to impact
        const easedT = t * t; // ease in (accelerating)
        const restX = Math.min(W * 0.75, h.swingTargetX + 150);
        const restY = H * 0.15;
        hammerX = lerp(restX, h.impactX, easedT);
        hammerY = lerp(restY, h.impactY - 30, easedT);
        hammerAngle = lerp(-Math.PI * 0.6, 0, easedT);
      } else {
        // Recoil
        const recoilT = (t - 1) / 0.3;
        hammerX = lerp(h.impactX, h.impactX - 20, Math.min(recoilT, 1));
        hammerY = lerp(h.impactY - 30, h.impactY - 60, Math.min(recoilT, 1));
        hammerAngle = lerp(0, -Math.PI * 0.3, Math.min(recoilT, 1));
      }
    } else {
      // Resting position with gentle bob
      hammerX = Math.min(W * 0.78, W - 80);
      hammerY = H * 0.18 + Math.sin(g.time * 0.025) * 5;
      hammerAngle = -Math.PI * 0.55;
    }

    ctx.save();
    ctx.translate(hammerX, hammerY);
    ctx.rotate(hammerAngle);

    // Power effects
    const power = h.power;
    if (power >= 1) {
      // Fire trail particles on hammer head
      const fireAlpha = 0.3 + power * 0.15;
      const fireGrad = ctx.createRadialGradient(0, -45, 5, 0, -45, 30 + power * 10);
      fireGrad.addColorStop(0, `rgba(255,${150 - power * 30},0,${fireAlpha})`);
      fireGrad.addColorStop(0.5, `rgba(255,${80 - power * 20},0,${fireAlpha * 0.5})`);
      fireGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = fireGrad;
      ctx.beginPath();
      ctx.arc(0, -45, 30 + power * 10, 0, Math.PI * 2);
      ctx.fill();
    }
    if (power >= 2) {
      // Lightning crackle
      ctx.strokeStyle = `rgba(100,200,255,${0.3 + Math.sin(g.time * 0.2) * 0.2})`;
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        let lx = rand(-8, 8), ly = -50;
        ctx.moveTo(lx, ly);
        for (let j = 0; j < 4; j++) {
          lx += rand(-8, 8);
          ly += rand(5, 12);
          ctx.lineTo(lx, ly);
        }
        ctx.stroke();
      }
    }
    if (power >= 3) {
      // Golden aura
      const auraAlpha = 0.15 + Math.sin(g.time * 0.08) * 0.08;
      ctx.fillStyle = `rgba(255,215,0,${auraAlpha})`;
      ctx.beginPath();
      ctx.arc(0, -25, 50, 0, Math.PI * 2);
      ctx.fill();
    }

    // Handle
    const handleGrad = ctx.createLinearGradient(-5, 0, 5, 0);
    handleGrad.addColorStop(0, '#6b3a0a');
    handleGrad.addColorStop(0.3, '#8b5e2f');
    handleGrad.addColorStop(0.7, '#7a4410');
    handleGrad.addColorStop(1, '#5a2a00');
    ctx.fillStyle = handleGrad;
    ctx.beginPath();
    ctx.roundRect(-6, -10, 12, 70, 3);
    ctx.fill();

    // Handle wrap (grip)
    ctx.strokeStyle = '#4a2800';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const gy = 25 + i * 8;
      ctx.beginPath();
      ctx.moveTo(-6, gy);
      ctx.lineTo(6, gy);
      ctx.stroke();
    }

    // Hammer head
    const headGrad = ctx.createLinearGradient(-22, -55, 22, -30);
    headGrad.addColorStop(0, '#8a8a8a');
    headGrad.addColorStop(0.3, '#b0b0b0');
    headGrad.addColorStop(0.6, '#a0a0a0');
    headGrad.addColorStop(1, '#707070');
    ctx.fillStyle = headGrad;

    // Head shape
    ctx.beginPath();
    ctx.roundRect(-22, -55, 44, 28, 4);
    ctx.fill();

    // Head border
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(-22, -55, 44, 28, 4);
    ctx.stroke();

    // Head highlight
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.roundRect(-20, -53, 40, 8, [3, 3, 0, 0]);
    ctx.fill();

    // Impact face (bottom of head)
    ctx.fillStyle = '#606060';
    ctx.fillRect(-20, -30, 40, 4);

    ctx.restore();
  }

  function drawShockwaves(ctx: CanvasRenderingContext2D, g: G) {
    for (const s of g.shockwaves) {
      ctx.save();
      ctx.globalAlpha = s.alpha * 0.6;
      ctx.strokeStyle = s.color || '#fff';
      ctx.lineWidth = 3 * s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Inner ring
      if (s.radius > 20) {
        ctx.globalAlpha = s.alpha * 0.3;
        ctx.lineWidth = 1.5 * s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius * 0.6, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    }
  }

  function drawParticles(ctx: CanvasRenderingContext2D, g: G) {
    for (const p of g.particles) {
      const a = p.life / p.maxL;
      ctx.globalAlpha = a * a;

      if (p.dust) {
        // Soft dust cloud
        const dustGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.sz);
        dustGrad.addColorStop(0, `rgba(200,180,160,${a * 0.3})`);
        dustGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = dustGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.spark) {
        // Bright spark streak
        ctx.fillStyle = p.color;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 1) {
          ctx.save();
          ctx.translate(p.x, p.y);
          const ang = Math.atan2(p.vy, p.vx);
          ctx.rotate(ang);
          const len = Math.min(spd * 2, p.sz * 4) * a;
          ctx.beginPath();
          ctx.ellipse(0, 0, len, Math.max(p.sz * a * 0.3, 0.5), 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.sz * a, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        // Standard particle
        ctx.fillStyle = p.color;
        const spd = Math.hypot(p.vx, p.vy);
        if (spd > 1.5) {
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
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.sz * a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  function drawTexts(ctx: CanvasRenderingContext2D, g: G) {
    for (const t of g.texts) {
      const a = Math.min(1, t.life / (t.maxL * 0.3));
      ctx.globalAlpha = a;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.sz}px 'Outfit', 'Segoe UI', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 5;
      ctx.fillText(t.text, t.x, t.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;
  }

  function drawClapHint(ctx: CanvasRenderingContext2D, g: G) {
    const b = g.block;
    if (!b) return;
    const syllables = b.wordEntry.syllables;
    const baseY = b.y + b.h / 2 + 40;

    // Draw clap dots under each syllable
    let charOffset = 0;
    const textStartX = b.x - b.w / 2 + 30;

    for (let i = 0; i < syllables.length; i++) {
      const syl = syllables[i];
      const dotX = textStartX + (charOffset + syl.length / 2) * b.charWidth;
      const isActive = i === g.clapPhase;

      // Circle
      ctx.beginPath();
      ctx.arc(dotX, baseY, isActive ? 12 : 8, 0, Math.PI * 2);
      ctx.fillStyle = isActive ? 'rgba(255,215,0,0.8)' : 'rgba(255,255,255,0.2)';
      ctx.fill();

      // Clap hands emoji or dot
      if (isActive) {
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('\u{1F44F}', dotX, baseY);
      }

      charOffset += syl.length;
    }
  }

  // ========== INPUT ==========
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const handlePointer = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      let cx: number, cy: number;
      if ('touches' in e) {
        cx = e.touches[0].clientX - rect.left;
        cy = e.touches[0].clientY - rect.top;
      } else {
        cx = e.clientX - rect.left;
        cy = e.clientY - rect.top;
      }
      // Scale to canvas coordinates
      const cvs = canvasRef.current;
      if (!cvs) return;
      const scaleX = cvs.width / rect.width;
      const scaleY = cvs.height / rect.height;
      handleTap(gRef.current, cx * scaleX, cy * scaleY);
    };

    el.addEventListener('mousedown', handlePointer);
    el.addEventListener('touchstart', handlePointer, { passive: false });

    return () => {
      el.removeEventListener('mousedown', handlePointer);
      el.removeEventListener('touchstart', handlePointer);
    };
  }, [screen]);

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="ss-root">
        <style>{styles}</style>
        <div className="ss-intro">
          <div className="ss-intro-embers">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="ss-ember" style={{
                left: `${Math.random() * 100}%`, bottom: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 5}s`,
                width: 2 + Math.random() * 3, height: 2 + Math.random() * 3,
              }} />
            ))}
          </div>
          <div className="ss-intro-body">
            <div className="ss-logo-wrap">
              <div className="ss-logo-deco ss-logo-deco-l" />
              <div className="ss-logo-stack">
                <h1 className="ss-title">SYLLABLE</h1>
                <h1 className="ss-title ss-title-sub">SMASHER</h1>
                <p className="ss-subtitle">WORD BREAKING DOJO</p>
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
                <div className="ss-rule">
                  <span className="ss-rule-num">1</span>
                  <span>A word appears on a block</span>
                </div>
                <div className="ss-rule">
                  <span className="ss-rule-num">2</span>
                  <span>Tap the correct syllable break point</span>
                </div>
                <div className="ss-rule">
                  <span className="ss-rule-num">3</span>
                  <span>SMASH! The block splits into syllables</span>
                </div>
                <div className="ss-rule">
                  <span className="ss-rule-num">4</span>
                  <span>Build combos for power-ups!</span>
                </div>
              </div>
              <div className="ss-materials-row">
                {MATERIALS.map(m => (
                  <div key={m.id} className="ss-mat-badge" style={{ borderColor: m.color, color: m.color }}>
                    {m.name}
                  </div>
                ))}
              </div>
            </div>

            <button className="ss-start-btn" onClick={() => setScreen('playing')}>
              ENTER THE DOJO
              <span className="ss-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'gameover') {
    const finalScore = gRef.current?.score || 0;
    const finalWords = gRef.current?.totalWordsSmashed || 0;
    const finalLevel = (gRef.current?.levelIdx || 0) + 1;
    return (
      <div className="ss-root">
        <style>{styles}</style>
        <div className="ss-gameover">
          <div className="ss-intro-embers">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="ss-ember" style={{
                left: `${Math.random() * 100}%`, bottom: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 5}s`,
                width: 2 + Math.random() * 3, height: 2 + Math.random() * 3,
              }} />
            ))}
          </div>
          <div className="ss-go-body">
            <div className="ss-go-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="24" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
                <path d="M20 20L36 36M36 20L20 36" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="ss-go-title">BLOCK WINS</h1>
            <div className="ss-go-stats">
              <div className="ss-go-stat">
                <span className="ss-go-label">SCORE</span>
                <span className="ss-go-val">{finalScore.toLocaleString()}</span>
              </div>
              <div className="ss-go-divider" />
              <div className="ss-go-stat">
                <span className="ss-go-label">WORDS</span>
                <span className="ss-go-val">{finalWords}</span>
              </div>
              <div className="ss-go-divider" />
              <div className="ss-go-stat">
                <span className="ss-go-label">LEVEL</span>
                <span className="ss-go-val">{finalLevel}</span>
              </div>
            </div>
            <div className="ss-go-btns">
              <button className="ss-start-btn" onClick={() => setScreen('playing')}>
                RETRY
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
          <div className="ss-hud-center">
            <div className="ss-score-display">
              <span className="ss-score-label">SCORE</span>
              <span className="ss-score-num" key={hud.score}>{hud.score.toLocaleString()}</span>
            </div>
            {hud.combo > 1 && <div className="ss-combo" key={hud.combo}>{hud.combo}x COMBO</div>}
          </div>
          <div className="ss-hud-right">
            <div className="ss-mat-indicator" style={{ color: MATERIALS[Math.min(hud.level - 1, 3) < 3 ? Math.floor((hud.level - 1) / 3) : 3].color }}>
              {hud.material}
            </div>
            {!hud.isSpeed && !hud.isBoss && (
              <div className="ss-progress">{hud.wordsSmashed}/{hud.wordsNeeded}</div>
            )}
            {hud.isSpeed && (
              <div className="ss-speed-timer">{hud.speedTimer}s</div>
            )}
            {hud.isBoss && (
              <div className="ss-boss-badge">BOSS</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============
const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --ss-bg: #1a0f0a;
  --ss-surface: rgba(255,255,255,0.03);
  --ss-border: rgba(255,255,255,0.06);
  --ss-glass: rgba(20,12,8,0.75);
  --ss-glass-border: rgba(200,140,60,0.15);
  --ss-text: #e8d5c4;
  --ss-text-dim: #6b5040;
  --ss-accent: #e8973f;
  --ss-glow: rgba(232,151,63,0.3);
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
    radial-gradient(ellipse 80% 50% at 50% 80%, rgba(180,80,20,0.12) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(200,100,20,0.06) 0%, transparent 50%),
    var(--ss-bg);
}
.ss-intro-embers { position: absolute; inset: 0; pointer-events: none; }
.ss-ember {
  position: absolute; border-radius: 50%; background: #ff8833;
  animation: ssFloat 5s ease-in-out infinite alternate;
}
@keyframes ssFloat {
  0% { opacity: 0.1; transform: translateY(0) scale(1); }
  50% { opacity: 0.7; }
  100% { opacity: 0.15; transform: translateY(-80px) scale(0.5); }
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
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 40px rgba(232,151,63,0.3), 0 0 80px rgba(232,151,63,0.1);
  animation: ssTitleShimmer 4s ease-in-out infinite alternate;
}
.ss-title-sub {
  color: var(--ss-accent);
  font-size: clamp(1.6rem, 6vw, 2.5rem);
}
@keyframes ssTitleShimmer {
  0% { text-shadow: 0 0 40px rgba(232,151,63,0.3), 0 0 80px rgba(232,151,63,0.1); }
  50% { text-shadow: 0 0 50px rgba(255,180,60,0.35), 0 0 100px rgba(255,180,60,0.12); }
  100% { text-shadow: 0 0 40px rgba(200,120,40,0.3), 0 0 80px rgba(200,120,40,0.1); }
}
.ss-subtitle {
  font-size: 0.8rem; font-weight: 500;
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
  background: linear-gradient(90deg, transparent, var(--ss-accent), transparent);
  opacity: 0.4;
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
  display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;
}
.ss-rule {
  display: flex; align-items: center; gap: 0.7rem;
  padding: 0.4rem 0.6rem;
  font-size: 0.85rem; color: var(--ss-text);
}
.ss-rule-num {
  flex-shrink: 0; width: 26px; height: 26px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800;
  color: var(--ss-accent);
  background: rgba(232,151,63,0.12);
  border: 1px solid rgba(232,151,63,0.25);
}
.ss-materials-row {
  display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap;
}
.ss-mat-badge {
  padding: 0.25rem 0.7rem;
  border: 1px solid; border-radius: 6px;
  font-size: 0.65rem; font-weight: 700; letter-spacing: 2px;
  opacity: 0.7;
}

/* CTA button */
.ss-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #c06020, #a04010);
  border: 1px solid rgba(200,120,40,0.4);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow:
    0 4px 24px rgba(200,100,20,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.ss-start-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 40px rgba(200,100,20,0.45),
    inset 0 1px 0 rgba(255,255,255,0.15);
  border-color: rgba(255,160,60,0.5);
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
  gap: 1.5rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: var(--ss-glass);
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--ss-glass-border);
  border-radius: 14px;
}
.ss-go-divider {
  width: 1px; height: 40px;
  background: linear-gradient(180deg, transparent, var(--ss-glass-border), transparent);
}
.ss-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.ss-go-label {
  font-size: 0.6rem; font-weight: 600;
  color: var(--ss-text-dim); letter-spacing: 3px; text-transform: uppercase;
}
.ss-go-val {
  font-size: 1.6rem; font-weight: 900; color: white;
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
  cursor: pointer;
  touch-action: none;
}
.ss-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.ss-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(26,15,10,0.85) 0%, rgba(26,15,10,0.4) 60%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.ss-hud-left, .ss-hud-right {
  display: flex; align-items: center; gap: 0.5rem;
}
.ss-hud-right { flex-direction: column; align-items: flex-end; gap: 0.3rem; }
.ss-hud-center { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }

.ss-level-badge {
  display: flex; align-items: center; gap: 0.35rem;
  padding: 0.3rem 0.65rem;
  background: rgba(232,151,63,0.1);
  border: 1px solid rgba(232,151,63,0.2);
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

.ss-score-display {
  display: flex; align-items: baseline; gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  background: var(--ss-glass);
  backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--ss-glass-border);
  border-radius: 10px;
}
.ss-score-label {
  font-size: 0.55rem; font-weight: 600;
  color: var(--ss-text-dim); letter-spacing: 2px;
}
.ss-score-num {
  font-size: 1.3rem; font-weight: 900; color: #fff;
  text-shadow: 0 0 12px rgba(255,255,255,0.2);
  animation: ssScorePop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes ssScorePop {
  0% { transform: scale(1.3); color: var(--ss-accent); }
  100% { transform: scale(1); color: #fff; }
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

.ss-mat-indicator {
  font-size: 0.6rem; font-weight: 800; letter-spacing: 2px;
  text-transform: uppercase;
}
.ss-progress {
  font-size: 0.7rem; font-weight: 600; color: var(--ss-text-dim);
}
.ss-speed-timer {
  font-size: 0.85rem; font-weight: 800; color: #fbbf24;
  text-shadow: 0 0 10px rgba(251,191,36,0.4);
  animation: ssSpeedPulse 0.5s ease-in-out infinite alternate;
}
@keyframes ssSpeedPulse {
  0% { opacity: 0.7; } 100% { opacity: 1; }
}
.ss-boss-badge {
  padding: 0.2rem 0.6rem;
  background: rgba(239,68,68,0.15);
  border: 1px solid rgba(239,68,68,0.3);
  border-radius: 6px;
  font-size: 0.6rem; font-weight: 800; color: #ef4444;
  letter-spacing: 2px;
  animation: ssBossPulse 0.8s ease-in-out infinite alternate;
}
@keyframes ssBossPulse {
  0% { opacity: 0.6; box-shadow: 0 0 8px rgba(239,68,68,0.2); }
  100% { opacity: 1; box-shadow: 0 0 16px rgba(239,68,68,0.4); }
}

/* Responsive */
@media (max-width: 500px) {
  .ss-hud-top { padding: 0.3rem 0.4rem; }
  .ss-score-num { font-size: 1rem; }
  .ss-level-badge { padding: 0.2rem 0.5rem; }
  .ss-level-num { font-size: 0.75rem; }
  .ss-logo-deco { display: none; }
  .ss-title { font-size: clamp(1.6rem, 7vw, 2.4rem); }
  .ss-title-sub { font-size: clamp(1.3rem, 5.5vw, 2rem); }
}
`;
