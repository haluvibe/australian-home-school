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
    default:
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" fill="#ddd" stroke="#235F8B" strokeWidth="2" />
        </svg>
      );
  }
}
