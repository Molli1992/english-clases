import HeroHeader from "@/components/hero/heroHeader/heroHeader";
import ContactForm from "@/components/contact/contactForm";

export default function ContactPage() {
  return (
    <main className="body">
      <HeroHeader route="Contacto" />

      <ContactForm />
    </main>
  );
}
