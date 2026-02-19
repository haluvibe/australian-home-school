"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ============================================================
// WORD WORM  --  CVC Spelling Game
// Foundation / Year 1 English
// Curriculum: "Spell most consonant-vowel-consonant words"
//             "Know and use the most common sounds represented by letters"
// ============================================================

interface WordWormProps {
  onExit?: () => void;
}

type GameScreen = "intro" | "playing" | "levelComplete" | "gameOver";

interface FallingLetter {
  id: number;
  letter: string;
  x: number;
  y: number;
  speed: number;
  isCorrect: boolean; // is this the next letter needed?
}

interface WormSegment {
  x: number;
  y: number;
}

interface SparkleEffect {
  id: number;
  x: number;
  y: number;
  word: string;
}

// CVC word banks grouped by difficulty
const WORD_BANK_EASY: string[] = [
  "cat", "bat", "hat", "mat", "rat", "sat", "pat", "fat",
  "dog", "log", "fog", "hog", "jog", "bog",
  "pin", "bin", "din", "fin", "tin", "win",
  "cup", "pup", "bus", "sun", "run", "fun", "bun", "gun",
  "bed", "red", "led", "fed", "hen", "pen", "ten", "men",
  "big", "dig", "fig", "pig", "wig", "jig",
  "hot", "pot", "not", "got", "dot", "lot",
  "bug", "dug", "hug", "mug", "rug", "tug",
];

const WORD_BANK_MEDIUM: string[] = [
  "ship", "chin", "chop", "thin", "then", "this",
  "frog", "trip", "drum", "slug", "snap", "swim",
  "plum", "clap", "grab", "drop", "stop", "step",
  "lamp", "jump", "bump", "camp", "damp", "dump",
  "nest", "best", "rest", "test", "west", "vest",
  "milk", "silk", "belt", "felt", "melt", "wilt",
];

const WORD_BANK_HARD: string[] = [
  "crisp", "brand", "blend", "frost", "grump", "trunk",
  "stamp", "clamp", "crunch", "splash", "string", "spring",
  "strum", "shrimp", "script", "strict", "strand", "sprint",
];

const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
const VOWELS = "aeiou";

const WORM_EMOJIS = ["", "", "", "", ""];
const UNDERGROUND_CRITTERS = ["", "", "", "", ""];

let idCounter = 0;
const nextId = () => ++idCounter;

export default function WordWorm({ onExit }: WordWormProps) {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentWord, setCurrentWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [fallingLetters, setFallingLetters] = useState<FallingLetter[]>([]);
  const [wormSegments, setWormSegments] = useState<WormSegment[]>([]);
  const [wordsCompleted, setWordsCompleted] = useState(0);
  const [wordsNeeded, setWordsNeeded] = useState(3);
  const [sparkle, setSparkle] = useState<SparkleEffect | null>(null);
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [collectedLetters, setCollectedLetters] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTimeRef = useRef(0);

  const getWordBank = useCallback((lvl: number): string[] => {
    if (lvl <= 3) return WORD_BANK_EASY;
    if (lvl <= 6) return [...WORD_BANK_EASY, ...WORD_BANK_MEDIUM];
    return [...WORD_BANK_EASY, ...WORD_BANK_MEDIUM, ...WORD_BANK_HARD];
  }, []);

  const pickWord = useCallback((lvl: number): string => {
    const bank = getWordBank(lvl);
    return bank[Math.floor(Math.random() * bank.length)];
  }, [getWordBank]);

  const getContainerSize = useCallback(() => {
    if (containerRef.current) {
      return {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
    return { width: 400, height: 600 };
  }, []);

  const spawnLetter = useCallback((word: string, idx: number, lvl: number) => {
    const size = getContainerSize();
    const correctLetter = word[idx];
    const numDistractors = Math.min(2 + Math.floor(lvl / 2), 5);
    const letters: FallingLetter[] = [];

    // Always include the correct letter
    letters.push({
      id: nextId(),
      letter: correctLetter,
      x: 30 + Math.random() * (size.width - 60),
      y: -40,
      speed: 1.2 + lvl * 0.15,
      isCorrect: true,
    });

    // Add distractors
    for (let i = 0; i < numDistractors; i++) {
      const isVowel = VOWELS.includes(correctLetter);
      const pool = isVowel ? VOWELS : CONSONANTS;
      let distractor = pool[Math.floor(Math.random() * pool.length)];
      // Avoid duplicating the correct letter too much
      if (distractor === correctLetter && pool.length > 1) {
        const chars = pool.split("").filter((c) => c !== correctLetter);
        distractor = chars[Math.floor(Math.random() * chars.length)];
      }
      letters.push({
        id: nextId(),
        letter: distractor,
        x: 30 + Math.random() * (size.width - 60),
        y: -40 - Math.random() * 60,
        speed: 1 + lvl * 0.12 + Math.random() * 0.5,
        isCorrect: false,
      });
    }

    setFallingLetters((prev) => [...prev, ...letters]);
  }, [getContainerSize]);

  const initLevel = useCallback((lvl: number) => {
    const word = pickWord(lvl);
    const needed = Math.min(3 + Math.floor(lvl / 2), 7);
    setCurrentWord(word);
    setLetterIndex(0);
    setCollectedLetters([]);
    setWordsCompleted(0);
    setWordsNeeded(needed);
    setFallingLetters([]);
    setSparkle(null);
    setShakeScreen(false);
    setShowHint(true);

    // Init worm
    const size = getContainerSize();
    const baseX = size.width / 2;
    const baseY = size.height - 60;
    const segments: WormSegment[] = [];
    for (let i = 0; i < 4; i++) {
      segments.push({ x: baseX - i * 18, y: baseY });
    }
    setWormSegments(segments);

    // Start spawning
    setTimeout(() => spawnLetter(word, 0, lvl), 500);
  }, [pickWord, getContainerSize, spawnLetter]);

  const startGame = () => {
    setScreen("playing");
    setLevel(1);
    setScore(0);
    setLives(3);
    initLevel(1);
  };

  const nextLevel = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setScreen("playing");
    initLevel(newLevel);
  };

  // Handle tapping a falling letter
  const handleLetterTap = useCallback(
    (letter: FallingLetter) => {
      if (screen !== "playing") return;

      const neededLetter = currentWord[letterIndex];

      if (letter.letter === neededLetter) {
        // Correct!
        setScore((s) => s + 10 * level);
        const newCollected = [...collectedLetters, letter.letter];
        setCollectedLetters(newCollected);
        setFallingLetters((prev) => prev.filter((l) => l.id !== letter.id));

        if (showHint) setShowHint(false);

        const newIdx = letterIndex + 1;
        if (newIdx >= currentWord.length) {
          // Word complete!
          setSparkle({
            id: Date.now(),
            x: letter.x,
            y: letter.y,
            word: currentWord,
          });
          setTimeout(() => setSparkle(null), 1200);

          // Grow worm
          setWormSegments((prev) => {
            const last = prev[prev.length - 1];
            return [...prev, { x: last.x - 18, y: last.y }];
          });

          const newCompleted = wordsCompleted + 1;
          setWordsCompleted(newCompleted);

          if (newCompleted >= wordsNeeded) {
            // Level complete
            setTimeout(() => setScreen("levelComplete"), 800);
          } else {
            // Next word
            const newWord = pickWord(level);
            setCurrentWord(newWord);
            setLetterIndex(0);
            setCollectedLetters([]);
            setFallingLetters([]);
            setTimeout(() => spawnLetter(newWord, 0, level), 600);
          }
        } else {
          setLetterIndex(newIdx);
          // Clear remaining letters and spawn new batch for next letter
          setFallingLetters([]);
          setTimeout(() => spawnLetter(currentWord, newIdx, level), 400);
        }
      } else {
        // Wrong letter!
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 400);
        setFallingLetters((prev) => prev.filter((l) => l.id !== letter.id));
        setLives((l) => {
          const newLives = l - 1;
          if (newLives <= 0) {
            setTimeout(() => setScreen("gameOver"), 500);
          }
          return newLives;
        });
      }
    },
    [
      screen,
      currentWord,
      letterIndex,
      collectedLetters,
      level,
      wordsCompleted,
      wordsNeeded,
      pickWord,
      spawnLetter,
      showHint,
    ]
  );

  // Physics animation loop
  useEffect(() => {
    if (screen !== "playing") {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const update = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = Math.min((timestamp - lastTimeRef.current) / 16, 3);
      lastTimeRef.current = timestamp;

      const size = getContainerSize();

      setFallingLetters((prev) => {
        const updated = prev
          .map((l) => ({ ...l, y: l.y + l.speed * delta }))
          .filter((l) => l.y < size.height + 50);
        return updated;
      });

      animRef.current = requestAnimationFrame(update);
    };

    animRef.current = requestAnimationFrame(update);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [screen, getContainerSize]);

  // Respawn letters if all fall off screen
  useEffect(() => {
    if (screen !== "playing") return;

    const check = setInterval(() => {
      setFallingLetters((prev) => {
        if (prev.length === 0 && currentWord && letterIndex < currentWord.length) {
          // Respawn
          setTimeout(() => spawnLetter(currentWord, letterIndex, level), 200);
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(check);
  }, [screen, currentWord, letterIndex, level, spawnLetter]);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (spawnRef.current) clearInterval(spawnRef.current);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Worm animation (gentle wiggle)
  const [wormFrame, setWormFrame] = useState(0);
  useEffect(() => {
    if (screen !== "playing") return;
    const interval = setInterval(() => {
      setWormFrame((f) => f + 1);
    }, 150);
    return () => clearInterval(interval);
  }, [screen]);

  const livesDisplay = Array.from({ length: 3 }, (_, i) =>
    i < lives ? "\u2764\uFE0F" : "\uD83E\uDD0D"
  );

  // ===================== INTRO SCREEN =====================
  if (screen === "intro") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-intro">
          <div className="ww-intro-bg">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="ww-dirt-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
          <div className="ww-intro-content">
            <div className="ww-logo">
              <span className="ww-logo-worm">{WORM_EMOJIS[0]}</span>
              <h1>Word Worm</h1>
              <span className="ww-logo-worm flip">{WORM_EMOJIS[0]}</span>
            </div>
            <p className="ww-tagline">Feed the worm with words!</p>
            <div className="ww-instructions-card">
              <h3>How to Play</h3>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-letter-preview">c</span>
                  <span className="ww-letter-preview">a</span>
                  <span className="ww-letter-preview">t</span>
                  <span className="ww-arrow-icon">{"\u2192"}</span>
                  <span className="ww-word-result">cat!</span>
                </div>
                <p>
                  <strong>TAP</strong> falling letters in order to{" "}
                  <span className="ww-hl-green">SPELL</span> words!
                </p>
              </div>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-mini-worm">{WORM_EMOJIS[0]}</span>
                  <span className="ww-arrow-icon">{"\u2192"}</span>
                  <span className="ww-mini-worm big">{WORM_EMOJIS[0]}{WORM_EMOJIS[0]}{WORM_EMOJIS[0]}</span>
                </div>
                <p>
                  Each word makes the worm{" "}
                  <span className="ww-hl-orange">GROW</span> longer!
                </p>
              </div>
              <div className="ww-instruction">
                <div className="ww-instruction-visual">
                  <span className="ww-heart-icon">{"\u2764\uFE0F"}{"\u2764\uFE0F"}{"\u2764\uFE0F"}</span>
                </div>
                <p>
                  Wrong letters cost a <span className="ww-hl-red">LIFE</span>{" "}
                  -- be careful!
                </p>
              </div>
            </div>
            <button className="ww-start-btn" onClick={startGame}>
              {WORM_EMOJIS[0]} Start Spelling! {WORM_EMOJIS[0]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===================== LEVEL COMPLETE =====================
  if (screen === "levelComplete") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-complete">
          <div className="ww-complete-content">
            <h1 className="ww-complete-title">
              {"\uD83C\uDF89"} Level {level} Complete! {"\uD83C\uDF89"}
            </h1>
            <div className="ww-worm-parade">
              {wormSegments.map((_, i) => (
                <span
                  key={i}
                  className="ww-parade-segment"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {i === 0 ? WORM_EMOJIS[Math.min(level, WORM_EMOJIS.length - 1)] : "\uD83D\uDFE2"}
                </span>
              ))}
            </div>
            <div className="ww-score-card">
              <div className="ww-score-item">
                <span className="ww-score-label">Score</span>
                <span className="ww-score-value">{score}</span>
              </div>
              <div className="ww-score-item">
                <span className="ww-score-label">Words Spelled</span>
                <span className="ww-score-value">{wordsNeeded}</span>
              </div>
              <div className="ww-score-item">
                <span className="ww-score-label">Worm Length</span>
                <span className="ww-score-value">{wormSegments.length}</span>
              </div>
            </div>
            <div className="ww-complete-buttons">
              <button className="ww-next-btn" onClick={nextLevel}>
                Level {level + 1} {"\u2192"}
              </button>
              <button
                className="ww-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== GAME OVER =====================
  if (screen === "gameOver") {
    return (
      <div className="ww-game">
        <style>{styles}</style>
        <div className="ww-complete">
          <div className="ww-complete-content">
            <h1 className="ww-complete-title">
              {"\uD83D\uDE22"} Oh no! The worm is still hungry!
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
              You spelled {wordsCompleted} word{wordsCompleted !== 1 ? "s" : ""} and reached Level{" "}
              {level}
            </p>
            <div className="ww-score-card">
              <div className="ww-score-item">
                <span className="ww-score-label">Final Score</span>
                <span className="ww-score-value">{score}</span>
              </div>
            </div>
            <div className="ww-complete-buttons">
              <button className="ww-next-btn" onClick={startGame}>
                Try Again {"\uD83D\uDD04"}
              </button>
              <button
                className="ww-menu-btn"
                onClick={() => (onExit ? onExit() : setScreen("intro"))}
              >
                Main Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===================== PLAYING SCREEN =====================
  return (
    <div className="ww-game">
      <style>{styles}</style>
      <div className={`ww-play ${shakeScreen ? "ww-shake" : ""}`}>
        {/* Header */}
        <div className="ww-header">
          <div className="ww-header-left">
            <button
              className="ww-back-btn"
              onClick={() => (onExit ? onExit() : setScreen("intro"))}
            >
              {"\u2190"}
            </button>
            <div className="ww-level-badge">Level {level}</div>
          </div>
          <div className="ww-header-center">
            <span className="ww-lives">{livesDisplay.join(" ")}</span>
          </div>
          <div className="ww-header-right">
            <div className="ww-score-badge">
              {"\u2B50"} {score}
            </div>
          </div>
        </div>

        {/* Word display */}
        <div className="ww-word-display">
          <div className="ww-word-progress">
            {wordsCompleted} / {wordsNeeded} words
          </div>
          <div className="ww-word-letters">
            {currentWord.split("").map((ch, i) => (
              <div
                key={i}
                className={`ww-word-slot ${
                  i < letterIndex ? "filled" : i === letterIndex ? "active" : ""
                }`}
              >
                {i < letterIndex ? collectedLetters[i] : i === letterIndex ? "?" : ""}
              </div>
            ))}
          </div>
          {showHint && (
            <div className="ww-hint-text">
              Tap the letter <strong>{currentWord[0]}</strong> to start!
            </div>
          )}
        </div>

        {/* Game area */}
        <div className="ww-game-area" ref={containerRef}>
          {/* Underground background elements */}
          <div className="ww-underground-bg">
            {UNDERGROUND_CRITTERS.map((c, i) => (
              <div
                key={i}
                className="ww-bg-critter"
                style={{
                  left: `${15 + i * 18}%`,
                  top: `${60 + (i % 3) * 12}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              >
                {c}
              </div>
            ))}
          </div>

          {/* Falling letters */}
          {fallingLetters.map((letter) => (
            <button
              key={letter.id}
              className={`ww-falling-letter ${
                letter.letter === currentWord[letterIndex]
                  ? "ww-correct-letter"
                  : ""
              }`}
              style={{ left: letter.x, top: letter.y }}
              onClick={() => handleLetterTap(letter)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleLetterTap(letter);
              }}
            >
              {letter.letter}
            </button>
          ))}

          {/* Sparkle effect */}
          {sparkle && (
            <div
              className="ww-sparkle"
              style={{ left: sparkle.x, top: sparkle.y }}
            >
              <div className="ww-sparkle-word">{sparkle.word}!</div>
              <div className="ww-sparkle-burst">{"\u2728"}</div>
            </div>
          )}

          {/* Worm at bottom */}
          <div className="ww-worm">
            {wormSegments.map((seg, i) => {
              const wiggle =
                Math.sin((wormFrame + i) * 0.5) * 4 * (i === 0 ? 0 : 1);
              return (
                <div
                  key={i}
                  className={`ww-worm-segment ${i === 0 ? "head" : ""}`}
                  style={{
                    left: seg.x + wiggle,
                    bottom: 10,
                    zIndex: wormSegments.length - i,
                  }}
                >
                  {i === 0
                    ? WORM_EMOJIS[
                        Math.min(
                          Math.floor(wormSegments.length / 4),
                          WORM_EMOJIS.length - 1
                        )
                      ]
                    : "\uD83D\uDFE2"}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; -webkit-user-select: none; }

  .ww-game {
    width: 100%; height: 100%;
    font-family: 'Nunito', sans-serif;
    overflow: hidden;
    background: linear-gradient(180deg, #3b1f0a 0%, #5c2e0e 30%, #3b1f0a 100%);
  }

  /* Intro */
  .ww-intro {
    height: 100%; display: flex; align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }

  .ww-intro-bg { position: absolute; inset: 0; overflow: hidden; }

  .ww-dirt-particle {
    position: absolute; width: 6px; height: 6px; border-radius: 50%;
    background: rgba(139, 90, 43, 0.6);
    animation: dirtFloat 4s ease-in-out infinite;
  }

  @keyframes dirtFloat {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
  }

  .ww-intro-content, .ww-complete-content {
    position: relative; z-index: 10; text-align: center; padding: 2rem; max-width: 500px;
  }

  .ww-logo {
    display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-bottom: 0.5rem;
  }

  .ww-logo h1 {
    font-size: clamp(2rem, 7vw, 3rem); font-weight: 900;
    background: linear-gradient(135deg, #4ade80, #a3e635, #facc15);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .ww-logo-worm {
    font-size: 2.5rem; animation: wormBounce 2s ease-in-out infinite;
  }

  .ww-logo-worm.flip { transform: scaleX(-1); }

  @keyframes wormBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .ww-tagline { color: #a3e635; font-size: 1.2rem; margin-bottom: 2rem; }

  .ww-instructions-card {
    background: rgba(0,0,0,0.3); border: 2px solid rgba(163,230,53,0.3);
    border-radius: 24px; padding: 1.5rem; margin-bottom: 2rem; backdrop-filter: blur(10px);
  }

  .ww-instructions-card h3 { color: white; font-size: 1.2rem; margin-bottom: 1.2rem; }

  .ww-instruction { margin-bottom: 1.2rem; }
  .ww-instruction:last-child { margin-bottom: 0; }

  .ww-instruction-visual {
    display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.4rem;
  }

  .ww-letter-preview {
    width: 36px; height: 36px; border-radius: 12px;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; color: white; font-size: 1.2rem;
  }

  .ww-arrow-icon { color: #64748b; font-size: 1.2rem; }
  .ww-word-result { color: #facc15; font-weight: 800; font-size: 1.2rem; }
  .ww-mini-worm { font-size: 1.5rem; }
  .ww-mini-worm.big { font-size: 1.2rem; letter-spacing: -2px; }
  .ww-heart-icon { font-size: 1.5rem; }
  .ww-instruction p { color: #cbd5e1; font-size: 0.95rem; }
  .ww-hl-green { color: #4ade80; font-weight: 700; }
  .ww-hl-orange { color: #fb923c; font-weight: 700; }
  .ww-hl-red { color: #f87171; font-weight: 700; }

  .ww-start-btn, .ww-next-btn {
    display: inline-flex; align-items: center; gap: 0.8rem;
    padding: 1rem 2.5rem; font-family: 'Nunito', sans-serif;
    font-size: 1.2rem; font-weight: 800; color: white;
    background: linear-gradient(135deg, #4ade80, #22c55e);
    border: none; border-radius: 50px; cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(74,222,128,0.4);
  }

  .ww-start-btn:hover, .ww-next-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(74,222,128,0.5);
  }

  /* Complete / Game Over */
  .ww-complete {
    height: 100%; display: flex; align-items: center; justify-content: center;
  }

  .ww-complete-title {
    font-size: clamp(1.8rem, 6vw, 2.5rem); color: white; margin-bottom: 1.5rem;
  }

  .ww-worm-parade {
    display: flex; justify-content: center; gap: 0.3rem; margin-bottom: 1.5rem; flex-wrap: wrap;
  }

  .ww-parade-segment {
    font-size: 1.8rem; animation: paradeBounce 1s ease infinite;
  }

  @keyframes paradeBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .ww-score-card {
    display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;
  }

  .ww-score-item { display: flex; flex-direction: column; align-items: center; }
  .ww-score-label { font-size: 0.85rem; color: #64748b; margin-bottom: 0.3rem; }
  .ww-score-value { font-size: 2rem; font-weight: 900; color: white; }

  .ww-complete-buttons { display: flex; flex-direction: column; gap: 1rem; align-items: center; }

  .ww-menu-btn {
    padding: 0.8rem 2rem; font-family: 'Nunito', sans-serif;
    font-size: 1rem; font-weight: 700; color: #94a3b8;
    background: transparent; border: 2px solid rgba(255,255,255,0.2);
    border-radius: 30px; cursor: pointer; transition: all 0.2s ease;
  }

  .ww-menu-btn:hover { border-color: rgba(255,255,255,0.4); color: white; }

  /* Playing */
  .ww-play {
    height: 100%; display: flex; flex-direction: column; position: relative;
  }

  .ww-play.ww-shake { animation: shakeIt 0.4s ease; }

  @keyframes shakeIt {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }

  .ww-header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.8rem 1rem; background: rgba(0,0,0,0.5); z-index: 50;
  }

  .ww-header-left, .ww-header-right { display: flex; align-items: center; gap: 0.8rem; }

  .ww-back-btn {
    width: 40px; height: 40px; background: rgba(255,255,255,0.1);
    border: none; border-radius: 12px; color: white; font-size: 1.2rem;
    cursor: pointer; transition: all 0.2s ease;
  }

  .ww-back-btn:hover { background: rgba(255,255,255,0.2); }

  .ww-level-badge {
    padding: 0.5rem 1rem; background: linear-gradient(135deg, #4ade80, #22c55e);
    border-radius: 20px; font-weight: 700; color: white; font-size: 0.9rem;
  }

  .ww-lives { font-size: 1.2rem; }

  .ww-score-badge {
    display: flex; align-items: center; gap: 0.4rem;
    padding: 0.5rem 1rem; background: rgba(251,191,36,0.2);
    border-radius: 20px; color: #fbbf24; font-weight: 700; font-size: 0.9rem;
  }

  /* Word display */
  .ww-word-display {
    padding: 0.8rem; text-align: center; background: rgba(0,0,0,0.3);
  }

  .ww-word-progress {
    font-size: 0.8rem; color: #64748b; margin-bottom: 0.5rem;
  }

  .ww-word-letters {
    display: flex; justify-content: center; gap: 0.5rem;
  }

  .ww-word-slot {
    width: 48px; height: 52px;
    border: 3px dashed rgba(255,255,255,0.2); border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; font-weight: 900; color: #64748b;
    transition: all 0.3s ease;
  }

  .ww-word-slot.filled {
    background: rgba(74,222,128,0.3); border-color: #4ade80;
    color: #4ade80; border-style: solid;
  }

  .ww-word-slot.active {
    border-color: #facc15; animation: slotPulse 1s ease-in-out infinite;
    color: #facc15;
  }

  @keyframes slotPulse {
    0%, 100% { transform: scale(1); border-color: #facc15; }
    50% { transform: scale(1.05); border-color: #fbbf24; }
  }

  .ww-hint-text {
    color: #facc15; font-size: 0.85rem; margin-top: 0.5rem;
    animation: hintFade 2s ease-in-out infinite;
  }

  @keyframes hintFade {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Game area */
  .ww-game-area {
    flex: 1; position: relative; overflow: hidden; touch-action: none;
  }

  .ww-underground-bg { position: absolute; inset: 0; pointer-events: none; }

  .ww-bg-critter {
    position: absolute; font-size: 1.5rem; opacity: 0.15;
    animation: critterWiggle 3s ease-in-out infinite;
  }

  @keyframes critterWiggle {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(5deg); }
  }

  .ww-falling-letter {
    position: absolute; transform: translate(-50%, -50%);
    width: 56px; height: 56px; border-radius: 16px;
    background: linear-gradient(135deg, #6b5b3a, #8b6d3f);
    border: 3px solid rgba(255,255,255,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.6rem; font-weight: 900; color: white;
    cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-family: 'Nunito', sans-serif;
    z-index: 20;
  }

  .ww-falling-letter:hover {
    transform: translate(-50%, -50%) scale(1.15);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  }

  .ww-falling-letter:active {
    transform: translate(-50%, -50%) scale(0.95);
  }

  .ww-falling-letter.ww-correct-letter {
    /* subtle glow for accessibility - not too obvious */
  }

  /* Sparkle */
  .ww-sparkle {
    position: absolute; transform: translate(-50%, -50%);
    pointer-events: none; z-index: 100; text-align: center;
    animation: sparkleUp 1.2s ease forwards;
  }

  @keyframes sparkleUp {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
    30% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
    100% { transform: translate(-50%, -120%) scale(1); opacity: 0; }
  }

  .ww-sparkle-word {
    padding: 0.6rem 1.2rem; background: linear-gradient(135deg, #facc15, #f59e0b);
    border-radius: 20px; font-size: 1.4rem; font-weight: 900; color: white;
    white-space: nowrap; box-shadow: 0 8px 24px rgba(250,204,21,0.5);
    text-transform: uppercase;
  }

  .ww-sparkle-burst { font-size: 2rem; margin-top: 0.3rem; }

  /* Worm */
  .ww-worm {
    position: absolute; bottom: 0; left: 0; right: 0; height: 60px;
    pointer-events: none;
  }

  .ww-worm-segment {
    position: absolute; font-size: 1.8rem;
    transition: left 0.15s ease;
  }

  .ww-worm-segment.head { font-size: 2.2rem; }

  @media (max-width: 600px) {
    .ww-word-slot { width: 40px; height: 44px; font-size: 1.3rem; }
    .ww-falling-letter { width: 48px; height: 48px; font-size: 1.4rem; }
  }
`;
