import { BaukraWordmark } from "@/components/baukra-logo";

const columns = [
  {
    title: "Explora",
    links: [
      { href: "#servicios", label: "Servicios y precios" },
      { href: "#catalogos", label: "Catálogos digitales" },
      { href: "#comparativa", label: "Comparativa" },
    ],
  },
  {
    title: "Información",
    links: [
      { href: "#proceso", label: "Cómo trabajamos" },
      { href: "#preguntas", label: "Preguntas frecuentes" },
      { href: "#contacto", label: "Contacto" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="dark border-t border-white/10 bg-brand-black-deep pt-14 pb-8 text-white">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <BaukraWordmark className="h-6 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Estudio digital en Ecuador. Diseñamos catálogos digitales, landing
              pages y páginas web a medida, con dirección visual y estrategia de
              conversión.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40">
                {col.title}
              </h2>
              <ul className="mt-4 grid gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BAUKRA. Todos los derechos reservados.</p>
          <p>Dirección visual · Diseño UX/UI · IA aplicada</p>
        </div>
      </div>
    </footer>
  );
}
