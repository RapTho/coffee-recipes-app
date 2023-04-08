import Head from "next/head";
import Script from "next/script";

import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
      <Header className={styles.header} />
      <main className={styles.center}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
}
