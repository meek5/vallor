import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#21ce99" />
            <meta name="copyright" content="© Deelpay" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
        @font-face {
          font-family: "Maven Pro";
          src: local("Maven Pro"), local(MavenPro), url("./fonts/MavenPro-Regular.ttf");
          font-display: swap;
        }
      `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
