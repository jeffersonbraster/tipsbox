import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../style/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
