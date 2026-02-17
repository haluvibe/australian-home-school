import type { SequenceData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: SequenceData;
  number: number;
}

export default function SequenceActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-3">
        {data.items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg border border-charcoal/8 p-3">
            {/* Number box */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream/50">
              <span className="text-sm text-charcoal/30">?</span>
            </div>
            {/* Item */}
            <div className="flex items-center gap-2">
              {item.icon && <WorksheetObject name={item.icon} size={32} />}
              <span className="text-base font-medium text-charcoal">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
