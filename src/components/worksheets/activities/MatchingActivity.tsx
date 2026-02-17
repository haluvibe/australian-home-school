import type { MatchingData, ObjectName } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: MatchingData;
  number: number;
}

export default function MatchingActivity({ data, number }: Props) {
  const leftList = data.leftItems || (data.left || []).map((l) => ({ label: l, objects: [] as ObjectName[] }));
  const rightList = data.rightItems || (data.right || []).map((r) => ({ label: r, objects: [] as ObjectName[] }));
  const itemCount = Math.max(leftList.length, rightList.length);

  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="flex justify-around gap-8">
        {/* Left column */}
        <div className="space-y-4">
          {leftList.map((item, i) => (
            <div
              key={i}
              className="flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-lg border-2 border-sage/30 bg-sage/5 px-3 text-lg font-semibold text-charcoal"
            >
              {item.objects.length > 0 && (
                <div className="flex gap-0.5">
                  {item.objects.slice(0, 5).map((obj, j) => (
                    <WorksheetObject key={j} name={obj} size={20} />
                  ))}
                  {item.objects.length > 5 && <span className="text-xs text-charcoal/50">+{item.objects.length - 5}</span>}
                </div>
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Connection area */}
        <div className="flex items-center">
          <svg width="40" height={itemCount * 64} className="text-charcoal/15">
            {Array.from({ length: itemCount }).map((_, i) => (
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
          {rightList.map((item, i) => (
            <div
              key={i}
              className="flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-lg border-2 border-terracotta/30 bg-terracotta/5 px-3 text-lg font-semibold text-charcoal"
            >
              {item.objects.length > 0 && (
                <div className="flex gap-0.5">
                  {item.objects.slice(0, 5).map((obj, j) => (
                    <WorksheetObject key={j} name={obj} size={20} />
                  ))}
                  {item.objects.length > 5 && <span className="text-xs text-charcoal/50">+{item.objects.length - 5}</span>}
                </div>
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </ActivityBlock>
  );
}
