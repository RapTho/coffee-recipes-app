import styles from "../index.module.css";
import Layout from "../../components/Layout";

import Head from "next/head";
import Link from "next/link";

export default function Coffee() {
  return (
    <>
      <Layout>
        <Head>
          <title>Coffee</title>
        </Head>
        <div className={styles.container}>
          <Link href="/coffee/add" className={styles.link}>
            Add
          </Link>
          <Link href="/coffee/list" className={styles.link}>
            List
          </Link>
        </div>
      </Layout>
    </>
  );
}
