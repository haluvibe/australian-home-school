import type { CountObjectsData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: CountObjectsData;
  number: number;
}

export default function CountObjectsActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-4">
        {data.rows.map((row, i) => (
          <div key={i} className="flex items-center gap-4 rounded-lg border border-charcoal/8 p-3">
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: row.count }).map((_, j) => (
                <WorksheetObject key={j} name={row.object} size={36} />
              ))}
            </div>
            <div className="ml-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream/50">
              <span className="text-sm text-charcoal/30">?</span>
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
