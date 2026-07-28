import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section id="preguntas" className="bg-background py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Preguntas frecuentes
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Antes de <span className="text-brand-green">escribirnos.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            Las dudas más comunes sobre tiempos, contenido, edición y pagos.
          </p>
        </div>

        <Accordion className="max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={i}
              className="rounded-2xl border border-border bg-brand-paper px-6 mb-3 data-[state=open]:border-brand-green/50"
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
