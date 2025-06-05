import styles from "./title.module.css";
import { TbPointFilled } from "react-icons/tb";

export default function Title({ value }) {
  return (
    <div className={styles.rowContainer}>
      <TbPointFilled />
      <p className={styles.text}>{value}</p>
    </div>
  );
}
