import type { NumberTraceData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: NumberTraceData;
  number: number;
}

export default function NumberTraceActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="flex flex-wrap gap-3">
        {data.numbers.map((n, i) => {
          const isDouble = n >= 10;
          return (
            <div
              key={i}
              className={`flex items-center justify-center rounded-2xl border-[2.5px] border-dashed border-sage/35 bg-sage/[0.03] ${isDouble ? "h-[88px] w-[72px]" : "h-[88px] w-[60px]"}`}
            >
              <span
                className="select-none leading-none text-sage/30"
                style={{
                  fontFamily: "var(--font-outfit), 'Helvetica Neue', sans-serif",
                  fontSize: isDouble ? "48px" : "56px",
                  fontWeight: 700,
                  letterSpacing: isDouble ? "-2px" : "0",
                }}
              >
                {n}
              </span>
            </div>
          );
        })}
      </div>
    </ActivityBlock>
  );
}
