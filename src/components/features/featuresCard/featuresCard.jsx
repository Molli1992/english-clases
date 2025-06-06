import styles from "./featuresCard.module.css";
import Image from "next/image";

export default function FeaturesCard({ img, title, desc }) {
  return (
    <div className={styles.body}>
      <Image src={img} alt="Feature" className={styles.img} />
      <h1 className="mainSubTitle">{title}</h1>
      <p className="mainText">{desc}</p>
    </div>
  );
}
