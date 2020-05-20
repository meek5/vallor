import React from "react";
import Twitter from "../icons/twitter.svg";
import Instagram from "../icons/instagram.svg";
import Facebook from "../icons/facebook.svg";
import Linkedin from "../icons/linkedin.svg";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h2 className="footer-title">À propos</h2>
            <hr color="#21ce99" align="left" width="20%" />
            <p>
              Deelpay est une solution porte-monnaie electronique qui facilite
              le payement en magasin et dans des applications partout en RDC.
              Avec deelpay les flux financiers de l'entrepreneur deviennent
              simples et instantanés.
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="footer-title">Développeurs</h6>
            <hr color="#21ce99" align="left" width="20%" />
            <ul className="list-about">
              <a href="/">
                <li>API & Documentation</li>
              </a>
              <a href="/">
                <li>Intégrer deelpay</li>
              </a>
              <a href="/">
                <li>Communauté & Meetup</li>
              </a>
              <a href="/">
                <li>Emplois & Freelance</li>
              </a>
              <a href="/">
                <li>Blog</li>
              </a>
              <a href="/">
                <li>Service clients</li>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="footer-title">Restons connectés</h6>
            <hr color="#21ce99" align="left" width="20%" />
            <p>Inscrivez vous au newsletter</p>
            <form className="mb-4">
              <div className="div-input"><input type="email" placeholder="Votre email" className="p-3 font-weight-bold" /></div>
              <button className="font-weight-bold px-3">S'inscrire</button>
            </form>
            <ul className="list-social-icon pl-0">
              <a href="/">
                <li className="mr-2">
                  <Linkedin height="32px" width="32px" />
                </li>
              </a>
              <a href="/">
                <li className="mx-2">
                  <Facebook height="32px" width="32px" />
                </li>
              </a>
              <a href="/">
                <li className="mx-2">
                  <Instagram height="32px" width="32px" />
                </li>
              </a>
              <a href="/">
                <li className="mx-2">
                  <Twitter height="32px" width="32px" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright py-1 ">
        <div className="container">
          <p className="content text-center mb-0">
            <a href="/">
              <span>Mentions Légales</span>
            </a>{" "}
            -{" "}
            <a href="/">
              <span>Politique de confidentialité</span>
            </a>
            <br />© deelpay 2020 Tous droits réservés.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #000;
        }
        .footer-title {
          font-family: "Maven Pro";
          font-size: 1.4rem;
          font-weight: bolder;
          color: #21ce99;
        }
        .footer form{
            display:flex;
            justify-content:space-between;
            font-family:"Maven Pro"
        }
        form button{
            border: none;
        }
        form button:focus{
            outline:1px solid #21ce99;
        }
        .div-input{
            flex:1;
        }
        .div-input input{
            width:100%;
            border:none
        }
        .div-input input:focus{
            outline: 2px solid #21ce99
        }
        .list-about {
          font-size: 1.2rem;
        }
        p {
          color: #fff;
          font-family: "Maven Pro";
          font-weight: 400;
          font-size: 16px;
        }

        a {
          color: #fff;
          font-family: "Maven Pro";
          font-weight: 400;
          font-size: 16px;
        }
        .list-social-icon {
          list-style: none;
          display: flex;
        }

        .copyright {
          background-color: #262626;
        }
        .copyright .content {
          font-family: "Maven Pro";
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .content a {
          color: #21ce99;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
