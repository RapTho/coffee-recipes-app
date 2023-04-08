import styles from "./Input.module.css";

export default function Input({ label, type, id, name, placeholder, unit }) {
  return (
    <div className={styles.container}>
      <label className={styles.label} for="input">
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <span className={styles.unit}>[{unit}]</span>
    </div>
  );
}
