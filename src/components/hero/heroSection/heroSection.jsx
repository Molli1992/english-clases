"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./heroSection.module.css";
import { handleOpenLink } from "@/utils/utils";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={styles.heroSection}>
      {show && (
        <div className={`${styles.heroContent} padding`}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Aprenda inglés de calidad en línea
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Easy English Online, un servicio eficaz para aprender idiomas.
            ¡Envía tu consulta por whatsapp o mail y comienza tu camino hacia un
            futuro internacional!
          </motion.p>

          <motion.div
            className={styles.heroButtons}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => handleOpenLink("https://wa.me/5491150381626")}
              className={`${styles.button} ${styles.whatsapp}`}
            >
              WhatsApp
            </button>
            <button
              onClick={() =>
                handleOpenLink(
                  "https://www.instagram.com/easy.english.101?igsh=Mnl6OWppbnZ1enNl"
                )
              }
              className={`${styles.button} ${styles.instagram}`}
            >
              Instagram
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
