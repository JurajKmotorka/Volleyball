import Head from "next/head";
import { Header } from "../components/elements/Header";
import { AboutPage } from "../components/templates/AboutPage/Index";

const about = () => {
  //do something about this
  const description = "Volejbalový klub Topoľčany";

  return (
    <>
      <Head>
        <title>Volleyball Topoľčany</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={"Vollejbal Topoľčany | O nás"} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow,all" />
      </Head>
      <Header />
      <AboutPage />
    </>
  );
};

export default about;
