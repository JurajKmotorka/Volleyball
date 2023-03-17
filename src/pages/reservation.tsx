import Head from "next/head";
import { Header } from "../components/elements/Header";
import { ReservationPage } from "../components/templates/ReservationPage";

const reservation = () => {
  //do something about this
  const description = "Volejbalový klub Topoľčany";

  return (
    <>
      <Head>
        <title>Volleyball Topoľčany</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={"Vollejbal Topoľčany | Rezervácie"}
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow,all" />
      </Head>
      <div className="bg-blue-600">
        <Header />
        <ReservationPage />
      </div>
    </>
  );
};

export default reservation;
