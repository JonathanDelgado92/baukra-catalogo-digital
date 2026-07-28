import { catalogBenefits, catalogExamples } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagicCard } from "@/components/ui/magic-card";

export function CasesSection() {
  return (
    <section id="casos-de-uso" className="bg-brand-paper py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Por qué un catálogo digital
            </div>
            <ScrollReveal
              containerClassName="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight"
              segments={[{ text: "Un enlace que " }, { text: "organiza todo.", className: "text-brand-green" }]}
            />
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            Un catálogo digital te ayuda a presentar tu negocio de forma más clara
            y a recibir consultas sin depender de decenas de fotos sueltas.
          </p>
        </div>

        <ul className="mb-14 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {catalogBenefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 font-bold text-brand-green">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
          Ejemplo conceptual de aplicación
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {catalogExamples.map((c, i) => (
            <BlurFade key={c.who} inView delay={i * 0.08}>
              <MagicCard className="h-full rounded-[1.5rem] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(25,28,22,0.08)]">
                <h3 className="font-display text-lg font-semibold">{c.who}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Categorías sugeridas</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-brand-green-soft px-3 py-1.5 text-xs font-semibold text-[#2a7423]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground/80">
          Ejemplos ilustrativos para mostrar cómo se vería la organización por
          categorías. No representan clientes reales ni proyectos entregados de BAUKRA.
        </p>
      </div>
    </section>
  );
}
