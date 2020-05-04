import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Row, Col, ListGroup } from "reactstrap";
import QuestionAnswer from "../components/question-answer"

function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout>
        <div className="welcome-faq-section">
          <div className="container">
              <Row>
                  <Col md="6">

            <h1 className="mb-0">
              Besoin d'une précision?
            </h1>
            <p className="">
              Veillez parcourir les questions générales ci-dessous.
              Si votre question ne trouve pas de solution sur cette page,
              n'hésitez pas à <a href="/#contact">contacter</a> le service
              clients.
            </p>
            </Col>
            <Col>
            </Col>
            </Row>
          </div>
        </div>
        <div className="faq-section">
            <div className="container">
            <ListGroup flush>
            <QuestionAnswer
                question="Comment créer un compte Deelpay ?"
                answer="Dans ce cas vous n'aurez rien à spécifier comme informations, car nous prendrons automatiquement tes informations provenant de Google. Dans tout cas il vous vaudra accepter nos conditions générales d'utilisation ainsi que notre déclaration de confidentialité."
              />
              <QuestionAnswer
                question="Comment créer un compte tayarifood ?"
                answer="Un compte tayarifood nécessite votre nom et un numéro de téléphone valide. Après avoir fourni ces informations, nous vous enverrons un SMS contenant un code de vérification de votre numéro. Vous pouvez également créer un compte à partir de votre compte Google."
              />
            </ListGroup>
            </div>
        </div>
      </Layout>

      <style jsx>{`
        .welcome-faq-section {
          padding-top: 150px;
          padding-bottom: 100px;
          font-family: "Maven Pro";
          background-color:#21ce99;
        }
        .welcome-faq-section h1{
            font-size:3.5rem;
        }
        .welcome-faq-section p{
            font-size:1.4rem;
        }
        .welcome-faq-section a {
          color: #fff;
        }
        .faq-section{
            font-family:"Maven Pro";
            padding-top:20px;
            padding-bottom:20px;
        }
      `}</style>
    </div>
  );
}

export default Faq;
