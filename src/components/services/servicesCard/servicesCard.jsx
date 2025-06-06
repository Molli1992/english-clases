import styles from "./servicesCard.module.css";

export default function ServicesCard({ icon, title, desc }) {
  return (
    <div className={styles.body}>
      <div className={styles.icon}>{icon}</div>

      <h1 className="mainSubTitle">{title}</h1>
      <p className="mainText">{desc}</p>
    </div>
  );
}
