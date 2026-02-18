interface GridItem {
  col: number;    // 0-indexed column
  row: number;    // 0-indexed row
  icon: string;   // emoji or short text
  label?: string;
}

interface GridMapProps {
  cols: number;
  rows: number;
  colLabels: string[];   // e.g. ["A","B","C","D","E"]
  rowLabels: string[];   // e.g. ["1","2","3","4","5"]
  items?: GridItem[];
  size?: number;         // cell size in px, default 60
}

/**
 * GridMapActivity
 *
 * A simple grid map component for position and directions activities.
 * Renders a labelled grid with optional items placed at grid coordinates.
 */
export default function GridMapActivity({
  cols,
  rows,
  colLabels,
  rowLabels,
  items = [],
  size = 60,
}: GridMapProps) {
  const labelSize = Math.round(size * 0.5);
  const totalWidth = labelSize + cols * size;
  const totalHeight = labelSize + rows * size;

  return (
    <div className="overflow-x-auto">
      <svg
        width={totalWidth}
        height={totalHeight}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        aria-label="Grid map"
      >
        {/* Column labels across the top */}
        {colLabels.slice(0, cols).map((label, ci) => (
          <text
            key={`col-label-${ci}`}
            x={labelSize + ci * size + size / 2}
            y={labelSize / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={size * 0.28}
            fontFamily="Outfit, sans-serif"
            fontWeight="700"
            fill="#3D3D3A"
          >
            {label}
          </text>
        ))}

        {/* Row labels down the left side */}
        {rowLabels.slice(0, rows).map((label, ri) => (
          <text
            key={`row-label-${ri}`}
            x={labelSize / 2}
            y={labelSize + ri * size + size / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={size * 0.28}
            fontFamily="Outfit, sans-serif"
            fontWeight="700"
            fill="#3D3D3A"
          >
            {label}
          </text>
        ))}

        {/* Grid cells */}
        {Array.from({ length: rows }, (_, ri) =>
          Array.from({ length: cols }, (_, ci) => {
            const x = labelSize + ci * size;
            const y = labelSize + ri * size;
            const isEven = (ri + ci) % 2 === 0;
            return (
              <rect
                key={`cell-${ri}-${ci}`}
                x={x}
                y={y}
                width={size}
                height={size}
                fill={isEven ? "#FDFAF5" : "#F5F0E8"}
                stroke="#3D3D3A"
                strokeWidth={1}
                strokeOpacity={0.15}
              />
            );
          })
        )}

        {/* Grid border */}
        <rect
          x={labelSize}
          y={labelSize}
          width={cols * size}
          height={rows * size}
          fill="none"
          stroke="#3D3D3A"
          strokeWidth={1.5}
          strokeOpacity={0.3}
        />

        {/* Vertical grid lines */}
        {Array.from({ length: cols - 1 }, (_, ci) => (
          <line
            key={`vline-${ci}`}
            x1={labelSize + (ci + 1) * size}
            y1={labelSize}
            x2={labelSize + (ci + 1) * size}
            y2={labelSize + rows * size}
            stroke="#3D3D3A"
            strokeWidth={1}
            strokeOpacity={0.15}
          />
        ))}

        {/* Horizontal grid lines */}
        {Array.from({ length: rows - 1 }, (_, ri) => (
          <line
            key={`hline-${ri}`}
            x1={labelSize}
            y1={labelSize + (ri + 1) * size}
            x2={labelSize + cols * size}
            y2={labelSize + (ri + 1) * size}
            stroke="#3D3D3A"
            strokeWidth={1}
            strokeOpacity={0.15}
          />
        ))}

        {/* Items placed on the grid */}
        {items.map((item, i) => {
          const x = labelSize + item.col * size + size / 2;
          const y = labelSize + item.row * size + size / 2;
          return (
            <g key={`item-${i}`}>
              <text
                x={x}
                y={item.label ? y - size * 0.1 : y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={size * 0.42}
              >
                {item.icon}
              </text>
              {item.label && (
                <text
                  x={x}
                  y={y + size * 0.28}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={size * 0.18}
                  fontFamily="Outfit, sans-serif"
                  fill="#3D3D3A"
                  opacity={0.7}
                >
                  {item.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
