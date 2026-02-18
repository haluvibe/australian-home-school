import type { TenFrameData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: TenFrameData;
  number: number;
}

function TenFrame({ filled, total = 10 }: { filled: number; total?: number }) {
  const cols = 5;
  const rows = Math.ceil(total / cols);
  const cellSize = 44;
  const gap = 6;
  const pad = 4;
  const width = cols * (cellSize + gap) - gap + pad * 2;
  const height = rows * (cellSize + gap) - gap + pad * 2;

  return (
    <div className="flex items-center gap-4">
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {Array.from({ length: total }).map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const x = pad + col * (cellSize + gap);
          const y = pad + row * (cellSize + gap);
          const isFilled = i < filled;
          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={cellSize}
                height={cellSize}
                rx={6}
                fill={isFilled ? "none" : "white"}
                stroke="#3d3d3d"
                strokeWidth={2}
                strokeDasharray={isFilled ? "none" : "6 4"}
              />
              {isFilled && (
                <circle
                  cx={x + cellSize / 2}
                  cy={y + cellSize / 2}
                  r={cellSize / 2 - 8}
                  fill="#c96b4f"
                  stroke="#3d3d3b"
                  strokeWidth={1.5}
                />
              )}
            </g>
          );
        })}
      </svg>
      <div className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-dashed border-charcoal/30 bg-cream/50">
        <span className="text-sm text-charcoal/30">?</span>
      </div>
    </div>
  );
}

export default function TenFrameActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction} parentTip={data.parentTip}>
      <div className="space-y-5">
        {data.frames.map((frame, i) => (
          <TenFrame key={i} filled={frame.filled} total={frame.total} />
        ))}
      </div>
    </ActivityBlock>
  );
}
