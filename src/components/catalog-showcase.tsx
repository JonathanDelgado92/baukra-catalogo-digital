import { waLink } from "@/lib/whatsapp";
import { ScrollFloat } from "@/components/ui/scroll-float";

const benefits = [
  { b: "Orden", d: "Categorías, fichas y navegación clara." },
  { b: "Velocidad", d: "Consulta desde cualquier dispositivo." },
  { b: "Conversión", d: "Pedido o cotización por WhatsApp." },
  { b: "Actualización", d: "Estructura preparada para crecer." },
];

const products = [
  { n: "01", price: "$25" },
  { n: "02", price: "$32" },
  { n: "03", price: "$18" },
  { n: "04", price: "$40" },
];

export function CatalogShowcase() {
  return (
    <section id="catalogos" className="dark overflow-hidden bg-black py-24 text-white md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-px w-6 bg-brand-green" />
              Producto destacado
            </div>
            <ScrollFloat
              containerClassName="mt-4 font-display text-[clamp(2.1rem,4.6vw,4.1rem)] font-semibold leading-[0.97] tracking-tight"
              segments={[{ text: "Catálogos que hacen más fácil " }, { text: "comprar.", className: "text-brand-green" }]}
            />
          </div>
          <p className="max-w-md text-white/60 md:justify-self-end">
            Especialmente útil para imprentas, papelerías, marcas de ropa,
            alimentos, distribuidores y cualquier negocio con muchos productos o
            servicios que organizar.
          </p>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="font-display text-[clamp(1.9rem,3.6vw,3.4rem)] font-semibold leading-[0.98] tracking-tight">
              Todo tu negocio en un solo enlace.
            </h3>
            <p className="mt-5 text-white/65">
              Organiza productos, precios, variaciones y servicios en una
              experiencia clara para celular. El cliente puede explorar, comparar
              y consultar sin perderse entre decenas de imágenes o mensajes.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {benefits.map((it) => (
                <div key={it.b} className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-sm">
                  <b className="mb-1 block text-[0.68rem] font-extrabold uppercase tracking-[0.06em] text-brand-green">
                    {it.b}
                  </b>
                  {it.d}
                </div>
              ))}
            </div>
            <a
              href={waLink("Me interesa un catálogo digital de BAUKRA. Me gustaría recibir más información.")}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Cotizar mi catálogo →
            </a>
          </div>

          <div className="relative mx-auto min-h-[36rem] w-full max-w-md">
            <div className="absolute left-0 bottom-8 w-60 -rotate-6 rounded-3xl bg-white p-4 text-brand-black shadow-2xl">
              <span className="font-display text-3xl font-bold tracking-tight">+ orden</span>
              <p className="mt-1 text-xs opacity-75">Menos archivos dispersos y respuestas repetidas.</p>
            </div>

            <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-[2.6rem] border-[9px] border-[#2f312e] bg-[#070707] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <div className="overflow-hidden rounded-[1.8rem] bg-[#f5f6f1] text-brand-black">
                <div className="bg-brand-green px-4 pb-3.5 pt-9 text-white">
                  <small className="text-[0.55rem] font-extrabold uppercase tracking-[0.1em]">Nueva colección</small>
                  <h4 className="font-display text-xl font-bold leading-none">Catálogo<br />2026</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3">
                  {products.map((p) => (
                    <div key={p.n} className="rounded-xl bg-white p-2 shadow-sm">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-[#d8dad4] to-[#f1f1ee]" />
                      <b className="mt-1.5 block text-[0.5rem]">Producto {p.n}</b>
                      <small className="text-[0.42rem] text-black/50">Desde {p.price}</small>
                    </div>
                  ))}
                </div>
                <div className="mx-3 mb-3 rounded-xl bg-brand-black py-2.5 text-center text-[0.5rem] font-bold text-white">
                  Solicitar por WhatsApp
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-6 w-56 rotate-6 rounded-3xl bg-brand-green p-4 text-white shadow-2xl">
              <span className="font-display text-3xl font-bold tracking-tight">1 enlace</span>
              <p className="mt-1 text-xs opacity-80">Para mostrar productos, servicios y novedades.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
