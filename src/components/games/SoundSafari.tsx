"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface SoundSafariProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'complete' | 'album';

interface SceneObject {
  id: string;
  emoji: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
  draggable: boolean;
  hidden: boolean;
  size: 'small' | 'medium' | 'large';
  color?: string;
  category: 'flower' | 'rock' | 'animal' | 'tree' | 'container' | 'tool' | 'insect' | 'fruit';
  zIndex: number;
  originalX: number;
  originalY: number;
}

interface DragState {
  objectId: string;
  offsetX: number;
  offsetY: number;
  startX: number;
  startY: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  emoji: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface InstructionStep {
  text: string;
  highlightWords: { word: string; color: string }[];
  check: (objects: SceneObject[], dropZones: DropResult[]) => boolean;
  hintText: string;
}

interface LevelData {
  id: number;
  title: string;
  scene: SceneObject[];
  steps: InstructionStep[];
  hiddenDiscoveries: Discovery[];
  guideMessage: string;
}

interface Discovery {
  triggerId: string;
  revealEmoji: string;
  revealLabel: string;
  message: string;
}

interface DropResult {
  objectId: string;
  x: number;
  y: number;
}

interface AlbumPhoto {
  level: number;
  title: string;
  emoji: string;
  description: string;
}

interface SnapZone {
  x: number;
  y: number;
  radius: number;
  active: boolean;
  label: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SNAP_DISTANCE = 60;
const BOUNCE_BACK_SPEED = 0.15;

let particleId = 0;
const nextParticleId = () => ++particleId;

// ─── Spatial helpers ─────────────────────────────────────────────────────────

function isNearObject(
  obj: SceneObject,
  target: SceneObject,
  threshold = SNAP_DISTANCE
): boolean {
  const cx1 = obj.x + obj.width / 2;
  const cy1 = obj.y + obj.height / 2;
  const cx2 = target.x + target.width / 2;
  const cy2 = target.y + target.height / 2;
  const dx = cx1 - cx2;
  const dy = cy1 - cy2;
  return Math.sqrt(dx * dx + dy * dy) < threshold + (obj.width + target.width) / 4;
}

function isOnObject(
  obj: SceneObject,
  target: SceneObject
): boolean {
  const cx1 = obj.x + obj.width / 2;
  const cy1 = obj.y + obj.height / 2;
  const cx2 = target.x + target.width / 2;
  const cy2 = target.y + target.height / 2;
  return (
    Math.abs(cx1 - cx2) < target.width / 2 + 10 &&
    Math.abs(cy1 - cy2) < target.height / 2 + 10
  );
}

function isInArea(obj: SceneObject, x: number, y: number, radius: number): boolean {
  const cx = obj.x + obj.width / 2;
  const cy = obj.y + obj.height / 2;
  const dx = cx - x;
  const dy = cy - y;
  return Math.sqrt(dx * dx + dy * dy) < radius;
}

function countObjectsInContainer(
  objects: SceneObject[],
  containerId: string,
  category?: string,
  drops?: DropResult[]
): number {
  const container = objects.find(o => o.id === containerId);
  if (!container) return 0;
  let count = 0;
  if (drops) {
    for (const drop of drops) {
      const obj = objects.find(o => o.id === drop.objectId);
      if (!obj) continue;
      if (category && obj.category !== category) continue;
      if (isOnObject({ ...obj, x: drop.x, y: drop.y } as SceneObject, container)) {
        count++;
      }
    }
  }
  for (const obj of objects) {
    if (obj.id === containerId) continue;
    if (category && obj.category !== category) continue;
    if (isOnObject(obj, container)) count++;
  }
  return count;
}

// ─── Level definitions ───────────────────────────────────────────────────────

function buildLevels(): LevelData[] {
  return [
    // Level 1: Simple pick up instructions
    {
      id: 1,
      title: 'First Steps',
      guideMessage: "Welcome to the safari! Let's start simple.",
      scene: [
        { id: 'red-flower', emoji: '🌺', label: 'Red Flower', x: 15, y: 55, width: 70, height: 70, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'flower', zIndex: 10, originalX: 15, originalY: 55 },
        { id: 'blue-flower', emoji: '💐', label: 'Blue Flower', x: 70, y: 60, width: 70, height: 70, draggable: true, hidden: false, size: 'medium', color: 'blue', category: 'flower', zIndex: 10, originalX: 70, originalY: 60 },
        { id: 'yellow-flower', emoji: '🌻', label: 'Yellow Flower', x: 42, y: 70, width: 70, height: 70, draggable: true, hidden: false, size: 'medium', color: 'yellow', category: 'flower', zIndex: 10, originalX: 42, originalY: 70 },
        { id: 'basket', emoji: '🧺', label: 'Basket', x: 40, y: 30, width: 90, height: 80, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 40, originalY: 30 },
        { id: 'big-tree', emoji: '🌳', label: 'Big Tree', x: 5, y: 20, width: 100, height: 100, draggable: false, hidden: false, size: 'large', category: 'tree', zIndex: 3, originalX: 5, originalY: 20 },
        { id: 'bush1', emoji: '🌿', label: 'Bush', x: 75, y: 35, width: 80, height: 70, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 75, originalY: 35 },
      ],
      steps: [
        {
          text: 'Pick up the RED flower and put it IN the basket.',
          highlightWords: [
            { word: 'RED', color: '#ef4444' },
            { word: 'IN', color: '#fbbf24' },
          ],
          check: (objects) => {
            const flower = objects.find(o => o.id === 'red-flower');
            const basket = objects.find(o => o.id === 'basket');
            if (!flower || !basket) return false;
            return isOnObject(flower, basket);
          },
          hintText: 'Drag the red flower onto the basket!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'bush1', revealEmoji: '🦋', revealLabel: 'Butterfly', message: 'You found a butterfly hiding in the bush!' },
      ],
    },
    // Level 2: Spatial instructions
    {
      id: 2,
      title: 'Next To & Between',
      guideMessage: "Great job! Now let's learn about positions.",
      scene: [
        { id: 'rock1', emoji: '🪨', label: 'Rock', x: 50, y: 65, width: 65, height: 60, draggable: true, hidden: false, size: 'medium', category: 'rock', zIndex: 10, originalX: 50, originalY: 65 },
        { id: 'big-tree', emoji: '🌳', label: 'Big Tree', x: 10, y: 25, width: 100, height: 100, draggable: false, hidden: false, size: 'large', category: 'tree', zIndex: 3, originalX: 10, originalY: 25 },
        { id: 'small-tree', emoji: '🌲', label: 'Small Tree', x: 70, y: 25, width: 80, height: 90, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 3, originalX: 70, originalY: 25 },
        { id: 'pond', emoji: '💧', label: 'Pond', x: 35, y: 40, width: 90, height: 70, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 2, originalX: 35, originalY: 40 },
        { id: 'frog', emoji: '🐸', label: 'Frog', x: 15, y: 65, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', color: 'green', category: 'animal', zIndex: 10, originalX: 15, originalY: 65 },
        { id: 'bush2', emoji: '🌿', label: 'Bush', x: 80, y: 60, width: 70, height: 60, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 80, originalY: 60 },
      ],
      steps: [
        {
          text: 'Put the rock NEXT TO the big tree.',
          highlightWords: [
            { word: 'NEXT TO', color: '#38bdf8' },
            { word: 'big tree', color: '#4ade80' },
          ],
          check: (objects) => {
            const rock = objects.find(o => o.id === 'rock1');
            const tree = objects.find(o => o.id === 'big-tree');
            if (!rock || !tree) return false;
            return isNearObject(rock, tree, 40);
          },
          hintText: 'Drag the rock close to the big tree on the left!',
        },
        {
          text: 'Now move the frog to the pond.',
          highlightWords: [
            { word: 'frog', color: '#4ade80' },
            { word: 'pond', color: '#38bdf8' },
          ],
          check: (objects) => {
            const frog = objects.find(o => o.id === 'frog');
            const pond = objects.find(o => o.id === 'pond');
            if (!frog || !pond) return false;
            return isOnObject(frog, pond);
          },
          hintText: 'Drag the frog onto the blue pond!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'bush2', revealEmoji: '🐛', revealLabel: 'Caterpillar', message: 'A friendly caterpillar was hiding here!' },
      ],
    },
    // Level 3: Sequential 2-step instructions
    {
      id: 3,
      title: 'Step by Step',
      guideMessage: "Now follow TWO steps in order!",
      scene: [
        { id: 'magnifying', emoji: '🔍', label: 'Magnifying Glass', x: 10, y: 60, width: 65, height: 65, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 10, originalY: 60 },
        { id: 'butterfly1', emoji: '🦋', label: 'Yellow Butterfly', x: 70, y: 25, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', color: 'yellow', category: 'insect', zIndex: 10, originalX: 70, originalY: 25 },
        { id: 'net', emoji: '🥅', label: 'Butterfly Net', x: 50, y: 65, width: 70, height: 70, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 50, originalY: 65 },
        { id: 'basket', emoji: '🧺', label: 'Basket', x: 15, y: 30, width: 85, height: 75, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 15, originalY: 30 },
        { id: 'log', emoji: '🪵', label: 'Log', x: 60, y: 50, width: 80, height: 55, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 60, originalY: 50 },
        { id: 'bush3', emoji: '🌳', label: 'Bush', x: 80, y: 55, width: 75, height: 70, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 80, originalY: 55 },
      ],
      steps: [
        {
          text: 'FIRST, pick up the magnifying glass. THEN, put it NEXT TO the log.',
          highlightWords: [
            { word: 'FIRST', color: '#fbbf24' },
            { word: 'THEN', color: '#fb923c' },
            { word: 'magnifying glass', color: '#c084fc' },
            { word: 'NEXT TO', color: '#38bdf8' },
            { word: 'log', color: '#a3764b' },
          ],
          check: (objects) => {
            const mag = objects.find(o => o.id === 'magnifying');
            const log = objects.find(o => o.id === 'log');
            if (!mag || !log) return false;
            return isNearObject(mag, log, 35);
          },
          hintText: 'Drag the magnifying glass close to the log!',
        },
        {
          text: 'Now catch the yellow butterfly with the net! Put the net ON the butterfly.',
          highlightWords: [
            { word: 'yellow butterfly', color: '#fbbf24' },
            { word: 'net', color: '#c084fc' },
            { word: 'ON', color: '#ef4444' },
          ],
          check: (objects) => {
            const net = objects.find(o => o.id === 'net');
            const butterfly = objects.find(o => o.id === 'butterfly1');
            if (!net || !butterfly) return false;
            return isNearObject(net, butterfly, 30);
          },
          hintText: 'Drag the net onto the yellow butterfly!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'log', revealEmoji: '🐜', revealLabel: 'Ants', message: 'You found a trail of ants under the log!' },
        { triggerId: 'bush3', revealEmoji: '🐦', revealLabel: 'Bird', message: 'A colourful bird was nesting in the tree!' },
      ],
    },
    // Level 4: Descriptive - find the biggest
    {
      id: 4,
      title: 'Big & Small',
      guideMessage: "Can you spot the differences?",
      scene: [
        { id: 'big-animal', emoji: '🦁', label: 'Big Lion', x: 10, y: 45, width: 90, height: 90, draggable: true, hidden: false, size: 'large', category: 'animal', zIndex: 10, originalX: 10, originalY: 45 },
        { id: 'medium-animal', emoji: '🐒', label: 'Medium Monkey', x: 45, y: 55, width: 65, height: 65, draggable: true, hidden: false, size: 'medium', category: 'animal', zIndex: 10, originalX: 45, originalY: 55 },
        { id: 'small-animal', emoji: '🐁', label: 'Small Mouse', x: 75, y: 65, width: 45, height: 45, draggable: true, hidden: false, size: 'small', category: 'animal', zIndex: 10, originalX: 75, originalY: 65 },
        { id: 'stage', emoji: '⭐', label: 'Star Stage', x: 35, y: 25, width: 100, height: 80, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 35, originalY: 25 },
        { id: 'tall-grass', emoji: '🌾', label: 'Tall Grass', x: 75, y: 35, width: 70, height: 65, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 75, originalY: 35 },
        { id: 'rock2', emoji: '🪨', label: 'Rock', x: 5, y: 28, width: 55, height: 50, draggable: false, hidden: false, size: 'medium', category: 'rock', zIndex: 4, originalX: 5, originalY: 28 },
      ],
      steps: [
        {
          text: 'Find the BIGGEST animal and put it on the star stage.',
          highlightWords: [
            { word: 'BIGGEST', color: '#ef4444' },
            { word: 'star stage', color: '#fbbf24' },
          ],
          check: (objects) => {
            const lion = objects.find(o => o.id === 'big-animal');
            const stage = objects.find(o => o.id === 'stage');
            if (!lion || !stage) return false;
            return isOnObject(lion, stage);
          },
          hintText: 'The lion is the biggest! Drag it to the star stage.',
        },
        {
          text: 'Now put the SMALLEST animal NEXT TO the rock.',
          highlightWords: [
            { word: 'SMALLEST', color: '#38bdf8' },
            { word: 'NEXT TO', color: '#c084fc' },
            { word: 'rock', color: '#94a3b8' },
          ],
          check: (objects) => {
            const mouse = objects.find(o => o.id === 'small-animal');
            const rock = objects.find(o => o.id === 'rock2');
            if (!mouse || !rock) return false;
            return isNearObject(mouse, rock, 35);
          },
          hintText: 'The mouse is the smallest! Drag it near the rock.',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'tall-grass', revealEmoji: '🦗', revealLabel: 'Cricket', message: 'A cricket was chirping in the tall grass!' },
      ],
    },
    // Level 5: Counting
    {
      id: 5,
      title: 'Count Them Up',
      guideMessage: "Time to count carefully!",
      scene: [
        { id: 'apple1', emoji: '🍎', label: 'Apple', x: 8, y: 55, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'fruit', zIndex: 10, originalX: 8, originalY: 55 },
        { id: 'apple2', emoji: '🍎', label: 'Apple', x: 25, y: 68, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'fruit', zIndex: 10, originalX: 25, originalY: 68 },
        { id: 'apple3', emoji: '🍎', label: 'Apple', x: 60, y: 58, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'fruit', zIndex: 10, originalX: 60, originalY: 58 },
        { id: 'apple4', emoji: '🍎', label: 'Apple', x: 78, y: 68, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'fruit', zIndex: 10, originalX: 78, originalY: 68 },
        { id: 'basket', emoji: '🧺', label: 'Basket', x: 33, y: 28, width: 100, height: 85, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 33, originalY: 28 },
        { id: 'tree', emoji: '🌳', label: 'Tree', x: 72, y: 20, width: 90, height: 90, draggable: false, hidden: false, size: 'large', category: 'tree', zIndex: 3, originalX: 72, originalY: 20 },
        { id: 'bush4', emoji: '🌿', label: 'Bush', x: 3, y: 30, width: 65, height: 55, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 3, originalY: 30 },
      ],
      steps: [
        {
          text: 'Put exactly 3 apples IN the basket. Not 2, not 4 — exactly 3!',
          highlightWords: [
            { word: '3', color: '#ef4444' },
            { word: 'apples', color: '#4ade80' },
            { word: 'IN', color: '#fbbf24' },
            { word: 'basket', color: '#a3764b' },
          ],
          check: (objects) => {
            const basket = objects.find(o => o.id === 'basket');
            if (!basket) return false;
            let count = 0;
            for (const obj of objects) {
              if (obj.category === 'fruit' && obj.id !== 'basket' && isOnObject(obj, basket)) {
                count++;
              }
            }
            return count === 3;
          },
          hintText: 'Drag exactly 3 apples onto the basket!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'bush4', revealEmoji: '🐞', revealLabel: 'Ladybug', message: 'A little ladybug was resting on a leaf!' },
        { triggerId: 'tree', revealEmoji: '🐿️', revealLabel: 'Squirrel', message: 'A cheeky squirrel peeked out from the tree!' },
      ],
    },
    // Level 6: Complex spatial + sequential
    {
      id: 6,
      title: 'Safari Trail',
      guideMessage: "Follow the trail carefully!",
      scene: [
        { id: 'binoculars', emoji: '🔭', label: 'Binoculars', x: 10, y: 60, width: 65, height: 65, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 10, originalY: 60 },
        { id: 'camera', emoji: '📷', label: 'Camera', x: 75, y: 65, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 75, originalY: 65 },
        { id: 'parrot', emoji: '🦜', label: 'Parrot', x: 65, y: 22, width: 65, height: 65, draggable: false, hidden: false, size: 'medium', color: 'green', category: 'animal', zIndex: 10, originalX: 65, originalY: 22 },
        { id: 'hilltop', emoji: '⛰️', label: 'Hilltop', x: 30, y: 20, width: 100, height: 80, draggable: false, hidden: false, size: 'large', category: 'rock', zIndex: 3, originalX: 30, originalY: 20 },
        { id: 'flower-patch', emoji: '🌸', label: 'Flower Patch', x: 45, y: 55, width: 80, height: 60, draggable: false, hidden: false, size: 'medium', category: 'flower', zIndex: 4, originalX: 45, originalY: 55 },
        { id: 'rock3', emoji: '🪨', label: 'Flat Rock', x: 5, y: 35, width: 60, height: 50, draggable: false, hidden: false, size: 'medium', category: 'rock', zIndex: 4, originalX: 5, originalY: 35 },
      ],
      steps: [
        {
          text: 'FIRST, take the binoculars to the hilltop to look around.',
          highlightWords: [
            { word: 'FIRST', color: '#fbbf24' },
            { word: 'binoculars', color: '#c084fc' },
            { word: 'hilltop', color: '#4ade80' },
          ],
          check: (objects) => {
            const bino = objects.find(o => o.id === 'binoculars');
            const hill = objects.find(o => o.id === 'hilltop');
            if (!bino || !hill) return false;
            return isOnObject(bino, hill);
          },
          hintText: 'Drag the binoculars onto the hilltop!',
        },
        {
          text: 'THEN, take the camera NEXT TO the parrot to take a photo.',
          highlightWords: [
            { word: 'THEN', color: '#fb923c' },
            { word: 'camera', color: '#c084fc' },
            { word: 'NEXT TO', color: '#38bdf8' },
            { word: 'parrot', color: '#4ade80' },
          ],
          check: (objects) => {
            const cam = objects.find(o => o.id === 'camera');
            const parrot = objects.find(o => o.id === 'parrot');
            if (!cam || !parrot) return false;
            return isNearObject(cam, parrot, 35);
          },
          hintText: 'Drag the camera close to the parrot!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'rock3', revealEmoji: '🦎', revealLabel: 'Gecko', message: 'A gecko was sunbathing on the warm rock!' },
        { triggerId: 'flower-patch', revealEmoji: '🐝', revealLabel: 'Bee', message: 'A busy bee was collecting nectar!' },
      ],
    },
    // Level 7: 3-step sequential
    {
      id: 7,
      title: 'Three Things',
      guideMessage: "Three tasks! Remember the order!",
      scene: [
        { id: 'red-flower2', emoji: '🌹', label: 'Red Rose', x: 8, y: 62, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', color: 'red', category: 'flower', zIndex: 10, originalX: 8, originalY: 62 },
        { id: 'shell', emoji: '🐚', label: 'Shell', x: 55, y: 68, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', category: 'rock', zIndex: 10, originalX: 55, originalY: 68 },
        { id: 'feather', emoji: '🪶', label: 'Feather', x: 80, y: 58, width: 55, height: 55, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 80, originalY: 58 },
        { id: 'basket2', emoji: '🧺', label: 'Collection Basket', x: 35, y: 25, width: 95, height: 80, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 35, originalY: 25 },
        { id: 'pond2', emoji: '💧', label: 'Stream', x: 5, y: 28, width: 80, height: 60, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 2, originalX: 5, originalY: 28 },
        { id: 'tall-tree', emoji: '🌴', label: 'Palm Tree', x: 72, y: 22, width: 85, height: 90, draggable: false, hidden: false, size: 'large', category: 'tree', zIndex: 3, originalX: 72, originalY: 22 },
      ],
      steps: [
        {
          text: 'FIRST, pick up the red rose and put it IN the basket.',
          highlightWords: [
            { word: 'FIRST', color: '#fbbf24' },
            { word: 'red rose', color: '#ef4444' },
            { word: 'IN', color: '#c084fc' },
            { word: 'basket', color: '#a3764b' },
          ],
          check: (objects) => {
            const rose = objects.find(o => o.id === 'red-flower2');
            const basket = objects.find(o => o.id === 'basket2');
            if (!rose || !basket) return false;
            return isOnObject(rose, basket);
          },
          hintText: 'Drag the red rose into the basket!',
        },
        {
          text: 'NEXT, put the shell by the stream.',
          highlightWords: [
            { word: 'NEXT', color: '#fb923c' },
            { word: 'shell', color: '#fbbf24' },
            { word: 'stream', color: '#38bdf8' },
          ],
          check: (objects) => {
            const shell = objects.find(o => o.id === 'shell');
            const stream = objects.find(o => o.id === 'pond2');
            if (!shell || !stream) return false;
            return isNearObject(shell, stream, 35);
          },
          hintText: 'Drag the shell near the stream!',
        },
        {
          text: 'FINALLY, place the feather NEXT TO the palm tree.',
          highlightWords: [
            { word: 'FINALLY', color: '#c084fc' },
            { word: 'feather', color: '#94a3b8' },
            { word: 'NEXT TO', color: '#38bdf8' },
            { word: 'palm tree', color: '#4ade80' },
          ],
          check: (objects) => {
            const feather = objects.find(o => o.id === 'feather');
            const tree = objects.find(o => o.id === 'tall-tree');
            if (!feather || !tree) return false;
            return isNearObject(feather, tree, 35);
          },
          hintText: 'Drag the feather close to the palm tree!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'tall-tree', revealEmoji: '🦜', revealLabel: 'Toucan', message: 'A toucan was hiding in the palm tree!' },
      ],
    },
    // Level 8: Complex descriptions
    {
      id: 8,
      title: 'Look Carefully',
      guideMessage: "Read every word carefully!",
      scene: [
        { id: 'big-rock', emoji: '🪨', label: 'Big Rock', x: 10, y: 48, width: 80, height: 75, draggable: true, hidden: false, size: 'large', category: 'rock', zIndex: 10, originalX: 10, originalY: 48 },
        { id: 'small-rock', emoji: '🪨', label: 'Small Rock', x: 60, y: 68, width: 45, height: 40, draggable: true, hidden: false, size: 'small', category: 'rock', zIndex: 10, originalX: 60, originalY: 68 },
        { id: 'turtle', emoji: '🐢', label: 'Slow Turtle', x: 40, y: 62, width: 65, height: 60, draggable: true, hidden: false, size: 'medium', color: 'green', category: 'animal', zIndex: 10, originalX: 40, originalY: 62 },
        { id: 'rabbit', emoji: '🐇', label: 'Fast Rabbit', x: 78, y: 50, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', category: 'animal', zIndex: 10, originalX: 78, originalY: 50 },
        { id: 'pond3', emoji: '💧', label: 'Pond', x: 30, y: 25, width: 95, height: 70, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 2, originalX: 30, originalY: 25 },
        { id: 'log2', emoji: '🪵', label: 'Log', x: 70, y: 28, width: 80, height: 50, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 70, originalY: 28 },
        { id: 'bush5', emoji: '🌿', label: 'Fern', x: 2, y: 25, width: 65, height: 55, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 2, originalY: 25 },
      ],
      steps: [
        {
          text: 'The SLOW animal wants to swim. Put it in the pond.',
          highlightWords: [
            { word: 'SLOW', color: '#4ade80' },
            { word: 'pond', color: '#38bdf8' },
          ],
          check: (objects) => {
            const turtle = objects.find(o => o.id === 'turtle');
            const pond = objects.find(o => o.id === 'pond3');
            if (!turtle || !pond) return false;
            return isOnObject(turtle, pond);
          },
          hintText: 'Which animal is slow? The turtle! Drag it to the pond.',
        },
        {
          text: 'The SMALL rock goes ON TOP OF the log.',
          highlightWords: [
            { word: 'SMALL', color: '#38bdf8' },
            { word: 'ON TOP OF', color: '#fbbf24' },
            { word: 'log', color: '#a3764b' },
          ],
          check: (objects) => {
            const sRock = objects.find(o => o.id === 'small-rock');
            const log = objects.find(o => o.id === 'log2');
            if (!sRock || !log) return false;
            return isOnObject(sRock, log);
          },
          hintText: 'Drag the small rock onto the log!',
        },
        {
          text: 'Now hide the FAST animal behind the fern.',
          highlightWords: [
            { word: 'FAST', color: '#ef4444' },
            { word: 'behind', color: '#c084fc' },
            { word: 'fern', color: '#4ade80' },
          ],
          check: (objects) => {
            const rabbit = objects.find(o => o.id === 'rabbit');
            const fern = objects.find(o => o.id === 'bush5');
            if (!rabbit || !fern) return false;
            return isNearObject(rabbit, fern, 35);
          },
          hintText: 'The rabbit is fast! Drag it near the fern.',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'log2', revealEmoji: '🐌', revealLabel: 'Snail', message: 'A little snail was travelling along the log!' },
        { triggerId: 'bush5', revealEmoji: '🦔', revealLabel: 'Hedgehog', message: 'A prickly hedgehog was curled up in the fern!' },
      ],
    },
    // Level 9: Counting + spatial combo
    {
      id: 9,
      title: 'Sort & Count',
      guideMessage: "Sort and count like a real explorer!",
      scene: [
        { id: 'red-gem', emoji: '🔴', label: 'Red Gem', x: 8, y: 60, width: 50, height: 50, draggable: true, hidden: false, size: 'small', color: 'red', category: 'rock', zIndex: 10, originalX: 8, originalY: 60 },
        { id: 'blue-gem', emoji: '🔵', label: 'Blue Gem', x: 28, y: 68, width: 50, height: 50, draggable: true, hidden: false, size: 'small', color: 'blue', category: 'rock', zIndex: 10, originalX: 28, originalY: 68 },
        { id: 'green-gem', emoji: '🟢', label: 'Green Gem', x: 55, y: 62, width: 50, height: 50, draggable: true, hidden: false, size: 'small', color: 'green', category: 'rock', zIndex: 10, originalX: 55, originalY: 62 },
        { id: 'yellow-gem', emoji: '🟡', label: 'Yellow Gem', x: 75, y: 66, width: 50, height: 50, draggable: true, hidden: false, size: 'small', color: 'yellow', category: 'rock', zIndex: 10, originalX: 75, originalY: 66 },
        { id: 'red-gem2', emoji: '🔴', label: 'Red Gem', x: 42, y: 72, width: 50, height: 50, draggable: true, hidden: false, size: 'small', color: 'red', category: 'rock', zIndex: 10, originalX: 42, originalY: 72 },
        { id: 'treasure-box', emoji: '📦', label: 'Treasure Box', x: 12, y: 25, width: 95, height: 75, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 5, originalX: 12, originalY: 25 },
        { id: 'display-rock', emoji: '🪨', label: 'Display Rock', x: 65, y: 30, width: 80, height: 60, draggable: false, hidden: false, size: 'medium', category: 'rock', zIndex: 4, originalX: 65, originalY: 30 },
      ],
      steps: [
        {
          text: 'Put both RED gems in the treasure box.',
          highlightWords: [
            { word: 'both', color: '#fbbf24' },
            { word: 'RED', color: '#ef4444' },
            { word: 'treasure box', color: '#a3764b' },
          ],
          check: (objects) => {
            const box = objects.find(o => o.id === 'treasure-box');
            if (!box) return false;
            let count = 0;
            for (const obj of objects) {
              if (obj.color === 'red' && obj.category === 'rock' && isOnObject(obj, box)) count++;
            }
            return count >= 2;
          },
          hintText: 'Find both red gems and put them in the treasure box!',
        },
        {
          text: 'Now put the BLUE gem on the display rock.',
          highlightWords: [
            { word: 'BLUE', color: '#3b82f6' },
            { word: 'display rock', color: '#94a3b8' },
          ],
          check: (objects) => {
            const blueGem = objects.find(o => o.id === 'blue-gem');
            const display = objects.find(o => o.id === 'display-rock');
            if (!blueGem || !display) return false;
            return isOnObject(blueGem, display);
          },
          hintText: 'Drag the blue gem onto the display rock!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'display-rock', revealEmoji: '💎', revealLabel: 'Diamond', message: 'A sparkling diamond was hidden under the rock!' },
      ],
    },
    // Level 10: Grand finale - 3 complex steps
    {
      id: 10,
      title: 'Safari Master',
      guideMessage: "The final challenge! You are almost a Safari Master!",
      scene: [
        { id: 'elephant', emoji: '🐘', label: 'Big Elephant', x: 5, y: 50, width: 90, height: 85, draggable: true, hidden: false, size: 'large', category: 'animal', zIndex: 10, originalX: 5, originalY: 50 },
        { id: 'bird', emoji: '🦅', label: 'Eagle', x: 72, y: 55, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', category: 'animal', zIndex: 10, originalX: 72, originalY: 55 },
        { id: 'trophy', emoji: '🏆', label: 'Trophy', x: 42, y: 68, width: 60, height: 60, draggable: true, hidden: false, size: 'medium', category: 'tool', zIndex: 10, originalX: 42, originalY: 68 },
        { id: 'waterfall', emoji: '💦', label: 'Waterfall', x: 5, y: 20, width: 85, height: 70, draggable: false, hidden: false, size: 'large', category: 'container', zIndex: 2, originalX: 5, originalY: 20 },
        { id: 'mountain', emoji: '🏔️', label: 'Mountain', x: 55, y: 18, width: 100, height: 85, draggable: false, hidden: false, size: 'large', category: 'rock', zIndex: 3, originalX: 55, originalY: 18 },
        { id: 'sunset-tree', emoji: '🌅', label: 'Sunset View', x: 38, y: 42, width: 80, height: 60, draggable: false, hidden: false, size: 'medium', category: 'tree', zIndex: 4, originalX: 38, originalY: 42 },
      ],
      steps: [
        {
          text: 'FIRST, guide the BIGGEST animal to the waterfall for a drink.',
          highlightWords: [
            { word: 'FIRST', color: '#fbbf24' },
            { word: 'BIGGEST', color: '#ef4444' },
            { word: 'waterfall', color: '#38bdf8' },
          ],
          check: (objects) => {
            const elephant = objects.find(o => o.id === 'elephant');
            const waterfall = objects.find(o => o.id === 'waterfall');
            if (!elephant || !waterfall) return false;
            return isNearObject(elephant, waterfall, 40);
          },
          hintText: 'The elephant is the biggest! Drag it to the waterfall.',
        },
        {
          text: 'NEXT, help the eagle fly to the mountain top.',
          highlightWords: [
            { word: 'NEXT', color: '#fb923c' },
            { word: 'eagle', color: '#fbbf24' },
            { word: 'mountain', color: '#94a3b8' },
          ],
          check: (objects) => {
            const bird = objects.find(o => o.id === 'bird');
            const mtn = objects.find(o => o.id === 'mountain');
            if (!bird || !mtn) return false;
            return isOnObject(bird, mtn);
          },
          hintText: 'Drag the eagle onto the mountain!',
        },
        {
          text: 'FINALLY, place the trophy at the sunset view. You earned it!',
          highlightWords: [
            { word: 'FINALLY', color: '#c084fc' },
            { word: 'trophy', color: '#fbbf24' },
            { word: 'sunset view', color: '#fb923c' },
          ],
          check: (objects) => {
            const trophy = objects.find(o => o.id === 'trophy');
            const sunset = objects.find(o => o.id === 'sunset-tree');
            if (!trophy || !sunset) return false;
            return isOnObject(trophy, sunset);
          },
          hintText: 'Drag the trophy to the sunset view area!',
        },
      ],
      hiddenDiscoveries: [
        { triggerId: 'sunset-tree', revealEmoji: '🌈', revealLabel: 'Rainbow', message: 'A beautiful rainbow appeared over the sunset!' },
        { triggerId: 'mountain', revealEmoji: '🦅', revealLabel: 'Golden Eagle', message: 'A golden eagle soared above the mountain peak!' },
      ],
    },
  ];
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function SoundSafari({ onExit }: SoundSafariProps) {
  const levels = useRef(buildLevels()).current;

  const [gameState, setGameState] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [objects, setObjects] = useState<SceneObject[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [guideText, setGuideText] = useState('');
  const [guideEmotion, setGuideEmotion] = useState<'neutral' | 'happy' | 'thinking' | 'celebrating'>('neutral');
  const [displayedText, setDisplayedText] = useState('');
  const [textAnimating, setTextAnimating] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const [bounceBackId, setBounceBackId] = useState<string | null>(null);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [discoveries, setDiscoveries] = useState<string[]>([]);
  const [discoveryPopup, setDiscoveryPopup] = useState<{ emoji: string; message: string } | null>(null);
  const [album, setAlbum] = useState<AlbumPhoto[]>([]);
  // snapZones reserved for future dynamic highlighting
  const [levelComplete, setLevelComplete] = useState(false);
  const [firstTryBonus, setFirstTryBonus] = useState(true);
  const [ambientParticles, setAmbientParticles] = useState<Particle[]>([]);
  const [containerSize, setContainerSize] = useState({ width: 800, height: 500 });

  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepCompletedRef = useRef(false);

  // Track container size
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [gameState]);

  // Typewriter text animation
  const animateText = useCallback((text: string) => {
    setTextAnimating(true);
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setTextAnimating(false);
      }
    }, 30);
    textTimerRef.current = interval as unknown as ReturnType<typeof setTimeout>;
    return () => clearInterval(interval);
  }, []);

  // Spawn ambient particles (leaves, butterflies)
  useEffect(() => {
    if (gameState !== 'playing') return;
    const interval = setInterval(() => {
      setAmbientParticles(prev => {
        const filtered = prev.filter(p => p.life > 0);
        if (filtered.length < 6) {
          const emojis = ['🍃', '🦋', '🌸', '✨', '🍂'];
          filtered.push({
            id: nextParticleId(),
            x: Math.random() * 100,
            y: -5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: 0.2 + Math.random() * 0.3,
            life: 200 + Math.random() * 150,
            maxLife: 350,
            emoji: emojis[Math.floor(Math.random() * emojis.length)],
            size: 14 + Math.random() * 12,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 3,
          });
        }
        return filtered;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [gameState]);

  // Ambient particle animation
  useEffect(() => {
    if (gameState !== 'playing') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }
    const update = () => {
      setAmbientParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        rotation: p.rotation + p.rotationSpeed,
        life: p.life - 1,
      })).filter(p => p.life > 0 && p.y < 110));

      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + p.vx,
        y: p.y + p.vy,
        vy: p.vy + 0.05,
        life: p.life - 1,
        rotation: p.rotation + p.rotationSpeed,
      })).filter(p => p.life > 0));

      animationRef.current = requestAnimationFrame(update);
    };
    animationRef.current = requestAnimationFrame(update);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameState]);

  // Spawn celebration particles
  const spawnCelebration = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    const emojis = ['✨', '⭐', '🌟', '💫', '🎉', '🎊'];
    for (let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const speed = 1.5 + Math.random() * 2;
      newParticles.push({
        id: nextParticleId(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 60 + Math.random() * 30,
        maxLife: 90,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 16 + Math.random() * 12,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Spawn discovery particles
  const spawnDiscoveryParticles = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    const emojis = ['✨', '💫', '🌟'];
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      newParticles.push({
        id: nextParticleId(),
        x,
        y,
        vx: Math.cos(angle) * 1.2,
        vy: Math.sin(angle) * 1.2 - 1,
        life: 45,
        maxLife: 45,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 14,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 8,
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // Initialize level
  const initLevel = useCallback((lvl: number) => {
    const levelData = levels[lvl - 1];
    if (!levelData) return;

    setObjects(levelData.scene.map(o => ({ ...o })));
    setCurrentStepIndex(0);
    setStepCompleted(false);
    stepCompletedRef.current = false;
    setLevelComplete(false);
    setShowHint(false);
    setWrongAttempt(false);
    setBounceBackId(null);
    setFirstTryBonus(true);
    setDiscoveries([]);
    setParticles([]);
    setGuideEmotion('neutral');
    setGuideText(levelData.guideMessage);
    animateText(levelData.guideMessage);

    // After intro message, show first step
    setTimeout(() => {
      if (levelData.steps[0]) {
        setGuideText(levelData.steps[0].text);
        animateText(levelData.steps[0].text);
        setHintText(levelData.steps[0].hintText);
      }
    }, 2000);

    // Auto-show hint after delay
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    hintTimerRef.current = setTimeout(() => {
      setShowHint(true);
    }, 12000);
  }, [levels, animateText]);

  // Start game
  const startGame = () => {
    setGameState('playing');
    setLevel(1);
    setScore(0);
    setAlbum([]);
    initLevel(1);
  };

  // Next level
  const nextLevel = () => {
    if (level >= 10) {
      setGameState('album');
      return;
    }
    const newLevel = level + 1;
    setLevel(newLevel);
    setGameState('playing');
    initLevel(newLevel);
  };

  // Check step completion
  const checkCurrentStep = useCallback((updatedObjects: SceneObject[]) => {
    if (stepCompletedRef.current || levelComplete) return;

    const levelData = levels[level - 1];
    if (!levelData) return;
    const step = levelData.steps[currentStepIndex];
    if (!step) return;

    if (step.check(updatedObjects, [])) {
      stepCompletedRef.current = true;
      setStepCompleted(true);
      setShowHint(false);
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);

      const points = firstTryBonus ? 150 : 100;
      setScore(s => s + points);

      setGuideEmotion('happy');
      const celebText = currentStepIndex < levelData.steps.length - 1
        ? 'Perfect! Well done! Next step...'
        : 'Perfect! Well done! Level complete!';
      setGuideText(celebText);
      animateText(celebText);

      // Celebration particles at center
      spawnCelebration(50, 40);

      setTimeout(() => {
        setStepCompleted(false);
        stepCompletedRef.current = false;

        if (currentStepIndex < levelData.steps.length - 1) {
          const nextStepIdx = currentStepIndex + 1;
          setCurrentStepIndex(nextStepIdx);
          setGuideEmotion('neutral');
          const nextStep = levelData.steps[nextStepIdx];
          setGuideText(nextStep.text);
          animateText(nextStep.text);
          setHintText(nextStep.hintText);
          setFirstTryBonus(true);

          if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
          hintTimerRef.current = setTimeout(() => setShowHint(true), 12000);
        } else {
          // Level complete
          setLevelComplete(true);
          setGuideEmotion('celebrating');

          // Add to album
          setAlbum(prev => [...prev, {
            level: level,
            title: levelData.title,
            emoji: levelData.scene[0]?.emoji || '📸',
            description: `Completed ${levelData.title}!`,
          }]);

          setTimeout(() => setGameState('complete'), 1500);
        }
      }, 1500);
    }
  }, [level, currentStepIndex, levels, firstTryBonus, animateText, spawnCelebration, levelComplete]);

  // Handle tapping on non-draggable objects (discoveries)
  const handleObjectTap = useCallback((obj: SceneObject) => {
    if (obj.draggable) return;

    const levelData = levels[level - 1];
    if (!levelData) return;

    const discovery = levelData.hiddenDiscoveries.find(
      d => d.triggerId === obj.id && !discoveries.includes(d.triggerId)
    );

    if (discovery) {
      setDiscoveries(prev => [...prev, discovery.triggerId]);
      setDiscoveryPopup({ emoji: discovery.revealEmoji, message: discovery.message });
      setScore(s => s + 50);
      spawnDiscoveryParticles(obj.x + obj.width / 2, obj.y + obj.height / 2);

      setTimeout(() => setDiscoveryPopup(null), 3000);
    }
  }, [level, levels, discoveries, spawnDiscoveryParticles]);

  // Drag start
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    obj: SceneObject
  ) => {
    if (!obj.draggable || stepCompletedRef.current) return;
    e.preventDefault();
    e.stopPropagation();

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const pxX = clientX - rect.left;
    const pxY = clientY - rect.top;
    const pctX = (pxX / rect.width) * 100;
    const pctY = (pxY / rect.height) * 100;

    setDragState({
      objectId: obj.id,
      offsetX: pctX - obj.x,
      offsetY: pctY - obj.y,
      startX: obj.x,
      startY: obj.y,
    });
  };

  // Drag move
  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();

    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const pxX = clientX - rect.left;
    const pxY = clientY - rect.top;
    const pctX = Math.max(0, Math.min(90, (pxX / rect.width) * 100 - dragState.offsetX));
    const pctY = Math.max(0, Math.min(85, (pxY / rect.height) * 100 - dragState.offsetY));

    setObjects(prev => prev.map(o =>
      o.id === dragState.objectId ? { ...o, x: pctX, y: pctY } : o
    ));
  }, [dragState]);

  // Drag end
  const handleDragEnd = useCallback(() => {
    if (!dragState) return;

    const currentObjects = objects.map(o =>
      o.id === dragState.objectId ? { ...o } : o
    );

    // Check if step is correct
    const levelData = levels[level - 1];
    if (levelData) {
      const step = levelData.steps[currentStepIndex];
      if (step && !stepCompletedRef.current) {
        if (step.check(currentObjects, [])) {
          checkCurrentStep(currentObjects);
        } else {
          // Check if the dragged object moved significantly
          const obj = currentObjects.find(o => o.id === dragState.objectId);
          if (obj) {
            const dx = obj.x - dragState.startX;
            const dy = obj.y - dragState.startY;
            const moved = Math.sqrt(dx * dx + dy * dy);

            if (moved > 15) {
              // Only show wrong feedback if user actually tried to place it somewhere
              setWrongAttempt(true);
              setBounceBackId(dragState.objectId);
              setFirstTryBonus(false);
              setGuideEmotion('thinking');

              const hintMsg = step.hintText;
              setGuideText(hintMsg);
              animateText(hintMsg);
              setShowHint(true);

              // Bounce object back
              setTimeout(() => {
                setObjects(prev => prev.map(o =>
                  o.id === dragState.objectId
                    ? { ...o, x: o.originalX, y: o.originalY }
                    : o
                ));
                setBounceBackId(null);
                setWrongAttempt(false);
                setGuideEmotion('neutral');
              }, 600);
            }
          }
        }
      }
    }

    setDragState(null);
  }, [dragState, objects, level, currentStepIndex, levels, checkCurrentStep, animateText]);

  // Drag event listeners
  useEffect(() => {
    if (!dragState) return;
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
  }, [dragState, handleDragMove, handleDragEnd]);

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      if (textTimerRef.current) clearTimeout(textTimerRef.current);
    };
  }, []);

  // Render highlighted instruction text
  const renderInstructionText = (text: string, highlights: { word: string; color: string }[]) => {
    if (!text) return null;
    let result: (string | React.ReactElement)[] = [displayedText || text];

    for (const h of highlights) {
      const newResult: (string | React.ReactElement)[] = [];
      for (const part of result) {
        if (typeof part === 'string') {
          const regex = new RegExp(`(${h.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
          const pieces = part.split(regex);
          for (const piece of pieces) {
            if (piece.toLowerCase() === h.word.toLowerCase()) {
              newResult.push(
                <span key={`${h.word}-${newResult.length}`} style={{ color: h.color, fontWeight: 800 }}>
                  {piece}
                </span>
              );
            } else {
              newResult.push(piece);
            }
          }
        } else {
          newResult.push(part);
        }
      }
      result = newResult;
    }

    return result;
  };

  const currentLevelData = levels[level - 1];
  const currentStep = currentLevelData?.steps[currentStepIndex];
  const totalSteps = currentLevelData?.steps.length || 0;

  // ─── Intro Screen ──────────────────────────────────────────────────────────
  if (gameState === 'intro') {
    return (
      <div className="sound-safari">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-leaf" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                fontSize: `${20 + Math.random() * 25}px`,
              }}>
                {['🍃', '🦋', '🌿', '🌸', '🍂', '🌺', '🐝', '🌻'][i]}
              </div>
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-icon">🌿</span>
              <h1>Sound Safari</h1>
              <span className="logo-icon flip">🦋</span>
            </div>
            <p className="tagline">Listen, Read & Explore!</p>

            <div className="guide-intro">
              <div className="guide-avatar-large">🧑‍🌾</div>
              <div className="guide-speech-intro">
                <p>G&apos;day explorer! I&apos;m your safari guide. I&apos;ll give you instructions and you carry them out by dragging objects around the scene!</p>
              </div>
            </div>

            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="inst-icon">📖</span>
                  <span className="inst-arrow">→</span>
                  <span className="inst-icon">👀</span>
                </div>
                <p><strong>READ</strong> the guide&apos;s instructions carefully</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="inst-icon">👆</span>
                  <span className="inst-arrow">→</span>
                  <span className="inst-icon">🌺</span>
                </div>
                <p><strong>DRAG</strong> objects to follow the instructions</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="inst-icon">🔍</span>
                  <span className="inst-arrow">→</span>
                  <span className="inst-icon">🐛</span>
                </div>
                <p><strong>TAP</strong> bushes and rocks to discover hidden creatures!</p>
              </div>
            </div>

            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🌿</span>
              Start Safari
              <span className="btn-icon">🦋</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Album Screen ──────────────────────────────────────────────────────────
  if (gameState === 'album') {
    return (
      <div className="sound-safari">
        <style>{styles}</style>
        <div className="album-screen">
          <div className="album-bg">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                fontSize: `${16 + Math.random() * 16}px`,
              }}>
                {['🎉', '🎊', '⭐', '🌟', '🦋', '🌿'][i % 6]}
              </div>
            ))}
          </div>
          <div className="album-content">
            <h1 className="album-title">Safari Photo Album</h1>
            <p className="album-subtitle">Your amazing safari journey!</p>
            <div className="album-grid">
              {album.map((photo, i) => (
                <div key={i} className="album-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="album-card-emoji">{photo.emoji}</div>
                  <div className="album-card-level">Level {photo.level}</div>
                  <div className="album-card-title">{photo.title}</div>
                </div>
              ))}
            </div>
            <div className="album-score">
              <span className="score-label">Final Score</span>
              <span className="score-number">{score}</span>
            </div>
            <div className="album-buttons">
              <button className="start-btn" onClick={startGame}>Play Again</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Level Complete Screen ─────────────────────────────────────────────────
  if (gameState === 'complete') {
    return (
      <div className="sound-safari">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="confetti" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                fontSize: `${18 + Math.random() * 18}px`,
              }}>
                {['🌟', '⭐', '🎉', '✨', '🦋', '🌿', '🌺', '🐦', '🌸', '💫'][i]}
              </div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="complete-guide">
              <div className="guide-avatar-large celebrating">🧑‍🌾</div>
              <p className="complete-message">
                {level === 10 ? 'You are a TRUE Safari Master!' : 'Brilliant exploring!'}
              </p>
            </div>
            <div className="complete-stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-value">{score}</span>
                <span className="stat-label">Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🔍</span>
                <span className="stat-value">{discoveries.length}</span>
                <span className="stat-label">Discoveries</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📸</span>
                <span className="stat-value">{album.length}</span>
                <span className="stat-label">Photos</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={nextLevel}>
                {level >= 10 ? 'View Album' : `Level ${level + 1}`} →
              </button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── Playing Screen ────────────────────────────────────────────────────────
  return (
    <div className="sound-safari">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameState('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
          </div>
          <div className="header-center">
            <div className="step-progress">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div key={i} className={`step-dot ${i < currentStepIndex ? 'done' : ''} ${i === currentStepIndex ? 'active' : ''}`}>
                  {i < currentStepIndex ? '✓' : i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon-sm">⭐</span>
              <span>{score}</span>
            </div>
            {discoveries.length > 0 && (
              <div className="discovery-badge">
                <span className="disc-icon">🔍</span>
                <span>{discoveries.length}</span>
              </div>
            )}
          </div>
        </div>

        {/* Guide bar */}
        <div className={`guide-bar ${wrongAttempt ? 'wrong' : ''} ${stepCompleted ? 'correct' : ''}`}>
          <div className={`guide-avatar ${guideEmotion}`}>
            🧑‍🌾
          </div>
          <div className="speech-bubble">
            <div className="speech-text">
              {currentStep
                ? renderInstructionText(
                    displayedText || currentStep.text,
                    currentStep.highlightWords
                  )
                : displayedText}
              {textAnimating && <span className="text-cursor">|</span>}
            </div>
            {showHint && !stepCompleted && (
              <div className="hint-bar">
                <span className="hint-icon">💡</span>
                <span className="hint-msg">{hintText}</span>
              </div>
            )}
          </div>
        </div>

        {/* Safari scene */}
        <div className="scene-container" ref={containerRef}>
          {/* Binocular vignette */}
          <div className="binocular-frame" />

          {/* Ground layers */}
          <div className="ground-layer" />
          <div className="grass-layer" />

          {/* Ambient particles */}
          {ambientParticles.map(p => (
            <div key={p.id} className="ambient-particle" style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: p.size,
              opacity: Math.min(1, p.life / 30),
              transform: `rotate(${p.rotation}deg)`,
            }}>
              {p.emoji}
            </div>
          ))}

          {/* Scene objects */}
          {objects.map(obj => {
            if (obj.hidden) return null;
            const isDragging = dragState?.objectId === obj.id;
            const isBouncing = bounceBackId === obj.id;
            const isDiscoverable = !obj.draggable && currentLevelData?.hiddenDiscoveries.some(
              d => d.triggerId === obj.id && !discoveries.includes(d.triggerId)
            );
            const wasDiscovered = discoveries.includes(obj.id);

            return (
              <div
                key={obj.id}
                className={`scene-object ${isDragging ? 'dragging' : ''} ${isBouncing ? 'bouncing' : ''} ${obj.draggable ? 'draggable' : 'static'} ${isDiscoverable ? 'discoverable' : ''} ${wasDiscovered ? 'discovered' : ''} size-${obj.size}`}
                style={{
                  left: `${obj.x}%`,
                  top: `${obj.y}%`,
                  width: obj.width,
                  height: obj.height,
                  zIndex: isDragging ? 100 : obj.zIndex,
                }}
                onMouseDown={(e) => obj.draggable ? handleDragStart(e, obj) : handleObjectTap(obj)}
                onTouchStart={(e) => obj.draggable ? handleDragStart(e, obj) : handleObjectTap(obj)}
                onClick={() => !obj.draggable && handleObjectTap(obj)}
              >
                <div className="object-emoji">{obj.emoji}</div>
                {obj.draggable && <div className="object-label">{obj.label}</div>}
                {isDragging && <div className="drag-ring" />}
                {isBouncing && <div className="bounce-x">✗</div>}
                {stepCompleted && isDragging && <div className="correct-ring" />}
              </div>
            );
          })}

          {/* Discovery reveal objects */}
          {currentLevelData?.hiddenDiscoveries.map(d => {
            if (!discoveries.includes(d.triggerId)) return null;
            const trigger = objects.find(o => o.id === d.triggerId);
            if (!trigger) return null;
            return (
              <div key={d.triggerId} className="discovery-reveal" style={{
                left: `${trigger.x + trigger.width * 0.3 / 100 * containerSize.width}%`,
                top: `${trigger.y - 5}%`,
              }}>
                <span className="discovery-emoji">{d.revealEmoji}</span>
              </div>
            );
          })}

          {/* Celebration particles */}
          {particles.map(p => (
            <div key={p.id} className="particle" style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: p.size,
              opacity: p.life / p.maxLife,
              transform: `rotate(${p.rotation}deg)`,
            }}>
              {p.emoji}
            </div>
          ))}

          {/* Discovery popup */}
          {discoveryPopup && (
            <div className="discovery-popup">
              <div className="discovery-popup-emoji">{discoveryPopup.emoji}</div>
              <div className="discovery-popup-text">{discoveryPopup.message}</div>
              <div className="discovery-popup-bonus">+50 bonus!</div>
            </div>
          )}
        </div>

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          <div className="bottom-hints">
            <span className="bottom-hint">👆 Drag objects to follow instructions</span>
            <span className="bottom-hint">🔍 Tap bushes & rocks to discover creatures</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .sound-safari {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #1a472a 0%, #2d5a3f 30%, #3a7d54 60%, #4a8c62 100%);
  }

  /* ── Intro Screen ─────────────────────────────── */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0d3b1e 0%, #1a5c35 40%, #2d7a4a 70%, #3a9660 100%);
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .bg-leaf {
    position: absolute;
    animation: floatLeaf 8s ease-in-out infinite;
    opacity: 0.4;
  }

  @keyframes floatLeaf {
    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
    25% { transform: translateY(-20px) rotate(15deg); opacity: 0.5; }
    50% { transform: translateY(-40px) rotate(-10deg); opacity: 0.6; }
    75% { transform: translateY(-15px) rotate(5deg); opacity: 0.4; }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 520px;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.3rem;
  }

  .logo h1 {
    font-size: clamp(1.8rem, 7vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #4ade80, #86efac, #fbbf24, #34d399);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .logo-icon {
    font-size: 2.2rem;
    animation: iconBounce 2.5s ease-in-out infinite;
  }

  .logo-icon.flip {
    animation: iconBounceFlip 2.5s ease-in-out infinite;
    animation-delay: 0.4s;
  }

  @keyframes iconBounce {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-12px) rotate(10deg); }
  }

  @keyframes iconBounceFlip {
    0%, 100% { transform: translateY(0) rotate(5deg) scaleX(-1); }
    50% { transform: translateY(-12px) rotate(-10deg) scaleX(-1); }
  }

  .tagline {
    color: #86efac;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
  }

  .guide-intro {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
    text-align: left;
  }

  .guide-avatar-large {
    font-size: 3rem;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    animation: guideBreath 3s ease-in-out infinite;
    border: 3px solid rgba(74,222,128,0.4);
  }

  .guide-avatar-large.celebrating {
    animation: guideCelebrate 0.5s ease-in-out infinite;
  }

  @keyframes guideBreath {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes guideCelebrate {
    0%, 100% { transform: scale(1) rotate(-3deg); }
    50% { transform: scale(1.1) rotate(3deg); }
  }

  .guide-speech-intro {
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.15);
    border-radius: 16px;
    padding: 0.8rem 1rem;
    color: #d1fae5;
    font-size: 0.9rem;
    line-height: 1.4;
    position: relative;
    backdrop-filter: blur(5px);
  }

  .guide-speech-intro::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 20px;
    border: 6px solid transparent;
    border-right-color: rgba(255,255,255,0.15);
  }

  .instructions-card {
    background: rgba(0,0,0,0.25);
    border: 2px solid rgba(74,222,128,0.25);
    border-radius: 20px;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    backdrop-filter: blur(8px);
  }

  .instructions-card h3 {
    color: #86efac;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .instruction {
    margin-bottom: 1rem;
  }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 0.3rem;
  }

  .inst-icon {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
  }

  .inst-arrow {
    color: #4ade80;
    font-size: 1.2rem;
    font-weight: 800;
  }

  .instruction p {
    color: #bbf7d0;
    font-size: 0.9rem;
  }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.9rem 2.2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #052e16;
    background: linear-gradient(135deg, #4ade80, #86efac, #34d399);
    background-size: 200% 200%;
    animation: btnGradient 3s ease-in-out infinite;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(74,222,128,0.4);
  }

  @keyframes btnGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(74,222,128,0.5);
  }

  .btn-icon { font-size: 1.3rem; }

  .menu-btn {
    padding: 0.7rem 1.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #86efac;
    background: transparent;
    border: 2px solid rgba(74,222,128,0.3);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(74,222,128,0.6);
    color: #bbf7d0;
  }

  /* ── Album Screen ─────────────────────────────── */

  .album-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #1e3a2f 0%, #2d5a45 50%, #1e3a2f 100%);
  }

  .album-bg, .complete-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .confetti {
    position: absolute;
    top: -10%;
    animation: confettiFall 4s ease-in-out infinite;
  }

  @keyframes confettiFall {
    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
    100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
  }

  .album-content, .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 1.5rem;
    max-width: 550px;
    width: 100%;
  }

  .album-title {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
    color: #fbbf24;
    margin-bottom: 0.3rem;
    font-weight: 900;
  }

  .album-subtitle {
    color: #86efac;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .album-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 0.7rem;
    margin-bottom: 1.5rem;
  }

  .album-card {
    background: rgba(255,255,255,0.08);
    border: 2px solid rgba(74,222,128,0.2);
    border-radius: 14px;
    padding: 0.6rem;
    animation: albumCardIn 0.5s ease forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  @keyframes albumCardIn {
    to { opacity: 1; transform: translateY(0); }
  }

  .album-card-emoji { font-size: 2rem; margin-bottom: 0.2rem; }
  .album-card-level { font-size: 0.65rem; color: #64748b; }
  .album-card-title { font-size: 0.7rem; color: #bbf7d0; font-weight: 600; }

  .album-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .album-score .score-label { font-size: 0.9rem; color: #64748b; }
  .album-score .score-number { font-size: 2.5rem; font-weight: 900; color: #fbbf24; }

  .album-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  /* ── Complete Screen ──────────────────────────── */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #0d3b1e 0%, #1a5c35 50%, #0d3b1e 100%);
  }

  .complete-title {
    font-size: clamp(1.6rem, 5vw, 2.4rem);
    color: #fbbf24;
    margin-bottom: 1rem;
    font-weight: 900;
    animation: titlePulse 2s ease-in-out infinite;
  }

  @keyframes titlePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.03); }
  }

  .complete-guide {
    margin-bottom: 1.5rem;
  }

  .complete-message {
    color: #bbf7d0;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }

  .complete-stats {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-icon { font-size: 1.5rem; margin-bottom: 0.2rem; }
  .stat-value { font-size: 1.8rem; font-weight: 900; color: white; }
  .stat-label { font-size: 0.75rem; color: #86efac; }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  /* ── Game Screen ──────────────────────────────── */

  .game-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.7rem;
    background: rgba(0,0,0,0.5);
    z-index: 50;
    min-height: 48px;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.1);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .back-btn:hover { background: rgba(255,255,255,0.2); }

  .level-badge {
    padding: 0.35rem 0.8rem;
    background: linear-gradient(135deg, #059669, #10b981);
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.85rem;
    color: white;
  }

  .step-progress {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .step-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 2px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 800;
    color: rgba(255,255,255,0.5);
    transition: all 0.3s ease;
  }

  .step-dot.done {
    background: #059669;
    border-color: #4ade80;
    color: white;
  }

  .step-dot.active {
    background: rgba(251,191,36,0.3);
    border-color: #fbbf24;
    color: #fbbf24;
    animation: dotPulse 1.5s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(251,191,36,0.4); }
    50% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(251,191,36,0); }
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.35rem 0.7rem;
    background: rgba(251,191,36,0.2);
    border-radius: 16px;
    color: #fbbf24;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .score-icon-sm { font-size: 0.9rem; }

  .discovery-badge {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.35rem 0.7rem;
    background: rgba(139,92,246,0.2);
    border-radius: 16px;
    color: #c4b5fd;
    font-weight: 700;
    font-size: 0.85rem;
  }

  .disc-icon { font-size: 0.85rem; }

  /* ── Guide Bar ────────────────────────────────── */

  .guide-bar {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    padding: 0.6rem 0.8rem;
    background: rgba(0,0,0,0.45);
    border-bottom: 2px solid rgba(74,222,128,0.2);
    transition: all 0.3s ease;
    min-height: 60px;
    z-index: 40;
  }

  .guide-bar.wrong {
    border-bottom-color: #ef4444;
    background: rgba(239,68,68,0.15);
    animation: wrongShake 0.5s ease;
  }

  .guide-bar.correct {
    border-bottom-color: #4ade80;
    background: rgba(74,222,128,0.15);
  }

  @keyframes wrongShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .guide-avatar {
    font-size: 2rem;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 2px solid rgba(74,222,128,0.3);
    transition: all 0.3s ease;
  }

  .guide-avatar.happy {
    border-color: #4ade80;
    background: rgba(74,222,128,0.15);
    animation: guideHappy 0.5s ease;
  }

  .guide-avatar.thinking {
    border-color: #fbbf24;
    background: rgba(251,191,36,0.15);
  }

  .guide-avatar.celebrating {
    border-color: #fbbf24;
    animation: guideCelebrate 0.4s ease-in-out infinite;
  }

  @keyframes guideHappy {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
  }

  .speech-bubble {
    flex: 1;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 14px;
    padding: 0.5rem 0.8rem;
    position: relative;
    min-height: 40px;
  }

  .speech-bubble::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 14px;
    border: 5px solid transparent;
    border-right-color: rgba(255,255,255,0.12);
  }

  .speech-text {
    color: #ecfdf5;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .text-cursor {
    color: #4ade80;
    animation: cursorBlink 0.6s step-end infinite;
    font-weight: 400;
  }

  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .hint-bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 0.4rem;
    padding-top: 0.4rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    animation: hintSlideIn 0.3s ease;
  }

  @keyframes hintSlideIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hint-icon { font-size: 0.85rem; }
  .hint-msg { font-size: 0.78rem; color: #fbbf24; font-weight: 600; }

  /* ── Scene Container ──────────────────────────── */

  .scene-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
    background: linear-gradient(180deg,
      #87CEEB 0%,
      #98D8C8 20%,
      #5BA87A 40%,
      #4a8c62 60%,
      #3d7d55 80%,
      #2d5a3f 100%
    );
  }

  .binocular-frame {
    position: absolute;
    inset: 0;
    z-index: 30;
    pointer-events: none;
    border-radius: 0;
    box-shadow:
      inset 0 0 60px 30px rgba(0,0,0,0.3),
      inset 0 0 120px 60px rgba(0,0,0,0.15);
  }

  .ground-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35%;
    background: linear-gradient(180deg, transparent 0%, rgba(34,80,50,0.6) 40%, rgba(20,60,35,0.8) 100%);
    pointer-events: none;
    z-index: 1;
  }

  .grass-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8%;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(34,120,60,0.3) 10px,
      rgba(34,120,60,0.3) 12px
    );
    pointer-events: none;
    z-index: 1;
  }

  /* ── Scene Objects ────────────────────────────── */

  .scene-object {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s ease;
    cursor: default;
  }

  .scene-object.draggable {
    cursor: grab;
  }

  .scene-object.draggable:hover {
    transform: scale(1.08);
    z-index: 20 !important;
  }

  .scene-object.dragging {
    cursor: grabbing;
    transform: scale(1.18);
    z-index: 100 !important;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
  }

  .scene-object.bouncing {
    animation: bounceBack 0.6s ease;
  }

  @keyframes bounceBack {
    0% { transform: scale(1.1); }
    25% { transform: scale(0.9) rotate(-5deg); }
    50% { transform: scale(1.05) rotate(3deg); }
    75% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }

  .scene-object.discoverable {
    cursor: pointer;
  }

  .scene-object.discoverable::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px dashed rgba(251,191,36,0.4);
    animation: discoverHint 2s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes discoverHint {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
  }

  .scene-object.discovered::after {
    content: none;
  }

  .scene-object.static {
    cursor: pointer;
  }

  .object-emoji {
    font-size: 2.5rem;
    line-height: 1;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  }

  .size-small .object-emoji { font-size: 1.8rem; }
  .size-medium .object-emoji { font-size: 2.5rem; }
  .size-large .object-emoji { font-size: 3.5rem; }

  .object-label {
    font-size: 0.6rem;
    font-weight: 700;
    color: white;
    background: rgba(0,0,0,0.5);
    padding: 0.1rem 0.4rem;
    border-radius: 6px;
    margin-top: 0.1rem;
    white-space: nowrap;
    pointer-events: none;
  }

  .drag-ring {
    position: absolute;
    inset: -8px;
    border: 3px solid rgba(74,222,128,0.6);
    border-radius: 50%;
    animation: dragRingPulse 0.8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes dragRingPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.15); opacity: 0.4; }
  }

  .bounce-x {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 24px;
    height: 24px;
    background: #ef4444;
    border-radius: 50%;
    color: white;
    font-size: 0.8rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: xPop 0.3s ease;
    pointer-events: none;
  }

  @keyframes xPop {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .correct-ring {
    position: absolute;
    inset: -12px;
    border: 4px solid #4ade80;
    border-radius: 50%;
    animation: correctPop 0.6s ease forwards;
    pointer-events: none;
  }

  @keyframes correctPop {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.3); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }

  /* ── Discovery Reveal ─────────────────────────── */

  .discovery-reveal {
    position: absolute;
    z-index: 25;
    animation: discoveryPop 0.6s ease forwards;
    pointer-events: none;
  }

  @keyframes discoveryPop {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    50% { transform: scale(1.3) rotate(10deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }

  .discovery-emoji {
    font-size: 2rem;
    filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
    animation: discoveryFloat 2s ease-in-out infinite;
  }

  @keyframes discoveryFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  /* ── Discovery Popup ──────────────────────────── */

  .discovery-popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.85);
    border: 3px solid #fbbf24;
    border-radius: 20px;
    padding: 1.2rem 1.5rem;
    text-align: center;
    z-index: 200;
    animation: popupIn 0.4s ease;
    backdrop-filter: blur(10px);
  }

  @keyframes popupIn {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  .discovery-popup-emoji { font-size: 3rem; margin-bottom: 0.3rem; }
  .discovery-popup-text { color: white; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem; }
  .discovery-popup-bonus { color: #fbbf24; font-size: 0.85rem; font-weight: 800; }

  /* ── Particles ────────────────────────────────── */

  .ambient-particle, .particle {
    position: absolute;
    pointer-events: none;
    z-index: 28;
    line-height: 1;
  }

  .particle { z-index: 150; }

  /* ── Bottom Bar ───────────────────────────────── */

  .bottom-bar {
    padding: 0.5rem 0.8rem;
    background: rgba(0,0,0,0.5);
    text-align: center;
    z-index: 40;
  }

  .bottom-hints {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .bottom-hint {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
  }

  /* ── Responsive ───────────────────────────────── */

  @media (max-width: 600px) {
    .game-header { padding: 0.4rem 0.5rem; min-height: 40px; }
    .level-badge { font-size: 0.75rem; padding: 0.25rem 0.6rem; }
    .score-badge, .discovery-badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; }
    .step-dot { width: 24px; height: 24px; font-size: 0.6rem; }
    .guide-bar { padding: 0.4rem 0.5rem; min-height: 50px; gap: 0.4rem; }
    .guide-avatar { width: 38px; height: 38px; font-size: 1.6rem; }
    .speech-text { font-size: 0.8rem; }
    .hint-msg { font-size: 0.7rem; }
    .object-emoji { font-size: 2rem; }
    .size-small .object-emoji { font-size: 1.5rem; }
    .size-large .object-emoji { font-size: 2.8rem; }
    .object-label { font-size: 0.5rem; }
    .bottom-hints { gap: 0.6rem; }
    .bottom-hint { font-size: 0.65rem; }
    .header-center { display: none; }
    .guide-intro { flex-direction: column; align-items: center; text-align: center; }
    .guide-speech-intro::before { display: none; }
  }

  @media (max-width: 400px) {
    .intro-content { padding: 1rem; }
    .instructions-card { padding: 0.8rem; }
    .instruction-visual { gap: 0.3rem; }
    .inst-icon { font-size: 1.4rem; width: 32px; height: 32px; }
  }
`;
