"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RouteGoHome, handleOpenLink } from "@/utils/utils";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);
  const { goHome } = RouteGoHome();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    }

    if (menu && !isClosing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu, isClosing]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenu(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.logoContainer}`}>
        <Image
          src={Logo}
          alt="Logo"
          className={styles.logo}
          onClick={goHome}
        />
      </div>

      <nav className={styles.container}>
        <ul className={styles.list}>
          <Link
            href="/"
            className={styles.link}
            style={{ color: pathname === "/" ? "#274396" : "" }}
          >
            Inicio
          </Link>

          <Link
            href="/aboutUs"
            className={styles.link}
            style={{ color: pathname === "/aboutUs" ? "#274396" : "" }}
          >
            Nosotros
          </Link>

          <Link
            href="/services"
            className={styles.link}
            style={{
              color: pathname === "/services" ? "#274396" : "",
            }}
          >
            Servicios
          </Link>

          <Link
            href="/contact"
            className={styles.buttonLink}
            style={{
              backgroundColor: pathname === "/contact" ? "#274396" : "",
            }}
          >
            Contacto
          </Link>
        </ul>

        <div className={styles.iconContainer}>
          <button className={styles.button} onClick={() => setMenu(true)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {menu && (
        <div
          className={`${styles.menu} ${isClosing ? styles.hide : styles.show}`}
          ref={menuRef}
        >
          <div className={styles.menuContainer}>
            <Image
              src={Logo}
              alt="Logo"
              className={styles.logo}
              onClick={() => {
                goHome();
                handleCloseMenu();
              }}
            />

            <div>
              <button className={styles.button} onClick={handleCloseMenu}>
                <IoCloseSharp />
              </button>
            </div>
          </div>

          <ul className={styles.menuList}>
            <Link
              href="/"
              className={styles.link}
              style={{ color: pathname === "/" ? "#274396" : "" }}
              onClick={handleCloseMenu}
            >
              Inicio
            </Link>

            <Link
              href="/aboutUs"
              className={styles.link}
              style={{ color: pathname === "/aboutUs" ? "#274396" : "" }}
              onClick={handleCloseMenu}
            >
              Nosotros
            </Link>

            <Link
              href="/services"
              className={styles.link}
              style={{
                color: pathname === "/services" ? "#274396" : "",
              }}
              onClick={handleCloseMenu}
            >
              Servicios
            </Link>

            <Link
              href="/contact"
              className={styles.link}
              style={{
                color: pathname === "/contact" ? "#274396" : "",
              }}
              onClick={handleCloseMenu}
            >
              Contacto
            </Link>

            <div className={styles.flexContainer}>
              <FaFacebook
                className={styles.socialNetworks}
                onClick={() =>
                  handleOpenLink("https://www.facebook.com/share/14E6E5Epxdi/")
                }
              />
              <FaInstagram
                className={styles.socialNetworks}
                onClick={() =>
                  handleOpenLink(
                    "https://www.instagram.com/easy.english.101?igsh=Mnl6OWppbnZ1enNl"
                  )
                }
              />
              <FaWhatsapp
                className={styles.socialNetworks}
                onClick={() => handleOpenLink("https://wa.me/5491150381626")}
              />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
