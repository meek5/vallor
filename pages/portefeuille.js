import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Deelpay from "../icons/deelpay.svg";
import { Row, Col } from "reactstrap";
import TransferMoney from "../icons/transfermoney.svg";
import DepositMoney from "../icons/depositmoney.svg";
import PayMoney from "../icons/paymoney.svg";
import WithdrawMoney from "../icons/withdrawmoney.svg";
import { useMediaQuery } from "react-responsive";
function Portefeuille() {
  const isMobileDevice = useMediaQuery({ query: "(max-width:767.9px)" });

  return (
    <div>
      <Head>
        <title>Portefeuille</title>
      </Head>
      <Layout>
        <div className="container-home-wallet">
          <div className="container my-5">
            <Row>
              <Col>
                {!isMobileDevice && (
                  <div className="container-smile">
                    <div className="image-smile">
                      <img
                        src="./assets/images/smile.JPG"
                        width="90%"
                        height="300px"
                        alt="deelpay sourire"
                        className="img-mob-smile"
                      />
                    </div>
                    <div className="div-bg-img" />
                    <div className="div-circle-1" />
                    <div className="div-circle-2" />
                    <div className="div-circle-3" />
                    <div className="div-circle-4" />
                  </div>
                )}
              </Col>
              <Col md="6">
                <h1>
                  Votre mobile,
                  <br />
                  Votre portefeuille
                </h1>
                <p>
                  Avec Deelpay, chaque utilisateur peut ajouter de l'argent dans
                  son compte par carte bancaire ou depuis une agence Deelpay et
                  gérer son argent sur son téléphone ou son ordinateur avec
                  notre tableau de bord Deelpay.
                </p>
                {isMobileDevice && (
                  <img
                    src="./assets/images/smile.JPG"
                    width="100%"
                    alt="deelpay sourire"
                  />
                )}
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-operations">
          <div className="container">
            <Row>
              <Col>
                <h1 className="text-white">
                  Toutes les opérations sont possibles
                </h1>
                <div className="text-center">
                  {!isMobileDevice && (
                    <img
                      src="./assets/images/smile2.JPG"
                      alt="deelpay operation"
                      width="70%"
                    />
                  )}
                </div>
              </Col>
              <Col md="6">
                <div>
                  <div className="operation-item">
                    <TransferMoney height="48px" width="48px" />
                    <div className="ml-3 operation-info">
                      <h5 className="mb-0">Envoi</h5>
                      <p>Envoyer de l'argent sans complexité.</p>
                    </div>
                  </div>
                  <div className="operation-item">
                    <WithdrawMoney height="48px" width="48px" />
                    <div className="ml-3 operation-info">
                      <h5 className="mb-0">Retrait</h5>
                      <p>Retirer du cash à cas de besoin.</p>
                    </div>
                  </div>
                  <div className="operation-item">
                    <DepositMoney height="48px" width="48px" />
                    <div className="ml-3 operation-info">
                      <h5 className="mb-0">Dépôt</h5>
                      <p>Effectuer les dépôts d'argent à votre compte.</p>
                    </div>
                  </div>
                  <div className="operation-item">
                    <PayMoney height="48px" width="48px" />
                    <div className="ml-3 operation-info">
                      <h5 className="mb-0">Paiement</h5>
                      <p>Payer vos factures en ligne comme en magasin.</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    {isMobileDevice && (
                      <img
                        src="./assets/images/smile2.JPG"
                        alt="deelpay operation"
                        width="100%"
                      />
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container-call-todownload">
          <div className="container text-center">
            <div>
              {/* <Deelpay height="64px" width="64px" className="mb-3" /> */}
              <h2>Commencez dès maintenant à utiliser Deelpay</h2>
              <a href="/">
                <button className="py-3 px-5 mt-4 font-weight-bold">
                  Je démarre à 2 minutes
                </button>
              </a>
              <div className="down-circle-1" />
              <div className="down-circle-2" />
              <div className="down-circle-3" />
              <div className="down-circle-4" />
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container-home-wallet {
          padding-top: 120px;
          padding-bottom: 80px;
          font-family: "Maven Pro";
        }
        @media (max-width: 767.9px) {
          .container-home-wallet {
            padding-top: 60px;
            padding-bottom: 0px;
          }
        }
        .container-home-wallet h1 {
          font-size: 3rem;
          font-weight: bolder;
        }
        .container-home-wallet p {
          font-size: 1.4rem;
        }
        .container-smile {
          position: relative;
        }
        .div-bg-img {
          height: 300px;
          width: 93%;
          background-color: #21ce99;
          position: relative;
          z-index: 250;
          border-radius: 5px;
          top: 30px;
          left: -30px;
        }
        .image-smile {
          height: 280px;
          position: absolute;
          z-index: 300;
          top: 0px;
        }
        img {
          border-radius: 5px;
        }
        .div-circle-1 {
          height: 20px;
          width: 20px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          left: 50px;
          z-index: 320;
        }
        .div-circle-2 {
          height: 20px;
          width: 20px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          top: 100px;
          right: 100px;
          z-index: 330;
        }
        .div-circle-3 {
          height: 20px;
          width: 20px;
          background-color: #21ce99;
          border-radius: 50%;
          position: absolute;
          top: 200px;
          left: 180px;
          z-index: 330;
        }
        .div-circle-4 {
          height: 20px;
          width: 20px;
          background-color: #fff;
          border-radius: 50%;
          position: absolute;
          bottom: -20px;
          left: 15px;
          z-index: 330;
        }
        .section-operations {
          background-color: #000;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .section-operations img {
          border-radius: 5px;
        }
        .section-operations .operation-item {
          display: flex;
        }
        .operation-info h5 {
          color: #fff;
          font-size: 1.6rem;
        }
        .operation-info p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.2rem;
        }

        .container-call-todownload {
          position: relative;
          padding-top: 100px;
          padding-bottom: 100px;
          font-family: "Maven Pro";
        }
        .container-call-todownload h2 {
          font-size: 2rem;
          color: rgba(0, 0, 0, 0.7);
        }
        .container-call-todownload button {
          border: none;
          color: #fff;
          background-color: #3d3d3d;
          border-radius: 30px;
        }
        .container-call-todownload button:hover,
        .container-call-todownload button:focus {
          background-color: #000;
          outline: none;
        }
        .down-circle-1 {
          background-color: #000;
          height: 48px;
          width: 48px;
          position: absolute;
          border-radius: 5px;
          top: -10px;
          left: 50px;
          z-index: 400;
        }
        .down-circle-2 {
          background-color: #fff;
          height: 48px;
          width: 48px;
          position: absolute;
          border-radius: 5px;
          top: -30px;
          left: 70px;
          z-index: 400;
        }
        .down-circle-3 {
          background-color: #fff;
          height: 48px;
          width: 48px;
          position: absolute;
          border-radius: 5px;
          bottom: -30px;
          right: 70px;
          z-index: 410;
        }
        .down-circle-4 {
          background-color: #000;
          height: 48px;
          width: 48px;
          position: absolute;
          border-radius: 5px;
          bottom: -10px;
          right: 50px;
          z-index: 400;
        }
      `}</style>
    </div>
  );
}

export default Portefeuille;
