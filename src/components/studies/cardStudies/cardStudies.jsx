import styles from "./cardStudies.module.css";

export default function CardStudies({ title, desc }) {
  return (
    <div className={styles.body}>
      <h1 className="mainSubTitle">{title}</h1>
      <div className={styles.separator} />
      <p className="mainText">{desc}</p>
    </div>
  );
}
