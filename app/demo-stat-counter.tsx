"use client";

import { useEffect, useRef } from "react";

type DemoStatCounterProps = {
  value: number;
  divisor?: number;
  decimals?: number;
  suffix?: string;
};

export default function DemoStatCounter({
  value,
  divisor = 1,
  decimals = 0,
  suffix = "",
}: DemoStatCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const numberElement = numberRef.current;
    if (!numberElement) {
      return;
    }

    const formatValue = (count: number) =>
      `${(count / divisor).toFixed(decimals)}${suffix}`;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const duration = 1300;
    let frameId = 0;
    let isInView = false;

    const cancelAnimation = () => {
      window.cancelAnimationFrame(frameId);
    };

    const showFinalValue = () => {
      cancelAnimation();
      numberElement.textContent = formatValue(value);
    };

    const animate = () => {
      cancelAnimation();
      if (reducedMotion.matches) {
        showFinalValue();
        return;
      }

      numberElement.textContent = formatValue(0);
      const startTime = performance.now();

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 4;
        numberElement.textContent = formatValue(value * easedProgress);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(update);
        }
      };

      frameId = window.requestAnimationFrame(update);
    };

    if (!("IntersectionObserver" in window)) {
      showFinalValue();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) {
          animate();
        } else if (!reducedMotion.matches) {
          cancelAnimation();
          numberElement.textContent = formatValue(0);
        } else {
          showFinalValue();
        }
      },
      { threshold: 0.15, rootMargin: "-8% 0px -8% 0px" },
    );

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        showFinalValue();
      } else if (isInView) {
        animate();
      }
    };

    observer.observe(numberElement);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      cancelAnimation();
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, [decimals, divisor, suffix, value]);

  const accessibleValue = `${(value / divisor).toFixed(decimals)}${suffix}`;

  return (
    <span ref={numberRef} aria-label={accessibleValue} aria-live="off">
      0
    </span>
  );
}
