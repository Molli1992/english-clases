import HeroSection from "@/components/hero/heroSection/heroSection";
import HomeAboutUs from "@/components/homeAboutUs/homeAboutUs";
import HomeServices from "@/components/homeServices/homeServices";
import Reviews from "@/components/reviews/reviews";
import ContactForm from "@/components/contact/contactForm";

export default function HomePage() {
  return (
    <main className="body">
      <HeroSection
        imageUrl="https://glotcms.sgp1.cdn.digitaloceanspaces.com/epic/wordpress/2018/10/image.png"
        title="Aprenda inglés de calidad en línea"
        description="Unicoach es un servicio eficaz para aprender idiomas. ¡Pruébalo antes de comprarlo! Reserva una sesión de prueba gratuita de 30 minutos."
      />

      <HomeAboutUs />

      <HomeServices />

      <Reviews />

      <ContactForm />
    </main>
  );
}
