"use client";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/logo-white.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { handleOpenLink, RouteGoHome } from "@/utils/utils";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const { goHome } = RouteGoHome();

  return (
    <footer className={styles.body}>
      <div className={styles.footer}>
        <div className={styles.container}>
          <Image
            src={Logo}
            alt="Logo"
            className={styles.logo}
            onClick={goHome}
          />

          <p className={styles.parrafo}>
            Al conectar a estudiantes de todo el mundo con los mejores
            instructores, ayudamos a las personas a alcanzar sus metas y
            perseguir sus sueños.
          </p>

          <div className={styles.flexContainer}>
            <div className={styles.socialNetworks}>
              <FaFacebook
                onClick={() =>
                  handleOpenLink("https://www.facebook.com/share/14E6E5Epxdi/")
                }
              />
            </div>

            <div className={styles.socialNetworks}>
              <FaInstagram
                onClick={() =>
                  handleOpenLink(
                    "https://www.instagram.com/easy.english.101?igsh=Mnl6OWppbnZ1enNl"
                  )
                }
              />
            </div>

            <div className={styles.socialNetworks}>
              <FaWhatsapp
                onClick={() => handleOpenLink("https://wa.me/5491150381626")}
              />
            </div>
          </div>
        </div>

        <nav className={styles.container}>
          <h1 className={styles.title}>Enlaces</h1>

          <Link
            href="/"
            className={styles.link}
            style={{ color: pathname === "/" ? "#bac4e1" : "" }}
          >
            Inicio
          </Link>

          <Link
            href="/aboutUs"
            className={styles.link}
            style={{ color: pathname === "/aboutUs" ? "#bac4e1" : "" }}
          >
            Nosotros
          </Link>

          <Link
            href="/services"
            className={styles.link}
            style={{
              color: pathname === "/services" ? "#bac4e1" : "",
            }}
          >
            Servicios
          </Link>

          <Link
            href="/contact"
            className={styles.link}
            style={{
              color: pathname === "/contact" ? "#bac4e1" : "",
            }}
          >
            Contacto
          </Link>
        </nav>

        <div className={styles.container}>
          <h1 className={styles.title}>Conéctate</h1>

          <div className={styles.flexContainer}>
            <FaPhoneAlt className={styles.icons} />
            <p className={styles.text}>+54 9 11 5038-1626</p>
          </div>

          <div className={styles.flexContainer}>
            <LuMail className={styles.icons} />
            <p className={styles.text}>easy.english.online101@gmail.com</p>
          </div>

          <div className={styles.flexContainer}>
            <FaRegClock className={styles.icons} />
            <p className={styles.text}>Horario de Atencion: 9AM - 8PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
