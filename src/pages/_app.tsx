import { type AppType } from "next/app";

import { trpc } from "(/)/utils/trpc";

import "(/)/styles/globals.css";

import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default trpc.withTRPC(MyApp);
