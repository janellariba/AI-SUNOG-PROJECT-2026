import { useMemo, useState } from "react";

export default function ChartPanel({
  title = "Incident by Barangay",
  type = "line",
  xLabels = [
    "Brgy. Bayanan",
    "Brgy. Poblacion",
    "Brgy. Alabang",
    "Brgy. Cupang",
    "Brgy. Sucat",
  ],
  // Update `series` from your live data source when available.
// Example: fetch live counts and pass them into `series` from Dashboard or a parent component.
  series = [
    { name: "Structural", color: "#ef4444", points: [16, 28, 22, 33, 35] },
    { name: "Electrical", color: "#84cc16", points: [10, 7, 30, 8, 18] },
    { name: "Residential", color: "#f59e0b", points: [12, 29, 25, 20, 22] },
    { name: "Vehicle", color: "#22d3ee", points: [4, 2, 5, 3, 6] },
  ],
  periods = ["Week", "Month", "Year"],
  initialPeriod = "Month",
  onPeriodChange,
}) {
  const [activePeriod, setActivePeriod] = useState(initialPeriod);
  const maxPoint = useMemo(
    () => Math.max(1, ...series.flatMap((item) => item.points)),
    [series],
  );
  const chartWidth = 370;
  const chartHeight = 170;
  const chartPadding = { top: 20, right: 20, bottom: 24, left: -10 };

  const pointCoordinates = (value, index, pointsLength) => {
    const xStep = chartWidth / Math.max(pointsLength - 1, 1);
    const x = chartPadding.left + xStep * index;
    const y = chartPadding.top + chartHeight - (value / maxPoint) * chartHeight;
    return { x, y };
  };

  const buildPath = (points) =>
    points
      .map((value, index) => {
        const { x, y } = pointCoordinates(value, index, points.length);
        return `${index === 0 ? "M" : "L"}${x} ${y}`;
      })
      .join(" ");

  const buildArea = (points) => {
    const top = buildPath(points);
    const lastPoint = pointCoordinates(points[points.length - 1], points.length - 1, points.length);
    const firstPoint = pointCoordinates(points[0], 0, points.length);
    return `${top} L ${lastPoint.x} ${chartPadding.top + chartHeight} L ${firstPoint.x} ${chartPadding.top + chartHeight} Z`;
  };

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
    if (onPeriodChange) onPeriodChange(period);
  };

  return (
    <div className="bg-zinc-900 rounded-[18px] border border-white/10 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.28)]">
      <div className="chart-card-header">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-gray-200">
          {title}
        </h2>

        <div className="period-toggle" role="tablist" aria-label="Chart period">
          {periods.map((period) => (
            <button
              key={period}
              type="button"
              className={period === activePeriod ? "active" : ""}
              onClick={() => handlePeriodClick(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {type === "line" && (
        <div className="chart-card-legend">
          {series.map((item) => (
            <div key={item.name} className="chart-legend-item">
              <span className="chart-legend-color" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

      <div className="chart-wrap">
        {type === "line" && (
          <>
            <svg viewBox="0 0 340 220" className="h-full w-full">
              <defs>
                {series.map((item) => (
                  <linearGradient
                    key={`${item.name}-fill`}
                    id={`${item.name}-fill`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={item.color} stopOpacity="0.18" />
                    <stop offset="100%" stopColor={item.color} stopOpacity="0" />
                  </linearGradient>
                ))}
              </defs>

              <g className="chart-grid-lines" stroke="#8b8b9d" strokeWidth="1" opacity="0.18">
                {[0, 1, 2, 3, 4].map((row) => {
                  const y = chartPadding.top + (chartHeight / 4) * row;
                  return <line key={row} x1={chartPadding.left} y1={y} x2={chartPadding.left + chartWidth} y2={y} />;
                })}
                <line x1={chartPadding.left} y1={chartPadding.top} x2={chartPadding.left} y2={chartPadding.top + chartHeight} />
              </g>

              {series.map((item) => (
                <g key={item.name}>
                  <path d={buildArea(item.points)} fill={`url(#${item.name}-fill)`} opacity="0.7" />
                  <path
                    d={buildPath(item.points)}
                    fill="none"
                    stroke={item.color}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {item.points.map((value, index) => {
                    const { x, y } = pointCoordinates(value, index, item.points.length);
                    return <circle key={index} cx={x} cy={y} r="4" fill={item.color} />;
                  })}
                </g>
              ))}
            </svg>

            <div className="chart-axis-labels grid grid-cols-5 gap-2 pt-4 text-[0.72rem] text-gray-400">
              {xLabels.map((label) => (
                <div key={label} className="truncate text-center">
                  {label}
                </div>
              ))}
            </div>
          </>
        )}

        {type === "pie" && (
          <div className="relative mx-auto h-[190px] w-[190px]">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ef4444_0_45%,#f59e0b_45%_70%,#84cc16_70%_100%)]"></div>
            <div className="absolute inset-[22px] rounded-full bg-zinc-900"></div>
            <div className="donut-center">
              <div className="text-[0.95rem] font-bold text-white">68%</div>
              <div>Residential</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}