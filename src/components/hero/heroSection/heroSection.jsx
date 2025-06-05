"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./heroSection.module.css";
import { handleOpenLink } from "@/utils/utils";

export default function Hero({ imageUrl, title, description }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(25, 25, 70, 0.4), rgba(25, 25, 70, 0.4)), url('${imageUrl}')`,
  };

  return (
    <section className={styles.heroSection} style={backgroundStyle}>
      {show && (
        <div className={`${styles.heroContent} padding`}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            {title}
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
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
              onClick={() => handleOpenLink("https://www.instagram.com/")}
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
