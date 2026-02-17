import { ReactNode } from "react";
import GlossaryTerm from "@/components/GlossaryTerm";
import englishGlossary from "../../curriculum/english/glossary.json";
import mathematicsGlossary from "../../curriculum/mathematics/glossary.json";

type GlossaryMap = Record<string, string>;

const glossaries: Record<string, GlossaryMap> = {
  English: englishGlossary as GlossaryMap,
  Mathematics: mathematicsGlossary as GlossaryMap,
};

interface MatchEntry {
  pattern: string;
  definition: string;
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildEntries(glossary: GlossaryMap): MatchEntry[] {
  return Object.entries(glossary)
    .map(([key, definition]) => ({
      // Strip parenthetical disambiguation for matching: "bias (statistics)" → "bias"
      pattern: key.replace(/\s*\(.*?\)\s*$/, "").trim(),
      definition,
    }))
    .sort((a, b) => b.pattern.length - a.pattern.length);
}

const entryCache: Record<string, MatchEntry[]> = {};
function getEntries(subject: string): MatchEntry[] {
  if (!entryCache[subject]) {
    const glossary = glossaries[subject];
    entryCache[subject] = glossary ? buildEntries(glossary) : [];
  }
  return entryCache[subject];
}

export function annotateText(text: string, subject: string): ReactNode {
  const entries = getEntries(subject);
  if (entries.length === 0) return text;

  const regex = new RegExp(
    `\\b(${entries.map((e) => escapeRegex(e.pattern)).join("|")})\\b`,
    "gi"
  );

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  const matched = new Set<string>();
  let match;

  while ((match = regex.exec(text)) !== null) {
    const lower = match[1].toLowerCase();
    const entry = entries.find((e) => e.pattern.toLowerCase() === lower);
    if (!entry) continue;

    // Only highlight first occurrence of each term per text
    if (matched.has(lower)) continue;
    matched.add(lower);

    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    parts.push(
      <GlossaryTerm
        key={`${lower}-${match.index}`}
        term={match[1]}
        definition={entry.definition}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}
