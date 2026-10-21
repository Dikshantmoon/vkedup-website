"use client";

import { useState, type CSSProperties } from "react";

const channelPerformanceDemoData = [
  { period: "Jan 1", views: 12400 },
  { period: "Jan 8", views: 18900 },
  { period: "Jan 15", views: 15300 },
  { period: "Jan 22", views: 26700 },
  { period: "Jan 29", views: 22100 },
  { period: "Feb 5", views: 34200 },
  { period: "Feb 12", views: 29800 },
  { period: "Feb 19", views: 41600 },
];

const maxViews = Math.max(...channelPerformanceDemoData.map(({ views }) => views));
const formatViews = (views: number) =>
  `${new Intl.NumberFormat("en-US").format(views)} views`;

export default function ChannelPerformanceChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="vkedup-chart-panel mt-8 border p-5 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="vkedup-chart-metric text-xs font-bold uppercase tracking-[0.2em]">
            Views over time
          </p>
          <h3 className="vkedup-chart-title mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Channel Performance
          </h3>
        </div>
        <span className="vkedup-chart-demo w-fit border px-3 py-1.5 text-[10px] font-bold tracking-[0.18em]">
          DEMO DATA
        </span>
      </div>

      <div
        aria-label="Illustrative demo views by week"
        className="mt-8 grid h-56 grid-cols-8 items-end gap-2 border-b border-white/10 px-1 sm:mt-10 sm:h-64 sm:gap-4 sm:px-2"
        role="group"
      >
        {channelPerformanceDemoData.map((item, index) => {
          const height = Math.max((item.views / maxViews) * 100, 8);
          const isActive = activeIndex === index;

          return (
            <div
              key={item.period}
              className="relative flex h-full min-w-0 items-end justify-center"
            >
              <button
                type="button"
                aria-label={`${item.period}: ${formatViews(item.views)}`}
                aria-pressed={isActive}
                className={`vkedup-chart-bar ${isActive ? "is-active" : ""}`}
                style={
                  {
                    "--bar-height": `${height}%`,
                    "--bar-delay": `${index * 65}ms`,
                  } as CSSProperties
                }
                onPointerEnter={(event) => {
                  if (event.pointerType !== "touch") {
                    setActiveIndex(index);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType !== "touch") {
                    setActiveIndex((current) =>
                      current === index ? null : current,
                    );
                  }
                }}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => {
                  setActiveIndex((current) =>
                    current === index ? null : current,
                  );
                }}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className="vkedup-chart-tooltip"
                  data-visible={isActive}
                  role="tooltip"
                >
                  <span className="vkedup-chart-tooltip-period block text-[10px] font-medium">
                    {item.period}
                  </span>
                  <span className="vkedup-chart-tooltip-value mt-0.5 block whitespace-nowrap text-xs font-bold">
                    {formatViews(item.views)}
                  </span>
                </span>
              </button>
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="mt-3 grid grid-cols-8 gap-2 sm:gap-4">
        {channelPerformanceDemoData.map((item) => (
          <span
            key={item.period}
            className="vkedup-chart-axis truncate text-center text-[10px] sm:text-xs"
          >
            {item.period}
          </span>
        ))}
      </div>

      <p className="vkedup-chart-disclaimer mt-6 text-xs leading-5">
        Illustrative demo data only. Real YouTube analytics will be integrated
        later.
      </p>
    </div>
  );
}
