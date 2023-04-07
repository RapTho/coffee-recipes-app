import styles from "./index.module.css";
import Layout from "../components/Layout";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes treasury</title>
      </Head>
      <Layout>
        <Link href="/coffee" className={styles.link}>
          Coffee
        </Link>
        <Link href="/kitchen" className={styles.link}>
          Kitchen
        </Link>
      </Layout>
    </>
  );
}
