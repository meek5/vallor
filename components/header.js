import React, { useState } from "react";

import Logo from "../icons/logo.svg";
import Download from "../icons/download.svg";
import { useMediaQuery } from "react-responsive";
import Hamburguerbutton from "./hamburguer-button";
import DropMenu from "./dropMenu";

const Header = () => {
  const isMobileDivice = useMediaQuery({ query: "(max-width:767.9px)" });
  const [isMobMenu, setisMobMenu] = useState(false);
  const toggleMobMenu = () => {
    setisMobMenu(!isMobMenu);
  };
  console.log(isMobMenu);
  return (
    <header className="py-3">
      <div className="container-header">
        <a href="/">
          <Logo height="32px" width="40px" className="ml-3" />
        </a>
        {!isMobileDivice && (
          <nav className="ml-5">
            <ul className="list-menu mb-0 pl-0">
              <a href="/">
                <li className="mb-0">Accueil</li>
              </a>
              <a href="/">
                <li>Portefeuille</li>
              </a>
              <a href="/">
                <li>Développeurs</li>
              </a>
              <a href="/">
                <li>Contact</li>
              </a>
              <a href="/">
                <li>FAQ</li>
              </a>
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
          <button className="btn-header-download px-4 py-2 mr-3">
            <Download height="24px" className="mr-2" />
            Télécharger
          </button>
        )}
      </div>
      {isMobMenu && isMobileDivice && (
        <DropMenu isMobMenu={isMobMenu}/>
      )}
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
          background-color: #fff;
          z-index: 100;
        }

        .container-header {
          display: flex;
          align-items: center;
        }
        .empty-space {
          flex: 1;
        }
        .btn-header-download {
          background-color: #21ce99;
          border: none;
          font-weight: bold;
          font-size: 1.2rem;
          border-radius: 25px;
          font-family: "Maven Pro";
        }
        .btn-header-download:hover,
        .btn-header-download:focus {
          outline: none;
          color: #fff;
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
        }
        .list-menu li:hover {
          color: #21ce99;
        }
      `}</style>
    </header>
  );
};

export default Header;
