import { CertificateSupport } from "@/components/home/CertificateSupport";
import { DiagnosticCTA } from "@/components/home/DiagnosticCTA";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { MainOffers } from "@/components/home/MainOffers";
import { PackagePreview } from "@/components/home/PackagePreview";
import { ResourcePreview } from "@/components/home/ResourcePreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MainOffers />
      <DiagnosticCTA />
      <TrustSection />
      <PackagePreview />
      <ResourcePreview />
      <CertificateSupport />
      <TestimonialsPreview />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
