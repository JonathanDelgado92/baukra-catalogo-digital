"use client";

import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { HeroVideo } from "@/components/hero-video";
import { waLink } from "@/lib/whatsapp";
import gsap from "gsap";

const chips = [
  "Landing pages",
  "Catálogos digitales",
  "Páginas web",
  "Dirección de arte",
  "Estrategia de conversión",
  "IA aplicada",
];

const services = [
  { t: "Landing", s: "Campañas", accent: false },
  { t: "Catálogo", s: "Productos", accent: true },
  { t: "Web", s: "Presencia", accent: false },
];

const products = [
  { n: "01", price: "$25" },
  { n: "02", price: "$32" },
  { n: "03", price: "$18" },
  { n: "04", price: "$40" },
];

export function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!mockupRef.current || animated.current) return;
    animated.current = true;
    const el = mockupRef.current;

    const allTargets = el.querySelectorAll(
      "[data-hero-browser],[data-hero-browser-bar],[data-hero-browser-content],[data-hero-service],[data-hero-phone],[data-hero-phone-product],[data-hero-badge-1],[data-hero-badge-2],[data-hero-badge-3]"
    );
    gsap.set(allTargets, { opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", overwrite: "auto" },
      delay: 0.3,
    });

    tl.to(el.querySelector("[data-hero-browser]"), {
      opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 0.9,
    })
      .to(el.querySelector("[data-hero-browser-bar]"), {
        opacity: 1, scaleX: 1, duration: 0.4,
      }, "-=0.5")
      .to(el.querySelector("[data-hero-browser-content]"), {
        opacity: 1, y: 0, duration: 0.5,
      }, "-=0.2")
      .to(el.querySelectorAll("[data-hero-service]"), {
        opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12,
      }, "-=0.15")
      .to(el.querySelector("[data-hero-phone]"), {
        opacity: 1, y: 0, rotateY: 0, rotateX: 0, x: 0, duration: 1,
      }, "-=0.6")
      .to(el.querySelectorAll("[data-hero-phone-product]"), {
        opacity: 1, scale: 1, duration: 0.35, stagger: 0.08,
      }, "-=0.4")
      .to(el.querySelector("[data-hero-badge-1]"), {
        opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)",
      }, "-=0.5")
      .to(el.querySelector("[data-hero-badge-2]"), {
        opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)",
      }, "-=0.4")
      .to(el.querySelector("[data-hero-badge-3]"), {
        opacity: 1, x: 0, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)",
      }, "-=0.3");

    gsap.to(el.querySelector("[data-hero-badge-1]"), {
      y: -8, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 3,
    });
    gsap.to(el.querySelector("[data-hero-badge-2]"), {
      y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 3.5,
    });
    gsap.to(el.querySelector("[data-hero-badge-3]"), {
      y: -7, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 3.2,
    });
  }, []);

  useEffect(() => {
    if (!mockupRef.current) return;
    const el = mockupRef.current;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(el.querySelector("[data-hero-browser]"), {
        rotateY: cx * 6, rotateX: -cy * 4, duration: 0.6, ease: "power2.out", overwrite: "auto",
      });
      gsap.to(el.querySelector("[data-hero-phone]"), {
        rotateY: cx * 8, rotateX: -cy * 5, x: cx * 12, y: cy * 8, duration: 0.6, ease: "power2.out", overwrite: "auto",
      });
      gsap.to(el.querySelectorAll("[data-hero-badge-1],[data-hero-badge-2],[data-hero-badge-3]"), {
        x: cx * -15, duration: 0.8, ease: "power2.out", overwrite: "auto",
      });
    };

    const handleLeave = () => {
      gsap.to(
        el.querySelectorAll(
          "[data-hero-browser],[data-hero-phone],[data-hero-badge-1],[data-hero-badge-2],[data-hero-badge-3]"
        ),
        { rotateY: 0, rotateX: 0, x: 0, y: 0, duration: 0.8, ease: "power2.out", overwrite: "auto" }
      );
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="dark relative overflow-hidden bg-black text-white"
    >
      <HeroVideo />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(66,171,56,0.32),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="relative z-10 mx-auto grid w-[min(calc(100%-2.5rem),75rem)] gap-16 pb-24 pt-40 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-28 md:pt-48">
        {/* ── Copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-6 bg-brand-green" />
              Diseño web para negocios ecuatorianos
            </div>
            <h1 className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-balance">
              Convierte tus productos y servicios en una experiencia fácil de
              <span className="text-brand-green">
                {" "}
                explorar, compartir y elegir.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Creamos catálogos digitales, landing pages y sitios web diseñados a
              medida para presentar mejor tu negocio y generar consultas desde
              WhatsApp, con tecnología aplicada bajo dirección humana.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-green-light hover:shadow-[0_14px_30px_rgba(66,171,56,0.3)]"
              >
                Explorar servicios ↓
              </a>
              <a
                href={waLink(
                  "Hola, vi el catálogo de BAUKRA. Necesito orientación para elegir entre un catálogo digital, una landing page o una página web."
                )}
                target="_blank"
                rel="noopener"
                data-whatsapp-click="hero-secondary"
                className="ink-swap inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{
                  ["--ink" as string]: "#ffffff",
                  ["--surface" as string]: "#1d1d1b",
                }}
              >
                Cuéntame qué necesitas
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.08em] text-white/50">
              <span>
                <b className="text-white">Dirección visual</b> a medida
              </span>
              <span>
                <b className="text-white">IA aplicada</b> con criterio humano
              </span>
              <span>
                <b className="text-white">100%</b> responsive
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Interactive mockups ── */}
        <div
          ref={mockupRef}
          className="relative mx-auto w-full max-w-md [perspective:1200px]"
          style={{ minHeight: "34rem" }}
        >
          {/* Browser mockup */}
          <div
            data-hero-browser
            className="relative z-10 rounded-[1.75rem] border border-white/15 bg-[#f8f8f5] p-3 shadow-[0_45px_100px_rgba(0,0,0,0.45)] [transform-style:preserve-3d] will-change-transform"
            style={{ transformOrigin: "center bottom", opacity: 0, transform: "translateY(60px) rotateX(12deg) scale(0.92)" }}
          >
            <div
              data-hero-browser-bar
              className="flex h-10 items-center gap-2 rounded-t-2xl bg-[#e8eae5] px-3.5"
              style={{ opacity: 0, transform: "scaleX(0.7)" }}
            >
              <span className="size-2 rounded-full bg-black/20" />
              <span className="size-2 rounded-full bg-black/20" />
              <span className="size-2 rounded-full bg-black/20" />
              <span className="mx-auto h-3.5 w-2/5 rounded-full bg-black/10" />
            </div>
            <div
              data-hero-browser-content
              className="min-h-[20rem] overflow-hidden rounded-b-xl bg-brand-black-deep p-6"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <div className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-green">
                Sistema digital a medida
              </div>
              <div className="mt-3 max-w-[19rem] font-display text-[2.4rem] font-semibold leading-[0.94] text-white">
                Convierte visitas en{" "}
                <span className="text-brand-green">oportunidades.</span>
              </div>
              <p className="mt-4 max-w-[19rem] text-xs text-white/55">
                Una experiencia clara, rápida y visualmente sólida para
                presentar tu negocio y facilitar la decisión de compra.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {services.map((c) => (
                  <div
                    key={c.t}
                    data-hero-service
                    className={`flex h-28 flex-col justify-end rounded-xl border border-white/10 p-3 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 ${
                      c.accent ? "bg-brand-green" : "bg-white/5"
                    }`}
                    style={{ opacity: 0, transform: "translateY(30px) scale(0.8)" }}
                  >
                    <strong className="text-[0.65rem] text-white">
                      {c.t}
                    </strong>
                    <small className="text-[0.52rem] text-white/60">
                      {c.s}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div
            data-hero-phone
            className="absolute bottom-2 -right-6 z-20 w-44 rounded-[2.2rem] border-[7px] border-[#2f312e] bg-[#070707] p-2 shadow-[0_40px_80px_rgba(0,0,0,0.5)] [transform-style:preserve-3d] will-change-transform sm:-right-12 sm:w-48"
            style={{ transformOrigin: "left center", opacity: 0, transform: "translate(30px, 80px) rotateY(-25deg) rotateX(8deg)" }}
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-[#f5f6f1] text-brand-black">
              <div className="bg-brand-green px-3 pb-3 pt-7 text-white">
                <small className="text-[0.5rem] font-extrabold uppercase tracking-[0.1em]">
                  Nueva colección
                </small>
                <h4 className="font-display text-lg font-bold leading-none">
                  Catálogo
                  <br />
                  2026
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-1.5 p-2.5">
                {products.map((p) => (
                  <div
                    key={p.n}
                    data-hero-phone-product
                    className="rounded-lg bg-white p-1.5 shadow-sm"
                    style={{ opacity: 0, transform: "scale(0.6)" }}
                  >
                    <div className="aspect-square rounded-md bg-gradient-to-br from-[#d8dad4] to-[#f1f1ee]" />
                    <b className="mt-1 block text-[0.45rem]">
                      Producto {p.n}
                    </b>
                    <small className="text-[0.38rem] text-black/50">
                      Desde {p.price}
                    </small>
                  </div>
                ))}
              </div>
              <div className="mx-2 mb-2 rounded-lg bg-brand-black py-2 text-center text-[0.45rem] font-bold text-white">
                Solicitar por WhatsApp
              </div>
            </div>
          </div>

          {/* Badge: Responsive */}
          <div
            data-hero-badge-1
            className="absolute -right-4 top-14 z-30 rounded-2xl bg-white px-4 py-3.5 text-xs font-semibold text-brand-black shadow-xl will-change-transform sm:-right-8"
            style={{ opacity: 0, transform: "translate(50px, -30px) scale(0.5)" }}
          >
            <span className="mr-1.5 inline-block size-2 rounded-full bg-brand-green" />
            Diseño responsive <b className="block text-lg">100%</b>
          </div>

          {/* Badge: UX + IA */}
          <div
            data-hero-badge-2
            className="absolute -left-6 bottom-24 z-30 hidden rounded-2xl bg-white px-4 py-3.5 text-xs font-semibold text-brand-black shadow-xl will-change-transform sm:block sm:-left-10"
            style={{ opacity: 0, transform: "translate(-50px, 30px) scale(0.5)" }}
          >
            Producción <b className="block text-lg">UX + IA</b>
          </div>

          {/* Badge: WhatsApp */}
          <div
            data-hero-badge-3
            className="absolute -left-4 bottom-2 z-30 rounded-2xl bg-brand-green px-4 py-3 text-xs font-semibold text-white shadow-xl will-change-transform sm:-left-8"
            style={{ opacity: 0, transform: "translate(40px, 20px) scale(0.5)" }}
          >
            <span className="mr-1.5 inline-block size-2 rounded-full bg-white" />
            Contacto <b className="block text-lg">WhatsApp</b>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 border-t border-white/10 bg-brand-green py-4 text-white"
        aria-hidden="true"
      >
        <Marquee pauseOnHover className="[--duration:28s]">
          {chips.map((c) => (
            <span
              key={c}
              className="mx-5 text-xs font-bold uppercase tracking-[0.08em]"
            >
              {c} <span className="ml-5 text-brand-black">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
