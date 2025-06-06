import HeroHeader from "@/components/hero/heroHeader/heroHeader";
import Services from "@/components/services/services";
import Features from "@/components/features/features";

export default function ServicesPage() {
  return (
    <main className="body">
      <HeroHeader route="Servicios" />

      <Features />

      <Services />
    </main>
  );
}
