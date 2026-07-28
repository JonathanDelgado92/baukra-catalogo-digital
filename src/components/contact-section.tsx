"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { waLink } from "@/lib/whatsapp";
import { ScrollFloat } from "@/components/ui/scroll-float";

export function ContactSection() {
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [service, setService] = useState("Catálogo digital");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    const plan = params.get("plan");
    if (!plan) return;
    if (plan.toLowerCase().includes("landing")) setService("Landing page");
    else if (plan.toLowerCase().includes("web") && !plan.toLowerCase().includes("catálogo")) setService("Página web");
    else setService("Catálogo digital");
    setMessage(`Me interesa el paquete ${plan} de BAUKRA. Me gustaría recibir más información.`);
  }, [params]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hola, soy ${name}. Me interesa el servicio de ${service}. ${message}`;
    window.open(waLink(text), "_blank", "noopener");
    setToast(true);
  }

  return (
    <section id="contacto" className="dark bg-black py-24 text-white md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-gradient-to-br from-brand-green/[0.11] to-white/[0.02] p-7 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-36 size-80 rounded-full bg-brand-green opacity-20 blur-[110px]"
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-px w-6 bg-brand-green" />
              Conversemos
            </div>
            <ScrollFloat containerClassName="mt-4 max-w-lg font-display text-[clamp(1.7rem,2.9vw,2.6rem)] font-semibold leading-[1.15] tracking-tight">
              Tu negocio ya tiene algo que mostrar. Hagamos que sea más fácil encontrarlo, entenderlo y elegirlo.
            </ScrollFloat>
            <p className="mt-5 max-w-md text-white/65">
              Cuéntanos qué vendes, cuántos productos o servicios necesitas
              presentar y qué resultado esperas. Te recomendaremos la solución
              adecuada sin obligarte a contratar un paquete que no necesitas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink("Hola, quiero cotizar mi proyecto con BAUKRA.")}
                target="_blank"
                rel="noopener"
                data-whatsapp-click="cta-final-primary"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-green-light"
              >
                Cotizar mi proyecto ↗
              </a>
              <a
                href={waLink(
                  "Hola, vi el catálogo de BAUKRA. Necesito orientación para elegir entre un catálogo digital, una landing page o una página web.",
                )}
                target="_blank"
                rel="noopener"
                data-whatsapp-click="cta-final-secondary"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Necesito orientación
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 mt-10 rounded-[1.6rem] bg-white p-6 text-brand-black md:mt-0"
          >
            <h3 className="font-display text-lg font-semibold">O completa el formulario</h3>
            <div className="mt-4 grid gap-3">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-muted-foreground">Nombre o empresa</label>
                <input
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="Ej. Imprenta Central"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl border border-border bg-brand-paper px-3.5 py-3 outline-none transition-shadow focus:border-brand-green focus:shadow-[0_0_0_3px_rgba(66,171,56,0.14)]"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="service" className="text-xs font-bold text-muted-foreground">Servicio de interés</label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="rounded-xl border border-border bg-brand-paper px-3.5 py-3 outline-none transition-shadow focus:border-brand-green focus:shadow-[0_0_0_3px_rgba(66,171,56,0.14)]"
                >
                  <option>Catálogo digital</option>
                  <option>Landing page</option>
                  <option>Página web</option>
                  <option>Necesito asesoría</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-muted-foreground">Cuéntanos brevemente</label>
                <textarea
                  id="message"
                  autoComplete="off"
                  placeholder="Número de productos, objetivo, referencias o fecha deseada…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-24 resize-y rounded-xl border border-border bg-brand-paper px-3.5 py-3 outline-none transition-shadow focus:border-brand-green focus:shadow-[0_0_0_3px_rgba(66,171,56,0.14)]"
                />
              </div>
              <button
                type="submit"
                className="mt-1 rounded-full bg-brand-green py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-brand-green-light"
              >
                Preparar mensaje para WhatsApp →
              </button>
            </div>
            <p className="mt-2.5 text-center text-[0.66rem] text-muted-foreground">
              Al enviar, se abrirá WhatsApp con tu mensaje ya redactado.
            </p>
          </form>
        </div>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={`fixed left-1/2 bottom-6 z-50 -translate-x-1/2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-brand-black shadow-2xl transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        Mensaje preparado. Abriendo WhatsApp…
      </div>
    </section>
  );
}
