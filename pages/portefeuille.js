import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

function Portefeuille() {
  return (
    <div>
      <Head>
        <title>Portefeuille</title>
      </Head>
      <Layout>
        <div className="container-home-wallet">
          <h1>Votre portefeuille</h1>
        </div>
      </Layout>
      <style jsx>{`
        .container-home-wallet {
            padding-top:100px;
        }
      `}</style>
    </div>
  );
}

export default Portefeuille;
