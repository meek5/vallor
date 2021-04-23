import React, { useState } from "react";

// import Logo from "../icons/logo.svg";
import Menu from "../icons/menu3.svg";
import Close from "../icons/close1.svg"
import { useMediaQuery } from "react-responsive";
import Hamburguerbutton from "./hamburguer-button";
import DropMenu from "./dropMenu";
import Link from "next/link";


const Header = () => {
  const isMobileDivice = useMediaQuery({ query: "(max-width:767.9px)" });
  const [isMobMenu, setisMobMenu] = useState(false);
  const toggleMobMenu = () => {
    setisMobMenu(!isMobMenu);
  };

  return (
    <header className="py-4">
      <div className="container-fluid container-header">
        <Link href="/">
          <a>
            <img className="" src="/assets/images/vallorlogo.png" height="44px"/>
          </a>
        </Link>
        {!isMobileDivice && (
          <nav className="ml-5">
            <ul className="list-menu mb-0 pl-0">
              {/* <a href="/">
                <li className="mb-0">Accueil</li>
              </a>
              <a href="/portefeuille">
                <li>Portefeuille</li>
              </a>
              <a href="/developpeurs">
                <li>Développeurs</li>
              </a>
              <a href="/#contact">
                <li>Contact</li>
              </a>
              <a href="/faq">
                <li>FAQ</li>
              </a> */}
            </ul>
          </nav>
        )}
        <div className="empty-space" />
        {isMobileDivice ? (
          <Hamburguerbutton
            toggleMobMenu={toggleMobMenu}
            isMobMenu={isMobMenu}
          />
        ) : (
          <button className="btn-header-download" onClick={toggleMobMenu}>
            {isMobMenu?<Close height="40px" width="48px"/>:<Menu height="40px"  width="48px"  />}
            {/* Contact */}
          </button>
        )}
      </div>
      {isMobMenu && (
        <DropMenu isMobMenu={isMobMenu} toggleMobMenu={toggleMobMenu}/>
      )}
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          /* box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05); */
          background-color: rgba(255,254,250,0.99);
          z-index: 1000;
        }

        .container-header {
          display: flex;
          align-items: center;
        }
        .empty-space {
          flex: 1;
        }
        .btn-header-download {
          background-color: transparent;
          border: none;
          /* font-weight: 500;
          font-size: 1.2rem;
          border-radius: 25px; */
          /* font-family: "Maven Pro"; */
        }
        .btn-header-download:hover,
        .btn-header-download:focus {
          outline: none;
          /* color: #fff; */
        }
        @media (max-width: 767.9px) {
        }
        .list-menu {
          list-style: none;
          display: flex;
        }
        .list-menu li {
          margin-left: 10px;
          margin-right: 10px;
          font-family: "Maven Pro";
          font-size: 1.2rem;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 700;
        }
        .list-menu a:hover {
          text-decoration: none;
          color:#21ce99;
        }
        .list-menu a:active {
          color:#21ce99;
        }
        .list-menu li:hover {
          color: #21ce99;
        }
      `}</style>
    </header>
  );
};

export default Header;
