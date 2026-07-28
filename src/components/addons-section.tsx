import { addons } from "@/lib/data";

export function AddonsSection() {
  return (
    <section className="dark bg-brand-green py-24 text-white md:py-32">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="mb-11 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              <span className="h-px w-6 bg-brand-black" />
              Servicios adicionales
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.97] tracking-tight">
              Escala tu proyecto cuando lo necesites.
            </h2>
          </div>
          <p className="max-w-md text-white/85 md:justify-self-end">
            Complementos para personalizar cada solución sin cargar el precio
            base con funciones que quizá tu negocio aún no necesita.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((a) => (
            <div
              key={a.name}
              className="rounded-[1.2rem] border border-white/20 bg-white/12 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/18"
            >
              <strong className="block text-base">{a.name}</strong>
              <span className="mt-2 block font-display text-xl font-bold tabular-nums">{a.price}</span>
              <small className="block text-white/80">{a.detail}</small>
            </div>
          ))}
        </div>
        <p className="mt-7 max-w-2xl text-sm text-white/85">
          Licencias, dominio, hosting, plugins, plataformas y servicios de
          terceros pueden cotizarse aparte cuando no estén incluidos
          explícitamente en el paquete elegido.
        </p>
      </div>
    </section>
  );
}
