import Head from "next/head";
import styles from "./Layout.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children, home }) {
  const defaultTitle = "Recipes treasury";
  const router = useRouter();

  return (
    <div className={styles.main}>
      <Head>
        <meta
          name="description"
          content="App to store either coffee or meal recipes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={defaultTitle} />
      </Head>
      <header className={styles.header}>
        {!(router.pathname === "/") && <Link href="/">← Back to home</Link>}
      </header>
      <main className={styles.center}>{children}</main>
    </div>
  );
}
