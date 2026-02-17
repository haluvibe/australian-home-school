import type { PictureGraphData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: PictureGraphData;
  number: number;
}

export default function PictureGraphActivity({ data, number }: Props) {
  const maxCount = Math.max(...data.rows.map((r) => r.count));

  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-4">
        {/* Graph */}
        <div className="overflow-x-auto rounded-lg border border-charcoal/10 bg-cream/30 p-3">
          <table className="w-full border-collapse">
            <tbody>
              {data.rows.map((row, i) => (
                <tr key={i} className="border-b border-charcoal/8 last:border-b-0">
                  <td className="w-20 py-2 pr-3 text-right text-sm font-medium text-charcoal">
                    {row.label}
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: row.count }).map((_, j) => (
                        <WorksheetObject key={j} name={row.icon} size={28} />
                      ))}
                      {/* Empty placeholders for alignment */}
                      {Array.from({ length: maxCount - row.count }).map((_, j) => (
                        <div key={`empty-${j}`} className="h-7 w-7" />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Questions */}
        <div className="space-y-3">
          {data.questions.map((question, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-xs font-bold text-terracotta">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-base text-charcoal">{question}</p>
                <div className="mt-1 h-0 border-b-2 border-dashed border-charcoal/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ActivityBlock>
  );
}
