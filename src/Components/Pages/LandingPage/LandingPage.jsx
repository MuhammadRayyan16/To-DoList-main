import React from "react";
import "../LandingPage/LandingPage.css";
import LinkStyle from "../../LinkEstilizado/LinkStyle";
import logotipo_icon from "../../Assets/checklist_rtl.png";
import BtnLink from "../../ButtonLink/BtnLink";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="conteiner-LandingPage">
      <div className="content-LandingPage">
        <div className="header-LandingPage">
          <h1 className="titulo-LandingPage">
            To-do
            <br />
            List
          </h1>
          <div className="logomarca-LandingPage">
            <img src={logotipo_icon} alt="Logo To do List" />
          </div>
        </div>
        <div className="infoTexto-LandingPage">
          <h2 className="infoTexto-LandingPage text">
            remember what you have to do
          </h2>
          <div className="marcador-infoTexto-LandingPage">
            <LinkStyle caminho="/About" contentLink="read about us" />
          </div>
        </div>
        <div className="butoes-LandingPage">
          <BtnLink route="/Login" textLink="Sign in" classe="btn-SignIn" />
          <BtnLink
            route="/SignUp"
            textLink="Create account"
            classe="btn-SignUp"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
