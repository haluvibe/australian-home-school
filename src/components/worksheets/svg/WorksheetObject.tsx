import type { ObjectName } from "@/lib/worksheet-types";

interface WorksheetObjectProps {
  name: ObjectName;
  size?: number;
  className?: string;
}

export default function WorksheetObject({ name, size = 48, className = "" }: WorksheetObjectProps) {
  const s = size;
  const props = { width: s, height: s, viewBox: "0 0 48 48", className };

  switch (name) {
    case "star":
      return (
        <svg {...props}>
          <polygon
            points="24,4 29.5,17.5 44,19 33,29 36,44 24,37 12,44 15,29 4,19 18.5,17.5"
            fill="#FAC098"
            stroke="#235F8B"
            strokeWidth="2"
          />
        </svg>
      );
    case "apple":
      return (
        <svg {...props}>
          <path
            d="M24 8c-2-4-6-4-6-4s-10 2-10 16c0 12 10 22 16 24 6-2 16-12 16-24 0-14-10-16-10-16s-4 0-6 4z"
            fill="#E49C95"
            stroke="#235F8B"
            strokeWidth="2"
          />
          <path d="M24 4c2-2 5-2 5-2" fill="none" stroke="#7B94BC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "fish":
      return (
        <svg {...props}>
          <ellipse cx="22" cy="24" rx="16" ry="10" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <polygon points="38,24 46,16 46,32" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <circle cx="14" cy="22" r="2" fill="#235F8B" />
        </svg>
      );
    case "heart":
      return (
        <svg {...props}>
          <path
            d="M24 42s-16-10-16-22c0-6 4-10 8-10 3 0 6 2 8 6 2-4 5-6 8-6 4 0 8 4 8 10 0 12-16 22-16 22z"
            fill="#E49C95"
            stroke="#235F8B"
            strokeWidth="2"
          />
        </svg>
      );
    case "flower":
      return (
        <svg {...props}>
          <circle cx="24" cy="14" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="14" cy="22" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="34" cy="22" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="17" cy="32" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="31" cy="32" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="24" cy="24" r="6" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
    case "circle":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2.5" />
        </svg>
      );
    case "square":
      return (
        <svg {...props}>
          <rect x="6" y="6" width="36" height="36" fill="#FAC098" stroke="#235F8B" strokeWidth="2.5" />
        </svg>
      );
    case "triangle":
      return (
        <svg {...props}>
          <polygon points="24,6 44,42 4,42" fill="#92ABD3" stroke="#235F8B" strokeWidth="2.5" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...props}>
          <polygon points="24,4 44,24 24,44 4,24" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2.5" />
        </svg>
      );
    case "butterfly":
      return (
        <svg {...props}>
          <ellipse cx="16" cy="18" rx="10" ry="12" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="32" cy="18" rx="10" ry="12" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="16" cy="34" rx="8" ry="9" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="32" cy="34" rx="8" ry="9" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <line x1="24" y1="10" x2="24" y2="44" stroke="#235F8B" strokeWidth="2.5" />
        </svg>
      );

    /* ── Animals ─────────────────────────────────────── */
    case "cat":
      return (
        <svg {...props}>
          <circle cx="24" cy="26" r="14" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <polygon points="12,14 10,2 20,12" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <polygon points="36,14 38,2 28,12" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <circle cx="19" cy="24" r="2" fill="#235F8B" />
          <circle cx="29" cy="24" r="2" fill="#235F8B" />
          <ellipse cx="24" cy="29" rx="2" ry="1.5" fill="#E49C95" />
          <path d="M20 32 Q24 36 28 32" fill="none" stroke="#235F8B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="25" x2="16" y2="26" stroke="#235F8B" strokeWidth="1" />
          <line x1="8" y1="28" x2="16" y2="28" stroke="#235F8B" strokeWidth="1" />
          <line x1="32" y1="26" x2="40" y2="25" stroke="#235F8B" strokeWidth="1" />
          <line x1="32" y1="28" x2="40" y2="28" stroke="#235F8B" strokeWidth="1" />
        </svg>
      );
    case "dog":
      return (
        <svg {...props}>
          <circle cx="24" cy="26" r="14" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="13" cy="16" rx="6" ry="10" fill="#E49C95" stroke="#235F8B" strokeWidth="2" transform="rotate(-15 13 16)" />
          <ellipse cx="35" cy="16" rx="6" ry="10" fill="#E49C95" stroke="#235F8B" strokeWidth="2" transform="rotate(15 35 16)" />
          <circle cx="20" cy="24" r="2" fill="#235F8B" />
          <circle cx="28" cy="24" r="2" fill="#235F8B" />
          <ellipse cx="24" cy="30" rx="3" ry="2" fill="#235F8B" />
          <path d="M21 33 Q24 36 27 33" fill="none" stroke="#235F8B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "mouse":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="28" rx="12" ry="10" fill="#ccc" stroke="#235F8B" strokeWidth="2" />
          <circle cx="16" cy="14" r="8" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <circle cx="32" cy="14" r="8" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <circle cx="20" cy="26" r="1.5" fill="#235F8B" />
          <circle cx="28" cy="26" r="1.5" fill="#235F8B" />
          <circle cx="24" cy="30" r="2" fill="#E49C95" />
          <path d="M24 38 Q24 46 30 44" fill="none" stroke="#235F8B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "elephant":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="24" rx="16" ry="14" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="8" cy="20" rx="7" ry="10" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="40" cy="20" rx="7" ry="10" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <path d="M24 30 Q24 44 20 44" fill="none" stroke="#235F8B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="18" cy="22" r="2" fill="#235F8B" />
          <circle cx="30" cy="22" r="2" fill="#235F8B" />
        </svg>
      );
    case "bird":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="24" rx="12" ry="10" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="24" cy="16" r="8" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <polygon points="32,15 40,14 34,18" fill="#E49C95" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="27" cy="14" r="1.5" fill="#235F8B" />
          <path d="M12,20 Q4,12 8,8" fill="none" stroke="#235F8B" strokeWidth="2" strokeLinecap="round" />
          <path d="M14,22 Q6,16 10,10" fill="none" stroke="#235F8B" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="34" x2="20" y2="42" stroke="#235F8B" strokeWidth="2" />
          <line x1="28" y1="34" x2="28" y2="42" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
    case "ant":
      return (
        <svg {...props}>
          <circle cx="14" cy="28" r="6" fill="#235F8B" stroke="#235F8B" strokeWidth="1" />
          <ellipse cx="26" cy="28" rx="7" ry="6" fill="#3d6d99" stroke="#235F8B" strokeWidth="1" />
          <circle cx="38" cy="28" r="5" fill="#235F8B" stroke="#235F8B" strokeWidth="1" />
          <circle cx="40" cy="26" r="1" fill="#FCD4B0" />
          <circle cx="36" cy="26" r="1" fill="#FCD4B0" />
          <line x1="12" y1="34" x2="6" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="16" y1="34" x2="14" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="24" y1="34" x2="22" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="28" y1="34" x2="30" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="20" y1="34" x2="18" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="32" y1="34" x2="34" y2="42" stroke="#235F8B" strokeWidth="1.5" />
          <path d="M38 23 Q40 16 44 14" fill="none" stroke="#235F8B" strokeWidth="1.5" />
          <path d="M36 23 Q36 16 32 14" fill="none" stroke="#235F8B" strokeWidth="1.5" />
        </svg>
      );
    case "giraffe":
      return (
        <svg {...props}>
          <rect x="20" y="4" width="8" height="24" rx="4" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="24" cy="8" r="6" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="24" cy="34" rx="12" ry="8" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="22" cy="7" r="1" fill="#235F8B" />
          <circle cx="26" cy="7" r="1" fill="#235F8B" />
          <circle cx="22" cy="16" r="2" fill="#E49C95" />
          <circle cx="26" cy="22" r="2" fill="#E49C95" />
          <line x1="18" y1="42" x2="18" y2="46" stroke="#235F8B" strokeWidth="2" />
          <line x1="30" y1="42" x2="30" y2="46" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
    case "horse":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="24" rx="16" ry="12" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="38" cy="16" rx="6" ry="8" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <circle cx="40" cy="14" r="1.5" fill="#235F8B" />
          <path d="M36 8 Q38 4 42 6" fill="none" stroke="#235F8B" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="36" x2="14" y2="46" stroke="#235F8B" strokeWidth="2.5" />
          <line x1="22" y1="36" x2="21" y2="46" stroke="#235F8B" strokeWidth="2.5" />
          <line x1="28" y1="36" x2="29" y2="46" stroke="#235F8B" strokeWidth="2.5" />
          <line x1="34" y1="36" x2="36" y2="46" stroke="#235F8B" strokeWidth="2.5" />
          <path d="M8 24 Q4 20 6 16" fill="none" stroke="#235F8B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "snake":
      return (
        <svg {...props}>
          <path
            d="M4 32 Q12 16 20 28 Q28 40 36 24 Q40 18 44 20"
            fill="none"
            stroke="#7B94BC"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M4 32 Q12 16 20 28 Q28 40 36 24 Q40 18 44 20"
            fill="none"
            stroke="#92ABD3"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="44" cy="20" r="3" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="45" cy="19" r="1" fill="#235F8B" />
          <path d="M46 22 L48 24 L46 23" fill="#E49C95" stroke="#E49C95" strokeWidth="0.5" />
        </svg>
      );

    /* ── Sky / Nature ────────────────────────────────── */
    case "sun":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="10" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 24 + Math.cos(rad) * 14;
            const y1 = 24 + Math.sin(rad) * 14;
            const x2 = 24 + Math.cos(rad) * 20;
            const y2 = 24 + Math.sin(rad) * 20;
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FAC098" strokeWidth="3" strokeLinecap="round" />;
          })}
        </svg>
      );
    case "moon":
      return (
        <svg {...props}>
          <path
            d="M30 6 A18 18 0 1 0 30 42 A14 14 0 1 1 30 6z"
            fill="#FCD4B0"
            stroke="#235F8B"
            strokeWidth="2"
          />
        </svg>
      );
    case "tree":
      return (
        <svg {...props}>
          <rect x="20" y="30" width="8" height="14" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <polygon points="24,4 42,32 6,32" fill="#7B94BC" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );

    /* ── Everyday Objects ────────────────────────────── */
    case "pencil":
      return (
        <svg {...props}>
          <rect x="14" y="6" width="10" height="30" rx="1" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <polygon points="14,36 24,36 19,46" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <rect x="14" y="6" width="10" height="6" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <circle cx="19" cy="44" r="1" fill="#235F8B" />
        </svg>
      );
    case "cup":
      return (
        <svg {...props}>
          <path d="M10 12 L14 40 L34 40 L38 12 Z" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <path d="M38 18 Q46 18 46 26 Q46 34 38 34" fill="none" stroke="#235F8B" strokeWidth="2" />
          <rect x="12" y="40" width="24" height="4" rx="1" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
        </svg>
      );
    case "book":
      return (
        <svg {...props}>
          <rect x="8" y="8" width="28" height="34" rx="2" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <rect x="12" y="8" width="28" height="34" rx="2" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <line x1="16" y1="16" x2="36" y2="16" stroke="#235F8B" strokeWidth="1.5" />
          <line x1="16" y1="22" x2="34" y2="22" stroke="#235F8B" strokeWidth="1" />
          <line x1="16" y1="27" x2="32" y2="27" stroke="#235F8B" strokeWidth="1" />
        </svg>
      );
    case "car":
      return (
        <svg {...props}>
          <rect x="4" y="20" width="40" height="14" rx="3" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <path d="M12 20 L16 10 L32 10 L36 20" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <circle cx="14" cy="36" r="5" fill="#ccc" stroke="#235F8B" strokeWidth="2" />
          <circle cx="34" cy="36" r="5" fill="#ccc" stroke="#235F8B" strokeWidth="2" />
          <circle cx="14" cy="36" r="2" fill="#235F8B" />
          <circle cx="34" cy="36" r="2" fill="#235F8B" />
        </svg>
      );
    case "house":
      return (
        <svg {...props}>
          <rect x="8" y="22" width="32" height="22" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <polygon points="4,24 24,6 44,24" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <rect x="20" y="32" width="8" height="12" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <rect x="12" y="26" width="6" height="6" fill="#AAC0E0" stroke="#235F8B" strokeWidth="1.5" />
          <rect x="30" y="26" width="6" height="6" fill="#AAC0E0" stroke="#235F8B" strokeWidth="1.5" />
        </svg>
      );
    case "ball":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="16" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <path d="M10 18 Q24 24 38 18" fill="none" stroke="#235F8B" strokeWidth="1.5" />
          <path d="M10 30 Q24 24 38 30" fill="none" stroke="#235F8B" strokeWidth="1.5" />
          <ellipse cx="16" cy="18" rx="2" ry="4" fill="rgba(255,255,255,0.3)" />
        </svg>
      );
    case "teddy":
      return (
        <svg {...props}>
          <circle cx="16" cy="12" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="32" cy="12" r="7" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="24" cy="20" r="12" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="24" cy="36" rx="10" ry="8" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <circle cx="20" cy="18" r="2" fill="#235F8B" />
          <circle cx="28" cy="18" r="2" fill="#235F8B" />
          <ellipse cx="24" cy="23" rx="2" ry="1.5" fill="#E49C95" />
          <path d="M22 25 Q24 28 26 25" fill="none" stroke="#235F8B" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" fill="white" stroke="#235F8B" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="2" fill="#235F8B" />
          <line x1="24" y1="24" x2="24" y2="12" stroke="#235F8B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="34" y2="20" stroke="#235F8B" strokeWidth="2" strokeLinecap="round" />
          {[12, 3, 6, 9].map((n) => {
            const angle = ((n - 3) * 30 * Math.PI) / 180;
            const x = 24 + Math.cos(angle) * 15;
            const y = 24 + Math.sin(angle) * 15;
            return <circle key={n} cx={x} cy={y} r="1.5" fill="#235F8B" />;
          })}
        </svg>
      );
    case "bucket":
      return (
        <svg {...props}>
          <path d="M8 14 L12 42 L36 42 L40 14 Z" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="24" cy="14" rx="16" ry="5" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <path d="M14 8 Q24 2 34 8" fill="none" stroke="#235F8B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "bed":
      return (
        <svg {...props}>
          <rect x="4" y="22" width="40" height="14" rx="2" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <rect x="4" y="18" width="14" height="18" rx="3" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <rect x="4" y="14" width="14" height="8" rx="2" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <line x1="6" y1="38" x2="6" y2="44" stroke="#235F8B" strokeWidth="3" strokeLinecap="round" />
          <line x1="42" y1="38" x2="42" y2="44" stroke="#235F8B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "feather":
      return (
        <svg {...props}>
          <path
            d="M24 44 Q16 30 10 20 Q8 14 14 10 Q20 8 24 14 Q24 8 30 6 Q34 10 30 16 Q36 12 40 12 Q38 18 32 22 Q28 28 24 44z"
            fill="#AAC0E0"
            stroke="#235F8B"
            strokeWidth="1.5"
          />
          <line x1="24" y1="44" x2="24" y2="14" stroke="#235F8B" strokeWidth="1.5" />
        </svg>
      );
    case "rock":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="30" rx="18" ry="12" fill="#bbb" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="20" cy="26" rx="8" ry="4" fill="rgba(255,255,255,0.15)" />
          <path d="M14 28 Q18 24 24 26" fill="none" stroke="#999" strokeWidth="1" />
        </svg>
      );
    case "banana":
      return (
        <svg {...props}>
          <path
            d="M12 36 Q8 20 20 10 Q28 6 36 12 Q32 14 26 14 Q16 16 14 32z"
            fill="#FAC098"
            stroke="#235F8B"
            strokeWidth="2"
          />
        </svg>
      );
    case "spoon":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="12" rx="8" ry="6" fill="#ccc" stroke="#235F8B" strokeWidth="2" />
          <rect x="22" y="18" width="4" height="26" rx="2" fill="#ccc" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
    case "bottle":
      return (
        <svg {...props}>
          <rect x="14" y="16" width="20" height="26" rx="4" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <rect x="18" y="6" width="12" height="10" rx="2" fill="#92ABD3" stroke="#235F8B" strokeWidth="2" />
          <rect x="20" y="4" width="8" height="4" rx="1" fill="#235F8B" />
        </svg>
      );
    case "watermelon":
      return (
        <svg {...props}>
          <path d="M4 28 A20 20 0 0 1 44 28 Z" fill="#7B94BC" stroke="#235F8B" strokeWidth="2" />
          <path d="M8 28 A16 16 0 0 1 40 28 Z" fill="#E49C95" stroke="none" />
          <circle cx="18" cy="24" r="1.5" fill="#235F8B" />
          <circle cx="24" cy="22" r="1.5" fill="#235F8B" />
          <circle cx="30" cy="24" r="1.5" fill="#235F8B" />
          <circle cx="21" cy="18" r="1.5" fill="#235F8B" />
          <circle cx="27" cy="18" r="1.5" fill="#235F8B" />
        </svg>
      );
    case "grape":
      return (
        <svg {...props}>
          <circle cx="18" cy="14" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="30" cy="14" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="24" cy="12" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="15" cy="24" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="24" cy="22" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="33" cy="24" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="20" cy="32" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="28" cy="32" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <circle cx="24" cy="40" r="5" fill="#92ABD3" stroke="#235F8B" strokeWidth="1.5" />
          <path d="M24 6 Q24 2 28 2" fill="none" stroke="#7B94BC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    /* ── 3D Shapes ───────────────────────────────────── */
    case "sphere":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="18" ry="6" fill="none" stroke="#235F8B" strokeWidth="1" strokeDasharray="4 3" />
          <ellipse cx="18" cy="18" rx="4" ry="6" fill="rgba(255,255,255,0.25)" transform="rotate(-20 18 18)" />
        </svg>
      );
    case "cube":
      return (
        <svg {...props}>
          <polygon points="8,16 24,8 40,16 40,36 24,44 8,36" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
          <polygon points="8,16 24,24 24,44 8,36" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <polygon points="24,24 40,16 40,36 24,44" fill="#FCD4B0" stroke="#235F8B" strokeWidth="2" />
          <line x1="24" y1="8" x2="24" y2="24" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
    case "cone":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="38" rx="14" ry="6" fill="#AAC0E0" stroke="#235F8B" strokeWidth="2" />
          <line x1="10" y1="38" x2="24" y2="6" stroke="#235F8B" strokeWidth="2" />
          <line x1="38" y1="38" x2="24" y2="6" stroke="#235F8B" strokeWidth="2" />
          <path d="M10 38 Q24 32 38 38" fill="#92ABD3" stroke="none" />
          <circle cx="24" cy="6" r="2" fill="#235F8B" />
        </svg>
      );
    case "cylinder":
      return (
        <svg {...props}>
          <rect x="8" y="12" width="32" height="24" fill="#FAC098" stroke="none" />
          <ellipse cx="24" cy="36" rx="16" ry="6" fill="#E49C95" stroke="#235F8B" strokeWidth="2" />
          <line x1="8" y1="12" x2="8" y2="36" stroke="#235F8B" strokeWidth="2" />
          <line x1="40" y1="12" x2="40" y2="36" stroke="#235F8B" strokeWidth="2" />
          <ellipse cx="24" cy="12" rx="16" ry="6" fill="#FAC098" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" fill="#ddd" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
  }
}
