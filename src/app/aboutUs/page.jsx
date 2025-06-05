import HeroHeader from "@/components/hero/heroHeader/heroHeader";
import AboutUs from "@/components/aboutUs/aboutUs";
import Studies from "@/components/studies/studies";

export default function AboutUsPage() {
  return (
    <main className="body">
      <HeroHeader route="Quién soy" />

      <AboutUs />

      <Studies />
    </main>
  );
}
