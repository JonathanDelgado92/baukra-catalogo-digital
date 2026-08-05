import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { BenefitsSection } from "@/components/benefits-section";
import { PricingSection } from "@/components/pricing-section";
import { CatalogShowcase } from "@/components/catalog-showcase";
import { CompareSection } from "@/components/compare-section";
import { CasesSection } from "@/components/cases-section";
import { ProcessSection } from "@/components/process-section";
import { AddonsSection } from "@/components/addons-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-3.5 top-[-4rem] z-[100] rounded-xl bg-brand-green px-4.5 py-3 font-semibold text-white transition-[top] duration-200 focus:top-3.5"
      >
        Saltar al contenido
      </a>
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <BenefitsSection />
        <PricingSection />
        <CatalogShowcase />
        <CompareSection />
        <CasesSection />
        <ProcessSection />
        <AddonsSection />
        <FaqSection />
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
