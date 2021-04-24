import React from "react";
import Twitter from "../icons/twitter.svg";
import Instagram from "../icons/instagram2.svg";
import Facebook from "../icons/facebook-logo.svg";
import Linkedin from "../icons/linkedin2.svg";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container footer-content py-5">
        <div className="row mt-5">
          <div className="col-md-4">
            <h2 className="footer-title mb-4">Pour qui?</h2>
            {/* <hr color="#ffcd00" align="left" width="20%" /> */}
            <p>
            TPE, PME, Association, Startup, Digital Entrepreneur ... nous apportons toujours des solutions repondant à votre besoin pour une transformation digitale bien organisée. Votre budget est limité ? Vallordev peut vous aider!
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="footer-title mb-4">Secteurs</h6>
            {/* <hr color="#ffcd00" align="left" width="20%" /> */}
            <div className="row">
              <div className="col">
              <ul className="list-about">
                <li>Communication</li>
                <li>E-commerce</li>
                <li>Finance</li>
                <li>Divertissement</li>
                <li>Construction</li>
                {/* <li>Education</li>
                <li>Santé et Environnement</li>
                <li>Transport</li> */}
                {/* <li>Et autres</li> */}
            </ul>
              </div>
              <div className="col">
              <ul className="list-about">
                {/* <li>Communication</li>
                <li>E-commerce</li>
                <li>Finance</li>
                <li>Divertissement</li> */}
                <li>Education</li>
                <li>Santé</li>
                <li>Transport</li>
                <li>Industrie</li>
                <li>Hôtellerie</li>
            </ul>
              </div>
            
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="footer-title mb-4">Restons connectés</h6>
            {/* <hr color="#ffcd00" align="left" width="20%" /> */}
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
            <p>Inscrivez vous au newsletter</p>
            <form className="mb-4">
              <div className="div-input"><input type="email" placeholder="Votre email" className="p-3 font-weight-bold" /></div>
              <button className="font-weight-bold px-3">S'inscrire</button>
            </form>
            
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container pb-5">
          <p className="content  py-2 mb-0">
            <Link href="/">
            <a>
              <span>Mentions légales</span>
            </a>
            </Link>
            <br/>
            {/* -{" "}
            <a href="/">
              <span>Politique de confidentialité</span>
            </a>
            <br />  */}
            © vallordev {new Date().getFullYear()}. Tous droits réservés.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #111111;
          
        }
        .footer .footer-content{
          /* border-top: 2px solid #ffcd00; */
        }
        .footer-title {
          font-family: "Maven Pro";
          font-size: 1.4rem;
          font-weight: bolder;
          color: #FFFEFA;
        }
        .footer form{
            display:flex;
            justify-content:space-between;
            font-family:"Maven Pro";
            box-shadow:0px 0px 10px rgba(0,0,0,0.02);
            border-radius:30px;
        }
        form button{
            border: none;
            color:#FFFEFA;
            background: rgb(255,156,7);
          background: linear-gradient(100deg, rgba(255,156,7,0.9976365546218487) 20%, rgba(255,205,0,1) 100%);
            border-radius:0px 30px 30px 0px;
        }
        form button:focus{
            outline:none;
        }
        .div-input{
            flex:1;
            border-radius:30px 0px 0px 30px;
        }
        .div-input input{
            width:100%;
            border:none;
            border-radius:30px 0px 0px 30px;
        }
        .div-input input:focus{
            outline:none;
        }
        .list-about {
          font-size: 1.2rem;
        }
        ul{
          list-style:none;
          padding:0px;
        }
        li{
          color: #FFFEFA;
          font-family: "Maven Pro";
          font-weight: 500;
          font-size: 16px;
          line-height:28px;
        }
        p {
          color: #FFFEFA;
          font-family: "Maven Pro";
          font-weight: 500;
          font-size: 1rem;
          line-height:28px;
        }

        a {
          color: #000;
          font-family: "Maven Pro";
          font-weight: 400;
          font-size: 16px;
        }
        .list-social-icon {
          list-style: none;
          display: flex;
        }

        .copyright {
          /* background-color: #000000; */
        }
        .copyright .content {
          font-family: "Maven Pro";
          font-size: 0.8rem;
          color: rgba(255,255,255,0.5);
        }
        .content a {
          color: #ffcd00;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
