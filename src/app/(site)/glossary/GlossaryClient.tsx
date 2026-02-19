"use client";

import { useState, useMemo } from "react";

export interface GlossaryEntry {
  term: string;
  definition: string;
  subject: "Mathematics" | "English";
}

interface Props {
  entries: GlossaryEntry[];
}

const SUBJECTS = ["All", "Mathematics", "English"] as const;
type SubjectFilter = (typeof SUBJECTS)[number];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryClient({ entries }: Props) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState<SubjectFilter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      const matchesSubject = subject === "All" || e.subject === subject;
      const matchesQuery =
        q === "" ||
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q);
      return matchesSubject && matchesQuery;
    });
  }, [entries, query, subject]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryEntry[]> = {};
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(entry);
    }
    for (const letter of Object.keys(map)) {
      map[letter].sort((a, b) => a.term.localeCompare(b.term));
    }
    return map;
  }, [filtered]);

  const activeLetters = new Set(Object.keys(grouped));

  function highlight(text: string): React.ReactNode {
    const q = query.trim();
    if (!q) return text;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escaped})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="rounded bg-golden/40 px-0.5 text-charcoal">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }

  return (
    <div>
      {/* Controls bar */}
      <div className="sticky top-0 z-20 border-b border-charcoal/[0.07] bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                placeholder="Search terms or definitions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-charcoal/[0.12] bg-warm-white py-2.5 pl-9 pr-9 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-terracotta/40 focus:outline-none focus:ring-2 focus:ring-terracotta/20 transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-charcoal/40 hover:text-charcoal transition-colors"
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Subject filter */}
            <div className="flex shrink-0 gap-2">
              {SUBJECTS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-150 ${
                    subject === s
                      ? s === "Mathematics"
                        ? "bg-terracotta text-white shadow-sm"
                        : s === "English"
                          ? "bg-sage text-white shadow-sm"
                          : "bg-charcoal text-white shadow-sm"
                      : "border border-charcoal/[0.12] bg-warm-white text-charcoal hover:border-charcoal/25 hover:bg-cream-dark"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-2 text-xs text-charcoal/50">
            {filtered.length === 0
              ? "No terms found"
              : `${filtered.length} term${filtered.length !== 1 ? "s" : ""}${
                  query ? " matching your search" : ""
                }`}
          </p>
        </div>
      </div>

      {/* Alphabet quick-nav */}
      <div className="border-b border-charcoal/[0.06] bg-warm-white">
        <div className="mx-auto max-w-4xl overflow-x-auto px-5 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            {ALPHABET.map((letter) => (
              <a
                key={letter}
                href={activeLetters.has(letter) ? `#letter-${letter}` : undefined}
                aria-disabled={!activeLetters.has(letter)}
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold transition-colors ${
                  activeLetters.has(letter)
                    ? "text-charcoal hover:bg-terracotta/10 hover:text-terracotta-dark"
                    : "cursor-default text-charcoal/20"
                }`}
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="mx-auto max-w-4xl px-5 pb-20 pt-2 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-charcoal/5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-charcoal/30"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="font-display text-2xl font-semibold text-charcoal/30">
              No results found
            </p>
            <p className="mt-2 text-sm text-charcoal/40">
              Try a different search term or reset the subject filter.
            </p>
          </div>
        ) : (
          <div className="space-y-10 pt-8">
            {ALPHABET.filter((l) => activeLetters.has(l)).map((letter) => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-40">
                <div className="sticky top-[105px] z-10 -mx-5 mb-4 border-b border-charcoal/[0.07] bg-cream/95 px-5 py-2 backdrop-blur-sm sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <span className="font-display text-3xl font-bold text-terracotta/60">
                    {letter}
                  </span>
                </div>

                <div className="divide-y divide-charcoal/[0.06]">
                  {grouped[letter].map((entry) => (
                    <article key={entry.term} className="py-5 first:pt-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="font-display text-lg font-semibold text-charcoal capitalize">
                          {highlight(entry.term)}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${
                            entry.subject === "Mathematics"
                              ? "bg-terracotta/10 text-terracotta-dark"
                              : "bg-sage/20 text-charcoal"
                          }`}
                        >
                          {entry.subject === "Mathematics" ? "Maths" : "English"}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal-light">
                        {highlight(entry.definition)}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
