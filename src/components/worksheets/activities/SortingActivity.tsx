import type { SortingData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: SortingData;
  number: number;
}

export default function SortingActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-4">
        {/* Items to sort */}
        <div className="flex flex-wrap gap-2 rounded-lg border border-charcoal/8 bg-cream/50 p-3">
          {data.items.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 rounded-md border border-charcoal/10 bg-white px-3 py-1.5">
              {item.icon && <WorksheetObject name={item.icon} size={24} />}
              <span className="text-base font-medium text-charcoal">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Column headers */}
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${data.columns.length}, 1fr)` }}>
          {data.columns.map((col, i) => (
            <div key={i} className="rounded-lg border-2 border-charcoal/10">
              <div className="rounded-t-md bg-sage/10 px-3 py-2 text-center text-base font-bold text-charcoal">
                {col}
              </div>
              <div className="min-h-[80px] p-2" />
            </div>
          ))}
        </div>
      </div>
    </ActivityBlock>
  );
}
