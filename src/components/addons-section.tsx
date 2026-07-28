import { addonGroups } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagicCard } from "@/components/ui/magic-card";

export function AddonsSection() {
  return (
    <section className="bg-brand-paper py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Servicios adicionales
            </div>
            <ScrollReveal containerClassName="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Escala tu proyecto cuando lo necesites.
            </ScrollReveal>
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            Complementos para personalizar cada solución sin cargar el precio
            base con funciones que quizá tu negocio aún no necesita.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {addonGroups.map((group) => (
            <MagicCard
              key={group.title}
              className="flex flex-col rounded-[1.6rem] border border-border bg-white p-7"
            >
              <h3 className="font-display text-xl font-semibold">{group.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{group.body}</p>
              <ul className="mt-6 grid gap-3.5 border-t border-border pt-6">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-3 text-sm">
                    <span>{item.name}</span>
                    <span className="shrink-0 font-semibold text-brand-green-ink tabular-nums">{item.price}</span>
                  </li>
                ))}
              </ul>
            </MagicCard>
          ))}
        </div>
        <p className="mt-7 max-w-2xl text-sm text-muted-foreground">
          Dominio, hosting, licencias, plugins, plataformas y servicios de
          terceros se cotizan aparte cuando no estén incluidos expresamente en
          el paquete.
        </p>
      </div>
    </section>
  );
}
