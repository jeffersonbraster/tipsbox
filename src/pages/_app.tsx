import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../style/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Head>
        <title>Fanime</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Um site de pesquisas em estabelecimentos."
        />
      </Head>
    </>
  );
}

export default MyApp;
