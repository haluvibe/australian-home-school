interface ClockFaceProps {
  hour: number;         // 1-12
  minute: number;       // 0, 15, 30, 45 (quarter-hour increments)
  size?: number;        // diameter in px, default 120
  showNumbers?: boolean; // show hour numbers around face, default true
}

/**
 * AnalogClockFaceActivity
 *
 * Renders a clean SVG analog clock face for time-reading activities.
 * Supports hour and minute hands at any position, configurable size,
 * and optional hour numbers. Uses the project color palette.
 */
export default function AnalogClockFaceActivity({
  hour,
  minute,
  size = 120,
  showNumbers = true,
}: ClockFaceProps) {
  const r = size / 2;
  const cx = r;
  const cy = r;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  // Angles: 0deg = 3 o'clock, subtract 90 to start at 12
  const minuteAngleDeg = minute * 6 - 90;
  const hourAngleDeg = (hour % 12) * 30 + minute * 0.5 - 90;

  const minuteRad = toRad(minuteAngleDeg);
  const hourRad = toRad(hourAngleDeg);

  const minuteHandLen = r * 0.78;
  const hourHandLen = r * 0.54;

  const minuteX = cx + Math.cos(minuteRad) * minuteHandLen;
  const minuteY = cy + Math.sin(minuteRad) * minuteHandLen;
  const hourX = cx + Math.cos(hourRad) * hourHandLen;
  const hourY = cy + Math.sin(hourRad) * hourHandLen;

  const hourMarks = Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    const angleDeg = n * 30 - 90;
    const rad = toRad(angleDeg);
    const isCardinal = n % 3 === 0;
    const outerR = r * 0.88;
    const innerR = isCardinal ? r * 0.74 : r * 0.80;
    const numR = r * 0.66;
    return {
      n,
      x1: cx + Math.cos(rad) * innerR,
      y1: cy + Math.sin(rad) * innerR,
      x2: cx + Math.cos(rad) * outerR,
      y2: cy + Math.sin(rad) * outerR,
      numX: cx + Math.cos(rad) * numR,
      numY: cy + Math.sin(rad) * numR,
      isCardinal,
    };
  });

  const minuteTicks = Array.from({ length: 60 }, (_, i) => {
    if (i % 5 === 0) return null;
    const angleDeg = i * 6 - 90;
    const rad = toRad(angleDeg);
    return {
      x1: cx + Math.cos(rad) * (r * 0.84),
      y1: cy + Math.sin(rad) * (r * 0.84),
      x2: cx + Math.cos(rad) * (r * 0.88),
      y2: cy + Math.sin(rad) * (r * 0.88),
    };
  }).filter(Boolean) as { x1: number; y1: number; x2: number; y2: number }[];

  const fontSize = Math.max(8, r * 0.22);
  const strokeW = Math.max(1, r * 0.025);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label={`Clock showing ${hour}:${String(minute).padStart(2, "0")}`}
    >
      {/* Clock face — cream background, charcoal border */}
      <circle cx={cx} cy={cy} r={r * 0.96} fill="#FDFAF5" stroke="#3D3D3A" strokeWidth={strokeW * 1.5} />

      {/* Minute tick marks */}
      {minuteTicks.map((tick, i) => (
        <line
          key={`min-tick-${i}`}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke="#3D3D3A"
          strokeWidth={strokeW * 0.5}
          strokeLinecap="round"
          opacity={0.3}
        />
      ))}

      {/* Hour tick marks */}
      {hourMarks.map((mark) => (
        <line
          key={`hour-tick-${mark.n}`}
          x1={mark.x1}
          y1={mark.y1}
          x2={mark.x2}
          y2={mark.y2}
          stroke="#3D3D3A"
          strokeWidth={mark.isCardinal ? strokeW * 1.5 : strokeW}
          strokeLinecap="round"
        />
      ))}

      {/* Hour numbers */}
      {showNumbers &&
        hourMarks.map((mark) => (
          <text
            key={`hour-num-${mark.n}`}
            x={mark.numX}
            y={mark.numY}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={fontSize}
            fontFamily="Outfit, sans-serif"
            fontWeight={mark.isCardinal ? "700" : "500"}
            fill="#3D3D3A"
          >
            {mark.n}
          </text>
        ))}

      {/* Hour hand — shorter, thicker */}
      <line
        x1={cx}
        y1={cy}
        x2={hourX}
        y2={hourY}
        stroke="#3D3D3A"
        strokeWidth={strokeW * 3.5}
        strokeLinecap="round"
      />

      {/* Minute hand — longer, thinner */}
      <line
        x1={cx}
        y1={cy}
        x2={minuteX}
        y2={minuteY}
        stroke="#3D3D3A"
        strokeWidth={strokeW * 2}
        strokeLinecap="round"
      />

      {/* Center dot — terracotta accent */}
      <circle cx={cx} cy={cy} r={r * 0.055} fill="#C1694F" />
    </svg>
  );
}
