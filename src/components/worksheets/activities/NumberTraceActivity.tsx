import type { NumberTraceData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: NumberTraceData;
  number: number;
}

export default function NumberTraceActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="flex flex-wrap gap-4">
        {data.numbers.map((n, i) => (
          <div
            key={i}
            className="flex h-20 w-16 items-center justify-center rounded-xl border-2 border-dashed border-charcoal/20 bg-cream/50"
          >
            <span
              className="font-display text-4xl font-bold text-charcoal/15"
              style={{
                WebkitTextStroke: "1.5px rgba(35, 95, 139, 0.3)",
                color: "transparent",
              }}
            >
              {n}
            </span>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
