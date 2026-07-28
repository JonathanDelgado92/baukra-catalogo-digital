"use client";

import { useRef, useState, useLayoutEffect, useCallback } from "react";
import styles from "./gooey-nav.module.css";
import { cn } from "@/lib/utils";

export type GooeyNavItem = { label: string; href: string };

type GooeyNavProps = {
  items: GooeyNavItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  colors?: number[];
  initialActiveIndex?: number;
  className?: string;
  onNavigate?: (item: GooeyNavItem, index: number) => void;
};

export function GooeyNav({
  items,
  particleCount = 8,
  particleDistances = [40, 6],
  particleR = 80,
  colors = [1, 2, 1, 3],
  initialActiveIndex = 0,
  className,
  onNavigate,
}: GooeyNavProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const measurePill = useCallback((index: number) => {
    const list = listRef.current;
    const el = itemRefs.current[index];
    if (!list || !el) return;
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setPill({ left: elRect.left - listRect.left, width: elRect.width });
  }, []);

  useLayoutEffect(() => {
    measurePill(activeIndex);
    const onResize = () => measurePill(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, items.length]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const spawnParticles = (liEl: HTMLLIElement) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const d = particleDistances;
    const r = particleR;

    for (let i = 0; i < particleCount; i++) {
      const rotate = noise(r / 10);
      const start = getXY(d[0], particleCount - i, particleCount);
      const end = getXY(d[1] + noise(7), particleCount - i, particleCount);
      const time = 900 + noise(400);
      const scale = 1 + noise(0.2);
      const color = colors[Math.floor(Math.random() * colors.length)];
      const particleRotate = rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10;

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.className = styles.particle;
        particle.style.setProperty("--start-x", `${start[0]}px`);
        particle.style.setProperty("--start-y", `${start[1]}px`);
        particle.style.setProperty("--end-x", `${end[0]}px`);
        particle.style.setProperty("--end-y", `${end[1]}px`);
        particle.style.setProperty("--time", `${time}ms`);
        particle.style.setProperty("--scale", `${scale}`);
        particle.style.setProperty("--rotate", `${particleRotate}deg`);
        point.className = styles.point;
        point.style.setProperty("--color", `rgb(var(--color-${color}))`);
        particle.appendChild(point);
        liEl.appendChild(particle);
        setTimeout(() => {
          try {
            liEl.removeChild(particle);
          } catch {
            /* already removed */
          }
        }, time);
      }, 20);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number, item: GooeyNavItem) => {
    onNavigate?.(item, index);
    if (activeIndex !== index) {
      setActiveIndex(index);
      measurePill(index);
      spawnParticles(e.currentTarget);
    }
  };

  return (
    <div className={cn(styles.container, className)}>
      <nav>
        <ul ref={listRef}>
          {pill && (
            <span
              aria-hidden="true"
              className={styles.pill}
              style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
            />
          )}
          {items.map((item, index) => (
            <li
              key={item.href + item.label}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={activeIndex === index ? styles.active : undefined}
              onClick={(e) => handleClick(e, index, item)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
