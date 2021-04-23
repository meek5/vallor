import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#FFFEFA" />
          <meta name="copyright" content="© vallordev" />
          <link rel="icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            @font-face {
              font-family: "Maven Pro";
              src: local("Maven Pro"), local(MavenPro),
                url("./fonts/MavenPro-Regular.ttf");
              font-display: swap;
            }
            html {
              scroll-behavior: smooth;
            }
            body {
              background-color: #FFFEFA;
              /* FCF6DC */
            }
            body::-webkit-scrollbar-track {
              background-color: #ffffff;
            }

            body::-webkit-scrollbar {
              width: 15px;
              background-color: #000;
            }

            body::-webkit-scrollbar-thumb {
              background: rgb(255,156,7);
              background: linear-gradient(180deg, rgba(255,156,7,1) 0%, rgba(255,205,0,1) 100%);
              border-radius: 10px;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
