import React from 'react'
import Download from "../icons/download.svg";

function DropMenu({isMobMenu}) {
    return (
        <div className={`container-dropmenu p-2 ${isMobMenu && "open"}`}>
            <div className="header-dropmenu px-2">
                <h3 className="mb-0">Menu</h3>
            </div>
            <ul className="mt-3">
                <a href="/"><li className="mb-2">Accueil</li></a>
                <a href="/"><li className="mb-2">Portefeuille</li></a>
                <a href="/"><li className="mb-2">Développeurs</li></a>
                <a href="/"><li className="mb-2">Contact</li></a>
                <a href="/"><li className="mb-2">FAQ</li></a>
            </ul>
            <div className="text-center mt-5">
            <a href="/"><button className="px-5 py-2"><Download height="24px" className="mr-2" />Télécharger l'app</button></a>
            </div>
            <style jsx>{`
                .container-dropmenu{
                    font-family:"Maven Pro";
                    position:fixed;
                    height:100vh;
                    width:100%;
                    background-color:#fff;
                    z-index:50;
                    top:72px;
                    transition: transform 0.6s ease-out;
                    transform: translateX(-100%);
                }
                .container-dropmenu.open{
                    transform: translateX(0);
                }
                h3{
                    font-weight:bolder;
                    color:#000;
                }
                .header-dropmenu{
                    background-color:#f7f8fc;
                    padding-top:5px;
                    padding-bottom:5px;
                }

                a{
                    color:#4a4a4a;
                }
                a:hover{
                    color: #21ce99;
                }
                ul li{
                    font-size:1.6rem
                }
                button{
                    background-color:#21ce99;
                    color:#000;
                    border:none;
                    font-size:1.4rem;
                    font-weight:bold;
                    border-radius:25px;
                }
                button:hover,
                button:focus{
                    outline:none;
                    background-color:#00bfa5;
                }
                @media (min-width: 992px){
}
            `}</style>
        </div>
    )
}

export default DropMenu
