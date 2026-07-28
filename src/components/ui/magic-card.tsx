"use client";

import { useRef, useEffect, useCallback, type ReactNode, type CSSProperties } from "react";
import { gsap } from "gsap";
import styles from "./magic-card.module.css";
import { cn } from "@/lib/utils";

const DEFAULT_PARTICLE_COUNT = 8;
const DEFAULT_GLOW_RADIUS = 220;
/** RGB triplet (no rgba wrapper) — defaults to brand green #42ab38 */
const DEFAULT_GLOW_COLOR = "66, 171, 56";

function createParticle(x: number, y: number, color: string) {
  const el = document.createElement("div");
  el.className = styles.particle;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.setProperty("--glow-color", color);
  return el;
}

type MagicCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glowColor?: string;
  glowRadius?: number;
  particleCount?: number;
  enableParticles?: boolean;
  enableBorderGlow?: boolean;
  clickEffect?: boolean;
};

export function MagicCard({
  children,
  className,
  style,
  glowColor = DEFAULT_GLOW_COLOR,
  glowRadius = DEFAULT_GLOW_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableParticles = true,
  enableBorderGlow = true,
  clickEffect = true,
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((p) => {
      gsap.to(p, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: "back.in(1.7)",
        onComplete: () => p.parentNode?.removeChild(p),
      });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    const card = cardRef.current;
    if (!card || !isHoveredRef.current) return;
    const { width, height } = card.getBoundingClientRect();

    for (let i = 0; i < particleCount; i++) {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const particle = createParticle(Math.random() * width, Math.random() * height, glowColor);
        cardRef.current.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.fromTo(particle, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 60,
          y: (Math.random() - 0.5) * 60,
          duration: 2 + Math.random() * 1.5,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(particle, { opacity: 0.35, duration: 1.2, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, i * 90);
      timeoutsRef.current.push(timeoutId);
    }
  }, [particleCount, glowColor]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleEnter = () => {
      isHoveredRef.current = true;
      if (enableParticles) spawnParticles();
    };

    const handleLeave = () => {
      isHoveredRef.current = false;
      if (enableParticles) clearParticles();
      card.style.setProperty("--glow-intensity", "0");
    };

    const handleMove = (e: MouseEvent) => {
      if (!enableBorderGlow) return;
      const rect = card.getBoundingClientRect();
      const relX = ((e.clientX - rect.left) / rect.width) * 100;
      const relY = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--glow-x", `${relX}%`);
      card.style.setProperty("--glow-y", `${relY}%`);
      card.style.setProperty("--glow-intensity", "1");
      card.style.setProperty("--glow-radius", `${glowRadius}px`);
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));

      const ripple = document.createElement("div");
      ripple.style.cssText = `position:absolute;width:${maxDistance * 2}px;height:${maxDistance * 2}px;border-radius:50%;background:radial-gradient(circle, rgba(${glowColor},0.35) 0%, rgba(${glowColor},0.15) 30%, transparent 70%);left:${x - maxDistance}px;top:${y - maxDistance}px;pointer-events:none;z-index:3;`;
      card.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => ripple.remove() });
    };

    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);
    card.addEventListener("mousemove", handleMove);
    card.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("click", handleClick);
      clearParticles();
    };
  }, [spawnParticles, clearParticles, enableParticles, enableBorderGlow, clickEffect, glowRadius, glowColor]);

  return (
    <div
      ref={cardRef}
      className={cn(styles.card, className)}
      style={{ ...style, ["--glow-color" as string]: glowColor }}
    >
      {children}
    </div>
  );
}
