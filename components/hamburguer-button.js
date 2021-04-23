import React from 'react'
import Close from "../icons/close1.svg"
import Menu from "../icons/menu2.svg"
function Hamburguerbutton({toggleMobMenu, isMobMenu}) {
    return (
        <div className="hamburguer-btn mr-3" onClick={toggleMobMenu}>
            {/* {!isMobMenu && <div className="btn-bar"/>}
            {!isMobMenu && <div className="btn-bar "/>}
            {!isMobMenu && <div className="btn-bar"/>} */}
            {isMobMenu ? <Close height="40px" width="48px"/>:<Menu height="40px" width="48px"/>}
            <style jsx>{`
                .hamburguer-btn{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:40px;
                    width:48px;
                    padding-top:5px;
                    padding-bottom:5px;
                    padding-left:3px;
                    padding-right:3px
                }
                .hamburguer-btn:hover{
                    cursor:pointer;
                }
                .btn-bar{
                    height:4px;
                    background-color:#000;
                }

            `}
            </style>
        </div>
    )
}

export default Hamburguerbutton
