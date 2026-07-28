import { process } from "@/lib/data";

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-background py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Metodología BAUKRA
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Un proceso claro, de principio a <span className="text-brand-green">lanzamiento.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            La inteligencia artificial acelera la producción, pero la estrategia,
            la dirección visual y la experiencia de usuario permanecen bajo
            criterio profesional.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <article
              key={p.step}
              className="min-h-[14rem] rounded-[1.5rem] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-green/50"
            >
              <div className="font-display text-4xl font-bold tracking-tight text-brand-green">{p.step}</div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
