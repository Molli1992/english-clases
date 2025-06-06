import styles from "./reviewsCard.module.css";

export default function ReviewsCard({ desc, name, role }) {
  return (
    <div className={styles.bodyCard}>
      <p className="mainText">{desc}</p>

      <div>
        <h1 className="mainSubTitle" style={{ marginBottom: "10px" }}>
          {name}
        </h1>
        <h3 className={styles.role}>{role}</h3>
      </div>
    </div>
  );
}
