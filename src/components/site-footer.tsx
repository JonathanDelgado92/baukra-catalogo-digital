import { BaukraWordmark } from "@/components/baukra-logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#catalogos", label: "Catálogos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteFooter() {
  return (
    <footer className="dark border-t border-white/10 bg-brand-black-deep py-10 text-white">
      <div className="mx-auto w-[min(calc(100%-2.5rem),75rem)]">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <BaukraWordmark className="h-7 w-auto" />
          <div className="flex flex-wrap gap-5 text-sm text-white/60">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-5 text-xs text-white/45">
          © {new Date().getFullYear()} BAUKRA · Dirección visual y soluciones
          digitales · Landing pages · Catálogos · Web · IA aplicada
        </p>
      </div>
    </footer>
  );
}
