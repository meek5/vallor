import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Row, Col } from "reactstrap";
import Target from "../icons/team.svg";
import Faster from "../icons/digital.svg";
import Secure from "../icons/performance.svg";
import HomeIllustrator1 from "../public/assets/images/home-illustrator3.svg";
import Email from "../icons/email.svg";
import Telephone from "../icons/telephone.svg";
import Location from "../icons/location.svg";
import Question from "../components/question-answer";
import ListGroup from "reactstrap/lib/ListGroup";

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Vallordev - Votre agence web créative basée en RDC</title>
        <meta
          name="description"
          content="Vallordev est une agence web digitale basée en RDC spécialisée dans la création des applications mobiles sur mesure, des sites internet et du contenu créative qui captent l’attention et surtout qui génèrent des résultats."
        />
        <meta
          name="keywords"
          content="vallordev,vallor,vallor.dev,agence digital,créative,Web,Marketing digital"
        />
        <meta name="author" content="vallordev" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        {/* Ecran d'acceuil  secrion 1*/}
        <div className="container container-section-home">
          <Row>
            <Col md="6">
              <h1 className="home-title">
                L'agence web, créative et innovante
              </h1>
              <div className="text-left mb-5">
                <Link href="/#contact">
                  <a>
                    <button className="btn-home-download mt-3 px-5 font-weight-normal">
                      Créons ensemble
                    </button>
                  </a>
                </Link>
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
        <div className="about-section py-5" id="agence">
          <div className="container">
            <h1 className="text-left my-5">L'agence</h1>
            <div className="row">
              <div className="col-md-8">
                <p className="about-agency text-left">
                  Vallordev est une agence web digitale basée en RDC spécialisée
                  dans la création des applications mobiles sur mesure, des
                  sites internet et du contenu créative qui captent l’attention
                  et surtout qui génèrent des résultats.
                </p>
                <p className="about-agency text-left">
                  Une équipe qui fait ce qu’elle sait faire le mieux. Nous
                  sommes des développeurs et designers engagés autour de la
                  passion, de l'innovation et de la performance. Nous détectons
                  rapidement vos besoins et les faisons correspondre avec des
                  bonnes ressources pour la réussite de votre transformation
                  digitale.
                </p>
                <p className="about-agency">
                  Pour toute prestation, nous offrons une tarification juste et
                  des prix compétitifs. Ensemble nous respectons votre budget
                  sans sacrifier la qualité.
                </p>
                <Link href="/#prestations">
                  <a>
                    <button className=" px-5 my-5">Nos prestations</button>
                  </a>
                </Link>
              </div>
              <div className="col-md-4">
                {/* <h2 className="mb-3">En valeur</h2> */}
                <div className="value-item mb-4">
                  <Target height="64px" width="80px" />
                  <div className="text-content ml-3">
                    <h3 className="text ">Passion</h3>
                    <p className="mb-0">
                      Vallordev, c’est avant tout une équipe soudée autour d'une
                      mission ponctuée de confiance et de passion.
                    </p>
                  </div>
                </div>
                <div className="value-item mb-4">
                  <Faster height="60px" width="80px" />
                  <div className="text-content ml-3">
                    <h3 className="text-">Innovation</h3>
                    <p className="mb-0">
                      Chaque jour est pour nous l'occasion de créer, d'innover,
                      d'imaginer et de révolutionner des projets.
                    </p>
                  </div>
                </div>
                <div className="value-item mb-4">
                  <Secure height="60px" width="80px" />
                  <div className="text-content ml-3">
                    <h3 className="text-">Performance</h3>
                    <p className="mb-0">
                      Nous détectons rapidement vos besoins et les faisons
                      correspondre avec des bonnes ressources pour votre
                      réussite.
                      {/* Nous communiquons avec nos clients de manière transparente
                      et directe dès le début de chaque projet. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container container-services py-5" id="prestations">
          <div>
            <h1 className="my-5">
              N’attendez plus,
              <br />
              notre agence web est là pour vous
            </h1>
          </div>
          <div className="row pt-5">
            <div className="col-md-4 mb-2">
              <div className="service-card">
                <img
                  src="/assets/images/setting.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">Création et refonte de site internet</h4>
                  <p>
                    Site vitrine ou e-commerce, faites appel à notre agence web
                    pour la création de votre site internet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-2">
              <div className="service-card">
                <img
                  src="/assets/images/designer.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">Web Design</h4>
                  <p>
                    Le WebDesign (UX & UI Design), l’art de présenter de manière
                    simple les choses les plus complexes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="service-card">
                <img
                  src="/assets/images/coding.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">Développement</h4>
                  <p>
                    Les besoins spécifiques de développement sont étudiés par
                    nos équipes. Nous pouvons donc évaluer vos demandes et vous
                    conseiller au mieux.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="service-card">
                <img
                  src="/assets/images/vector.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">
                    Création logo, identité visuelle, charte graphique
                  </h4>
                  <p>
                    Démarquez-vous de vos concurrents et soignez votre image de
                    marque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="service-card">
                <img
                  src="/assets/images/digital-marketing.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">Marketing digital</h4>
                  <p>
                    Rendez vous plus visible ! Augmentez la notoriété de votre
                    marque avec le web marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="service-card mb-5">
                <img
                  src="/assets/images/online-learning.svg"
                  alt=""
                  width="92"
                  height="72px"
                />
                <div className="card-content ml-3">
                  <h4 className="">Formation</h4>
                  <p>
                    Du développement web/mobile pour tous les profils qui
                    démontrent une forte motivation à apprendre, désapprendre et
                    réapprendre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ecran expert et contact */}
        <div className="portfolio-section py-5" id="portfolio">
          <div className="container my-5">
          <h1 className="text-center mb-0">Portfolio</h1>
          {/* Notre réussite passe par la vôtre! */}
            <p className="text-center mb-5">Dernières réalisations </p>
            <div className="row">
              <div className="col-md-6">
              <img src="/assets/images/bisimbi.jpg" width="100%" className="mb-2"/>
              <h5 className="text-center text-white my-3">bisimbi</h5>
              </div>
              <div className="col-md-6">
                <img src="/assets/images/tayarifood.jpg" width="100%" className="mb-2"/>
                <h5 className="text-center text-white my-3">Tayarifood</h5>
              </div>
              <div className="col-md-6">
              <img src="/assets/images/vyengi.jpg" width="100%" className="mb-2"/>
              <h5 className="text-center text-white my-3">Vyengi</h5>
              </div>
              <div className="col-md-6">
              <img src="/assets/images/vallordev.jpg" width="100%" className="mb-2"/>
              <h5 className="text-center text-white my-3">Vallordev</h5>
              <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-section py-5" id="faq">
          <div className="container">
            <h1 className="text-left my-5 ">Faq</h1>
            <div className="row">
              <div className="col-md-12">
                <ListGroup>
                  <Question
                    question="Pourquoi faire appel à notre agence web?"
                    answer="Vous souhaitez lancer votre site web ou une application ? Notre agence peut vous accompagner dans votre projet.
              Nous utilisons tous les outils disponibles pour offrir des solutions de qualité à nos clients.
              À l’écoute de vos attentes, nous mettrons tout en œuvre pour effectuer un suivi de votre projet et lui offrir une optimisation fiable à long terme."
                  />
                  <Question
                    question="Combien de temps prend la réalisation d'un projet?"
                    answer="Délais courts pour les tâches simples, échéanciers plus longs pour les plus gros projets."
                  />
                  <Question
                    question="Quels sont nos tarifs horaires?"
                    answer="Nous offrons une tarification juste et des prix compétitifs. Ensemble nous respectons votre budget sans sacrifier la qualité."
                  />
                  <Question
                    question="Avez-vous une question concernant notre agence?"
                    answer="Pour toute question, veuillez nous écrire depuis la section nos contacts ci-dessous. Notre équipe n'hésitera pas à vous répondre."
                  />
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="academy-section py-5" id="academie">
          <div className="container my-5">
          <h1 className="text-center mb-0">L'académie</h1>
            <p className="text-center mb-2">Apprendre, Désapprendre et
                    Réapprendre</p>
            <div className="row mt-5">
              <div className="col-md-6">
                <img src="/assets/images/students.jpg" width="100%" className="mb-4"/>
              </div>
              <div className="col-md-6">
              <p>
                  L’équipe Vallordev travaille d’arrache-pied pour
                  mettre au point une académie, un lieu pour apprendre, désapprendre et réapprendre.
                  Du développement web/mobile, du UX/UI, du marketing digital pour tous les profils qui démontrent une forte motivation
                  à atteindre l'excellence pour une ouverture à des nouvelles portes d'opportunités. Restez
                  connecter, nous vous informerons de l'ouverture
                  de la plateforme vallordev academy qui sera bientôt disponible sur <a href="https://academy.vallor.dev/" target="_blank">academy.vallor.dev</a>
                </p>
                <div className="text-left my-5">
                <Link href="https://academy.vallor.dev/">
                  <a target="_blank">
                    <button className="btn-home-download mt-3 px-5 font-weight-normal">
                      Formations
                    </button>
                  </a>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-contact py-5" id="contact">
          <div className="container">
            <h1 className="mt-5 mb-4">Contacts</h1>
            <Row>
              <Col md="12">
                <div className="item-contact pb-3 pt-2">
                  <p className="mb-0">
                    <Email height="18px" width="18px" className="mr-2" />
                    contact@vallor.dev
                  </p>
                </div>
                <div className="item-contact py-3">
                  <p className="mb-0">
                    <Telephone height="18px" width="18px" className="mr-2" />
                    +243978308679
                  </p>
                </div>
                <div className="item-contact py-3">
                  <p className="mb-0">
                    <Location height="18px" width="18px" className="mr-2" />
                    Congo DR, Butembo, Rue Président de la Rép, immeuble KIDUBAI
                    3e niveau
                  </p>
                </div>
                <div className="pb-5 mt-4">
                  <p className="mb-5">
                    Notre équipe est à votre disposition pour répondre à vos
                    questions et préoccupations.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .container-section-home {
          font-family: "Maven Pro";
          height: 700px;
          display: flex;
          align-items: center;
          padding-top: 150px;
          padding-bottom: 50px;
          background-color:#FFFEFA;
        }
        .home-title {
          font-weight: bolder;
          color: rgba(0, 0, 0, 0.8);
          font-size: 5rem;
        }
        .home-message {
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 40px;
        }
        .btn-home-download {
          border: none;
          background: rgb(255,156,7);
          background: linear-gradient(100deg, rgba(255,156,7,0.9976365546218487) 20%, rgba(255,205,0,1) 100%);
          color:#FFFEFA;
          padding-top:15px;
          padding-bottom:15px;
          font-size: 1.2rem;
          font-weight: 100;
          border-radius:30px;
        }
        .btn-home-download:hover,
        .btn-home-download:focus {
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
          color: #FFFFFF;
          outline: none;
        }

        .about-section {
          background: rgb(255,156,7);
          background: linear-gradient(72deg, rgba(255,156,7,1) 50%, rgba(255,205,0,1) 100%);
          font-family: "Maven Pro";
         
        }
        .about-section h1 {
          font-size: 4rem;
        }
        .about-section h3 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .about-section p {
          /* font-size: 1.2rem; */
        }
        .about-section .value-item {
          display: flex;
        }
        .about-section .text-content {
          flex: 1;
        }
        .container-about-agency {
          font-family: "Maven Pro";
          /* background-color: #ffcd00; */
         
        }
        .container-about-agency h1 {
          font-size: 4rem;
        }
        .about-agency {
          font-size: 1.3rem;
        }
        .about-section button {
          background: rgb(14,32,26);
          background: linear-gradient(90deg, rgba(14,32,26,1) 20%, rgba(60,49,4,1) 100%);
          border: none;
          font-weight: 600;
          padding-top:15px;
          padding-bottom:15px;
          color: #fff;
          border-radius:30px;
        }
        .about-section button:hover,
        .about-section button:focus {
          outline: none;
        }
        .container-services {
          font-family: "Maven Pro";
          background-color:#FFFEFA;
        }
        .container-services h1 {
          font-size: 4rem;
          font-weight: bolder;
        }
        .container-services h4 {
          font-weight: bold;
        }
        .service-card {
          display: flex;
        }
        .service-card .card-content {
          flex: 1;
        }
        .service-card .card-content p {
          font-size: 1.2rem;
        }
        .section-possibilities {
          font-family: "Maven Pro";
        }
        .section-possibilities h1 {
          font-size: 4rem;
        }
        .section-possibilities h2 {
          color: #ffcd00;
          font-weight: 500;
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

        .portfolio-section {
          background-color: #2B89A5;
          font-family: "Maven Pro";
        }
        .portfolio-section h1 {
          font-size: 4rem;
          color: #fff;
        }
        .portfolio-section p {
          color: #fff;
          font-size:1.2rem;
        }
        .portfolio-section img{
          border-radius:30px;
        }
        .portfolio-section h5{
          font-size:1.8rem;
        }

        .faq-section {
          font-family: "Maven Pro";
          background-color: #fffefa;
          /* FCF6DC */
          /* f4f3e9 */
        }
        .faq-section h1 {
          font-size: 4rem;
        }

        .academy-section {
          background-color: #0E201A;
          font-family: "Maven Pro";
        }
        .academy-section h1 {
          font-size: 4rem;
          color: #fff;
        }
        .academy-section p {
          color: #fff;
          font-size:1.2rem;
        }
        .academy-section a{
          color:#ffcd00;
        }
        .academy-section img{
          border-radius:30px
        }


        .section-contact {
          font-family: "Maven Pro";
          background-color: #fffefa;
        }
        .section-contact h1 {
          font-size: 4rem;
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
          z-index: 200;
          margin-left: 10px;
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
          box-shadow: 1px 2px 3px #3d3d3d;
        }

        .form-message-floating-btn {
          background-color: #21ce99;
          border-radius: 10px;
          box-shadow: 2px 2px 2px 1px rgba(255, 255, 255, 1);
        }

        .form-message-header {
          display: flex;
          align-items: center;
          border-bottom: 2px solid #3d3d3d;
        }
        .form-message-header h4 {
          flex: 1;
        }
        .form-message-header button {
          border: none;
          background-color: transparent;
          height: 22px;
          width: 22px;
          border-radius: 50%;
        }

        .form-message-header button:hover,
        .form-message-header button:focus {
          outline: none;
          background-color: #fff;
        }
        .form-message-floating-btn .btn-send-message {
          border: none;
          background-color: #3d3d3d;
          font-weight: bold;
          color: #fff;
          border-radius: 5px;
        }
        .form-message-floating-btn .btn-send-message:hover,
        .form-message-floating-btn .btn-send-message:focus {
          background-color: #000;
        }

        .form-message-floating-btn .div-input-message {
          display: flex;
          flex-direction: column;
        }
        .div-input-message label {
          color: #3d3d3d;
          font-weight: bold;
        }
        .div-input-message input,
        .div-input-message textarea {
          border-radius: 5px;
          border: none;
          border-bottom: 2px solid #fff;
        }
        .div-input-message input:focus,
        .div-input-message textarea:focus {
          outline: none;
          border-bottom: 2px solid #3d3d3d;
          color: #3d3d3d;
        }

        @media (max-width: 767.9px) {
          .container-section-home {
            height: auto;
          }
          .div-illustrator {
            margin-bottom: -170px;
          }
          .about-section {
            padding-top: 180px;
            padding-bottom: 30px;
          }
          .container-services h1 {
            font-size: 2rem;
            font-weight: bolder;
          }

          @media (max-width: 567.9px) {
            .home-title {
              font-size: 4rem;
            }
            .div-illustrator {
              margin-bottom: -200px;
            }
            .about-section {
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
