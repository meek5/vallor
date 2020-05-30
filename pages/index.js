import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import Wallet from "../icons/wallet.svg";
import Target from "../icons/target.svg";
import Faster from "../icons/faster.svg";
import Secure from "../icons/secure.svg";
import Deelpay from "../icons/deelpay.svg";
import HomeIllustrator1 from "../public/assets/images/home-illustrator.svg";
import Developer from "../public/assets/images/developer.svg";
import Donor from "../public/assets/images/donor.svg";
import Freelance from "../public/assets/images/freelance.svg";
import Shoper from "../public/assets/images/shoper.svg";
import Entreprise from "../public/assets/images/entreprise.svg";
import Smile from "../public/assets/images/smile.svg";
import PeerTPeer from "../public/assets/images/peertopeer.svg";
import Email from "../icons/email.svg";
import Telephone from "../icons/telephone.svg";
import Location from "../icons/location.svg";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobileDevice = useMediaQuery({ query: "(max-width:767.9px)" });
  const [isPopUpDownload, setisPopUpDownload] = useState(true);
  const [isFloatingBtn, setisFloatingBtn] = useState(false);
  // const togglePopupDownload = () => {
  //   setisPopUpDownload(false);
  // };

  const toggleFoatingBtn = () => {
    setisFloatingBtn(!isFloatingBtn);
  };

const sendMessageTodeelpayTeam =()=>{
  toggleFoatingBtn()
}

  return (
    <div className="">
      <Head>
        <title>Deelpay</title>
        <meta
          name="description"
          content="Deelpay est un portefeuille electronique conçue pour les petits commerces. Deelpay est simple, rapide et sécurisé pour payer en magasin et dans des applications web et mobile. Il facilite également les paiements entre particuliers."
        />
        <meta
          name="keywords"
          content="deelpay,portefeuille,porte-monnaie,electronique,mobile,money,envoi,retrait,dépôt,moyen,paiement,simple,rapide,sécurisé,ewallet,commerce,ecommerce,magasin,agence,cash point,business,api,developpeur"
        />
        <meta name="author" content="Deelpay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Ecran d'acceuil  secrion 1*/}
        <div className="container container-section-home">
          <Row>
            <Col md="6">
              <h1 className="home-title">Deelpay </h1>
              <hr color="#21ce99" align="left" width="20%" />
              <p className="home-message">
                Un portefeuille electronique conçue pour les petits commerces.
                Deelpay est simple, rapide et sécurisé pour payer en magasin et
                dans des applications web et mobile.
              </p>
              <div className="text-left mb-5">
                <button className="btn-home-download px-5 py-2 font-weight-bold">
                  Télécharger
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
                    Accélérer vos payement à une vitesse incroyable.
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
          <h1 className="text-center my-5">À chacun sa part</h1>
          <div className="container">
            <Row className="py-4">
              <Col className="text-right" xs="8" sm="6">
                <h2>Paiement entre particuliers</h2>
                <hr color="#21ce99" align="right" width="10%" />
                <p>
                  Deelpay permet à transférer de l'argent à vos proches sans se
                  prendre la tête. Deelpay facilite également le paiement entre
                  particuliers.
                </p>
              </Col>
              <Col className="" xs="4" sm="6">
                <div className="img-peer-to-peer" />
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right" xs="4" sm="6">
                <div className="img-shoper" />
              </Col>
              <Col className="" xs="8" sm="6">
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
              <Col className="text-right" xs="8" sm="6">
                <h2>Donateur</h2>
                <hr color="#21ce99" align="right" width="10%" />
                <p>
                  Deelpay permet aux personnes de bonne volontée de faire des
                  dons et contribuer à des projets charitatifs plus facilement.
                </p>
              </Col>
              <Col className="" xs="4" sm="6">
                <div className="img-donor" />
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right" xs="4" sm="6">
                <div className="img-freelance" />
              </Col>
              <Col xs="8" sm="6">
                <h2>Matcheur & Freelance</h2>
                <hr color="#21ce99" align="left" width="10%" />
                <p>
                  Deelpay facilite les freelances et matcheurs à recevoir les
                  payements de prestation de service en un click.
                </p>
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right" xs="8" sm="6">
                <h2>Entreprise</h2>
                <hr color="#21ce99" align="right" width="10%" />
                <p>
                  Deelpay permet aux entreprises de tout genre à effectuer des
                  payements et permettre à leurs clients de payer les services
                  ou produits qu'elles offrent.{" "}
                </p>
              </Col>
              <Col xs="4" sm="6">
                <div className="img-entreprise" />
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="text-right" xs="4" sm="6">
                <div className="img-developer" />
              </Col>
              <Col xs="8" sm="6">
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
        <div className="container-business-call py-2">
          <div className="container div-container-business">
            <div className="">
              {!isMobileDevice && <Smile height="280px" width="300px" />}
            </div>
            <div className="div-text-business">
              <h3 className="text-left">
                Votre business,
                <br />
                Votre vie,
                <br />
                Notre sourire!{" "}
                {isMobileDevice && <Smile height="48px" width="55px" />}
              </h3>
              <p className="mb-0 text-white">
                Des nouvelles idées de business grâce à DeelPay.
              </p>
              <p className="text-white">
                Télécharger et créer votre deelpay wallet et jouissez d'un
                service financier adapté à vos besoins du quotidien.
              </p>
            </div>
          </div>
        </div>
        <div className="section-contact py-5" id="contact">
          <div className="container">
            <Row>
              <Col md="6">
                <h3>Nos contacts</h3>
                <hr color="#21ce99" align="left" width="10%" />
                <div className="item-contact py-3">
                  <p className="mb-0">
                    <Email height="18px" width="18px" className="mr-2" />
                    contact@deelpay.com
                  </p>
                </div>
                <div className="item-contact py-3">
                  <p className="mb-0">
                    <Telephone height="18px" width="18px" className="mr-2" />
                    +243825342047
                  </p>
                </div>
                <div className="item-contact py-3">
                  <p className="mb-0">
                    <Location height="18px" width="18px" className="mr-2" />
                    Congo DR, Butembo, Rue Président de la Rép, immeuble KIDUBAI
                    3e niveau
                  </p>
                </div>
                <div className="my-5">
                  <h2 className="text-center">Nos experts vous répondent</h2>
                  {/* <hr color="#21ce99" align="left" width="10%" /> */}
                  <p className="text-center">
                    Notre équipe est à votre disposition pour répondre à vos
                    questions concernant Deelpay.
                  </p>
                </div>
              </Col>
              <Col md="6">
                <div className="col-contact-deelpay">
                  <h3>Laisses-nous un message</h3>
                  <hr color="#21ce99" align="left" width="10%" />
                  <form className="form-contact">
                    <div className="div-input-c mb-3">
                      <label className="font-weight-bold mb-0 p-2">Nom</label>
                      <input type="text" name="name" className="p-2" />
                    </div>
                    <div className="div-input-c">
                      <label className="font-weight-bold mb-0 p-2">Email</label>
                      <input type="email" name="name" className="p-2" />
                    </div>
                    <div className="div-textarea my-3">
                      <label className="font-weight-bold mb-0 p-2">
                        Votre message
                      </label>
                      <textarea name="name" rows="6" className="p-2" />
                    </div>
                    <div className="text-right">
                      <button className="px-5 py-2">Envoyer</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="message-float-btn-container">
          {isFloatingBtn ? (
            <form onSubmit={sendMessageTodeelpayTeam} className="form-message-floating-btn">
              <div className="form-message-header mb-0 px-1 py-2">
                <h4>✍️ Laisses nous un message</h4>
                <button onClick={toggleFoatingBtn} className="ml-3">X</button>
              </div>
              <div className="p-3">
              <div className="div-input-message">
                <label >*Votre email</label>
                <input type="email" className="p-2" required/>
              </div>
              <div className="div-input-message mb-3">
                <label>*Votre message</label>
                <textarea className="p-2" required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="btn-send-message px-4 py-2">Envoyer</button>
              </div>
              </div>
            </form>
          ) : (
            <div className="btn-message" onClick={toggleFoatingBtn}>
              <Email width="48px" height="32px" />
            </div>
          )}
        </div>
        {/* {isMobileDevice && isPopUpDownload && (
          <div className="container-download-popup p-3">
            {/* <div className="div-icon"></div> */}
        {/* <a href="/">
              <div>
                <Deelpay height="48px" width="48px" />
              </div>
            </a>
            <a href="/" className="div-download-text">
              <div className=" ml-2">
                <h6 className="mb-0">Deelpay</h6>
                <p className="mb-0">Télécharger sur playstore</p>
              </div>
            </a>

            <div>
              <button onClick={togglePopupDownload}>x</button>
            </div>
          </div> */}
        {/* )}  */}
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
          padding-top: 30px;
          padding-bottom: 30px;
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

        .img-peer-to-peer {
          height: 200px;
          background-image: url("./assets/images/peertopeer.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: left;
        }

        .img-shoper {
          height: 200px;
          background-image: url("./assets/images/shoper.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: right;
        }

        .img-donor {
          height: 200px;
          background-image: url("./assets/images/donor.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: left;
        }

        .img-freelance {
          height: 200px;
          background-image: url("./assets/images/freelance.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: right;
        }

        .img-entreprise {
          height: 200px;
          background-image: url("./assets/images/entreprise.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: left;
        }

        .img-developer {
          height: 200px;
          background-image: url("./assets/images/developer.svg");
          background-size: contain;
          background-repeat: no-repeat;
          background-attachment: scroll;
          background-position: right;
        }

        .container-business-call {
          background-color: #000;
          font-family: "Maven Pro";
        }
        .div-container-business {
          display: flex;
          align-items: center;
        }
        .div-text-business {
          flex: 1;
        }
        .div-container-business h3 {
          color: #21ce99;
          font-size: 2rem;
          font-weight: bolder;
        }
        .div-container-business p {
          font-size: 1.2rem;
        }
        .section-contact {
          font-family: "Maven Pro";
        }
        .section-contact h3 {
          color: #21ce99;
          font-size: 2rem;
        }
        .section-contact p {
          font-size: 1.2rem;
        }
        .item-contact {
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .col-contact-deelpay {
          display: none;
        }
        @media (min-width: 768px) {
          .col-contact-deelpay {
            display: block;
          }
        }
        .form-contact {
          /* background-color:#21ce99; */
          border-radius: 5px;
        }
        .form-contact button {
          border: none;
          background-color: #3d3d3d;
          font-weight: bold;
          color: #fff;
          border-radius: 5px;
        }
        .form-contact button:hover,
        .form-contact:focus {
          outline: none;
          background-color: #000;
        }
        .form-contact label {
          color: #000;
          background-color: #21ce99;
        }
        .div-input-c {
          display: flex;
        }
        .div-input-c input {
          flex: 1;
          border: 2px solid #21ce99;
          border-radius: 0 5px 5px 0;
        }
        .div-input-c input:focus {
          outline: 1px solid #f9f9f9;
        }
        .div-input-c label {
          border-radius: 5px 0 0 5px;
        }
        .div-textarea {
          display: flex;
          flex-direction: column;
        }
        .div-textarea textarea {
          border: 2px solid #21ce99;
          border-radius: 0 0 5px 5px;
        }
        .div-textarea textarea:focus {
          outline: 1px solid #f9f9f9;
        }
        .div-textarea label {
          border-radius: 5px 5px 0 0;
        }

        .message-float-btn-container {
          position: fixed;
          bottom: 10px;
          right: 10px;
          z-index:200;
          margin-left:10px;
        }

        .btn-message {
          height: 72px;
          width: 72px;
          border-radius: 50%;
          background-color: #fff;
          border: 4px solid #fff;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn-message:hover {
          cursor: pointer;
          background-color: #21ce99;
        }

        .form-message-floating-btn {
          background-color: #21ce99;
          border-radius:10px;
          box-shadow:2px 2px 2px 1px rgba(255,255,255,1);
        }

        .form-message-header{
          display:flex;
          align-items:center;
          border-bottom:2px solid #3d3d3d;
        }
        .form-message-header h4{
          flex:1;
        }
        .form-message-header button{
          border:none;
          background-color:transparent;
          height:22px;
          width:22px;
          border-radius:50%;
        }

        .form-message-header button:hover,
        .form-message-header button:focus{
          outline:none;
          background-color:#fff;
        }
        .form-message-floating-btn .btn-send-message{
          border: none;
          background-color: #3d3d3d;
          font-weight: bold;
          color: #fff;
          border-radius: 5px;

        }
        .form-message-floating-btn .btn-send-message:hover,
        .form-message-floating-btn .btn-send-message:focus{
          background-color:#000;
        }

        .form-message-floating-btn .div-input-message{
          display:flex;
          flex-direction:column;
        }
       .div-input-message label{
         color:#3d3d3d;
         font-weight:bold;
       }
       .div-input-message input,
       .div-input-message textarea{
        border-radius:5px;
        border:none;
        border-bottom:2px solid #fff
       }
       .div-input-message input:focus,
       .div-input-message textarea:focus{
         outline:none;
         border-bottom:2px solid #3d3d3d;
         color:#3d3d3d;
       }
        /* .container-download-popup {
          position: fixed;
          display: flex;
          align-items: center;
          background-color: #000;
          bottom: 0;
          width: 100%;
          z-index: 30;
        }
        .container-download-popup .div-icon {
          height: 48px;
          width: 48px;
          background-color: #21ce99;
          border-radius: 5px;
        }
        .container-download-popup button {
          background-color: #fff;
          border: none;
        }
        .container-download-popup button:hover,
        .container-download-popup button:focus {
          outline: none;
        }
        .div-download-text {
          flex: 1;
        }
        .div-download-text h6 {
          color: #fff;
          font-size: 1.4rem;
        }
        .div-download-text p {
          color: rgba(255,255,255,0.5);
        } */

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
    </div>
  );
}
