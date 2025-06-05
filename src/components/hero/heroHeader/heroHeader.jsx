"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./heroHeader.module.css";
import Link from "next/link";

export default function HeroHeader({ route }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className={`${styles.body} padding`}>
      {show && (
        <>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>{route}</h1>
          </motion.div>

          <motion.div
            className={styles.container}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className={styles.link}>
              Inicio
            </Link>
            <div className={styles.circle}></div>
            <p className={styles.text}>{route}</p>
          </motion.div>
        </>
      )}
    </section>
  );
}
