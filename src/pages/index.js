import styles from "./index.module.css";
import Layout from "../components/Layout";
import CoffeeList from "../components/CoffeeList/CoffeeList";

import Head from "next/head";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Recipes treasury</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <CoffeeList data={data} />
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/getData`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
