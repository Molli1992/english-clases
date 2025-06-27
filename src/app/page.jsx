"use client"
import { useState, useEffect } from "react";
import HeroSection from "@/components/hero/heroSection/heroSection";
import HomeAboutUs from "@/components/homeAboutUs/homeAboutUs";
import HomeServices from "@/components/homeServices/homeServices";
import Reviews from "@/components/reviews/reviews";
import ContactForm from "@/components/contact/contactForm";
import ImgDektop from "@/assets/images/hero-section-dektop.jpg";
import ImgMobile from "@/assets/images/hero-section-mobile.jpg";

export default function HomePage() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageUrl = width <= 700 && width !== 0 ? ImgMobile.src : ImgDektop.src;

  return (
    <main className="body">
      <HeroSection
        imageUrl={imageUrl}
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
