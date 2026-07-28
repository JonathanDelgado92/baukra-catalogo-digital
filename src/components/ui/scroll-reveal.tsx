"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollRevealSegment = {
  text: string;
  className?: string;
};

type ScrollRevealProps = {
  /** Plain string content. Ignored if `segments` is provided. */
  children?: string;
  /** Styled segments (e.g. to keep a highlighted word green) split into words and animated together. */
  segments?: ScrollRevealSegment[];
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  as?: "h1" | "h2" | "h3";
};

export function ScrollReveal({
  children,
  segments,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  as = "h2",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const resolvedSegments = useMemo<ScrollRevealSegment[]>(() => {
    if (segments) return segments;
    return [{ text: children ?? "" }];
  }, [segments, children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: { trigger: el, scroller, start: "top bottom", end: rotationEnd, scrub: true },
        },
      );

      const wordElements = el.querySelectorAll(".word");

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity" },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: { trigger: el, scroller, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true },
        },
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: 0.05,
            scrollTrigger: { trigger: el, scroller, start: "top bottom-=20%", end: wordAnimationEnd, scrub: true },
          },
        );
      }
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, resolvedSegments]);

  const Tag = as;

  return (
    <Tag ref={containerRef} className={containerClassName}>
      <span className={cn("inline", textClassName)}>
        {resolvedSegments.map((seg, si) => (
          <span key={si} className={seg.className}>
            {seg.text.split(/(\s+)/).map((token, ti) =>
              /^\s+$/.test(token) ? (
                token
              ) : (
                <span className="word inline-block" key={`${si}-${ti}`}>
                  {token}
                </span>
              ),
            )}
          </span>
        ))}
      </span>
    </Tag>
  );
}
