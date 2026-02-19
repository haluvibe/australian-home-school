"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface GameShellProps {
  gameName: string;
  children: (onExit: () => void) => React.ReactNode;
}

export default function GameShell({ gameName, children }: GameShellProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [launched, setLaunched] = useState(false);
  const [fsSupported, setFsSupported] = useState(false);

  useEffect(() => {
    setFsSupported(!!document.documentElement.requestFullscreen);
    // Already in fullscreen (hub pre-requested it)
    if (document.fullscreenElement) {
      setIsFullscreen(true);
      setLaunched(true);
    }
  }, []);

  const enterFullscreen = useCallback(async () => {
    try {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } catch {
      // Denied — play inline anyway
    }
    setLaunched(true);
  }, []);

  const exitGame = useCallback(async () => {
    if (document.fullscreenElement) {
      try { await document.exitFullscreen(); } catch { /* ignore */ }
    }
    router.push("/games");
  }, [router]);

  // ESC key exits fullscreen — navigate back to games hub
  useEffect(() => {
    const onFsChange = () => {
      const inFs = !!document.fullscreenElement;
      setIsFullscreen(inFs);
      if (!inFs && launched) {
        router.push("/games");
      }
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, [router, launched]);

  return (
    <div
      ref={containerRef}
      style={{ height: isFullscreen ? "100vh" : "calc(100vh - 72px)" }}
      className="w-full bg-slate-900"
    >
      {!launched ? (
        /* ── Launch overlay ── */
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <span className="text-6xl">🎮</span>
          <div>
            <h1 className="font-display text-3xl font-bold text-white">{gameName}</h1>
            <p className="mt-1 text-slate-400">Best experienced in full screen</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            {fsSupported && (
              <button
                onClick={enterFullscreen}
                className="inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-8 py-3.5 text-lg font-bold text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
                Enter Fullscreen &amp; Play
              </button>
            )}
            <button
              onClick={() => setLaunched(true)}
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Play without fullscreen
            </button>
          </div>

          <Link
            href="/games"
            className="mt-2 text-sm text-slate-600 transition-colors hover:text-slate-400"
          >
            ← Back to all games
          </Link>
        </div>
      ) : (
        children(exitGame)
      )}
    </div>
  );
}
