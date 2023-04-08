import styles from "./Footer.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Designed by{" "}
        <Link href="https://linkedin.com/in/raphael-tholl">Raphael Tholl</Link>
      </p>
    </footer>
  );
}
