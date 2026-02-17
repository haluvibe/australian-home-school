import type { TallyChartData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: TallyChartData;
  number: number;
}

export default function TallyChartActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-3">
        {/* Objects to count */}
        <div className="flex flex-wrap gap-2 rounded-lg border border-charcoal/8 bg-cream/50 p-3">
          {data.categories.flatMap((cat) =>
            Array.from({ length: cat.count }, (_, j) => (
              <WorksheetObject key={`${cat.label}-${j}`} name={cat.icon} size={32} />
            ))
          )}
        </div>

        {/* Tally table */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-charcoal/10 bg-sage/10 px-4 py-2 text-left text-base font-bold text-charcoal">
                Item
              </th>
              <th className="border-2 border-charcoal/10 bg-sage/10 px-4 py-2 text-center text-base font-bold text-charcoal">
                Tally
              </th>
              <th className="border-2 border-charcoal/10 bg-sage/10 px-4 py-2 text-center text-base font-bold text-charcoal">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {data.categories.map((cat, i) => (
              <tr key={i}>
                <td className="border-2 border-charcoal/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <WorksheetObject name={cat.icon} size={24} />
                    <span className="text-base font-medium text-charcoal">{cat.label}</span>
                  </div>
                </td>
                <td className="border-2 border-charcoal/10 px-4 py-3">
                  <div className="min-h-[24px]" />
                </td>
                <td className="border-2 border-charcoal/10 px-4 py-3">
                  <div className="min-h-[24px]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ActivityBlock>
  );
}
