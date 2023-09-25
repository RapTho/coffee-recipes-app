import Layout from "@/components/Layout";
import CoffeeList from "@/components/CoffeeList/CoffeeList";
import Head from "next/head";
import dbConnect from "@/db/mongoose";
import Recipe from "@/db/models/Recipe";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Recipes treasury</title>
      </Head>
      <Layout>
        <CoffeeList data={data} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect(process.env.MONGODB_URI);

  const result = await Recipe.find({}); // get all recipes

  const recipes = result.map((doc) => {
    return JSON.parse(JSON.stringify(doc));
  });

  return { props: { data: recipes } };
}
