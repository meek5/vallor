import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { Row, Col, ListGroup } from "reactstrap";
import QuestionAnswer from "../components/question-answer";
import Question from "../public/assets/images/question.svg";

function Faq() {
  return (
    <div>
      <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="Deelpay est un portefeuille electronique conçue pour les petits commerces. Deelpay est simple, rapide et sécurisé pour payer en magasin et dans des applications web et mobile. Il facilite également les paiements entre particuliers."
        />
        <meta name="keywords" content="deelpay,portefeuille,porte-monnaie,electronique,mobile,money,envoi,retrait,dépôt,moyen,paiement,simple,rapide,sécurisé,ewallet,commerce,ecommerce,magasin,agence,cash point,business,api,developpeur" />
        <meta name="author" content="Deelpay" />
      </Head>
      <Layout>
        <div className="welcome-faq-section">
          <div className="container">
            <Row>
              <Col md="6">
                <h1 className="mb-0">Besoin d'une précision?</h1>
                <p className="">
                  Veillez parcourir les questions générales ci-dessous. Si votre
                  question ne trouve pas de solution sur cette page, n'hésitez
                  pas à <a href="/#contact">contacter</a> le service clients.
                </p>
              </Col>
              <Col>
                <Question width="100%" height="300px" />
              </Col>
            </Row>
          </div>
        </div>
        <div className="faq-section">
          <div className="container">
            <ListGroup flush>
              <QuestionAnswer
                question="Comment créer un compte Deelpay ?"
                answer="Pour créer un compte deelpay, il suffit de télécharger  l’application depuis Play store,   accepter les conditions d’utilisation et remplir le formulaire de création de compte qui ne vous prendra que moins de deux minutes."
              />
              <QuestionAnswer
                question="Comment ajouter de l'argent dans mon portefeuille deelpay?"
                answer="Vous pouvez ajouter de l’argent à votre portefeuille auprès de nos agents dans les cashpoints de votre milieu."
              />
              <QuestionAnswer
                question="Y a-t-il un montant min ou max d'argent que je peux ajouter à mon portefeuille deelpay?"
                answer="Oui. Deelpay a un montant minimum et maximum d'argent que vous pouvez ajouter à votre portefeuille selon la catégorie de configuration de votre compte."
              />
              <QuestionAnswer
                question="Comment transférer de l'argent depuis mon portefeuille vers un autre compte deelpay?"
                answer="Pour transférer de l’argent à un autre compte il faut aller dans le menu à haut à gauche de l’application deelpay puis Transfert. Vous pouvez aussi passer par l’onglet wallet en cliquant sur le bouton flottant avec l’icône d’envoi. Il vous faudra fournir le numéro de téléphone de la personne à qui vous voulez envoyer de l’argent ou bien scanner son code QR. Afin il vous faudra préciser le montant à envoyer et la monnaie."
              />
              <QuestionAnswer
                question="Y a-t-il des frais associés à l'envoi d'argent?"
                answer="Avec deelpay le transfert d’argent  d’une personne à une autre est gratuit. Les frais interviennent quand vous voulez retirer du cash depuis votre compte dans un cash point deelpay de votre milieu."
              />
              <QuestionAnswer
                question="Comment peux-je retirer du cash depuis mon portefeuille deelpay?"
                answer="Retirer du cash depuis votre portefeuille en vous rendant dans un cash point deelpay de votre milieu. Vous aurez à supporter les frais de retrait."
              />
              <QuestionAnswer
                question="Comment puis-je payer avec deelpay?"
                answer="Vous pouvez payer avec deelpay dans n’importe quel magasin physique ou boutique en ligne ayant déjà intégrer deelpay comme moyen de paiement. Mais aussi vous pouvez payer les freelances et commerçants ambulants avec votre compte deelpay."
              />
              <QuestionAnswer
                question="Comment savoir si mon portefeuille deelpay est sécurisé?"
                answer="Votre compte deelpay est protégé par  un mot de passe et un code pin que vous et vous seul vous devez connaitre. Evitez donc de partager ces informations au grand public. Si vous avez de problèmes avec votre compte n’hésitez pas à informer le service client pour vous aider. Votre sécurité, notre engagement, votre fidélité."
              />
              <QuestionAnswer
                question="Que dois-je faire si j'ai perdu mon téléphone?"
                answer="Personne ne peut effectuer des transactions dans votre compte sans votre mot de passe et code pin. A cas de perte de votre téléphone, connectez-vous  à votre compte avec un autre téléphone et désactiver les autres appareils connectés avec votre compte deelpay. Si vous avez des problemes contacter les services clients pour vous aider."
              />

              <QuestionAnswer
                question="Comment puis-je intégrer deelpay dans mon business?"
                answer="Pour intégrer deelpay comme moyen de paiement dans votre business il suffit d’avoir un compte deelpay et accepter les conditions d’intégrations. Pour les developpeurs visitez la l'onglet developpeurs.  Pour plus de précisions veillez contacter le service deelpay pour le business."
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
          background-color: #21ce99;
        }
        .welcome-faq-section h1 {
          font-size: 3.5rem;
        }
        .welcome-faq-section p {
          font-size: 1.4rem;
        }
        .welcome-faq-section a {
          color: #fff;
        }
        .faq-section {
          font-family: "Maven Pro";
          padding-top: 20px;
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default Faq;
