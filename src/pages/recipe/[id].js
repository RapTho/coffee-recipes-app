import Layout from "../../components/Layout";
import CoffeeRecipe from "../../components/CoffeeRecipe";
import Head from "next/head";

export default function Recipe() {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <Layout>
        <CoffeeRecipe />
      </Layout>
    </>
  );
}
