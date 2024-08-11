import React from "react"
import "../Signup/Signup.css"
import { Link } from "react-router-dom"
import Form from "../../Formulario/Form";
import Btn from "../../Button/Btn";
import BtnLinkX from "../../BtnLink Icon X/BtnLinkX";


// import visibility_icon from '../Assets/visibility.png'
// import visibilityoff_icon from '../Assets/visibility_off.png'

export const Signup = () => {
  return (
    <section className="page-signUp">    
      <section className="container-signUp">
        <BtnLinkX rotaX="/"/>
        <h2 className="subtitulo-signUp">
          Sign Up
        </h2>
        <Form />
        <div className="butoes-signUp">
          <Btn btnTitulo="Create account" classeBtn="btn-signUp"/>
        </div>
      </section>
    </section>
  );
};

export default Signup
