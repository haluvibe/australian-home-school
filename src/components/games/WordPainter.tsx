"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// Physics constants
const FRICTION = 0.985;
const BOUNCE = 0.6;
const HIT_DISTANCE = 70;

// ---------- Types ----------

interface WordDef {
  word: string;
  category: 'color' | 'size' | 'feel' | 'action';
  color: string;
  effect: string; // CSS color or keyword
}

interface SceneObjectDef {
  id: string;
  name: string;
  svgPath: string;
  baseColor: string;
  x: number;
  y: number;
  scale: number;
  accepts: string[]; // categories accepted
}

interface AppliedWord {
  word: string;
  category: string;
  effect: string;
  timestamp: number;
}

interface SceneObject extends SceneObjectDef {
  appliedWords: AppliedWord[];
  currentColor: string;
  currentScale: number;
  animClass: string;
  particles: Particle[];
}

interface WordBubble {
  id: number;
  word: WordDef;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface DraggedWord extends WordBubble {
  offsetX: number;
  offsetY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  type: 'sparkle' | 'splash' | 'glow';
}

interface Challenge {
  objectId: string;
  words: string[];
  description: string;
  completed: boolean;
}

interface GalleryEntry {
  level: number;
  sceneName: string;
  objectStates: { name: string; words: string[] }[];
  score: number;
  timestamp: number;
}

interface ContainerSize {
  width: number;
  height: number;
}

interface LevelConfig {
  sceneName: string;
  sceneIcon: string;
  objects: SceneObjectDef[];
  availableCategories: string[];
  challenges: Omit<Challenge, 'completed'>[];
  bgGradient: string;
  bgAccent: string;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gallery';

// ---------- Data ----------

const COLOR_WORDS: WordDef[] = [
  { word: 'red', category: 'color', color: '#ef4444', effect: '#ef4444' },
  { word: 'blue', category: 'color', color: '#3b82f6', effect: '#3b82f6' },
  { word: 'green', category: 'color', color: '#22c55e', effect: '#22c55e' },
  { word: 'yellow', category: 'color', color: '#eab308', effect: '#eab308' },
  { word: 'purple', category: 'color', color: '#a855f7', effect: '#a855f7' },
  { word: 'orange', category: 'color', color: '#f97316', effect: '#f97316' },
  { word: 'pink', category: 'color', color: '#ec4899', effect: '#ec4899' },
];

const SIZE_WORDS: WordDef[] = [
  { word: 'big', category: 'size', color: '#06b6d4', effect: '1.5' },
  { word: 'small', category: 'size', color: '#06b6d4', effect: '0.6' },
  { word: 'tiny', category: 'size', color: '#06b6d4', effect: '0.4' },
  { word: 'huge', category: 'size', color: '#06b6d4', effect: '1.8' },
  { word: 'tall', category: 'size', color: '#06b6d4', effect: '1.4' },
  { word: 'short', category: 'size', color: '#06b6d4', effect: '0.7' },
];

const FEEL_WORDS: WordDef[] = [
  { word: 'soft', category: 'feel', color: '#f472b6', effect: 'soft' },
  { word: 'rough', category: 'feel', color: '#f472b6', effect: 'rough' },
  { word: 'smooth', category: 'feel', color: '#f472b6', effect: 'smooth' },
  { word: 'bumpy', category: 'feel', color: '#f472b6', effect: 'bumpy' },
];

const ACTION_WORDS: WordDef[] = [
  { word: 'sparkly', category: 'action', color: '#fbbf24', effect: 'sparkly' },
  { word: 'glowing', category: 'action', color: '#fbbf24', effect: 'glowing' },
  { word: 'bouncy', category: 'action', color: '#fbbf24', effect: 'bouncy' },
  { word: 'spinning', category: 'action', color: '#fbbf24', effect: 'spinning' },
];

const ALL_WORDS: Record<string, WordDef[]> = {
  color: COLOR_WORDS,
  size: SIZE_WORDS,
  feel: FEEL_WORDS,
  action: ACTION_WORDS,
};

// SVG paths for scene objects (simple iconic shapes)
const SVG_PATHS: Record<string, string> = {
  flower: 'M50,85 L50,55 M50,55 C50,55 30,40 35,25 C40,10 60,10 65,25 C70,40 50,55 50,55 M50,55 C50,55 70,40 75,30 C80,15 65,5 55,15 C45,5 30,15 35,30 C40,40 50,55 50,55 M35,55 C30,50 20,52 22,58 C24,64 35,62 35,55 M65,55 C70,50 80,52 78,58 C76,64 65,62 65,55',
  tree: 'M50,90 L50,60 M50,60 C30,55 20,35 30,20 C35,12 45,8 50,10 C55,8 65,12 70,20 C80,35 70,55 50,60 M40,50 C30,48 25,38 32,28 M60,50 C70,48 75,38 68,28',
  dog: 'M25,70 L25,85 M40,70 L40,85 M60,70 L60,85 M75,70 L75,85 M20,55 C20,40 35,30 50,30 C65,30 80,40 80,55 L80,70 C80,75 20,75 20,70 Z M20,45 L10,35 L18,42 M80,45 L90,35 L82,42 M35,50 A3,3 0 1,0 41,50 A3,3 0 1,0 35,50 M60,50 A3,3 0 1,0 66,50 A3,3 0 1,0 60,50 M45,58 Q50,64 55,58',
  sun: 'M50,50 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0 M50,15 L50,25 M50,75 L50,85 M15,50 L25,50 M75,50 L85,50 M24,24 L31,31 M69,69 L76,76 M76,24 L69,31 M31,69 L24,76',
  house: 'M20,55 L20,85 L80,85 L80,55 L50,25 Z M40,85 L40,65 L60,65 L60,85 M30,45 L30,55 L42,55 L42,45 Z',
  bird: 'M50,50 C40,45 25,40 15,45 C25,35 40,38 50,43 M50,50 C60,45 75,40 85,45 C75,35 60,38 50,43 M50,50 C48,55 45,60 50,65 C55,60 52,55 50,50 M50,43 C50,38 48,33 50,30 C52,33 50,38 50,43 M46,47 A2,2 0 1,0 48,47 A2,2 0 1,0 46,47',
  car: 'M15,60 L15,70 L85,70 L85,60 L70,45 L30,45 Z M25,70 A8,8 0 1,0 41,70 A8,8 0 1,0 25,70 M59,70 A8,8 0 1,0 75,70 A8,8 0 1,0 59,70 M35,55 L40,48 L55,48 L60,55 Z',
  fish: 'M70,50 C70,35 55,25 40,30 C25,35 15,45 15,50 C15,55 25,65 40,70 C55,75 70,65 70,50 Z M70,50 L85,35 L85,65 Z M32,45 A3,3 0 1,0 38,45 A3,3 0 1,0 32,45',
  star: 'M50,10 L58,38 L88,38 L64,56 L73,84 L50,68 L27,84 L36,56 L12,38 L42,38 Z',
  cloud: 'M25,60 C15,60 10,50 18,43 C15,35 25,28 35,32 C38,22 52,20 58,30 C65,25 78,30 78,40 C88,40 90,55 80,58 Z',
  mountain: 'M10,85 L35,30 L45,50 L55,25 L65,45 L90,85 Z M55,25 L60,32 L50,32 Z',
  rocket: 'M50,10 C45,10 38,25 38,45 L38,70 L50,80 L62,70 L62,45 C62,25 55,10 50,10 Z M38,65 L28,80 L38,72 M62,65 L72,80 L62,72 M46,35 A4,4 0 1,0 54,35 A4,4 0 1,0 46,35',
  butterfly: 'M50,30 L50,75 M50,45 C35,25 10,25 15,45 C20,60 40,55 50,45 M50,45 C65,25 90,25 85,45 C80,60 60,55 50,45 M48,30 L42,20 M52,30 L58,20',
  boat: 'M15,60 L25,75 L75,75 L85,60 Z M50,60 L50,30 L52,30 L52,58 M52,30 L75,50 L52,50',
  moon: 'M55,15 C30,15 15,35 15,55 C15,75 30,90 55,90 C40,85 30,70 30,55 C30,35 40,20 55,15 Z',
  crab: 'M30,55 C25,45 35,35 45,40 L55,40 C65,35 75,45 70,55 L70,60 C70,70 30,70 30,60 Z M30,50 L15,35 L20,30 M70,50 L85,35 L80,30 M38,52 A3,3 0 1,0 44,52 A3,3 0 1,0 38,52 M56,52 A3,3 0 1,0 62,52 A3,3 0 1,0 56,52 M30,65 L25,75 M40,68 L38,78 M60,68 L62,78 M70,65 L75,75',
};

// Level configurations
const LEVELS: LevelConfig[] = [
  // Level 1: Park - colors only
  {
    sceneName: 'The Park',
    sceneIcon: '\u{1F333}',
    objects: [
      { id: 'flower1', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 15, y: 70, scale: 1, accepts: ['color'] },
      { id: 'tree1', name: 'tree', svgPath: 'tree', baseColor: '#9ca3af', x: 40, y: 40, scale: 1.2, accepts: ['color'] },
      { id: 'bird1', name: 'bird', svgPath: 'bird', baseColor: '#9ca3af', x: 70, y: 25, scale: 0.8, accepts: ['color'] },
      { id: 'dog1', name: 'dog', svgPath: 'dog', baseColor: '#9ca3af', x: 60, y: 65, scale: 1, accepts: ['color'] },
      { id: 'sun1', name: 'sun', svgPath: 'sun', baseColor: '#9ca3af', x: 85, y: 15, scale: 0.9, accepts: ['color'] },
      { id: 'flower2', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 30, y: 75, scale: 0.8, accepts: ['color'] },
    ],
    availableCategories: ['color'],
    challenges: [
      { objectId: 'flower1', words: ['red'], description: 'Make the flower RED!' },
      { objectId: 'sun1', words: ['yellow'], description: 'Make the sun YELLOW!' },
    ],
    bgGradient: 'linear-gradient(180deg, #bae6fd 0%, #e0f2fe 40%, #86efac 70%, #4ade80 100%)',
    bgAccent: '#7dd3fc',
  },
  // Level 2: Beach - colors + sizes
  {
    sceneName: 'The Beach',
    sceneIcon: '\u{1F3D6}\uFE0F',
    objects: [
      { id: 'sun2', name: 'sun', svgPath: 'sun', baseColor: '#9ca3af', x: 80, y: 12, scale: 1, accepts: ['color', 'size'] },
      { id: 'fish1', name: 'fish', svgPath: 'fish', baseColor: '#9ca3af', x: 25, y: 60, scale: 1, accepts: ['color', 'size'] },
      { id: 'crab1', name: 'crab', svgPath: 'crab', baseColor: '#9ca3af', x: 55, y: 72, scale: 0.9, accepts: ['color', 'size'] },
      { id: 'bird2', name: 'bird', svgPath: 'bird', baseColor: '#9ca3af', x: 40, y: 18, scale: 0.7, accepts: ['color', 'size'] },
      { id: 'boat1', name: 'boat', svgPath: 'boat', baseColor: '#9ca3af', x: 65, y: 40, scale: 1.1, accepts: ['color', 'size'] },
      { id: 'cloud1', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 20, y: 10, scale: 1, accepts: ['color', 'size'] },
    ],
    availableCategories: ['color', 'size'],
    challenges: [
      { objectId: 'fish1', words: ['blue'], description: 'Make the fish BLUE!' },
      { objectId: 'crab1', words: ['red', 'small'], description: 'Make a SMALL RED crab!' },
    ],
    bgGradient: 'linear-gradient(180deg, #7dd3fc 0%, #bae6fd 35%, #fde68a 55%, #fbbf24 60%, #38bdf8 65%, #0ea5e9 100%)',
    bgAccent: '#38bdf8',
  },
  // Level 3: Farm - colors + sizes + feels
  {
    sceneName: 'The Farm',
    sceneIcon: '\u{1F33E}',
    objects: [
      { id: 'house1', name: 'house', svgPath: 'house', baseColor: '#9ca3af', x: 50, y: 35, scale: 1.3, accepts: ['color', 'size', 'feel'] },
      { id: 'dog2', name: 'dog', svgPath: 'dog', baseColor: '#9ca3af', x: 25, y: 65, scale: 1, accepts: ['color', 'size', 'feel'] },
      { id: 'tree2', name: 'tree', svgPath: 'tree', baseColor: '#9ca3af', x: 80, y: 40, scale: 1.1, accepts: ['color', 'size', 'feel'] },
      { id: 'bird3', name: 'bird', svgPath: 'bird', baseColor: '#9ca3af', x: 60, y: 15, scale: 0.7, accepts: ['color', 'size', 'feel'] },
      { id: 'flower3', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 15, y: 78, scale: 0.8, accepts: ['color', 'size', 'feel'] },
      { id: 'sun3', name: 'sun', svgPath: 'sun', baseColor: '#9ca3af', x: 85, y: 10, scale: 0.8, accepts: ['color', 'size', 'feel'] },
      { id: 'car1', name: 'car', svgPath: 'car', baseColor: '#9ca3af', x: 40, y: 75, scale: 0.9, accepts: ['color', 'size', 'feel'] },
    ],
    availableCategories: ['color', 'size', 'feel'],
    challenges: [
      { objectId: 'house1', words: ['red', 'big'], description: 'Make a BIG RED house!' },
      { objectId: 'dog2', words: ['soft'], description: 'Make the dog SOFT!' },
    ],
    bgGradient: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 30%, #86efac 60%, #4ade80 80%, #166534 100%)',
    bgAccent: '#fbbf24',
  },
  // Level 4: Space - all words
  {
    sceneName: 'Outer Space',
    sceneIcon: '\u{1F680}',
    objects: [
      { id: 'rocket1', name: 'rocket', svgPath: 'rocket', baseColor: '#9ca3af', x: 30, y: 40, scale: 1.2, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'star1', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 75, y: 20, scale: 0.9, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'star2', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 15, y: 15, scale: 0.7, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'moon1', name: 'moon', svgPath: 'moon', baseColor: '#9ca3af', x: 65, y: 55, scale: 1.1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'cloud2', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 50, y: 75, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'star3', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 88, y: 65, scale: 0.6, accepts: ['color', 'size', 'feel', 'action'] },
    ],
    availableCategories: ['color', 'size', 'feel', 'action'],
    challenges: [
      { objectId: 'star1', words: ['yellow', 'sparkly'], description: 'Make a SPARKLY YELLOW star!' },
      { objectId: 'rocket1', words: ['red', 'big'], description: 'Make a BIG RED rocket!' },
    ],
    bgGradient: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 40%, #312e81 70%, #1e1b4b 100%)',
    bgAccent: '#818cf8',
  },
  // Level 5: Underwater - all words, more complex
  {
    sceneName: 'Under the Sea',
    sceneIcon: '\u{1F30A}',
    objects: [
      { id: 'fish2', name: 'fish', svgPath: 'fish', baseColor: '#9ca3af', x: 20, y: 30, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'fish3', name: 'fish', svgPath: 'fish', baseColor: '#9ca3af', x: 70, y: 50, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'crab2', name: 'crab', svgPath: 'crab', baseColor: '#9ca3af', x: 50, y: 78, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'star4', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 40, y: 70, scale: 0.7, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'butterfly1', name: 'butterfly', svgPath: 'butterfly', baseColor: '#9ca3af', x: 80, y: 20, scale: 0.9, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'cloud3', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 25, y: 60, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'fish4', name: 'fish', svgPath: 'fish', baseColor: '#9ca3af', x: 55, y: 25, scale: 1.1, accepts: ['color', 'size', 'feel', 'action'] },
    ],
    availableCategories: ['color', 'size', 'feel', 'action'],
    challenges: [
      { objectId: 'fish2', words: ['blue', 'big', 'glowing'], description: 'Make a BIG BLUE GLOWING fish!' },
      { objectId: 'crab2', words: ['red', 'small'], description: 'Make a SMALL RED crab!' },
    ],
    bgGradient: 'linear-gradient(180deg, #0c4a6e 0%, #0369a1 30%, #0284c7 60%, #0e7490 80%, #134e4a 100%)',
    bgAccent: '#22d3ee',
  },
  // Level 6: Garden - all words
  {
    sceneName: 'Magic Garden',
    sceneIcon: '\u{1F33A}',
    objects: [
      { id: 'flower4', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 15, y: 55, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'flower5', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 45, y: 65, scale: 0.9, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'flower6', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 75, y: 58, scale: 1.1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'butterfly2', name: 'butterfly', svgPath: 'butterfly', baseColor: '#9ca3af', x: 30, y: 25, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'butterfly3', name: 'butterfly', svgPath: 'butterfly', baseColor: '#9ca3af', x: 65, y: 20, scale: 0.7, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'tree3', name: 'tree', svgPath: 'tree', baseColor: '#9ca3af', x: 88, y: 35, scale: 1.3, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'sun4', name: 'sun', svgPath: 'sun', baseColor: '#9ca3af', x: 50, y: 10, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'bird4', name: 'bird', svgPath: 'bird', baseColor: '#9ca3af', x: 20, y: 15, scale: 0.6, accepts: ['color', 'size', 'feel', 'action'] },
    ],
    availableCategories: ['color', 'size', 'feel', 'action'],
    challenges: [
      { objectId: 'flower4', words: ['pink', 'sparkly'], description: 'Make a SPARKLY PINK flower!' },
      { objectId: 'butterfly2', words: ['purple', 'big', 'glowing'], description: 'Make a BIG PURPLE GLOWING butterfly!' },
      { objectId: 'flower6', words: ['yellow', 'huge'], description: 'Make a HUGE YELLOW flower!' },
    ],
    bgGradient: 'linear-gradient(180deg, #fef9c3 0%, #d9f99d 30%, #86efac 60%, #4ade80 80%, #166534 100%)',
    bgAccent: '#a3e635',
  },
  // Level 7: Mountain - all words
  {
    sceneName: 'Mountain Top',
    sceneIcon: '\u{26F0}\uFE0F',
    objects: [
      { id: 'mountain1', name: 'mountain', svgPath: 'mountain', baseColor: '#9ca3af', x: 50, y: 50, scale: 1.5, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'cloud4', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 20, y: 15, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'cloud5', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 75, y: 20, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'bird5', name: 'bird', svgPath: 'bird', baseColor: '#9ca3af', x: 40, y: 25, scale: 0.6, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'sun5', name: 'sun', svgPath: 'sun', baseColor: '#9ca3af', x: 85, y: 10, scale: 0.7, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'tree4', name: 'tree', svgPath: 'tree', baseColor: '#9ca3af', x: 15, y: 65, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'flower7', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 80, y: 75, scale: 0.7, accepts: ['color', 'size', 'feel', 'action'] },
    ],
    availableCategories: ['color', 'size', 'feel', 'action'],
    challenges: [
      { objectId: 'mountain1', words: ['purple', 'huge'], description: 'Make a HUGE PURPLE mountain!' },
      { objectId: 'cloud4', words: ['blue', 'soft', 'big'], description: 'Make a BIG SOFT BLUE cloud!' },
    ],
    bgGradient: 'linear-gradient(180deg, #c4b5fd 0%, #a78bfa 25%, #7c3aed 50%, #5b21b6 75%, #4c1d95 100%)',
    bgAccent: '#a78bfa',
  },
  // Level 8: Dream World - all words, complex scene
  {
    sceneName: 'Dream World',
    sceneIcon: '\u{2728}',
    objects: [
      { id: 'star5', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 15, y: 15, scale: 0.8, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'moon2', name: 'moon', svgPath: 'moon', baseColor: '#9ca3af', x: 80, y: 12, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'butterfly4', name: 'butterfly', svgPath: 'butterfly', baseColor: '#9ca3af', x: 45, y: 25, scale: 1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'flower8', name: 'flower', svgPath: 'flower', baseColor: '#9ca3af', x: 25, y: 70, scale: 1.1, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'fish5', name: 'fish', svgPath: 'fish', baseColor: '#9ca3af', x: 70, y: 55, scale: 0.9, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'cloud6', name: 'cloud', svgPath: 'cloud', baseColor: '#9ca3af', x: 50, y: 45, scale: 1.2, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'rocket2', name: 'rocket', svgPath: 'rocket', baseColor: '#9ca3af', x: 85, y: 35, scale: 0.9, accepts: ['color', 'size', 'feel', 'action'] },
      { id: 'star6', name: 'star', svgPath: 'star', baseColor: '#9ca3af', x: 60, y: 75, scale: 0.6, accepts: ['color', 'size', 'feel', 'action'] },
    ],
    availableCategories: ['color', 'size', 'feel', 'action'],
    challenges: [
      { objectId: 'butterfly4', words: ['purple', 'big', 'sparkly'], description: 'Make a BIG SPARKLY PURPLE butterfly!' },
      { objectId: 'moon2', words: ['yellow', 'glowing', 'huge'], description: 'Make a HUGE GLOWING YELLOW moon!' },
      { objectId: 'flower8', words: ['pink', 'spinning'], description: 'Make a SPINNING PINK flower!' },
    ],
    bgGradient: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 20%, #4c1d95 40%, #7c3aed 60%, #c084fc 80%, #f0abfc 100%)',
    bgAccent: '#c084fc',
  },
];

let wordBubbleIdCounter = 0;
const getNewWordId = (): number => ++wordBubbleIdCounter;
let particleIdCounter = 0;
const getNewParticleId = (): number => ++particleIdCounter;

interface WordPainterProps {
  onExit?: () => void;
}

export default function WordPainter({ onExit }: WordPainterProps = {}) {
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [combo, setCombo] = useState<number>(0);
  const [lastPaintedObject, setLastPaintedObject] = useState<string | null>(null);
  const [wordBubbles, setWordBubbles] = useState<WordBubble[]>([]);
  const [sceneObjects, setSceneObjects] = useState<SceneObject[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [draggedWord, setDraggedWord] = useState<DraggedWord | null>(null);
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [paintEffect, setPaintEffect] = useState<{ id: number; x: number; y: number; color: string; word: string } | null>(null);
  const [sentenceObject, setSentenceObject] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GalleryEntry[]>([]);
  const [showChallengeBanner, setShowChallengeBanner] = useState<string | null>(null);
  const [tutorial, setTutorial] = useState<{ step: number; show: boolean }>({ step: 0, show: true });
  const [particles, setParticles] = useState<Particle[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const comboTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const objectElementsRef = useRef<Record<string, HTMLDivElement>>({});

  const getContainerSize = useCallback((): ContainerSize => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 500 };
  }, []);

  const getSceneSize = useCallback((): ContainerSize => {
    if (sceneRef.current) {
      return {
        width: sceneRef.current.offsetWidth,
        height: sceneRef.current.offsetHeight,
      };
    }
    return { width: 800, height: 400 };
  }, []);

  const getLevelConfig = useCallback((lvl: number): LevelConfig => {
    const idx = Math.min(lvl - 1, LEVELS.length - 1);
    return LEVELS[idx];
  }, []);

  // Spawn particles for effects
  const spawnParticles = useCallback((x: number, y: number, color: string, count: number, type: Particle['type'] = 'splash') => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        id: getNewParticleId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.6,
        color,
        size: type === 'sparkle' ? 3 + Math.random() * 5 : 4 + Math.random() * 8,
        type,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Create word bubbles for a level
  const createWordBubbles = useCallback((config: LevelConfig): WordBubble[] => {
    const size = getContainerSize();
    const bubbles: WordBubble[] = [];
    const availableWords: WordDef[] = [];

    for (const cat of config.availableCategories) {
      if (ALL_WORDS[cat]) {
        availableWords.push(...ALL_WORDS[cat]);
      }
    }

    // Shuffle and pick 8-12 words
    const shuffled = [...availableWords].sort(() => Math.random() - 0.5);
    const count = Math.min(10, shuffled.length);

    // Also ensure challenge words are included
    const challengeWords = new Set<string>();
    for (const ch of config.challenges) {
      for (const w of ch.words) {
        challengeWords.add(w);
      }
    }

    const selectedWords: WordDef[] = [];
    // First add challenge words
    for (const cw of challengeWords) {
      const found = availableWords.find(w => w.word === cw);
      if (found && !selectedWords.find(s => s.word === found.word)) {
        selectedWords.push(found);
      }
    }
    // Fill rest
    for (const sw of shuffled) {
      if (selectedWords.length >= count) break;
      if (!selectedWords.find(s => s.word === sw.word)) {
        selectedWords.push(sw);
      }
    }

    const bubbleAreaTop = size.height * 0.65;
    const bubbleAreaBottom = size.height - 80;
    const bubbleAreaHeight = bubbleAreaBottom - bubbleAreaTop;

    for (const word of selectedWords) {
      const radius = 30 + word.word.length * 3;
      bubbles.push({
        id: getNewWordId(),
        word,
        x: radius + Math.random() * (size.width - radius * 2),
        y: bubbleAreaTop + Math.random() * bubbleAreaHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius,
      });
    }

    return bubbles;
  }, [getContainerSize]);

  // Initialize a level
  const initLevel = useCallback((lvl: number) => {
    const config = getLevelConfig(lvl);

    // Create scene objects
    const objects: SceneObject[] = config.objects.map(obj => ({
      ...obj,
      appliedWords: [],
      currentColor: obj.baseColor,
      currentScale: obj.scale,
      animClass: '',
      particles: [],
    }));

    // Create challenges
    const levelChallenges: Challenge[] = config.challenges.map(ch => ({
      ...ch,
      completed: false,
    }));

    setSceneObjects(objects);
    setChallenges(levelChallenges);
    setWordBubbles(createWordBubbles(config));
    setDraggedWord(null);
    setHoveredObject(null);
    setPaintEffect(null);
    setSentenceObject(null);
    setCombo(0);
    setLastPaintedObject(null);
    setShowChallengeBanner(null);
    objectElementsRef.current = {};
  }, [getLevelConfig, createWordBubbles]);

  const startGame = () => {
    setGameScreen('playing');
    setLevel(1);
    setScore(0);
    setTutorial({ step: 0, show: true });
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameScreen('playing');
    initLevel(newLevel);
  };

  const saveToGallery = useCallback(() => {
    const config = getLevelConfig(level);
    const entry: GalleryEntry = {
      level,
      sceneName: config.sceneName,
      objectStates: sceneObjects.map(obj => ({
        name: obj.name,
        words: obj.appliedWords.map(aw => aw.word),
      })),
      score,
      timestamp: Date.now(),
    };
    setGallery(prev => [...prev, entry]);
  }, [level, sceneObjects, score, getLevelConfig]);

  const finishLevel = useCallback(() => {
    saveToGallery();
    setGameScreen('levelComplete');
  }, [saveToGallery]);

  // Apply a word to an object
  const applyWord = useCallback((wordBubble: WordBubble, objectId: string) => {
    const word = wordBubble.word;

    setSceneObjects(prev => {
      const obj = prev.find(o => o.id === objectId);
      if (!obj) return prev;

      // Check if object accepts this category
      if (!obj.accepts.includes(word.category)) return prev;

      // Check if same word already applied
      if (obj.appliedWords.find(aw => aw.word === word.word)) return prev;

      const applied: AppliedWord = {
        word: word.word,
        category: word.category,
        effect: word.effect,
        timestamp: Date.now(),
      };

      let newColor = obj.currentColor;
      let newScale = obj.currentScale;
      let newAnimClass = obj.animClass;

      if (word.category === 'color') {
        newColor = word.effect;
      } else if (word.category === 'size') {
        const baseScale = obj.scale;
        newScale = baseScale * parseFloat(word.effect);
      } else if (word.category === 'action') {
        if (word.effect === 'bouncy') newAnimClass = 'anim-bouncy';
        if (word.effect === 'spinning') newAnimClass = 'anim-spinning';
        if (word.effect === 'sparkly') newAnimClass = 'anim-sparkly';
        if (word.effect === 'glowing') newAnimClass = 'anim-glowing';
      } else if (word.category === 'feel') {
        if (word.effect === 'soft') newAnimClass = 'anim-soft';
        if (word.effect === 'rough') newAnimClass = 'anim-rough';
        if (word.effect === 'smooth') newAnimClass = 'anim-smooth';
        if (word.effect === 'bumpy') newAnimClass = 'anim-bumpy';
      }

      return prev.map(o =>
        o.id === objectId
          ? { ...o, appliedWords: [...o.appliedWords, applied], currentColor: newColor, currentScale: newScale, animClass: newAnimClass }
          : o
      );
    });

    // Remove the word bubble
    setWordBubbles(prev => prev.filter(b => b.id !== wordBubble.id));

    // Show paint effect
    const el = objectElementsRef.current[objectId];
    if (el && sceneRef.current) {
      const sceneRect = sceneRef.current.getBoundingClientRect();
      const objRect = el.getBoundingClientRect();
      const x = objRect.left + objRect.width / 2 - sceneRect.left;
      const y = objRect.top + objRect.height / 2 - sceneRect.top;
      setPaintEffect({ id: Date.now(), x, y, color: word.color, word: word.word });
      setTimeout(() => setPaintEffect(null), 1200);

      // Spawn particles
      const pColor = word.category === 'color' ? word.effect : word.color;
      spawnParticles(x, y, pColor, 12, word.category === 'action' ? 'sparkle' : 'splash');
    }

    // Set sentence focus
    setSentenceObject(objectId);

    // Score
    let points = 10;

    // Combo system
    if (lastPaintedObject === objectId) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      points += newCombo * 5;
    } else {
      setCombo(1);
    }
    setLastPaintedObject(objectId);

    if (comboTimeoutRef.current) clearTimeout(comboTimeoutRef.current);
    comboTimeoutRef.current = setTimeout(() => {
      setCombo(0);
      setLastPaintedObject(null);
    }, 4000);

    setScore(prev => prev + points);

    // Tutorial progression
    if (tutorial.show && tutorial.step === 0) {
      setTutorial({ step: 1, show: true });
    } else if (tutorial.show && tutorial.step === 1) {
      setTutorial({ step: 2, show: false });
    }

    // Check challenges
    setChallenges(prev => {
      const updated = prev.map(ch => {
        if (ch.completed || ch.objectId !== objectId) return ch;
        // Check if all challenge words are now applied
        const obj = sceneObjects.find(o => o.id === objectId);
        if (!obj) return ch;
        const allApplied = [...obj.appliedWords.map(aw => aw.word), word.word];
        const met = ch.words.every(w => allApplied.includes(w));
        if (met) {
          setScore(s => s + 25);
          setShowChallengeBanner(ch.description);
          setTimeout(() => setShowChallengeBanner(null), 2000);
          return { ...ch, completed: true };
        }
        return ch;
      });
      return updated;
    });
  }, [combo, lastPaintedObject, sceneObjects, spawnParticles, tutorial]);

  // Physics loop for word bubbles and particles
  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const updatePhysics = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 2);
      lastTimeRef.current = timestamp;
      const size = getContainerSize();

      // Bubble physics area: bottom 35% of container
      const bubbleAreaTop = size.height * 0.65;
      const bubbleAreaBottom = size.height - 50;

      setWordBubbles(prev => prev.map(bubble => {
        if (draggedWord?.id === bubble.id) return bubble;
        let { x, y, vx, vy, radius } = bubble;
        x += vx * delta;
        y += vy * delta;
        vx *= FRICTION;
        vy *= FRICTION;

        const minX = radius;
        const maxX = size.width - radius;
        const minY = bubbleAreaTop;
        const maxY = bubbleAreaBottom - radius;

        if (x < minX) { x = minX; vx = Math.abs(vx) * BOUNCE; }
        if (x > maxX) { x = maxX; vx = -Math.abs(vx) * BOUNCE; }
        if (y < minY) { y = minY; vy = Math.abs(vy) * BOUNCE; }
        if (y > maxY) { y = maxY; vy = -Math.abs(vy) * BOUNCE; }

        // Small random drift
        vx += (Math.random() - 0.5) * 0.08;
        vy += (Math.random() - 0.5) * 0.08;

        return { ...bubble, x, y, vx, vy };
      }));

      // Update particles
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          x: p.x + p.vx * delta,
          y: p.y + p.vy * delta,
          vy: p.vy + 0.1 * delta, // gravity
          life: p.life - (delta * 0.016) / p.maxLife,
        })).filter(p => p.life > 0);
        return updated;
      });

      // Spawn ongoing sparkle particles for sparkly/glowing objects
      setSceneObjects(prev => {
        let needsSparkles = false;
        for (const obj of prev) {
          if (obj.appliedWords.some(aw => aw.effect === 'sparkly' || aw.effect === 'glowing')) {
            needsSparkles = true;
            break;
          }
        }
        if (needsSparkles && Math.random() < 0.15) {
          for (const obj of prev) {
            const hasSparkle = obj.appliedWords.some(aw => aw.effect === 'sparkly' || aw.effect === 'glowing');
            if (hasSparkle) {
              const el = objectElementsRef.current[obj.id];
              if (el && sceneRef.current) {
                const sceneRect = sceneRef.current.getBoundingClientRect();
                const objRect = el.getBoundingClientRect();
                const cx = objRect.left + objRect.width / 2 - sceneRect.left;
                const cy = objRect.top + objRect.height / 2 - sceneRect.top;
                const px = cx + (Math.random() - 0.5) * objRect.width * 0.8;
                const py = cy + (Math.random() - 0.5) * objRect.height * 0.8;
                const sparkleColor = obj.currentColor !== '#9ca3af' ? obj.currentColor : '#fbbf24';
                setParticles(pp => [...pp, {
                  id: getNewParticleId(),
                  x: px,
                  y: py,
                  vx: (Math.random() - 0.5) * 1,
                  vy: -1 - Math.random() * 2,
                  life: 1,
                  maxLife: 0.8 + Math.random() * 0.5,
                  color: sparkleColor,
                  size: 2 + Math.random() * 4,
                  type: 'sparkle',
                }]);
              }
            }
          }
        }
        return prev;
      });

      animationRef.current = requestAnimationFrame(updatePhysics);
    };

    animationRef.current = requestAnimationFrame(updatePhysics);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameScreen, draggedWord, getContainerSize]);

  // Drag handlers
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    bubble: WordBubble
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDraggedWord({
      ...bubble,
      offsetX: clientX - rect.left - bubble.x,
      offsetY: clientY - rect.top - bubble.y,
    });
    if (tutorial.show && tutorial.step === 0) {
      // tutorial will progress on apply
    }
  };

  const getObjectAtPosition = useCallback((x: number, y: number): string | null => {
    // Check against scene object positions
    if (!sceneRef.current) return null;
    const sceneRect = sceneRef.current.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return null;

    for (const obj of sceneObjects) {
      const el = objectElementsRef.current[obj.id];
      if (!el) continue;
      const objRect = el.getBoundingClientRect();
      // Convert x,y from container-relative to page-relative
      const pageX = x + containerRect.left;
      const pageY = y + containerRect.top;

      // Expand hit area
      const padding = 15;
      if (
        pageX >= objRect.left - padding &&
        pageX <= objRect.right + padding &&
        pageY >= objRect.top - padding &&
        pageY <= objRect.bottom + padding
      ) {
        return obj.id;
      }
    }
    return null;
  }, [sceneObjects]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!draggedWord || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const newX = Math.max(20, Math.min(rect.width - 20, clientX - rect.left - draggedWord.offsetX));
    const newY = Math.max(20, Math.min(rect.height - 20, clientY - rect.top - draggedWord.offsetY));

    // Check for hover over scene objects
    const objId = getObjectAtPosition(newX, newY);
    setHoveredObject(objId);

    setWordBubbles(prev => prev.map(b =>
      b.id === draggedWord.id ? { ...b, x: newX, y: newY, vx: 0, vy: 0 } : b
    ));
  }, [draggedWord, getObjectAtPosition]);

  const handleDragEnd = useCallback(() => {
    if (!draggedWord) return;
    setHoveredObject(null);

    const currentBubble = wordBubbles.find(b => b.id === draggedWord.id);
    if (!currentBubble) { setDraggedWord(null); return; }

    // Check if dropped on a scene object
    const objId = getObjectAtPosition(currentBubble.x, currentBubble.y);
    if (objId) {
      const obj = sceneObjects.find(o => o.id === objId);
      if (obj && obj.accepts.includes(currentBubble.word.category)) {
        // Check if same word already applied
        if (!obj.appliedWords.find(aw => aw.word === currentBubble.word.word)) {
          applyWord(currentBubble, objId);
          setDraggedWord(null);
          return;
        }
      }
    }

    // Not dropped on valid target - give it a nudge
    setWordBubbles(prev => prev.map(b =>
      b.id === draggedWord.id ? { ...b, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 3 } : b
    ));
    setDraggedWord(null);
  }, [draggedWord, wordBubbles, sceneObjects, getObjectAtPosition, applyWord]);

  // Drag event listeners
  useEffect(() => {
    if (!draggedWord) return;
    const moveHandler = (e: MouseEvent | TouchEvent) => handleDragMove(e);
    const endHandler = () => handleDragEnd();
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', endHandler);
    window.addEventListener('touchmove', moveHandler, { passive: false });
    window.addEventListener('touchend', endHandler);
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', endHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('touchend', endHandler);
    };
  }, [draggedWord, handleDragMove, handleDragEnd]);

  // Spawn new word bubbles periodically
  useEffect(() => {
    if (gameScreen !== 'playing') return;
    const interval = setInterval(() => {
      setWordBubbles(prev => {
        if (prev.length >= 12) return prev;
        const config = getLevelConfig(level);
        const availableWords: WordDef[] = [];
        for (const cat of config.availableCategories) {
          if (ALL_WORDS[cat]) availableWords.push(...ALL_WORDS[cat]);
        }
        const word = availableWords[Math.floor(Math.random() * availableWords.length)];
        if (!word) return prev;
        // Don't spawn if this word already exists
        if (prev.find(b => b.word.word === word.word)) return prev;
        const size = getContainerSize();
        const radius = 30 + word.word.length * 3;
        const bubbleAreaTop = size.height * 0.65;
        return [...prev, {
          id: getNewWordId(),
          word,
          x: radius + Math.random() * (size.width - radius * 2),
          y: bubbleAreaTop + Math.random() * (size.height * 0.25),
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius,
        }];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [gameScreen, level, getLevelConfig, getContainerSize]);

  // Build sentence for focused object
  const buildSentence = useCallback((objectId: string | null): string => {
    if (!objectId) return '';
    const obj = sceneObjects.find(o => o.id === objectId);
    if (!obj || obj.appliedWords.length === 0) return '';

    // English adjective ordering: size, feel, color + name
    const sizeWords = obj.appliedWords.filter(aw => aw.category === 'size').map(aw => aw.word);
    const feelWords = obj.appliedWords.filter(aw => aw.category === 'feel').map(aw => aw.word);
    const colorWords = obj.appliedWords.filter(aw => aw.category === 'color').map(aw => aw.word);
    const actionWords = obj.appliedWords.filter(aw => aw.category === 'action').map(aw => aw.word);

    const adjectives = [...actionWords, ...sizeWords, ...feelWords, ...colorWords];
    if (adjectives.length === 0) return '';

    return `The ${adjectives.join(' ')} ${obj.name}`;
  }, [sceneObjects]);

  const currentSentence = buildSentence(sentenceObject);

  // Count painted objects
  const paintedCount = sceneObjects.filter(o => o.appliedWords.length > 0).length;
  const totalObjects = sceneObjects.length;
  const challengesCompleted = challenges.filter(c => c.completed).length;
  const totalChallenges = challenges.length;
  const config = getLevelConfig(level);

  // ---------- INTRO SCREEN ----------
  if (gameScreen === 'intro') {
    return (
      <div className="word-painter">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="paint-splat" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: 15 + Math.random() * 40,
                height: 15 + Math.random() * 40,
                background: [
                  '#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#f97316', '#ec4899'
                ][Math.floor(Math.random() * 7)],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.15 + Math.random() * 0.15,
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-icon">{'🎨'}</span>
              <h1>Word Painter</h1>
              <span className="logo-icon mirror">{'🖌️'}</span>
            </div>
            <p className="tagline">Paint the World with Words!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="word-pill" style={{ background: '#ef4444' }}>red</span>
                  <span className="arrow">{'\u2192'}</span>
                  <span className="mini-obj">{'🌸'}</span>
                </div>
                <p><strong>DRAG</strong> colour words to <span className="hl-color">PAINT</span> objects!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="word-pill" style={{ background: '#06b6d4' }}>big</span>
                  <span className="arrow">{'\u2192'}</span>
                  <span className="mini-obj grow">{'🐕'}</span>
                </div>
                <p><strong>DRAG</strong> size words to <span className="hl-size">RESIZE</span> objects!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="word-pill" style={{ background: '#fbbf24' }}>sparkly</span>
                  <span className="arrow">{'\u2192'}</span>
                  <span className="mini-obj sparkle">{'⭐'}</span>
                </div>
                <p><strong>DRAG</strong> action words for <span className="hl-action">MAGIC</span> effects!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="sentence-preview">The <em>red big</em> dog</span>
                </div>
                <p>Build <span className="hl-sentence">SENTENCES</span> as you describe!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">{'🎨'}</span>
              Start Painting
              <span className="btn-icon">{'🖌️'}</span>
            </button>
            {gallery.length > 0 && (
              <button className="gallery-btn" onClick={() => setGameScreen('gallery')}>
                <span className="btn-icon">{'🖼️'}</span>
                View Gallery ({gallery.length})
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---------- GALLERY SCREEN ----------
  if (gameScreen === 'gallery') {
    return (
      <div className="word-painter">
        <style>{styles}</style>
        <div className="gallery-screen">
          <div className="gallery-header">
            <button className="back-btn" onClick={() => setGameScreen('intro')}>{'\u2190'}</button>
            <h1>{'🖼️'} My Gallery</h1>
          </div>
          <div className="gallery-grid">
            {gallery.length === 0 && (
              <div className="gallery-empty">
                <p>No paintings yet! Complete a level to save your art.</p>
              </div>
            )}
            {gallery.map((entry, i) => (
              <div key={i} className="polaroid">
                <div className="polaroid-image">
                  <div className="polaroid-scene">
                    {entry.objectStates.map((obj, j) => (
                      <div key={j} className="polaroid-obj">
                        <span className="polaroid-name">{obj.name}</span>
                        <div className="polaroid-words">
                          {obj.words.map((w, k) => (
                            <span key={k} className="polaroid-word">{w}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="polaroid-label">
                  <span className="polaroid-title">{entry.sceneName}</span>
                  <span className="polaroid-score">{'⭐'} {entry.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---------- LEVEL COMPLETE SCREEN ----------
  if (gameScreen === 'levelComplete') {
    return (
      <div className="word-painter">
        <style>{styles}</style>
        <div className="complete-screen" style={{ background: config.bgGradient }}>
          <div className="complete-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                background: ['#ef4444','#3b82f6','#22c55e','#eab308','#a855f7','#f97316','#ec4899'][Math.floor(Math.random() * 7)],
              }} />
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">{'🎉'} Beautiful Painting! {'🎉'}</h1>
            <p className="complete-scene">{config.sceneIcon} {config.sceneName} - Level {level}</p>

            <div className="stats-row">
              <div className="stat-card">
                <span className="stat-icon">{'🎨'}</span>
                <span className="stat-value">{paintedCount}/{totalObjects}</span>
                <span className="stat-label">Painted</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">{'🎯'}</span>
                <span className="stat-value">{challengesCompleted}/{totalChallenges}</span>
                <span className="stat-label">Challenges</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">{'⭐'}</span>
                <span className="stat-value">{score}</span>
                <span className="stat-label">Score</span>
              </div>
            </div>

            <div className="painting-summary">
              <h3>Your Descriptions:</h3>
              {sceneObjects.filter(o => o.appliedWords.length > 0).map(obj => {
                const sentence = buildSentence(obj.id);
                return sentence ? (
                  <div key={obj.id} className="summary-sentence">{sentence}</div>
                ) : null;
              })}
            </div>

            <div className="complete-buttons">
              {level < LEVELS.length && (
                <button className="next-btn" onClick={nextLevel}>
                  Next Scene {'\u2192'}
                </button>
              )}
              <button className="gallery-view-btn" onClick={() => setGameScreen('gallery')}>
                {'🖼️'} View Gallery
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- PLAYING SCREEN ----------
  return (
    <div className="word-painter">
      <style>{styles}</style>
      <div className="game-screen" ref={containerRef}>
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>{'\u2190'}</button>
            <div className="level-badge">{config.sceneIcon} {config.sceneName}</div>
          </div>
          <div className="header-center">
            {currentSentence && (
              <div className="sentence-display">
                <span className="sentence-quote">{'\u201C'}</span>
                {currentSentence}
                <span className="sentence-quote">{'\u201D'}</span>
              </div>
            )}
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">{'⭐'}</span>
              <span>{score}</span>
            </div>
            {combo > 1 && (
              <div className="combo-badge">
                x{combo} Combo!
              </div>
            )}
          </div>
        </div>

        {/* Challenges bar */}
        <div className="challenges-bar">
          {challenges.map((ch, i) => (
            <div key={i} className={`challenge-chip ${ch.completed ? 'completed' : ''}`}>
              <span className="challenge-icon">{ch.completed ? '\u{2705}' : '\u{1F3AF}'}</span>
              <span className="challenge-text">{ch.description}</span>
            </div>
          ))}
        </div>

        {/* Scene area */}
        <div className="scene-area" ref={sceneRef} style={{ background: config.bgGradient }}>
          {/* Scene objects */}
          {sceneObjects.map(obj => {
            const isHovered = hoveredObject === obj.id;
            const hasColor = obj.currentColor !== obj.baseColor;
            const hasGlow = obj.appliedWords.some(aw => aw.effect === 'glowing');
            const hasSparkle = obj.appliedWords.some(aw => aw.effect === 'sparkly');
            const hasSoft = obj.appliedWords.some(aw => aw.effect === 'soft');
            const hasRough = obj.appliedWords.some(aw => aw.effect === 'rough');
            const hasSmooth = obj.appliedWords.some(aw => aw.effect === 'smooth');
            const hasBumpy = obj.appliedWords.some(aw => aw.effect === 'bumpy');

            // Build filter string
            let filterStr = '';
            if (hasGlow) filterStr += `drop-shadow(0 0 8px ${obj.currentColor}) drop-shadow(0 0 16px ${obj.currentColor}) `;
            if (hasSoft) filterStr += 'blur(1px) ';
            if (hasRough) filterStr += 'contrast(1.5) ';
            if (hasSmooth) filterStr += 'saturate(1.3) ';

            return (
              <div
                key={obj.id}
                ref={el => { if (el) objectElementsRef.current[obj.id] = el; }}
                className={`scene-object ${isHovered ? 'hovered' : ''} ${obj.animClass} ${hasSparkle ? 'has-sparkle' : ''} ${hasBumpy ? 'anim-bumpy' : ''}`}
                style={{
                  left: `${obj.x}%`,
                  top: `${obj.y}%`,
                  transform: `translate(-50%, -50%) scale(${obj.currentScale})`,
                  filter: filterStr || undefined,
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease',
                }}
              >
                <svg viewBox="0 0 100 100" className="object-svg" style={{ width: 100, height: 100 }}>
                  <path
                    d={SVG_PATHS[obj.svgPath]}
                    fill={hasColor ? 'none' : 'none'}
                    stroke={obj.currentColor}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transition: 'stroke 0.6s ease, fill 0.6s ease',
                      fill: hasColor ? obj.currentColor + '40' : 'none',
                    }}
                  />
                </svg>
                {/* Object name label */}
                <div className="object-label">{obj.name}</div>
                {/* Word tags */}
                {obj.appliedWords.length > 0 && (
                  <div className="applied-words">
                    {obj.appliedWords.map((aw, i) => (
                      <span
                        key={i}
                        className="applied-tag"
                        style={{
                          background: ALL_WORDS[aw.category]?.find(w => w.word === aw.word)?.color || '#666',
                        }}
                      >
                        {aw.word}
                      </span>
                    ))}
                  </div>
                )}
                {/* Hover ring */}
                {isHovered && <div className="object-hover-ring" />}
              </div>
            );
          })}

          {/* Particles */}
          {particles.map(p => (
            <div
              key={p.id}
              className={`particle particle-${p.type}`}
              style={{
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                background: p.color,
                opacity: p.life,
                transform: `translate(-50%, -50%) ${p.type === 'sparkle' ? `rotate(${p.life * 360}deg)` : ''}`,
              }}
            />
          ))}

          {/* Paint effect */}
          {paintEffect && (
            <div
              key={paintEffect.id}
              className="paint-effect"
              style={{
                left: paintEffect.x,
                top: paintEffect.y,
                '--paint-color': paintEffect.color,
              } as React.CSSProperties}
            >
              <div className="paint-splash" />
              <div className="paint-word">{paintEffect.word}!</div>
            </div>
          )}

          {/* Challenge complete banner */}
          {showChallengeBanner && (
            <div className="challenge-banner">
              <span>{'🎯'}</span> Challenge Complete! <span>{'🎯'}</span>
            </div>
          )}

          {/* Tutorial */}
          {tutorial.show && gameScreen === 'playing' && (
            <div className="tutorial-overlay">
              {tutorial.step === 0 && (
                <div className="tutorial-tip" style={{ bottom: '15%', left: '50%' }}>
                  <span className="tutorial-icon">{'👆'}</span>
                  <p>Drag a word onto an object!</p>
                </div>
              )}
              {tutorial.step === 1 && (
                <div className="tutorial-tip" style={{ bottom: '15%', left: '50%' }}>
                  <span className="tutorial-icon">{'🎨'}</span>
                  <p>Great! Try more words on the same object for a combo!</p>
                </div>
              )}
            </div>
          )}

          {/* Finish painting button */}
          {paintedCount >= 3 && (
            <button className="finish-btn" onClick={finishLevel}>
              {'🖼️'} Finish Painting
            </button>
          )}
        </div>

        {/* Word bubbles area - paint palette style */}
        <div className="palette-area">
          <div className="palette-decoration">
            <div className="palette-thumb" />
          </div>
          <div className="bubbles-zone">
            {wordBubbles.map(bubble => {
              const isDragging = draggedWord?.id === bubble.id;
              const catClass = `cat-${bubble.word.category}`;
              return (
                <div
                  key={bubble.id}
                  className={`word-bubble ${isDragging ? 'dragging' : ''} ${catClass}`}
                  style={{
                    left: bubble.x,
                    top: bubble.y - (getContainerSize().height * 0.65),
                    '--word-color': bubble.word.color,
                    width: bubble.radius * 2,
                    height: bubble.radius * 2,
                  } as React.CSSProperties}
                  onMouseDown={(e) => handleDragStart(e, bubble)}
                  onTouchStart={(e) => handleDragStart(e, bubble)}
                >
                  <div className="word-bubble-shine" />
                  <div className="word-bubble-text">{bubble.word.word}</div>
                </div>
              );
            })}
          </div>
          <div className="palette-hint">
            <span className="hint-color">{'🔴'} Colours</span>
            <span className="hint-size">{'📏'} Sizes</span>
            {config.availableCategories.includes('feel') && <span className="hint-feel">{'✋'} Textures</span>}
            {config.availableCategories.includes('action') && <span className="hint-action">{'✨'} Actions</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- STYLES ----------
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .word-painter {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #1a1025;
  }

  /* ===== INTRO SCREEN ===== */
  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #1a1025 0%, #2d1b4e 50%, #1a1025 100%);
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .paint-splat {
    position: absolute;
    border-radius: 50%;
    animation: splatFloat 5s ease-in-out infinite;
    filter: blur(8px);
  }

  @keyframes splatFloat {
    0%, 100% { transform: translateY(0) scale(1) rotate(0deg); }
    33% { transform: translateY(-15px) scale(1.1) rotate(5deg); }
    66% { transform: translateY(10px) scale(0.95) rotate(-3deg); }
  }

  .intro-content {
    position: relative; z-index: 10; text-align: center;
    padding: 2rem; max-width: 520px;
  }

  .logo {
    display: flex; align-items: center; justify-content: center;
    gap: 1rem; margin-bottom: 0.5rem;
  }

  .logo h1 {
    font-size: clamp(2rem, 7vw, 3rem);
    font-weight: 900;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #a855f7, #ec4899);
    background-size: 200% 100%;
    animation: rainbowShift 4s ease-in-out infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @keyframes rainbowShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .logo-icon { font-size: 2.5rem; animation: iconBounce 2s ease-in-out infinite; }
  .logo-icon.mirror { transform: scaleX(-1); animation-delay: 0.3s; }

  @keyframes iconBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(10deg); }
  }

  .tagline { color: #c4b5fd; font-size: 1.2rem; margin-bottom: 2rem; font-weight: 600; }

  .instructions-card {
    background: rgba(255,255,255,0.06);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1.2rem; }

  .instruction { margin-bottom: 1.2rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; margin-bottom: 0.4rem;
  }

  .word-pill {
    padding: 0.3rem 0.8rem; border-radius: 20px;
    font-weight: 800; color: white; font-size: 0.9rem;
  }

  .arrow { color: #64748b; font-size: 1.2rem; }

  .mini-obj { font-size: 2rem; transition: transform 0.3s ease; }
  .mini-obj.grow { font-size: 2.5rem; }
  .mini-obj.sparkle { animation: miniSparkle 1s ease-in-out infinite; }

  @keyframes miniSparkle {
    0%, 100% { filter: brightness(1); transform: scale(1); }
    50% { filter: brightness(1.5) drop-shadow(0 0 6px gold); transform: scale(1.1); }
  }

  .sentence-preview {
    font-size: 1rem; color: #e2e8f0; background: rgba(255,255,255,0.1);
    padding: 0.3rem 0.8rem; border-radius: 12px;
  }

  .sentence-preview em { color: #fbbf24; font-style: italic; }

  .instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .hl-color { font-weight: 700; color: #ef4444; }
  .hl-size { font-weight: 700; color: #06b6d4; }
  .hl-action { font-weight: 700; color: #fbbf24; }
  .hl-sentence { font-weight: 700; color: #c084fc; }

  .start-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #ef4444, #f97316, #eab308);
    background-size: 200% 100%;
    animation: btnGradient 3s ease infinite;
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(239,68,68,0.4);
  }

  @keyframes btnGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(239,68,68,0.5);
  }

  .gallery-btn {
    display: inline-flex; align-items: center; gap: 0.6rem;
    margin-top: 1rem; padding: 0.7rem 1.5rem;
    font-family: 'Nunito', sans-serif; font-size: 1rem; font-weight: 700;
    color: #c4b5fd; background: rgba(255,255,255,0.08);
    border: 2px solid rgba(196,181,253,0.3); border-radius: 30px;
    cursor: pointer; transition: all 0.2s ease;
  }

  .gallery-btn:hover { border-color: rgba(196,181,253,0.6); color: white; background: rgba(255,255,255,0.12); }

  .btn-icon { font-size: 1.4rem; }

  /* ===== GALLERY SCREEN ===== */
  .gallery-screen {
    height: 100%; display: flex; flex-direction: column;
    background: linear-gradient(180deg, #1a1025 0%, #2d1b4e 100%);
    overflow-y: auto;
  }

  .gallery-header {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem 1.5rem; background: rgba(0,0,0,0.3);
  }

  .gallery-header h1 { color: white; font-size: 1.5rem; }

  .gallery-grid {
    display: flex; flex-wrap: wrap; gap: 1.5rem;
    padding: 1.5rem; justify-content: center;
  }

  .gallery-empty { color: #94a3b8; text-align: center; padding: 3rem; width: 100%; }

  .polaroid {
    width: 220px; background: #fefce8;
    border-radius: 4px; padding: 12px 12px 0 12px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.4);
    transform: rotate(${Math.random() * 6 - 3}deg);
    transition: transform 0.3s ease;
    animation: polaroidIn 0.5s ease;
  }

  .polaroid:nth-child(even) { transform: rotate(${Math.random() * 6 - 3}deg); }

  .polaroid:hover { transform: rotate(0deg) scale(1.05); }

  @keyframes polaroidIn {
    0% { opacity: 0; transform: scale(0.8) rotate(10deg); }
    100% { opacity: 1; }
  }

  .polaroid-image {
    background: linear-gradient(135deg, #e0f2fe, #fce7f3);
    border-radius: 2px; padding: 1rem; min-height: 140px;
    display: flex; align-items: center; justify-content: center;
  }

  .polaroid-scene {
    display: flex; flex-direction: column; gap: 0.4rem; width: 100%;
  }

  .polaroid-obj {
    display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;
  }

  .polaroid-name {
    font-size: 0.75rem; font-weight: 700; color: #374151;
    text-transform: capitalize;
  }

  .polaroid-words { display: flex; gap: 0.2rem; flex-wrap: wrap; }

  .polaroid-word {
    font-size: 0.65rem; padding: 0.1rem 0.4rem;
    background: rgba(139,92,246,0.2); border-radius: 8px;
    color: #6d28d9; font-weight: 600;
  }

  .polaroid-label {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.6rem 0; font-family: 'Nunito', sans-serif;
  }

  .polaroid-title { font-size: 0.85rem; font-weight: 700; color: #1f2937; }
  .polaroid-score { font-size: 0.75rem; color: #92400e; font-weight: 600; }

  /* ===== COMPLETE SCREEN ===== */
  .complete-screen {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .confetti {
    position: absolute; top: -20px; width: 10px; height: 10px;
    border-radius: 2px; animation: confettiFall 3s ease-in-out infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(calc(100vh + 20px)) rotate(720deg); opacity: 0.3; }
  }

  .complete-content {
    position: relative; z-index: 10; text-align: center;
    padding: 2rem; max-width: 500px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: white;
    margin-bottom: 0.5rem; text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }

  .complete-scene { color: rgba(255,255,255,0.8); font-size: 1.1rem; margin-bottom: 1.5rem; }

  .stats-row {
    display: flex; justify-content: center; gap: 1rem;
    margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .stat-card {
    display: flex; flex-direction: column; align-items: center;
    padding: 0.8rem 1.2rem;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    min-width: 90px;
  }

  .stat-icon { font-size: 1.5rem; margin-bottom: 0.3rem; }
  .stat-value { font-size: 1.5rem; font-weight: 900; color: white; }
  .stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.7); }

  .painting-summary {
    background: rgba(0,0,0,0.2); border-radius: 16px;
    padding: 1rem 1.2rem; margin-bottom: 1.5rem;
    text-align: left; max-height: 140px; overflow-y: auto;
  }

  .painting-summary h3 { color: rgba(255,255,255,0.8); font-size: 0.9rem; margin-bottom: 0.5rem; }

  .summary-sentence {
    color: white; font-size: 1rem; font-weight: 600;
    padding: 0.3rem 0; border-bottom: 1px solid rgba(255,255,255,0.1);
    font-style: italic;
  }

  .summary-sentence:last-child { border-bottom: none; }

  .complete-buttons { display: flex; flex-direction: column; gap: 0.8rem; align-items: center; }

  .next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #ef4444, #f97316);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(239,68,68,0.4);
  }

  .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(239,68,68,0.5);
  }

  .gallery-view-btn {
    padding: 0.7rem 1.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: white;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .gallery-view-btn:hover { background: rgba(255,255,255,0.25); }

  .menu-btn {
    padding: 0.6rem 1.5rem; font-family: 'Nunito', sans-serif;
    font-size: 0.9rem; font-weight: 700; color: rgba(255,255,255,0.6);
    background: transparent;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* ===== GAME SCREEN ===== */
  .game-screen {
    height: 100%; display: flex; flex-direction: column;
    position: relative; touch-action: none;
  }

  .game-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 0.8rem; background: rgba(0,0,0,0.5);
    z-index: 50; min-height: 48px; flex-shrink: 0;
  }

  .header-left, .header-right { display: flex; align-items: center; gap: 0.5rem; }

  .back-btn {
    width: 36px; height: 36px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 10px; color: white; font-size: 1.1rem;
    cursor: pointer; transition: all 0.2s ease; flex-shrink: 0;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.35rem 0.8rem; font-size: 0.85rem;
    background: linear-gradient(135deg, #ef4444, #f97316);
    border-radius: 16px; font-weight: 700; color: white;
    white-space: nowrap;
  }

  .sentence-display {
    padding: 0.35rem 1rem;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 16px; color: white;
    font-size: 0.9rem; font-weight: 600;
    font-style: italic; white-space: nowrap;
    animation: sentenceIn 0.4s ease;
    max-width: 300px; overflow: hidden; text-overflow: ellipsis;
  }

  @keyframes sentenceIn {
    0% { opacity: 0; transform: translateY(-8px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .sentence-quote { color: #fbbf24; font-size: 1.1rem; margin: 0 0.2rem; }

  .score-badge {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.35rem 0.8rem; background: rgba(251,191,36,0.2);
    border-radius: 16px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  .combo-badge {
    padding: 0.3rem 0.7rem; background: linear-gradient(135deg, #f97316, #ef4444);
    border-radius: 14px; color: white; font-weight: 800; font-size: 0.8rem;
    animation: comboPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes comboPop {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }

  /* Challenges bar */
  .challenges-bar {
    display: flex; gap: 0.5rem; padding: 0.4rem 0.8rem;
    background: rgba(0,0,0,0.3); overflow-x: auto;
    flex-shrink: 0; z-index: 40;
  }

  .challenge-chip {
    display: flex; align-items: center; gap: 0.3rem;
    padding: 0.25rem 0.6rem; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px; white-space: nowrap; flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .challenge-chip.completed {
    background: rgba(74,222,128,0.15);
    border-color: rgba(74,222,128,0.4);
  }

  .challenge-icon { font-size: 0.8rem; }

  .challenge-text { font-size: 0.7rem; color: rgba(255,255,255,0.8); font-weight: 600; }

  .challenge-chip.completed .challenge-text { color: #4ade80; text-decoration: line-through; }

  /* ===== SCENE AREA ===== */
  .scene-area {
    flex: 1; position: relative; overflow: hidden;
    min-height: 0;
    border-bottom: 3px solid rgba(0,0,0,0.2);
  }

  .scene-object {
    position: absolute;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease;
    cursor: default;
    z-index: 5;
  }

  .scene-object.hovered {
    z-index: 15;
  }

  .scene-object.hovered .object-hover-ring {
    display: block;
  }

  .object-svg {
    display: block;
  }

  .object-label {
    position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%);
    font-size: 0.65rem; font-weight: 700; color: rgba(255,255,255,0.7);
    background: rgba(0,0,0,0.4); padding: 0.1rem 0.4rem;
    border-radius: 8px; white-space: nowrap;
    text-transform: capitalize;
  }

  .applied-words {
    position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 2px; flex-wrap: nowrap; z-index: 20;
  }

  .applied-tag {
    font-size: 0.55rem; padding: 0.1rem 0.3rem;
    border-radius: 6px; color: white; font-weight: 700;
    white-space: nowrap; animation: tagIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes tagIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  .object-hover-ring {
    display: none;
    position: absolute; inset: -12px;
    border: 3px dashed rgba(255,255,255,0.6);
    border-radius: 50%; pointer-events: none;
    animation: hoverPulse 0.8s ease-in-out infinite;
  }

  @keyframes hoverPulse {
    0%, 100% { transform: scale(1); opacity: 0.6; border-color: rgba(255,255,255,0.6); }
    50% { transform: scale(1.1); opacity: 1; border-color: rgba(251,191,36,0.8); }
  }

  /* Object animations */
  .anim-bouncy {
    animation: objBounce 0.6s ease-in-out infinite !important;
  }

  @keyframes objBounce {
    0%, 100% { transform: translate(-50%, -50%) scale(var(--bounce-scale, 1)); }
    50% { transform: translate(-50%, calc(-50% - 15px)) scale(var(--bounce-scale, 1)); }
  }

  .anim-spinning {
    animation: objSpin 3s linear infinite !important;
  }

  @keyframes objSpin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  .anim-sparkly .object-svg {
    animation: objSparkle 1.5s ease-in-out infinite;
  }

  @keyframes objSparkle {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.4) drop-shadow(0 0 6px rgba(251,191,36,0.8)); }
  }

  .anim-glowing .object-svg {
    animation: objGlow 2s ease-in-out infinite;
  }

  @keyframes objGlow {
    0%, 100% { filter: brightness(1) drop-shadow(0 0 4px currentColor); }
    50% { filter: brightness(1.3) drop-shadow(0 0 12px currentColor); }
  }

  .anim-soft {
    filter: blur(0.5px) brightness(1.05);
  }

  .anim-rough .object-svg path {
    stroke-dasharray: 4 2;
  }

  .anim-smooth .object-svg path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .anim-bumpy {
    animation: objBumpy 0.3s ease-in-out infinite !important;
  }

  @keyframes objBumpy {
    0%, 100% { transform: translate(-50%, -50%); }
    25% { transform: translate(calc(-50% + 2px), calc(-50% - 1px)); }
    75% { transform: translate(calc(-50% - 2px), calc(-50% + 1px)); }
  }

  .has-sparkle::after {
    content: '';
    position: absolute; inset: -20px;
    background: radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%);
    border-radius: 50%;
    animation: sparkleHalo 2s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes sparkleHalo {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
  }

  /* Particles */
  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    border-radius: 50%;
    transition: none;
  }

  .particle-sparkle {
    border-radius: 2px;
    box-shadow: 0 0 4px currentColor;
  }

  .particle-splash {
    border-radius: 50%;
  }

  .particle-glow {
    border-radius: 50%;
    box-shadow: 0 0 8px currentColor;
  }

  /* Paint effect */
  .paint-effect {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 200;
    animation: paintPop 1.2s ease forwards;
  }

  @keyframes paintPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    20% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -80%) scale(1); opacity: 0; }
  }

  .paint-splash {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--paint-color) 0%, transparent 70%);
    opacity: 0.6;
    animation: splashRing 0.8s ease forwards;
  }

  @keyframes splashRing {
    0% { transform: scale(0.3); opacity: 0.8; }
    100% { transform: scale(2); opacity: 0; }
  }

  .paint-word {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem; font-weight: 900; color: white;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    white-space: nowrap;
  }

  /* Challenge banner */
  .challenge-banner {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    border-radius: 20px; font-size: 1.3rem; font-weight: 900;
    color: white; white-space: nowrap;
    box-shadow: 0 10px 40px rgba(251,191,36,0.5);
    z-index: 300;
    animation: bannerPop 2s ease forwards;
  }

  @keyframes bannerPop {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    15% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
    30% { transform: translate(-50%, -50%) scale(1); }
    80% { opacity: 1; }
    100% { transform: translate(-50%, -70%) scale(0.9); opacity: 0; }
  }

  /* Tutorial */
  .tutorial-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 150; }

  .tutorial-tip {
    position: absolute; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
    padding: 0.8rem 1.2rem; background: rgba(0,0,0,0.9);
    border: 2px solid #fbbf24; border-radius: 16px;
    animation: tutorialFloat 1.5s ease-in-out infinite;
  }

  @keyframes tutorialFloat {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-8px); }
  }

  .tutorial-icon { font-size: 1.5rem; }
  .tutorial-tip p { color: white; font-weight: 600; font-size: 0.9rem; }

  /* Finish button */
  .finish-btn {
    position: absolute; bottom: 12px; right: 12px;
    padding: 0.5rem 1rem; font-family: 'Nunito', sans-serif;
    font-size: 0.85rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 20px; cursor: pointer;
    box-shadow: 0 4px 20px rgba(34,197,94,0.4);
    transition: all 0.3s ease; z-index: 50;
    animation: finishPulse 2s ease-in-out infinite;
  }

  @keyframes finishPulse {
    0%, 100% { box-shadow: 0 4px 20px rgba(34,197,94,0.4); }
    50% { box-shadow: 0 4px 30px rgba(34,197,94,0.7); }
  }

  .finish-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(34,197,94,0.6);
  }

  /* ===== PALETTE AREA ===== */
  .palette-area {
    position: relative;
    height: 35%;
    min-height: 140px;
    background: linear-gradient(180deg, #2d1b4e 0%, #1a1025 100%);
    border-top: 3px solid rgba(255,255,255,0.1);
    overflow: hidden;
    flex-shrink: 0;
  }

  .palette-decoration {
    position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
    width: 60px; height: 100px;
    background: radial-gradient(ellipse at 40% 40%, #92400e 0%, #78350f 50%, #451a03 100%);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    opacity: 0.3; z-index: 1;
  }

  .palette-thumb {
    position: absolute; top: 15%; left: 20%;
    width: 18px; height: 22px;
    background: radial-gradient(ellipse, #92400e 0%, #78350f 100%);
    border-radius: 50%; border: 2px solid #451a03;
  }

  .bubbles-zone {
    position: absolute; inset: 0;
    z-index: 10;
  }

  .palette-hint {
    position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 1rem; font-size: 0.7rem; font-weight: 600;
    z-index: 20; opacity: 0.7;
    white-space: nowrap;
  }

  .hint-color { color: #ef4444; }
  .hint-size { color: #06b6d4; }
  .hint-feel { color: #f472b6; }
  .hint-action { color: #fbbf24; }

  /* ===== WORD BUBBLES ===== */
  .word-bubble {
    position: absolute; transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%,
      color-mix(in srgb, var(--word-color) 80%, white 20%) 0%,
      var(--word-color) 50%,
      color-mix(in srgb, var(--word-color) 80%, black 20%) 100%);
    box-shadow:
      0 8px 25px color-mix(in srgb, var(--word-color) 50%, transparent 50%),
      inset 0 -8px 15px color-mix(in srgb, var(--word-color) 40%, black 60%);
    cursor: grab;
    display: flex; align-items: center; justify-content: center;
    z-index: 10;
    transition: box-shadow 0.2s ease;
    animation: bubbleIdle 4s ease-in-out infinite;
  }

  .word-bubble:nth-child(odd) { animation-delay: -2s; }

  @keyframes bubbleIdle {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.03); }
  }

  .word-bubble:hover {
    z-index: 20;
    box-shadow:
      0 12px 35px color-mix(in srgb, var(--word-color) 60%, transparent 40%),
      inset 0 -8px 15px color-mix(in srgb, var(--word-color) 40%, black 60%);
  }

  .word-bubble.dragging {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2) !important;
    z-index: 100;
    box-shadow:
      0 18px 45px color-mix(in srgb, var(--word-color) 70%, transparent 30%),
      0 0 20px color-mix(in srgb, var(--word-color) 50%, transparent 50%),
      inset 0 -8px 15px color-mix(in srgb, var(--word-color) 40%, black 60%);
    animation: none !important;
  }

  .word-bubble-shine {
    position: absolute; top: 12%; left: 18%; width: 35%; height: 22%;
    background: radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%;
  }

  .word-bubble-text {
    font-size: 0.85rem; font-weight: 900; color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.4);
    z-index: 2; text-align: center;
    line-height: 1.1;
  }

  /* Category-specific bubble styling */
  .cat-color .word-bubble-text { font-size: 0.9rem; }
  .cat-size .word-bubble-text { font-size: 0.85rem; }
  .cat-feel .word-bubble-text { font-size: 0.8rem; }
  .cat-action .word-bubble-text { font-size: 0.8rem; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 600px) {
    .game-header { padding: 0.4rem 0.5rem; }
    .level-badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; }
    .header-center { display: none; }
    .challenges-bar { padding: 0.3rem 0.5rem; gap: 0.3rem; }
    .challenge-text { font-size: 0.6rem; }
    .palette-hint { font-size: 0.6rem; gap: 0.5rem; }
    .palette-decoration { display: none; }
    .finish-btn { font-size: 0.75rem; padding: 0.4rem 0.8rem; }
    .object-label { font-size: 0.55rem; }
    .word-bubble-text { font-size: 0.75rem; }
    .polaroid { width: 160px; }
    .score-badge { font-size: 0.8rem; padding: 0.25rem 0.5rem; }

    .intro-content { padding: 1rem; }
    .instructions-card { padding: 1rem; }
    .logo h1 { font-size: 1.8rem; }
    .instruction-visual { gap: 0.4rem; }
    .sentence-preview { font-size: 0.85rem; }
  }

  @media (max-height: 600px) {
    .palette-area { height: 30%; min-height: 100px; }
    .challenges-bar { padding: 0.2rem 0.5rem; }
  }
`;
