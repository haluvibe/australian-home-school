"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import type React from 'react';

// ---- Types ----

interface PlaceValueBakeryProps {
  onExit?: () => void;
}

type GameScreen = 'intro' | 'playing' | 'levelComplete' | 'gameComplete';
type OrderType = 'build' | 'reverse';

interface DragItem {
  id: number;
  type: 'ten' | 'one';
  x: number;
  y: number;
  vy: number;
  placed: boolean;
  settled: boolean;
}

interface DragState {
  itemId: number;
  offsetX: number;
  offsetY: number;
  originX: number;
  originY: number;
}

interface Order {
  targetNumber: number;
  type: OrderType;
  customerEmoji: string;
  customerName: string;
}

interface Coin {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  value: number;
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
  type: 'sprinkle' | 'confetti' | 'steam';
}

interface SteamParticle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  drift: number;
}

// ---- Constants ----

const CUSTOMERS = [
  { emoji: '👧', name: 'Emma' },
  { emoji: '👦', name: 'Liam' },
  { emoji: '👩', name: 'Sophie' },
  { emoji: '👨', name: 'Oliver' },
  { emoji: '👵', name: 'Grandma' },
  { emoji: '👴', name: 'Grandpa' },
  { emoji: '🧑‍🍳', name: 'Chef Marco' },
  { emoji: '👸', name: 'Princess' },
  { emoji: '🤠', name: 'Cowboy' },
  { emoji: '🧑‍🎓', name: 'Teacher' },
];

const LEVEL_CONFIG = [
  { min: 11, max: 19, orders: 5, patience: 30, label: 'Easy Peasy' },
  { min: 11, max: 29, orders: 5, patience: 28, label: 'Getting Warmer' },
  { min: 20, max: 39, orders: 5, patience: 26, label: 'Baker in Training' },
  { min: 20, max: 50, orders: 5, patience: 24, label: 'Rising Star' },
  { min: 30, max: 60, orders: 5, patience: 22, label: 'Cupcake Pro' },
  { min: 40, max: 70, orders: 5, patience: 20, label: 'Master Mixer' },
  { min: 50, max: 80, orders: 5, patience: 18, label: 'Oven Hero' },
  { min: 60, max: 90, orders: 5, patience: 16, label: 'Head Baker' },
  { min: 70, max: 99, orders: 5, patience: 15, label: 'Bakery Boss' },
  { min: 11, max: 99, orders: 5, patience: 14, label: 'Grand Master' },
];

const BOUNCE_DAMPEN = 0.5;
const GRAVITY = 0.6;
const SETTLE_THRESHOLD = 0.5;
const COUNTER_Y = 280;

let itemIdCounter = 0;
const getNewId = (): number => ++itemIdCounter;

// ---- Component ----

export default function PlaceValueBakery({ onExit }: PlaceValueBakeryProps = {}) {
  // Game state
  const [gameScreen, setGameScreen] = useState<GameScreen>('intro');
  const [level, setLevel] = useState(1);
  const [orderIndex, setOrderIndex] = useState(0);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [score, setScore] = useState(0);
  const [tipMultiplier, setTipMultiplier] = useState(1);
  const [comboCount, setComboCount] = useState(0);
  const [totalTips, setTotalTips] = useState(0);

  // Counter items
  const [counterItems, setCounterItems] = useState<DragItem[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [hasRemovedItem, setHasRemovedItem] = useState(false);

  // Patience
  const [patience, setPatience] = useState(100);
  const [maxPatience, setMaxPatience] = useState(30);

  // Effects
  const [coins, setCoins] = useState<Coin[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [steamParticles, setSteamParticles] = useState<SteamParticle[]>([]);
  const [orderComplete, setOrderComplete] = useState(false);
  const [tooMany, setTooMany] = useState(false);
  const [bellRing, setBellRing] = useState(false);
  const [customerMood, setCustomerMood] = useState<'happy' | 'waiting' | 'impatient' | 'delighted'>('happy');
  const [showStamp, setShowStamp] = useState(false);
  const [levelScore, setLevelScore] = useState(0);

  // Reverse order
  const [reverseAnswer, setReverseAnswer] = useState('');
  const [reverseWrong, setReverseWrong] = useState(false);

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const patienceRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const steamRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ---- Computed values ----

  const tensCount = counterItems.filter(i => i.type === 'ten' && i.placed).length;
  const onesCount = counterItems.filter(i => i.type === 'one' && i.placed).length;
  const currentTotal = tensCount * 10 + onesCount;

  // ---- Generate order ----

  const generateOrder = useCallback((lvl: number, idx: number): Order => {
    const config = LEVEL_CONFIG[Math.min(lvl - 1, LEVEL_CONFIG.length - 1)];
    const isReverse = lvl >= 4 && idx >= 3 && Math.random() > 0.5;
    const targetNumber = config.min + Math.floor(Math.random() * (config.max - config.min + 1));
    const customer = CUSTOMERS[(lvl * 3 + idx) % CUSTOMERS.length];
    return {
      targetNumber,
      type: isReverse ? 'reverse' : 'build',
      customerEmoji: customer.emoji,
      customerName: customer.name,
    };
  }, []);

  // ---- Start/Next ----

  const startGame = useCallback(() => {
    setGameScreen('playing');
    setLevel(1);
    setOrderIndex(0);
    setScore(0);
    setTipMultiplier(1);
    setComboCount(0);
    setTotalTips(0);
    setLevelScore(0);
    const order = generateOrder(1, 0);
    setCurrentOrder(order);
    setCounterItems([]);
    setHasRemovedItem(false);
    setPatience(100);
    setMaxPatience(LEVEL_CONFIG[0].patience);
    setCustomerMood('happy');
    setOrderComplete(false);
    setTooMany(false);
    setShowStamp(false);
    setReverseAnswer('');
    setReverseWrong(false);
  }, [generateOrder]);

  const nextOrder = useCallback(() => {
    const config = LEVEL_CONFIG[Math.min(level - 1, LEVEL_CONFIG.length - 1)];
    const nextIdx = orderIndex + 1;
    if (nextIdx >= config.orders) {
      // Level complete
      setGameScreen('levelComplete');
      return;
    }
    setOrderIndex(nextIdx);
    const order = generateOrder(level, nextIdx);
    setCurrentOrder(order);
    setCounterItems([]);
    setHasRemovedItem(false);
    setPatience(100);
    setCustomerMood('happy');
    setOrderComplete(false);
    setTooMany(false);
    setShowStamp(false);
    setReverseAnswer('');
    setReverseWrong(false);
  }, [level, orderIndex, generateOrder]);

  const nextLevel = useCallback(() => {
    if (level >= 10) {
      setGameScreen('gameComplete');
      return;
    }
    const newLevel = level + 1;
    setLevel(newLevel);
    setOrderIndex(0);
    setLevelScore(0);
    const config = LEVEL_CONFIG[Math.min(newLevel - 1, LEVEL_CONFIG.length - 1)];
    setMaxPatience(config.patience);
    const order = generateOrder(newLevel, 0);
    setCurrentOrder(order);
    setCounterItems([]);
    setHasRemovedItem(false);
    setPatience(100);
    setCustomerMood('happy');
    setOrderComplete(false);
    setTooMany(false);
    setShowStamp(false);
    setReverseAnswer('');
    setReverseWrong(false);
    setGameScreen('playing');
  }, [level, generateOrder]);

  // ---- Spawn coins ----

  const spawnCoins = useCallback((baseX: number, baseY: number, amount: number) => {
    const newCoins: Coin[] = [];
    const count = Math.min(amount / 5, 12);
    for (let i = 0; i < count; i++) {
      newCoins.push({
        id: getNewId(),
        x: baseX + (Math.random() - 0.5) * 60,
        y: baseY,
        vx: (Math.random() - 0.5) * 4,
        vy: -6 - Math.random() * 6,
        opacity: 1,
        value: Math.ceil(amount / count),
      });
    }
    setCoins(prev => [...prev, ...newCoins]);
  }, []);

  // ---- Spawn particles ----

  const spawnSprinkles = useCallback((cx: number, cy: number) => {
    const colors = ['#FF6B8A', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8B3D', '#C77DFF'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40 + Math.random() * 0.3;
      const speed = 2 + Math.random() * 5;
      newParticles.push({
        id: getNewId(),
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        maxLife: 60 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 5,
        type: 'sprinkle',
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  const spawnConfetti = useCallback((cx: number, cy: number) => {
    const colors = ['#FF6B8A', '#FFD93D', '#6BCB77', '#4D96FF', '#FF8B3D', '#C77DFF', '#FFF'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: getNewId(),
        x: cx + (Math.random() - 0.5) * 200,
        y: cy - 50,
        vx: (Math.random() - 0.5) * 6,
        vy: -3 + Math.random() * 2,
        life: 1,
        maxLife: 80 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 6,
        type: 'confetti',
      });
    }
    setParticles(prev => [...prev, ...newParticles]);
  }, []);

  // ---- Order completion ----

  const completeOrder = useCallback(() => {
    if (orderComplete) return;
    setOrderComplete(true);
    setBellRing(true);
    setCustomerMood('delighted');
    setShowStamp(true);

    const patienceBonus = Math.floor(patience / 10);
    const isPerfect = !hasRemovedItem;
    const newCombo = isPerfect ? comboCount + 1 : 0;
    const newMultiplier = isPerfect ? Math.min(tipMultiplier + 0.5, 5) : 1;
    const basePoints = (currentOrder?.targetNumber ?? 0) * 2;
    const tip = Math.floor(basePoints * newMultiplier) + patienceBonus * 5;

    setComboCount(newCombo);
    setTipMultiplier(newMultiplier);
    const earned = basePoints + tip;
    setScore(prev => prev + earned);
    setLevelScore(prev => prev + earned);
    setTotalTips(prev => prev + tip);

    const container = containerRef.current;
    const cx = container ? container.offsetWidth / 2 : 200;
    spawnCoins(cx, 150, earned);
    spawnSprinkles(cx, 200);
    spawnConfetti(cx, 100);

    setTimeout(() => setBellRing(false), 600);
    setTimeout(() => {
      nextOrder();
    }, 2200);
  }, [orderComplete, patience, hasRemovedItem, comboCount, tipMultiplier, currentOrder, spawnCoins, spawnSprinkles, spawnConfetti, nextOrder]);

  // ---- Check completion ----

  useEffect(() => {
    if (gameScreen !== 'playing' || !currentOrder || orderComplete) return;
    if (currentOrder.type === 'build') {
      if (currentTotal === currentOrder.targetNumber) {
        completeOrder();
      } else if (currentTotal > currentOrder.targetNumber) {
        setTooMany(true);
        setCustomerMood('impatient');
        setTimeout(() => setTooMany(false), 1200);
      }
    }
  }, [currentTotal, currentOrder, gameScreen, orderComplete, completeOrder]);

  // ---- Patience timer ----

  useEffect(() => {
    if (gameScreen !== 'playing' || orderComplete) {
      if (patienceRef.current) clearInterval(patienceRef.current);
      return;
    }
    patienceRef.current = setInterval(() => {
      setPatience(prev => {
        const newVal = Math.max(0, prev - (100 / maxPatience));
        if (newVal <= 40 && newVal > 15) setCustomerMood('waiting');
        if (newVal <= 15) setCustomerMood('impatient');
        if (newVal <= 0) {
          // Time's up: skip order, break combo
          setComboCount(0);
          setTipMultiplier(1);
          setTimeout(() => nextOrder(), 500);
        }
        return newVal;
      });
    }, 1000);
    return () => { if (patienceRef.current) clearInterval(patienceRef.current); };
  }, [gameScreen, orderComplete, maxPatience, nextOrder]);

  // ---- Steam effect ----

  useEffect(() => {
    if (gameScreen !== 'playing') {
      if (steamRef.current) clearInterval(steamRef.current);
      return;
    }
    steamRef.current = setInterval(() => {
      setSteamParticles(prev => {
        const updated = prev
          .map(p => ({ ...p, y: p.y - 0.8, opacity: p.opacity - 0.015, x: p.x + Math.sin(p.drift) * 0.3, drift: p.drift + 0.05 }))
          .filter(p => p.opacity > 0);
        if (updated.length < 5 && Math.random() > 0.4) {
          updated.push({
            id: getNewId(),
            x: 30 + Math.random() * 50,
            y: 100 + Math.random() * 20,
            opacity: 0.3 + Math.random() * 0.3,
            size: 8 + Math.random() * 12,
            drift: Math.random() * Math.PI * 2,
          });
        }
        return updated;
      });
    }, 80);
    return () => { if (steamRef.current) clearInterval(steamRef.current); };
  }, [gameScreen]);

  // ---- Physics loop for coins, particles, settling items ----

  useEffect(() => {
    if (gameScreen !== 'playing' && gameScreen !== 'levelComplete') {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const update = () => {
      // Coins
      setCoins(prev =>
        prev
          .map(c => ({
            ...c,
            x: c.x + c.vx,
            y: c.y + c.vy,
            vy: c.vy + 0.15,
            opacity: c.opacity - 0.012,
          }))
          .filter(c => c.opacity > 0)
      );

      // Particles
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + (p.type === 'confetti' ? 0.08 : 0.05),
            vx: p.vx * 0.99,
            life: p.life - (1 / p.maxLife),
          }))
          .filter(p => p.life > 0)
      );

      // Settle counter items
      setCounterItems(prev =>
        prev.map(item => {
          if (!item.placed || item.settled) return item;
          if (dragState && dragState.itemId === item.id) return item;
          let { y, vy } = item;
          vy += GRAVITY;
          y += vy;
          const floorY = COUNTER_Y + (item.type === 'ten' ? 0 : 30);
          if (y >= floorY) {
            y = floorY;
            vy = -vy * BOUNCE_DAMPEN;
            if (Math.abs(vy) < SETTLE_THRESHOLD) {
              return { ...item, y: floorY, vy: 0, settled: true };
            }
          }
          return { ...item, y, vy };
        })
      );

      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); };
  }, [gameScreen, dragState]);

  // ---- Drag handlers ----

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return { width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight };
    }
    return { width: 600, height: 500 };
  }, []);

  const handleShelfDragStart = useCallback((
    e: React.MouseEvent | React.TouchEvent,
    type: 'ten' | 'one'
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (orderComplete || !currentOrder || currentOrder.type === 'reverse') return;
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const newItem: DragItem = {
      id: getNewId(),
      type,
      x,
      y,
      vy: 0,
      placed: false,
      settled: false,
    };
    setCounterItems(prev => [...prev, newItem]);
    setDragState({
      itemId: newItem.id,
      offsetX: 0,
      offsetY: 0,
      originX: x,
      originY: y,
    });
  }, [orderComplete, currentOrder]);

  const handleCounterItemDragStart = useCallback((
    e: React.MouseEvent | React.TouchEvent,
    item: DragItem
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (orderComplete) return;
    const rect = containerRef.current!.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragState({
      itemId: item.id,
      offsetX: clientX - rect.left - item.x,
      offsetY: clientY - rect.top - item.y,
      originX: item.x,
      originY: item.y,
    });
    setCounterItems(prev => prev.map(i => i.id === item.id ? { ...i, settled: false } : i));
  }, [orderComplete]);

  const handleDragMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragState || !containerRef.current) return;
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left - dragState.offsetX));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top - dragState.offsetY));
    setCounterItems(prev => prev.map(i =>
      i.id === dragState.itemId ? { ...i, x, y, vy: 0, settled: false } : i
    ));
  }, [dragState]);

  const handleDragEnd = useCallback(() => {
    if (!dragState) return;
    const item = counterItems.find(i => i.id === dragState.itemId);
    if (!item) { setDragState(null); return; }
    const size = getContainerSize();

    // Check if dragged back to shelf area (top portion)
    if (item.y < 120) {
      // Remove item (dragged back to shelf)
      setCounterItems(prev => prev.filter(i => i.id !== dragState.itemId));
      if (item.placed) {
        setHasRemovedItem(true);
      }
      setDragState(null);
      return;
    }

    // Place on counter (middle/lower area)
    const clampedX = Math.max(40, Math.min(size.width - 40, item.x));
    setCounterItems(prev => prev.map(i =>
      i.id === dragState.itemId ? { ...i, x: clampedX, placed: true, vy: 2 } : i
    ));
    setDragState(null);
  }, [dragState, counterItems, getContainerSize]);

  // ---- Drag event listeners ----

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

  // ---- Reverse order submit ----

  const handleReverseSubmit = useCallback(() => {
    if (!currentOrder || currentOrder.type !== 'reverse') return;
    const answer = parseInt(reverseAnswer, 10);
    if (answer === currentOrder.targetNumber) {
      completeOrder();
    } else {
      setReverseWrong(true);
      setComboCount(0);
      setTipMultiplier(1);
      setTimeout(() => setReverseWrong(false), 800);
    }
  }, [currentOrder, reverseAnswer, completeOrder]);

  // ---- Patience bar color ----

  const patienceColor = patience > 60 ? '#6BCB77' : patience > 30 ? '#FFD93D' : '#FF6B6B';

  // ---- Get customer expression ----

  const getCustomerExpression = () => {
    if (orderComplete) return '😍';
    switch (customerMood) {
      case 'delighted': return '🤩';
      case 'happy': return currentOrder?.customerEmoji ?? '😊';
      case 'waiting': return '😐';
      case 'impatient': return '😤';
      default: return currentOrder?.customerEmoji ?? '😊';
    }
  };

  // ---- Reverse order display: tens and ones ----

  const getReverseDisplay = () => {
    if (!currentOrder) return { tens: 0, ones: 0 };
    const tens = Math.floor(currentOrder.targetNumber / 10);
    const ones = currentOrder.targetNumber % 10;
    return { tens, ones };
  };

  // ============================================================
  // INTRO SCREEN
  // ============================================================

  if (gameScreen === 'intro') {
    return (
      <div className="pvb-game">
        <style>{styles}</style>
        <div className="intro-screen">
          <div className="intro-bg">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-cupcake" style={{
                left: `${8 + (i % 6) * 16}%`,
                top: `${15 + Math.floor(i / 6) * 55}%`,
                animationDelay: `${i * 0.4}s`,
              }}>🧁</div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`s${i}`} className="bg-sprinkle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                background: ['#FF6B8A', '#FFD93D', '#6BCB77', '#4D96FF'][i % 4],
              }} />
            ))}
          </div>
          <div className="intro-content">
            <div className="logo">
              <span className="logo-icon">🧁</span>
              <h1>Place Value Bakery</h1>
              <span className="logo-icon logo-icon-2">🎂</span>
            </div>
            <p className="tagline">Build numbers with tens & ones!</p>
            <div className="instructions-card">
              <h3>How to Play</h3>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="mini-tray">🔟</span>
                  <span className="inst-arrow">+</span>
                  <span className="mini-cupcake">🧁</span>
                  <span className="mini-cupcake">🧁</span>
                  <span className="mini-cupcake">🧁</span>
                  <span className="inst-arrow">=</span>
                  <span className="inst-number">13</span>
                </div>
                <p><strong>DRAG</strong> trays of 10 and single cupcakes onto the counter!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="inst-bell">🔔</span>
                  <span className="inst-label">Order: 34 cupcakes!</span>
                </div>
                <p>Fill each <strong>customer order</strong> quickly for bonus tips!</p>
              </div>
              <div className="instruction">
                <div className="instruction-visual">
                  <span className="inst-coin">🪙</span>
                  <span className="inst-label">Combo x3 = Big Tips!</span>
                </div>
                <p>Perfect orders in a row build your <strong>tip multiplier</strong>!</p>
              </div>
            </div>
            <button className="start-btn" onClick={startGame}>
              <span className="btn-icon">🧁</span>
              Open the Bakery!
              <span className="btn-icon">🧁</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // LEVEL COMPLETE SCREEN
  // ============================================================

  if (gameScreen === 'levelComplete') {
    return (
      <div className="pvb-game">
        <style>{styles}</style>
        <div className="complete-screen">
          <div className="complete-bg">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="floating-cupcake" style={{
                left: `${5 + i * 6.5}%`,
                animationDelay: `${i * 0.2}s`,
              }}>🧁</div>
            ))}
          </div>
          <div className="complete-content">
            <h1 className="complete-title">Level {level} Complete!</h1>
            <div className="complete-subtitle">{LEVEL_CONFIG[Math.min(level - 1, 9)].label}</div>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Level Score</span>
                <span className="score-value">{levelScore}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Score</span>
                <span className="score-value">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Tips Earned</span>
                <span className="score-value">🪙 {totalTips}</span>
              </div>
            </div>
            <div className="star-display">
              {[1, 2, 3].map(s => (
                <span key={s} className={`star ${levelScore > s * 80 ? 'earned' : ''}`}>⭐</span>
              ))}
            </div>
            <div className="complete-buttons">
              {level < 10 ? (
                <button className="next-btn" onClick={nextLevel}>Level {level + 1} →</button>
              ) : (
                <button className="next-btn" onClick={() => setGameScreen('gameComplete')}>See Final Score →</button>
              )}
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // GAME COMPLETE SCREEN
  // ============================================================

  if (gameScreen === 'gameComplete') {
    return (
      <div className="pvb-game">
        <style>{styles}</style>
        <div className="complete-screen final-screen">
          <div className="complete-bg">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="floating-cupcake" style={{
                left: `${Math.random() * 95}%`,
                animationDelay: `${i * 0.15}s`,
              }}>🧁</div>
            ))}
          </div>
          <div className="complete-content">
            <div className="trophy-display">🏆</div>
            <h1 className="complete-title">Grand Master Baker!</h1>
            <p className="final-subtitle">You completed all 10 levels!</p>
            <div className="score-card">
              <div className="score-item">
                <span className="score-label">Final Score</span>
                <span className="score-value final">{score}</span>
              </div>
              <div className="score-item">
                <span className="score-label">Total Tips</span>
                <span className="score-value">🪙 {totalTips}</span>
              </div>
            </div>
            <div className="complete-buttons">
              <button className="next-btn" onClick={startGame}>Play Again!</button>
              <button className="menu-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>Main Menu</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // PLAYING SCREEN
  // ============================================================

  const reverseData = getReverseDisplay();

  return (
    <div className="pvb-game">
      <style>{styles}</style>
      <div className="game-screen">
        {/* Header */}
        <div className="game-header">
          <div className="header-left">
            <button className="back-btn" onClick={() => onExit ? onExit() : setGameScreen('intro')}>←</button>
            <div className="level-badge">Level {level}</div>
            <div className="order-badge">Order {orderIndex + 1}/{LEVEL_CONFIG[Math.min(level - 1, 9)].orders}</div>
          </div>
          <div className="header-center">
            {comboCount > 1 && (
              <div className="combo-badge">
                Combo x{comboCount}! Tips x{tipMultiplier.toFixed(1)}
              </div>
            )}
          </div>
          <div className="header-right">
            <div className="score-badge">
              <span className="score-icon">🪙</span>
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Main game area */}
        <div className="game-area" ref={containerRef}>
          {/* Bakery background */}
          <div className="bakery-wall" />
          <div className="bakery-counter-bg" />

          {/* Steam particles */}
          {steamParticles.map(s => (
            <div key={s.id} className="steam" style={{
              left: s.x,
              top: s.y,
              opacity: s.opacity,
              width: s.size,
              height: s.size,
            }} />
          ))}

          {/* Oven glow */}
          <div className="oven">
            <div className="oven-window" />
            <div className="oven-glow" />
          </div>

          {/* Order bell & ticket */}
          <div className={`order-ticket ${bellRing ? 'bell-ring' : ''} ${orderComplete ? 'order-done' : ''}`}>
            <div className={`bell ${bellRing ? 'ringing' : ''}`}>🔔</div>
            <div className="customer-area">
              <div className={`customer ${customerMood} ${orderComplete ? 'delighted-dance' : ''}`}>
                {getCustomerExpression()}
              </div>
              <div className="customer-name">{currentOrder?.customerName}</div>
            </div>
            {currentOrder?.type === 'build' ? (
              <div className="order-number">
                <span className="order-label">Order:</span>
                <span className={`order-value ${tooMany ? 'too-many' : ''}`}>{currentOrder.targetNumber}</span>
                <span className="order-unit">cupcakes!</span>
              </div>
            ) : (
              <div className="reverse-order">
                <span className="order-label">What number am I?</span>
                <div className="reverse-hint">
                  <span className="reverse-tens">{reverseData.tens} tens</span>
                  <span className="reverse-and">&</span>
                  <span className="reverse-ones">{reverseData.ones} ones</span>
                </div>
              </div>
            )}
            {/* Patience bar */}
            <div className="patience-bar">
              <div
                className="patience-fill"
                style={{ width: `${patience}%`, background: patienceColor }}
              />
            </div>
            {showStamp && <div className="stamp">DONE!</div>}
          </div>

          {/* Shelves */}
          <div className="shelves-area">
            {/* Tens shelf */}
            <div className="shelf tens-shelf">
              <div className="shelf-label">TENS</div>
              <div
                className="shelf-item tray-source"
                onMouseDown={(e) => handleShelfDragStart(e, 'ten')}
                onTouchStart={(e) => handleShelfDragStart(e, 'ten')}
              >
                <div className="tray">
                  <div className="tray-grid">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="tray-cupcake-mini" />
                    ))}
                  </div>
                  <div className="tray-label">10</div>
                </div>
              </div>
              <div className="shelf-hint">Drag me!</div>
            </div>

            {/* Ones shelf */}
            <div className="shelf ones-shelf">
              <div className="shelf-label">ONES</div>
              <div
                className="shelf-item cupcake-source"
                onMouseDown={(e) => handleShelfDragStart(e, 'one')}
                onTouchStart={(e) => handleShelfDragStart(e, 'one')}
              >
                <div className="single-cupcake">
                  <div className="cupcake-wrapper" />
                  <div className="cupcake-icing" />
                  <div className="cupcake-cherry" />
                  <div className="cupcake-label">1</div>
                </div>
              </div>
              <div className="shelf-hint">Drag me!</div>
            </div>
          </div>

          {/* Counter items */}
          {counterItems.map(item => {
            const isDragging = dragState?.itemId === item.id;
            return item.type === 'ten' ? (
              <div
                key={item.id}
                className={`counter-tray ${isDragging ? 'dragging' : ''} ${item.settled ? 'settled' : ''}`}
                style={{ left: item.x, top: item.y }}
                onMouseDown={(e) => handleCounterItemDragStart(e, item)}
                onTouchStart={(e) => handleCounterItemDragStart(e, item)}
              >
                <div className="tray">
                  <div className="tray-grid">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="tray-cupcake-mini" />
                    ))}
                  </div>
                  <div className="tray-label">10</div>
                </div>
              </div>
            ) : (
              <div
                key={item.id}
                className={`counter-cupcake ${isDragging ? 'dragging' : ''} ${item.settled ? 'settled' : ''}`}
                style={{ left: item.x, top: item.y }}
                onMouseDown={(e) => handleCounterItemDragStart(e, item)}
                onTouchStart={(e) => handleCounterItemDragStart(e, item)}
              >
                <div className="single-cupcake placed">
                  <div className="cupcake-wrapper" />
                  <div className="cupcake-icing" />
                  <div className="cupcake-cherry" />
                </div>
              </div>
            );
          })}

          {/* Live counter display */}
          <div className={`live-counter ${tooMany ? 'counter-error' : ''} ${orderComplete ? 'counter-success' : ''}`}>
            {currentOrder?.type === 'build' ? (
              <>
                <span className="lc-tens">{tensCount} tens</span>
                <span className="lc-and"> and </span>
                <span className="lc-ones">{onesCount} ones</span>
                <span className="lc-eq"> = </span>
                <span className={`lc-total ${currentTotal === currentOrder?.targetNumber ? 'correct' : ''}`}>{currentTotal}</span>
              </>
            ) : (
              <div className="reverse-input-area">
                <input
                  type="number"
                  className={`reverse-input ${reverseWrong ? 'wrong-shake' : ''}`}
                  value={reverseAnswer}
                  onChange={(e) => setReverseAnswer(e.target.value)}
                  placeholder="?"
                  min={0}
                  max={99}
                  disabled={orderComplete}
                />
                <button
                  className="reverse-submit"
                  onClick={handleReverseSubmit}
                  disabled={orderComplete || !reverseAnswer}
                >
                  Check!
                </button>
              </div>
            )}
          </div>

          {/* Too many warning */}
          {tooMany && (
            <div className="too-many-warning">
              <span>Too many! Drag some back! ☝️</span>
            </div>
          )}

          {/* Coins */}
          {coins.map(coin => (
            <div key={coin.id} className="coin" style={{
              left: coin.x,
              top: coin.y,
              opacity: coin.opacity,
            }}>
              🪙
            </div>
          ))}

          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} className={`particle particle-${p.type}`} style={{
              left: p.x,
              top: p.y,
              opacity: p.life,
              width: p.size,
              height: p.size,
              background: p.color,
              transform: `rotate(${p.x * 3}deg)`,
            }} />
          ))}
        </div>

        {/* Bottom hint bar */}
        <div className="bottom-bar">
          <div className="hint-text">
            <span className="hint-drag">🧁 Drag trays (10) or cupcakes (1) onto the counter</span>
            <span className="hint-remove">☝️ Drag items above shelves to remove</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// STYLES
// ============================================================

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .pvb-game {
    width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: #3D2417;
  }

  /* ===== INTRO SCREEN ===== */

  .intro-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #5C3A28 0%, #3D2417 50%, #2A1810 100%);
  }

  .intro-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .bg-cupcake {
    position: absolute;
    font-size: 2.5rem;
    animation: floatCupcake 5s ease-in-out infinite;
    opacity: 0.2;
  }

  .bg-sprinkle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    animation: twinkleSprinkle 3s ease-in-out infinite;
  }

  @keyframes floatCupcake {
    0%, 100% { transform: translateY(0) rotate(-5deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }

  @keyframes twinkleSprinkle {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.5); }
  }

  .intro-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 520px;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .logo h1 {
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    font-weight: 900;
    background: linear-gradient(135deg, #FFD93D, #FF8B3D, #FF6B8A);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .logo-icon {
    font-size: 2.5rem;
    animation: iconBounce 2s ease-in-out infinite;
  }
  .logo-icon-2 { animation-delay: 0.4s; }

  @keyframes iconBounce {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(10deg); }
  }

  .tagline {
    color: #C4A882;
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }

  .instructions-card {
    background: rgba(255,255,255,0.07);
    border: 2px solid rgba(255,220,150,0.2);
    border-radius: 24px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);
  }

  .instructions-card h3 {
    color: #FFD93D;
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  }

  .instruction { margin-bottom: 1.2rem; }
  .instruction:last-child { margin-bottom: 0; }

  .instruction-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
  }

  .mini-tray {
    font-size: 1.5rem;
  }

  .mini-cupcake {
    font-size: 1.2rem;
  }

  .inst-arrow {
    color: #C4A882;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .inst-number {
    font-size: 1.4rem;
    font-weight: 900;
    color: #FFD93D;
  }

  .inst-bell { font-size: 1.5rem; }

  .inst-label {
    color: #E8D5BC;
    font-size: 0.95rem;
    font-weight: 700;
  }

  .inst-coin { font-size: 1.5rem; }

  .instruction p {
    color: #C4A882;
    font-size: 0.9rem;
  }

  .instruction p strong {
    color: #FFD93D;
  }

  .start-btn, .next-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2.5rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #3D2417;
    background: linear-gradient(135deg, #FFD93D, #FF8B3D);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(255,217,61,0.4);
  }

  .start-btn:hover, .next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(255,217,61,0.6);
  }

  .btn-icon { font-size: 1.4rem; }

  /* ===== COMPLETE SCREEN ===== */

  .complete-screen {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, #5C3A28 0%, #3D2417 100%);
  }

  .final-screen {
    background: linear-gradient(180deg, #4A2C1A 0%, #2A1810 50%, #1A0E08 100%);
  }

  .complete-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

  .floating-cupcake {
    position: absolute;
    top: -10%;
    font-size: 2rem;
    animation: fallCupcake 4s ease-in infinite;
  }

  @keyframes fallCupcake {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
    100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
  }

  .complete-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 2rem;
    max-width: 500px;
  }

  .complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem);
    color: #FFD93D;
    margin-bottom: 0.5rem;
  }

  .complete-subtitle {
    color: #C4A882;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .final-subtitle {
    color: #C4A882;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .trophy-display {
    font-size: 5rem;
    margin-bottom: 1rem;
    animation: trophyBounce 1.5s ease-in-out infinite;
  }

  @keyframes trophyBounce {
    0%, 100% { transform: scale(1) rotate(-3deg); }
    50% { transform: scale(1.1) rotate(3deg); }
  }

  .score-card {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }

  .score-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 0.8rem 1.2rem;
  }

  .score-label {
    font-size: 0.8rem;
    color: #8B7355;
    margin-bottom: 0.3rem;
  }

  .score-value {
    font-size: 1.8rem;
    font-weight: 900;
    color: #FFD93D;
  }

  .score-value.final {
    font-size: 2.5rem;
    background: linear-gradient(135deg, #FFD93D, #FF8B3D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .star-display {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .star {
    font-size: 2.5rem;
    opacity: 0.2;
    transition: all 0.5s ease;
  }

  .star.earned {
    opacity: 1;
    animation: starPop 0.5s ease;
  }

  @keyframes starPop {
    0% { transform: scale(0); }
    60% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  .complete-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .menu-btn {
    padding: 0.7rem 2rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #8B7355;
    background: transparent;
    border: 2px solid rgba(255,220,150,0.2);
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .menu-btn:hover {
    border-color: rgba(255,220,150,0.5);
    color: #C4A882;
  }

  /* ===== GAME SCREEN ===== */

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
    padding: 0.6rem 0.8rem;
    background: linear-gradient(180deg, #2A1810 0%, #3D2417 100%);
    z-index: 50;
    border-bottom: 2px solid #5C3A28;
  }

  .header-left, .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .back-btn {
    width: 36px;
    height: 36px;
    background: rgba(255,220,150,0.1);
    border: none;
    border-radius: 10px;
    color: #C4A882;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .back-btn:hover { background: rgba(255,220,150,0.2); }

  .level-badge {
    padding: 0.4rem 0.8rem;
    background: linear-gradient(135deg, #FF8B3D, #FFD93D);
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.85rem;
    color: #3D2417;
  }

  .order-badge {
    padding: 0.4rem 0.8rem;
    background: rgba(255,220,150,0.1);
    border-radius: 16px;
    font-weight: 600;
    font-size: 0.8rem;
    color: #C4A882;
  }

  .header-center { display: flex; align-items: center; }

  .combo-badge {
    padding: 0.4rem 1rem;
    background: linear-gradient(135deg, #FF6B8A, #C77DFF);
    border-radius: 16px;
    font-weight: 800;
    font-size: 0.85rem;
    color: white;
    animation: comboPulse 0.8s ease-in-out infinite;
  }

  @keyframes comboPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .score-badge {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    background: rgba(255,217,61,0.15);
    border-radius: 16px;
    color: #FFD93D;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .score-icon { font-size: 1rem; }

  /* ===== GAME AREA ===== */

  .game-area {
    flex: 1;
    position: relative;
    overflow: hidden;
    touch-action: none;
  }

  .bakery-wall {
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 48px,
        rgba(255,255,255,0.03) 48px,
        rgba(255,255,255,0.03) 50px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 48px,
        rgba(255,255,255,0.03) 48px,
        rgba(255,255,255,0.03) 50px
      ),
      linear-gradient(180deg, #6B4A34 0%, #5C3A28 40%, #4A2C1A 100%);
    pointer-events: none;
  }

  .bakery-counter-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%;
    background:
      linear-gradient(180deg,
        #8B6B4A 0%,
        #7A5C3E 4px,
        #6B4A34 8px,
        #5C3A28 100%
      );
    border-top: 4px solid #A0845C;
    pointer-events: none;
    z-index: 1;
  }

  .bakery-counter-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(180deg, rgba(255,255,255,0.15), transparent);
  }

  /* ===== OVEN ===== */

  .oven {
    position: absolute;
    left: 10px;
    top: 60px;
    width: 70px;
    height: 70px;
    background: linear-gradient(180deg, #4A4A4A, #333);
    border-radius: 8px;
    border: 2px solid #555;
    z-index: 2;
    pointer-events: none;
  }

  .oven-window {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 20px;
    background: linear-gradient(180deg, #FF6B3D, #FF4500);
    border-radius: 4px;
    opacity: 0.6;
    animation: ovenGlow 2s ease-in-out infinite;
  }

  .oven-glow {
    position: absolute;
    inset: -15px;
    border-radius: 20px;
    background: radial-gradient(circle, rgba(255,100,50,0.2) 0%, transparent 70%);
    animation: ovenGlow 2s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes ovenGlow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }

  /* ===== STEAM ===== */

  .steam {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    pointer-events: none;
    z-index: 3;
    filter: blur(3px);
  }

  /* ===== ORDER TICKET ===== */

  .order-ticket {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #FFF8E7, #F5E6C8);
    border-radius: 16px;
    padding: 0.8rem 1.5rem;
    z-index: 30;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4);
    border: 2px solid #D4B88C;
    text-align: center;
    min-width: 220px;
    transition: transform 0.3s ease;
  }

  .order-ticket.bell-ring {
    animation: ticketShake 0.4s ease;
  }

  @keyframes ticketShake {
    0%, 100% { transform: translateX(-50%) rotate(0deg); }
    25% { transform: translateX(-50%) rotate(-2deg); }
    75% { transform: translateX(-50%) rotate(2deg); }
  }

  .bell {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    transition: transform 0.1s ease;
  }

  .bell.ringing {
    animation: bellSwing 0.3s ease infinite;
  }

  @keyframes bellSwing {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    75% { transform: rotate(-15deg); }
  }

  .customer-area {
    margin-bottom: 0.3rem;
  }

  .customer {
    font-size: 3rem;
    transition: transform 0.3s ease;
    line-height: 1.1;
  }

  .customer.waiting { animation: customerWait 2s ease-in-out infinite; }
  .customer.impatient { animation: customerAngry 0.3s ease infinite; }
  .customer.delighted-dance { animation: customerDance 0.4s ease infinite; }

  @keyframes customerWait {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
  }

  @keyframes customerAngry {
    0%, 100% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(3deg) scale(1.05); }
  }

  @keyframes customerDance {
    0% { transform: translateY(0) rotate(-5deg); }
    25% { transform: translateY(-8px) rotate(5deg); }
    50% { transform: translateY(0) rotate(-5deg); }
    75% { transform: translateY(-5px) rotate(3deg); }
    100% { transform: translateY(0) rotate(-5deg); }
  }

  .customer-name {
    font-size: 0.7rem;
    color: #8B7355;
    font-weight: 600;
  }

  .order-number, .reverse-order {
    margin-bottom: 0.3rem;
  }

  .order-label {
    font-size: 0.7rem;
    color: #8B7355;
    font-weight: 600;
    display: block;
  }

  .order-value {
    font-size: 2rem;
    font-weight: 900;
    color: #3D2417;
    transition: all 0.2s ease;
  }

  .order-value.too-many {
    color: #FF4444;
    animation: flashRed 0.3s ease infinite;
  }

  @keyframes flashRed {
    0%, 100% { color: #FF4444; }
    50% { color: #FF0000; }
  }

  .order-unit {
    font-size: 0.75rem;
    color: #8B7355;
    display: block;
  }

  .reverse-hint {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.3rem;
  }

  .reverse-tens {
    font-size: 1.2rem;
    font-weight: 800;
    color: #FF8B3D;
  }

  .reverse-and {
    color: #8B7355;
    font-size: 0.9rem;
  }

  .reverse-ones {
    font-size: 1.2rem;
    font-weight: 800;
    color: #6BCB77;
  }

  /* ===== PATIENCE BAR ===== */

  .patience-bar {
    width: 100%;
    height: 6px;
    background: rgba(0,0,0,0.1);
    border-radius: 3px;
    margin-top: 0.4rem;
    overflow: hidden;
  }

  .patience-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 1s linear, background 0.5s ease;
  }

  /* ===== STAMP ===== */

  .stamp {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-15deg) scale(0);
    font-size: 2rem;
    font-weight: 900;
    color: #4CAF50;
    border: 4px solid #4CAF50;
    border-radius: 12px;
    padding: 0.3rem 1rem;
    animation: stampSlam 0.4s ease forwards;
    background: rgba(76,175,80,0.1);
  }

  @keyframes stampSlam {
    0% { transform: translate(-50%, -50%) rotate(-15deg) scale(3); opacity: 0; }
    60% { transform: translate(-50%, -50%) rotate(-15deg) scale(0.9); opacity: 1; }
    100% { transform: translate(-50%, -50%) rotate(-15deg) scale(1); opacity: 1; }
  }

  /* ===== SHELVES ===== */

  .shelves-area {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    z-index: 20;
    pointer-events: none;
  }

  .shelf {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    pointer-events: auto;
  }

  .shelf-label {
    font-size: 0.65rem;
    font-weight: 800;
    color: #FFD93D;
    background: rgba(0,0,0,0.5);
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    letter-spacing: 1px;
  }

  .shelf-item {
    cursor: grab;
    transition: transform 0.2s ease;
  }

  .shelf-item:hover { transform: scale(1.08); }
  .shelf-item:active { cursor: grabbing; transform: scale(0.95); }

  .shelf-hint {
    font-size: 0.6rem;
    color: #8B7355;
    animation: hintPulse 2s ease-in-out infinite;
  }

  @keyframes hintPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* ===== TRAY ===== */

  .tray {
    position: relative;
    width: 105px;
    height: 55px;
    background: linear-gradient(180deg, #A0845C, #8B6B4A);
    border-radius: 8px;
    border: 2px solid #C4A882;
    box-shadow: 0 3px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .tray-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 4px;
    width: 100%;
    height: 100%;
  }

  .tray-cupcake-mini {
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 40% 40%;
    background: radial-gradient(ellipse at 50% 30%, #FF9EC6, #E8709A);
    position: relative;
  }

  .tray-cupcake-mini::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: radial-gradient(circle, #FF6B8A, #E8709A);
  }

  .tray-cupcake-mini::after {
    content: '';
    position: absolute;
    top: -3px;
    left: 40%;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background: #FF3B5C;
  }

  .tray-label {
    position: absolute;
    bottom: -1px;
    right: 4px;
    font-size: 0.9rem;
    font-weight: 900;
    color: rgba(255,255,255,0.8);
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }

  /* ===== SINGLE CUPCAKE ===== */

  .single-cupcake {
    position: relative;
    width: 50px;
    height: 58px;
  }

  .cupcake-wrapper {
    position: absolute;
    bottom: 0;
    left: 5px;
    right: 5px;
    height: 55%;
    background: linear-gradient(180deg, #D4A76A, #B8894A);
    border-radius: 2px 2px 8px 8px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  .cupcake-wrapper::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255,255,255,0.15);
  }

  .cupcake-wrapper::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255,255,255,0.1);
  }

  .cupcake-icing {
    position: absolute;
    top: 8px;
    left: 2px;
    right: 2px;
    height: 50%;
    background: radial-gradient(ellipse at 50% 60%, #FFB6D9, #FF8EC4);
    border-radius: 50% 50% 30% 30%;
    box-shadow: 0 2px 6px rgba(255,142,196,0.3);
  }

  .cupcake-icing::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 15%;
    width: 70%;
    height: 60%;
    background: radial-gradient(ellipse at 50% 40%, #FFC8E2, #FFB6D9);
    border-radius: 50%;
  }

  .cupcake-cherry {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at 35% 35%, #FF5555, #CC0000);
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
  }

  .cupcake-cherry::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    width: 2px;
    height: 4px;
    background: #5A3;
    border-radius: 1px;
  }

  .cupcake-label {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    font-weight: 900;
    color: rgba(255,255,255,0.8);
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  }

  /* ===== COUNTER ITEMS ===== */

  .counter-tray, .counter-cupcake {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 15;
    cursor: grab;
    transition: filter 0.2s ease;
  }

  .counter-tray.dragging, .counter-cupcake.dragging {
    cursor: grabbing;
    z-index: 25;
    filter: brightness(1.1) drop-shadow(0 6px 12px rgba(0,0,0,0.5));
  }

  .counter-tray.settled {
    animation: settleShake 0.2s ease;
  }

  .counter-cupcake.settled {
    animation: settleShake 0.15s ease;
  }

  @keyframes settleShake {
    0% { transform: translate(-50%, -50%) scaleY(0.9) scaleX(1.05); }
    50% { transform: translate(-50%, -50%) scaleY(1.03) scaleX(0.98); }
    100% { transform: translate(-50%, -50%) scaleY(1) scaleX(1); }
  }

  .single-cupcake.placed {
    width: 40px;
    height: 48px;
  }

  /* ===== LIVE COUNTER ===== */

  .live-counter {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.7);
    border: 2px solid #5C3A28;
    border-radius: 16px;
    padding: 0.5rem 1.2rem;
    z-index: 25;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1rem;
    font-weight: 700;
    color: #C4A882;
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .live-counter.counter-error {
    border-color: #FF4444;
    background: rgba(255,0,0,0.2);
    animation: counterFlash 0.3s ease infinite;
  }

  .live-counter.counter-success {
    border-color: #4CAF50;
    background: rgba(76,175,80,0.2);
  }

  @keyframes counterFlash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  .lc-tens { color: #FF8B3D; font-weight: 800; }
  .lc-and { color: #8B7355; }
  .lc-ones { color: #6BCB77; font-weight: 800; }
  .lc-eq { color: #8B7355; }

  .lc-total {
    font-size: 1.3rem;
    font-weight: 900;
    color: #FFD93D;
    min-width: 2ch;
    text-align: center;
  }

  .lc-total.correct {
    color: #4CAF50;
    animation: correctPulse 0.5s ease;
  }

  @keyframes correctPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }

  /* ===== REVERSE INPUT ===== */

  .reverse-input-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .reverse-input {
    width: 60px;
    padding: 0.4rem;
    font-family: 'Nunito', sans-serif;
    font-size: 1.3rem;
    font-weight: 900;
    text-align: center;
    background: rgba(255,255,255,0.1);
    border: 2px solid #FFD93D;
    border-radius: 10px;
    color: #FFD93D;
    outline: none;
  }

  .reverse-input::placeholder {
    color: rgba(255,217,61,0.3);
  }

  .reverse-input.wrong-shake {
    animation: wrongShake 0.4s ease;
    border-color: #FF4444;
  }

  @keyframes wrongShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }

  .reverse-submit {
    padding: 0.4rem 0.8rem;
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    color: #3D2417;
    background: linear-gradient(135deg, #FFD93D, #FF8B3D);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .reverse-submit:hover { transform: scale(1.05); }
  .reverse-submit:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

  /* ===== TOO MANY WARNING ===== */

  .too-many-warning {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,0,0,0.9);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 16px;
    font-size: 1.1rem;
    font-weight: 800;
    z-index: 100;
    animation: warningPop 0.3s ease;
    box-shadow: 0 4px 20px rgba(255,0,0,0.5);
  }

  @keyframes warningPop {
    0% { transform: translate(-50%, -50%) scale(0); }
    60% { transform: translate(-50%, -50%) scale(1.1); }
    100% { transform: translate(-50%, -50%) scale(1); }
  }

  /* ===== COINS ===== */

  .coin {
    position: absolute;
    font-size: 1.5rem;
    pointer-events: none;
    z-index: 200;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    animation: coinSpin 0.6s linear infinite;
  }

  @keyframes coinSpin {
    0% { transform: translate(-50%, -50%) rotateY(0deg); }
    100% { transform: translate(-50%, -50%) rotateY(360deg); }
  }

  /* ===== PARTICLES ===== */

  .particle {
    position: absolute;
    pointer-events: none;
    z-index: 200;
    border-radius: 2px;
  }

  .particle-sprinkle {
    border-radius: 6px;
  }

  .particle-confetti {
    border-radius: 1px;
  }

  /* ===== BOTTOM BAR ===== */

  .bottom-bar {
    padding: 0.5rem;
    background: #2A1810;
    text-align: center;
    border-top: 2px solid #5C3A28;
    z-index: 40;
  }

  .hint-text {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.75rem;
    color: #8B7355;
  }

  .hint-drag { color: #C4A882; }
  .hint-remove { color: #8B7355; }

  /* ===== RESPONSIVE ===== */

  @media (max-width: 600px) {
    .order-ticket {
      min-width: 180px;
      padding: 0.5rem 1rem;
    }
    .customer { font-size: 2.2rem; }
    .order-value { font-size: 1.6rem; }
    .tray { width: 85px; height: 46px; }
    .single-cupcake { width: 42px; height: 50px; }
    .live-counter { font-size: 0.85rem; padding: 0.4rem 0.8rem; }
    .hint-text { flex-direction: column; gap: 0.2rem; }
    .header-center { display: none; }
    .score-card { gap: 0.8rem; }
    .shelf-label { font-size: 0.55rem; }
  }

  @media (max-width: 400px) {
    .order-ticket { min-width: 150px; }
    .tray { width: 72px; height: 40px; }
    .single-cupcake { width: 36px; height: 44px; }
    .shelves-area { top: 4px; left: 4px; right: 4px; }
  }
`;
