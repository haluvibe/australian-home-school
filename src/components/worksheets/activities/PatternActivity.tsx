import type { PatternData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: PatternData;
  number: number;
}

export default function PatternActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction} parentTip={data.parentTip}>
      <div className="space-y-4">
        {data.rows.map((row, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-charcoal/8 p-3">
            {row.sequence.map((obj, j) =>
              obj ? (
                <WorksheetObject key={j} name={obj} size={40} />
              ) : (
                <div
                  key={j}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream/50"
                >
                  <span className="text-sm text-charcoal/30">?</span>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
