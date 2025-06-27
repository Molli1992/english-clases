import HeroSection from "@/components/hero/heroSection/heroSection";
import HomeAboutUs from "@/components/homeAboutUs/homeAboutUs";
import HomeServices from "@/components/homeServices/homeServices";
import Reviews from "@/components/reviews/reviews";
import ContactForm from "@/components/contact/contactForm";

export default function HomePage() {
  return (
    <main className="body">
      <HeroSection />

      <HomeAboutUs />

      <HomeServices />

      <Reviews />

      <ContactForm />
    </main>
  );
}
