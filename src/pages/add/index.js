import Layout from "../../components/Layout";
import CoffeeAdd from "../../components/CoffeeAdd/";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Add recipe</title>
      </Head>
      <Layout>
        <CoffeeAdd />
      </Layout>
    </>
  );
}
