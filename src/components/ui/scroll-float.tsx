"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollFloatSegment = {
  text: string;
  className?: string;
};

type ScrollFloatProps = {
  /** Plain string content. Ignored if `segments` is provided. */
  children?: string;
  /** Styled segments (e.g. to keep a highlighted word green) animated as one unit. */
  segments?: ScrollFloatSegment[];
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3";
};

export function ScrollFloat({
  children,
  segments,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom-=10%",
  scrollEnd = "bottom bottom-=35%",
  stagger = 0.02,
  as = "h2",
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const resolvedSegments = useMemo<ScrollFloatSegment[]>(() => {
    if (segments) return segments;
    return [{ text: children ?? "" }];
  }, [segments, children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const charElements = el.querySelectorAll(".char");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, resolvedSegments]);

  const Tag = as;

  return (
    <Tag ref={containerRef} className={cn("overflow-hidden", containerClassName)}>
      <span className={cn("inline-block", textClassName)}>
        {resolvedSegments.map((seg, si) => (
          <span key={si} className={seg.className}>
            {seg.text.split("").map((char, ci) => (
              <span className="char inline-block" key={`${si}-${ci}`}>
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  );
}
