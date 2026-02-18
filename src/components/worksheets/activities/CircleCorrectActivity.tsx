import type { CircleCorrectData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";
import WorksheetObject from "../svg/WorksheetObject";

interface Props {
  data: CircleCorrectData;
  number: number;
}

export default function CircleCorrectActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-4">
        {data.questions.map((q, i) => (
          <div key={i} className="rounded-lg border border-charcoal/8 p-3">
            <div className="mb-2 flex flex-col items-center gap-2">
              {q.promptIcon && (
                <div className={`flex min-h-[32px] w-full flex-wrap items-center gap-2 ${q.promptCount && q.promptCount > 5 ? "justify-center" : "justify-center"}`}>
                  {Array.from({ length: q.promptCount !== undefined ? q.promptCount : 1 }).map((_, iconIndex) => (
                    <WorksheetObject key={iconIndex} name={q.promptIcon!} size={32} />
                  ))}
                </div>
              )}
              <p className="text-center text-base font-medium text-charcoal">{q.prompt}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {q.options.map((option, j) => (
                <div
                  key={j}
                  className="flex h-12 min-w-[48px] items-center justify-center gap-2 rounded-xl border-2 border-charcoal/15 bg-cream/50 px-4 text-lg font-semibold text-charcoal"
                >
                  {q.optionIcons?.[j] && (
                    <WorksheetObject name={q.optionIcons[j]} size={28} />
                  )}
                  <span>{option}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
