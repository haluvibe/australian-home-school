import type { CountObjectsData, ObjectName } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: CountObjectsData;
  number: number;
}

const MAX_INDIVIDUAL = 20;

function PlaceValueBlock({ count, objectName }: { count: number; objectName: ObjectName }) {
  const hundreds = Math.floor(count / 100);
  const tens = Math.floor((count % 100) / 10);
  const ones = count % 10;

  return (
    <div className="flex flex-wrap items-end gap-3">
      {hundreds > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: Math.min(hundreds, 9) }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="grid grid-cols-3 gap-[2px] rounded border border-charcoal/20 bg-sand/30 p-[3px]">
                {Array.from({ length: 9 }).map((_, j) => (
                  <WorksheetObject key={j} name={objectName} size={8} />
                ))}
              </div>
              <span className="text-[9px] font-bold text-charcoal/50">×100</span>
            </div>
          ))}
        </div>
      )}

      {tens > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {Array.from({ length: Math.min(tens, 9) }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="grid grid-cols-2 gap-[2px] rounded border border-charcoal/20 bg-sage/20 p-[3px]">
                {Array.from({ length: 10 }).map((_, j) => (
                  <WorksheetObject key={j} name={objectName} size={8} />
                ))}
              </div>
              <span className="text-[9px] font-bold text-charcoal/50">×10</span>
            </div>
          ))}
        </div>
      )}

      {ones > 0 && (
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: ones }).map((_, j) => (
            <WorksheetObject key={j} name={objectName} size={28} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CountObjectsActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction} parentTip={data.parentTip}>
      {data.rows ? (
        <div className="space-y-4">
          {data.rows.map((row, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border border-charcoal/8 p-3">
              <div className="flex flex-wrap gap-1.5">
                {row.count <= MAX_INDIVIDUAL ? (
                  Array.from({ length: row.count }).map((_, j) => (
                    <WorksheetObject key={j} name={row.object} size={36} />
                  ))
                ) : (
                  <PlaceValueBlock count={row.count} objectName={row.object} />
                )}
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
