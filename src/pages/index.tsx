import Head from "next/head";
import { LandingPage } from "../components/templates/LandingPage";
const Home = () => {
  const description = "Voleyballový klub Topoľčany";
  return (
    <>
      <Head>
        <title>Volleyball Topoľčany</title>
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
