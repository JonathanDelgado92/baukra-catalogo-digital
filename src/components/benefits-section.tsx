import { BlurFade } from "@/components/ui/blur-fade";

const items = [
  {
    n: "01",
    title: "Estrategia antes del diseño",
    body: "Ordenamos tu oferta, tu público y tus mensajes antes de construir cualquier pantalla.",
  },
  {
    n: "02",
    title: "Diseño a medida para tu marca",
    body: "Cada proyecto responde a tu identidad y a tu negocio real; no partimos de una plantilla genérica como resultado final.",
  },
  {
    n: "03",
    title: "IA aplicada con dirección humana",
    body: "La usamos para investigar, redactar, prototipar y producir más rápido, siempre bajo criterio de diseño profesional.",
  },
  {
    n: "04",
    title: "Pensado para crecer",
    body: "Tu landing, catálogo o web queda lista para escalar más adelante hacia un proyecto digital más amplio.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid w-[min(calc(100%-2.5rem),75rem)] gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <div className="md:sticky md:top-32">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
            <span className="h-px w-6 bg-brand-green" />
            Por qué BAUKRA
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-tight">
            Más que una página bonita.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Convertimos la información de tu negocio en una experiencia digital
            clara, ordenada y lista para vender.
          </p>
        </div>
        <div className="grid gap-3.5">
          {items.map((it, i) => (
            <BlurFade key={it.n} inView delay={i * 0.08}>
              <div className="grid grid-cols-[3rem_1fr] gap-4 rounded-[1.4rem] border border-border bg-card p-6 shadow-[0_8px_30px_rgba(25,28,22,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(25,28,22,0.08)]">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-green-soft font-display text-sm font-bold text-brand-green">
                  {it.n}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
