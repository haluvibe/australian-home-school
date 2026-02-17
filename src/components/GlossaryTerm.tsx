"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface GlossaryTermProps {
  term: string;
  definition: string;
}

interface TooltipPos {
  top: number;
  left: number;
  arrowLeft: number;
  placement: "above" | "below";
}

const TOOLTIP_WIDTH = 272;
const GAP = 8;
const EDGE_PADDING = 12;

export default function GlossaryTerm({ term, definition }: GlossaryTermProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<TooltipPos | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  const calcPosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Horizontal: center on trigger, then clamp to viewport
    let left = rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2;
    left = Math.max(EDGE_PADDING, Math.min(left, vw - TOOLTIP_WIDTH - EDGE_PADDING));

    // Arrow points at trigger center
    const arrowLeft = rect.left + rect.width / 2 - left;

    // Vertical: prefer above, fall back to below
    const spaceAbove = rect.top;
    const spaceBelow = vh - rect.bottom;
    const placement = spaceAbove > 160 || spaceAbove > spaceBelow ? "above" : "below";

    const top =
      placement === "above"
        ? rect.top + window.scrollY - GAP
        : rect.bottom + window.scrollY + GAP;

    setPos({ top, left, arrowLeft, placement });
  }, []);

  useEffect(() => {
    if (!open) {
      setPos(null);
      return;
    }
    calcPosition();
  }, [open, calcPosition]);

  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="cursor-help border-b border-dashed border-charcoal/30 text-inherit transition-colors hover:border-terracotta hover:text-terracotta"
        onClick={() => setOpen(prev => !prev)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        aria-label={`Definition of ${term}`}
      >
        {term}
      </button>
      {open &&
        pos &&
        createPortal(
          <span
            ref={tooltipRef}
            role="tooltip"
            className="pointer-events-auto fixed z-[9999] rounded-xl border border-charcoal/10 bg-white px-4 py-3 text-left shadow-lg"
            style={{
              width: TOOLTIP_WIDTH,
              top: pos.placement === "above" ? undefined : pos.top - window.scrollY,
              bottom:
                pos.placement === "above"
                  ? window.innerHeight -
                    (pos.top - window.scrollY)
                  : undefined,
              left: pos.left,
            }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="block text-sm font-semibold text-terracotta">
              {term}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-charcoal-light">
              {definition}
            </span>
            <span
              className={`absolute border-[6px] border-transparent ${
                pos.placement === "above"
                  ? "top-full border-t-white"
                  : "bottom-full border-b-white"
              }`}
              style={{ left: pos.arrowLeft - 6 }}
            />
          </span>,
          document.body
        )}
    </>
  );
}
