import Head from "next/head";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import Wallet from "../icons/wallet.svg";
import Target from "../icons/target.svg";
import Faster from "../icons/faster.svg";
import Secure from "../icons/secure.svg";
import HomeIllustrator1 from "../public/assets/images/home-illustrator.svg";
import Developer from "../public/assets/images/developer.svg";
import Donor from "../public/assets/images/donor.svg";
import Freelance from "../public/assets/images/freelance.svg";
import Shoper from "../public/assets/images/shoper.svg";
import Entreprise from "../public/assets/images/entreprise.svg";
import {useMediaQuery} from "react-responsive"

export default function Home() {
  const isMobileDevice = useMediaQuery({query:"(max-width:767.9px)"})
  return (
    <div className="">
      <Head>
        <title>Deelpay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Ecran d'acceuil  secrion 1*/}
        <div className="container container-section-home">
          <Row>
            <Col md="6">
              <h1 className="home-title">
                Deelpay{" "}
                <Wallet className="wallet-icon" width="64px" height="64" />
              </h1>
              <hr color="#21ce99" align="left" width="20%" />
              <p className="home-message">
                Un portefeuille electronique conçue pour le commerce local.
                Deelpay est simple, rapide et sécurisé pour payer en magasin et
                dans des applications web et mobile.
              </p>
              <div className="text-left mb-5">
                <button className="btn-home-download px-5 py-2 font-weight-bold">
                  Télécharger l'application
                </button>
              </div>
            </Col>
            <Col md="6">
              <div className="div-illustrator">
                <HomeIllustrator1 width="100%" height="350px" />
              </div>
            </Col>
          </Row>
        </div>
        {/* ecran caracteristique de Deelpay */}
        <div className="container-features">
          <div className="container">
            <Row>
              <Col md="4">
                <div className="text-center">
                  <Target height="100px" width="120px" />
                  <h3 className="text-white">Simple</h3>
                  <p className="mb-0">
                    Simplifier et automatiser votre business, votre vie.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="text-center">
                  <Faster height="100px" width="120px" />
                  <h3 className="text-white">Rapide</h3>
                  <p className="mb-0">
                    Accélérer vos payement à une vitesse de lumière.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="text-center">
                  <Secure height="100px" width="120px" />
                  <h3 className="text-white">Sécurisé</h3>
                  <p className="mb-0">
                    Votre sécurité, notre engagement, votre fidelité.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* Ecran possibilities (Commercant, developpeur, entreprise, freelance, donateur) */}
        <div className="py-3 section-possibilities">
          <h1 className="text-center">À chacun sa part</h1>
          <div className="container">
            <Row className="py-4">
              <Col className="text-right">
                <Shoper width={isMobileDevice?"100%":"50%"} height="200px" />
              </Col>
              <Col className="">
                <h2>Commerçant</h2>
                <hr color="#21ce99" align="left" width="10%" />
                <p>
                  Deelpay permet aux entrepreneurs commerçant de recevoir des
                  payements en magasin physique ou dépuis des boutiques en
                  ligne.
                </p>
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right">
                <h2>Donateur</h2>
                <hr color="#21ce99" align="right" width="10%" />
                <p>
                  Deelpay permet aux personnes de bonne volontée de faire des
                  dons et contribuer à des projets charitatifs plus facilement.
                </p>
              </Col>
              <Col className="">
                <Donor width={isMobileDevice?"100%":"50%"} height="200px" />
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right">
                <Freelance width={isMobileDevice?"100%":"50%"} height="200px" />
              </Col>
              <Col>
                <h2>Matcheur & Freelance</h2>
                <hr color="#21ce99" align="left" width="10%" />
                <p>
                  Deelpay facilite les freelances et matcheurs à recevoir les
                  payements de prestation de service en un click. Deelpay
                  facilite aussi les règlements de compte entre particuliers.
                </p>
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right">
                <h2>Entreprise</h2>
                <hr color="#21ce99" align="right" width="10%" />
                <p>
                  Deelpay permet aux entreprises de tout genre à effectuer des
                  payements et permettre à leurs clients de payer les services
                  ou produits qu'elles offrent.{" "}
                </p>
              </Col>
              <Col>
                <Entreprise
                  width={isMobileDevice?"100%":"50%"}
                  height="200px"
                />
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right">
                <Developer width={isMobileDevice?"100%":"50%"} height="200px" />
              </Col>
              <Col>
                <h2>Développeur</h2>
                <hr color="#21ce99" align="left" width="10%" />
                <p>
                  Deelpay met à la disposition des développeurs des API faciles
                  à intégrer dans des applications web et mobile.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        {/* Ecran expert et contact */}
        <div className="container-expert-contact">
          <h1 className="text-center text-white">Nos experts sont là pour vous guider</h1>
          <div className="container">

          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container-section-home {
          font-family: "Maven Pro";
          height: 600px;
          display: flex;
          align-items: center;
          padding-top: 150px;
          padding-bottom: 50px;
        }
        .home-title {
          font-weight: bolder;
          color: rgba(0, 0, 0, 0.8);
          font-size: 5rem;
        }
        .home-message {
          font-size: 1.4rem;
        }
        .btn-home-download {
          border: 2px solid #21ce99;
          background-color: #fff;
          color: #21ce99;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.15);
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .btn-home-download:hover,
        .btn-home-download:focus {
          border: 2px solid #00bfa5;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
          color: #00bfa5;
          outline: none;
        }

        .container-features {
          background-color: #21ce99;
          font-family: "Maven Pro";
          padding-top:30px;
          padding-bottom:30px;
        }
        .container-features h3 {
          font-size: 2.4rem;
        }
        .container-features p {
          font-size: 1.2rem;
        }
        .section-possibilities {
          font-family: "Maven Pro";
        }
        .section-possibilities h1 {
          font-size: 4rem;
        }
        .section-possibilities h2 {
          color: #21ce99;
        }
        .section-possibilities p {
          font-size: 1.2rem;
        }
        
        .container-expert-contact{
          background-color:#000;
        }

        @media (max-width: 767.9px) {
          .container-section-home {
            height: auto;
          }
          .div-illustrator {
            margin-bottom: -170px;
          }
          .container-features {
            padding-top: 180px;
            padding-bottom: 30px;
          }

          @media (max-width: 567.9px) {
            .home-title {
              font-size: 4rem;
            }
            .div-illustrator {
              margin-bottom: -200px;
            }
            .container-features {
              padding-top: 150px;
            }
            .wallet-icon {
              height: 32px;
              width: 32px;
              background-color: green;
            }
          }
        }
      `}</style>
      <style jsx global>{`
        @font-face {
          font-family: "Maven Pro";
          src: url("/fonts/MavenPro-Regular.ttf");
          font-display: swap;
        }
      `}</style>
    </div>
  );
}
