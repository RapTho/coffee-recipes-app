import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import CoffeeRecipe from "../../components/CoffeeRecipe";
import Head from "next/head";

export default function Recipe() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <Layout>
        <CoffeeRecipe readOnly id={router.query.id} />
      </Layout>
    </>
  );
}
