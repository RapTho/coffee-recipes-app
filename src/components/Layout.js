import Head from "next/head";

import { Content, Theme } from "@carbon/react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  const defaultTitle = "Recipes treasury";
  return (
    <>
      <Head>
        <meta
          name="description"
          content="App to store either coffee or meal recipes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={defaultTitle} />
      </Head>
      <Theme theme="white">
        <Header />
      </Theme>
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
