import Head from "next/head";
import { LandingPage } from "../components/templates/LandingPage";

const Home = () => {
  const description = "Volejbalový klub Topoľčany";
  return (
    <>
      <Head>
        <title>Volejbal Topoľčany</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={"Volleyball Topoľčany"} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow,all" />
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
