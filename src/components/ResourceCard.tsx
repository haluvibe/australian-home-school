interface ResourceCardProps {
  name: string;
  url: string;
  description: string;
}

const palette = [
  "bg-terracotta text-white",
  "bg-sage text-white",
  "bg-charcoal text-cream",
  "bg-golden text-charcoal",
  "bg-ocean text-white",
];

function getColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palette[Math.abs(hash) % palette.length];
}

function displayUrl(url: string) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ResourceCard({ name, url, description }: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-xl border border-charcoal/[0.06] bg-warm-white p-4 transition-all duration-200 hover:border-charcoal/10 hover:shadow-sm sm:p-5"
    >
      {/* Letter avatar */}
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${getColor(name)}`}
      >
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-charcoal group-hover:text-terracotta sm:text-lg">
            {name}
          </h3>
          {/* External link icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mt-1 shrink-0 text-charcoal-light/40 transition-colors group-hover:text-terracotta"
          >
            <path
              d="M6 3h7v7M13 3L6.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 9v3.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5H7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="mt-0.5 text-sm text-terracotta/70">{displayUrl(url)}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-light/85 sm:text-base">
          {description}
        </p>
      </div>
    </a>
  );
}
