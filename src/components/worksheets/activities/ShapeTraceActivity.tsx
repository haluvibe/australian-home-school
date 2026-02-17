import type { ShapeTraceData } from "@/lib/worksheet-types";
import ActivityBlock from "../ActivityBlock";

interface Props {
  data: ShapeTraceData;
  number: number;
}

function ShapeSVG({ name, sides }: { name: string; sides: number }) {
  const size = 80;
  const cx = size / 2;
  const cy = size / 2;
  const r = 30;

  if (name.toLowerCase() === "circle") {
    return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="#235F8B"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          opacity={0.35}
        />
      </svg>
    );
  }

  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <polygon
        points={points}
        fill="none"
        stroke="#235F8B"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        opacity={0.35}
      />
    </svg>
  );
}

export default function ShapeTraceActivity({ data, number }: Props) {
  return (
    <ActivityBlock number={number} title={data.title} instruction={data.instruction}>
      <div className="flex flex-wrap gap-6">
        {data.shapes.map((shape, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="flex h-24 w-24 items-center justify-center rounded-xl border border-charcoal/8 bg-cream/30">
              <ShapeSVG name={shape.name} sides={shape.sides} />
            </div>
            <span className="text-base font-medium text-charcoal">{shape.name}</span>
            <span className="text-sm text-charcoal-light">{shape.sides === 0 ? "0 corners" : `${shape.sides} sides`}</span>
          </div>
        ))}
      </div>
    </ActivityBlock>
  );
}
