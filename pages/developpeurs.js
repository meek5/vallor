import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Developper from "../public/assets/images/developer.svg";
import { Row, Col } from "reactstrap";

function Developpeurs() {
  return (
    <div>
      <Head>
        <title>Developpeurs</title>
        <meta
          name="description"
          content="Deelpay est un portefeuille electronique conçue pour les petits commerces. Deelpay est simple, rapide et sécurisé pour payer en magasin et dans des applications web et mobile. Il facilite également les paiements entre particuliers."
        />
        <meta name="keywords" content="deelpay,portefeuille,porte-monnaie,electronique,mobile,money,envoi,retrait,dépôt,moyen,paiement,simple,rapide,sécurisé,ewallet,commerce,ecommerce,magasin,agence,cash point,business,api,developpeur" />
        <meta name="author" content="Deelpay" />
      </Head>
      <Layout>
        <div className="container-developpers">
          <div className="container py-5">
            <Row>
              <div className="col-md-5 order-1">
                {" "}
                <Developper height="300px" width="100%" />
              </div>
              <div className="col-md-7 order-md-12">
                <h1>Deelpay pour les developpeurs</h1>
                <hr color="#21ce99" width="20%" align="left" className="line-dev"/>
                <p>
                  L’équipe de développeurs deelpay travaille d’arrache-pied pour
                  mettre au point des APIs, SDKs et documentation deelpay riche à
                  contenu afin de permettre aux autres développeurs d’intégrer
                  deelpay comme moyen de paiement dans des applications web et mobile. Restez
                  connecter nous vous informerons de la sortie de la version
                  stable qui sera bientôt disponible sur <a href="https://developer.deelpay.com/" target="_blank">developer.deelpay.com</a>
                </p>
              </div>
            </Row>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .container-developpers {
          padding-top: 100px;
          padding-bottom: 50px;
          font-family: "Maven Pro";
        }
        
        a{
            color:#21ce99;
        }
        h1{
            font-size:3.5rem;
            font-weight:bolder;
        }
        p{
            font-size:1.2rem;
        }
      `}</style>
    </div>
  );
}

export default Developpeurs;
