import type { OpenResponseData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: OpenResponseData;
  number: number;
}

function WritingLines({ count = 3 }: { count?: number }) {
  return (
    <div className="mt-2 space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-0 border-b-2 border-dashed border-charcoal/20" />
      ))}
    </div>
  );
}

function DrawingBox() {
  return (
    <div className="mt-2 flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/20 bg-cream/30">
      <span className="text-sm text-charcoal/25">Draw here</span>
    </div>
  );
}

export default function OpenResponseActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="space-y-5">
        {data.prompts.map((prompt, i) => (
          <div key={i}>
            <p className="mb-1 text-base font-medium text-charcoal">{prompt.text}</p>
            {prompt.type === "box" ? (
              <DrawingBox />
            ) : (
              <WritingLines count={prompt.lines ?? 2} />
            )}
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
