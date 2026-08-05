"use client";

import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ElectricBorder } from "@/components/ui/electric-border";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MagicCard } from "@/components/ui/magic-card";
import { landingPlans, catalogPlans, webPlans, type Plan } from "@/lib/data";
import { cn } from "@/lib/utils";

const groups = [
  { value: "catalogo", label: "Catálogos digitales", plans: catalogPlans },
  { value: "landing", label: "Landing pages", plans: landingPlans },
  { value: "web", label: "Páginas web", plans: webPlans },
];

function PlanCardInner({ plan }: { plan: Plan }) {
  const Wrapper = plan.featured ? "article" : MagicCard;
  // Featured card is dark, so brand green passes contrast there. The other
  // cards sit on a light background and need the darker accessible green.
  const greenText = plan.featured ? "text-brand-green" : "text-brand-green-ink";
  return (
    <Wrapper
      className={cn(
        "group/card relative flex min-h-[36rem] flex-col overflow-hidden rounded-[1.6rem] border p-7 transition-transform duration-300 hover:-translate-y-1.5",
        plan.featured
          ? "dark h-full border-brand-black bg-brand-black text-white shadow-[0_24px_70px_rgba(15,17,13,0.18)]"
          : "border-border bg-background",
      )}
    >
      {!plan.featured && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1.5 origin-left scale-x-0 bg-brand-green transition-transform duration-300 ease-out group-hover/card:scale-x-100"
        />
      )}
      {plan.featured && (
        <span className="absolute right-[-2.6rem] top-6 rotate-[37deg] bg-brand-green px-12 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-white">
          Recomendado
        </span>
      )}
      <div className="flex items-center justify-between gap-3 pr-16">
        <div className={cn("text-xs font-extrabold uppercase tracking-[0.12em]", greenText)}>
          {plan.label}
        </div>
        {!plan.featured && (
          <span className="rounded-full bg-muted px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.06em] text-muted-foreground">
            {plan.tier}
          </span>
        )}
      </div>
      <h3 className="mt-2.5 font-display text-2xl font-semibold">{plan.name}</h3>
      {plan.featured && (
        <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.06em] text-white/50">
          {plan.tier}
        </div>
      )}
      <p className={cn("mt-2 min-h-[2.8rem] text-sm", plan.featured ? "text-white/70" : "text-muted-foreground")}>
        {plan.ideal}
      </p>
      <div className="my-6 flex items-start gap-1">
        <span className={cn("mt-2.5 text-base font-extrabold", greenText)}>$</span>
        <span className="font-display text-6xl font-semibold tracking-tight tabular-nums">
          {plan.price}
        </span>
        <span className={cn("mb-1.5 self-end text-xs", plan.featured ? "text-white/60" : "text-muted-foreground")}>
          desde
        </span>
      </div>
      <ul className="mb-7 grid gap-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <span className={cn("font-bold", greenText)} aria-hidden="true">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/?plan=${encodeURIComponent(plan.name)}#contacto`}
        scroll={true}
        data-plan={plan.name}
        data-price={plan.price}
        data-service={plan.slug.startsWith("catalogo") ? "catalogo-digital" : plan.slug.startsWith("landing") ? "landing-page" : "pagina-web"}
        data-package={plan.slug}
        className={cn(
          "select-plan mt-auto inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5",
          plan.featured ? "bg-brand-green text-white" : "bg-brand-black text-white",
        )}
        aria-label={`Solicitar el plan ${plan.name}, desde $${plan.price}`}
      >
        Solicitar este plan
      </Link>
      <div className={cn("mt-3.5 text-center text-xs", plan.featured ? "text-white/50" : "text-muted-foreground")}>
        {plan.note}
      </div>
    </Wrapper>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  if (!plan.featured) return <PlanCardInner plan={plan} />;

  return (
    <ElectricBorder color="#42ab38" speed={0.9} chaos={0.05} borderRadius={26} className="h-full">
      <PlanCardInner plan={plan} />
    </ElectricBorder>
  );
}

export function PricingSection() {
  const [active, setActive] = useState("catalogo");

  return (
    <section id="servicios" className="bg-background py-24 md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/70">
              <span className="h-px w-6 bg-brand-green" />
              Servicios y precios
            </div>
            <ScrollReveal
              containerClassName="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight"
              segments={[{ text: "Elige la solución " }, { text: "correcta.", className: "text-brand-green-ink" }]}
            />
          </div>
          <p className="max-w-md text-muted-foreground md:justify-self-end">
            Tres soluciones para negocios ecuatorianos que necesitan una presencia
            digital profesional. Los precios son de partida y pueden ajustarse
            según el alcance final.
          </p>
        </div>

        <Tabs value={active} onValueChange={setActive}>
          {/* Segmented control: same carbon-black + rounded language as the
              featured pricing card, so the selector reads as part of the set. */}
          {/* Segmented control. The `!` modifiers are load-bearing: the base
              Tabs primitive pins the list to h-8 and forces the active tab's
              colour/shadow via higher-specificity `group-data-*` selectors,
              which otherwise clip the taller pill and wash out its label. */}
          <TabsList className="mx-auto mb-10 flex h-auto! w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-full border border-border bg-card p-1.5">
            {groups.map((g) => (
              <TabsTrigger
                key={g.value}
                value={g.value}
                className="h-auto flex-none rounded-full border-transparent px-6 py-2.5 text-sm font-semibold text-muted-foreground shadow-none! transition-colors duration-200 after:hidden hover:text-brand-black data-active:bg-brand-black data-active:text-white!"
              >
                {g.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {groups.map((g) => (
            <TabsContent key={g.value} value={g.value} className="mt-0">
              <div className="grid gap-4 md:grid-cols-3">
                {g.plans.map((p) => (
                  <PlanCard key={p.name} plan={p} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
