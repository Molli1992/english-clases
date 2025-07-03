"use client";
import styles from "./aboutUs.module.css";
import Title from "@/components/title/title";
import BlueButton from "@/components/buttons/blueButton";
import { RouteGoContact } from "@/utils/utils";
import Image from "next/image";
import TeacherImg from "@/assets/images/profile-img.jpg";

export default function AboutUs() {
  const { goContact } = RouteGoContact();

  return (
    <section className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.subContainer} style={{ alignItems: "center" }}>
          <div className={styles.img} />
        </div>

        <div className={styles.subContainer}>
          <Title value="sobre mi" />
          <h1 className="mainTitle">Hola, soy tu profesora de inglés</h1>
          <p className="mainText">
            Soy profesora de inglés con más de 10 años de experiencia enseñando
            a personas de todas las edades. Mi misión es ayudarte a alcanzar tus
            metas con clases personalizadas, dinámicas y enfocadas en la
            comunicación real. Aprender inglés puede ser sencillo y motivador
            cuando contás con el acompañamiento adecuado. ¡Estoy acá para
            ayudarte a lograrlo!
          </p>
          <p className="mainText">
            También ofrezco preparación en Inglés para Fines Específicos (ESP),
            incluyendo inglés técnico, académico y profesional. Ya sea que
            necesites rendir un examen, mejorar tu comunicación en el trabajo, o
            aplicar el idioma en áreas como programación, medicina o negocios,
            diseño clases adaptadas a tus necesidades reales. Mi enfoque es
            práctico, claro y orientado a resultados concretos. Aprender inglés
            con un propósito te abre puertas.
          </p>
          <BlueButton value="Contactame" onClick={goContact} />
        </div>
      </div>
    </section>
  );
}
