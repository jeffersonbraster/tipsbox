import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
} from "next/document";
import Analytics from "../components/Analytics";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-BR">
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
