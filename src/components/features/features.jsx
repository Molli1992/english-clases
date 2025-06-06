import styles from "./features.module.css";
import FeaturesCard from "./featuresCard/featuresCard";
import Title from "../title/title";
import { dataFeatures } from "@/data/featuresData";

export default function Features() {
  return (
    <div className={`${styles.body} padding`}>
      <div className={`${styles.container} width`}>
        <div className={styles.textContainer}>
          <Title value="camino al exito" />
          <h1 className="mainTitle">
            Ayudo a las personas a comprender cuestiones como...
          </h1>
        </div>

        <div className={styles.gridContainer}>
            {dataFeatures && dataFeatures.map((data) => {
                return (
                    <FeaturesCard key={data.id} img={data.img} title={data.title} desc={data.desc}/>
                )
            })}
        </div>
      </div>
    </div>
  );
}
