import Layout from "../components/Layout";
import CoffeeAdd from "../components/CoffeeAdd/CoffeeAdd";

import Head from "next/head";

export default function Coffee() {
  return (
    <>
      <Layout>
        <Head>
          <title>Coffee - add</title>
        </Head>
        <CoffeeAdd />
      </Layout>
    </>
  );
}
