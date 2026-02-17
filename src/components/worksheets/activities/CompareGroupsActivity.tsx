import type { CompareGroupsData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: CompareGroupsData;
  number: number;
}

export default function CompareGroupsActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-5">
        {data.pairs.map((pair, i) => (
          <div key={i} className="rounded-lg border border-charcoal/8 p-3">
            <p className="mb-2 text-base font-medium text-charcoal">{pair.question}</p>
            <div className="flex items-center gap-6">
              {/* Left group */}
              <div className="flex flex-1 flex-wrap gap-1.5 rounded-lg border border-dashed border-sage/30 p-2">
                {Array.from({ length: pair.leftCount }).map((_, j) => (
                  <WorksheetObject key={j} name={pair.object} size={32} />
                ))}
              </div>
              <span className="text-lg font-bold text-charcoal/40">vs</span>
              {/* Right group */}
              <div className="flex flex-1 flex-wrap gap-1.5 rounded-lg border border-dashed border-terracotta/30 p-2">
                {Array.from({ length: pair.rightCount }).map((_, j) => (
                  <WorksheetObject key={j} name={pair.object} size={32} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
