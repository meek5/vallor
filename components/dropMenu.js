import React from "react";
import Link from "next/link";

function DropMenu({ isMobMenu, toggleMobMenu }) {
  return (
    <div className={`container-dropmenu p-2 ${isMobMenu && "open"}`}>
      <div className="header-dropmenu px-2">
        <h3 className="mb-0">Menu</h3>
      </div>
      <ul className="mt-3">
        <Link href="/#agence">
          <a>
            <li className="mb-2" onClick={toggleMobMenu}>L'agence</li>
          </a>
        </Link>
        <Link href="/#portfolio">
          <a>
            <li className="mb-2" onClick={toggleMobMenu}>Portfolio</li>
          </a>
        </Link>
        <Link href="/#academie">
          <a>
            <li className="mb-2" onClick={toggleMobMenu}>L'académie</li>
          </a>
        </Link>
        <Link href="/#contact">
          <a>
            <li className="mb-2" onClick={toggleMobMenu}>Contact</li>
          </a>
        </Link>
        <Link href="/#faq">
          <a>
            <li className="mb-2" onClick={toggleMobMenu}>FAQ</li>
          </a>
        </Link>
      </ul>
      <style jsx>{`
        .container-dropmenu {
          font-family: "Maven Pro";
          position: fixed;
          height: 100vh;
          overflow-y:auto;
          width: 100%;
          background-color: #FFFEFA;
          z-index: 999;
          top: 72px;
        }
        .container-dropmenu::-webkit-scrollbar-track {
          background-color: #fff;
        }

        .container-dropmenu::-webkit-scrollbar {
          width: 8px;
          background-color: #fff;
        }

        .container-dropmenu::-webkit-scrollbar-thumb {
          background-color: #21ce99;
        }

       
        h3 {
          font-weight: 500;
          color: #000000;
        }
        .header-dropmenu {
          /* background-color: #f7f8fc; */
          /* background-color: #t; */
          padding-top: 5px;
          padding-bottom: 5px;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.01)
        }

        a {
          color: #4a4a4a;
        }
        a:hover {
          color: #ffcd00;
        }
        ul li {
          font-size: 1.6rem;
        }
       
        @media (min-width: 992px) {
        }
      `}</style>
    </div>
  );
}

export default DropMenu;
