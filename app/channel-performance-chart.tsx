"use client";

import { useRef, useState, type CSSProperties, type PointerEvent } from "react";

const channelPerformanceViewsDemoData = [
  { period: "Jan 1", views: 12400 },
  { period: "Jan 8", views: 18900 },
  { period: "Jan 15", views: 15300 },
  { period: "Jan 22", views: 26700 },
  { period: "Jan 29", views: 22100 },
  { period: "Feb 5", views: 34200 },
  { period: "Feb 12", views: 29800 },
  { period: "Feb 19", views: 41600 },
];

const channelPerformanceSubscribersDemoData = [
  { period: "Jan 1", subscribers: 9200 },
  { period: "Jan 8", subscribers: 9600 },
  { period: "Jan 15", subscribers: 10100 },
  { period: "Jan 22", subscribers: 10500 },
  { period: "Jan 29", subscribers: 10900 },
  { period: "Feb 5", subscribers: 11400 },
  { period: "Feb 12", subscribers: 12100 },
  { period: "Feb 19", subscribers: 12800 },
];

const maxValue = Math.max(
  ...channelPerformanceViewsDemoData.map(({ views }) => views),
);
const formatValue = (value: number) => new Intl.NumberFormat("en-US").format(value);

type Metric = "views" | "subscribers";
type ActivePoint = { index: number; metric: Metric } | null;

export default function ChannelPerformanceChart() {
  const [activePoint, setActivePoint] = useState<ActivePoint>(null);
  const pointerTypeRef = useRef<string | null>(null);

  return (
    <div className="vkedup-chart-panel mt-8 border p-5 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="vkedup-chart-metric text-xs font-bold uppercase tracking-[0.2em]">
            Views &amp; subscribers over time
          </p>
          <h3 className="vkedup-chart-title mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Channel Performance
          </h3>
          <div
            aria-label="Chart series, all values are illustrative demo data"
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
            role="list"
          >
            <span className="vkedup-chart-legend-item" role="listitem">
              <span className="vkedup-chart-legend-swatch vkedup-chart-legend-swatch--views" />
              Views · demo
            </span>
            <span className="vkedup-chart-legend-item" role="listitem">
              <span className="vkedup-chart-legend-swatch vkedup-chart-legend-swatch--subscribers" />
              Subscribers · demo
            </span>
          </div>
        </div>
        <span className="vkedup-chart-demo w-fit border px-3 py-1.5 text-[10px] font-bold tracking-[0.18em]">
          DEMO DATA
        </span>
      </div>

      <div
        aria-label="Illustrative demo views and subscriber counts by week"
        className="vkedup-chart-plot mt-8 grid h-56 grid-cols-8 items-end gap-2 border-b px-1 sm:mt-10 sm:h-64 sm:gap-4 sm:px-2"
        role="group"
      >
        {channelPerformanceViewsDemoData.map((item, index) => {
          const subscriberItem = channelPerformanceSubscribersDemoData[index];
          const points: { metric: Metric; value: number }[] = [
            { metric: "views", value: item.views },
            { metric: "subscribers", value: subscriberItem.subscribers },
          ];
          return (
            <div
              key={item.period}
              aria-label={item.period}
              className="vkedup-chart-column flex h-full min-w-0 items-end justify-center gap-1 sm:gap-1.5"
            >
              {points.map(({ metric, value }, pointIndex) => {
                const isActive =
                  activePoint?.index === index && activePoint.metric === metric;
                const height = Math.max((value / maxValue) * 100, 8);
                const metricLabel =
                  metric === "views" ? "Views · demo" : "Subscribers · demo";

                return (
                  <button
                    key={metric}
                    type="button"
                    aria-label={`${item.period}, ${metricLabel}: ${formatValue(value)}`}
                    aria-pressed={isActive}
                    className={`vkedup-chart-bar vkedup-chart-bar--${metric}${isActive ? " is-active" : ""}`}
                    style={
                      {
                        "--bar-height": `${height}%`,
                        "--bar-delay": `${index * 65 + pointIndex * 35}ms`,
                      } as CSSProperties
                    }
                    onPointerDown={(event: PointerEvent<HTMLButtonElement>) => {
                      pointerTypeRef.current = event.pointerType;
                      if (event.pointerType === "touch") {
                        setActivePoint((current) =>
                          current?.index === index && current.metric === metric
                            ? null
                            : { index, metric },
                        );
                      }
                    }}
                    onPointerEnter={(event) => {
                      if (event.pointerType !== "touch") {
                        setActivePoint({ index, metric });
                      }
                    }}
                    onPointerLeave={(event) => {
                      if (event.pointerType !== "touch") {
                        setActivePoint((current) =>
                          current?.index === index && current.metric === metric
                            ? null
                            : current,
                        );
                      }
                    }}
                    onFocus={() => setActivePoint({ index, metric })}
                    onBlur={() => {
                      if (pointerTypeRef.current !== "touch") {
                        setActivePoint((current) =>
                          current?.index === index && current.metric === metric
                            ? null
                            : current,
                        );
                      }
                    }}
                  >
                    <span
                      className="vkedup-chart-tooltip"
                      data-visible={isActive}
                      role="tooltip"
                    >
                      <span className="vkedup-chart-tooltip-period block text-[10px] font-medium">
                        {item.period}
                      </span>
                      <span className="vkedup-chart-tooltip-metric mt-0.5 block text-[10px] font-medium">
                        {metricLabel}
                      </span>
                      <span className="vkedup-chart-tooltip-value mt-0.5 block whitespace-nowrap text-xs font-bold">
                        {formatValue(value)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="mt-3 grid grid-cols-8 gap-2 sm:gap-4">
        {channelPerformanceViewsDemoData.map((item) => (
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
