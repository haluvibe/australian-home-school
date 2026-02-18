import type { NumberBondsData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: NumberBondsData;
  number: number;
}

export default function NumberBondsActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction} parentTip={data.parentTip}>
      <div className="flex flex-wrap gap-6">
        {data.bonds.map((bond, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Total */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-terracotta bg-terracotta/10 text-xl font-bold text-charcoal">
              {bond.total}
            </div>
            {/* Lines */}
            <svg width="80" height="30" className="text-charcoal/30">
              <line x1="40" y1="0" x2="15" y2="30" stroke="currentColor" strokeWidth="2" />
              <line x1="40" y1="0" x2="65" y2="30" stroke="currentColor" strokeWidth="2" />
            </svg>
            {/* Parts */}
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-sage bg-sage/10 text-lg font-bold text-charcoal">
                {bond.partA !== null ? bond.partA : "?"}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-sage bg-sage/10 text-lg font-bold text-charcoal">
                {bond.partB !== null ? bond.partB : "?"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
