import styles from "./Header.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      {!(router.pathname === "/") && <Link href="/">← Back to home</Link>}
    </header>
  );
}
