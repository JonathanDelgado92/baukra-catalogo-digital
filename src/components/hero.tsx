"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { waLink } from "@/lib/whatsapp";

const chips = ["Landing pages", "Catálogos digitales", "Páginas web", "Dirección de arte", "Estrategia de conversión", "IA aplicada"];

export function Hero() {
  return (
    <section id="inicio" className="dark relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(66,171,56,0.32),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="relative z-10 mx-auto grid w-[min(calc(100%-2.5rem),75rem)] gap-16 pb-24 pt-40 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-28 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:flex md:items-start md:gap-8"
        >
          <ul
            aria-hidden="true"
            className="hidden shrink-0 flex-col gap-2.5 pt-3 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white/40 lg:flex"
          >
            {chips.slice(0, 5).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-6 bg-brand-green" />
              Estudio digital · Ecuador
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7.2vw,6.6rem)] font-semibold leading-[0.8] tracking-tight">
              Diseño que
              <span className="block text-brand-green">activa marcas.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
            Landing pages, catálogos digitales y páginas web diseñadas a medida, con
            dirección visual, estrategia de conversión e inteligencia artificial
            aplicada bajo criterio profesional.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-green-light hover:shadow-[0_14px_30px_rgba(66,171,56,0.3)]"
            >
              Ver servicios ↓
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Guardar como PDF
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.08em] text-white/50">
            <span><b className="text-white">Dirección visual</b> a medida</span>
            <span><b className="text-white">IA aplicada</b> con criterio humano</span>
            <span><b className="text-white">100%</b> responsive</span>
          </div>
          <p className="mt-6 text-sm text-white/60">
            ¿No sabes qué necesitas todavía?{" "}
            <a
              href={waLink(
                "Hola, no estoy seguro de qué solución necesito para mi negocio. ¿Me pueden ayudar a elegir?",
              )}
              target="_blank"
              rel="noopener"
              className="font-semibold text-brand-green underline decoration-brand-green/40 underline-offset-4 hover:decoration-brand-green"
            >
              Escríbenos y te orientamos →
            </a>
          </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md [perspective:1400px]"
        >
          <div className="rounded-[1.75rem] border border-white/15 bg-[#f8f8f5] p-3 shadow-[0_45px_100px_rgba(0,0,0,0.45)]">
            <div className="flex h-10 items-center gap-2 rounded-t-2xl bg-[#e8eae5] px-3.5">
              <span className="size-2 rounded-full bg-black/20" />
              <span className="size-2 rounded-full bg-black/20" />
              <span className="size-2 rounded-full bg-black/20" />
              <span className="mx-auto h-3.5 w-2/5 rounded-full bg-black/10" />
            </div>
            <div className="min-h-[27rem] overflow-hidden rounded-b-xl bg-brand-black-deep p-6">
              <div className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-green">
                Sistema digital a medida
              </div>
              <div className="mt-3 max-w-[19rem] font-display text-[2.4rem] font-semibold leading-[0.94] text-white">
                Convierte visitas en <span className="text-brand-green">oportunidades.</span>
              </div>
              <p className="mt-4 max-w-[19rem] text-xs text-white/55">
                Una experiencia clara, rápida y visualmente sólida para presentar tu
                negocio y facilitar la decisión de compra.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  { t: "Landing", s: "Campañas" },
                  { t: "Catálogo", s: "Productos" },
                  { t: "Web", s: "Presencia" },
                ].map((c, i) => (
                  <div
                    key={c.t}
                    className={`flex h-28 flex-col justify-end rounded-xl border border-white/10 p-3 ${
                      i === 1 ? "bg-brand-green" : "bg-white/5"
                    }`}
                  >
                    <strong className="text-[0.65rem] text-white">{c.t}</strong>
                    <small className="text-[0.52rem] text-white/60">{c.s}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-14 rounded-2xl bg-white px-4 py-3.5 text-xs font-semibold text-brand-black shadow-xl"
          >
            <span className="mr-1.5 inline-block size-2 rounded-full bg-brand-green" />
            Diseño responsive <b className="block text-lg">100%</b>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
            className="absolute -left-8 bottom-12 hidden rounded-2xl bg-white px-4 py-3.5 text-xs font-semibold text-brand-black shadow-xl sm:block"
          >
            Producción <b className="block text-lg">UX + IA</b>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-brand-green py-4 text-white" aria-hidden="true">
        <Marquee pauseOnHover className="[--duration:28s]">
          {chips.map((c) => (
            <span key={c} className="mx-5 text-xs font-bold uppercase tracking-[0.08em]">
              {c} <span className="ml-5 text-brand-black">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
