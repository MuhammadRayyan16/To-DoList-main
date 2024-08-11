import React from "react";
import "../About/About.css";
import MembroEquipe from "../../Equipe/MembroEquipe";
import BtnLinkX from "../../BtnLink Icon X/BtnLinkX";

const About = () => {
  return (
    <section className="conteiner-About">
      <div className="contentBox-About">
        <BtnLinkX rotaX="/" />
        <h1 className="titulo-about">About</h1>
        <p className="paragrafo-About">
          A to-do list is a practical tool for organizing tasks. <br />
          You can create a list of things you need to do and mark them as
          completed once finished. <br />
          It’s a straight forward way to stay organized and manage your
          responsibilities efficiently.
        </p>
        <h1 className="developes">Developer by</h1>
        <div className="equipe-About">
          <p className="paragrafoEquipe-About">
            <MembroEquipe
              funcaoEquipe="UI design/Front-End"
              nomeMatricula="- Carla Lopes - 01440665"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Igor Silva - 01609891"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="João Siqueira - 01590594"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Thiago Souza – 01582033"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Iago Silva – 01598123"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Alexandre Silva - 01648836"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Ottom Oliveira - 01644403 "
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Breno Santos – 10008876"
            />
            <MembroEquipe
              funcaoEquipe=""
              nomeMatricula="Arthur Santos - 01570824"
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
