import type { MatchingData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: MatchingData;
  number: number;
}

export default function MatchingActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="flex justify-around gap-8">
        {/* Left column */}
        <div className="space-y-4">
          {data.left.map((item, i) => (
            <div
              key={i}
              className="flex h-12 w-32 items-center justify-center rounded-lg border-2 border-sage/30 bg-sage/5 text-lg font-semibold text-charcoal"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Connection area */}
        <div className="flex items-center">
          <svg width="40" height={data.left.length * 64} className="text-charcoal/15">
            {data.left.map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={32 + i * 64}
                x2="40"
                y2={32 + i * 64}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </svg>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {data.right.map((item, i) => (
            <div
              key={i}
              className="flex h-12 w-32 items-center justify-center rounded-lg border-2 border-terracotta/30 bg-terracotta/5 text-lg font-semibold text-charcoal"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </ActivityBlock>
  );
}
