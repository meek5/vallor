import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <div className="layout">
        <Header />
        <main>{props.children}</main>
        <Footer/>
      </div>
      <style jsx>{`
      .layout {
        scroll-behavior: smooth;
        background-color: #FFFEFA;
        height:100vh;
        overflow-y:auto;
      }
      
      .layout::-webkit-scrollbar-track {
        background-color: #ffffff;
      }

      .layout::-webkit-scrollbar {
        width: 15px;
        background-color: #000;
      }

      .layout::-webkit-scrollbar-thumb {
        background: rgb(255,156,7);
        background: linear-gradient(180deg, rgba(255,156,7,1) 0%, rgba(255,205,0,1) 100%);
        border-radius: 10px;
      }
      `
        }
      </style>
    </div>
  );
};

export default Layout