import Layout from "../../components/Layout";
import CoffeeAdd from "../../components/CoffeeRecipe";
import Head from "next/head";

export default function AddRecipe() {
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
