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
      {data.rows ? (
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
      ) : data.groups ? (
        <div className="flex flex-wrap gap-4">
          {data.groups.map((group, i) => (
            <div key={i} className="flex-1 min-w-[120px] rounded-xl border border-charcoal/8 p-3">
              <div className="mb-2 text-sm font-semibold text-charcoal/60">{group.label}</div>
              <div className="flex flex-wrap gap-1.5">
                {group.objects.map((obj, j) => (
                  <WorksheetObject key={j} name={obj} size={32} />
                ))}
              </div>
              <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream/50">
                <span className="text-sm text-charcoal/30">?</span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </ActivityBlock>
  );
}
