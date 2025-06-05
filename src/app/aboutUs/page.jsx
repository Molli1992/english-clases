import HeroHeader from "@/components/hero/heroHeader/heroHeader";
import AboutUs from "@/components/aboutUs/aboutUs";

export default function AboutUsPage() {
  return (
    <main className="body">
      <HeroHeader route="Nosotros" />

      <AboutUs />
    </main>
  );
}
