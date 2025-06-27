import HeroSection from "@/components/hero/heroSection/heroSection";
import HomeAboutUs from "@/components/homeAboutUs/homeAboutUs";
import HomeServices from "@/components/homeServices/homeServices";
import Reviews from "@/components/reviews/reviews";
import ContactForm from "@/components/contact/contactForm";

export default function HomePage() {
  return (
    <main className="body">
      <HeroSection
        title="Aprenda inglés de calidad en línea"
        description="Easy English Online, un servicio eficaz para aprender idiomas. ¡Envía tu consulta por whatsapp o mail y comienza tu camino hacia un futuro internacional!"
      />

      <HomeAboutUs />

      <HomeServices />

      <Reviews />

      <ContactForm />
    </main>
  );
}
