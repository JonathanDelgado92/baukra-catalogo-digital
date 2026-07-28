import { BaukraWordmark } from "@/components/baukra-logo";
import { waLink } from "@/lib/whatsapp";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#catalogos", label: "Catálogos" },
  { href: "#comparativa", label: "Comparativa" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="dark border-t border-white/10 bg-brand-black-deep py-10 text-white">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-xs">
            <BaukraWordmark className="h-7 w-auto" />
            <p className="mt-3 text-sm text-white/55">
              Estudio digital: catálogos digitales, landing pages y páginas web
              diseñadas a medida.
            </p>
            <a
              href={waLink("Hola, vi el catálogo de BAUKRA y quiero más información.")}
              target="_blank"
              rel="noopener"
              data-whatsapp-click="footer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green hover:text-brand-green-light"
            >
              Escribir por WhatsApp →
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-white/45">
          © {new Date().getFullYear()} BAUKRA · Dirección visual y soluciones
          digitales · Landing pages · Catálogos · Web · IA aplicada. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
