"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Blurred brand-animation backdrop for the hero.
 *
 * The source is picked at runtime (portrait clip on phones, landscape on
 * desktop) instead of via two <video> tags, so only one file is ever fetched.
 * Honours prefers-reduced-motion by falling back to the static poster.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const isPortrait = window.matchMedia("(max-width: 767px)").matches;
    setSrc(isPortrait ? "/video/hero-mobile.mp4" : "/video/hero-desktop.mp4");
  }, []);

  useEffect(() => {
    if (!src) return;
    const v = videoRef.current;
    // Some mobile browsers reject autoplay until the source is attached.
    v?.play().catch(() => {});
  }, [src]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <video
        ref={videoRef}
        src={src ?? undefined}
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="size-full scale-110 object-cover opacity-45 blur-2xl"
      />
      {/* Keeps hero copy readable over the moving backdrop. */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
    </div>
  );
}
