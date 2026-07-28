"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ScrollFloat } from "@/components/ui/scroll-float";

function FaqRow({ q, a, index, delay }: { q: string; a: string; index: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4, once: false });
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-3 last:mb-0"
    >
      <div
        className={cn(
          "rounded-2xl border transition-colors",
          open ? "border-brand-green/50 bg-brand-green-soft" : "border-border bg-brand-paper hover:border-brand-green/30",
        )}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <span className="font-display text-sm font-semibold text-brand-black">{q}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn("size-4 shrink-0 text-brand-green transition-transform duration-300", open && "rotate-180")}
          />
        </button>
        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <p id={`faq-answer-${index}`} className="px-5 pb-4 text-sm text-muted-foreground">
              {a}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section id="preguntas" className="dark bg-brand-black py-24 text-white md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-px w-6 bg-brand-green" />
              Preguntas frecuentes
            </div>
            <ScrollFloat
              containerClassName="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight"
              segments={[{ text: "Antes de " }, { text: "escribirnos.", className: "text-brand-green" }]}
            />
          </div>
          <p className="max-w-md text-white/65 md:justify-self-end">
            Las dudas más comunes sobre tiempos, contenido, edición y pagos.
            Toca una pregunta para ver la respuesta.
          </p>
        </div>

        <div className="mx-auto max-h-[34rem] max-w-3xl overflow-y-auto rounded-[1.6rem] bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-track]:bg-transparent">
          {faqs.map((f, i) => (
            <FaqRow key={f.q} q={f.q} a={f.a} index={i} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
