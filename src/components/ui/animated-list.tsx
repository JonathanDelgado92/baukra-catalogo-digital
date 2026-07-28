"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

function AnimatedItem({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}: {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter: () => void;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-3 cursor-pointer last:mb-0"
    >
      {children}
    </motion.div>
  );
}

export type AnimatedListProps = {
  items: string[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
  selectedIndex?: number;
};

export function AnimatedList({
  items,
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
  selectedIndex: controlledIndex,
}: AnimatedListProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [internalIndex, setInternalIndex] = useState(initialSelectedIndex);
  const selectedIndex = controlledIndex ?? internalIndex;
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleItemMouseEnter = useCallback((index: number) => {
    setInternalIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item: string, index: number) => {
      setInternalIndex(index);
      onItemSelect?.(item, index);
    },
    [onItemSelect],
  );

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!listRef.current?.contains(document.activeElement) && document.activeElement !== document.body) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setKeyboardNav(true);
        setInternalIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setKeyboardNav(true);
        setInternalIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter" && selectedIndex >= 0 && selectedIndex < items.length) {
        e.preventDefault();
        onItemSelect?.(items[selectedIndex], selectedIndex);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < container.scrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (itemBottom > container.scrollTop + container.clientHeight - extraMargin) {
        container.scrollTo({ top: itemBottom - container.clientHeight + extraMargin, behavior: "smooth" });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={listRef}
        onScroll={handleScroll}
        className={cn(
          "max-h-full overflow-y-auto p-4",
          !displayScrollbar && "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          displayScrollbar &&
            "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/15 [&::-webkit-scrollbar-track]:bg-transparent",
        )}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={item}
            delay={0.06}
            index={index}
            onMouseEnter={() => handleItemMouseEnter(index)}
            onClick={() => handleItemClick(item, index)}
          >
            <div
              className={cn(
                "rounded-2xl border px-4 py-3.5 transition-colors",
                selectedIndex === index
                  ? "border-brand-green/50 bg-brand-green/15"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]",
                itemClassName,
              )}
            >
              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            style={{ opacity: topGradientOpacity }}
            className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-brand-black to-transparent transition-opacity duration-300"
          />
          <div
            style={{ opacity: bottomGradientOpacity }}
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-black to-transparent transition-opacity duration-300"
          />
        </>
      )}
    </div>
  );
}
