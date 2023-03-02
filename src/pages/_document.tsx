import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sk">
      <Head>
        <meta name="description" content="Voleyballový klub topoľčany" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
