import { useCases } from "@/lib/data";
import { BlurFade } from "@/components/ui/blur-fade";

export function CasesSection() {
  return (
    <section id="casos-de-uso" className="bg-brand-paper py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Ejemplos de uso
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Encuentra tu <span className="text-brand-green">punto de partida.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            Ejemplos ilustrativos de cómo distintos tipos de negocio suelen usar
            cada solución. Sirven como referencia, no como casos reales.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          {useCases.map((c, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];
            const offsets = ["", "md:mt-12", "", "md:mt-12"];
            return (
              <BlurFade key={c.who} inView delay={i * 0.07} className={`${spans[i]} ${offsets[i]}`}>
                <article className="h-full rounded-[1.5rem] border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(25,28,22,0.08)]">
                  <div className="text-[0.68rem] font-extrabold uppercase tracking-[0.1em] text-brand-green">
                    {c.who}
                  </div>
                  <h3 className="mt-2.5 font-display text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green-soft px-3.5 py-2 text-sm font-semibold text-[#2a7423]">
                    {c.rec}
                  </span>
                </article>
              </BlurFade>
            );
          })}
        </div>
        <p className="mt-7 text-sm text-muted-foreground/80">
          ¿No encuentras tu tipo de negocio? Cuéntanos por WhatsApp qué vendes y
          te recomendamos la opción más adecuada.
        </p>
      </div>
    </section>
  );
}
