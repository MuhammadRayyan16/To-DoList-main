import React from "react";
import FormSignIn from "../../FormSign-in/FormSignIn";
import "../SignIn/Login.css";
import Btn from "../../Button/Btn";
import BtnLinkX from "../../BtnLink Icon X/BtnLinkX";

const Login = () => {
  return (
    <section className="pageSignIn">
      <section className="boxContentSignIn">
        <BtnLinkX rotaX="/" />
        <h1 className="tituloSignIn">Sign In</h1>
        <FormSignIn />
        <Btn btnTitulo="Sign in" classeBtn="btnLogin" />
      </section>
    </section>
  );
};

export default Login;
