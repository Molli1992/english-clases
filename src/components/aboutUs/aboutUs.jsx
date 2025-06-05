"use client";
import styles from "./aboutUs.module.css";
import Title from "@/components/title/title";
import BlueButton from "@/components/buttons/blueButton";
import { RouteGoContact } from "@/utils/utils";
import Image from "next/image";
import TeacherImg from "@/assets/images/teacher.jpg";

export default function AboutUs() {
  const { goContact } = RouteGoContact();

  return (
    <div className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.subContainer} style={{ alignItems: "center" }}>
          <Image src={TeacherImg} alt="Sobre mi" className={styles.img} />
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
          <BlueButton value="Contactame" onClick={goContact} />
        </div>
      </div>
    </div>
  );
}
