import Layout from "../../components/Layout";
import CoffeeRecipe from "../../components/CoffeeRecipe";
import Head from "next/head";

export default function Recipe({ data }) {
  return (
    <>
      <Head>
        <title>Recipe</title>
      </Head>
      <Layout>
        <CoffeeRecipe readOnly data={data} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/v1/getRecipe/?id=${context.query.id}`
  );
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
