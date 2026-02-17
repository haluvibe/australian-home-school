import type { CircleCorrectData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

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
            <p className="mb-2 text-base font-medium text-charcoal">{q.prompt}</p>
            <div className="flex flex-wrap gap-3">
              {q.options.map((option, j) => (
                <div
                  key={j}
                  className="flex h-12 min-w-[48px] items-center justify-center rounded-xl border-2 border-charcoal/15 bg-cream/50 px-4 text-lg font-semibold text-charcoal"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
