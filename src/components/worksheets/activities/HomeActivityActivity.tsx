import type { HomeActivityData } from "@/lib/worksheet-types";

interface Props {
  data: HomeActivityData;
  number: number;
}

export default function HomeActivityActivity({ data, number }: Props) {
  return (
    <div className="activity-block rounded-xl border-2 border-sage/30 bg-sage/5 p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage text-base font-bold text-white">
          {number}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sage-dark">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h2 className="text-lg font-bold text-charcoal">{data.title}</h2>
          </div>
          <p className="text-base text-charcoal-light">{data.instruction}</p>
        </div>
      </div>
      <ul className="ml-11 space-y-2">
        {data.suggestions.map((suggestion, i) => (
          <li key={i} className="flex items-start gap-2 text-base text-charcoal">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/20 text-xs font-bold text-sage-dark">
              {i + 1}
            </span>
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
