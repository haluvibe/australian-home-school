"use client";
import { useState, useEffect, useCallback, useRef } from 'react';

interface MessageQuestProps {
  onExit?: () => void;
}

/*
  MESSAGE QUEST: A Top-Down Adventure

  A postal carrier delivery game where players read messages,
  follow instructions, and deliver to the correct NPCs.
  Tests reading comprehension, following directions, and
  understanding descriptive language.

  Controls:
  - Arrow Keys / WASD: Move
  - Space: Interact / Deliver
  - Mobile: Virtual joystick + action button
*/

// =============== CONSTANTS ===============
const TILE = 40;
const PLAYER_SPEED = 3.2;
const INTERACT_RADIUS = 50;
const MAP_COLS = 30;
const MAP_ROWS = 22;
const MAP_W = MAP_COLS * TILE;
const MAP_H = MAP_ROWS * TILE;

// Tile types
const T_GRASS = 0;
const T_PATH = 1;
const T_WATER = 2;
const T_WALL = 3;
const T_DOOR = 4;
const T_FLOWER_R = 5;
const T_FLOWER_B = 6;
const T_FLOWER_Y = 7;
const T_FENCE = 8;
const T_TREE = 9;
const T_BRIDGE = 10;

// =============== UTILITIES ===============
let _idCounter = 0;
const nextId = () => ++_idCounter;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const dist = (a: { x: number; y: number }, b: { x: number; y: number }) =>
  Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const randInt = (lo: number, hi: number) => Math.floor(rand(lo, hi + 1));
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// =============== COLOR PALETTE ===============
const COL = {
  grass1: '#6db86b', grass2: '#5eaa5c', grass3: '#7ec47c',
  path: '#d4bc8e', pathEdge: '#c5a96f',
  water: '#5ba4d9', waterDeep: '#4a8fc2', waterShine: '#8ecfff',
  wall: '#8c7a6b', wallDark: '#6b5d50', roof: '#c0574f', roofDark: '#a04840',
  roofBlue: '#5080b0', roofGreen: '#509060',
  door: '#6b4530', doorFrame: '#503520',
  wood: '#a08060', fence: '#c0a070',
  tree: '#3d8040', treeDark: '#2d6830', trunk: '#8b6b4a',
  flower_r: '#e05050', flower_b: '#5080e0', flower_y: '#e0c040',
  bridge: '#b09060',
};

// =============== NPC DEFINITIONS ===============
interface NPCDef {
  id: string;
  name: string;
  role: string;
  x: number; y: number;
  bodyColor: string;
  hatColor: string | null;
  hatStyle: 'chef' | 'straw' | 'beret' | 'cap' | 'none';
  hasGlasses: boolean;
  hairColor: string;
  accessory: string | null; // 'apron', 'rod', 'coat'
  building: string;
  greeting: string;
}

const NPC_DEFS: NPCDef[] = [
  {
    id: 'baker', name: 'Betty the Baker', role: 'Baker',
    x: 7 * TILE, y: 4 * TILE,
    bodyColor: '#f0e0d0', hatColor: '#ffffff', hatStyle: 'chef',
    hasGlasses: false, hairColor: '#d4a050', accessory: 'apron',
    building: 'Bakery', greeting: "Welcome to my bakery! Fresh bread every morning.",
  },
  {
    id: 'farmer', name: 'Frank the Farmer', role: 'Farmer',
    x: 23 * TILE, y: 3 * TILE,
    bodyColor: '#8b6b4a', hatColor: '#d4b060', hatStyle: 'straw',
    hasGlasses: false, hairColor: '#604020', accessory: null,
    building: 'Farm', greeting: "G'day! How's the harvest looking today?",
  },
  {
    id: 'teacher', name: 'Ms. Tran', role: 'Teacher',
    x: 5 * TILE, y: 14 * TILE,
    bodyColor: '#6080b0', hatColor: null, hatStyle: 'none',
    hasGlasses: true, hairColor: '#302020', accessory: null,
    building: 'School', greeting: "Hello there! Learning never stops, does it?",
  },
  {
    id: 'doctor', name: 'Dr. Singh', role: 'Doctor',
    x: 14 * TILE, y: 3 * TILE,
    bodyColor: '#e8e8f0', hatColor: null, hatStyle: 'none',
    hasGlasses: true, hairColor: '#201510', accessory: 'coat',
    building: 'Clinic', greeting: "Good health is the greatest wealth!",
  },
  {
    id: 'fisher', name: 'Old Pete', role: 'Fisherman',
    x: 24 * TILE, y: 14 * TILE,
    bodyColor: '#607090', hatColor: null, hatStyle: 'none',
    hasGlasses: false, hairColor: '#a0a0a0', accessory: 'rod',
    building: 'Pond', greeting: "Shh... the fish are biting today!",
  },
  {
    id: 'artist', name: 'Chloe the Artist', role: 'Artist',
    x: 14 * TILE, y: 19 * TILE,
    bodyColor: '#d080c0', hatColor: '#302050', hatStyle: 'beret',
    hasGlasses: false, hairColor: '#ff6060', accessory: null,
    building: 'Park', greeting: "Every day is a canvas waiting to be painted!",
  },
  {
    id: 'postie', name: 'Sam the Postie', role: 'Postal Worker',
    x: 14 * TILE, y: 10 * TILE,
    bodyColor: '#4060a0', hatColor: '#3050a0', hatStyle: 'cap',
    hasGlasses: false, hairColor: '#503010', accessory: null,
    building: 'Post Office', greeting: "Ready for your next delivery run?",
  },
  {
    id: 'shopkeeper', name: 'Mr. Chen', role: 'Shopkeeper',
    x: 22 * TILE, y: 10 * TILE,
    bodyColor: '#70a060', hatColor: null, hatStyle: 'none',
    hasGlasses: true, hairColor: '#202020', accessory: 'apron',
    building: 'Shop', greeting: "Welcome! Everything's on special today!",
  },
];

// =============== LEVEL / QUEST DATA ===============
interface QuestDef {
  giver: string;
  instructions: string;
  target: string;
  steps?: string[];
  hint?: string;
}

function generateQuests(): QuestDef[][] {
  return [
    // Level 1: Simple direct deliveries
    [
      { giver: 'postie', instructions: "Please take this letter to Betty the Baker.", target: 'baker', hint: "The Bakery is near the top-left of the village." },
      { giver: 'postie', instructions: "Deliver this parcel to Mr. Chen at the Shop.", target: 'shopkeeper', hint: "The Shop is on the right side of the village." },
      { giver: 'postie', instructions: "Bring this note to Ms. Tran at the School.", target: 'teacher', hint: "The School is near the bottom-left." },
    ],
    // Level 2: Role-based delivery
    [
      { giver: 'postie', instructions: "Take this to the person who catches fish at the Pond.", target: 'fisher' },
      { giver: 'postie', instructions: "Deliver this to the person who bakes bread.", target: 'baker' },
      { giver: 'postie', instructions: "Bring this medicine to the Doctor at the Clinic.", target: 'doctor' },
    ],
    // Level 3: Appearance-based descriptions
    [
      { giver: 'postie', instructions: "Deliver this to the person wearing a white chef hat.", target: 'baker' },
      { giver: 'postie', instructions: "Take this to the person wearing a straw hat near the Farm.", target: 'farmer' },
      { giver: 'postie', instructions: "Bring this to the person wearing a beret in the Park.", target: 'artist' },
    ],
    // Level 4: Combined clues
    [
      { giver: 'postie', instructions: "Deliver to the person who wears glasses and works at the School.", target: 'teacher' },
      { giver: 'postie', instructions: "Take this to the person with an apron at the Shop.", target: 'shopkeeper' },
      { giver: 'postie', instructions: "Bring this to the person near the water who has grey hair.", target: 'fisher' },
    ],
    // Level 5: Multi-step instructions
    [
      { giver: 'postie', instructions: "First, pick up a red flower near the School, then deliver it with this note to the Artist in the Park.", target: 'artist', steps: ['flower_r', 'artist'] },
      { giver: 'postie', instructions: "Go to the Bakery and collect a loaf, then bring it to the Farmer.", target: 'farmer', steps: ['baker', 'farmer'] },
      { giver: 'postie', instructions: "Visit the Doctor first to collect the prescription, then deliver it to the Teacher at the School.", target: 'teacher', steps: ['doctor', 'teacher'] },
    ],
    // Level 6: Descriptive + location
    [
      { giver: 'baker', instructions: "Please take these fresh rolls to the person who wears glasses and a white coat.", target: 'doctor' },
      { giver: 'farmer', instructions: "Deliver these apples to the person with a blue cap at the Post Office.", target: 'postie' },
      { giver: 'artist', instructions: "Take my painting to the person with a straw hat who works in the fields.", target: 'farmer' },
    ],
    // Level 7: Negation clues
    [
      { giver: 'postie', instructions: "Deliver to someone who wears glasses but does NOT work at the School.", target: 'doctor' },
      { giver: 'postie', instructions: "Take this to the hat-wearing person who is NOT near the Farm.", target: 'baker' },
      { giver: 'postie', instructions: "Bring this to someone with an apron who is NOT a baker.", target: 'shopkeeper' },
    ],
    // Level 8: Multi-step with conditions
    [
      { giver: 'postie', instructions: "Collect a blue flower near the Pond, then deliver it to the person wearing a beret.", target: 'artist', steps: ['flower_b', 'artist'] },
      { giver: 'doctor', instructions: "Take this prescription to the person who wears glasses at the School, then bring their reply back to me.", target: 'doctor', steps: ['teacher', 'doctor'] },
      { giver: 'shopkeeper', instructions: "Deliver supplies first to the Baker, then to the Farmer with the straw hat.", target: 'farmer', steps: ['baker', 'farmer'] },
    ],
    // Level 9: Complex chained deliveries
    [
      { giver: 'postie', instructions: "Go to the School to get a book from Ms. Tran, bring it to Dr. Singh, then deliver his reply to Old Pete at the Pond.", target: 'fisher', steps: ['teacher', 'doctor', 'fisher'] },
      { giver: 'postie', instructions: "Pick up a yellow flower, take it to the Artist, then deliver her painting to Mr. Chen at the Shop.", target: 'shopkeeper', steps: ['flower_y', 'artist', 'shopkeeper'] },
      { giver: 'farmer', instructions: "Take these vegetables to the Baker, collect the bread she baked, and bring it to the Teacher.", target: 'teacher', steps: ['baker', 'teacher'] },
    ],
    // Level 10: Ultimate challenge
    [
      { giver: 'postie', instructions: "Collect a red flower, deliver it with a note to the person wearing glasses who is NOT a shopkeeper, then take their reply to the hat-wearing person near the Farm.", target: 'farmer', steps: ['flower_r', 'doctor', 'farmer'] },
      { giver: 'postie', instructions: "Visit the person with a beret, get a painting, deliver it to the person in a white coat, then bring their thank-you note to the person near the Pond with grey hair.", target: 'fisher', steps: ['artist', 'doctor', 'fisher'] },
      { giver: 'postie', instructions: "Get bread from the Baker, apples from the Farmer, and deliver both to the Teacher at the School. Then bring her report card to the Postal Worker.", target: 'postie', steps: ['baker', 'farmer', 'teacher', 'postie'] },
    ],
  ];
}

// =============== MAP GENERATION ===============
function generateMap(): number[][] {
  const m: number[][] = [];
  for (let r = 0; r < MAP_ROWS; r++) {
    m[r] = [];
    for (let c = 0; c < MAP_COLS; c++) {
      m[r][c] = T_GRASS;
    }
  }

  // Paths - horizontal main road
  for (let c = 0; c < MAP_COLS; c++) {
    m[10][c] = T_PATH; m[11][c] = T_PATH;
  }
  // Vertical main road
  for (let r = 0; r < MAP_ROWS; r++) {
    m[r][14] = T_PATH; m[r][15] = T_PATH;
  }
  // Side paths to buildings
  // Path to bakery (top-left)
  for (let r = 5; r <= 10; r++) { m[r][6] = T_PATH; m[r][7] = T_PATH; }
  for (let c = 7; c <= 14; c++) { m[5][c] = T_PATH; }
  // Path to farm (top-right)
  for (let r = 4; r <= 10; r++) { m[r][22] = T_PATH; m[r][23] = T_PATH; }
  for (let c = 15; c <= 22; c++) { m[4][c] = T_PATH; }
  // Path to clinic
  for (let c = 13; c <= 15; c++) { m[4][c] = T_PATH; }
  // Path to school (bottom-left)
  for (let r = 11; r <= 15; r++) { m[r][5] = T_PATH; m[r][6] = T_PATH; }
  for (let c = 5; c <= 14; c++) { m[15][c] = T_PATH; }
  // Path to pond area (right)
  for (let c = 15; c <= 25; c++) { m[14][c] = T_PATH; }
  // Path to shop
  for (let r = 10; r <= 11; r++) { for (let c = 15; c <= 22; c++) { m[r][c] = T_PATH; } }
  // Path to park (bottom center)
  for (let r = 11; r <= 19; r++) { m[r][14] = T_PATH; m[r][15] = T_PATH; }
  for (let c = 12; c <= 17; c++) { m[19][c] = T_PATH; }

  // Pond (right side)
  for (let r = 12; r <= 16; r++) {
    for (let c = 22; c <= 27; c++) {
      const dr = r - 14, dc = c - 24.5;
      if (dr * dr / 6 + dc * dc / 8 < 1) {
        m[r][c] = T_WATER;
      }
    }
  }
  // Bridge over pond path
  m[14][22] = T_BRIDGE; m[14][23] = T_BRIDGE;

  // Buildings (walls)
  // Bakery (top-left)
  for (let r = 2; r <= 4; r++) for (let c = 4; c <= 8; c++) m[r][c] = T_WALL;
  m[4][6] = T_DOOR;
  // Farm barn (top-right)
  for (let r = 1; r <= 3; r++) for (let c = 21; c <= 25; c++) m[r][c] = T_WALL;
  m[3][23] = T_DOOR;
  // Clinic (top center)
  for (let r = 1; r <= 3; r++) for (let c = 12; c <= 16; c++) m[r][c] = T_WALL;
  m[3][14] = T_DOOR;
  // School (bottom-left)
  for (let r = 13; r <= 15; r++) for (let c = 2; c <= 7; c++) m[r][c] = T_WALL;
  m[13][5] = T_DOOR;
  // Post Office (center)
  for (let r = 8; r <= 10; r++) for (let c = 12; c <= 16; c++) m[r][c] = T_WALL;
  m[10][14] = T_DOOR;
  // Shop (right-center)
  for (let r = 8; r <= 10; r++) for (let c = 20; c <= 24; c++) m[r][c] = T_WALL;
  m[10][22] = T_DOOR;

  // Trees scattered
  const treeSpots = [
    [0,0],[0,2],[0,10],[0,12],[0,20],[0,28],
    [1,0],[1,10],[1,19],[1,28],
    [6,0],[6,2],[6,10],[6,26],[6,28],
    [7,1],[7,28],
    [17,0],[17,2],[17,8],[17,26],[17,28],
    [18,1],[18,27],
    [20,0],[20,3],[20,8],[20,24],[20,27],
    [21,0],[21,2],[21,5],[21,10],[21,14],[21,20],[21,26],[21,28],
  ];
  for (const [r, c] of treeSpots) {
    if (r < MAP_ROWS && c < MAP_COLS && m[r][c] === T_GRASS) m[r][c] = T_TREE;
  }

  // Fences around farm area
  for (let c = 19; c <= 27; c++) { if (m[5][c] === T_GRASS) m[5][c] = T_FENCE; }
  for (let r = 4; r <= 5; r++) { if (m[r][19] === T_GRASS) m[r][19] = T_FENCE; if (m[r][27] === T_GRASS) m[r][27] = T_FENCE; }

  // Flowers near school and park
  const flowerSpots: [number, number, number][] = [
    [12, 3, T_FLOWER_R], [12, 4, T_FLOWER_B], [16, 3, T_FLOWER_Y],
    [16, 7, T_FLOWER_R], [18, 12, T_FLOWER_B], [18, 17, T_FLOWER_Y],
    [20, 13, T_FLOWER_R], [20, 16, T_FLOWER_B],
    [15, 25, T_FLOWER_B], [15, 26, T_FLOWER_B],
  ];
  for (const [r, c, t] of flowerSpots) {
    if (r < MAP_ROWS && c < MAP_COLS && m[r][c] === T_GRASS) m[r][c] = t;
  }

  return m;
}

// =============== BUILDING METADATA ===============
interface BuildingMeta {
  label: string;
  roofColor: string;
  rows: [number, number]; cols: [number, number];
}
const BUILDINGS: BuildingMeta[] = [
  { label: 'Bakery', roofColor: COL.roof, rows: [2, 4], cols: [4, 8] },
  { label: 'Farm', roofColor: COL.roofGreen, rows: [1, 3], cols: [21, 25] },
  { label: 'Clinic', roofColor: COL.roofBlue, rows: [1, 3], cols: [12, 16] },
  { label: 'School', roofColor: COL.roof, rows: [13, 15], cols: [2, 7] },
  { label: 'Post Office', roofColor: COL.roofBlue, rows: [8, 10], cols: [12, 16] },
  { label: 'Shop', roofColor: COL.roofGreen, rows: [8, 10], cols: [20, 24] },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type G = any;

// =============== MAIN COMPONENT ===============
export default function MessageQuest({ onExit }: MessageQuestProps = {}) {
  const [screen, setScreen] = useState<'intro' | 'playing' | 'complete'>('intro');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const gRef = useRef<G>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const prevTimeRef = useRef(0);
  const touchRef = useRef<{ active: boolean; sx: number; sy: number; cx: number; cy: number; action: boolean }>({
    active: false, sx: 0, sy: 0, cx: 0, cy: 0, action: false,
  });

  const [hud, setHud] = useState({
    level: 1, questText: '', coins: 0, deliveries: 0, totalDeliveries: 0,
    stepText: '', dialogName: '', dialogText: '', dialogChoices: null as string[] | null,
    showDialog: false, timerSec: 0, starsCollected: 0,
    inventory: [] as string[],
  });

  // ========== INIT ==========
  const initGame = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const W = wrap.clientWidth;
    const H = wrap.clientHeight;
    const cvs = canvasRef.current;
    if (!cvs) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cvs.width = W * dpr;
    cvs.height = H * dpr;
    cvs.style.width = W + 'px';
    cvs.style.height = H + 'px';

    _idCounter = 0;
    const map = generateMap();
    const allQuests = generateQuests();

    // Stars placed in hidden spots
    const stars = [
      { id: nextId(), x: 2 * TILE, y: 7 * TILE, collected: false },
      { id: nextId(), x: 27 * TILE, y: 6 * TILE, collected: false },
      { id: nextId(), x: 10 * TILE, y: 18 * TILE, collected: false },
      { id: nextId(), x: 26 * TILE, y: 18 * TILE, collected: false },
      { id: nextId(), x: 1 * TILE, y: 20 * TILE, collected: false },
      { id: nextId(), x: 18 * TILE, y: 1 * TILE, collected: false },
      { id: nextId(), x: 9 * TILE, y: 12 * TILE, collected: false },
      { id: nextId(), x: 28 * TILE, y: 10 * TILE, collected: false },
    ];

    // NPCs as runtime objects
    const npcs = NPC_DEFS.map(d => ({
      ...d,
      facing: 'down' as string,
      bobTimer: Math.random() * Math.PI * 2,
      talkCooldown: 0,
    }));

    const firstLevel = allQuests[0];
    const firstQuest = firstLevel[0];

    gRef.current = {
      W, H, dpr, map,
      player: {
        x: 14 * TILE, y: 11 * TILE,
        facing: 'down', walkTimer: 0, speed: PLAYER_SPEED,
      },
      camera: { x: 0, y: 0 },
      npcs,
      stars,
      particles: [],
      texts: [],
      allQuests,
      levelIdx: 0,
      questIdx: 0,
      currentQuest: firstQuest,
      questStepIdx: 0,
      inventory: [] as string[],
      coins: 0,
      deliveries: 0,
      totalDeliveries: allQuests.reduce((s, l) => s + l.length, 0),
      starsCollected: 0,
      dialog: null as null | { name: string; text: string; choices: string[] | null; onChoice?: (i: number) => void },
      dialogCooldown: 0,
      interactCooldown: 0,
      time: 0,
      startTime: 0,
      hudTick: 0,
      shake: 0,
      levelComplete: false,
      levelCompleteTimer: 0,
      gameComplete: false,
      celebrationTimer: 0,
      // Flower pickup tracking
      flowerPickups: [] as { x: number; y: number; type: number; collected: boolean }[],
    };

    // Mark flower positions for quest pickup
    for (let r = 0; r < MAP_ROWS; r++) {
      for (let c = 0; c < MAP_COLS; c++) {
        if (map[r][c] === T_FLOWER_R || map[r][c] === T_FLOWER_B || map[r][c] === T_FLOWER_Y) {
          gRef.current.flowerPickups.push({
            x: c * TILE + TILE / 2, y: r * TILE + TILE / 2,
            type: map[r][c], collected: false,
          });
        }
      }
    }

    // Show initial quest dialog
    gRef.current.dialog = {
      name: 'Sam the Postie',
      text: firstQuest.instructions,
      choices: null,
    };

    setHud({
      level: 1, questText: firstQuest.instructions,
      coins: 0, deliveries: 0,
      totalDeliveries: gRef.current.totalDeliveries,
      stepText: '', dialogName: 'Sam the Postie',
      dialogText: firstQuest.instructions,
      dialogChoices: null, showDialog: true, timerSec: 0,
      starsCollected: 0, inventory: [],
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, initGame]);

  // ========== ADVANCE QUEST ==========
  function advanceQuest(g: G) {
    g.questIdx++;
    if (g.questIdx >= g.allQuests[g.levelIdx].length) {
      // Level complete
      g.levelIdx++;
      g.questIdx = 0;
      if (g.levelIdx >= g.allQuests.length) {
        // Game complete!
        g.gameComplete = true;
        g.celebrationTimer = 200;
        return;
      }
      g.levelComplete = true;
      g.levelCompleteTimer = 120;
    }
    if (!g.gameComplete && !g.levelComplete) {
      startCurrentQuest(g);
    }
  }

  function startCurrentQuest(g: G) {
    const quest = g.allQuests[g.levelIdx][g.questIdx];
    g.currentQuest = quest;
    g.questStepIdx = 0;
    g.inventory = [];
    g.dialog = {
      name: NPC_DEFS.find(n => n.id === quest.giver)?.name || 'Postie',
      text: quest.instructions,
      choices: null,
    };
  }

  function afterLevelComplete(g: G) {
    g.levelComplete = false;
    startCurrentQuest(g);
  }

  // ========== CHECK DELIVERY ==========
  function tryDeliver(g: G, npc: G) {
    const quest = g.currentQuest as QuestDef;
    if (!quest) return;

    const steps = quest.steps;
    if (steps && steps.length > 0) {
      // Multi-step quest
      const currentStep = steps[g.questStepIdx];
      if (!currentStep) return;

      // Check if step is a flower pickup
      if (currentStep.startsWith('flower_')) {
        // This is handled in flower pickup, not NPC delivery
        g.dialog = { name: npc.name, text: "I don't think that's for me right now. Check your instructions!", choices: null };
        return;
      }

      if (npc.id === currentStep) {
        g.questStepIdx++;
        if (g.questStepIdx >= steps.length) {
          // Quest complete!
          completeDelivery(g, npc);
        } else {
          // Step done, show progress
          const nextStep = steps[g.questStepIdx];
          let stepMsg = "Got it! ";
          if (nextStep.startsWith('flower_')) {
            const color = nextStep === 'flower_r' ? 'red' : nextStep === 'flower_b' ? 'blue' : 'yellow';
            stepMsg += `Now find a ${color} flower.`;
          } else {
            const nextNpc = NPC_DEFS.find(n => n.id === nextStep);
            stepMsg += `Now go to ${nextNpc?.name || nextStep}.`;
          }
          g.dialog = { name: npc.name, text: stepMsg, choices: null };
          spawnStepParticles(g, npc.x, npc.y);
        }
      } else {
        g.dialog = { name: npc.name, text: "That's not for me! Read the instructions carefully.", choices: null };
        g.shake = 5;
      }
    } else {
      // Simple single-target quest
      if (npc.id === quest.target) {
        completeDelivery(g, npc);
      } else {
        g.dialog = { name: npc.name, text: "Hmm, I don't think that message is for me. Try someone else!", choices: null };
        g.shake = 5;
      }
    }
  }

  function completeDelivery(g: G, npc: G) {
    g.deliveries++;
    const bonus = (g.levelIdx + 1) * 10;
    g.coins += bonus;
    g.dialog = {
      name: npc.name,
      text: `Thank you for the delivery! Here are ${bonus} coins!`,
      choices: null,
    };
    // Celebration particles
    for (let i = 0; i < 25; i++) {
      g.particles.push({
        x: npc.x + rand(-20, 20), y: npc.y - 20 + rand(-10, 10),
        vx: rand(-4, 4), vy: rand(-5, -1),
        life: 40 + rand(0, 30), maxL: 70,
        color: pick(['#ffd700', '#ff6b6b', '#4ade80', '#38bdf8', '#a78bfa']),
        sz: 2 + rand(0, 4),
      });
    }
    g.texts.push({
      x: npc.x, y: npc.y - 40,
      text: `+${bonus} coins!`, color: '#ffd700',
      life: 80, maxL: 80, vy: -1.5, sz: 18,
    });
    g.shake = 3;
    g.inventory = [];

    // Advance after dialog close
    setTimeout(() => {
      if (gRef.current) advanceQuest(gRef.current);
    }, 800);
  }

  function spawnStepParticles(g: G, x: number, y: number) {
    for (let i = 0; i < 12; i++) {
      g.particles.push({
        x: x + rand(-10, 10), y: y + rand(-10, 10),
        vx: rand(-3, 3), vy: rand(-3, -0.5),
        life: 25 + rand(0, 15), maxL: 40,
        color: pick(['#4ade80', '#38bdf8']),
        sz: 2 + rand(0, 3),
      });
    }
  }

  // ========== TRY FLOWER PICKUP ==========
  function tryFlowerPickup(g: G) {
    const quest = g.currentQuest as QuestDef;
    if (!quest || !quest.steps) return false;
    const currentStep = quest.steps[g.questStepIdx];
    if (!currentStep || !currentStep.startsWith('flower_')) return false;

    const targetType = currentStep === 'flower_r' ? T_FLOWER_R : currentStep === 'flower_b' ? T_FLOWER_B : T_FLOWER_Y;
    const colorName = currentStep === 'flower_r' ? 'red' : currentStep === 'flower_b' ? 'blue' : 'yellow';

    for (const fp of g.flowerPickups) {
      if (fp.collected) continue;
      if (fp.type === targetType && dist(g.player, fp) < INTERACT_RADIUS) {
        fp.collected = true;
        g.questStepIdx++;
        g.inventory.push(colorName + ' flower');
        g.dialog = {
          name: 'You',
          text: `Picked up a ${colorName} flower!`,
          choices: null,
        };
        spawnStepParticles(g, fp.x, fp.y);
        return true;
      }
    }
    return false;
  }

  // ========== UPDATE ==========
  function update(dt: number) {
    const g = gRef.current;
    if (!g) return;
    g.time += dt;
    if (g.shake > 0) { g.shake *= 0.9; if (g.shake < 0.2) g.shake = 0; }

    const k = keysRef.current;
    const t = touchRef.current;
    const p = g.player;

    // Game complete celebration
    if (g.gameComplete) {
      g.celebrationTimer -= dt;
      if (g.celebrationTimer > 0 && Math.random() < 0.3) {
        g.particles.push({
          x: p.x + rand(-100, 100), y: p.y + rand(-80, 30),
          vx: rand(-3, 3), vy: rand(-4, -1),
          life: 40 + rand(0, 30), maxL: 70,
          color: pick(['#ffd700', '#ff6b6b', '#4ade80', '#38bdf8', '#a78bfa', '#fb923c']),
          sz: 3 + rand(0, 5),
        });
      }
      if (g.celebrationTimer <= -60) {
        setScreen('complete');
      }
      // Still update particles/texts
      updateParticlesAndTexts(g, dt);
      updateCamera(g);
      updateHud(g, dt);
      return;
    }

    // Level complete pause
    if (g.levelComplete) {
      g.levelCompleteTimer -= dt;
      if (g.levelCompleteTimer <= 0) {
        afterLevelComplete(g);
      }
      updateParticlesAndTexts(g, dt);
      updateCamera(g);
      updateHud(g, dt);
      return;
    }

    // Dialog open — skip movement
    if (g.dialog) {
      g.dialogCooldown = 10;
      if ((k[' '] || k['Enter'] || t.action) && g.interactCooldown <= 0) {
        g.dialog = null;
        g.interactCooldown = 15;
        k[' '] = false;
        k['Enter'] = false;
        t.action = false;
      }
      updateParticlesAndTexts(g, dt);
      updateCamera(g);
      updateHud(g, dt);
      return;
    }

    if (g.dialogCooldown > 0) g.dialogCooldown -= dt;
    if (g.interactCooldown > 0) g.interactCooldown -= dt;

    // ---- Player movement ----
    let dx = 0, dy = 0;
    if (k['ArrowLeft'] || k['a'] || k['A']) dx -= 1;
    if (k['ArrowRight'] || k['d'] || k['D']) dx += 1;
    if (k['ArrowUp'] || k['w'] || k['W']) dy -= 1;
    if (k['ArrowDown'] || k['s'] || k['S']) dy += 1;

    // Touch joystick
    if (t.active) {
      const tdx = t.cx - t.sx;
      const tdy = t.cy - t.sy;
      const td = Math.hypot(tdx, tdy);
      if (td > 10) {
        dx = tdx / td;
        dy = tdy / td;
      }
    }

    if (dx && dy) { dx *= 0.707; dy *= 0.707; }

    const moving = dx !== 0 || dy !== 0;
    if (moving) {
      p.walkTimer += dt * 0.2;
      // Set facing
      if (Math.abs(dx) > Math.abs(dy)) {
        p.facing = dx > 0 ? 'right' : 'left';
      } else {
        p.facing = dy > 0 ? 'down' : 'up';
      }
    }

    const nx = p.x + dx * p.speed * dt;
    const ny = p.y + dy * p.speed * dt;

    // Collision check
    const pr = 12; // player collision radius
    if (!isBlocked(g, nx, p.y, pr)) p.x = nx;
    if (!isBlocked(g, p.x, ny, pr)) p.y = ny;

    // Clamp to map
    p.x = clamp(p.x, pr, MAP_W - pr);
    p.y = clamp(p.y, pr, MAP_H - pr);

    // ---- Interact ----
    if ((k[' '] || k['Enter'] || t.action) && g.interactCooldown <= 0 && g.dialogCooldown <= 0) {
      k[' '] = false;
      k['Enter'] = false;
      t.action = false;
      g.interactCooldown = 15;

      // Try flower pickup first
      if (tryFlowerPickup(g)) {
        // handled
      } else {
        // Find nearest NPC
        let nearest: G = null;
        let nearDist = INTERACT_RADIUS;
        for (const npc of g.npcs) {
          const d = dist(p, npc);
          if (d < nearDist) { nearDist = d; nearest = npc; }
        }

        if (nearest) {
          const quest = g.currentQuest as QuestDef;
          // Check if this NPC is the quest giver and we haven't started yet
          if (nearest.id === quest.giver && g.questStepIdx === 0 && (!quest.steps || quest.steps.length === 0)) {
            // Giver repeats instructions
            g.dialog = { name: nearest.name, text: quest.instructions, choices: null };
          } else if (quest && g.questStepIdx >= 0) {
            // Try to deliver
            tryDeliver(g, nearest);
          } else {
            g.dialog = { name: nearest.name, text: nearest.greeting, choices: null };
          }
        }
      }
    }

    // ---- Star collection ----
    for (const star of g.stars) {
      if (!star.collected && dist(p, star) < 30) {
        star.collected = true;
        g.starsCollected++;
        g.coins += 5;
        g.texts.push({
          x: star.x, y: star.y - 15,
          text: '+5', color: '#ffd700',
          life: 50, maxL: 50, vy: -2, sz: 16,
        });
        for (let i = 0; i < 8; i++) {
          g.particles.push({
            x: star.x, y: star.y,
            vx: rand(-3, 3), vy: rand(-3, 0),
            life: 20 + rand(0, 15), maxL: 35,
            color: '#ffd700', sz: 2 + rand(0, 3),
          });
        }
      }
    }

    // ---- NPC bob ----
    for (const npc of g.npcs) {
      npc.bobTimer += dt * 0.05;
    }

    updateParticlesAndTexts(g, dt);
    updateCamera(g);
    updateHud(g, dt);
  }

  function updateParticlesAndTexts(g: G, dt: number) {
    g.particles = g.particles.filter((p: G) => {
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 0.97; p.vy *= 0.97;
      p.life -= dt;
      return p.life > 0;
    });
    g.texts = g.texts.filter((t: G) => {
      t.y += (t.vy || 0) * dt;
      t.life -= dt;
      return t.life > 0;
    });
  }

  function updateCamera(g: G) {
    const p = g.player;
    const targetX = p.x - g.W / (2 * g.dpr) * g.dpr;
    const targetY = p.y - g.H / (2 * g.dpr) * g.dpr;
    // Use logical viewport for camera
    const vw = g.W;
    const vh = g.H;
    const tx = p.x - vw / 2;
    const ty = p.y - vh / 2;
    g.camera.x = lerp(g.camera.x, clamp(tx, 0, Math.max(0, MAP_W - vw)), 0.1);
    g.camera.y = lerp(g.camera.y, clamp(ty, 0, Math.max(0, MAP_H - vh)), 0.1);
  }

  function updateHud(g: G, dt: number) {
    g.hudTick += dt;
    if (g.hudTick > 3) {
      g.hudTick = 0;
      setHud({
        level: g.levelIdx + 1,
        questText: g.currentQuest?.instructions || '',
        coins: g.coins,
        deliveries: g.deliveries,
        totalDeliveries: g.totalDeliveries,
        stepText: '',
        dialogName: g.dialog?.name || '',
        dialogText: g.dialog?.text || '',
        dialogChoices: g.dialog?.choices || null,
        showDialog: !!g.dialog,
        timerSec: Math.floor(g.time * 16.667 / 1000),
        starsCollected: g.starsCollected,
        inventory: [...(g.inventory || [])],
      });
    }
  }

  // ========== COLLISION ==========
  function isBlocked(g: G, x: number, y: number, r: number): boolean {
    // Check 4 corners of bounding box
    const checks = [
      [x - r, y - r], [x + r, y - r],
      [x - r, y + r], [x + r, y + r],
    ];
    for (const [cx, cy] of checks) {
      const col = Math.floor(cx / TILE);
      const row = Math.floor(cy / TILE);
      if (col < 0 || col >= MAP_COLS || row < 0 || row >= MAP_ROWS) return true;
      const tile = g.map[row][col];
      if (tile === T_WALL || tile === T_WATER || tile === T_TREE || tile === T_FENCE) {
        // Allow bridge
        if (tile === T_WATER) {
          // Check if on bridge
          const bCol = Math.floor(x / TILE);
          const bRow = Math.floor(y / TILE);
          if (bRow >= 0 && bRow < MAP_ROWS && bCol >= 0 && bCol < MAP_COLS && g.map[bRow][bCol] === T_BRIDGE) continue;
        }
        return true;
      }
    }
    return false;
  }

  // ========== DRAW ==========
  function draw() {
    const g = gRef.current;
    const cvs = canvasRef.current;
    if (!g || !cvs) return;
    const ctx = cvs.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(g.dpr, g.dpr);

    const { W, H } = g;
    const cam = g.camera;

    // Shake
    const sx = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;
    const sy = g.shake > 0 ? (Math.random() - 0.5) * g.shake : 0;

    ctx.save();
    ctx.translate(-cam.x + sx, -cam.y + sy);

    // ======= DRAW TILES =======
    const startCol = Math.max(0, Math.floor(cam.x / TILE) - 1);
    const endCol = Math.min(MAP_COLS, Math.ceil((cam.x + W) / TILE) + 1);
    const startRow = Math.max(0, Math.floor(cam.y / TILE) - 1);
    const endRow = Math.min(MAP_ROWS, Math.ceil((cam.y + H) / TILE) + 1);

    for (let r = startRow; r < endRow; r++) {
      for (let c = startCol; c < endCol; c++) {
        const tx = c * TILE, ty = r * TILE;
        const tile = g.map[r][c];
        drawTile(ctx, tile, tx, ty, g.time, r, c);
      }
    }

    // ======= DRAW BUILDINGS (roofs) =======
    for (const bld of BUILDINGS) {
      drawBuilding(ctx, bld, g.time);
    }

    // ======= DRAW STARS =======
    for (const star of g.stars) {
      if (star.collected) continue;
      const pulse = 0.8 + Math.sin(g.time * 0.12 + star.id) * 0.2;
      ctx.save();
      ctx.translate(star.x, star.y);

      // Glow
      const sg = ctx.createRadialGradient(0, 0, 0, 0, 0, 16 * pulse);
      sg.addColorStop(0, 'rgba(255,215,0,0.5)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg;
      ctx.beginPath(); ctx.arc(0, 0, 16 * pulse, 0, Math.PI * 2); ctx.fill();

      // Star shape
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        const ox = Math.cos(a) * 8 * pulse;
        const oy = Math.sin(a) * 8 * pulse;
        const ia = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
        const ix = Math.cos(ia) * 3.5 * pulse;
        const iy = Math.sin(ia) * 3.5 * pulse;
        if (i === 0) ctx.moveTo(ox, oy);
        else ctx.lineTo(ox, oy);
        ctx.lineTo(ix, iy);
      }
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }

    // ======= DRAW NPCs (sorted by y for depth) =======
    const sortedNpcs = [...g.npcs].sort((a: G, b: G) => a.y - b.y);
    for (const npc of sortedNpcs) {
      // Don't draw NPC if behind player, draw player separately
      if (npc.y < g.player.y) drawNPC(ctx, npc, g);
    }

    // ======= DRAW PLAYER =======
    drawPlayer(ctx, g);

    // NPCs in front of player
    for (const npc of sortedNpcs) {
      if (npc.y >= g.player.y) drawNPC(ctx, npc, g);
    }

    // ======= PARTICLES =======
    for (const pt of g.particles) {
      const a = pt.life / pt.maxL;
      ctx.globalAlpha = a * a;
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.sz * a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // ======= TEXT EFFECTS =======
    for (const t of g.texts) {
      const a = Math.min(1, t.life / (t.maxL * 0.3));
      ctx.globalAlpha = a;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.sz}px 'Outfit', sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 4;
      ctx.fillText(t.text, t.x, t.y);
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;

    // ======= INTERACTION PROMPT =======
    if (!g.dialog) {
      // Show prompt near nearest interactable
      let nearest: G = null;
      let nearDist = INTERACT_RADIUS;
      for (const npc of g.npcs) {
        const d = dist(g.player, npc);
        if (d < nearDist) { nearDist = d; nearest = npc; }
      }
      if (nearest) {
        const pulse = 0.7 + Math.sin(g.time * 0.15) * 0.3;
        ctx.globalAlpha = pulse;
        ctx.fillStyle = '#ffffff';
        ctx.font = "bold 12px 'Outfit', sans-serif";
        ctx.textAlign = 'center';
        ctx.fillText('[SPACE] Talk', nearest.x, nearest.y - 35);
        ctx.globalAlpha = 1;
      }

      // Flower pickup prompt
      const quest = g.currentQuest as QuestDef;
      if (quest?.steps) {
        const step = quest.steps[g.questStepIdx];
        if (step?.startsWith('flower_')) {
          const targetType = step === 'flower_r' ? T_FLOWER_R : step === 'flower_b' ? T_FLOWER_B : T_FLOWER_Y;
          for (const fp of g.flowerPickups) {
            if (!fp.collected && fp.type === targetType && dist(g.player, fp) < INTERACT_RADIUS) {
              const pulse = 0.7 + Math.sin(g.time * 0.15) * 0.3;
              ctx.globalAlpha = pulse;
              ctx.fillStyle = '#ffffff';
              ctx.font = "bold 12px 'Outfit', sans-serif";
              ctx.textAlign = 'center';
              ctx.fillText('[SPACE] Pick up', fp.x, fp.y - 20);
              ctx.globalAlpha = 1;
            }
          }
        }
      }
    }

    ctx.restore(); // end camera transform

    // ======= DRAW MINIMAP =======
    drawMinimap(ctx, g);

    // ======= DRAW COMPASS =======
    drawCompass(ctx, g);

    // ======= DIALOG BOX =======
    if (g.dialog) {
      drawDialog(ctx, g);
    }

    // ======= LEVEL COMPLETE OVERLAY =======
    if (g.levelComplete) {
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#ffd700';
      ctx.font = "bold 32px 'Fraunces', serif";
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 8;
      ctx.fillText(`Level ${g.levelIdx} Complete!`, W / 2, H / 2 - 15);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillText(`Starting Level ${g.levelIdx + 1}...`, W / 2, H / 2 + 20);
    }

    // ======= GAME COMPLETE OVERLAY =======
    if (g.gameComplete) {
      const alpha = clamp((200 - g.celebrationTimer) / 60, 0, 0.6);
      ctx.fillStyle = `rgba(0,0,0,${alpha})`;
      ctx.fillRect(0, 0, W, H);
      if (g.celebrationTimer < 140) {
        ctx.fillStyle = '#ffd700';
        ctx.font = "bold 36px 'Fraunces', serif";
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(255,215,0,0.4)'; ctx.shadowBlur = 12;
        ctx.fillText('All Deliveries Complete!', W / 2, H / 2 - 20);
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#ffffff';
        ctx.font = "18px 'Outfit', sans-serif";
        ctx.fillText(`${g.coins} coins earned`, W / 2, H / 2 + 20);
      }
    }

    ctx.restore(); // end dpr scale
  }

  // ======= TILE DRAWING =======
  function drawTile(ctx: CanvasRenderingContext2D, tile: number, tx: number, ty: number, time: number, row: number, col: number) {
    switch (tile) {
      case T_GRASS: {
        ctx.fillStyle = (row + col) % 2 === 0 ? COL.grass1 : COL.grass2;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Occasional grass detail
        if ((row * 7 + col * 13) % 5 === 0) {
          ctx.fillStyle = COL.grass3;
          ctx.fillRect(tx + 8, ty + 12, 3, 8);
          ctx.fillRect(tx + 22, ty + 6, 3, 7);
        }
        break;
      }
      case T_PATH: {
        ctx.fillStyle = COL.path;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Path texture dots
        ctx.fillStyle = COL.pathEdge;
        if ((row * 3 + col * 7) % 4 === 0) {
          ctx.beginPath();
          ctx.arc(tx + 12, ty + 15, 2, 0, Math.PI * 2);
          ctx.fill();
        }
        if ((row * 11 + col * 3) % 5 === 0) {
          ctx.beginPath();
          ctx.arc(tx + 28, ty + 30, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case T_WATER: {
        ctx.fillStyle = COL.water;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Animated ripples
        const ripple = Math.sin(time * 0.06 + row * 0.5 + col * 0.7) * 0.3;
        ctx.fillStyle = `rgba(142,207,255,${0.2 + ripple})`;
        ctx.beginPath();
        ctx.arc(tx + 20 + Math.sin(time * 0.04 + col) * 5, ty + 20, 6, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case T_WALL: {
        ctx.fillStyle = COL.wall;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Brick lines
        ctx.strokeStyle = COL.wallDark;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(tx, ty + TILE / 2);
        ctx.lineTo(tx + TILE, ty + TILE / 2);
        ctx.stroke();
        const offset = row % 2 === 0 ? TILE / 2 : 0;
        ctx.beginPath();
        ctx.moveTo(tx + offset, ty);
        ctx.lineTo(tx + offset, ty + TILE / 2);
        ctx.stroke();
        break;
      }
      case T_DOOR: {
        ctx.fillStyle = COL.path;
        ctx.fillRect(tx, ty, TILE, TILE);
        ctx.fillStyle = COL.door;
        ctx.fillRect(tx + 10, ty + 2, 20, TILE - 2);
        ctx.fillStyle = COL.doorFrame;
        ctx.fillRect(tx + 8, ty, 24, 3);
        // Doorknob
        ctx.fillStyle = '#d4a050';
        ctx.beginPath(); ctx.arc(tx + 25, ty + 22, 2, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case T_FLOWER_R:
      case T_FLOWER_B:
      case T_FLOWER_Y: {
        // Grass base
        ctx.fillStyle = (row + col) % 2 === 0 ? COL.grass1 : COL.grass2;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Flower
        const fc = tile === T_FLOWER_R ? COL.flower_r : tile === T_FLOWER_B ? COL.flower_b : COL.flower_y;
        // Stem
        ctx.strokeStyle = '#3d8040';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(tx + 20, ty + 35); ctx.lineTo(tx + 20, ty + 18); ctx.stroke();
        // Petals
        ctx.fillStyle = fc;
        for (let i = 0; i < 5; i++) {
          const a = (i / 5) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(tx + 20 + Math.cos(a) * 5, ty + 15 + Math.sin(a) * 5, 4, 0, Math.PI * 2);
          ctx.fill();
        }
        // Center
        ctx.fillStyle = '#ffd700';
        ctx.beginPath(); ctx.arc(tx + 20, ty + 15, 3, 0, Math.PI * 2); ctx.fill();
        break;
      }
      case T_FENCE: {
        ctx.fillStyle = (row + col) % 2 === 0 ? COL.grass1 : COL.grass2;
        ctx.fillRect(tx, ty, TILE, TILE);
        ctx.fillStyle = COL.fence;
        // Posts
        ctx.fillRect(tx + 3, ty + 10, 4, 25);
        ctx.fillRect(tx + 33, ty + 10, 4, 25);
        // Rails
        ctx.fillRect(tx, ty + 14, TILE, 3);
        ctx.fillRect(tx, ty + 26, TILE, 3);
        break;
      }
      case T_TREE: {
        ctx.fillStyle = (row + col) % 2 === 0 ? COL.grass1 : COL.grass2;
        ctx.fillRect(tx, ty, TILE, TILE);
        // Trunk
        ctx.fillStyle = COL.trunk;
        ctx.fillRect(tx + 16, ty + 22, 8, 16);
        // Canopy
        ctx.fillStyle = COL.tree;
        ctx.beginPath();
        ctx.arc(tx + 20, ty + 16, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = COL.treeDark;
        ctx.beginPath();
        ctx.arc(tx + 17, ty + 18, 8, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case T_BRIDGE: {
        ctx.fillStyle = COL.water;
        ctx.fillRect(tx, ty, TILE, TILE);
        ctx.fillStyle = COL.bridge;
        ctx.fillRect(tx, ty + 5, TILE, TILE - 10);
        // Planks
        ctx.strokeStyle = '#907050';
        ctx.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
          const px = tx + 5 + i * 10;
          ctx.beginPath(); ctx.moveTo(px, ty + 5); ctx.lineTo(px, ty + TILE - 5); ctx.stroke();
        }
        // Rails
        ctx.fillStyle = '#705030';
        ctx.fillRect(tx, ty + 3, TILE, 3);
        ctx.fillRect(tx, ty + TILE - 6, TILE, 3);
        break;
      }
    }
  }

  // ======= BUILDING DRAWING =======
  function drawBuilding(ctx: CanvasRenderingContext2D, bld: BuildingMeta, _time: number) {
    const x = bld.cols[0] * TILE;
    const y = bld.rows[0] * TILE;
    const w = (bld.cols[1] - bld.cols[0] + 1) * TILE;
    const h = (bld.rows[1] - bld.rows[0]) * TILE;

    // Roof triangle
    ctx.fillStyle = bld.roofColor;
    ctx.beginPath();
    ctx.moveTo(x - 5, y);
    ctx.lineTo(x + w / 2, y - 18);
    ctx.lineTo(x + w + 5, y);
    ctx.closePath();
    ctx.fill();

    // Roof edge highlight
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - 5, y);
    ctx.lineTo(x + w / 2, y - 18);
    ctx.lineTo(x + w + 5, y);
    ctx.stroke();

    // Sign
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.font = "bold 10px 'Outfit', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(bld.label, x + w / 2, y - 22);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(bld.label, x + w / 2 - 0.5, y - 22.5);

    // Window
    ctx.fillStyle = '#a0d0f0';
    const wy = y + h * 0.3;
    ctx.fillRect(x + w * 0.2, wy, 12, 10);
    ctx.fillRect(x + w * 0.6, wy, 12, 10);
    // Window frame
    ctx.strokeStyle = '#503520';
    ctx.lineWidth = 1;
    ctx.strokeRect(x + w * 0.2, wy, 12, 10);
    ctx.strokeRect(x + w * 0.6, wy, 12, 10);
    // Cross bars
    ctx.beginPath();
    ctx.moveTo(x + w * 0.2 + 6, wy); ctx.lineTo(x + w * 0.2 + 6, wy + 10);
    ctx.moveTo(x + w * 0.2, wy + 5); ctx.lineTo(x + w * 0.2 + 12, wy + 5);
    ctx.stroke();
  }

  // ======= NPC DRAWING =======
  function drawNPC(ctx: CanvasRenderingContext2D, npc: G, g: G) {
    ctx.save();
    const bob = Math.sin(npc.bobTimer) * 2;
    ctx.translate(npc.x, npc.y + bob);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.beginPath();
    ctx.ellipse(0, 14, 10, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body
    ctx.fillStyle = npc.bodyColor;
    ctx.beginPath();
    ctx.ellipse(0, 4, 10, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Apron
    if (npc.accessory === 'apron') {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(-8, 0); ctx.lineTo(-6, 14); ctx.lineTo(6, 14); ctx.lineTo(8, 0);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'; ctx.stroke();
    }
    // White coat
    if (npc.accessory === 'coat') {
      ctx.fillStyle = '#f0f0f5';
      ctx.beginPath();
      ctx.moveTo(-10, -2); ctx.lineTo(-10, 14); ctx.lineTo(10, 14); ctx.lineTo(10, -2);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.08)'; ctx.stroke();
    }
    // Fishing rod
    if (npc.accessory === 'rod') {
      ctx.strokeStyle = '#8b6b4a';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(8, -5); ctx.lineTo(20, -25);
      ctx.stroke();
      // Line
      ctx.strokeStyle = 'rgba(150,150,150,0.5)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(20, -25); ctx.lineTo(22, -10);
      ctx.stroke();
    }

    // Head
    ctx.fillStyle = '#f5d0a0';
    ctx.beginPath();
    ctx.arc(0, -14, 9, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = npc.hairColor;
    ctx.beginPath();
    ctx.arc(0, -17, 9, Math.PI, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#303030';
    ctx.beginPath();
    ctx.arc(-3, -14, 1.5, 0, Math.PI * 2);
    ctx.arc(3, -14, 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Glasses
    if (npc.hasGlasses) {
      ctx.strokeStyle = '#404040';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(-3, -14, 3.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(3, -14, 3.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0.5, -14); ctx.lineTo(-0.5, -14);
      ctx.stroke();
    }

    // Mouth
    ctx.strokeStyle = '#a07050';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, -11, 2, 0, Math.PI);
    ctx.stroke();

    // Hats
    if (npc.hatStyle === 'chef' && npc.hatColor) {
      ctx.fillStyle = npc.hatColor;
      ctx.fillRect(-7, -26, 14, 6);
      ctx.beginPath();
      ctx.arc(0, -26, 7, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(-8, -21, 16, 3);
    }
    if (npc.hatStyle === 'straw' && npc.hatColor) {
      ctx.fillStyle = npc.hatColor;
      ctx.fillRect(-12, -22, 24, 4);
      ctx.fillRect(-7, -27, 14, 6);
      // Straw texture
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-10, -20); ctx.lineTo(10, -20); ctx.stroke();
    }
    if (npc.hatStyle === 'beret' && npc.hatColor) {
      ctx.fillStyle = npc.hatColor;
      ctx.beginPath();
      ctx.ellipse(1, -22, 10, 5, 0.1, 0, Math.PI * 2);
      ctx.fill();
      // Small pom on top
      ctx.beginPath();
      ctx.arc(0, -26, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    if (npc.hatStyle === 'cap' && npc.hatColor) {
      ctx.fillStyle = npc.hatColor;
      ctx.beginPath();
      ctx.arc(0, -20, 9, Math.PI, 0);
      ctx.fill();
      // Brim
      ctx.fillRect(-2, -20, 14, 3);
    }

    // Name tag (when close)
    if (dist(g.player, npc) < INTERACT_RADIUS * 1.5) {
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.font = "bold 10px 'Outfit', sans-serif";
      ctx.textAlign = 'center';
      const nameW = ctx.measureText(npc.name).width + 10;
      ctx.beginPath();
      ctx.roundRect(-nameW / 2, -42, nameW, 14, 4);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.fillText(npc.name, 0, -33);
    }

    ctx.restore();
  }

  // ======= PLAYER DRAWING =======
  function drawPlayer(ctx: CanvasRenderingContext2D, g: G) {
    const p = g.player;
    ctx.save();
    const walkBob = Math.sin(p.walkTimer * 6) * 1.5;
    ctx.translate(p.x, p.y + walkBob);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.ellipse(0, 14, 11, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Body (postal uniform blue)
    const bodyGrad = ctx.createLinearGradient(0, -8, 0, 15);
    bodyGrad.addColorStop(0, '#3060b0');
    bodyGrad.addColorStop(1, '#204080');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.ellipse(0, 4, 11, 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Mail bag strap
    ctx.strokeStyle = '#8b6b4a';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-8, -6); ctx.lineTo(6, 10);
    ctx.stroke();

    // Mail bag
    ctx.fillStyle = '#a08060';
    ctx.beginPath();
    ctx.roundRect(2, 6, 12, 10, 3);
    ctx.fill();
    ctx.strokeStyle = '#705030';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Envelope on bag
    ctx.fillStyle = '#f0e8d0';
    ctx.fillRect(5, 9, 6, 4);

    // Head
    ctx.fillStyle = '#f5d0a0';
    ctx.beginPath();
    ctx.arc(0, -15, 10, 0, Math.PI * 2);
    ctx.fill();

    // Hair
    ctx.fillStyle = '#604020';
    ctx.beginPath();
    ctx.arc(0, -18, 10, Math.PI * 0.9, Math.PI * 2.1);
    ctx.fill();

    // Eyes — direction-based
    let elx = -3.5, ely = -15, erx = 3.5, ery = -15;
    if (p.facing === 'right') { elx += 1.5; erx += 1.5; }
    if (p.facing === 'left') { elx -= 1.5; erx -= 1.5; }
    if (p.facing === 'up') { ely -= 1; ery -= 1; }
    if (p.facing === 'down') { ely += 1; ery += 1; }
    ctx.fillStyle = '#303030';
    ctx.beginPath();
    ctx.arc(elx, ely, 1.8, 0, Math.PI * 2);
    ctx.arc(erx, ery, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#a07050';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, -12, 3, 0.1, Math.PI - 0.1);
    ctx.stroke();

    // Cap
    ctx.fillStyle = '#3060b0';
    ctx.beginPath();
    ctx.arc(0, -21, 10, Math.PI, 0);
    ctx.fill();
    // Brim
    ctx.fillStyle = '#2050a0';
    ctx.fillRect(-3, -21, 14, 3);
    // Badge on cap
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(0, -24, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Direction indicator
    let ix = 0, iy = 0;
    if (p.facing === 'up') iy = -30;
    else if (p.facing === 'down') iy = 20;
    else if (p.facing === 'left') ix = -16;
    else ix = 16;

    if (ix !== 0 || iy !== 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.beginPath();
      ctx.moveTo(ix, iy);
      ctx.lineTo(ix - 3, iy - 3 * Math.sign(iy || 1));
      ctx.lineTo(ix + 3, iy - 3 * Math.sign(iy || 1));
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  // ======= MINIMAP =======
  function drawMinimap(ctx: CanvasRenderingContext2D, g: G) {
    const mmW = 100, mmH = 75;
    const mx = g.W - mmW - 10, my = 10;
    const sx = mmW / MAP_W, sy = mmH / MAP_H;

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.beginPath();
    ctx.roundRect(mx - 2, my - 2, mmW + 4, mmH + 4, 6);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(mx, my, mmW, mmH, 4);
    ctx.clip();

    // Draw simplified tiles
    for (let r = 0; r < MAP_ROWS; r++) {
      for (let c = 0; c < MAP_COLS; c++) {
        const tile = g.map[r][c];
        let col = '#5a9a58';
        if (tile === T_PATH || tile === T_DOOR || tile === T_BRIDGE) col = '#c4a878';
        else if (tile === T_WATER) col = '#4a8fc2';
        else if (tile === T_WALL) col = '#8c7a6b';
        else if (tile === T_TREE) col = '#3d7040';
        else if (tile === T_FENCE) col = '#b09860';
        ctx.fillStyle = col;
        ctx.fillRect(mx + c * TILE * sx, my + r * TILE * sy, Math.ceil(TILE * sx), Math.ceil(TILE * sy));
      }
    }

    // NPCs as dots
    for (const npc of g.npcs) {
      ctx.fillStyle = '#ff4444';
      ctx.beginPath();
      ctx.arc(mx + npc.x * sx, my + npc.y * sy, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player
    ctx.fillStyle = '#4488ff';
    ctx.beginPath();
    ctx.arc(mx + g.player.x * sx, my + g.player.y * sy, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Current target indicator
    const quest = g.currentQuest as QuestDef;
    if (quest) {
      let targetId = quest.target;
      if (quest.steps && quest.steps[g.questStepIdx]) {
        const step = quest.steps[g.questStepIdx];
        if (!step.startsWith('flower_')) targetId = step;
      }
      const targetNpc = g.npcs.find((n: G) => n.id === targetId);
      if (targetNpc) {
        const pulse = 3 + Math.sin(g.time * 0.15) * 2;
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mx + targetNpc.x * sx, my + targetNpc.y * sy, pulse, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    ctx.restore();

    // Label
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = "9px 'Outfit', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText('MAP', mx + mmW / 2, my + mmH + 10);
  }

  // ======= COMPASS =======
  function drawCompass(ctx: CanvasRenderingContext2D, g: G) {
    const quest = g.currentQuest as QuestDef;
    if (!quest) return;

    let targetX = 0, targetY = 0;
    let hasTarget = false;

    if (quest.steps && quest.steps[g.questStepIdx]) {
      const step = quest.steps[g.questStepIdx];
      if (step.startsWith('flower_')) {
        const targetType = step === 'flower_r' ? T_FLOWER_R : step === 'flower_b' ? T_FLOWER_B : T_FLOWER_Y;
        for (const fp of g.flowerPickups) {
          if (!fp.collected && fp.type === targetType) {
            targetX = fp.x; targetY = fp.y; hasTarget = true; break;
          }
        }
      } else {
        const npc = g.npcs.find((n: G) => n.id === step);
        if (npc) { targetX = npc.x; targetY = npc.y; hasTarget = true; }
      }
    } else {
      const npc = g.npcs.find((n: G) => n.id === quest.target);
      if (npc) { targetX = npc.x; targetY = npc.y; hasTarget = true; }
    }

    if (!hasTarget) return;

    const cx = 50, cy = g.H - 60, r = 22;
    const angle = Math.atan2(targetY - g.player.y, targetX - g.player.x);
    const d = dist(g.player, { x: targetX, y: targetY });

    // Background
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.arc(cx, cy, r + 4, 0, Math.PI * 2);
    ctx.fill();

    // Ring
    ctx.strokeStyle = 'rgba(255,215,0,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    // Arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(r - 4, 0);
    ctx.lineTo(r - 14, -6);
    ctx.lineTo(r - 11, 0);
    ctx.lineTo(r - 14, 6);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Distance text
    const dText = d < 100 ? 'CLOSE!' : Math.floor(d / TILE) + 'm';
    ctx.fillStyle = d < 100 ? '#4ade80' : '#ffffff';
    ctx.font = "bold 9px 'Outfit', sans-serif";
    ctx.textAlign = 'center';
    ctx.fillText(dText, cx, cy + r + 14);
  }

  // ======= DIALOG =======
  function drawDialog(ctx: CanvasRenderingContext2D, g: G) {
    const dlg = g.dialog;
    if (!dlg) return;
    const W = g.W, H = g.H;
    const dh = 120;
    const dy = H - dh - 10;
    const dx = 20;
    const dw = W - 40;

    // Backdrop
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(0, 0, W, H);

    // Dialog box
    ctx.fillStyle = 'rgba(15,20,40,0.92)';
    ctx.beginPath();
    ctx.roundRect(dx, dy, dw, dh, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(100,140,255,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(dx, dy, dw, dh, 12);
    ctx.stroke();

    // Top line accent
    ctx.strokeStyle = 'rgba(100,140,255,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(dx + 20, dy);
    ctx.lineTo(dx + dw - 20, dy);
    ctx.stroke();

    // Name
    ctx.fillStyle = '#ffd700';
    ctx.font = "bold 14px 'Fraunces', serif";
    ctx.textAlign = 'left';
    ctx.fillText(dlg.name, dx + 16, dy + 22);

    // Text with word wrap
    ctx.fillStyle = '#d0d8e8';
    ctx.font = "14px 'Outfit', sans-serif";
    const maxW = dw - 32;
    const words = dlg.text.split(' ');
    let line = '';
    let ly = dy + 44;
    for (const word of words) {
      const test = line + (line ? ' ' : '') + word;
      if (ctx.measureText(test).width > maxW) {
        ctx.fillText(line, dx + 16, ly);
        line = word;
        ly += 20;
      } else {
        line = test;
      }
    }
    ctx.fillText(line, dx + 16, ly);

    // Continue prompt
    const pulse = 0.5 + Math.sin(g.time * 0.15) * 0.5;
    ctx.fillStyle = `rgba(160,180,220,${pulse})`;
    ctx.font = "12px 'Outfit', sans-serif";
    ctx.textAlign = 'right';
    ctx.fillText('Press SPACE to continue', dx + dw - 16, dy + dh - 12);
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

  // Touch controls
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ts = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const r = el.getBoundingClientRect();
      const x = touch.clientX - r.left;
      const y = touch.clientY - r.top;
      // Right side = action button
      if (x > r.width * 0.7 && y > r.height * 0.5) {
        touchRef.current.action = true;
      } else {
        touchRef.current.active = true;
        touchRef.current.sx = x;
        touchRef.current.sy = y;
        touchRef.current.cx = x;
        touchRef.current.cy = y;
      }
      e.preventDefault();
    };
    const tm = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const r = el.getBoundingClientRect();
      touchRef.current.cx = touch.clientX - r.left;
      touchRef.current.cy = touch.clientY - r.top;
      e.preventDefault();
    };
    const te = () => {
      touchRef.current.active = false;
      touchRef.current.action = false;
    };
    el.addEventListener('touchstart', ts, { passive: false });
    el.addEventListener('touchmove', tm, { passive: false });
    el.addEventListener('touchend', te);
    el.addEventListener('touchcancel', te);
    return () => {
      el.removeEventListener('touchstart', ts);
      el.removeEventListener('touchmove', tm);
      el.removeEventListener('touchend', te);
      el.removeEventListener('touchcancel', te);
    };
  }, [screen]);

  // ========== SCREENS ==========
  if (screen === 'intro') {
    return (
      <div className="mq-root">
        <style>{styles}</style>
        <div className="mq-intro">
          <div className="mq-intro-bg" />
          <div className="mq-intro-body">
            <div className="mq-logo-wrap">
              <div className="mq-logo-deco" />
              <div className="mq-logo-stack">
                <h1 className="mq-title">MESSAGE QUEST</h1>
                <p className="mq-subtitle">VILLAGE POSTAL SERVICE</p>
              </div>
              <div className="mq-logo-deco" />
            </div>

            <div className="mq-card">
              <div className="mq-card-header">
                <div className="mq-card-line" />
                <span>HOW TO PLAY</span>
                <div className="mq-card-line" />
              </div>
              <div className="mq-rules">
                <div className="mq-rule">
                  <span className="mq-rule-num">1</span>
                  <span>Read the message instructions carefully</span>
                </div>
                <div className="mq-rule">
                  <span className="mq-rule-num">2</span>
                  <span>Walk around the village to find the right person</span>
                </div>
                <div className="mq-rule">
                  <span className="mq-rule-num">3</span>
                  <span>Deliver the message to earn coins</span>
                </div>
                <div className="mq-rule">
                  <span className="mq-rule-num">4</span>
                  <span>Collect hidden stars for bonus coins</span>
                </div>
              </div>
            </div>

            <div className="mq-controls">
              <div className="mq-ctrl"><kbd>WASD</kbd> <span className="mq-ctrl-sep">/</span> <kbd>{'\u2190\u2191\u2192\u2193'}</kbd> <span className="mq-ctrl-label">Move</span></div>
              <div className="mq-ctrl"><kbd>Space</kbd> <span className="mq-ctrl-label">Interact</span></div>
            </div>

            <button className="mq-start-btn" onClick={() => setScreen('playing')}>
              START DELIVERING
              <span className="mq-btn-shine" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'complete') {
    const finalCoins = gRef.current?.coins || 0;
    const finalStars = gRef.current?.starsCollected || 0;
    const finalDeliveries = gRef.current?.deliveries || 0;
    return (
      <div className="mq-root">
        <style>{styles}</style>
        <div className="mq-gameover">
          <div className="mq-intro-bg" />
          <div className="mq-go-body">
            <h1 className="mq-go-title">QUEST COMPLETE!</h1>
            <p className="mq-go-sub">You delivered every message in the village!</p>
            <div className="mq-go-stats">
              <div className="mq-go-stat">
                <span className="mq-go-label">DELIVERIES</span>
                <span className="mq-go-val">{finalDeliveries}</span>
              </div>
              <div className="mq-go-divider" />
              <div className="mq-go-stat">
                <span className="mq-go-label">COINS</span>
                <span className="mq-go-val">{finalCoins}</span>
              </div>
              <div className="mq-go-divider" />
              <div className="mq-go-stat">
                <span className="mq-go-label">STARS</span>
                <span className="mq-go-val">{finalStars}/8</span>
              </div>
            </div>
            <div className="mq-go-btns">
              <button className="mq-start-btn" onClick={() => setScreen('playing')}>
                PLAY AGAIN
                <span className="mq-btn-shine" />
              </button>
              <button className="mq-menu-btn" onClick={() => setScreen('intro')}>Back to Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== GAME SCREEN ==========
  return (
    <div className="mq-root">
      <style>{styles}</style>
      <div className="mq-game" ref={wrapRef}>
        <canvas ref={canvasRef} className="mq-canvas" />

        {/* HUD */}
        <div className="mq-hud-top">
          <div className="mq-hud-left">
            <div className="mq-level-badge">
              <span className="mq-level-label">LEVEL</span>
              <span className="mq-level-num">{hud.level}</span>
            </div>
            <div className="mq-coins">
              <span className="mq-coin-icon">&#9733;</span>
              <span>{hud.coins}</span>
            </div>
          </div>
          <div className="mq-hud-right-info">
            <div className="mq-deliveries">{hud.deliveries}/{hud.totalDeliveries} delivered</div>
          </div>
        </div>

        {/* Quest bar */}
        <div className="mq-quest-bar">
          <div className="mq-quest-label">QUEST</div>
          <div className="mq-quest-text">{hud.questText}</div>
          {hud.inventory.length > 0 && (
            <div className="mq-inventory">
              Carrying: {hud.inventory.join(', ')}
            </div>
          )}
        </div>

        {/* Mobile touch areas */}
        <div className="mq-touch-action">
          <div className="mq-action-btn">TALK</div>
        </div>
      </div>
    </div>
  );
}

// =============== STYLES ===============
const styles = `
* { box-sizing: border-box; margin: 0; padding: 0; }

.mq-root {
  width: 100%; height: 100%;
  font-family: 'Outfit', sans-serif;
  overflow: hidden;
  background: #1a2a1a;
  color: #d0d8e0;
}

.mq-intro, .mq-gameover {
  height: 100%; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.mq-intro-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% 0%, rgba(80,160,80,0.15) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 20% 100%, rgba(60,120,200,0.1) 0%, transparent 50%),
    #1a2a1a;
}

.mq-intro-body, .mq-go-body {
  position: relative; z-index: 10; text-align: center;
  padding: 2rem; max-width: 480px; width: 100%;
  animation: mqFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes mqFadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.mq-logo-wrap {
  display: flex; align-items: center; justify-content: center; gap: 1.5rem;
  margin-bottom: 2rem;
}
.mq-logo-deco {
  width: 40px; height: 2px;
  background: linear-gradient(90deg, transparent, #6db86b, transparent);
  opacity: 0.5;
}
.mq-logo-stack { display: flex; flex-direction: column; align-items: center; }
.mq-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(2rem, 7vw, 2.8rem);
  font-weight: 900; color: #fff; letter-spacing: 2px;
  text-shadow: 0 0 40px rgba(100,180,100,0.3);
}
.mq-subtitle {
  font-size: 0.75rem; font-weight: 500;
  color: #6db86b; letter-spacing: 6px; text-transform: uppercase;
  margin-top: 0.3rem;
}

.mq-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px; padding: 1.2rem 1.4rem; margin-bottom: 1.5rem;
  text-align: left;
}
.mq-card::before {
  content: ''; display: block; height: 1px; margin-bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(100,180,100,0.3), transparent);
}
.mq-card-header {
  display: flex; align-items: center; gap: 0.8rem;
  margin-bottom: 1rem; justify-content: center;
  font-size: 0.65rem; font-weight: 600;
  color: #6db86b; letter-spacing: 3px; text-transform: uppercase;
}
.mq-card-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
}

.mq-rules { display: flex; flex-direction: column; gap: 0.5rem; }
.mq-rule {
  display: flex; align-items: center; gap: 0.7rem;
  padding: 0.45rem 0.6rem;
  background: rgba(255,255,255,0.02);
  border-radius: 8px; font-size: 0.82rem; color: #a0b0a0;
}
.mq-rule-num {
  flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700; color: #6db86b;
  background: rgba(109,184,107,0.12);
  border: 1px solid rgba(109,184,107,0.25);
}

.mq-controls {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem 1rem;
  margin-bottom: 1.8rem;
}
.mq-ctrl {
  display: flex; align-items: center; gap: 0.25rem;
  font-size: 0.78rem; color: #6a7a6a;
}
.mq-ctrl-sep { opacity: 0.3; margin: 0 0.1rem; }
.mq-ctrl-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 1px;
  text-transform: uppercase; color: #6a7a6a;
}
.mq-ctrl kbd {
  padding: 0.2rem 0.45rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-bottom-width: 2px; border-radius: 5px;
  font-family: monospace; font-size: 0.65rem; color: #8a9a8a;
}

.mq-start-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.6rem; padding: 0.85rem 2.5rem;
  font-family: 'Outfit', sans-serif; font-size: 0.85rem; font-weight: 700;
  color: white; letter-spacing: 2px;
  background: linear-gradient(135deg, #408040, #306030);
  border: 1px solid rgba(100,180,100,0.4);
  border-radius: 10px; cursor: pointer;
  position: relative; overflow: hidden;
  box-shadow: 0 4px 24px rgba(64,128,64,0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.mq-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 40px rgba(64,128,64,0.4);
}
.mq-start-btn:active { transform: translateY(0); }
.mq-btn-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  animation: mqBtnShine 3s ease-in-out infinite;
}
@keyframes mqBtnShine {
  0% { left: -100%; } 40%,100% { left: 200%; }
}

/* Game Over */
.mq-go-title {
  font-family: 'Fraunces', serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 900; color: #ffd700;
  margin-bottom: 0.5rem; letter-spacing: 2px;
  text-shadow: 0 0 30px rgba(255,215,0,0.3);
}
.mq-go-sub {
  font-size: 0.9rem; color: #a0b0a0; margin-bottom: 1.5rem;
}
.mq-go-stats {
  display: flex; justify-content: center; align-items: center;
  gap: 1.5rem; margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
}
.mq-go-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.08); }
.mq-go-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.mq-go-label {
  font-size: 0.6rem; font-weight: 600;
  color: #6a7a6a; letter-spacing: 2px; text-transform: uppercase;
}
.mq-go-val {
  font-size: 1.6rem; font-weight: 900; color: white;
}
.mq-go-btns { display: flex; flex-direction: column; gap: 0.7rem; align-items: center; }
.mq-menu-btn {
  padding: 0.6rem 1.8rem; font-family: 'Outfit', sans-serif;
  font-size: 0.8rem; font-weight: 600; color: #6a7a6a;
  background: transparent; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px; cursor: pointer; transition: all 0.25s;
}
.mq-menu-btn:hover { border-color: rgba(255,255,255,0.15); color: #a0b0a0; }

/* Game */
.mq-game {
  width: 100%; height: 100%; position: relative; overflow: hidden;
  cursor: default; touch-action: none;
}
.mq-canvas { display: block; width: 100%; height: 100%; }

/* HUD */
.mq-hud-top {
  position: absolute; top: 0; left: 0; right: 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  padding: 0.5rem 0.7rem;
  background: linear-gradient(180deg, rgba(20,30,20,0.85) 0%, rgba(20,30,20,0.3) 70%, transparent 100%);
  pointer-events: none; z-index: 20;
}
.mq-hud-left {
  display: flex; align-items: center; gap: 0.7rem;
}
.mq-level-badge {
  display: flex; align-items: center; gap: 0.3rem;
  padding: 0.3rem 0.6rem;
  background: rgba(100,180,100,0.1);
  border: 1px solid rgba(100,180,100,0.25);
  border-radius: 8px;
}
.mq-level-label {
  font-size: 0.55rem; font-weight: 600;
  color: #6db86b; letter-spacing: 2px; text-transform: uppercase;
}
.mq-level-num {
  font-size: 0.9rem; font-weight: 800; color: #fff;
}
.mq-coins {
  display: flex; align-items: center; gap: 0.3rem;
  font-size: 0.85rem; font-weight: 700; color: #ffd700;
}
.mq-coin-icon { font-size: 1rem; }
.mq-hud-right-info {
  display: flex; align-items: center; gap: 0.5rem;
}
.mq-deliveries {
  font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.6);
  padding: 0.25rem 0.5rem;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
}

/* Quest bar */
.mq-quest-bar {
  position: absolute; top: 44px; left: 50%; transform: translateX(-50%);
  max-width: 500px; width: calc(100% - 2rem);
  padding: 0.5rem 0.8rem;
  background: rgba(15,20,40,0.85);
  border: 1px solid rgba(100,140,255,0.15);
  border-radius: 10px;
  pointer-events: none; z-index: 20;
  text-align: center;
}
.mq-quest-label {
  font-size: 0.55rem; font-weight: 700;
  color: #ffd700; letter-spacing: 3px; margin-bottom: 0.2rem;
}
.mq-quest-text {
  font-size: 0.78rem; color: #d0d8e8; line-height: 1.4;
}
.mq-inventory {
  margin-top: 0.3rem; font-size: 0.68rem; color: #6db86b;
  font-weight: 600;
}

/* Mobile touch */
.mq-touch-action {
  display: none; position: absolute; bottom: 20px; right: 20px; z-index: 30;
}
@media (pointer: coarse) {
  .mq-touch-action { display: block; }
}
.mq-action-btn {
  width: 64px; height: 64px; border-radius: 50%;
  background: rgba(100,180,100,0.3);
  border: 2px solid rgba(100,180,100,0.5);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; font-weight: 700; color: white; letter-spacing: 1px;
  pointer-events: auto;
}

/* Responsive */
@media (max-width: 500px) {
  .mq-hud-top { padding: 0.3rem 0.4rem; }
  .mq-quest-bar { max-width: 300px; }
  .mq-quest-text { font-size: 0.7rem; }
  .mq-logo-deco { display: none; }
}
`;
