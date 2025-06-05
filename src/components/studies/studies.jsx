import styles from "./studies.module.css";
import Title from "@/components/title/title";
import { dataStudies } from "@/data/dataStudies";
import CardStudies from "./cardStudies/cardStudies";

export default function Studies() {
  return (
    <section className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.columnContainer}>
          <Title value="estudios" />
          <h1 className="mainTitle">Mis estudios y preparación</h1>
          <p className="mainText">
            Como profesora de inglés, me apasiona seguir aprendiendo y
            perfeccionando mi enfoque. Te invito a conocer en detalle mi
            recorrido académico en las siguientes tarjetas.
          </p>
        </div>

        <div className={styles.gridContainer}>
          {dataStudies &&
            dataStudies.map((data) => {
              return (
                <CardStudies
                  key={data.id}
                  title={data.title}
                  desc={data.desc}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
