"use client";
import styles from "./homeServices.module.css";
import Title from "../title/title";
import BlueButton from "../buttons/blueButton";
import ServicesCard from "../services/servicesCard/servicesCard";
import { dataServices } from "@/data/dataServices";
import { RouteGoServices } from "@/utils/utils";

export default function HomeServices() {
  const { goServices } = RouteGoServices();

  return (
    <section className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.columnContainer}>
          <Title value="servicios" />
          <h1 className="mainTitle">Mis servicios</h1>
          <p className="mainText" style={{ maxWidth: "400px" }}>
            Ofrezco clases de inglés personalizadas para ayudarte a mejorar tu
            fluidez, ganar confianza al hablar y alcanzar tus metas personales o
            profesionales.
          </p>
        </div>

        <BlueButton value="Ver mas Servicios" onClick={goServices} />
      </div>

      <div className={styles.gridContainer}>
        {dataServices &&
          dataServices.map((service) => {
            if (service.id === 1 || service.id === 2 || service.id === 3) {
              return (
                <ServicesCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              );
            }
            return null;
          })}
      </div>
    </section>
  );
}
