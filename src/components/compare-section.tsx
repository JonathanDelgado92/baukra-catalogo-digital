import { compareRows } from "@/lib/data";
import { ScrollFloat } from "@/components/ui/scroll-float";

export function CompareSection() {
  return (
    <section id="comparativa" className="bg-background py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Comparativa rápida
            </div>
            <ScrollFloat
              containerClassName="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight"
              segments={[{ text: "¿Qué necesita " }, { text: "tu negocio?", className: "text-brand-green" }]}
            />
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            La elección depende de cuánta información debes presentar, qué acción
            esperas del cliente y cuánto necesita crecer la solución.
          </p>
        </div>

        {/* Desktop: table. Hidden below 768px to avoid horizontal scroll. */}
        <div className="hidden overflow-x-auto rounded-3xl border border-border md:block">
          <table className="w-full min-w-[48rem] border-collapse bg-card text-sm">
            <thead>
              <tr>
                {["Solución", "Ideal para", "Contenido", "Objetivo", "Inversión"].map((h) => (
                  <th
                    key={h}
                    className="bg-brand-black px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.09em] text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r) => (
                <tr key={r.solution} className="border-b border-border last:border-0 transition-colors hover:bg-brand-paper">
                  <td className="px-5 py-4 font-bold">{r.solution}</td>
                  <td className="px-5 py-4">{r.idealFor}</td>
                  <td className="px-5 py-4">{r.content}</td>
                  <td className="px-5 py-4">{r.goal}</td>
                  <td className="px-5 py-4">
                    <strong className="tabular-nums text-brand-green">{r.price}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards, no horizontal scroll. */}
        <div className="grid gap-3.5 md:hidden">
          {compareRows.map((r) => (
            <div key={r.solution} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-base font-semibold">{r.solution}</h3>
                <strong className="shrink-0 tabular-nums text-brand-green">{r.price}</strong>
              </div>
              <dl className="mt-3 grid gap-2 text-sm">
                <div className="flex gap-1.5">
                  <dt className="shrink-0 font-semibold text-muted-foreground">Ideal para:</dt>
                  <dd>{r.idealFor}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="shrink-0 font-semibold text-muted-foreground">Contenido:</dt>
                  <dd>{r.content}</dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="shrink-0 font-semibold text-muted-foreground">Objetivo:</dt>
                  <dd>{r.goal}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
