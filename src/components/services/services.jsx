import styles from "./services.module.css";
import ServicesCard from "./servicesCard/servicesCard";
import Title from "@/components/title/title";
import { dataServices } from "@/data/dataServices";

export default function Services() {
  return (
    <div className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.textContainer}>
          <Title value="comenza ahora" />
          <h1 className="mainTitle">Explorar como puedo ayudarte</h1>
        </div>

        <div className={styles.textContainer}>
          <p className="mainText">
            Cuando comenzamos tus clases, trabajamos contigo, tu nivel y tus
            objetivos. Juntos encontraremos la mejor forma para que avances.
            Todas las herramientas que utilicemos podrás aplicarlas luego en tu
            vida cotidiana o profesional.
          </p>
        </div>
      </div>

      <div className={`${styles.gridContainer} width`}>
        {dataServices &&
          dataServices.map((data) => {
            return (
              <ServicesCard
                key={data.id}
                icon={data.icon}
                title={data.title}
                desc={data.desc}
              />
            );
          })}
      </div>
    </div>
  );
}
