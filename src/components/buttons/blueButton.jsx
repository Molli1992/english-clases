import styles from "./buttons.module.css";

export default function BlueButton({ value, onClick, width }) {
  return (
    <button
      onClick={onClick}
      className={styles.blueButton}
      style={{ width: width ? width : "" }}
    >
      {value}
    </button>
  );
}
