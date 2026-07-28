"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BaukraMark } from "@/components/baukra-logo";
import { waLink } from "@/lib/whatsapp";
import { GooeyNav } from "@/components/ui/gooey-nav";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#catalogos", label: "Catálogos" },
  { href: "#comparativa", label: "Comparativa" },
  { href: "#proceso", label: "Proceso" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40">
      <nav
        aria-label="Navegación principal"
        className="dark mx-auto flex w-[min(calc(100%-1.75rem),78rem)] items-center justify-between gap-6 rounded-full border border-white/10 bg-black/75 px-3 py-2.5 pl-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
      >
        <Link href="#inicio" className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.08em]">
          <BaukraMark className="h-6 w-auto" />
          BAUKRA
        </Link>

        <div className="hidden md:block">
          <GooeyNav items={links} initialActiveIndex={0} />
        </div>

        <a
          href="#contacto"
          className="hidden rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light md:inline-flex"
        >
          Solicitar propuesta ↗
        </a>

        <div className="flex items-center gap-4 md:hidden">
          <a
            href={waLink("Hola, vi el catálogo de BAUKRA y quiero cotizar.")}
            target="_blank"
            rel="noopener"
            aria-label="Cotizar por WhatsApp"
            data-whatsapp-click="mobile-nav"
            className="text-white"
          >
            <MessageCircle className="size-6" aria-hidden="true" />
          </a>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menú"
            className="text-white"
          >
            <Menu className="size-6" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="dark bg-black text-white">
            <SheetHeader>
              <SheetTitle className="font-display text-white">BAUKRA</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-brand-green px-4 py-3 text-center font-medium text-white"
              >
                Solicitar propuesta ↗
              </a>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  );
}
