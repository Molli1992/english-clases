import styles from "./homeAboutUs.module.css";
import Title from "../title/title";
import imgAbout from "../../assets/images/home-about.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";

export default function HomeAboutUs() {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Title value="sobre mi" />
          <h1 className="mainTitle">
            Descubrí cómo aprender inglés de forma personalizada y efectiva
          </h1>
          <p className="mainText">
            Soy Agustina, profesora de inglés comprometida con ayudarte a
            alcanzar tus objetivos personales y profesionales. A través de
            clases dinámicas, prácticas y adaptadas a tu nivel, te acompaño en
            el proceso de incorporar el idioma con confianza. Ya sea que
            necesites mejorar tu fluidez, prepararte para una entrevista o
            viajar al exterior, trabajamos juntos para que logres comunicarte
            con seguridad y naturalidad. Mi enfoque se basa en la cercanía, la
            motivación y el aprendizaje real, desde la primera clase.
          </p>

          <div className={styles.flexContainer}>
            <div>
              <FaRegCircleCheck className={styles.icon} />
            </div>

            <p className={styles.text}>
              Clases a medida según tu nivel y tus objetivos personales o
              laborales.
            </p>
          </div>

          <div className={styles.flexContainer}>
            <div>
              <FaRegCircleCheck className={styles.icon} />
            </div>

            <p className={styles.text}>
              Método práctico para hablar desde el primer día con confianza.
            </p>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgSubContainer}>
            <Image src={imgAbout} alt="Sobre mi" className={styles.img} />
            <div className={styles.circle}>
              <h1 className={styles.circleTitle}>10+</h1>
              <p className={styles.circleText}>YEARS OF EXPERIENCIE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
