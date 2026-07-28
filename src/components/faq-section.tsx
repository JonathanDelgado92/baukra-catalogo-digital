"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedList } from "@/components/ui/animated-list";
import { faqs } from "@/lib/data";

export function FaqSection() {
  const [openValue, setOpenValue] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  function jumpTo(index: number) {
    setOpenValue([index]);
    setActiveIndex(index);
    requestAnimationFrame(() => {
      document.getElementById(`faq-item-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  return (
    <section id="preguntas" className="bg-background py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Preguntas frecuentes
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Antes de <span className="text-brand-green">escribirnos.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Las dudas más comunes sobre tiempos, contenido, edición y pagos.
              Toca una pregunta en la lista para saltar directo a la respuesta.
            </p>
          </div>

          <div className="dark h-[26rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-brand-black">
            <AnimatedList
              items={faqs.map((f) => f.q)}
              onItemSelect={(_, index) => jumpTo(index)}
              selectedIndex={activeIndex}
              className="h-full"
            />
          </div>
        </div>

        <Accordion
          value={openValue}
          onValueChange={(v) => {
            setOpenValue(v as number[]);
            setActiveIndex((v as number[])[0] ?? -1);
          }}
          className="max-w-3xl"
        >
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              id={`faq-item-${i}`}
              value={i}
              className="scroll-mt-28 rounded-2xl border border-border bg-brand-paper px-6 mb-3 data-[state=open]:border-brand-green/50"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
